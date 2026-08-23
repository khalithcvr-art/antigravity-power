import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
import { BorderBeam, AnimatedCounter } from './motion/MotionPrimitives';
import { DigitalCinematicHero } from './DigitalCinematicHero';

interface HeroSectionProps {
  mode: DualEngineMode;
  onOpenEstimator: () => void;
  onOpenTracker: () => void;
  onToggleMode: (newMode: DualEngineMode) => void;
  isArabic: boolean;
  onLogoDocked?: (docked: boolean) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  mode,
  onOpenEstimator,
  onOpenTracker,
  onToggleMode,
  isArabic,
  onLogoDocked = () => {}
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
      
      {/* Dual Background Engines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 transition-opacity duration-1000">
        {mode === 'corporate' ? (
          <>
            <video
              key="corp-video"
              autoPlay
              loop
              muted
              playsInline
              poster="/hero-skyline-1.jpg"
              className="w-full h-full object-cover scale-105 animate-fade-in"
              style={{
                filter: 'contrast(1.2) saturate(1.5) brightness(1.08) hue-rotate(-3deg)',
              }}
            >
              <source src="/dubai-skyline-hero.mp4" type="video/mp4" />
            </video>

            {/* Cinematic Color Grade — Amber/Teal Film LUT */}
            <div 
              className="absolute inset-0 mix-blend-color pointer-events-none"
              style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(212,175,55,0.06) 50%, rgba(6,95,70,0.1) 100%)' }}
            />

            {/* Radial Spotlight — keeps central skyline luminous */}
            <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-obsidian-950/50 pointer-events-none" />

            {/* Top-Down Cinematic Letterbox Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950/60 via-obsidian-950/10 to-obsidian-950 pointer-events-none" />
            
            {/* Bottom Depth Fade — content readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent pointer-events-none" />

            {/* Edge Vignette — draws eye to center */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{ 
                background: 'radial-gradient(ellipse 70% 60% at 50% 40%, transparent 50%, rgba(2,6,23,0.7) 100%)'
              }}
            />

            {/* Subtle Film Grain Texture */}
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                backgroundSize: '128px 128px'
              }}
            />
          </>
        ) : (
          <div className="absolute inset-0 bg-obsidian-950 overflow-hidden">
            {/* Pure Code-Driven Cybernetic Matrix & Laser Grid (Zero Video) */}
            <div 
              className="absolute inset-0 opacity-45 mix-blend-screen pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(99, 102, 241, 0.25) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(ellipse 90% 70% at 50% 45%, black 40%, transparent 90%)',
                WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 45%, black 40%, transparent 90%)'
              }}
            />

            {/* Glowing Cyber Neural Streams & Laser Pulses */}
            <motion.div 
              animate={{ 
                scale: [1, 1.25, 1],
                opacity: [0.4, 0.7, 0.4],
                rotate: [0, 90, 0]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/6 left-1/5 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/25 via-indigo-600/20 to-transparent rounded-full blur-[110px] mix-blend-screen pointer-events-none"
            />
            <motion.div 
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.35, 0.65, 0.35],
                rotate: [90, 0, 90]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/5 right-1/5 w-[650px] h-[650px] bg-gradient-to-bl from-teal-400/20 via-cyan-500/25 to-purple-600/25 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
            />

            {/* Hexagonal Tech Matrix Glow Points */}
            <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />

            {/* Matrix Depth Vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950/60 via-obsidian-950/20 to-obsidian-950" />
            <div className="absolute inset-0 bg-radial-at-c from-transparent via-cyan-950/30 to-obsidian-950/90" />
          </div>
        )}
      </div>

      {/* Background radial glows */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[120px] pointer-events-none transition-all duration-1000 z-0 ${
        mode === 'corporate' ? 'bg-emerald-500/10' : 'bg-cyan-500/15'
      }`} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow badge & Title in Corporate Mode */}
        {mode === 'corporate' && (
          <>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-3 mb-6"
            >
              <div className="relative inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-1.5 rounded-full bg-obsidian-900/95 border border-white/15 text-xs backdrop-blur-md shadow-2xl overflow-hidden">
                <BorderBeam size={180} duration={8} colorFrom="#10b981" colorTo="#06b6d4" />
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-slate-200 font-medium tracking-wide">
                  {tHero.corporate.badge}
                </span>
                <span className="text-slate-600">|</span>
                <span className="text-emerald-400 font-mono font-semibold">
                  {isArabic ? 'رقم الترخيص: ' : 'Lic: '}CN-6307408
                </span>
              </div>

              <div className="hidden sm:inline-flex items-center space-x-1.5 rtl:space-x-reverse px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                <MapPin className="w-3 h-3 text-goldMuted" />
                <span>{isArabic ? 'هايبو، أبوظبي مول' : 'Haibu, Abu Dhabi Mall'}</span>
              </div>
            </motion.div>

            {/* Corporate Hero Title & Kinetic Rotating Line */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-center max-w-4xl mx-auto mb-8"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.15] mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
                {tHero.corporate.titleMain}{' '}
                <span className="block h-[1.3em] relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={rotatingIndex}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -30, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="absolute inset-0 text-gradient-emerald font-extrabold drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
                    >
                      {corporateHeadlines[rotatingIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>

              <p className="text-base sm:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                {tHero.corporate.subtitle}
              </p>
            </motion.div>
          </>
        )}

        {/* Dual-Engine Mode Switcher Banner (Interactive Middle Card) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-10 p-2 rounded-2xl bg-obsidian-900/90 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          <BorderBeam size={220} duration={10} colorFrom={mode === 'corporate' ? '#10b981' : '#06b6d4'} colorTo={mode === 'corporate' ? '#059669' : '#6366f1'} />
          <div className="flex items-center justify-between gap-2 p-1 relative z-10">
            <motion.button
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.01 }}
              onClick={() => onToggleMode('corporate')}
              className={`flex-1 flex items-center justify-center space-x-2 rtl:space-x-reverse py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                mode === 'corporate'
                  ? 'bg-emerald-500 text-obsidian-950 shadow-lg shadow-emerald-500/25'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>{tNav.corporateMode}</span>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.01 }}
              onClick={() => onToggleMode('digital')}
              className={`flex-1 flex items-center justify-center space-x-2 rtl:space-x-reverse py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                mode === 'digital'
                  ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-obsidian-950 shadow-lg shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>{tNav.digitalMode}</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Content Flow for Corporate vs Digital Studio */}
        {mode === 'corporate' ? (
          <>
            {/* Primary Call to Action Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenEstimator}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-display font-bold text-sm sm:text-base flex items-center justify-center space-x-3 rtl:space-x-reverse transition-all duration-300 shadow-xl bg-emerald-500 hover:bg-emerald-400 text-obsidian-950 shadow-emerald-500/30 hover:shadow-emerald-500/50"
              >
                <Calculator className="w-5 h-5" />
                <span>{tHero.corporate.ctaEstimator}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleWhatsAppHero}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-obsidian-900 hover:bg-obsidian-850 border border-white/15 text-white font-display font-semibold text-sm sm:text-base flex items-center justify-center space-x-3 rtl:space-x-reverse transition-all duration-300 hover:border-emerald-500/50 shadow-lg shadow-black/50"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>{tNav.whatsappDirect}</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenTracker}
                className="w-full sm:w-auto px-5 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-sm font-semibold flex items-center justify-center space-x-2 rtl:space-x-reverse transition-all"
              >
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>{tHero.corporate.ctaTracker}</span>
              </motion.button>
            </motion.div>

            {/* Live Authority Metrics Grid (4 Key Counters with Odometer rolling) */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
            >
              
              <motion.div 
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-5 rounded-2xl glass-panel glass-panel-hover text-center relative overflow-hidden group border border-white/10"
              >
                <div className="text-2xl sm:text-4xl font-display font-black text-white mb-1 group-hover:text-emerald-400 transition-colors">
                  <AnimatedCounter value={COMPANY_INFO.stats.foreignOwnership} />
                </div>
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-0.5">
                  {tHero.corporate.stats.ownership.label}
                </div>
                <div className="text-[11px] text-slate-400">
                  {isArabic ? 'بدون اشتراط كفيل محلي' : 'No UAE local sponsor required'}
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-5 rounded-2xl glass-panel glass-panel-hover text-center relative overflow-hidden group border border-white/10"
              >
                <div className="text-2xl sm:text-4xl font-display font-black text-white mb-1 group-hover:text-emerald-400 transition-colors">
                  <AnimatedCounter value={COMPANY_INFO.stats.licenseTurnaround} />
                </div>
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-0.5">
                  {tHero.corporate.stats.turnaround.label}
                </div>
                <div className="text-[11px] text-slate-400">
                  {isArabic ? 'إصدار رقمي سريع ومباشر' : 'Fast-track digital clearance'}
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-5 rounded-2xl glass-panel glass-panel-hover text-center relative overflow-hidden group border border-white/10"
              >
                <div className="text-2xl sm:text-4xl font-display font-black text-white mb-1 group-hover:text-emerald-400 transition-colors">
                  <AnimatedCounter value={COMPANY_INFO.stats.businessesLaunched} />
                </div>
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-0.5">
                  {isArabic ? 'الشركات المؤسسة' : 'Companies Formed'}
                </div>
                <div className="text-[11px] text-slate-400">
                  {isArabic ? 'في أبوظبي ودبي' : 'Across Abu Dhabi & Dubai'}
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-5 rounded-2xl glass-panel glass-panel-hover text-center relative overflow-hidden group border border-white/10"
              >
                <div className="text-2xl sm:text-4xl font-display font-black text-white mb-1 group-hover:text-emerald-400 transition-colors">
                  <AnimatedCounter value={COMPANY_INFO.stats.experienceYears} />
                </div>
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-0.5">
                  {tHero.corporate.stats.experience.label}
                </div>
                <div className="text-[11px] text-slate-400">
                  {isArabic ? 'اعتماد 7 دوائر وهيئات حكومية' : '7 UAE Government Ministries'}
                </div>
              </motion.div>

            </motion.div>
          </>
        ) : (
          /* Digital Studio Mode: 3D Holographic Code Terminal & Flying Logo Sequence */
          <div className="w-full">
            <DigitalCinematicHero 
              isArabic={isArabic}
              onLogoDocked={onLogoDocked}
              onOpenEstimator={onOpenEstimator}
              onOpenTracker={onOpenTracker}
              onExploreServices={() => {
                const s = document.getElementById('services');
                s?.scrollIntoView({ behavior: 'smooth' });
              }}
              onBookConsultation={handleWhatsAppHero}
            />
          </div>
        )}

      </div>
    </section>
  );
};



