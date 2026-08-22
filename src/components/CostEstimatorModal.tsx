import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Calculator, 
  Check, 
  ArrowRight, 
  ArrowLeft,
  MessageSquare, 
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { JURISDICTIONS, calculateSetupCost } from '../data/pricingData';
import { CalculatorState } from '../types';
import { generateCalculatorQuoteWhatsAppUrl, trackConversion } from '../lib/tracking';
import { TRANSLATIONS } from '../data/translations';
import { AnimatedCounter } from './motion/MotionPrimitives';

interface CostEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  isArabic?: boolean;
}

export const CostEstimatorModal: React.FC<CostEstimatorModalProps> = ({ isOpen, onClose, isArabic = false }) => {
  const [calcState, setCalcState] = useState<CalculatorState>({
    jurisdictionId: 'auh-mainland',
    visaCount: 1,
    officeType: 'flexi',
    includeVatAndTaxRegistration: true,
    includeInvestorGoldenVisa: false,
    includeCorporateBankAssistance: true,
    includeBespokeDigitalBranding: false,
  });

  const t = isArabic ? TRANSLATIONS.ar.estimator : TRANSLATIONS.en.estimator;

  const breakdown = useMemo(() => calculateSetupCost(calcState), [calcState]);
  const selectedJurisdiction = useMemo(
    () => JURISDICTIONS.find(j => j.id === calcState.jurisdictionId) || JURISDICTIONS[0],
    [calcState.jurisdictionId]
  );

  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  const handleWhatsAppQuote = () => {
    trackConversion('calculator_lead', {
      jurisdiction: selectedJurisdiction.name,
      totalAED: breakdown.totalAED,
      visas: calcState.visaCount
    });

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const url = generateCalculatorQuoteWhatsAppUrl(
      selectedJurisdiction.name,
      breakdown.totalAED,
      calcState.visaCount,
      calcState.officeType
    );
    window.open(url, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto ${isArabic ? 'font-arabic' : ''}`}>
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
          />
          
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="relative w-full max-w-4xl bg-obsidian-900 border border-white/15 rounded-3xl shadow-2xl shadow-black overflow-hidden flex flex-col my-8 z-10"
          >
            
            {/* Modal Top Bar */}
            <div className="p-6 sm:px-8 border-b border-white/10 flex items-center justify-between bg-obsidian-950/80">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                    {t.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    {t.subtitle}
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Modal Body Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-y-auto max-h-[75vh]">
              
              {/* Left Column: Form & Sliders (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 border-b lg:border-b-0 lg:border-r rtl:lg:border-r-0 rtl:lg:border-l border-white/10">
                
                {/* Step 1: Jurisdiction Selector */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-3">
                    {t.step1Title}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {JURISDICTIONS.map((j) => (
                      <button
                        key={j.id}
                        onClick={() => setCalcState(prev => ({ ...prev, jurisdictionId: j.id }))}
                        className={`p-3 rounded-2xl border text-left rtl:text-right transition-all duration-200 relative ${
                          calcState.jurisdictionId === j.id
                            ? 'bg-emerald-500/10 border-emerald-500/60 shadow-md shadow-emerald-950'
                            : 'bg-obsidian-950/60 border-white/5 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-white line-clamp-1">{j.name}</span>
                          {calcState.jurisdictionId === j.id && (
                            <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-obsidian-950">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          )}
                        </div>
                        <div className="text-[11px] font-mono text-emerald-400">
                          {isArabic ? `${j.baseCost.toLocaleString()} درهم` : `AED ${j.baseCost.toLocaleString()}`}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-1 line-clamp-1">
                          {j.tag}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Visa Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300">
                      {t.step2Title}
                    </label>
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {calcState.visaCount} {calcState.visaCount === 1 ? (isArabic ? 'تأشيرة' : 'Visa') : (isArabic ? 'تأشيرات' : 'Visas')}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={calcState.visaCount}
                    onChange={(e) => setCalcState(prev => ({ ...prev, visaCount: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-obsidian-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                    <span>0 {isArabic ? 'تأشيرة' : 'Visas'}</span>
                    <span>5 {isArabic ? 'تأشيرات' : 'Visas'}</span>
                    <span>10+ {isArabic ? 'تأشيرة' : 'Visas'}</span>
                  </div>
                </div>

                {/* Step 3: Office Space Type */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-3">
                    {t.step3Title}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'flexi', label: t.flexiDesk, desc: isArabic ? 'شاملة في الباقة' : 'Included in Pack', price: 0 },
                      { id: 'dedicated', label: t.physicalOffice, desc: isArabic ? '+6,000 درهم/سنوياً' : '+AED 6,000/yr', price: 6000 },
                      { id: 'warehouse', label: t.virtualOffice, desc: isArabic ? '+18,000 درهم/سنوياً' : '+AED 18,000/yr', price: 18000 },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setCalcState(prev => ({ ...prev, officeType: opt.id as any }))}
                        className={`p-3 rounded-2xl border text-left rtl:text-right transition-all text-xs ${
                          calcState.officeType === opt.id
                            ? 'bg-emerald-500/10 border-emerald-500/60 font-bold'
                            : 'bg-obsidian-950/60 border-white/5 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        <div className="text-white mb-1">{opt.label}</div>
                        <div className="text-[10px] font-mono text-slate-400">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 4: Value-Add Addons */}
                <div className="space-y-3">
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300">
                    {t.step4Title}
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-obsidian-950/60 border border-white/5 cursor-pointer hover:border-white/10">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <input
                        type="checkbox"
                        checked={calcState.includeVatAndTaxRegistration}
                        onChange={(e) => setCalcState(prev => ({ ...prev, includeVatAndTaxRegistration: e.target.checked }))}
                        className="rounded accent-emerald-500 w-4 h-4"
                      />
                      <div className="text-xs">
                        <div className="font-semibold text-white">{t.taxRegLabel}</div>
                        <div className="text-slate-400 text-[11px]">{t.taxRegDesc}</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 shrink-0">+ AED 1,500</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-obsidian-950/60 border border-white/5 cursor-pointer hover:border-white/10">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <input
                        type="checkbox"
                        checked={calcState.includeInvestorGoldenVisa}
                        onChange={(e) => setCalcState(prev => ({ ...prev, includeInvestorGoldenVisa: e.target.checked }))}
                        className="rounded accent-emerald-500 w-4 h-4"
                      />
                      <div className="text-xs">
                        <div className="font-semibold text-white">{t.goldenVisaLabel}</div>
                        <div className="text-slate-400 text-[11px]">{t.goldenVisaDesc}</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 shrink-0">+ AED 8,500</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-obsidian-950/60 border border-white/5 cursor-pointer hover:border-white/10">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <input
                        type="checkbox"
                        checked={calcState.includeCorporateBankAssistance}
                        onChange={(e) => setCalcState(prev => ({ ...prev, includeCorporateBankAssistance: e.target.checked }))}
                        className="rounded accent-emerald-500 w-4 h-4"
                      />
                      <div className="text-xs">
                        <div className="font-semibold text-white">{t.bankLabel}</div>
                        <div className="text-slate-400 text-[11px]">{t.bankDesc}</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 shrink-0">+ AED 2,500</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-obsidian-950/60 border border-white/5 cursor-pointer hover:border-white/10">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <input
                        type="checkbox"
                        checked={calcState.includeBespokeDigitalBranding}
                        onChange={(e) => setCalcState(prev => ({ ...prev, includeBespokeDigitalBranding: e.target.checked }))}
                        className="rounded accent-emerald-500 w-4 h-4"
                      />
                      <div className="text-xs">
                        <div className="font-semibold text-white">{t.digitalBrandingLabel}</div>
                        <div className="text-slate-400 text-[11px]">{t.digitalBrandingDesc}</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-cyan-400 shrink-0">+ AED 4,900</span>
                  </label>

                </div>
              </div>

              {/* Right Column: Live Breakdown & Instant Quote (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 bg-obsidian-950/90 flex flex-col justify-between space-y-6">
                
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    {t.summaryTitle}
                  </div>
                  
                  <div className="p-4 rounded-2xl bg-obsidian-900 border border-white/10 mb-6">
                    <div className="text-xs font-bold text-white mb-1">
                      {selectedJurisdiction.name}
                    </div>
                    <div className="text-[11px] text-slate-400 leading-snug">
                      {selectedJurisdiction.tag}
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse mt-3 pt-3 border-t border-white/5 text-[11px] text-slate-300">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{isArabic ? 'المدة التقديرية: ' : 'Est. Timeline: '}<strong>{breakdown.timelineDays}</strong></span>
                    </div>
                  </div>

                  {/* Itemized Line items */}
                  <div className="space-y-2.5 text-xs">
                    <div className="flex justify-between text-slate-400">
                      <span>{t.breakdownBase}:</span>
                      <span className="font-mono text-slate-200">AED {breakdown.licenseFee.toLocaleString()}</span>
                    </div>

                    {calcState.visaCount > 0 && (
                      <div className="flex justify-between text-slate-400">
                        <span>{t.breakdownVisas} ({calcState.visaCount}):</span>
                        <span className="font-mono text-slate-200">AED {breakdown.visaFees.toLocaleString()}</span>
                      </div>
                    )}

                    {breakdown.officeFee > 0 && (
                      <div className="flex justify-between text-slate-400">
                        <span>{t.breakdownOffice}:</span>
                        <span className="font-mono text-slate-200">AED {breakdown.officeFee.toLocaleString()}</span>
                      </div>
                    )}

                    {breakdown.vatTaxFee > 0 && (
                      <div className="flex justify-between text-slate-400">
                        <span>{isArabic ? 'التسجيل الضريبي:' : 'Corporate Tax Registration:'}</span>
                        <span className="font-mono text-slate-200">AED {breakdown.vatTaxFee.toLocaleString()}</span>
                      </div>
                    )}

                    {breakdown.goldenVisaFee > 0 && (
                      <div className="flex justify-between text-slate-400">
                        <span>{isArabic ? 'الإقامة الذهبية 10 سنوات:' : '10-Yr Golden Visa Processing:'}</span>
                        <span className="font-mono text-slate-200">AED {breakdown.goldenVisaFee.toLocaleString()}</span>
                      </div>
                    )}

                    {breakdown.bankingFee > 0 && (
                      <div className="flex justify-between text-slate-400">
                        <span>{isArabic ? 'فتح الحساب البنكي:' : 'Corporate Banking Pack:'}</span>
                        <span className="font-mono text-slate-200">AED {breakdown.bankingFee.toLocaleString()}</span>
                      </div>
                    )}

                    {breakdown.digitalFee > 0 && (
                      <div className="flex justify-between text-slate-400">
                        <span>{isArabic ? 'الموقع والهوية الرقمية:' : 'Digital Brand & Web Launch:'}</span>
                        <span className="font-mono text-cyan-300">AED {breakdown.digitalFee.toLocaleString()}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-slate-500 pt-2 border-t border-white/5 text-[11px]">
                      <span>{isArabic ? 'ضريبة القيمة المضافة (5%):' : 'UAE VAT (5%):'}</span>
                      <span className="font-mono">AED {breakdown.vatAmount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Total Highlight with Animated Rolling Counter */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-obsidian-900 to-obsidian-850 border border-emerald-500/30 relative overflow-hidden">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                    {t.totalLabel}
                  </div>
                  <div className="flex items-baseline space-x-2 rtl:space-x-reverse mb-1">
                    <span className="text-3xl sm:text-4xl font-display font-black text-white font-mono">
                      AED <AnimatedCounter value={`AED ${breakdown.totalAED.toLocaleString()}`} />
                    </span>
                    <span className="text-xs font-mono text-emerald-400">
                      (~${breakdown.totalUSD.toLocaleString()} USD)
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {t.officialGovFees}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleWhatsAppQuote}
                    className="w-full py-4 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-obsidian-950 font-display font-bold text-sm flex items-center justify-center space-x-2 rtl:space-x-reverse shadow-xl shadow-emerald-500/25 transition-all"
                  >
                    <MessageSquare className="w-4 h-4 fill-obsidian-950" />
                    <span>{t.whatsappCta}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </motion.button>

                  <p className="text-[10px] text-center text-slate-500 leading-tight">
                    {t.disclaimerNote}
                  </p>
                </div>

              </div>

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
