import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  FileCheck2, 
  Rocket, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Clock,
  Sparkles
} from 'lucide-react';
import { DualEngineMode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { TiltCard, BorderBeam, ScrollReveal } from './motion/MotionPrimitives';

interface SetupJourneyProps {
  mode: DualEngineMode;
  onOpenEstimator: () => void;
  isArabic?: boolean;
}

export const SetupJourney: React.FC<SetupJourneyProps> = ({ mode = 'corporate', onOpenEstimator, isArabic = false }) => {
  const [activeStep, setActiveStep] = useState(0);
  const tCorp = isArabic ? TRANSLATIONS.ar.journey : TRANSLATIONS.en.journey;

  const corporateSteps = [
    {
      ...tCorp.steps[0],
      icon: Building2,
      color: 'emerald',
    },
    {
      ...tCorp.steps[1],
      icon: FileCheck2,
      color: 'cyan',
    },
    {
      ...tCorp.steps[2],
      icon: Rocket,
      color: 'indigo',
    }
  ];

  const digitalSteps = [
    {
      number: '01',
      title: isArabic ? 'هندسة العلامة وتصميم واجهات المستخدم' : 'Brand Architecture & UI/UX Design System',
      subtitle: isArabic ? 'تصميم تجربة مستخدم فاخرة وثنائية اللغة' : 'Bespoke Figma Prototypes & RTL Typography',
      timeline: isArabic ? '1-3 أيام' : '1–3 Days',
      authorityTag: isArabic ? 'معايير واجهات المستخدم 60fps' : '60FPS UI/UX Architecture',
      summary: isArabic ? 'هندسة الهوية البصرية، واجهات تفاعلية 60fps، وخطوط عربية مخصصة تحاكي كبرى الشركات العالمية.' : 'High-fidelity interactive prototypes, responsive Arabic-English design tokens, and luxury UAE aesthetic.',
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
      color: 'cyan',
    },
    {
      number: '02',
      title: isArabic ? 'التطوير البرمجي والأتمتة الذكية' : 'Full-Stack Engineering & AI Automation',
      subtitle: isArabic ? 'تطبيقات Next.js 15 وربط واتساب وقواعد البيانات' : 'Next.js 15, Supabase & WhatsApp Bots',
      timeline: isArabic ? '3-7 أيام' : '3–7 Days',
      authorityTag: isArabic ? 'هندسة السحابة الآمنة' : 'Sovereign Cloud & AI API',
      summary: isArabic ? 'برمجة خادم سريعة، ربط بوابات الدفع الإماراتية (Stripe/Network)، وتفعيل روبوتات واتساب الآلية للرد على العملاء.' : 'High-performance React/TypeScript frontend, PostgreSQL database isolation, and automated WhatsApp CRM pipelines.',
      details: isArabic ? [
        'تطوير الواجهات بمحرك Next.js 15 فائق السرعة',
        'عزل بيانات العملاء في قواعد بيانات Supabase PostgreSQL',
        'ربط واتساب للأعمال لاستقبال وتوزيع العملاء آلياً',
        'تكامل بوابات الدفع الإلكتروني المعتمدة في الإمارات'
      ] : [
        'Sub-second Next.js 15 Server Components architecture',
        'Supabase PostgreSQL multi-tenant data isolation',
        'WhatsApp Cloud API autonomous lead response & booking',
        'Automated quotation, invoice, and payment gateway bridges'
      ],
      icon: FileCheck2,
      color: 'indigo',
    },
    {
      number: '03',
      title: isArabic ? 'النشر السحابي والسيطرة على محركات البحث' : 'Sovereign Cloud & SEO/AEO Domination',
      subtitle: isArabic ? 'سرعة فائقة وتصدر نتائج الذكاء الاصطناعي' : 'Edge Deployment & AI Search Optimization',
      timeline: isArabic ? '1-2 يوم' : '1–2 Days',
      authorityTag: isArabic ? 'الظهور في Google و ChatGPT' : 'Google & ChatGPT AEO Ready',
      summary: isArabic ? 'استضافة سحابية على شبكة Cloudflare/Vercel بزمن استجابة أقل من 15ms، وتضمين مخططات Schema لضمان الظهور في ChatGPT وPerplexity.' : 'Edge CDN deployment across GCC nodes (<12ms latency), complete JSON-LD semantic graphs, and 100% Core Web Vitals score.',
      details: isArabic ? [
        'نشر على خوادم سريعة في الإمارات والخليج بزمن استجابة < 12ms',
        'هيكلة بيانات Schema.org للتصدر في Google و ChatGPT و Perplexity',
        'درجة 100% في مقاييس الأداء الأساسية (Core Web Vitals)',
        'تسليم الشيفرة البرمجية والملكية الفكرية الكاملة 100% للعميل'
      ] : [
        'GCC Edge deployment with sub-12ms latency',
        'Complete JSON-LD semantic schema for Google & AI search engines',
        'Sub-second Largest Contentful Paint (LCP < 0.4s)',
        '100% Full source code handover and client IP ownership'
      ],
      icon: Rocket,
      color: 'purple',
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

  return (
    <section id="how-it-works" className={`py-24 relative bg-obsidian-950/80 border-t border-white/5 overflow-hidden ${isArabic ? 'font-arabic' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider text-slate-300 mb-3">
              <Clock className={`w-3.5 h-3.5 ${mode === 'corporate' ? 'text-emerald-400' : 'text-cyan-400'}`} />
              <span>{headerBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              {headerTitle} <br className="hidden sm:inline" />
              <span className={mode === 'corporate' ? 'text-gradient-emerald' : 'bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400'}>
                {headerTitleHighlight}
              </span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              {headerSubtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Step Progress Line */}
        <div className="relative mb-6 hidden md:block">
          <div className="h-1 w-full bg-white/5 rounded-full relative overflow-hidden">
            <motion.div 
              className="absolute top-0 bottom-0 bg-gradient-to-r from-emerald-500 via-cyan-400 to-indigo-500 rounded-full"
              initial={false}
              animate={{
                width: isArabic
                  ? `${((activeStep + 1) / steps.length) * 100}%`
                  : `${((activeStep + 1) / steps.length) * 100}%`,
                [isArabic ? 'right' : 'left']: 0
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          </div>
        </div>

        {/* Step Tabs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;

            return (
              <TiltCard
                key={step.number}
                maxTilt={8}
                glowColor="rgba(16, 185, 129, 0.2)"
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer p-7 rounded-3xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? 'bg-obsidian-900 border-emerald-500/60 shadow-2xl shadow-emerald-500/20'
                    : 'bg-obsidian-950/60 border-white/5 hover:border-white/20 hover:bg-obsidian-900/40'
                }`}
              >
                {isActive && (
                  <BorderBeam size={220} duration={8} colorFrom="#10b981" colorTo="#06b6d4" />
                )}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-2xl font-display font-black font-mono transition-colors ${isActive ? 'text-emerald-400' : 'text-slate-600'}`}>
                      {step.number}
                    </span>
                    <span className={`px-2.5 py-1 rounded-full border text-[10px] font-mono transition-colors ${
                      isActive ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 font-bold' : 'bg-white/5 border-white/10 text-slate-400'
                    }`}>
                      {step.timeline}
                    </span>
                  </div>

                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-4 transition-all duration-300 shadow-md ${
                    isActive ? 'bg-emerald-500 text-obsidian-950 border-emerald-400 scale-105' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-400 mb-4">
                    {step.subtitle}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {step.summary}
                  </p>
                </div>

                <div className={`pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold ${
                  isActive ? 'text-emerald-400' : 'text-slate-400'
                }`}>
                  <span>{isActive ? (isArabic ? 'المرحلة النشطة المعروضة' : 'Active Stage View') : (isArabic ? 'انقر لاستعراض التفاصيل' : 'Click to Inspect Stage')}</span>
                  <ArrowIcon className="w-3.5 h-3.5 transition-transform" />
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Detailed Active Step Inspector Deck with Fluid Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 rounded-3xl glass-panel border border-emerald-500/30 bg-gradient-to-br from-obsidian-900 via-obsidian-850 to-obsidian-950 relative overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                    {isArabic ? `مخرجات المرحلة ${steps[activeStep].number} التفصيلية` : `Stage ${steps[activeStep].number} In-Depth Deliverables`}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                    {steps[activeStep].authorityTag}
                  </span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {steps[activeStep].title}
                </h4>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {steps[activeStep].summary}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {steps[activeStep].details.map((detail, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.06 }}
                      className="flex items-start space-x-2.5 rtl:space-x-reverse text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-obsidian-950/80 border border-white/10 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    {isArabic ? 'مدة الإنجاز القياسية' : 'Estimated Fast-Track Turnaround'}
                  </span>
                  <div className="text-2xl font-display font-bold text-white mb-2 font-mono text-emerald-300">
                    {steps[activeStep].timeline}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {isArabic 
                      ? 'تتم كافة المعاملات والتوثيقات عبر بوابات الربط الإلكتروني المباشر دون أي تأخير.' 
                      : 'All submissions are executed directly via governmental API connections with zero intermediary delays.'}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenEstimator}
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-obsidian-950 font-display font-bold text-xs flex items-center justify-center space-x-2 rtl:space-x-reverse shadow-lg shadow-emerald-500/20 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{tCorp.ctaButton}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </motion.button>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

