import { preferredScrollBehavior } from '../hooks/useMotionPreference';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, ShieldCheck, Landmark, Percent, Sparkles, 
  Award, Coins, Layers, Globe, BadgePercent, UserCheck, 
  Anchor, CreditCard, Users, Zap, CheckCircle2, 
  ArrowRight, ArrowLeft, MessageSquare, Calculator, Phone,
  HelpCircle, ChevronDown, FileText, Download, Share2
} from 'lucide-react';
import { DEDICATED_PAGES, DedicatedPageData } from '../data/jurisdictionPages';
import { InteractiveCard, ScrollReveal } from './motion/MotionPrimitives';
import { trackConversion } from '../lib/tracking';

interface DedicatedJurisdictionPageProps {
  slug: string;
  isArabic: boolean;
  onOpenEstimator: () => void;
  onOpenTracker: () => void;
  onNavigateHome: () => void;
  onNavigateSlug: (slug: string) => void;
}

export function DedicatedJurisdictionPage({
  slug,
  isArabic,
  onOpenEstimator,
  onOpenTracker,
  onNavigateHome,
  onNavigateSlug
}: DedicatedJurisdictionPageProps) {
  const pageData: DedicatedPageData | undefined = DEDICATED_PAGES[slug];
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: preferredScrollBehavior() });
  }, [slug]);

  // Dynamic SEO / Meta injection
  useEffect(() => {
    if (!pageData) return;

    const title = isArabic ? pageData.meta.titleAr : pageData.meta.titleEn;
    const description = isArabic ? pageData.meta.descriptionAr : pageData.meta.descriptionEn;

    document.title = title;
    const canonical = document.querySelector('link[rel="canonical"]');
    canonical?.setAttribute('href', `https://www.expediaservices.ae/${isArabic ? 'ar/' : ''}${slug}`);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', `https://www.expediaservices.ae/${isArabic ? 'ar/' : ''}${slug}`);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Inject JSON-LD Schema
    const scriptId = 'jurisdiction-jsonld-schema';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      existingScript = document.createElement('script');
      existingScript.id = scriptId;
      existingScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(existingScript);
    }
    existingScript.textContent = JSON.stringify(pageData.schemaJson);

    return () => {
      const s = document.getElementById(scriptId);
      if (s) s.remove();
    };
  }, [pageData, isArabic, slug]);

  if (!pageData) {
    return (
      <div className="py-32 px-4 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">
          {isArabic ? 'الصفحة غير موجودة' : 'Jurisdiction Page Not Found'}
        </h1>
        <button
          onClick={onNavigateHome}
          className="px-6 py-3 rounded-xl bg-emerald-500 text-obsidian-950 font-bold"
        >
          {isArabic ? 'العودة للرئيسية' : 'Return to Home'}
        </button>
      </div>
    );
  }

  const { hero, keyHighlights, costBreakdown, stepByStepProcess, activityCategories, faqList, aeoStructuredSummary } = pageData;
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  const handleWhatsAppQuote = (packageDetail?: string) => {
    const contextText = packageDetail 
      ? `Hi Expedia Business Services! I am on the ${pageData.slug} page and would like a custom quote for: ${packageDetail}. Please guide me on official 2026 requirements.`
      : `Hi Expedia Business Services! I am interested in ${isArabic ? hero.h1Ar : hero.h1En} . Please share exact itemized quotation and required documents.`;

    const encoded = encodeURIComponent(contextText);
    trackConversion('dedicated_page_whatsapp', { slug, packageDetail });
    window.open(`https://wa.me/971585858816?text=${encoded}`, '_blank');
  };

  const HIGHLIGHT_ICONS: Record<string, React.ElementType> = {
    ShieldCheck, Building2, Landmark, ReceiptPercent: Percent, Sparkles, Award, Coins, Layers, Globe,
    BadgePercent, UserCheck, Anchor, CreditCard, Users, Zap,
  };
  const getHighlightIcon = (iconName: string) => {
    const Icon = HIGHLIGHT_ICONS[iconName] || Building2;
    return <Icon className="h-5 w-5 text-gold-400" aria-hidden="true" />;
  };

  const H2 = 'font-display text-2xl font-bold leading-tight text-white sm:text-3xl';
  const SUB = 'mt-2 text-base leading-7 text-slate-400';

  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-[calc(var(--header-h)+2rem)] sm:px-6 lg:px-8">

      {/* Breadcrumb */}
      <nav aria-label={isArabic ? 'مسار التنقل' : 'Breadcrumb'} className="mb-8 flex items-center gap-2 overflow-x-auto pb-2 text-sm text-slate-400">
        <button type="button" onClick={onNavigateHome} className="shrink-0 py-1 transition-colors hover:text-white">
          {isArabic ? 'الرئيسية' : 'Home'}
        </button>
        <span aria-hidden="true">/</span>
        <button type="button" onClick={onNavigateHome} className="shrink-0 py-1 transition-colors hover:text-white">
          {isArabic ? 'المناطق الحرة والتراخيص' : 'Jurisdictions'}
        </button>
        <span aria-hidden="true">/</span>
        <span aria-current="page" className="shrink-0 font-semibold text-gold-300">
          {isArabic ? hero.h1Ar : hero.h1En}
        </span>
      </nav>

      {/* Hero */}
      <div className="relative mb-16 overflow-hidden rounded-[var(--radius-panel)] border border-white/10 bg-obsidian-900/80 p-8 shadow-card lg:p-12">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent" aria-hidden="true" />

        <div className="max-w-4xl">
          <span className="chip chip-accent mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            {isArabic ? hero.badgeAr : hero.badgeEn}
          </span>

          <h1 className="text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white">
            {isArabic ? hero.h1Ar : hero.h1En}
          </h1>

          <p className="mt-5 text-xl font-semibold leading-snug text-gold-300 sm:text-2xl">
            {isArabic ? hero.highlightAr : hero.highlightEn}
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            {isArabic ? hero.subtitleAr : hero.subtitleEn}
          </p>

          {/* Key facts */}
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 rounded-2xl border border-white/10 bg-obsidian-950/60 p-5 sm:grid-cols-4">
            <div>
              <dt className="text-sm text-slate-400">{isArabic ? 'عرض أسعار' : 'Quotation'}</dt>
              <dd className="mt-1 text-lg font-bold text-emerald-400">
                {isArabic ? "اطلب عرض أسعار" : "Request a quotation"}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-slate-400">{isArabic ? 'مدة الإصدار' : 'Turnaround'}</dt>
              <dd className="mt-1 text-base font-semibold text-white">
                {isArabic ? hero.turnaroundAr : hero.turnaroundEn}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-slate-400">{isArabic ? 'نسبة الملكية' : 'Ownership'}</dt>
              <dd className="mt-1 text-base font-semibold text-white">
                {isArabic ? hero.ownershipAr : hero.ownershipEn}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-slate-400">{isArabic ? 'دورنا' : 'Our Role'}</dt>
              <dd className="mt-1 flex items-center gap-1.5 text-base font-semibold text-emerald-400">
                <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                {isArabic ? 'إعداد وتقديم الطلبات' : 'Application support'}
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" onClick={() => handleWhatsAppQuote()} className="btn btn-primary btn-lg">
              <MessageSquare className="h-4 w-4 fill-obsidian-950" aria-hidden="true" />
              <span>{isArabic ? 'احصل على عرض سعر رسمي عبر واتساب' : 'Get Official WhatsApp Quotation'}</span>
              <ArrowIcon className="h-4 w-4" aria-hidden="true" />
            </button>

            <button type="button" onClick={onOpenEstimator} className="btn btn-secondary btn-lg">
              <Calculator className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              <span>{isArabic ? 'احسب التكلفة المخصصة' : 'Calculate Custom Cost'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Direct answer (kept in the markup for search and AI answer engines) */}
      <div className="note mb-16 p-6 sm:p-7">
        <h2 className="mb-2 text-base font-bold text-gold-300">
          {isArabic ? aeoStructuredSummary.headingAr : aeoStructuredSummary.headingEn}
        </h2>
        <p className="text-base font-medium leading-7 text-slate-100">
          {isArabic ? aeoStructuredSummary.directAnswerAr : aeoStructuredSummary.directAnswerEn}
        </p>
        <ul className="mt-4 grid grid-cols-1 gap-2 border-t border-white/10 pt-4 text-sm text-slate-300 md:grid-cols-2">
          {(isArabic ? aeoStructuredSummary.bulletFactsAr : aeoStructuredSummary.bulletFactsEn).map((fact, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Key advantages */}
      <section className="mb-16">
        <ScrollReveal>
          <h2 className={H2}>{isArabic ? 'أبرز المزايا الاستراتيجية والتنظيمية' : 'Key Strategic & Regulatory Advantages'}</h2>
          <p className={SUB}>
            {isArabic ? 'لماذا تختار تأسيس شركتك في هذه الوجهة مع إكسبيديا لخدمات الأعمال؟' : 'Why incorporate in this jurisdiction with Expedia Business Services?'}
          </p>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {keyHighlights.map((item, idx) => (
            <InteractiveCard key={idx} className="p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-gold-400/25 bg-gold-400/10">
                {getHighlightIcon(item.iconName)}
              </span>
              <h3 className="mt-4 text-lg font-bold leading-snug text-white">
                {isArabic ? item.titleAr : item.titleEn}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {isArabic ? item.descAr : item.descEn}
              </p>
            </InteractiveCard>
          ))}
        </div>
      </section>

      {/* Tariff table */}
      <section className="mb-16">
        <ScrollReveal>
          <div className="overflow-hidden rounded-[var(--radius-panel)] border border-white/10 bg-obsidian-900/70 p-6 shadow-card sm:p-8">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className={H2}>{isArabic ? costBreakdown.titleAr : costBreakdown.titleEn}</h2>
                <p className={SUB}>{isArabic ? costBreakdown.subtitleAr : costBreakdown.subtitleEn}</p>
              </div>
              <span className="chip chip-accent self-start md:self-auto">
                {isArabic ? 'تعرفة رسمية محدثة 2026' : '2026 Verified Tariffs'}
              </span>
            </div>

            <div className="overflow-x-auto" role="region" tabIndex={0} aria-label={isArabic ? 'جدول الرسوم، قابل للتمرير أفقياً' : 'Fee table, scrolls horizontally'}>
              <table className="w-full min-w-[40rem] border-collapse text-start">
                <thead>
                  <tr className="border-b border-gold-400/25 text-sm text-slate-400">
                    <th scope="col" className="px-4 py-4 text-start font-semibold">{isArabic ? 'بند الرسوم / الباقة' : 'Fee Item / Package Category'}</th>
                    <th scope="col" className="px-4 py-4 text-start font-semibold">{isArabic ? 'الرسوم الرسمية (درهم)' : 'Official Tariff (AED)'}</th>
                    <th scope="col" className="px-4 py-4 text-start font-semibold">{isArabic ? 'التفاصيل والمشمولات' : 'Inclusions & Details'}</th>
                    <th scope="col" className="px-4 py-4 text-center font-semibold">{isArabic ? 'طلب الباقة' : 'Direct Action'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.07] text-sm">
                  {costBreakdown.items.map((item, idx) => (
                    <tr key={idx} className="align-top transition-colors hover:bg-white/[0.03]">
                      <th scope="row" className="px-4 py-4 text-start font-semibold text-white">
                        {isArabic ? item.categoryAr : item.categoryEn}
                      </th>
                      <td className="whitespace-nowrap px-4 py-4 font-semibold text-emerald-400">
                        {isArabic ? "حسب عرض الأسعار" : "Quotation required"}
                      </td>
                      <td className="max-w-md px-4 py-4 leading-6 text-slate-400">
                        {isArabic ? item.notesAr : item.notesEn}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-center">
                        <button
                          type="button"
                          onClick={() => handleWhatsAppQuote(isArabic ? item.categoryAr : item.categoryEn)}
                          className="btn btn-secondary btn-sm"
                        >
                          {isArabic ? 'طلب الباقة' : 'Inquire'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-5 text-sm text-slate-400 sm:flex-row sm:items-center">
              <div>
                {isArabic
                  ? 'رقم الرخصة التجارية المعتمدة: CN-6307408 • دائرة التنمية الاقتصادية - أبوظبي'
                  : 'Expedia Business & Services L.L.C • Abu Dhabi DED Trade License CN-6307408'}
              </div>
              <button type="button" onClick={onOpenEstimator} className="inline-flex items-center gap-2 py-1 font-semibold text-emerald-400 underline-offset-4 hover:underline">
                <Calculator className="h-4 w-4" aria-hidden="true" />
                {isArabic ? 'حاسبة التكاليف المباشرة' : 'Launch Custom Calculator'}
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Roadmap: a real sequence, so the steps are numbered */}
      <section className="mb-16">
        <ScrollReveal>
          <h2 className={H2}>{isArabic ? 'خطوات التأسيس وإصدار الرخصة' : 'Step-by-Step Formation Roadmap'}</h2>
          <p className={SUB}>
            {isArabic ? 'مسار واضح وسريع من تقديم الطلب حتى استلام الرخصة والحساب البنكي' : 'A transparent, streamlined journey from digital KYC to active commercial trading'}
          </p>
        </ScrollReveal>

        <ol className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-4">
          {stepByStepProcess.map((step, idx) => (
            <li key={idx} className="card p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-gold-400/60 font-display text-base font-bold text-gold-300 tnum">{step.step}</span>
                <span className="chip">{isArabic ? step.durationAr : step.durationEn}</span>
              </div>
              <h3 className="mt-4 text-base font-bold leading-snug text-white">
                {isArabic ? step.titleAr : step.titleEn}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {isArabic ? step.descAr : step.descEn}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Activities */}
      <section className="mb-16">
        <ScrollReveal>
          <h2 className={H2}>{isArabic ? 'الأنشطة الاقتصادية والتجارية المعتمدة' : 'Approved Business Activity Groups'}</h2>
          <p className={SUB}>
            {isArabic ? 'تغطية شاملة لأكثر من 1500 نشاط تجاري ومهني وصناعي' : 'Full compliance with official UAE activity master classification codes'}
          </p>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {activityCategories.map((group, idx) => (
            <div key={idx} className="card p-6">
              <h3 className="mb-4 border-b border-white/10 pb-3 text-base font-bold text-gold-300">
                {isArabic ? group.nameAr : group.nameEn}
              </h3>
              <ul className="space-y-2.5">
                {(isArabic ? group.examplesAr : group.examplesEn).map((ex, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm leading-6 text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <ScrollReveal>
          <h2 className={H2}>{isArabic ? 'الأسئلة الشائعة والمعلومات القانونية' : 'Frequently Asked Questions & Legal Clarifications'}</h2>
          <p className={SUB}>
            {isArabic ? 'إجابات مباشرة ومفصلة حول الإجراءات والضرائب والإقامات' : 'Clear, factual guidance on licensing, taxation, and residency'}
          </p>
        </ScrollReveal>

        <div className="mt-8 divide-y divide-white/10 overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-obsidian-900/60">
          {faqList.map((faq, idx) => (
            <div key={idx} className={`transition-colors duration-300 ${openFaqIndex === idx ? 'bg-obsidian-900' : ''}`}>
              <h3>
                <button
                  type="button"
                  id={`service-faq-${slug}-${idx}`}
                  aria-expanded={openFaqIndex === idx}
                  aria-controls={openFaqIndex === idx ? `service-answer-${slug}-${idx}` : undefined}
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-start sm:px-6"
                >
                  <span className={`text-base font-bold leading-snug transition-colors ${openFaqIndex === idx ? 'text-emerald-400' : 'text-white'}`}>
                    {isArabic ? faq.questionAr : faq.questionEn}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-emerald-400 transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {openFaqIndex === idx && (
                  <motion.div
                    id={`service-answer-${slug}-${idx}`}
                    role="region"
                    aria-labelledby={`service-faq-${slug}-${idx}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-6 text-[0.9375rem] leading-7 text-slate-300 sm:px-6">
                      {isArabic ? faq.answerAr : faq.answerEn}
                      {faq.sourceUrl && <a href={faq.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-3 block text-emerald-300 underline underline-offset-4">{isArabic ? 'المصدر: البوابة الرسمية لحكومة الإمارات' : 'Source: UAE Government portal'}</a>}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Other jurisdictions */}
      <section className="rounded-[var(--radius-panel)] border border-white/10 bg-obsidian-900/60 p-8 text-center sm:p-10">
        <h2 className="font-display text-xl font-bold leading-tight text-white sm:text-2xl">
          {isArabic ? 'استكشف الوجهات والمقارنات الأخرى في الإمارات' : 'Explore Other UAE Jurisdictions & Comparison Guides'}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-400">
          {isArabic
            ? 'اطلع على أدلة المقارنة والأسعار التفصيلية لكافة المناطق الحرة والبر الرئيسي في أبوظبي ودبي'
            : 'Access official 2026 pricing breakdowns and comparison engines across all major UAE setup hubs.'}
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {[
            { id: 'meydan-free-zone', labelEn: 'Meydan Free Zone (Dubai)', labelAr: 'منطقة ميدان الحرة (دبي)' },
            { id: 'masdar-city-free-zone', labelEn: 'Masdar City Free Zone (Abu Dhabi)', labelAr: 'مدينة مصدر الحرة (أبوظبي)' },
            { id: 'ifza', labelEn: 'IFZA Dubai Free Zone', labelAr: 'سلطة إيفزا دبي الحرة' },
            { id: 'ajman-free-zone', labelEn: 'Ajman Free Zone (AFZ)', labelAr: 'منطقة عجمان الحرة' },
            { id: 'mainland-business-setup', labelEn: 'Mainland Setup (Abu Dhabi & Dubai)', labelAr: 'البر الرئيسي (أبوظبي ودبي)' },
            { id: 'ifza-vs-meydan', labelEn: 'IFZA vs. Meydan Comparison', labelAr: 'مقارنة إيفزا وميدان' },
          ].filter(item => item.id !== slug).map((item) => (
            <a
              key={item.id}
              href={`${isArabic ? "/ar" : ""}/${item.id}`}
              onClick={(event) => {
                if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
                event.preventDefault();
                onNavigateSlug(item.id);
              }}
              className="btn btn-secondary btn-sm"
            >
              {isArabic ? item.labelAr : item.labelEn}
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}
