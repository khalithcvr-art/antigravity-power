import { preferredScrollBehavior } from '../hooks/useMotionPreference';
import { useMotionPreference } from '../hooks/useMotionPreference';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  Database,
  Search,
  ShieldCheck,
  Globe2,
  Gauge,
  Calculator,
  MessageSquare,
  Sparkles,
  RotateCcw,
  Zap,
  SkipForward
} from 'lucide-react';
import { BorderBeam } from './motion/MotionPrimitives';
import { TRANSLATIONS } from '../data/translations';
import { useEnterOnChange } from '../hooks/useEnterOnChange';

interface DigitalCinematicHeroProps {
  isArabic: boolean;
  onLogoDocked: (docked: boolean) => void;
  onOpenEstimator: () => void;
  onOpenTracker: () => void;
  onBookConsultation: () => void;
  onExploreServices: () => void;
}

interface IdeTab {
  id: string;
  name: string;
  lines: { text: string; color: string }[];
}

// Syntax colours stay inside the brand palette: comments slate, keywords cyan, strings emerald, values gold.
const IDE_TABS: IdeTab[] = [
  {
    id: 'architecture',
    name: 'architecture.config.ts',
    lines: [
      { text: '// Step 1: Initialize Sovereign Web & App Engine', color: 'text-slate-500 italic' },
      { text: 'import { SovereignEngine, NeuralMesh, AeoKnowledgeGraph } from "@expedia/core";', color: 'text-cyan-300' },
      { text: '', color: 'text-transparent' },
      { text: 'export const digitalStudio = new SovereignEngine({', color: 'text-cyan-200' },
      { text: '  jurisdiction: "Abu Dhabi · Dubai, UAE",', color: 'text-emerald-300' },
      { text: '  framework: "React 18 + Vite + Three.js 3D",', color: 'text-emerald-300' },
      { text: '  performance: { budget: "agreed per project", measured: true },', color: 'text-emerald-300' },
      { text: '  searchReadiness: { structuredData: true, sitemap: true },', color: 'text-gold-300' },
      { text: '  intellectualProperty: "100% Client Source Code & Asset Handover"', color: 'text-emerald-300' },
      { text: '});', color: 'text-cyan-200' },
      { text: 'await digitalStudio.materialize3DVisualEntity(); // [100% COMPILED]', color: 'text-emerald-300' },
    ]
  },
  {
    id: 'shader',
    name: 'holographic3D.glsl',
    lines: [
      { text: '// Step 2: GPU Volumetric Raymarching Shader', color: 'text-slate-500 italic' },
      { text: '#version 300 es', color: 'text-gold-300' },
      { text: 'precision highp float;', color: 'text-gold-300' },
      { text: 'uniform vec3 u_neonGlow; // Electric Cyan & Emerald', color: 'text-cyan-300' },
      { text: 'void main() {', color: 'text-cyan-200' },
      { text: '  vec3 logoVector = renderExpedia3DMesh(v_uv);', color: 'text-emerald-300' },
      { text: '  fragColor = vec4(logoVector * u_neonGlow, 1.0); // 3D Mesh Output', color: 'text-emerald-300' },
      { text: '}', color: 'text-cyan-200' },
    ]
  }
];

type Stage = 'terminal' | 'materialize' | 'flying' | 'docked';

// One sequence, about seven seconds: type, hold the lockup, fly the logo home, reveal the page.
const T_LOCKUP = 3400;
const T_FLIGHT = 5600;
const T_DOCK = 6900;

interface FlightPath { x0: number; y0: number; x1: number; y1: number; scale: number }

export const DigitalCinematicHero: React.FC<DigitalCinematicHeroProps> = ({
  isArabic,
  onLogoDocked,
  onOpenEstimator,
  onOpenTracker,
  onBookConsultation,
  onExploreServices,
}) => {
  const reducedMotion = useMotionPreference();
  const [animStage, setAnimStage] = useState<Stage>('terminal');
  const [activeTab, setActiveTab] = useState<string>('architecture');
  const [visibleLinesCount, setVisibleLinesCount] = useState<number>(2);
  const [progress, setProgress] = useState<number>(10);
  const [compiledBytes, setCompiledBytes] = useState<number>(0);
  const [activeSandboxTab, setActiveSandboxTab] = useState<'web' | 'crm' | 'aeo'>('web');
  const [flight, setFlight] = useState<FlightPath | null>(null);
  const enterPanel = useEnterOnChange(activeSandboxTab);

  // Every timer of the intro lives here, so Skip and Replay can cancel all of them.
  const timers = useRef<Array<ReturnType<typeof setTimeout> | ReturnType<typeof setInterval>>>([]);
  const lockupLogo = useRef<HTMLImageElement>(null);

  const tHero = isArabic ? TRANSLATIONS.ar.hero : TRANSLATIONS.en.hero;
  const tNav = isArabic ? TRANSLATIONS.ar.navbar : TRANSLATIONS.en.navbar;
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  const clearTimers = useCallback(() => {
    timers.current.forEach((id) => { clearTimeout(id as ReturnType<typeof setTimeout>); clearInterval(id as ReturnType<typeof setInterval>); });
    timers.current = [];
  }, []);
  const later = useCallback((fn: () => void, ms: number) => {
    timers.current.push(setTimeout(fn, ms));
  }, []);

  const startFlight = useCallback(() => {
    const from = lockupLogo.current?.getBoundingClientRect();
    // The real header logo (still invisible at this point) is both the landing spot and the size to land at.
    const target = document.querySelector<HTMLImageElement>('#navbar-logo-target img')?.getBoundingClientRect();
    if (from && target && target.height > 0) {
      setFlight({
        x0: from.left + from.width / 2,
        y0: from.top + from.height / 2,
        x1: target.left + target.width / 2,
        y1: target.top + target.height / 2,
        scale: Math.max(from.height / target.height, 1),
      });
    } else {
      setFlight(null);
    }
    setAnimStage('flying');
  }, []);

  const dock = useCallback(() => {
    clearTimers();
    setFlight(null);
    setAnimStage('docked');
    onLogoDocked(true);
  }, [clearTimers, onLogoDocked]);

  const runSequence = useCallback(() => {
    clearTimers();
    // Reduced motion: no timers, no flight. The page is simply there.
    if (reducedMotion) { dock(); return; }
    onLogoDocked(false);
    setAnimStage('terminal');
    setFlight(null);
    setActiveTab('architecture');
    setVisibleLinesCount(2);
    setProgress(15);
    setCompiledBytes(0);

    // Byte counter climbs while the console "compiles".
    timers.current.push(setInterval(() => {
      setCompiledBytes((prev) => Math.min(prev + Math.floor(Math.random() * 1200 + 400), 48320));
    }, 120));

    later(() => { setVisibleLinesCount(4); setProgress(30); }, 600);
    later(() => { setVisibleLinesCount(6); setProgress(50); }, 1200);
    later(() => { setVisibleLinesCount(8); setProgress(75); }, 1800);
    later(() => { setActiveTab('shader'); setVisibleLinesCount(4); setProgress(88); }, 2300);
    later(() => { setActiveTab('architecture'); setVisibleLinesCount(11); setProgress(100); }, 2900);
    later(() => { setCompiledBytes(48320); setAnimStage('materialize'); }, T_LOCKUP);
    later(startFlight, T_FLIGHT);
    later(dock, T_DOCK);
  }, [clearTimers, dock, later, onLogoDocked, reducedMotion, startFlight]);

  useEffect(() => {
    runSequence();
    return clearTimers;
  }, [runSequence, clearTimers]);

  const currentTabObj = IDE_TABS.find(t => t.id === activeTab) || IDE_TABS[0];
  const introPlaying = animStage !== 'docked';

  const pillars = {
    web: [
      { label: '01 · Architecture', title: 'Next.js & React Development', body: 'Server-side rendering, an agreed performance budget, and bilingual Arabic/English responsive layouts.' },
      { label: '02 · Performance', title: 'Core Web Vitals Measured Per Build', body: 'Built around customer conversion and WhatsApp enquiry flows, with results measured after launch.' },
      { label: '03 · IP Sovereign Handover', title: '100% Full Source Code Ownership', body: 'No vendor lock-in or recurring template fees. Complete GitHub repository and production deployment transfer.' },
    ],
    crm: [
      { label: '01 · Multi-Tenant Isolation', title: 'Company & Branch Isolation', body: 'Enterprise role-based permissions (Super Admin, Manager, PRO Staff) with zero cross-tenant data leakage.' },
      { label: '02 · Financial Automation', title: 'UAE VAT Invoicing & Cashbook', body: 'Automated 5% VAT invoices, quotation conversion, real-time banking reconciliation, and attachment tracking.' },
      { label: '03 · Government API Liaison', title: 'TAMM & MOHRE Tracking', body: 'Integrated document lifecycle tracking for commercial licenses, visa quotas, and labor file clearances.' },
    ],
    aeo: [
      { label: '01 · Answer Engine Optimization', title: 'AEO: AI Search Visibility', body: 'Structured knowledge graphs and schema markup that make your business the cited answer in ChatGPT, Gemini, and Perplexity AI responses.' },
      { label: '02 · Generative Engine Optimization', title: 'GEO: LLM Knowledge Indexing', body: 'Optimized content architecture and entity signals so large language models (LLMs) accurately cite your brand in AI-generated answers.' },
      { label: '03 · Sovereign Content Intelligence', title: 'Multi-Layer UAE SEO Dominance', body: 'Bilingual Arabic/English semantic content strategy — ranked on Google, Bing, and cited inside AI assistant platforms simultaneously.' },
    ],
  } as const;

  const sandboxTabs = [
    { id: 'web', icon: Code2, label: isArabic ? 'تطبيقات الويب والمنصات الذكية' : 'Full-Stack Web & Next.js Platforms' },
    { id: 'crm', icon: Database, label: isArabic ? 'أنظمة CRM وأتمتة الأعمال' : 'Custom CRM & Business Portals' },
    { id: 'aeo', icon: Search, label: isArabic ? 'محركات الذكاء وهيمنة AEO/GEO' : 'AEO, GEO & Generative AI Search' },
  ] as const;

  const step = (i: number) => ({ '--i': i } as React.CSSProperties);

  return (
    <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center">

      {/* Exactly one H1 at all times: this one stands in while the intro plays. */}
      {introPlaying && (
        <h1 className="sr-only">
          {tHero.digital.titleMain} {isArabic ? 'من الكود المصدري إلى منتج بصري متكامل' : 'From Zero Code to Sovereign Visual Products'}
        </h1>
      )}

      {/* ------------------------------------------------------------ Intro */}
      {introPlaying && (
        <div className="relative flex min-h-[34rem] w-full flex-col items-center justify-center gap-6 py-6">

          {/* Skip comes first in the tab order so the intro never traps a keyboard user. */}
          <button
            type="button"
            onClick={dock}
            className="btn btn-secondary btn-sm self-end"
          >
            <span>{isArabic ? 'تخطي حركة التجميع المباشر' : 'Skip Live Creation Intro'}</span>
            <SkipForward className="h-3.5 w-3.5" aria-hidden="true" />
          </button>

          <AnimatePresence mode="wait">
            {animStage === 'terminal' && (
              <motion.div
                key="console"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-cyan-500/30 bg-obsidian-950 text-left shadow-[0_40px_90px_-40px_rgb(var(--c-cyan-500)/0.4)] rtl:text-left"
                dir="ltr"
                aria-hidden="true"
              >
                <BorderBeam size={200} duration={7} colorFrom="rgb(var(--c-cyan-500))" colorTo="rgb(var(--c-emerald-500))" />

                {/* Title bar */}
                <div className="flex items-center gap-3 border-b border-white/10 bg-obsidian-900 px-4 py-3">
                  <span className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-obsidian-600" />
                    <span className="h-2.5 w-2.5 rounded-full bg-obsidian-600" />
                    <span className="h-2.5 w-2.5 rounded-full bg-obsidian-600" />
                  </span>
                  <span className="min-w-0 truncate font-mono text-xs text-slate-400">
                    Antigravity IDE :: Sovereign Digital Architecture
                  </span>
                </div>

                {/* File tabs */}
                <div className="flex border-b border-white/10 bg-obsidian-950 px-2 pt-1.5 font-mono text-xs">
                  {IDE_TABS.map(tab => (
                    <span
                      key={tab.id}
                      className={`flex items-center gap-2 rounded-t-lg border-x border-t px-3.5 py-2 transition-colors ${
                        activeTab === tab.id
                          ? 'border-white/10 bg-obsidian-900 text-cyan-300'
                          : 'border-transparent text-slate-500'
                      }`}
                    >
                      <Code2 className="h-3.5 w-3.5" />
                      {tab.name}
                    </span>
                  ))}
                </div>

                {/* Editor: gutter + code. Height is fixed so lines appear without moving anything. */}
                <div className="grid min-h-[19.5rem] grid-cols-[auto_1fr] font-mono text-[0.8125rem] leading-7 sm:text-sm">
                  <div className="select-none border-e border-white/5 bg-obsidian-900/40 px-3 text-right text-slate-600">
                    {currentTabObj.lines.map((_, idx) => (
                      <div key={idx} className={idx === visibleLinesCount - 1 ? 'text-slate-300' : ''}>{idx + 1}</div>
                    ))}
                  </div>
                  <div className="overflow-hidden py-0 pe-4 ps-4">
                    {currentTabObj.lines.map((line, idx) => {
                      const shown = idx < visibleLinesCount;
                      const current = idx === visibleLinesCount - 1;
                      return (
                        <div
                          key={`${activeTab}-${idx}`}
                          className={`whitespace-pre-wrap ${shown ? 'animate-[line-in_260ms_var(--ease-out)_both]' : 'invisible'} ${current ? 'bg-white/[0.04]' : ''} ${line.color}`}
                        >
                          {line.text || ' '}
                          {current && <span className="ms-0.5 inline-block w-2 animate-[caret_1s_steps(1)_infinite] bg-cyan-300 align-middle">&nbsp;</span>}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Status bar */}
                <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-obsidian-900 px-4 py-2 font-mono text-xs text-slate-400">
                  <span className="text-cyan-300">Phase 1: Source Compilation</span>
                  <span className="flex items-center gap-4 tnum">
                    <span className="hidden sm:inline">{compiledBytes.toLocaleString()} bytes</span>
                    <span className="text-cyan-300">{progress}%</span>
                  </span>
                </div>
                <div className="h-0.5 w-full bg-obsidian-800">
                  <div className="h-full bg-cyan-400 transition-[width] duration-300 ease-out" style={{ width: `${progress}%` }} />
                </div>
              </motion.div>
            )}

            {animStage === 'materialize' && (
              <motion.div
                key="lockup"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.25 } }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-3xl rounded-2xl border border-cyan-500/30 bg-obsidian-900/80 px-6 py-10 text-center shadow-[0_40px_90px_-40px_rgb(var(--c-cyan-500)/0.35)] backdrop-blur-2xl sm:px-12 sm:py-14"
              >
                <p className="font-mono text-xs text-cyan-300">
                  ⚡ CODE COMPILED → MATERIALIZING SOVEREIGN 3D ASSET
                </p>
                <img
                  ref={lockupLogo}
                  src="/expedia-latest-logo.png"
                  alt="Expedia Business Services"
                  width="940"
                  height="420"
                  className="mx-auto mt-6 h-24 w-auto object-contain sm:h-32 md:h-36"
                />
                <ul className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                  <li className="chip chip-accent"><ShieldCheck className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />100% Client Source Code Ownership</li>
                  <li className="chip chip-accent"><Gauge className="h-3.5 w-3.5" aria-hidden="true" />Performance Budget Agreed Per Project</li>
                  <li className="chip chip-accent"><Globe2 className="h-3.5 w-3.5" aria-hidden="true" />Structured Data &amp; Sitemaps</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* The one flight: the logo travels to the header, on transforms only. */}
          {animStage === 'flying' && flight && (
            <motion.div
              aria-hidden="true"
              initial={{ x: flight.x0, y: flight.y0, scale: flight.scale }}
              animate={{ x: flight.x1, y: flight.y1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none fixed left-0 top-0 z-[9999]"
            >
              <div className="-translate-x-1/2 -translate-y-1/2">
                <img
                  src="/expedia-latest-logo.png"
                  alt=""
                  width="940"
                  height="420"
                  className="h-12 w-auto object-contain sm:h-14 lg:h-16"
                />
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* ---------------------------------------------------------- Docked */}
      {!introPlaying && (
        <div className="flex w-full flex-col items-center">
          <div className="hero-in flex w-full flex-col items-center text-center">
            <p className="chip chip-accent" style={step(0)}>
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" aria-hidden="true" />
              <span>{tHero.digital.badge}</span>
              <span className="text-slate-500" aria-hidden="true">|</span>
              <span>{isArabic ? 'هندسة سيادية' : 'Sovereign Architecture'}</span>
            </p>

            <h1
              className="mt-6 max-w-4xl text-[clamp(2.25rem,4.6vw,3.75rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white"
              style={step(1)}
            >
              {tHero.digital.titleMain}{' '}
              <span className="mt-4 block text-[0.62em] font-semibold leading-[1.25] tracking-[-0.015em] text-slate-300">
                {isArabic ? 'من الكود المصدري إلى منتج بصري متكامل' : 'From Zero Code to Sovereign Visual Products'}
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9" style={step(2)}>
              {tHero.digital.subtitle}
            </p>

            <div className="mt-9 flex w-full max-w-3xl flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center" style={step(3)}>
              <button type="button" onClick={onOpenEstimator} className="btn btn-primary btn-lg">
                <Calculator className="h-5 w-5" aria-hidden="true" />
                <span>{tHero.digital.ctaStudio}</span>
                <ArrowIcon className="h-4 w-4" aria-hidden="true" />
              </button>
              <button type="button" onClick={onBookConsultation} className="btn btn-secondary btn-lg">
                <MessageSquare className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                <span>{tNav.whatsappDirect}</span>
              </button>
              <button
                type="button"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: preferredScrollBehavior() })}
                className="btn btn-ghost btn-lg"
              >
                <Zap className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                <span>{tHero.digital.ctaPortfolio}</span>
              </button>
            </div>
          </div>

          {/* Capability panel */}
          <div className="relative mt-16 w-full overflow-hidden rounded-[var(--radius-panel)] border border-white/10 bg-obsidian-900/85 p-6 text-start shadow-card backdrop-blur-2xl sm:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-center gap-2 border-b border-white/10 pb-5" role="group" aria-label={isArabic ? 'مجالات الاستوديو' : 'Studio capabilities'}>
              {sandboxTabs.map((tab) => {
                const Icon = tab.icon;
                const active = activeSandboxTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setActiveSandboxTab(tab.id)}
                    className={`btn btn-sm ${active ? 'btn-primary' : 'btn-ghost'}`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div key={activeSandboxTab} className={`${enterPanel} grid grid-cols-1 gap-4 md:grid-cols-3`}>
              {pillars[activeSandboxTab].map((card) => (
                <div key={card.label} className="rounded-2xl border border-white/10 bg-obsidian-950/70 p-5">
                  <div className="text-sm font-semibold text-gold-300">{card.label}</div>
                  <div className="mt-1.5 text-base font-bold text-white">{card.title}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{card.body}</p>
                </div>
              ))}
            </div>

            {/* Approach comparison */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-cyan-300">
                    {isArabic ? 'مقارنة في أسلوب البناء' : 'Architectural Approach Comparison'}
                  </div>
                  <div className="mt-0.5 text-lg font-bold text-white">
                    {isArabic ? 'القوالب الجاهزة مقابل التطوير المخصص' : 'Off-the-shelf templates vs bespoke development'}
                  </div>
                </div>
                <span className="chip">{isArabic ? 'مقارنة وصفية وليست قياساً' : 'Descriptive, not a measured benchmark'}</span>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-3 rounded-2xl border border-white/10 bg-obsidian-950/60 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-slate-300">
                      {isArabic ? 'الوكالات التقليدية (قوالب جاهزة)' : 'Standard Agency (WordPress / Templates)'}
                    </span>
                    <span className="chip chip-gold">{isArabic ? 'قيود القوالب' : 'Template limits'}</span>
                  </div>
                  <dl className="space-y-2 text-sm text-slate-400">
                    {[
                      [isArabic ? 'سرعة التحميل (LCP):' : 'Loading Speed (LCP):', isArabic ? 'يعتمد على القالب' : 'Theme-dependent'],
                      [isArabic ? 'تقييم جوجل للأداء:' : 'Google Lighthouse Score:', isArabic ? 'غير مُحسَّن عادةً' : 'Rarely optimised'],
                      [isArabic ? 'ملكية الكود المصدري:' : 'Source Code Ownership:', isArabic ? 'مقيد بالمنصة' : 'Platform lock-in'],
                      [isArabic ? 'البيانات المنظمة للمحتوى:' : 'Structured data markup:', isArabic ? 'محدودة' : 'Minimal'],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-4 border-b border-white/5 pb-2 last:border-b-0 last:pb-0">
                        <dt>{k}</dt>
                        <dd className="text-end text-slate-300">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* The one element with a moving edge: the recommended column. */}
                <div className="relative space-y-3 overflow-hidden rounded-2xl border border-cyan-500/40 bg-cyan-950/30 p-5 shadow-lg shadow-cyan-950/50">
                  <BorderBeam size={180} duration={10} colorFrom="rgb(var(--c-cyan-500))" colorTo="rgb(var(--c-emerald-500))" />
                  <div className="relative flex items-center justify-between gap-3">
                    <span className="flex items-center gap-2 text-sm font-semibold text-cyan-300">
                      <Sparkles className="h-4 w-4" aria-hidden="true" />
                      {isArabic ? 'تطوير مخصص من إكسبيديا' : 'Bespoke Expedia build'}
                    </span>
                    <span className="chip chip-accent">Enterprise Grade</span>
                  </div>
                  <dl className="relative space-y-2 text-sm text-slate-200">
                    {[
                      [isArabic ? 'سرعة التحميل (LCP):' : 'Loading Speed (LCP):', isArabic ? 'ميزانية متفق عليها وتُقاس' : 'Agreed budget, measured'],
                      [isArabic ? 'تقييم جوجل للأداء:' : 'Google Lighthouse Score:', isArabic ? 'يُقاس بعد الإطلاق' : 'Measured after launch'],
                      [isArabic ? 'ملكية الكود المصدري:' : 'Source Code Ownership:', isArabic ? 'نقل كامل للملكية' : 'Full IP transfer'],
                      [isArabic ? 'البيانات المنظمة للمحتوى:' : 'Structured data markup:', isArabic ? 'JSON-LD كامل' : 'Complete JSON-LD'],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-4 border-b border-cyan-500/15 pb-2 last:border-b-0 last:pb-0">
                        <dt>{k}</dt>
                        <dd className="text-end font-semibold text-cyan-200">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 border-t border-white/10 pt-6">
              <button type="button" onClick={onExploreServices} className="btn btn-primary">
                <span>{isArabic ? 'استعراض خدمات الاستوديو الرقمي' : 'Explore Digital Engineering Pillars'}</span>
                <ArrowIcon className="h-4 w-4" aria-hidden="true" />
              </button>
              <button type="button" onClick={onBookConsultation} className="btn btn-secondary">
                {isArabic ? 'طلب استشارة برمجية فورية عبر واتساب' : 'Request WhatsApp Architecture Scope'}
              </button>
              <button
                type="button"
                onClick={runSequence}
                className="btn btn-ghost"
                title="Replay Antigravity 3D Compilation"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                <span>{isArabic ? 'إعادة تشغيل حركة التجميع 3D' : 'Replay 3D Intro'}</span>
              </button>
            </div>
          </div>

          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({ behavior: preferredScrollBehavior() });
            }}
            className="group mt-10 inline-flex flex-col items-center gap-1 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
          >
            <span>{isArabic ? 'استعرض الخدمات' : 'Explore Services'}</span>
            <ChevronDown className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      )}

    </div>
  );
};
