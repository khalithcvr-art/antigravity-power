import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Calculator, 
  Zap, 
  Award, 
  Users, 
  FileText, 
  MessageSquare,
  ChevronRight,
  TrendingUp,
  MapPin
} from 'lucide-react';
import { DualEngineMode } from '../types';
import { COMPANY_INFO } from '../data/siteData';
import { trackConversion, generateWhatsAppUrl } from '../lib/tracking';
import { TRANSLATIONS } from '../data/translations';

interface HeroSectionProps {
  mode: DualEngineMode;
  onOpenEstimator: () => void;
  onOpenTracker: () => void;
  onToggleMode: (newMode: DualEngineMode) => void;
  isArabic: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  mode,
  onOpenEstimator,
  onOpenTracker,
  onToggleMode,
  isArabic
}) => {
  const [rotatingIndex, setRotatingIndex] = useState(0);

  const tHero = isArabic ? TRANSLATIONS.ar.hero : TRANSLATIONS.en.hero;
  const tNav = isArabic ? TRANSLATIONS.ar.navbar : TRANSLATIONS.en.navbar;

  const corporateHeadlinesEn = [
    'Mainland & Free Zone Formation',
    '100% Foreign Ownership Setup',
    'High-Trust Corporate PRO Services',
    '10-Year UAE Golden Visas',
    'Corporate Tax (0% Freezone) TRN'
  ];

  const corporateHeadlinesAr = [
    'تأسيس شركات البر الرئيسي والمناطق الحرة',
    'تملك أجنبي كامل بنسبة 100%',
    'خدمات العلاقات العامة والتعقيب الحكومي الموثوقة',
    'معاملات الإقامة الذهبية 10 سنوات',
    'التسجيل في ضريبة الشركات والامتثال المالي'
  ];

  const digitalHeadlinesEn = [
    'FinTech-Grade Web Applications',
    'Bespoke UAE Brand Architecture',
    'Bilingual Arabic/English Portals',
    'Enterprise Cloud CRM Automation',
    'Sub-Second LCP Performance'
  ];

  const digitalHeadlinesAr = [
    'تطبيقات ومنصات ويب بمعايير مالية متطورة',
    'هندسة الهوية البصرية والعلامات التجارية الفاخرة',
    'بوابات إلكترونية ثنائية اللغة (عربي / إنجليزي)',
    'أنظمة إدارة علاقات العملاء والأتمتة السحابية',
    'أداء فائق وسرعة تحميل استثنائية'
  ];

  const corporateHeadlines = isArabic ? corporateHeadlinesAr : corporateHeadlinesEn;
  const digitalHeadlines = isArabic ? digitalHeadlinesAr : digitalHeadlinesEn;
  const currentList = mode === 'corporate' ? corporateHeadlines : digitalHeadlines;

  useEffect(() => {
    const timer = setInterval(() => {
      setRotatingIndex((prev) => (prev + 1) % currentList.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [currentList.length]);

  const handleWhatsAppHero = () => {
    trackConversion('whatsapp_click', { source: 'hero_primary_cta' });
    const msg = mode === 'corporate' 
      ? (isArabic ? "مرحباً إكسبيديا، أود استشارة خبرائكم لتأسيس رخصة تجارية في البر الرئيسي / المنطقة الحرة." : "Hello Expedia, I would like to consult on setting up a UAE Mainland / Freezone trade license.")
      : (isArabic ? "مرحباً إكسبيديا الرقمية، أود الاستفسار حول تصميم منصة رقمية وتطوير الهوية المؤسسية." : "Hello Expedia Digital, I am interested in building a bespoke web application and brand identity.");
    window.open(generateWhatsAppUrl(msg), '_blank');
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[85vh] flex flex-col justify-center">
      
      {/* Dubai Skyline Ambient Video Background (Corporate Mode Only) */}
      {mode === 'corporate' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 transition-opacity duration-1000">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/hero-skyline-1.jpg"
            className="w-full h-full object-cover opacity-80 sm:opacity-90 scale-100 filter contrast-[1.15] saturate-[1.4] brightness-105 animate-fade-in"
          >
            <source src="/dubai-skyline-hero.mp4" type="video/mp4" />
          </video>
          {/* High Definition Transparency Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950/40 via-obsidian-950/20 to-obsidian-950" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-obsidian-950/25 to-obsidian-950/70" />
        </div>
      )}

      {/* Background radial glows */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[120px] pointer-events-none transition-all duration-1000 z-0 ${
        mode === 'corporate' ? 'bg-emerald-500/10' : 'bg-cyan-500/12'
      }`} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow badge */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1.5 rounded-full bg-obsidian-900/90 border border-white/10 text-xs backdrop-blur-md shadow-lg shadow-black/40">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300 font-medium tracking-wide">
              {mode === 'corporate' ? tHero.corporate.badge : tHero.digital.badge}
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400 font-mono font-semibold">
              {isArabic ? 'رقم الترخيص: ' : 'Lic: '}CN-6307408
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center space-x-1.5 rtl:space-x-reverse px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400">
            <MapPin className="w-3 h-3 text-goldMuted" />
            <span>{isArabic ? 'هايبو، أبوظبي مول' : 'Haibu, Abu Dhabi Mall'}</span>
          </div>
        </div>

        {/* Hero Title & Kinetic Rotating Line */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.15] mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
            {mode === 'corporate' ? (
              <>
                {tHero.corporate.titleMain}{' '}
                <span className="block h-[1.3em] relative overflow-hidden">
                  <span 
                    key={rotatingIndex}
                    className="absolute inset-0 text-gradient-emerald animate-in fade-in slide-in-from-bottom-6 duration-500 font-extrabold drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
                  >
                    {corporateHeadlines[rotatingIndex]}
                  </span>
                </span>
              </>
            ) : (
              <>
                {tHero.digital.titleMain}{' '}
                <span className="block h-[1.3em] relative overflow-hidden">
                  <span 
                    key={rotatingIndex}
                    className="absolute inset-0 text-gradient-digital animate-in fade-in slide-in-from-bottom-6 duration-500 font-extrabold"
                  >
                    {digitalHeadlines[rotatingIndex]}
                  </span>
                </span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {mode === 'corporate' ? tHero.corporate.subtitle : tHero.digital.subtitle}
          </p>
        </div>

        {/* Dual-Engine Mode Switcher Banner (Interactive Middle Card) */}
        <div className="max-w-2xl mx-auto mb-10 p-2 rounded-2xl bg-obsidian-900/90 border border-white/10 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center justify-between gap-2 p-1">
            <button
              onClick={() => onToggleMode('corporate')}
              className={`flex-1 flex items-center justify-center space-x-2 rtl:space-x-reverse py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                mode === 'corporate'
                  ? 'bg-emerald-500 text-obsidian-950 shadow-lg shadow-emerald-500/25 scale-[1.01]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>{tNav.corporateMode}</span>
            </button>

            <button
              onClick={() => onToggleMode('digital')}
              className={`flex-1 flex items-center justify-center space-x-2 rtl:space-x-reverse py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                mode === 'digital'
                  ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-obsidian-950 shadow-lg shadow-cyan-500/25 scale-[1.01]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>{tNav.digitalMode}</span>
            </button>
          </div>
        </div>

        {/* Primary Call to Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onOpenEstimator}
            className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-display font-bold text-sm sm:text-base flex items-center justify-center space-x-3 rtl:space-x-reverse transition-all duration-300 shadow-xl ${
              mode === 'corporate'
                ? 'bg-emerald-500 hover:bg-emerald-400 text-obsidian-950 shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.02]'
                : 'bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-obsidian-950 shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02]'
            }`}
          >
            <Calculator className="w-5 h-5" />
            <span>{mode === 'corporate' ? tHero.corporate.ctaEstimator : tHero.digital.ctaStudio}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>

          <button
            onClick={handleWhatsAppHero}
            className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-obsidian-900 hover:bg-obsidian-850 border border-white/15 text-white font-display font-semibold text-sm sm:text-base flex items-center justify-center space-x-3 rtl:space-x-reverse transition-all duration-300 hover:border-emerald-500/50 shadow-lg shadow-black/50"
          >
            <MessageSquare className="w-5 h-5 text-emerald-400" />
            <span>{tNav.whatsappDirect}</span>
          </button>

          <button
            onClick={onOpenTracker}
            className="w-full sm:w-auto px-5 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-sm font-semibold flex items-center justify-center space-x-2 rtl:space-x-reverse transition-all"
          >
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>{mode === 'corporate' ? tHero.corporate.ctaTracker : tHero.digital.ctaPortfolio}</span>
          </button>
        </div>

        {/* Live Authority Metrics Grid (4 Key Counters) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          
          <div className="p-5 rounded-2xl glass-panel glass-panel-hover text-center relative overflow-hidden group">
            <div className="text-2xl sm:text-4xl font-display font-black text-white mb-1 group-hover:text-emerald-400 transition-colors">
              {COMPANY_INFO.stats.foreignOwnership}
            </div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-0.5">
              {tHero.corporate.stats.ownership.label}
            </div>
            <div className="text-[11px] text-slate-500">
              {isArabic ? 'بدون اشتراط كفيل محلي' : 'No UAE local sponsor required'}
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-panel glass-panel-hover text-center relative overflow-hidden group">
            <div className="text-2xl sm:text-4xl font-display font-black text-white mb-1 group-hover:text-emerald-400 transition-colors">
              {COMPANY_INFO.stats.licenseTurnaround}
            </div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-0.5">
              {tHero.corporate.stats.turnaround.label}
            </div>
            <div className="text-[11px] text-slate-500">
              {isArabic ? 'إصدار رقمي سريع ومباشر' : 'Fast-track digital clearance'}
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-panel glass-panel-hover text-center relative overflow-hidden group">
            <div className="text-2xl sm:text-4xl font-display font-black text-white mb-1 group-hover:text-emerald-400 transition-colors">
              {COMPANY_INFO.stats.businessesLaunched}
            </div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-0.5">
              {isArabic ? 'الشركات المؤسسة' : 'Companies Formed'}
            </div>
            <div className="text-[11px] text-slate-500">
              {isArabic ? 'في أبوظبي ودبي' : 'Across Abu Dhabi & Dubai'}
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-panel glass-panel-hover text-center relative overflow-hidden group">
            <div className="text-2xl sm:text-4xl font-display font-black text-white mb-1 group-hover:text-emerald-400 transition-colors">
              {COMPANY_INFO.stats.experienceYears}
            </div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-0.5">
              {tHero.corporate.stats.experience.label}
            </div>
            <div className="text-[11px] text-slate-500">
              {isArabic ? 'اعتماد 7 دوائر وهيئات حكومية' : '7 UAE Government Ministries'}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


