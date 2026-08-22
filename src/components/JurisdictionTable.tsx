import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowLeft,
  Scale
} from 'lucide-react';
import { JURISDICTIONS } from '../data/pricingData';
import { generateWhatsAppUrl, trackConversion } from '../lib/tracking';
import { TRANSLATIONS } from '../data/translations';

interface JurisdictionTableProps {
  onOpenEstimator: () => void;
  isArabic?: boolean;
}

export const JurisdictionTable: React.FC<JurisdictionTableProps> = ({ onOpenEstimator, isArabic = false }) => {
  const [selectedCity, setSelectedCity] = useState<'All' | 'Abu Dhabi' | 'Dubai' | 'Ajman'>('All');
  const t = isArabic ? TRANSLATIONS.ar.jurisdictions : TRANSLATIONS.en.jurisdictions;

  const filtered = selectedCity === 'All' 
    ? JURISDICTIONS 
    : JURISDICTIONS.filter(j => j.city === selectedCity);

  const filterOptions = [
    { key: 'All', label: t.filterAll },
    { key: 'Abu Dhabi', label: t.filterAuh },
    { key: 'Dubai', label: t.filterDxb },
    { key: 'Ajman', label: t.filterAjman },
  ] as const;

  const handleInquire = (name: string) => {
    trackConversion('whatsapp_click', { jurisdiction: name });
    const text = isArabic 
      ? `مرحباً إكسبيديا، أود الحصول على مزيد من التفاصيل وعرض أسعار لتأسيس شركة في *${name}*.`
      : `Hello Expedia, I would like more details and an exact quote on setting up a company in *${name}*.`;
    window.open(generateWhatsAppUrl(text), '_blank');
  };

  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section id="jurisdictions" className={`py-24 relative bg-obsidian-950/90 border-t border-white/5 ${isArabic ? 'font-arabic' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider text-slate-300 mb-3">
              <Scale className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.badge}</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              {t.title} <br className="hidden sm:inline" />
              <span className="text-gradient-emerald">{t.titleHighlight}</span>
            </h2>
          </div>

          {/* City Filter Pills */}
          <div className="flex items-center space-x-1.5 rtl:space-x-reverse p-1 rounded-xl bg-obsidian-900 border border-white/10 text-xs overflow-x-auto">
            {filterOptions.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setSelectedCity(opt.key)}
                className={`px-3.5 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap ${
                  selectedCity === opt.key
                    ? 'bg-emerald-500 text-obsidian-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Structured Data Table (Desktop) */}
        <div className="hidden lg:block overflow-hidden rounded-3xl border border-white/10 glass-panel shadow-2xl">
          <table className="w-full text-left rtl:text-right border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-obsidian-900/90 text-[11px] font-mono uppercase tracking-wider text-slate-400">
                <th className="p-5">{t.colJurisdiction}</th>
                <th className="p-5">{t.colTypeCity}</th>
                <th className="p-5">{t.colBaseCost}</th>
                <th className="p-5">{t.colForeignOwnership}</th>
                <th className="p-5">{t.colTurnaround}</th>
                <th className="p-5">{t.colTax}</th>
                <th className="p-5 text-right rtl:text-left">{t.colAction}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs text-slate-200">
              {filtered.map((j) => {
                const name = isArabic && j.nameAr ? j.nameAr : j.name;
                const popularFor = isArabic && j.popularForAr ? j.popularForAr : j.popularFor;
                const type = isArabic && j.typeAr ? j.typeAr : j.type;
                const city = isArabic && j.cityAr ? j.cityAr : j.city;
                const foreignOwnership = isArabic && j.foreignOwnershipAr ? j.foreignOwnershipAr : j.foreignOwnership;
                const processingTime = isArabic && j.processingTimeAr ? j.processingTimeAr : j.processingTime;
                const corporateTaxStatus = isArabic && j.corporateTaxStatusAr ? j.corporateTaxStatusAr : j.corporateTaxStatus;

                return (
                  <tr key={j.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="p-5">
                      <div className="font-display font-bold text-sm text-white group-hover:text-emerald-300 transition-colors">
                        {name}
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                        {popularFor}
                      </div>
                    </td>
                    <td className="p-5">
                      <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
                        {type} · {city}
                      </span>
                    </td>
                    <td className="p-5 font-mono text-sm font-bold text-emerald-400">
                      {isArabic ? `${j.baseCost.toLocaleString()} درهم` : `AED ${j.baseCost.toLocaleString()}`}
                    </td>
                    <td className="p-5 font-medium text-slate-300">
                      {foreignOwnership}
                    </td>
                    <td className="p-5 font-mono text-slate-300">
                      {processingTime}
                    </td>
                    <td className="p-5 text-[11px] text-slate-400 max-w-xs">
                      {corporateTaxStatus}
                    </td>
                    <td className="p-5 text-right rtl:text-left">
                      <button
                        onClick={() => handleInquire(name)}
                        className="px-3.5 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500 hover:text-obsidian-950 border border-emerald-500/30 text-emerald-300 text-xs font-semibold transition-all inline-flex items-center space-x-1 rtl:space-x-reverse"
                      >
                        <span>{t.inquireBtn}</span>
                        <ArrowIcon className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile Card Grid (Responsive Fallback) */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((j) => {
            const name = isArabic && j.nameAr ? j.nameAr : j.name;
            const popularFor = isArabic && j.popularForAr ? j.popularForAr : j.popularFor;
            const type = isArabic && j.typeAr ? j.typeAr : j.type;
            const city = isArabic && j.cityAr ? j.cityAr : j.city;
            const foreignOwnership = isArabic && j.foreignOwnershipAr ? j.foreignOwnershipAr : j.foreignOwnership;
            const processingTime = isArabic && j.processingTimeAr ? j.processingTimeAr : j.processingTime;
            const corporateTaxStatus = isArabic && j.corporateTaxStatusAr ? j.corporateTaxStatusAr : j.corporateTaxStatus;

            return (
              <div key={j.id} className="p-6 rounded-2xl glass-panel border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400">
                    {type} · {city}
                  </span>
                  <span className="text-emerald-400 font-mono font-bold text-sm">
                    {isArabic ? `${j.baseCost.toLocaleString()} درهم` : `AED ${j.baseCost.toLocaleString()}`}
                  </span>
                </div>

                <div>
                  <h4 className="font-display font-bold text-lg text-white">{name}</h4>
                  <p className="text-xs text-slate-400 mt-1">{popularFor}</p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-white/5 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-500">{isArabic ? 'الملكية:' : 'Ownership:'}</span>
                    <span>{foreignOwnership}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{isArabic ? 'المدة:' : 'Timeline:'}</span>
                    <span className="font-mono">{processingTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{isArabic ? 'الضريبة:' : 'Tax Treatment:'}</span>
                    <span className="text-[11px] text-slate-400">{corporateTaxStatus}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleInquire(name)}
                  className="w-full py-2.5 rounded-xl bg-emerald-500 font-bold text-obsidian-950 text-xs flex items-center justify-center space-x-1.5 rtl:space-x-reverse shadow-md shadow-emerald-500/20"
                >
                  <span>{t.inquireBtn}</span>
                  <ArrowIcon className="w-3 h-3" />
                </button>
              </div>
            );
          })}
        </div>

        {/* AEO Summary Card */}
        <div className="mt-8 p-6 rounded-2xl bg-obsidian-900 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-white block mb-0.5">
              {isArabic ? 'هل تحتاج إلى دراسة جدوى مخصصة لهيكلة شركتك؟' : 'Need customized regulatory structuring?'}
            </strong>
            {isArabic 
              ? 'يقدم فريق إكسبيديا دراسات جدوى شاملة تطابق رموز الأنشطة التجارية لشركتك مع أقل المناطق تكلفة وضريبة في دولة الإمارات.' 
              : 'Expedia Business Services provides comparative feasibility analyses matching your business activity codes with the lowest tax and licensing jurisdictions in the UAE.'}
          </div>
          <button
            onClick={onOpenEstimator}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center space-x-2 rtl:space-x-reverse transition-colors"
          >
            <span>{t.calculatorCta}</span>
            <ArrowIcon className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
