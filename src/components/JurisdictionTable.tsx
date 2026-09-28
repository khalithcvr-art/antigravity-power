import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  CircleCheck,
  CircleX,
} from 'lucide-react';
import { JURISDICTIONS } from '../data/pricingData';
import { generateWhatsAppUrl, trackConversion } from '../lib/tracking';
import { TRANSLATIONS } from '../data/translations';
import { ScrollReveal } from './motion/MotionPrimitives';
import { SectionHeader } from './SectionHeader';
import { useEnterOnChange } from '../hooks/useEnterOnChange';
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
  const enter = useEnterOnChange(selectedCity);
  const tCorp = isArabic ? TRANSLATIONS.ar.jurisdictions : TRANSLATIONS.en.jurisdictions;

  const DIGITAL_COMPARISON = [
    {
      feature: isArabic ? 'سرعة التحميل ومؤشرات الويب الأساسية (LCP)' : 'Page Speed & Core Web Vitals (LCP)',
      featureAr: 'سرعة التحميل ومؤشرات الويب الأساسية (LCP)',
      generic: isArabic ? 'يعتمد على القالب والإضافات' : 'Depends on theme and plugins',
      agency: isArabic ? 'يختلف حسب التنفيذ' : 'Varies by implementation',
      expedia: isArabic ? 'ميزانية أداء متفق عليها وتُقاس بعد الإطلاق' : 'Agreed performance budget, measured after launch'
    },
    {
      feature: isArabic ? 'الظهور في محركات الذكاء الاصطناعي (AEO/GEO)' : 'AEO & AI Search Readiness (ChatGPT/Perplexity)',
      featureAr: 'الظهور في محركات الذكاء الاصطناعي (AEO/GEO)',
      generic: isArabic ? 'غير مهيأ (نصوص غير منظمة)' : 'Zero Schema (Unstructured Data)',
      agency: isArabic ? 'وسوم ميتا تقليدية فقط' : 'Basic Meta Tags Only',
      expedia: isArabic ? 'مخططات Schema.org و JSON-LD منظمة' : 'Structured Schema.org JSON-LD markup'
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
      expedia: isArabic ? 'أتمتة لاستقبال الطلبات وإعداد عروض الأسعار' : 'Automated lead capture and quotation drafting'
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

  const quotationLabel = isArabic ? "اطلب عرض أسعار" : "Request a quotation";
  const TH = 'px-5 py-4 text-start text-sm font-semibold text-slate-400';

  return (
    <section id="jurisdictions" className="section border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionHeader
          eyebrow={headerBadge}
          title={<>{headerTitle} {headerTitleHighlight}</>}
          subtitle={headerSubtitle}
          actions={
            mode === 'corporate' ? (
              <div className="seg" role="group" aria-label={isArabic ? 'تصفية حسب المدينة' : 'Filter by city'}>
                {filterOptions.map((opt) => (
                  <button
                    key={opt.key}
                    type="button"
                    aria-pressed={selectedCity === opt.key}
                    onClick={() => setSelectedCity(opt.key)}
                    className="seg-item"
                  >
                    {selectedCity === opt.key && (
                      <motion.span
                        layoutId="activeCityTab"
                        className="absolute inset-0 -z-10 rounded-[0.625rem] bg-accent"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    {opt.label}
                  </button>
                ))}
              </div>
            ) : undefined
          }
        />

        {mode === 'corporate' ? (
          <>
            {/* Desktop table: fixed column widths keep every row aligned */}
            <ScrollReveal className="mt-12">
              <div className="hidden overflow-hidden rounded-[var(--radius-panel)] border border-white/10 bg-obsidian-900/70 shadow-card lg:block">
                <table className="w-full table-fixed border-collapse text-start">
                  <colgroup>
                    <col className="w-[24%]" />
                    <col className="w-[13%]" />
                    <col className="w-[12%]" />
                    <col className="w-[12%]" />
                    <col className="w-[11%]" />
                    <col className="w-[14%]" />
                    <col className="w-[14%]" />
                  </colgroup>
                  <thead>
                    <tr className="border-b border-gold-400/25 bg-obsidian-950/60">
                      <th scope="col" className={TH}>{tCorp.colJurisdiction}</th>
                      <th scope="col" className={TH}>{tCorp.colTypeCity}</th>
                      <th scope="col" className={TH}>{tCorp.colBaseCost}</th>
                      <th scope="col" className={TH}>{tCorp.colForeignOwnership}</th>
                      <th scope="col" className={TH}>{tCorp.colTurnaround}</th>
                      <th scope="col" className={TH}>{tCorp.colTax}</th>
                      <th scope="col" className={`${TH} text-end`}>{tCorp.colAction}</th>
                    </tr>
                  </thead>
                  <tbody key={selectedCity} className={`${enter} divide-y divide-white/[0.07] text-sm text-slate-200`}>
                    {filtered.map((j) => {
                      const name = isArabic && j.nameAr ? j.nameAr : j.name;
                      const popularFor = isArabic && j.popularForAr ? j.popularForAr : j.popularFor;
                      const type = isArabic && j.typeAr ? j.typeAr : j.type;
                      const city = isArabic && j.cityAr ? j.cityAr : j.city;
                      const foreignOwnership = isArabic && j.foreignOwnershipAr ? j.foreignOwnershipAr : j.foreignOwnership;
                      const processingTime = isArabic && j.processingTimeAr ? j.processingTimeAr : j.processingTime;
                      const corporateTaxStatus = isArabic && j.corporateTaxStatusAr ? j.corporateTaxStatusAr : j.corporateTaxStatus;

                      return (
                        <tr key={j.id} className="align-top transition-colors hover:bg-white/[0.03]">
                          <th scope="row" className="px-5 py-5 text-start font-normal">
                            <span className="block text-base font-bold text-white">{name}</span>
                            <span className="mt-1 block text-sm leading-5 text-slate-400">{popularFor}</span>
                          </th>
                          <td className="px-5 py-5">
                            <span className="block font-medium text-white">{type}</span>
                            <span className="block text-slate-400">{city}</span>
                          </td>
                          <td className="px-5 py-5 text-slate-400">{quotationLabel}</td>
                          <td className="px-5 py-5 leading-6">{foreignOwnership}</td>
                          <td className="px-5 py-5 leading-6 tnum">{processingTime}</td>
                          <td className="px-5 py-5 text-[0.8125rem] leading-5 text-slate-400">{corporateTaxStatus}</td>
                          <td className="px-5 py-5">
                            <div className="flex flex-col items-stretch gap-2">
                              <button type="button" onClick={() => handleInquire(name)} className="btn btn-primary btn-sm">
                                <span>{tCorp.inquireBtn}</span>
                                <ArrowIcon className="h-3.5 w-3.5" aria-hidden="true" />
                              </button>
                              <button type="button" onClick={() => handleRowClick(j)} className="btn btn-secondary btn-sm">
                                {tCorp.learnMore}
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>

            {/* Cards below lg */}
            <div key={`cards-${selectedCity}`} className={`${enter} mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:hidden`}>
              {filtered.map((j) => {
                const name = isArabic && j.nameAr ? j.nameAr : j.name;
                const popularFor = isArabic && j.popularForAr ? j.popularForAr : j.popularFor;
                const type = isArabic && j.typeAr ? j.typeAr : j.type;
                const city = isArabic && j.cityAr ? j.cityAr : j.city;
                const foreignOwnership = isArabic && j.foreignOwnershipAr ? j.foreignOwnershipAr : j.foreignOwnership;
                const processingTime = isArabic && j.processingTimeAr ? j.processingTimeAr : j.processingTime;
                const corporateTaxStatus = isArabic && j.corporateTaxStatusAr ? j.corporateTaxStatusAr : j.corporateTaxStatus;

                return (
                  <div key={j.id} className="card flex flex-col p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="chip">{type} · {city}</span>
                      <span className="text-sm text-slate-400">{quotationLabel}</span>
                    </div>

                    <h4 className="mt-4 text-xl font-bold text-white">{name}</h4>
                    <p className="mt-1 text-sm text-slate-400">{popularFor}</p>

                    <dl className="mb-5 mt-4 space-y-2 border-t border-white/10 pt-4 text-sm">
                      <div className="flex justify-between gap-4">
                        <dt className="text-slate-500">{isArabic ? 'الملكية:' : 'Ownership:'}</dt>
                        <dd className="text-end text-slate-200">{foreignOwnership}</dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="text-slate-500">{isArabic ? 'المدة:' : 'Timeline:'}</dt>
                        <dd className="text-end text-slate-200 tnum">{processingTime}</dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="shrink-0 text-slate-500">{isArabic ? 'الضريبة:' : 'Tax Treatment:'}</dt>
                        <dd className="text-end text-slate-400">{corporateTaxStatus}</dd>
                      </div>
                    </dl>

                    <div className="mt-auto grid grid-cols-2 gap-2">
                      <button type="button" onClick={() => handleInquire(name)} className="btn btn-primary btn-sm">
                        <span>{tCorp.inquireBtn}</span>
                        <ArrowIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                      <button type="button" onClick={() => handleRowClick(j)} className="btn btn-secondary btn-sm">
                        {tCorp.learnMore}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          /* Digital: approach comparison */
          <ScrollReveal className="mt-12">
            <div className="overflow-hidden rounded-[var(--radius-panel)] border border-cyan-500/20 bg-obsidian-900/70 shadow-card">
              <div className="overflow-x-auto" role="region" tabIndex={0} aria-label={isArabic ? 'جدول المقارنة، قابل للتمرير أفقياً' : 'Comparison table, scrolls horizontally'}>
                <table className="w-full min-w-[56rem] table-fixed border-collapse text-start">
                  <colgroup>
                    <col className="w-[31%]" />
                    <col className="w-[22%]" />
                    <col className="w-[22%]" />
                    <col className="w-[25%]" />
                  </colgroup>
                  <thead>
                    <tr className="border-b border-cyan-500/20 bg-obsidian-950/60">
                      <th scope="col" className={TH}>{isArabic ? 'المعيار الهندسي والتقني' : 'Architectural Standard'}</th>
                      <th scope="col" className={TH}>{isArabic ? 'القوالب الجاهزة (WordPress / Wix)' : 'Generic Builders (Wix / WordPress)'}</th>
                      <th scope="col" className={TH}>{isArabic ? 'الوكالات التقليدية' : 'Standard Web Agency'}</th>
                      <th scope="col" className={`${TH} bg-cyan-500/10 text-cyan-300`}>{isArabic ? 'ما نبنيه لعملائنا (Next.js & AI)' : 'What We Build For Clients (Next.js & AI)'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.07] text-sm text-slate-200">
                    {DIGITAL_COMPARISON.map((row, idx) => (
                      <tr key={idx} className="align-top transition-colors hover:bg-white/[0.02]">
                        <th scope="row" className="px-5 py-5 text-start font-semibold text-white">{row.feature}</th>
                        <td className="px-5 py-5 text-slate-400">
                          <span className="flex items-start gap-2">
                            <CircleX className="mt-0.5 h-4 w-4 shrink-0 text-danger-300/80" aria-hidden="true" />
                            <span>{row.generic}</span>
                          </span>
                        </td>
                        <td className="px-5 py-5 text-slate-300">
                          <span className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                            <span>{row.agency}</span>
                          </span>
                        </td>
                        <td className="bg-cyan-500/5 px-5 py-5 font-semibold text-cyan-300">
                          <span className="flex items-start gap-2">
                            <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
                            <span>{row.expedia}</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col items-start justify-between gap-5 border-t border-cyan-500/20 bg-obsidian-950/60 p-6 sm:flex-row sm:items-center">
                <div className="text-sm leading-6 text-slate-300">
                  <span className="mb-0.5 block text-base font-bold text-white">
                    {isArabic ? 'هل ترغب في فحص وتدقيق موقعك أو تطبيقك الحالي؟' : 'Want a full audit of your current web application?'}
                  </span>
                  {isArabic
                    ? 'يقدم مهندسو إكسبيديا تدقيقاً شاملاً لمؤشرات الأداء، وسرعة التحميل، والتوافق مع محركات الذكاء الاصطناعي مجاناً.'
                    : 'Get a comprehensive audit of your Core Web Vitals, Google AEO readiness, and conversion bottleneck analysis.'}
                </div>
                <button type="button" onClick={handleDigitalInquiry} className="btn btn-primary shrink-0">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  <span>{isArabic ? 'طلب تدقيق واستشارة تقنية' : 'Request Architecture Audit'}</span>
                  <ArrowIcon className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        )}

      </div>
    </section>
  );
};
