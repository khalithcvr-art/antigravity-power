import React from 'react';
import {
  ShieldCheck,
  Award,
  CircleCheck,
  MapPin,
  FileCheck2,
  Cpu,
  Sparkles,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { generateWhatsAppUrl, trackConversion } from '../lib/tracking';
import { ScrollReveal, AnimatedCounter } from './motion/MotionPrimitives';
import { SectionHeader } from './SectionHeader';
import { DualEngineMode } from '../types';

interface AboutSectionProps {
  mode?: DualEngineMode;
  isArabic?: boolean;
  onOpenEstimator?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  mode = 'corporate',
  isArabic = false,
  onOpenEstimator
}) => {
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  const handleConsultWhatsApp = () => {
    trackConversion('whatsapp_click', { source: 'about_section_cta' });
    const msg = isArabic
      ? "مرحباً إكسبيديا، أود التعرف أكثر على خدماتكم المؤسسية والتحدث مع فريقكم في أبوظبي."
      : "Hello Expedia, I would like to learn more about your corporate services and speak with your Abu Dhabi team.";
    window.open(generateWhatsAppUrl(msg), '_blank');
  };

  const TRUST_PILLARS = [
    {
      id: 'pillar-1',
      icon: ShieldCheck,
      title: isArabic ? 'شركة مرخّصة من دائرة التنمية الاقتصادية في أبوظبي' : 'Government-Licensed Legal Entity',
      subtitle: isArabic ? 'رخصة تجارية رقم CN-6307408' : 'ADDED License No. CN-6307408',
      desc: isArabic
        ? 'شركة مسجلة ومرخّصة من دائرة التنمية الاقتصادية في أبوظبي (ADDED). نقدّم معاملات عملائنا ونتابعها عبر بوابة "تم" الحكومية وقنوات الجهات المختصة.'
        : 'Registered and licensed by the Abu Dhabi Department of Economic Development (ADDED). We prepare, submit and follow up client applications through the official TAMM portal and the relevant authority channels.',
      badges: ['ADDED Abu Dhabi', 'TAMM Portal Submissions', 'DED Dubai']
    },
    {
      id: 'pillar-2',
      icon: Award,
      title: isArabic ? 'أربع مناطق حرة نعمل معها بانتظام' : 'Four Free Zones We Work With Regularly',
      subtitle: isArabic ? 'ميدان، مدينة مصدر، إيفزا، عجمان' : 'Meydan, Masdar City, IFZA & Ajman',
      desc: isArabic
        ? 'نُعد ونقدّم طلبات الرخص التجارية، وننسّق باقات المكاتب المرنة وحصص التأشيرات، ونوضّح أوضاع ضريبة الشركات في المناطق الحرة التي يلزم تأكيدها مع مستشار ضريبي مرخص.'
        : 'We prepare and submit trade licence applications, arrange flexi-desk packages and visa quotas, and explain qualifying free zone corporate tax positions, which should be confirmed with a licensed tax adviser.',
      badges: ['Meydan Free Zone', 'Masdar City Free Zone', 'IFZA Dubai', 'Ajman Free Zone']
    },
    {
      id: 'pillar-3',
      icon: FileCheck2,
      title: isArabic ? '12+ عاماً من الخبرة التنظيمية في الإمارات' : '12+ Years Regulatory Track Record',
      subtitle: isArabic ? 'أعمال في البر الرئيسي والمناطق الحرة' : 'Mainland & Free Zone Casework',
      desc: isArabic
        ? 'خبرة ممتدة في تأسيس الشركات في البر الرئيسي والمناطق الحرة، وملفات إقامة المستثمرين والموظفين، وتجديد الرخص. تُقدَّم الرسوم كتابةً قبل بدء العمل، والموافقات تعود للجهة المختصة.'
        : 'Long-running experience across mainland and free zone formations, investor and employee residency files, and licence renewals. Fees are quoted in writing before work starts; approval decisions rest with the relevant authority.',
      badges: ['Mainland & Free Zone', 'Residency & PRO Files', 'Written Quotations']
    },
    {
      id: 'pillar-4',
      icon: Cpu,
      title: isArabic ? 'المحرك المزدوج: تأسيس قانوني + هندسة برمجية' : 'Sovereign Dual-Engine Architecture',
      subtitle: isArabic ? 'منظومة شاملة للنمو الرقمي' : 'Legal Compliance + Bespoke Next.js Tech',
      desc: isArabic
        ? 'نجمع بين استخراج الرخص التجارية ودعم طلبات فتح الحسابات البنكية، وبين تطوير مواقع وتطبيقات Next.js لعملائنا مع أنظمة إدارة العملاء وأتمتة الواتساب.'
        : 'One practice covering both sides: statutory trade licensing and PRO work, plus bespoke Next.js web engineering, CRM workflows and WhatsApp automation built for clients.',
      badges: ['Next.js Development Service', 'WhatsApp Cloud API', 'Full Code Handover']
    }
  ];

  const STATS_DATA = [
    {
      value: 12,
      suffix: '+',
      label: isArabic ? 'سنوات من الخبرة التنظيمية' : 'Years UAE Regulatory Mastery',
      sub: isArabic ? 'في بر أبوظبي والمناطق الحرة' : 'Abu Dhabi & Dubai Mainland / Freezone'
    },
    {
      value: 4,
      suffix: '',
      label: isArabic ? 'مناطق حرة نعمل معها' : 'Free Zones We Work With',
      sub: isArabic ? 'ميدان، إيفزا، مصدر، عجمان' : 'Meydan, IFZA, Masdar City & Ajman'
    },
    {
      value: 7,
      suffix: '',
      label: isArabic ? 'جهات حكومية ننسق معها' : 'Authorities We Coordinate With',
      sub: isArabic ? 'التنمية الاقتصادية، الموارد البشرية، الهوية، الإقامة، تم، الضرائب' : 'ADDED, DED, MoHRE, ICP, GDRFA, TAMM & FTA'
    },
    {
      value: 100,
      suffix: '%',
      label: isArabic ? 'ملكية أجنبية وملكية الشيفرة البرمجية' : 'Foreign Ownership & Code IP',
      sub: isArabic ? 'عرض سعر كتابي قبل بدء العمل' : 'Written Quotation Before Work Starts'
    }
  ];

  return (
    <section id="about" className="section border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionHeader
          eyebrow={
            isArabic
              ? 'الملف التعريفي والسيادي للشركة · رخصة تجارية CN-6307408'
              : 'Official Sovereign Entity Dossier · Trade License CN-6307408'
          }
          title={
            isArabic
              ? 'الفريق الاستراتيجي خلف تأسيس الشركات وخدمات العلاقات الحكومية في الإمارات'
              : 'The Strategic Advisory Team Behind UAE Company Formation & PRO Services'
          }
          subtitle={
            isArabic ? (
              <>
                شركة <strong className="font-semibold text-white">إكسبيديا لخدمات الأعمال ش.ذ.م.م</strong> (Expedia Business and Services L.L.C) هي بيت خبرة ومستشار تنظيمي مرخص من <strong className="font-semibold text-white">دائرة التنمية الاقتصادية في أبوظبي</strong>، ومقرها الرئيسي في <strong className="font-semibold text-white">هايبو، الطابق الأول، أبوظبي مول</strong>. نجمع بين التمثيل الحكومي السيادي والتكنولوجيا الرقمية المتقدمة لتمكين المستثمرين من إطلاق وتوسيع أعمالهم بثقة مطلقة.
              </>
            ) : (
              <>
                <strong className="font-semibold text-white">Expedia Business and Services L.L.C</strong> is a business consultancy licensed by the <strong className="font-semibold text-white">Abu Dhabi Department of Economic Development (ADDED)</strong>, headquartered at <strong className="font-semibold text-white">Haibu, Level 1, Abu Dhabi Mall</strong>. We unite statutory legal governance with enterprise full-stack software engineering to accelerate commercial growth across the UAE.
              </>
            )
          }
        />

        {/* Facts: one hairline-divided band */}
        <ScrollReveal className="mt-12">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-white/10 lg:grid-cols-4">
            {STATS_DATA.map((stat, idx) => (
              <div key={idx} className="flex flex-col bg-obsidian-950 p-6 sm:p-7">
                <dd className="order-1 font-sans text-4xl font-extrabold leading-none tracking-tight text-white sm:text-5xl">
                  <AnimatedCounter value={stat.value} />
                  <span className="text-gold-400">{stat.suffix}</span>
                </dd>
                <dt className="order-2 mt-4 text-base font-bold leading-snug text-slate-100">{stat.label}</dt>
                <dd className="order-3 mt-1 text-sm leading-5 text-slate-400">{stat.sub}</dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>

        {/* Four grounds of trust */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {TRUST_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={pillar.id} className="h-full">
                <div className="card group flex h-full flex-col p-7 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-xl border border-gold-400/30 bg-gold-400/10 text-gold-400">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="chip">{pillar.subtitle}</span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold leading-snug text-white">{pillar.title}</h3>
                  <p className="mb-6 mt-2 text-[0.9375rem] leading-7 text-slate-300">{pillar.desc}</p>

                  <ul className="mt-auto flex flex-wrap gap-2 border-t border-white/10 pt-5">
                    {pillar.badges.map((badge, bIdx) => (
                      <li key={bIdx} className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-sm text-slate-200">
                        <CircleCheck className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                        {badge}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Office */}
        <ScrollReveal className="mt-10">
          <div className="relative overflow-hidden rounded-[var(--radius-panel)] border border-gold-400/25 bg-obsidian-900/80 p-8 shadow-card sm:p-10">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
              <div className="space-y-4 lg:col-span-2">
                <p className="eyebrow">
                  <MapPin className="h-4 w-4 text-gold-400" aria-hidden="true" />
                  {isArabic ? 'المقر الرئيسي والموقع الجغرافي' : 'Headquarters & GEO Presence'}
                </p>

                <h3 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                  {isArabic
                    ? 'تفضل بزيارة مقرنا الرئيسي في قلب العاصمة أبوظبي'
                    : 'Visit Our Executive Office in Central Abu Dhabi'}
                </h3>

                <p className="text-base leading-7 text-slate-300">
                  {isArabic ? (
                    <>
                      يقع مكتبنا في <strong className="font-semibold text-white">هايبو، الطابق الأول، أبوظبي مول، النادي السياحي، أبوظبي</strong>. نوفر لعملائنا غرف اجتماعات، ومختصين في العلاقات الحكومية، ومتابعة لملفات الرخص والتأشيرات عبر بوابة تم الحكومية.
                    </>
                  ) : (
                    <>
                      Located at <strong className="font-semibold text-white">Haibu, Level 1, Abu Dhabi Mall, Al Zahiya, Abu Dhabi</strong>. We provide meeting space, experienced PRO specialists, and application status updates coordinated through the official TAMM portal.
                    </>
                  )}
                </p>

                <ul className="grid grid-cols-1 gap-x-8 gap-y-2 pt-2 text-sm text-slate-400 sm:grid-cols-2">
                  <li>ADDED License: <strong className="font-mono font-semibold text-slate-100">CN-6307408</strong></li>
                  <li>{isArabic ? 'هاتف الاتصال: ' : 'Call: '}<strong className="font-semibold tnum text-slate-100" dir="ltr">+971 56 4425 950</strong></li>
                  <li>WhatsApp: <strong className="font-semibold tnum text-slate-100" dir="ltr">+971 58 5858 816</strong></li>
                  <li>Email: <strong className="font-semibold text-slate-100" dir="ltr">info@expediaservices.ae</strong></li>
                </ul>
              </div>

              <div className="flex flex-col justify-center gap-3 sm:flex-row lg:flex-col">
                <button type="button" onClick={handleConsultWhatsApp} className="btn btn-primary w-full">
                  <span>{isArabic ? 'حجز جلسة استشارية حضورية' : 'Book Office Consultation'}</span>
                  <ArrowIcon className="h-4 w-4" aria-hidden="true" />
                </button>

                {onOpenEstimator && (
                  <button type="button" onClick={onOpenEstimator} className="btn btn-secondary w-full">
                    <span>{isArabic ? 'حساب تكلفة التأسيس فورياً' : 'Calculate Formation Cost'}</span>
                    <Sparkles className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
