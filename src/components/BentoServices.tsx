import React, { useState } from 'react';
import { motion } from 'motion/react';
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
  ChevronDown,
  CircleCheck,
  Sparkles,
  MessageSquare,
  Layers,
  Terminal,
  Cpu,
  ExternalLink
} from 'lucide-react';
import { CORPORATE_SERVICES, DIGITAL_ENGINE_SERVICES } from '../data/siteData';
import { DIGITAL_PORTFOLIO } from '../data/portfolioData';
import { DualEngineMode } from '../types';
import { generateWhatsAppUrl, trackConversion } from '../lib/tracking';
import { InteractiveCard, ScrollReveal } from './motion/MotionPrimitives';
import { SectionHeader } from './SectionHeader';
import { useEnterOnChange } from '../hooks/useEnterOnChange';

interface BentoServicesProps {
  mode: DualEngineMode;
  onOpenEstimator: () => void;
  isArabic: boolean;
  onNavigateSlug?: (slug: string) => void;
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
  const enter = useEnterOnChange(activeCategory);

  const filteredCorporate = activeCategory === 'all'
    ? CORPORATE_SERVICES
    : CORPORATE_SERVICES.filter(s => s.category === activeCategory);
  // The first card takes two columns only when that leaves the last row full.
  const featureFirst = (filteredCorporate.length + 1) % 3 === 0;

  const handleServiceWhatsApp = (serviceTitle: string) => {
    trackConversion('whatsapp_click', { service: serviceTitle });
    const msg = isArabic
      ? `مرحباً إكسبيديا لخدمات الأعمال، أود الاستفسار عن خدمة *${serviceTitle}* في الإمارات. يرجى تزويدي بالمتطلبات والرسوم والمدة الزمنية للإنجاز.`
      : `Hello Expedia Business Services, I am interested in your *${serviceTitle}* service in UAE. Please share the procedure, turnaround time, and government fees.`;
    window.open(generateWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  const filters = (
    [
      { id: 'all', label: isArabic ? 'كافة الخدمات (11)' : 'All 11 Modules' },
      { id: 'formation', label: isArabic ? 'التأسيس والتراخيص' : 'Formation & Licenses' },
      { id: 'pro', label: isArabic ? 'العلاقات العامة ووزارة العمل' : 'PRO & MoHRE' },
      { id: 'compliance', label: isArabic ? 'الإقامات والضرائب' : 'Visas & Corporate Tax' },
    ] as const
  );

  return (
    <section id="services" className="section border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionHeader
          eyebrow={
            mode === 'corporate'
              ? (isArabic ? 'منظومة خدمات التأسيس والعلاقات العامة' : 'Modular Bento Services Architecture')
              : (isArabic ? 'الاستوديو الرقمي وتطوير الحلول البرمجية' : 'Creative Digital Engineering & Brand')
          }
          title={
            mode === 'corporate'
              ? (isArabic ? 'دليل خدمات التأسيس و العلاقات العامة والمعاملات الحكومية' : 'Corporate Formation & PRO Services Catalogue')
              : (isArabic ? 'ركائز الهندسة البرمجية و الاستوديو الرقمي الفاخر' : 'Enterprise Software Engineering & Bespoke Digital Brand')
          }
          actions={
            mode === 'corporate' ? (
              <div className="seg" role="group" aria-label={isArabic ? 'تصفية الخدمات' : 'Filter services'}>
                {filters.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    aria-pressed={activeCategory === tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    className="seg-item"
                  >
                    {activeCategory === tab.id && (
                      <motion.span
                        layoutId="activeBentoTab"
                        className="absolute inset-0 -z-10 rounded-[0.625rem] bg-accent"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    {tab.label}
                  </button>
                ))}
              </div>
            ) : undefined
          }
        />

        {/* Corporate catalogue */}
        {mode === 'corporate' && (
          <div key={activeCategory} className={`${enter} mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3`}>
            {filteredCorporate.map((service, index) => {
              const IconComponent = ICON_MAP[service.iconName] || Building2;
              const featured = featureFirst && index === 0;
              const title = isArabic && service.titleAr ? service.titleAr : service.title;
              const shortDesc = isArabic && service.shortDescAr ? service.shortDescAr : service.shortDesc;
              const directAEO = isArabic && service.directAnswerAEOAr ? service.directAnswerAEOAr : service.directAnswerAEO;
              const badge = isArabic && service.highlightBadgeAr ? service.highlightBadgeAr : service.highlightBadge;
              const timeline = isArabic && service.timelineAr ? service.timelineAr : service.timeline;
              const deliverables = isArabic && service.deliverablesAr ? service.deliverablesAr : service.deliverables;
              const shown = featured ? deliverables.length : 3;

              return (
                <InteractiveCard
                  key={service.id}
                  id={service.anchorId}
                  className={`group flex flex-col p-6 sm:p-7 ${featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-emerald-500/25 bg-emerald-500/10 text-emerald-400 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-obsidian-950">
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </span>
                    {badge && <span className="chip chip-accent">{badge}</span>}
                  </div>

                  <h3 className="mt-5 text-xl font-bold leading-snug text-white sm:text-2xl">{title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-7 text-slate-300">{shortDesc}</p>

                  {/* Direct answer (kept in the markup for search and AI answer engines) */}
                  <div className="note mt-5">
                    <span className="note-label">{isArabic ? 'معلومة تنظيمية' : 'Regulatory Fast Fact'}</span>
                    {directAEO}
                  </div>

                  <div className="mb-6">
                    <ul className={`mt-5 gap-x-8 gap-y-2.5 ${featured ? 'grid lg:grid-cols-2' : 'space-y-2.5'}`}>
                      {deliverables.slice(0, shown).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm leading-6 text-slate-300">
                          <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {deliverables.length > shown && (
                      // Native disclosure: the remaining deliverables stay in the markup (crawlable) and open with Enter/Space.
                      <details className="group/more mt-3">
                        <summary className="flex cursor-pointer list-none items-center gap-2 rounded-md py-1 ps-[1.625rem] text-sm text-slate-400 transition-colors hover:text-white [&::-webkit-details-marker]:hidden">
                          <span>
                            + {deliverables.length - shown} {isArabic ? 'مخرجات تنظيمية إضافية' : 'more regulatory deliverables'}
                          </span>
                          <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-open/more:rotate-180" aria-hidden="true" />
                        </summary>
                        <ul className="mt-3 space-y-2.5">
                          {deliverables.slice(shown).map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-sm leading-6 text-slate-300">
                              <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </details>
                    )}
                  </div>

                  <div className="mt-auto flex items-end justify-between gap-4 border-t border-white/10 pt-5">
                    <div>
                      <span className="block text-sm text-slate-400">{isArabic ? 'المدة التقديرية' : 'Turnaround'}</span>
                      <span className="text-sm font-semibold text-white">{timeline}</span>
                    </div>
                    <button type="button" onClick={() => handleServiceWhatsApp(title)} className="btn btn-secondary btn-sm shrink-0">
                      <MessageSquare className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                      <span>{isArabic ? 'طلب استفسار فوري' : 'Inquire Now'}</span>
                      <ArrowIcon className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </InteractiveCard>
              );
            })}
          </div>
        )}

        {/* Digital studio: four pillars, then the kinds of platform we build */}
        {mode === 'digital' && (
          <div id="digital-services" className="mt-12 space-y-20">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {DIGITAL_ENGINE_SERVICES.map((pillar) => {
                const IconComponent = ICON_MAP[pillar.icon] || Sparkles;
                const title = isArabic && pillar.titleAr ? pillar.titleAr : pillar.title;
                const category = isArabic && pillar.categoryAr ? pillar.categoryAr : pillar.category;
                const tagline = isArabic && pillar.taglineAr ? pillar.taglineAr : pillar.tagline;
                const features = isArabic && pillar.featuresAr ? pillar.featuresAr : pillar.features;

                return (
                  <InteractiveCard key={pillar.id} id={pillar.id} glow className="group flex flex-col p-7 sm:p-8">
                    <div className="flex items-start justify-between gap-3">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-cyan-500/25 bg-cyan-500/10 text-cyan-400 transition-colors duration-300 group-hover:bg-cyan-500 group-hover:text-obsidian-950">
                        <IconComponent className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <span className="chip chip-accent">{category}</span>
                    </div>

                    <h3 className="mt-5 text-2xl font-bold leading-snug text-white">{title}</h3>
                    <p className="mt-2 text-[0.9375rem] leading-7 text-slate-300">{tagline}</p>

                    <ul className="mb-7 mt-6 space-y-2.5">
                      {features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm leading-6 text-slate-300">
                          <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <button type="button" onClick={() => handleServiceWhatsApp(title)} className="btn btn-secondary mt-auto w-full">
                      <span>{isArabic ? 'طلب نطاق العمل والمواصفات التقنية' : 'Request Technical Scope'}</span>
                      <ArrowIcon className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </InteractiveCard>
                );
              })}
            </div>

            <ScrollReveal>
              <div>
                <p className="eyebrow mb-4">{isArabic ? 'أنواع المشاريع التي ننفذها' : 'Project Types We Build'}</p>
                <h3 className="max-w-2xl font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                  {isArabic ? 'نماذج من المنصات الرقمية التي نطورها' : 'Examples of Digital Platforms We Develop'}
                </h3>

                <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                  {DIGITAL_PORTFOLIO.map((project) => {
                    const title = isArabic && project.titleAr ? project.titleAr : project.title;
                    const sector = isArabic && project.sectorAr ? project.sectorAr : project.sector;
                    const metric = isArabic && project.metricAr ? project.metricAr : project.metric;
                    const summary = isArabic && project.summaryAr ? project.summaryAr : project.summary;

                    return (
                      <InteractiveCard key={project.id} glow className="group flex flex-col p-6">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-sm text-slate-400">{sector}</span>
                          <span className="chip chip-gold">{metric}</span>
                        </div>

                        <h4 className="mt-4 text-xl font-bold leading-snug text-white">{title}</h4>
                        <p className="mt-2 text-sm leading-6 text-slate-400">{summary}</p>

                        <ul className="mb-6 mt-5 flex flex-wrap gap-1.5" aria-label={isArabic ? 'التقنيات' : 'Technologies'}>
                          {project.technologies.map((tech, idx) => (
                            <li key={idx} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-xs text-slate-300">
                              {tech}
                            </li>
                          ))}
                        </ul>

                        <button
                          type="button"
                          onClick={() => handleServiceWhatsApp(isArabic ? `مشروع مماثل: ${title}` : `Similar project: ${project.title}`)}
                          className="btn btn-secondary btn-sm mt-auto w-full"
                        >
                          <span>{isArabic ? 'استعراض البنية التقنية' : 'Explore Architecture'}</span>
                          <ExternalLink className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                        </button>
                      </InteractiveCard>
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
