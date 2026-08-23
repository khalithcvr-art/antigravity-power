import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Calculator, 
  Check, 
  ArrowRight, 
  ArrowLeft,
  MessageSquare, 
  Clock,
  Printer,
  ShieldCheck,
  Building2,
  FileCheck,
  Download
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { JURISDICTIONS, calculateSetupCost } from '../data/pricingData';
import { CalculatorState } from '../types';
import { generateCalculatorQuoteWhatsAppUrl, trackConversion } from '../lib/tracking';
import { TRANSLATIONS } from '../data/translations';
import { AnimatedCounter } from './motion/MotionPrimitives';
import { COMPANY_INFO } from '../data/siteData';

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

  const [activeFeeView, setActiveFeeView] = useState<'all' | 'gov' | 'service'>('all');

  const t = isArabic ? TRANSLATIONS.ar.estimator : TRANSLATIONS.en.estimator;

  const breakdown = useMemo(() => calculateSetupCost(calcState), [calcState]);
  const selectedJurisdiction = useMemo(
    () => JURISDICTIONS.find(j => j.id === calcState.jurisdictionId) || JURISDICTIONS[0],
    [calcState.jurisdictionId]
  );

  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  // Split Government Fees vs Corporate Service Fees
  const govFeesTotal = breakdown.licenseFee + breakdown.visaFees + breakdown.officeFee;
  const corporateServiceTotal = breakdown.vatTaxFee + breakdown.goldenVisaFee + breakdown.bankingFee + breakdown.digitalFee;

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

  const handlePrintQuotation = () => {
    trackConversion('quotation_print', {
      jurisdiction: selectedJurisdiction.name,
      totalAED: breakdown.totalAED
    });
    window.print();
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
            className="fixed inset-0 bg-black/85 backdrop-blur-xl"
          />
          
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="relative w-full max-w-4xl bg-obsidian-900 border border-white/15 rounded-3xl shadow-2xl shadow-black overflow-hidden flex flex-col my-8 z-10 print:bg-white print:text-black print:border-none print:shadow-none"
          >
            
            {/* Printable Official Header (Visible during Print / PDF Export) */}
            <div className="hidden print:block p-8 border-b-2 border-black/20 text-black">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-black">{COMPANY_INFO.legalName}</h1>
                  <p className="text-sm text-gray-600">Commercial License: CN-6307408 · Tax Reg: 100582910400003</p>
                  <p className="text-xs text-gray-500">Haibu, Level 1, Abu Dhabi Mall, Al Zahiya, Abu Dhabi, UAE</p>
                  <p className="text-xs text-gray-500">Call: +971 56 4425 950 · WhatsApp: +971 58 5858 816</p>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono font-bold uppercase text-gray-500">Official Estimate Quote</div>
                  <div className="text-lg font-black font-mono">EXP-EST-2026</div>
                  <div className="text-xs text-gray-500">{new Date().toLocaleDateString('en-GB')}</div>
                </div>
              </div>
            </div>

            {/* Modal Top Bar (Screen View) */}
            <div className="p-6 sm:px-8 border-b border-white/10 flex items-center justify-between bg-obsidian-950/80 print:hidden">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                    {t.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    {t.subtitle} · <span className="text-emerald-400 font-mono">CN-6307408</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrintQuotation}
                  title="Print / Save Official PDF Quotation"
                  className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-semibold flex items-center space-x-1.5 rtl:space-x-reverse transition-all"
                >
                  <Printer className="w-4 h-4 text-emerald-400" />
                  <span className="hidden sm:inline">{isArabic ? 'طباعة / PDF' : 'Print PDF'}</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Modal Body Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-y-auto max-h-[75vh] print:max-h-none print:overflow-visible">
              
              {/* Left Column: Form & Sliders (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 border-b lg:border-b-0 lg:border-r rtl:lg:border-r-0 rtl:lg:border-l border-white/10 print:col-span-12 print:border-none print:p-4">
                
                {/* Step 1: Jurisdiction Selector */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-3 print:text-black print:font-bold">
                    {t.step1Title}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {JURISDICTIONS.map((j) => (
                      <button
                        key={j.id}
                        onClick={() => setCalcState(prev => ({ ...prev, jurisdictionId: j.id }))}
                        className={`p-3 rounded-2xl border text-left rtl:text-right transition-all duration-200 relative ${
                          calcState.jurisdictionId === j.id
                            ? 'bg-emerald-500/10 border-emerald-500/60 shadow-md shadow-emerald-950 print:bg-gray-100 print:border-black'
                            : 'bg-obsidian-950/60 border-white/5 hover:border-white/20 print:bg-white print:border-gray-200'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-white print:text-black line-clamp-1">{j.name}</span>
                          {calcState.jurisdictionId === j.id && (
                            <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-obsidian-950">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          )}
                        </div>
                        <div className="text-[11px] font-mono text-emerald-400 print:text-black font-bold">
                          {isArabic ? `${j.baseCost.toLocaleString()} درهم` : `AED ${j.baseCost.toLocaleString()}`}
                        </div>
                        <div className="text-[10px] text-slate-400 print:text-gray-600 mt-1 line-clamp-1">
                          {j.tag}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Visas Count Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300 print:text-black print:font-bold">
                      {t.step2Title}
                    </label>
                    <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 print:bg-gray-100 print:text-black">
                      {calcState.visaCount} {isArabic ? (calcState.visaCount === 1 ? 'تأشيرة واحدة' : 'تأشيرات') : (calcState.visaCount === 1 ? 'Visa' : 'Visas')}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={10}
                    value={calcState.visaCount}
                    onChange={(e) => setCalcState(prev => ({ ...prev, visaCount: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-obsidian-950 rounded-lg appearance-none cursor-pointer accent-emerald-500 border border-white/10"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>0 ({isArabic ? 'بدون إقامة' : 'Zero Visas'})</span>
                    <span>5 Visas</span>
                    <span>10+ Visas</span>
                  </div>
                </div>

                {/* Step 3: Office / Facility Space */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-3 print:text-black print:font-bold">
                    {t.step3Title}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'flexi', label: t.flexiDesk, price: isArabic ? 'مشمول' : 'Included' },
                      { id: 'shared', label: t.physicalOffice, price: '+ AED 5,000' },
                      { id: 'dedicated', label: t.virtualOffice, price: '+ AED 14,000' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setCalcState(prev => ({ ...prev, officeType: opt.id as any }))}
                        className={`p-3 rounded-xl border text-center transition-all text-xs ${
                          calcState.officeType === opt.id
                            ? 'bg-emerald-500/15 border-emerald-500 text-white font-bold print:bg-gray-100 print:text-black'
                            : 'bg-obsidian-950/60 border-white/5 text-slate-400 hover:border-white/20 print:bg-white'
                        }`}
                      >
                        <div>{opt.label}</div>
                        <div className="text-[10px] font-mono text-emerald-400 print:text-black mt-1">{opt.price}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 4: Value Added Add-ons */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 print:text-black print:font-bold">
                    {t.step4Title}
                  </div>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-obsidian-950/60 border border-white/5 cursor-pointer hover:border-white/10">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <input
                        type="checkbox"
                        checked={calcState.includeVatAndTaxRegistration}
                        onChange={(e) => setCalcState(prev => ({ ...prev, includeVatAndTaxRegistration: e.target.checked }))}
                        className="rounded accent-emerald-500 w-4 h-4"
                      />
                      <div className="text-xs">
                        <div className="font-semibold text-white print:text-black">{t.taxRegLabel}</div>
                        <div className="text-slate-400 print:text-gray-500 text-[11px]">{t.taxRegDesc}</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 print:text-black shrink-0">+ AED 1,500</span>
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
                        <div className="font-semibold text-white print:text-black">{t.bankLabel}</div>
                        <div className="text-slate-400 print:text-gray-500 text-[11px]">{t.bankDesc}</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 print:text-black shrink-0">+ AED 2,500</span>
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
                        <div className="font-semibold text-white print:text-black">{t.digitalBrandingLabel}</div>
                        <div className="text-slate-400 print:text-gray-500 text-[11px]">{t.digitalBrandingDesc}</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-cyan-400 print:text-black shrink-0">+ AED 4,900</span>
                  </label>

                </div>
              </div>

              {/* Right Column: Live Breakdown & Official Quotation Summary (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 bg-obsidian-950/90 flex flex-col justify-between space-y-6 print:col-span-12 print:bg-white print:p-4">
                
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 print:text-black font-bold">
                      {t.summaryTitle}
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono">
                      Official Rates
                    </span>
                  </div>
                  
                  <div className="p-4 rounded-2xl bg-obsidian-900 border border-white/10 mb-4 print:border-black print:bg-gray-50">
                    <div className="text-xs font-bold text-white print:text-black mb-1">
                      {selectedJurisdiction.name}
                    </div>
                    <div className="text-[11px] text-slate-400 print:text-gray-600 leading-snug">
                      {selectedJurisdiction.tag}
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse mt-3 pt-3 border-t border-white/5 print:border-gray-200 text-[11px] text-slate-300 print:text-black">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{isArabic ? 'المدة التقديرية للإنجاز: ' : 'Turnaround Timeline: '}<strong>{breakdown.timelineDays}</strong></span>
                    </div>
                  </div>

                  {/* Itemized Line items */}
                  <div className="space-y-2.5 text-xs">
                    <div className="flex justify-between text-slate-400 print:text-black">
                      <span>{t.breakdownBase}:</span>
                      <span className="font-mono text-slate-200 print:text-black font-semibold">AED {breakdown.licenseFee.toLocaleString()}</span>
                    </div>

                    {calcState.visaCount > 0 && (
                      <div className="flex justify-between text-slate-400 print:text-black">
                        <span>{t.breakdownVisas} ({calcState.visaCount}):</span>
                        <span className="font-mono text-slate-200 print:text-black font-semibold">AED {breakdown.visaFees.toLocaleString()}</span>
                      </div>
                    )}

                    {breakdown.officeFee > 0 && (
                      <div className="flex justify-between text-slate-400 print:text-black">
                        <span>{t.breakdownOffice}:</span>
                        <span className="font-mono text-slate-200 print:text-black font-semibold">AED {breakdown.officeFee.toLocaleString()}</span>
                      </div>
                    )}

                    {breakdown.vatTaxFee > 0 && (
                      <div className="flex justify-between text-slate-400 print:text-black">
                        <span>{isArabic ? 'التسجيل الضريبي وإعداد الملف:' : 'Corporate Tax & FTA Setup:'}</span>
                        <span className="font-mono text-slate-200 print:text-black font-semibold">AED {breakdown.vatTaxFee.toLocaleString()}</span>
                      </div>
                    )}

                    {breakdown.goldenVisaFee > 0 && (
                      <div className="flex justify-between text-slate-400 print:text-black">
                        <span>{isArabic ? 'الإقامة الذهبية 10 سنوات:' : '10-Yr Golden Visa Processing:'}</span>
                        <span className="font-mono text-slate-200 print:text-black font-semibold">AED {breakdown.goldenVisaFee.toLocaleString()}</span>
                      </div>
                    )}

                    {breakdown.bankingFee > 0 && (
                      <div className="flex justify-between text-slate-400 print:text-black">
                        <span>{isArabic ? 'المرافقة البنكية للشركات:' : 'Corporate Banking Assistance:'}</span>
                        <span className="font-mono text-slate-200 print:text-black font-semibold">AED {breakdown.bankingFee.toLocaleString()}</span>
                      </div>
                    )}

                    {breakdown.digitalFee > 0 && (
                      <div className="flex justify-between text-slate-400 print:text-black">
                        <span>{isArabic ? 'الموقع والهوية الرقمية:' : 'Digital Brand & Web Launch:'}</span>
                        <span className="font-mono text-cyan-300 print:text-black font-semibold">AED {breakdown.digitalFee.toLocaleString()}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-slate-500 print:text-gray-600 pt-2 border-t border-white/5 print:border-gray-300 text-[11px]">
                      <span>{isArabic ? 'ضريبة القيمة المضافة (5%):' : 'UAE VAT (5%):'}</span>
                      <span className="font-mono">AED {breakdown.vatAmount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Total Highlight with Animated Rolling Counter */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-obsidian-900 to-obsidian-850 border border-emerald-500/30 relative overflow-hidden print:border-black print:bg-white">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 print:text-gray-600 mb-1">
                    {t.totalLabel}
                  </div>
                  <div className="flex items-baseline space-x-2 rtl:space-x-reverse mb-1">
                    <span className="text-3xl sm:text-4xl font-display font-black text-white print:text-black font-mono">
                      AED <AnimatedCounter value={`AED ${breakdown.totalAED.toLocaleString()}`} />
                    </span>
                    <span className="text-xs font-mono text-emerald-400 print:text-gray-700">
                      (~${breakdown.totalUSD.toLocaleString()} USD)
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 print:text-gray-600 flex items-center space-x-1 rtl:space-x-reverse">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{t.officialGovFees}</span>
                  </div>
                </div>

                {/* Action Buttons (Hidden during Print) */}
                <div className="space-y-2 print:hidden">
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

                  <div className="flex items-center justify-between gap-2 pt-1">
                    <button
                      onClick={handlePrintQuotation}
                      className="flex-1 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium border border-white/10 flex items-center justify-center space-x-1.5 rtl:space-x-reverse transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{isArabic ? 'تصدير عرض السعر PDF' : 'Download PDF Quote'}</span>
                    </button>
                  </div>

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
