import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ArrowLeft,
  Scale,
  Sparkles,
  Zap,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Code2
} from 'lucide-react';
import { JURISDICTIONS } from '../data/pricingData';
import { generateWhatsAppUrl, trackConversion } from '../lib/tracking';
import { TRANSLATIONS } from '../data/translations';
import { ScrollReveal } from './motion/MotionPrimitives';
import { DualEngineMode } from '../types';

interface JurisdictionTableProps {
  mode?: DualEngineMode;
  onOpenEstimator: () => void;
  isArabic?: boolean;
  onNavigateSlug?: (slug: string) => void;
}

export const JurisdictionTable: React.FC<JurisdictionTableProps> = ({ 
  mode = 'corporate',
  onOpenEstimator, 
  isArabic = false, 
  onNavigateSlug 
}) => {
  const [selectedCity, setSelectedCity] = useState<'All' | 'Abu Dhabi' | 'Dubai' | 'Ajman'>('All');
  const tCorp = isArabic ? TRANSLATIONS.ar.jurisdictions : TRANSLATIONS.en.jurisdictions;

  const DIGITAL_COMPARISON = [
    {
      feature: isArabic ? 'سرعة التحميل ومؤشرات الويب الأساسية (LCP)' : 'Page Speed & Core Web Vitals (LCP)',
      featureAr: 'سرعة التحميل ومؤشرات الويب الأساسية (LCP)',
      generic: isArabic ? '3.5 - 5.0 ثوانٍ (بطيء / فقدان العملاء)' : '3.5s – 5.0s (Slow / High Bounce)',
      agency: isArabic ? '2.5 - 3.5 ثوانٍ (متوسط)' : '2.5s – 3.5s (Average Agency Theme)',
      expedia: isArabic ? '⚡ < 0.4 ثانية (تحميل فوري 60fps)' : '⚡ < 0.4s (Sub-Second 60FPS Edge)'
    },
    {
      feature: isArabic ? 'الظهور في محركات الذكاء الاصطناعي (AEO/GEO)' : 'AEO & AI Search Readiness (ChatGPT/Perplexity)',
      featureAr: 'الظهور في محركات الذكاء الاصطناعي (AEO/GEO)',
      generic: isArabic ? 'غير مهيأ (نصوص غير منظمة)' : 'Zero Schema (Unstructured Data)',
      agency: isArabic ? 'وسوم ميتا تقليدية فقط' : 'Basic Meta Tags Only',
      expedia: isArabic ? 'مخططات Schema.org و JSON-LD كاملة' : '100% JSON-LD Knowledge Graph'
    },
    {
      feature: isArabic ? 'مواءمة اللغة العربية والاتجاه من اليمين (RTL)' : 'Bilingual Arabic/English RTL Architecture',
      featureAr: 'مواءمة اللغة العربية والاتجاه من اليمين (RTL)',
      generic: isArabic ? 'إضافات ترجمة مشوهة للتصميم' : 'Clunky Plugins (Layout Shifts)',
      agency: isArabic ? 'ترجمة نصوص ثابتة' : 'Static Multi-Page Translation',
      expedia: isArabic ? 'هندسة طباعية وتصميم أصيل داعم للعربية' : 'Native Directional Typography Engine'
    },
    {
      feature: isArabic ? 'روبوتات واتساب الذكية وإدارة العملاء' : 'WhatsApp AI Agents & Autonomous CRM Sync',
      featureAr: 'روبوتات واتساب الذكية وإدارة العملاء',
      generic: isArabic ? 'غير متصل / رابط واتساب عادي' : 'Standard Web Link Only',
      agency: isArabic ? 'استقبال رسائل يدوي' : 'Manual Lead Inbox',
      expedia: isArabic ? 'أتمتة كاملة 24/7 مع إصدار عروض الأسعار' : '24/7 Autonomous Lead & Quote Engine'
    },
    {
      feature: isArabic ? 'سيادة البيانات وعزل قواعد البيانات' : 'Data Sovereignty & Isolated PostgreSQL Database',
      featureAr: 'سيادة البيانات وعزل قواعد البيانات',
      generic: isArabic ? 'استضافة مشتركة عامة' : 'Shared Public US Server',
      agency: isArabic ? 'استضافة إقليمية قياسية' : 'Standard Agency Server',
      expedia: isArabic ? 'عزل كامل RLS واستضافة سحابية بالخليج' : 'Sovereign UAE/GCC Edge + PostgreSQL RLS'
    },
    {
      feature: isArabic ? 'ملكية الشيفرة البرمجية والمشروع' : 'Full Source Code & IP Ownership Handover',
      featureAr: 'ملكية الشيفرة البرمجية والمشروع',
      generic: isArabic ? 'مقيد بمنصة القوالب' : 'Platform Vendor Lock-in',
      agency: isArabic ? 'اشتراك صيانة شهري ملزم' : 'Agency Retainer Dependency',
      expedia: isArabic ? 'ملكية حصرية وكاملة 100% للعميل' : '100% Client Full Codebase Handover'
    }
  ];

  const getSlugForJurisdiction = (id: string, name: string): string => {
    if (id.includes('meydan') || name.toLowerCase().includes('meydan')) return 'meydan-free-zone';
    if (id.includes('masdar') || name.toLowerCase().includes('masdar')) return 'masdar-city-free-zone';
    if (id.includes('ifza') || name.toLowerCase().includes('ifza')) return 'ifza';
    if (id.includes('ajman') || name.toLowerCase().includes('ajman')) return 'ajman-free-zone';
    if (id.includes('mainland') || name.toLowerCase().includes('mainland') || id.includes('ded') || id.includes('added')) return 'mainland-business-setup';
    return 'meydan-free-zone';
  };

  const handleRowClick = (j: any) => {
    const slug = getSlugForJurisdiction(j.id, j.name);
    if (onNavigateSlug) {
      onNavigateSlug(slug);
    } else {
      window.location.href = `/${slug}`;
    }
  };

  const filtered = selectedCity === 'All' 
    ? JURISDICTIONS 
    : JURISDICTIONS.filter(j => j.city === selectedCity);

  const filterOptions = [
    { key: 'All', label: tCorp.filterAll },
    { key: 'Abu Dhabi', label: tCorp.filterAuh },
    { key: 'Dubai', label: tCorp.filterDxb },
    { key: 'Ajman', label: tCorp.filterAjman },
  ] as const;

  const handleInquire = (name: string) => {
    trackConversion('whatsapp_click', { jurisdiction: name });
    const text = isArabic 
      ? `مرحباً إكسبيديا، أود الحصول على مزيد من التفاصيل وعرض أسعار لتأسيس شركة في *${name}*.`
      : `Hello Expedia, I would like more details and an exact quote on setting up a company in *${name}*.`;
    window.open(generateWhatsAppUrl(text), '_blank');
  };

  const handleDigitalInquiry = () => {
    trackConversion('whatsapp_click', { source: 'digital_comparison_table' });
    const text = isArabic 
      ? `مرحباً إكسبيديا الرقمية، أود استشارة فريقكم الهندسي لتطوير منصة رقمية سيادية بمواصفات متقدمة.`
      : `Hello Expedia Digital, I would like to consult your engineering team for building a sovereign digital platform.`;
    window.open(generateWhatsAppUrl(text), '_blank');
  };

  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  const headerBadge = mode === 'corporate' 
    ? tCorp.badge 
    : (isArabic ? 'مصفوفة المقارنة الهندسية للمنصات الرقمية' : 'Digital Platform Architecture Matrix');
  
  const headerTitle = mode === 'corporate'
    ? tCorp.title
    : (isArabic ? 'مقارنة المنصات المخصصة مقابل' : 'Bespoke Sovereign Tech vs.');
  
  const headerTitleHighlight = mode === 'corporate'
    ? tCorp.titleHighlight
    : (isArabic ? 'القوالب الجاهزة والوكالات التقليدية' : 'Generic Templates & Agencies');
  
  const headerSubtitle = mode === 'corporate'
    ? (isArabic ? 'دليل مقارنة شامل لتكاليف وإجراءات تأسيس الشركات في البر الرئيسي والمناطق الحرة لعام 2026' : 'Comprehensive comparison of mainland & free zone corporate structuring costs and statutory timelines in 2026.')
    : (isArabic ? 'لماذا تختار كبرى الشركات في الإمارات هندسة إكسبيديا الرقمية المخصصة بدلاً من المواقع التقليدية البطيئة؟' : 'Why high-growth UAE enterprises choose Expedia custom full-stack architecture over generic WordPress builders.');

  return (
    <section id="jurisdictions" className={`py-24 relative bg-obsidian-950/90 border-t border-white/5 overflow-hidden ${isArabic ? 'font-arabic' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider text-slate-300 mb-3">
                {mode === 'corporate' ? (
                  <Scale className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                )}
                <span>{headerBadge}</span>
              </div>
              
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
                {headerTitle} <br className="hidden sm:inline" />
                <span className={mode === 'corporate' ? 'text-gradient-emerald' : 'bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400'}>
                  {headerTitleHighlight}
                </span>
              </h2>
              <p className="text-slate-400 text-sm mt-3 max-w-2xl leading-relaxed">
                {headerSubtitle}
              </p>
            </div>

            {/* City Filter Pills (Corporate Mode Only) */}
            {mode === 'corporate' && (
              <div className="flex items-center space-x-1.5 rtl:space-x-reverse p-1 rounded-xl bg-obsidian-900 border border-white/10 text-xs overflow-x-auto">
                {filterOptions.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => setSelectedCity(opt.key)}
                    className={`relative px-3.5 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap z-10 ${
                      selectedCity === opt.key
                        ? 'text-obsidian-950 font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {selectedCity === opt.key && (
                      <motion.div
                        layoutId="activeCityTab"
                        className="absolute inset-0 bg-emerald-500 rounded-lg shadow-sm -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>

        {mode === 'corporate' ? (
          <>
            {/* Corporate Structured Data Table (Desktop) */}
            <ScrollReveal>
              <div className="hidden lg:block overflow-hidden rounded-3xl border border-white/10 glass-panel shadow-2xl">
                <table className="w-full text-left rtl:text-right border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-obsidian-900/90 text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      <th className="p-5">{tCorp.colJurisdiction}</th>
                      <th className="p-5">{tCorp.colTypeCity}</th>
                      <th className="p-5">{tCorp.colBaseCost}</th>
                      <th className="p-5">{tCorp.colForeignOwnership}</th>
                      <th className="p-5">{tCorp.colTurnaround}</th>
                      <th className="p-5">{tCorp.colTax}</th>
                      <th className="p-5 text-right rtl:text-left">{tCorp.colAction}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs text-slate-200">
                    <AnimatePresence mode="popLayout">
                      {filtered.map((j) => {
                        const name = isArabic && j.nameAr ? j.nameAr : j.name;
                        const popularFor = isArabic && j.popularForAr ? j.popularForAr : j.popularFor;
                        const type = isArabic && j.typeAr ? j.typeAr : j.type;
                        const city = isArabic && j.cityAr ? j.cityAr : j.city;
                        const foreignOwnership = isArabic && j.foreignOwnershipAr ? j.foreignOwnershipAr : j.foreignOwnership;
                        const processingTime = isArabic && j.processingTimeAr ? j.processingTimeAr : j.processingTime;
                        const corporateTaxStatus = isArabic && j.corporateTaxStatusAr ? j.corporateTaxStatusAr : j.corporateTaxStatus;

                        return (
                          <motion.tr 
                            key={j.id} 
                            layout
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25 }}
                            className="hover:bg-white/[0.03] transition-colors group"
                          >
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
                              <div className="flex items-center justify-end rtl:justify-start gap-2">
                                <button
                                  onClick={() => handleRowClick(j)}
                                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-medium transition-all"
                                >
                                  {tCorp.learnMore}
                                </button>
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => handleInquire(name)}
                                  className="px-3.5 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500 hover:text-obsidian-950 border border-emerald-500/30 text-emerald-300 text-xs font-semibold transition-all inline-flex items-center space-x-1 rtl:space-x-reverse shadow-sm"
                                >
                                  <span>{tCorp.inquireBtn}</span>
                                  <ArrowIcon className="w-3 h-3" />
                                </motion.button>
                              </div>
                            </td>
                          </motion.tr>
                        );
                      })}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>
            </ScrollReveal>

            {/* Mobile Card Grid (Corporate Responsive Fallback) */}
            <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
              <AnimatePresence mode="popLayout">
                {filtered.map((j) => {
                  const name = isArabic && j.nameAr ? j.nameAr : j.name;
                  const popularFor = isArabic && j.popularForAr ? j.popularForAr : j.popularFor;
                  const type = isArabic && j.typeAr ? j.typeAr : j.type;
                  const city = isArabic && j.cityAr ? j.cityAr : j.city;
                  const foreignOwnership = isArabic && j.foreignOwnershipAr ? j.foreignOwnershipAr : j.foreignOwnership;
                  const processingTime = isArabic && j.processingTimeAr ? j.processingTimeAr : j.processingTime;
                  const corporateTaxStatus = isArabic && j.corporateTaxStatusAr ? j.corporateTaxStatusAr : j.corporateTaxStatus;

                  return (
                    <motion.div 
                      key={j.id} 
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="p-6 rounded-2xl glass-panel border border-white/10 space-y-4"
                    >
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

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleInquire(name)}
                        className="w-full py-2.5 rounded-xl bg-emerald-500 font-bold text-obsidian-950 text-xs flex items-center justify-center space-x-1.5 rtl:space-x-reverse shadow-md shadow-emerald-500/20"
                      >
                        <span>{tCorp.inquireBtn}</span>
                        <ArrowIcon className="w-3 h-3" />
                      </motion.button>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </>
        ) : (
          /* Digital Architecture Comparison Matrix (Desktop & Tablet) */
          <ScrollReveal>
            <div className="overflow-hidden rounded-3xl border border-cyan-500/20 glass-panel shadow-2xl">
              <table className="w-full text-left rtl:text-right border-collapse">
                <thead>
                  <tr className="border-b border-cyan-500/20 bg-obsidian-900/90 text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    <th className="p-5 w-1/3">{isArabic ? 'المعيار الهندسي والتقني' : 'Architectural Standard'}</th>
                    <th className="p-5 text-slate-500">{isArabic ? 'القوالب الجاهزة (WordPress / Wix)' : 'Generic Builders (Wix / WordPress)'}</th>
                    <th className="p-5 text-slate-400">{isArabic ? 'الوكالات التقليدية' : 'Standard Web Agency'}</th>
                    <th className="p-5 text-cyan-300 bg-cyan-500/10 font-bold">{isArabic ? 'منصة إكسبيديا السيادية (Next.js & AI)' : 'Expedia Sovereign Stack (Next.js & AI)'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs text-slate-200">
                  {DIGITAL_COMPARISON.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-5 font-semibold text-white">
                        {row.feature}
                      </td>
                      <td className="p-5 text-slate-400 font-mono text-[11px]">
                        <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                          <XCircle className="w-3.5 h-3.5 text-rose-500/70 shrink-0" />
                          <span>{row.generic}</span>
                        </div>
                      </td>
                      <td className="p-5 text-slate-300 font-mono text-[11px]">
                        <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          <span>{row.agency}</span>
                        </div>
                      </td>
                      <td className="p-5 bg-cyan-500/5 font-mono text-[11px] text-cyan-300 font-bold">
                        <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{row.expedia}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="p-6 bg-obsidian-900/90 border-t border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-300">
                  <span className="font-bold text-white block mb-0.5">
                    {isArabic ? 'هل ترغب في فحص وتدقيق موقعك أو تطبيقك الحالي؟' : 'Want a full audit of your current web application?'}
                  </span>
                  {isArabic 
                    ? 'يقدم مهندسو إكسبيديا تدقيقاً شاملاً لمؤشرات الأداء، وسرعة التحميل، والتوافق مع محركات الذكاء الاصطناعي مجاناً.'
                    : 'Get a comprehensive audit of your Core Web Vitals, Google AEO readiness, and conversion bottleneck analysis.'}
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleDigitalInquiry}
                  className="shrink-0 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-obsidian-950 font-display font-bold text-xs flex items-center space-x-2 rtl:space-x-reverse shadow-lg shadow-cyan-500/20 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'طلب تدقيق واستشارة تقنية' : 'Request Architecture Audit'}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </div>
          </ScrollReveal>
        )}

      </div>
    </section>
  );
};


