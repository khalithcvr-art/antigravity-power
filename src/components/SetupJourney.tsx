import React, { useState } from 'react';
import {
  Building2,
  FileCheck2,
  Rocket,
  CircleCheck,
  ArrowRight,
  ArrowLeft,
  Sparkles
} from 'lucide-react';
import { DualEngineMode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { ScrollReveal } from './motion/MotionPrimitives';
import { SectionHeader } from './SectionHeader';
import { useEnterOnChange } from '../hooks/useEnterOnChange';

interface SetupJourneyProps {
  mode: DualEngineMode;
  onOpenEstimator: () => void;
  isArabic?: boolean;
}

export const SetupJourney: React.FC<SetupJourneyProps> = ({ mode = 'corporate', onOpenEstimator, isArabic = false }) => {
  const [activeStep, setActiveStep] = useState(0);
  const enter = useEnterOnChange(activeStep);
  const tCorp = isArabic ? TRANSLATIONS.ar.journey : TRANSLATIONS.en.journey;

  const corporateSteps = [
    {
      ...tCorp.steps[0],
      icon: Building2,
    },
    {
      ...tCorp.steps[1],
      icon: FileCheck2,
    },
    {
      ...tCorp.steps[2],
      icon: Rocket,
    }
  ];

  const digitalSteps = [
    {
      number: '01',
      title: isArabic ? 'هندسة العلامة وتصميم واجهات المستخدم' : 'Brand Architecture & UI/UX Design System',
      subtitle: isArabic ? 'تصميم تجربة مستخدم فاخرة وثنائية اللغة' : 'Bespoke Figma Prototypes & RTL Typography',
      timeline: isArabic ? '1-3 أيام' : '1–3 Days',
      authorityTag: isArabic ? 'معايير واجهات المستخدم' : 'UI/UX Architecture',
      summary: isArabic ? 'هندسة الهوية البصرية، وواجهات تفاعلية سلسة، وخطوط عربية مخصصة.' : 'High-fidelity interactive prototypes, responsive Arabic-English design tokens, and a considered UAE aesthetic.',
      details: isArabic ? [
        'نظام تصميم متكامل ومكونات تفاعلية في Figma',
        'مواءمة طباعية احترافية للغتين العربية والإنجليزية',
        'مسارات تحويل العملاء وحاسبات تفاعلية مخصصة',
        'واجهات متوافقة 100% مع الهواتف الذكية والأجهزة اللوحية'
      ] : [
        'Design system & interactive Figma component library',
        'Bilingual Arabic-English typographic hierarchy',
        'Conversion-optimized user funnels & live calculation tools',
        'Mobile-first responsive touch interfaces'
      ],
      icon: Building2,
    },
    {
      number: '02',
      title: isArabic ? 'التطوير البرمجي والأتمتة الذكية' : 'Full-Stack Engineering & AI Automation',
      subtitle: isArabic ? 'تطبيقات Next.js وربط واتساب وقواعد البيانات' : 'Next.js, Supabase & WhatsApp Bots',
      timeline: isArabic ? '3-7 أيام' : '3–7 Days',
      authorityTag: isArabic ? 'هندسة السحابة الآمنة' : 'Sovereign Cloud & AI API',
      summary: isArabic ? 'برمجة خادم سريعة، ربط بوابات الدفع الإماراتية (Stripe/Network)، وتفعيل روبوتات واتساب الآلية للرد على العملاء.' : 'High-performance React/TypeScript frontend, PostgreSQL database isolation, and automated WhatsApp CRM pipelines.',
      details: isArabic ? [
        'تطوير الواجهات باستخدام Next.js',
        'عزل بيانات العملاء في قواعد بيانات Supabase PostgreSQL',
        'ربط واتساب للأعمال لاستقبال وتوزيع العملاء آلياً',
        'تكامل بوابات الدفع الإلكتروني المعتمدة في الإمارات'
      ] : [
        'Next.js Server Components architecture',
        'Supabase PostgreSQL multi-tenant data isolation',
        'WhatsApp Cloud API autonomous lead response & booking',
        'Automated quotation, invoice, and payment gateway bridges'
      ],
      icon: FileCheck2,
    },
    {
      number: '03',
      title: isArabic ? 'النشر السحابي والسيطرة على محركات البحث' : 'Sovereign Cloud & SEO/AEO Domination',
      subtitle: isArabic ? 'نشر سحابي وتهيئة المحتوى للبحث' : 'Edge Deployment & Search Readiness',
      timeline: isArabic ? '1-2 يوم' : '1–2 Days',
      authorityTag: isArabic ? 'بيانات منظمة وخرائط موقع' : 'Structured Data & Sitemaps',
      summary: isArabic ? 'استضافة سحابية على شبكة Cloudflare/Vercel، وتضمين مخططات Schema لتحسين فهم المحتوى. لا يمكن ضمان الظهور في نتائج الذكاء الاصطناعي.' : 'Edge CDN deployment across GCC nodes, complete JSON-LD structured data, and Core Web Vitals measured after launch. Placement in AI answers cannot be guaranteed.',
      details: isArabic ? [
        'نشر على خوادم في الإمارات ودول الخليج',
        'هيكلة بيانات Schema.org لتحسين فهم المحتوى في محركات البحث',
        'قياس مؤشرات الأداء الأساسية (Core Web Vitals) بعد الإطلاق',
        'تسليم الشيفرة البرمجية والملكية الفكرية الكاملة 100% للعميل'
      ] : [
        'GCC edge deployment',
        'Complete JSON-LD structured data for search and AI crawlers',
        'Core Web Vitals measured on the live build',
        '100% Full source code handover and client IP ownership'
      ],
      icon: Rocket,
    }
  ];

  const steps = mode === 'corporate' ? corporateSteps : digitalSteps;

  const headerBadge = mode === 'corporate'
    ? tCorp.badge
    : (isArabic ? 'دورة التطوير الهندسي السريع' : 'Agile Engineering & Deployment Sprint');

  const headerTitle = mode === 'corporate'
    ? tCorp.title
    : (isArabic ? 'خريطة الطريق لإطلاق' : '3-Phase Roadmap to');

  const headerTitleHighlight = mode === 'corporate'
    ? tCorp.titleHighlight
    : (isArabic ? 'منصتك الرقمية السيادية' : 'Your Sovereign Digital Platform');

  const headerSubtitle = mode === 'corporate'
    ? tCorp.subtitle
    : (isArabic ? 'من هيكلة الهوية والتصميم التفاعلي إلى الأتمتة السحابية والانتشار في محركات البحث.' : 'From bespoke architecture and UI/UX design to full-stack cloud automation and search engine domination.');

  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;
  const active = steps[activeStep];

  return (
    <section id="how-it-works" className="section border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionHeader
          eyebrow={headerBadge}
          title={<>{headerTitle} {headerTitleHighlight}</>}
          subtitle={headerSubtitle}
        />

        {/* The stages are a real sequence, so they are numbered and joined by a connector. */}
        <ol className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            const isDone = index < activeStep;

            return (
              <li key={step.number} className="relative">
                <div
                  className={`card relative flex h-full flex-col p-6 sm:p-7 ${
                    isActive ? 'border-gold-400/60 bg-obsidian-900 shadow-lift' : 'hover:border-white/25'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveStep(index)}
                    aria-label={`${isArabic ? 'المرحلة' : 'Stage'} ${step.number}: ${step.title}`}
                    aria-pressed={isActive}
                    aria-controls="setup-stage-details"
                    className="absolute inset-0 z-10 rounded-[inherit]"
                  />

                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border font-display text-base font-bold tnum transition-colors duration-300 ${
                        isActive
                          ? 'border-gold-400 bg-gold-400 text-obsidian-950'
                          : isDone
                            ? 'border-gold-400/70 text-gold-300'
                            : 'border-white/20 text-slate-400'
                      }`}
                    >
                      {step.number}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`hidden h-px flex-1 transition-colors duration-500 md:block ${
                        index < steps.length - 1 ? (isDone ? 'bg-gold-400/70' : 'bg-white/15') : 'bg-transparent'
                      }`}
                    />
                    <span className="chip ms-auto md:ms-0">{step.timeline}</span>
                  </div>

                  <span
                    className={`mt-6 grid h-12 w-12 place-items-center rounded-xl border transition-colors duration-300 ${
                      isActive
                        ? 'border-accent bg-accent text-obsidian-950'
                        : 'border-white/15 bg-white/5 text-accent'
                    }`}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>

                  <h3 className="mt-5 text-xl font-bold leading-snug text-white">{step.title}</h3>
                  <p className="mt-1 text-sm font-medium text-slate-400">{step.subtitle}</p>
                  <p className="mb-6 mt-4 text-[0.9375rem] leading-7 text-slate-300">{step.summary}</p>

                  <div
                    className={`mt-auto flex items-center justify-between border-t border-white/10 pt-4 text-sm font-semibold ${
                      isActive ? 'text-gold-300' : 'text-slate-400'
                    }`}
                  >
                    <span>
                      {isActive
                        ? (isArabic ? 'المرحلة النشطة المعروضة' : 'Active Stage View')
                        : (isArabic ? 'انقر لاستعراض التفاصيل' : 'Click to Inspect Stage')}
                    </span>
                    <ArrowIcon className="h-4 w-4" aria-hidden="true" />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Detail panel for the selected stage */}
        <div id="setup-stage-details" role="region" aria-label={isArabic ? 'تفاصيل مرحلة الإعداد' : 'Setup stage details'} className="mt-6">
          <ScrollReveal>
            <div
              key={activeStep}
              className={`${enter} grid grid-cols-1 gap-8 rounded-[var(--radius-panel)] border border-white/10 bg-obsidian-900/80 p-7 shadow-card sm:p-10 lg:grid-cols-12 lg:gap-12`}
            >
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-semibold text-gold-300">
                    {isArabic ? `مخرجات المرحلة ${active.number} التفصيلية` : `Stage ${active.number} In-Depth Deliverables`}
                  </span>
                  <span className="chip">{active.authorityTag}</span>
                </div>

                <h4 className="mt-4 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">{active.title}</h4>
                <p className="mt-3 text-base leading-7 text-slate-300">{active.summary}</p>

                <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                  {active.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm leading-6 text-slate-200">
                      <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-obsidian-950/70 p-6 lg:col-span-5">
                <div>
                  <span className="block text-sm text-slate-400">
                    {isArabic ? 'مدة الإنجاز القياسية' : 'Estimated Fast-Track Turnaround'}
                  </span>
                  <div className="mt-1 font-display text-3xl font-bold text-white tnum">{active.timeline}</div>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {isArabic
                      ? 'تُقدَّم المعاملات عبر البوابات الحكومية الرسمية. تختلف مدد المعالجة حسب الجهة المختصة.'
                      : 'Applications are submitted through the official government portals. Processing times are set by the relevant authority and vary by case.'}
                  </p>
                </div>

                <button type="button" onClick={onOpenEstimator} className="btn btn-primary w-full">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  <span>{tCorp.ctaButton}</span>
                  <ArrowIcon className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
