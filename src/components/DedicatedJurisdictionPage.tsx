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
import { TiltCard, BorderBeam, AnimatedCounter, ScrollReveal, StaggerContainer, StaggerItem } from './motion/MotionPrimitives';
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  // Dynamic SEO / Meta injection
  useEffect(() => {
    if (!pageData) return;

    const title = isArabic ? pageData.meta.titleAr : pageData.meta.titleEn;
    const description = isArabic ? pageData.meta.descriptionAr : pageData.meta.descriptionEn;

    document.title = title;

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
      : `Hi Expedia Business Services! I am interested in ${isArabic ? hero.h1Ar : hero.h1En} (License from AED ${hero.startingPriceAed}). Please share exact itemized quotation and required documents.`;

    const encoded = encodeURIComponent(contextText);
    trackConversion('dedicated_page_whatsapp', { slug, packageDetail });
    window.open(`https://wa.me/971585858816?text=${encoded}`, '_blank');
  };

  const getHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-sky-400" />;
      case 'Landmark': return <Landmark className="w-5 h-5 text-amber-400" />;
      case 'ReceiptPercent': return <Percent className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-400" />;
      case 'Award': return <Award className="w-5 h-5 text-amber-400" />;
      case 'Coins': return <Coins className="w-5 h-5 text-emerald-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-blue-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-teal-400" />;
      case 'BadgePercent': return <BadgePercent className="w-5 h-5 text-emerald-400" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-sky-400" />;
      case 'Anchor': return <Anchor className="w-5 h-5 text-indigo-400" />;
      case 'CreditCard': return <CreditCard className="w-5 h-5 text-emerald-400" />;
      case 'Users': return <Users className="w-5 h-5 text-amber-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      default: return <Building2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 rtl:space-x-reverse text-xs font-mono text-slate-400 mb-8 overflow-x-auto pb-2">
        <button 
          onClick={onNavigateHome}
          className="hover:text-emerald-400 transition-colors flex items-center gap-1 shrink-0"
        >
          {isArabic ? 'الرئيسية' : 'Home'}
        </button>
        <span>/</span>
        <button 
          onClick={onNavigateHome}
          className="hover:text-emerald-400 transition-colors shrink-0"
        >
          {isArabic ? 'المناطق الحرة والتراخيص' : 'Jurisdictions'}
        </button>
        <span>/</span>
        <span className="text-emerald-400 font-semibold truncate shrink-0">
          {isArabic ? hero.h1Ar : hero.h1En}
        </span>
      </nav>

      {/* Hero Section */}
      <div className="relative rounded-3xl p-8 lg:p-12 neo-glass-card border border-white/10 overflow-hidden mb-16 shadow-2xl">
        <BorderBeam size={400} duration={12} colorFrom="#10b981" colorTo="#06b6d4" />
        
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{isArabic ? hero.badgeAr : hero.badgeEn}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-4">
            {isArabic ? hero.h1Ar : hero.h1En}
          </h1>

          <p className="text-xl sm:text-2xl font-display font-semibold text-gradient-gold mb-6">
            {isArabic ? hero.highlightAr : hero.highlightEn}
          </p>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            {isArabic ? hero.subtitleAr : hero.subtitleEn}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-obsidian-950/80 border border-white/5 mb-8">
            <div>
              <div className="text-xs font-mono text-slate-400 mb-1">{isArabic ? 'يبدأ من' : 'Starting From'}</div>
              <div className="text-xl font-mono font-bold text-emerald-400">
                AED {hero.startingPriceAed.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400 mb-1">{isArabic ? 'مدة الإصدار' : 'Turnaround'}</div>
              <div className="text-sm font-semibold text-white">
                {isArabic ? hero.turnaroundAr : hero.turnaroundEn}
              </div>
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400 mb-1">{isArabic ? 'نسبة الملكية' : 'Ownership'}</div>
              <div className="text-sm font-semibold text-white">
                {isArabic ? hero.ownershipAr : hero.ownershipEn}
              </div>
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400 mb-1">{isArabic ? 'حالة الشريك' : 'Partner Status'}</div>
              <div className="text-sm font-semibold text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                {isArabic ? 'شريك رسمي معتمد' : 'Direct Authorized'}
              </div>
            </div>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleWhatsAppQuote()}
              className="py-4 px-8 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-obsidian-950 font-display font-bold text-sm flex items-center space-x-2 rtl:space-x-reverse shadow-xl shadow-emerald-500/25 transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-obsidian-950" />
              <span>{isArabic ? 'احصل على عرض سعر رسمي عبر واتساب' : 'Get Official WhatsApp Quotation'}</span>
              <ArrowIcon className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenEstimator}
              className="py-4 px-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-display font-semibold text-sm flex items-center space-x-2 rtl:space-x-reverse transition-all"
            >
              <Calculator className="w-4 h-4 text-emerald-400" />
              <span>{isArabic ? 'احسب التكلفة المخصصة' : 'Calculate Custom Cost'}</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* AEO / GEO Search Engine Direct Answer Box */}
      <div className="mb-16 rounded-2xl p-6 bg-emerald-950/20 border border-emerald-500/30">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-emerald-400" />
          <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-emerald-400">
            {isArabic ? aeoStructuredSummary.headingAr : aeoStructuredSummary.headingEn}
          </h2>
        </div>
        <p className="text-slate-200 text-sm sm:text-base font-medium leading-relaxed mb-4">
          {isArabic ? aeoStructuredSummary.directAnswerAr : aeoStructuredSummary.directAnswerEn}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-3 border-t border-emerald-500/20 text-xs font-mono text-slate-300">
          {(isArabic ? aeoStructuredSummary.bulletFactsAr : aeoStructuredSummary.bulletFactsEn).map((fact, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              <span>{fact}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key Strategic Advantages */}
      <section className="mb-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
            {isArabic ? 'أبرز المزايا الاستراتيجية والتنظيمية' : 'Key Strategic & Regulatory Advantages'}
          </h2>
          <p className="text-slate-400 text-sm">
            {isArabic ? 'لماذا تختار تأسيس شركتك في هذه الوجهة مع إكسبيديا لخدمات الأعمال؟' : 'Why incorporate in this jurisdiction with Expedia Business Services?'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyHighlights.map((item, idx) => (
            <TiltCard key={idx} className="p-6 rounded-2xl bg-obsidian-950/60 border border-white/5 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 border border-white/10">
                  {getHighlightIcon(item.iconName)}
                </div>
                <h3 className="text-base font-display font-bold text-white mb-2">
                  {isArabic ? item.titleAr : item.titleEn}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {isArabic ? item.descAr : item.descEn}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* 2026 Transparent Tariff Breakdown Table */}
      <section className="mb-16">
        <div className="rounded-3xl p-8 bg-obsidian-950/80 border border-white/10 shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                {isArabic ? costBreakdown.titleAr : costBreakdown.titleEn}
              </h2>
              <p className="text-slate-400 text-sm">
                {isArabic ? costBreakdown.subtitleAr : costBreakdown.subtitleEn}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                {isArabic ? 'تعرفة رسمية محدثة 2026' : '2026 Verified Tariffs'}
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left rtl:text-right border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs font-mono text-slate-400">
                  <th className="py-4 px-4">{isArabic ? 'بند الرسوم / الباقة' : 'Fee Item / Package Category'}</th>
                  <th className="py-4 px-4">{isArabic ? 'الرسوم الرسمية (درهم)' : 'Official Tariff (AED)'}</th>
                  <th className="py-4 px-4">{isArabic ? 'التفاصيل والمشمولات' : 'Inclusions & Details'}</th>
                  <th className="py-4 px-4 text-center">{isArabic ? 'طلب الباقة' : 'Direct Action'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {costBreakdown.items.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-semibold text-white">
                      {isArabic ? item.categoryAr : item.categoryEn}
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-emerald-400 whitespace-nowrap">
                      {typeof item.costAed === 'number' ? `AED ${item.costAed.toLocaleString()}` : item.costAed}
                    </td>
                    <td className="py-4 px-4 text-xs text-slate-400 max-w-md">
                      {isArabic ? item.notesAr : item.notesEn}
                    </td>
                    <td className="py-4 px-4 text-center whitespace-nowrap">
                      <button
                        onClick={() => handleWhatsAppQuote(isArabic ? item.categoryAr : item.categoryEn)}
                        className="px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono transition-all"
                      >
                        {isArabic ? 'طلب الباقة' : 'Inquire'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <div>
              {isArabic 
                ? 'رقم الرخصة التجارية المعتمدة: CN-6307408 • دائرة التنمية الاقتصادية - أبوظبي' 
                : 'Expedia Business & Services L.L.C • Abu Dhabi DED Trade License CN-6307408'}
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={onOpenEstimator}
                className="text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <Calculator className="w-3.5 h-3.5" />
                {isArabic ? 'حاسبة التكاليف المباشرة' : 'Launch Custom Calculator'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Formation Process */}
      <section className="mb-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
            {isArabic ? 'خطوات التأسيس وإصدار الرخصة' : 'Step-by-Step Formation Roadmap'}
          </h2>
          <p className="text-slate-400 text-sm">
            {isArabic ? 'مسار واضح وسريع من تقديم الطلب حتى استلام الرخصة والحساب البنكي' : 'A transparent, streamlined journey from digital KYC to active commercial trading'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {stepByStepProcess.map((step, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-obsidian-950/60 border border-white/5 relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-mono font-bold text-emerald-400">{step.step}</span>
                <span className="px-2 py-0.5 rounded bg-white/5 text-[11px] font-mono text-slate-400">
                  {isArabic ? step.durationAr : step.durationEn}
                </span>
              </div>
              <h3 className="text-sm font-display font-bold text-white mb-2">
                {isArabic ? step.titleAr : step.titleEn}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isArabic ? step.descAr : step.descEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Permitted Activities Showcase */}
      <section className="mb-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
            {isArabic ? 'الأنشطة الاقتصادية والتجارية المعتمدة' : 'Approved Business Activity Groups'}
          </h2>
          <p className="text-slate-400 text-sm">
            {isArabic ? 'تغطية شاملة لأكثر من 1500 نشاط تجاري ومهني وصناعي' : 'Full compliance with official UAE activity master classification codes'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activityCategories.map((group, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-obsidian-950/60 border border-white/5">
              <h3 className="text-base font-display font-bold text-emerald-400 mb-4 pb-2 border-b border-white/5">
                {isArabic ? group.nameAr : group.nameEn}
              </h3>
              <ul className="space-y-2">
                {(isArabic ? group.examplesAr : group.examplesEn).map((ex, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* High-Intent FAQ Section */}
      <section className="mb-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
            {isArabic ? 'الأسئلة الشائعة والمعلومات القانونية' : 'Frequently Asked Questions & Legal Clarifications'}
          </h2>
          <p className="text-slate-400 text-sm">
            {isArabic ? 'إجابات مباشرة ومفصلة حول الإجراءات والضرائب والإقامات' : 'Clear, factual guidance on licensing, taxation, and residency'}
          </p>
        </div>

        <div className="space-y-3">
          {faqList.map((faq, idx) => (
            <div 
              key={idx}
              className="rounded-2xl border border-white/5 bg-obsidian-950/60 overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                className="w-full p-5 text-left rtl:text-right flex items-center justify-between space-x-4 rtl:space-x-reverse"
              >
                <span className="font-display font-semibold text-white text-sm sm:text-base">
                  {isArabic ? faq.questionAr : faq.questionEn}
                </span>
                <ChevronDown className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform duration-300 ${
                  openFaqIndex === idx ? 'rotate-180' : ''
                }`} />
              </button>

              <AnimatePresence>
                {openFaqIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5">
                      {isArabic ? faq.answerAr : faq.answerEn}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Compare Other Free Zones Hub Links */}
      <section className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-obsidian-950 to-sky-950/40 border border-white/10 text-center">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
          {isArabic ? 'استكشف الوجهات والمقارنات الأخرى في الإمارات' : 'Explore Other UAE Jurisdictions & Comparison Guides'}
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto mb-6">
          {isArabic 
            ? 'اطلع على أدلة المقارنة والأسعار التفصيلية لكافة المناطق الحرة والبر الرئيسي في أبوظبي ودبي'
            : 'Access official 2026 pricing breakdowns and comparison engines across all major UAE setup hubs.'}
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {[
            { id: 'meydan-free-zone', labelEn: 'Meydan Free Zone (Dubai)', labelAr: 'منطقة ميدان الحرة (دبي)' },
            { id: 'masdar-city-free-zone', labelEn: 'Masdar City Free Zone (Abu Dhabi)', labelAr: 'مدينة مصدر الحرة (أبوظبي)' },
            { id: 'ifza', labelEn: 'IFZA Dubai Free Zone', labelAr: 'سلطة إيفزا دبي الحرة' },
            { id: 'ajman-free-zone', labelEn: 'Ajman Free Zone (AFZ)', labelAr: 'منطقة عجمان الحرة' },
            { id: 'mainland-business-setup', labelEn: 'Mainland Setup (Abu Dhabi & Dubai)', labelAr: 'البر الرئيسي (أبوظبي ودبي)' },
            { id: 'ifza-vs-meydan', labelEn: 'IFZA vs. Meydan Comparison', labelAr: 'مقارنة إيفزا وميدان' },
          ].filter(item => item.id !== slug).map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigateSlug(item.id)}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-400 border border-white/10 text-xs font-mono transition-all"
            >
              {isArabic ? item.labelAr : item.labelEn}
            </button>
          ))}
        </div>
      </section>

    </div>
  );
}
