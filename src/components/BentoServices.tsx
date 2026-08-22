import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  ShieldCheck, 
  Crown, 
  Users, 
  BadgePercent, 
  Briefcase, 
  Landmark, 
  Building, 
  FileCheck, 
  Clock, 
  Code2, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  Sparkles, 
  MessageSquare,
  Layers,
  Terminal,
  Cpu,
  ExternalLink
} from 'lucide-react';
import { CORPORATE_SERVICES, DIGITAL_ENGINE_SERVICES } from '../data/siteData';
import { DIGITAL_PORTFOLIO } from '../data/portfolioData';
import { DualEngineMode, ServiceItem } from '../types';
import { generateWhatsAppUrl, trackConversion } from '../lib/tracking';
import { TiltCard, BorderBeam, StaggerContainer, StaggerItem, ScrollReveal } from './motion/MotionPrimitives';

interface BentoServicesProps {
  mode: DualEngineMode;
  onOpenEstimator: () => void;
  isArabic: boolean;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Building2,
  ShieldCheck,
  Crown,
  Users,
  BadgePercent,
  Briefcase,
  Landmark,
  Building,
  FileCheck,
  Clock,
  Code2,
  Terminal,
  Layers,
  Sparkles,
  Cpu
};

export const BentoServices: React.FC<BentoServicesProps> = ({
  mode,
  isArabic
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'formation' | 'pro' | 'compliance'>('all');

  const filteredCorporate = activeCategory === 'all'
    ? CORPORATE_SERVICES
    : CORPORATE_SERVICES.filter(s => s.category === activeCategory);

  const handleServiceWhatsApp = (serviceTitle: string) => {
    trackConversion('whatsapp_click', { service: serviceTitle });
    const msg = isArabic
      ? `مرحباً إكسبيديا لخدمات الأعمال، أود الاستفسار عن خدمة *${serviceTitle}* في الإمارات. يرجى تزويدي بالمتطلبات والرسوم والمدة الزمنية للإنجاز.`
      : `Hello Expedia Business Services, I am interested in your *${serviceTitle}* service in UAE. Please share the procedure, turnaround time, and government fees.`;
    window.open(generateWhatsAppUrl(msg), '_blank');
  };

  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section id="services" className={`py-24 relative bg-obsidian-950/60 border-t border-white/5 overflow-hidden ${isArabic ? 'font-arabic' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider text-slate-300 mb-3">
                <span className={`w-2 h-2 rounded-full ${mode === 'corporate' ? 'bg-emerald-400' : 'bg-cyan-400'}`} />
                <span>
                  {mode === 'corporate' 
                    ? (isArabic ? 'منظومة خدمات التأسيس والعلاقات العامة' : 'Modular Bento Services Architecture')
                    : (isArabic ? 'الاستوديو الرقمي وتطوير الحلول البرمجية' : 'Creative Digital Engineering & Brand')
                  }
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
                {mode === 'corporate' ? (
                  isArabic ? (
                    <>
                      دليل خدمات التأسيس و{' '}
                      <span className="text-gradient-emerald">العلاقات العامة والمعاملات الحكومية</span>
                    </>
                  ) : (
                    <>
                      Corporate Formation &{' '}
                      <span className="text-gradient-emerald">PRO Services Catalogue</span>
                    </>
                  )
                ) : (
                  isArabic ? (
                    <>
                      ركائز الهندسة البرمجية و{' '}
                      <span className="text-gradient-digital">الاستوديو الرقمي الفاخر</span>
                    </>
                  ) : (
                    <>
                      Enterprise Software Engineering &{' '}
                      <span className="text-gradient-digital">Bespoke Digital Brand</span>
                    </>
                  )
                )}
              </h2>
            </div>

            {/* Corporate Category Filter Pills */}
            {mode === 'corporate' && (
              <div className="flex items-center p-1 rounded-xl bg-obsidian-900 border border-white/10 overflow-x-auto text-xs">
                {(
                  [
                    { id: 'all', label: isArabic ? 'كافة الخدمات (11)' : 'All 11 Modules' },
                    { id: 'formation', label: isArabic ? 'التأسيس والتراخيص' : 'Formation & Licenses' },
                    { id: 'pro', label: isArabic ? 'العلاقات العامة ووزارة العمل' : 'PRO & MoHRE' },
                    { id: 'compliance', label: isArabic ? 'الإقامات والضرائب' : 'Visas & Corporate Tax' },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`relative px-3.5 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap z-10 ${
                      activeCategory === tab.id 
                        ? 'text-obsidian-950 font-bold' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {activeCategory === tab.id && (
                      <motion.div
                        layoutId="activeBentoTab"
                        className="absolute inset-0 bg-emerald-500 rounded-lg shadow-md -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {tab.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Corporate Mode Bento Grid with 3D Gyroscopic Tilt & Stagger */}
        {mode === 'corporate' && (
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredCorporate.map((service, index) => {
                const IconComponent = ICON_MAP[service.iconName] || Building2;
                const isLarge = index === 0 || index === 3; // Asymmetric Bento Layout
                const title = isArabic && service.titleAr ? service.titleAr : service.title;
                const shortDesc = isArabic && service.shortDescAr ? service.shortDescAr : service.shortDesc;
                const directAEO = isArabic && service.directAnswerAEOAr ? service.directAnswerAEOAr : service.directAnswerAEO;
                const badge = isArabic && service.highlightBadgeAr ? service.highlightBadgeAr : service.highlightBadge;
                const timeline = isArabic && service.timelineAr ? service.timelineAr : service.timeline;
                const deliverables = isArabic && service.deliverablesAr ? service.deliverablesAr : service.deliverables;
                const hasBorderBeam = service.id === 'mainland-setup' || service.id === 'golden-visa' || service.id === 'pro-services';

                return (
                  <TiltCard
                    key={service.id}
                    id={service.anchorId}
                    maxTilt={6}
                    glowColor="rgba(16, 185, 129, 0.18)"
                    className={`group p-6 sm:p-7 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between transition-all duration-300 ${
                      isLarge ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-obsidian-900 via-obsidian-850 to-obsidian-900/90' : ''
                    }`}
                  >
                    {hasBorderBeam && (
                      <BorderBeam size={260} duration={10} colorFrom="#10b981" colorTo="#06b6d4" />
                    )}
                    
                    <div>
                      {/* Top Metadata */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-obsidian-950 transition-all duration-300 shadow-md">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          {badge && (
                            <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400 font-semibold shadow-sm">
                              {badge}
                            </span>
                          )}
                          <span className="text-xs font-mono text-slate-500">
                            #{String(service.number).padStart(2, '0')}
                          </span>
                        </div>
                      </div>

                      {/* Title & Short Description */}
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                        {title}
                      </h3>
                      
                      <p className="text-sm text-slate-300 mb-4 leading-relaxed font-normal">
                        {shortDesc}
                      </p>

                      {/* Direct Answer AEO Definition Box (For AI Search & GEO) */}
                      <div className="p-3.5 rounded-xl bg-obsidian-950/80 border border-white/5 mb-5 text-xs text-slate-300 leading-relaxed font-mono">
                        <span className="text-emerald-400 font-bold uppercase tracking-wider block mb-1 text-[10px]">
                          {isArabic ? 'معلومة تنظيمية معتمدة' : 'AEO Fast Fact'}
                        </span>
                        {directAEO}
                      </div>

                      {/* Key Deliverables List */}
                      <div className="space-y-2 mb-6">
                        {deliverables.slice(0, isLarge ? 5 : 3).map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-2 rtl:space-x-reverse text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                        {deliverables.length > (isLarge ? 5 : 3) && (
                          <div className="text-[11px] text-slate-500 rtl:pr-5 ltr:pl-5">
                            + {deliverables.length - (isLarge ? 5 : 3)} {isArabic ? 'مخرجات تنظيمية إضافية' : 'more regulatory deliverables'}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card Bottom: Timeline & Action CTAs */}
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-mono text-slate-500">{isArabic ? 'المدة التقديرية' : 'Turnaround'}</span>
                        <span className="text-xs font-semibold text-slate-200">{timeline}</span>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => handleServiceWhatsApp(title)}
                        className="px-4 py-2 rounded-xl bg-white/5 hover:bg-emerald-500 hover:text-obsidian-950 border border-white/10 hover:border-emerald-400 text-xs font-bold text-slate-200 transition-all flex items-center space-x-2 rtl:space-x-reverse group/btn shadow-md"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-400 group-hover/btn:text-obsidian-950" />
                        <span>{isArabic ? 'طلب استفسار فوري' : 'Inquire Now'}</span>
                        <ArrowIcon className="w-3 h-3 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </TiltCard>
                );
              })}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Digital & Creative Mode Bento Grid with 3D Tilt & Glowing Beams */}
        {mode === 'digital' && (
          <div id="digital-services" className="space-y-12 scroll-mt-24">
            
            {/* 4 Pillars of Digital Engineering */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DIGITAL_ENGINE_SERVICES.map((pillar) => {
                const IconComponent = ICON_MAP[pillar.icon] || Sparkles;
                const title = isArabic && pillar.titleAr ? pillar.titleAr : pillar.title;
                const category = isArabic && pillar.categoryAr ? pillar.categoryAr : pillar.category;
                const tagline = isArabic && pillar.taglineAr ? pillar.taglineAr : pillar.tagline;
                const features = isArabic && pillar.featuresAr ? pillar.featuresAr : pillar.features;

                return (
                  <TiltCard
                    key={pillar.id}
                    id={pillar.id}
                    maxTilt={7}
                    glowColor="rgba(6, 182, 212, 0.22)"
                    className="p-8 rounded-3xl glass-panel glass-panel-digital hover:bg-obsidian-900/90 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between scroll-mt-28"
                  >
                    <BorderBeam size={280} duration={12} colorFrom="#06b6d4" colorTo="#6366f1" />
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-obsidian-950 transition-all duration-300 shadow-md">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400 font-semibold shadow-sm">
                          {category}
                        </span>
                      </div>

                      <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {title}
                      </h3>
                      
                      <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                        {tagline}
                      </p>

                      <div className="space-y-2 mb-6">
                        {features.map((feat, idx) => (
                          <div key={idx} className="flex items-center space-x-2 rtl:space-x-reverse text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleServiceWhatsApp(title)}
                      className="w-full py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 hover:text-obsidian-950 border border-cyan-500/30 text-xs font-bold text-cyan-300 transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse mt-4 shadow-md"
                    >
                      <span>{isArabic ? 'طلب نطاق العمل والمواصفات التقنية' : 'Request Technical Scope'}</span>
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </motion.button>
                  </TiltCard>
                );
              })}
            </div>

            {/* Showcase Portfolio Bento Grid */}
            <ScrollReveal>
              <div>
                <div className="text-center max-w-2xl mx-auto mb-8">
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                    {isArabic ? 'دراسات الحالة والمشاريع المنفذة' : 'Featured Case Studies'}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                    {isArabic ? 'حلول وتطبيقات رقمية عالية الأثر والقيمة' : 'High-Impact Digital Implementations'}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {DIGITAL_PORTFOLIO.map((project) => {
                    const title = isArabic && project.titleAr ? project.titleAr : project.title;
                    const sector = isArabic && project.sectorAr ? project.sectorAr : project.sector;
                    const metric = isArabic && project.metricAr ? project.metricAr : project.metric;
                    const summary = isArabic && project.summaryAr ? project.summaryAr : project.summary;

                    return (
                      <TiltCard
                        key={project.id}
                        maxTilt={6}
                        glowColor="rgba(99, 102, 241, 0.2)"
                        className="p-6 rounded-3xl glass-panel glass-panel-digital flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-mono text-slate-400">{sector}</span>
                            <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono font-bold text-emerald-400 shadow-sm">
                              {metric}
                            </span>
                          </div>

                          <h4 className="text-xl font-display font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                            {title}
                          </h4>
                          <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                            {summary}
                          </p>

                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {project.technologies.map((tech, idx) => (
                              <span key={idx} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleServiceWhatsApp(isArabic ? `دراسة حالة: ${title}` : `Portfolio Case Study: ${project.title}`)}
                          className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 flex items-center justify-center space-x-1.5 rtl:space-x-reverse transition-colors shadow-sm"
                        >
                          <span>{isArabic ? 'استعراض البنية التقنية' : 'Explore Architecture'}</span>
                          <ExternalLink className="w-3 h-3 text-slate-400" />
                        </motion.button>
                      </TiltCard>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

          </div>
        )}

      </div>
    </section>
  );
};
