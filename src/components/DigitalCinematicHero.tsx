import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  Sparkles, 
  Cpu, 
  CheckCircle2, 
  RotateCcw, 
  Zap, 
  Layers, 
  Code2, 
  Play, 
  ArrowRight,
  Database,
  Search,
  ShieldCheck,
  Globe2,
  Gauge,
  Lock
} from 'lucide-react';

interface DigitalCinematicHeroProps {
  isArabic: boolean;
  onLogoDocked: (docked: boolean) => void;
  onExploreServices: () => void;
  onBookConsultation: () => void;
}

interface IdeTab {
  id: string;
  name: string;
  lang: string;
  lines: { text: string; color: string }[];
}

const IDE_TABS: IdeTab[] = [
  {
    id: 'architecture',
    name: 'architecture.config.ts',
    lang: 'TypeScript',
    lines: [
      { text: '// Antigravity Engine :: Expedia Sovereign Dual-Core Setup', color: 'text-slate-500' },
      { text: 'import { NextGenApp, NeuralMesh, AeoKnowledgeGraph } from "@expedia/core";', color: 'text-indigo-400 font-semibold' },
      { text: '', color: 'text-transparent' },
      { text: 'export const digitalStudio = new NextGenApp({', color: 'text-cyan-300 font-bold' },
      { text: '  jurisdiction: "Abu Dhabi · Dubai, UAE",', color: 'text-emerald-300' },
      { text: '  architecture: "Zero-Bloat Full-Stack (Next.js 15 + React 19)",', color: 'text-emerald-300' },
      { text: '  performance: { lcp: "0.4s", lighthouse: 100, fps: 60 },', color: 'text-teal-300' },
      { text: '  aiSearch: { aeo: true, geo: true, llmIndexing: "ChatGPT & Perplexity" },', color: 'text-goldMuted' },
      { text: '  ownership: "100% Client Intellectual Property & Source Code Handover"', color: 'text-cyan-300' },
      { text: '});', color: 'text-cyan-300 font-bold' },
      { text: 'await digitalStudio.materialize3DVisualEntity(); // 100% COMPILED', color: 'text-emerald-400 font-mono font-bold animate-pulse' },
    ]
  },
  {
    id: 'shader',
    name: 'holographic3D.glsl',
    lang: 'GLSL Shaders',
    lines: [
      { text: '// GPU Shader :: 3D Volumetric Vector Hologram', color: 'text-slate-500' },
      { text: '#version 300 es', color: 'text-purple-400' },
      { text: 'precision highp float;', color: 'text-purple-400' },
      { text: 'uniform vec3 u_neonGlow; // Electric Cyan & Emerald', color: 'text-cyan-300' },
      { text: 'in vec3 v_normal;', color: 'text-indigo-300' },
      { text: 'out vec4 fragColor;', color: 'text-indigo-300' },
      { text: 'void main() {', color: 'text-cyan-400 font-bold' },
      { text: '  float rim = 1.0 - max(dot(v_normal, vec3(0.0, 0.0, 1.0)), 0.0);', color: 'text-emerald-300' },
      { text: '  fragColor = vec4(u_neonGlow * pow(rim, 2.5), 1.0); // 3D Mesh Ready', color: 'text-teal-300 font-bold' },
      { text: '}', color: 'text-cyan-400 font-bold' },
    ]
  },
  {
    id: 'crm',
    name: 'enterpriseCrm.ts',
    lang: 'TypeScript',
    lines: [
      { text: '// Enterprise CRM :: Automated Multi-Branch Workflows', color: 'text-slate-500' },
      { text: 'export async function dispatchAutomatedInvoice(client: CorporateClient) {', color: 'text-cyan-300 font-bold' },
      { text: '  const tammSync = await TAMMGateway.verifyTradeLicense(client.cnNumber);', color: 'text-emerald-300' },
      { text: '  const invoice = await generateVatCompliantPdf({ rate: "5% UAE FTA", status: "cleared" });', color: 'text-indigo-300' },
      { text: '  return dispatchWhatsAppAlert(client.phone, invoice.secureUrl);', color: 'text-goldMuted' },
      { text: '}', color: 'text-cyan-300 font-bold' },
    ]
  }
];

export const DigitalCinematicHero: React.FC<DigitalCinematicHeroProps> = ({
  isArabic,
  onLogoDocked,
  onExploreServices,
  onBookConsultation,
}) => {
  const [animStage, setAnimStage] = useState<'terminal' | 'materialize' | 'flying' | 'docked'>('terminal');
  const [activeTab, setActiveTab] = useState<string>('architecture');
  const [visibleLinesCount, setVisibleLinesCount] = useState<number>(2);
  const [progress, setProgress] = useState<number>(10);
  const [mouseTilt, setMouseTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeSandboxTab, setActiveSandboxTab] = useState<'web' | 'crm' | 'aeo'>('web');
  const [targetCoords, setTargetCoords] = useState<{ x: number; y: number } | null>(null);

  // Measure target navbar position
  const updateTargetCoords = () => {
    const targetEl = document.getElementById('navbar-logo-target');
    if (targetEl) {
      const rect = targetEl.getBoundingClientRect();
      setTargetCoords({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    } else {
      setTargetCoords({ x: 120, y: 35 });
    }
  };

  useEffect(() => {
    updateTargetCoords();
    window.addEventListener('resize', updateTargetCoords);
    window.addEventListener('scroll', updateTargetCoords);
    return () => {
      window.removeEventListener('resize', updateTargetCoords);
      window.removeEventListener('scroll', updateTargetCoords);
    };
  }, []);

  const runSequence = () => {
    onLogoDocked(false);
    setAnimStage('terminal');
    setActiveTab('architecture');
    setVisibleLinesCount(2);
    setProgress(15);
    updateTargetCoords();

    // Stage 1: Multi-line IDE compilation typing
    const t1 = setTimeout(() => { setVisibleLinesCount(4); setProgress(35); }, 250);
    const t2 = setTimeout(() => { setVisibleLinesCount(7); setProgress(65); }, 550);
    const t3 = setTimeout(() => { setActiveTab('shader'); setVisibleLinesCount(5); setProgress(80); }, 900);
    const t4 = setTimeout(() => { setActiveTab('architecture'); setVisibleLinesCount(11); setProgress(100); }, 1300);

    // Stage 2: Materialize Grand 3D Holographic Logo in Center
    const matTimer = setTimeout(() => {
      setAnimStage('materialize');
    }, 1800);

    // Stage 3: Fly and scale down smoothly to top-left navbar
    const flyTimer = setTimeout(() => {
      updateTargetCoords();
      setAnimStage('flying');
    }, 4200);

    // Stage 4: Snap and dock into navbar
    const dockTimer = setTimeout(() => {
      setAnimStage('docked');
      onLogoDocked(true);
    }, 5500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(matTimer);
      clearTimeout(flyTimer);
      clearTimeout(dockTimer);
    };
  };

  useEffect(() => {
    const cleanup = runSequence();
    return cleanup;
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setMouseTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseTilt({ x: 0, y: 0 });
  };

  const handleReplay = () => {
    runSequence();
  };

  const handleSkip = () => {
    setAnimStage('docked');
    onLogoDocked(true);
  };

  const currentTabObj = IDE_TABS.find(t => t.id === activeTab) || IDE_TABS[0];

  return (
    <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center">
      
      {/* Visual Sequence Viewport */}
      <div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full min-h-[480px] sm:min-h-[520px] flex flex-col items-center justify-center"
      >

        {/* STAGE 1: Full-Featured High-Tech Developer IDE Terminal */}
        <AnimatePresence>
          {animStage === 'terminal' && (
            <motion.div
              key="terminal-window"
              initial={{ opacity: 0, scale: 0.92, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20, filter: 'blur(12px)' }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-4xl rounded-2xl bg-obsidian-950/95 border border-cyan-500/30 backdrop-blur-2xl shadow-[0_0_60px_rgba(6,182,212,0.25)] overflow-hidden font-mono text-left z-20"
            >
              {/* IDE Top Chrome Bar */}
              <div className="px-4 py-3 bg-obsidian-900/90 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block shadow-sm"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block shadow-sm"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm"></span>
                  <span className="text-xs text-slate-500 font-semibold pl-2 hidden sm:inline">
                    Expedia Digital Studio Studio v4.2 [Antigravity Architecture]
                  </span>
                </div>

                {/* Live Micro-Metrics */}
                <div className="flex items-center space-x-3 text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono">
                    ⚡ 0.4ms LCP
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                    100% Score
                  </span>
                  <span className="text-cyan-300 font-bold font-mono">
                    {progress}%
                  </span>
                </div>
              </div>

              {/* IDE Tab Switcher */}
              <div className="flex items-center bg-obsidian-950 border-b border-white/5 px-2 pt-1.5 overflow-x-auto text-xs">
                {IDE_TABS.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-3 py-1.5 rounded-t-lg transition-colors border-t border-x ${
                      activeTab === tab.id
                        ? 'bg-obsidian-900/90 text-cyan-300 border-white/10 font-semibold shadow-sm'
                        : 'text-slate-500 border-transparent hover:text-slate-300'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{tab.name}</span>
                  </button>
                ))}
              </div>

              {/* Terminal Code Body */}
              <div className="relative p-5 sm:p-6 space-y-1.5 text-xs sm:text-[13px] min-h-[250px] overflow-hidden">
                
                {/* Laser Sweep Scanline passing horizontally */}
                <motion.div 
                  animate={{ y: [0, 240, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                  className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-75 shadow-[0_0_15px_#06b6d4] pointer-events-none"
                />

                {currentTabObj.lines.slice(0, visibleLinesCount).map((line, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`flex items-start space-x-3 ${line.color}`}
                  >
                    <span className="text-slate-600 select-none w-6 text-right shrink-0">{idx + 1}</span>
                    <span className="leading-relaxed whitespace-pre-wrap">{line.text}</span>
                  </motion.div>
                ))}

                {/* Animated Blinking Cursor */}
                <div className="flex items-center space-x-3 text-cyan-400 pt-1">
                  <span className="text-slate-600 select-none w-6 text-right shrink-0">{visibleLinesCount + 1}</span>
                  <span className="animate-pulse font-bold text-base">▋</span>
                </div>
              </div>

              {/* Compilation Progress Bar */}
              <div className="h-1.5 w-full bg-obsidian-900 overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-400"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.25 }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* STAGE 2: Grand 3D Holographic Expedia Logo (Scale 2.8x with 3D Depth Tilt) */}
        <AnimatePresence>
          {animStage === 'materialize' && (
            <motion.div
              key="hologram-stage"
              initial={{ opacity: 0, scale: 0.4, rotateY: -35, rotateX: 25 }}
              animate={{ 
                opacity: 1, 
                scale: [0.5, 1.2, 1],
                rotateY: mouseTilt.x || 0,
                rotateX: mouseTilt.y || 0,
              }}
              exit={{ opacity: 0, scale: 1.15, filter: 'blur(8px)' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{ perspective: 1200 }}
              className="relative flex flex-col items-center justify-center text-center z-20"
            >
              {/* Grand Volumetric Neon Rays & Radial Energy Rings */}
              <div className="absolute -inset-24 bg-gradient-to-tr from-cyan-500/35 via-indigo-500/25 to-purple-600/35 rounded-full blur-[100px] animate-pulse pointer-events-none" />
              <div className="absolute -inset-10 border border-cyan-500/20 rounded-full animate-ping pointer-events-none opacity-40" />

              <div className="relative p-8 sm:p-12 md:p-14 rounded-3xl bg-obsidian-900/70 border border-cyan-400/50 backdrop-blur-2xl shadow-[0_0_100px_rgba(6,182,212,0.45)]">
                
                {/* 3D Hologram Scanline Effect */}
                <div 
                  className="absolute inset-0 opacity-25 pointer-events-none rounded-3xl overflow-hidden"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px)',
                    backgroundSize: '100% 4px'
                  }}
                />

                {/* Grand 3D Expedia Logo */}
                <motion.div
                  animate={{
                    y: [-8, 8, -8],
                    rotateZ: [-1, 1, -1]
                  }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                  className="relative z-10 filter drop-shadow-[0_20px_45px_rgba(6,182,212,0.7)]"
                >
                  <img 
                    src="/expedia-latest-logo.png" 
                    alt="Expedia Business Services" 
                    className="h-24 sm:h-32 md:h-40 w-auto max-w-[360px] sm:max-w-[480px] md:max-w-[580px] object-contain brightness-125 contrast-115 scale-105"
                  />
                </motion.div>

                {/* Client Confidence Credibility Badges */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono text-cyan-300">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center space-x-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>100% Client Source Code Ownership</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/30 flex items-center space-x-1.5">
                    <Gauge className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Sub-Second 0.4s LCP Performance</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 flex items-center space-x-1.5">
                    <Globe2 className="w-3.5 h-3.5 text-teal-300" />
                    <span>AEO / GEO Search Indexed</span>
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* STAGE 3: Flying & Smooth Scale-Down to Header Navbar Target */}
        {animStage === 'flying' && targetCoords && (
          <motion.div
            key="flying-logo"
            initial={{
              position: 'fixed',
              top: '42%',
              left: '50%',
              x: '-50%',
              y: '-50%',
              scale: 2.5,
              opacity: 1,
              zIndex: 9999,
            }}
            animate={{
              top: targetCoords.y,
              left: targetCoords.x,
              x: '-50%',
              y: '-50%',
              scale: 1,
              opacity: 0.95,
            }}
            transition={{
              duration: 1.3,
              ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier swoop
            }}
            className="pointer-events-none filter drop-shadow-[0_10px_35px_rgba(6,182,212,0.85)]"
          >
            <div className="relative">
              {/* Flight Energy Tail Pulse */}
              <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400/40 via-indigo-500/30 to-emerald-400/40 rounded-full blur-2xl animate-ping" />
              <img 
                src="/expedia-latest-logo.png" 
                alt="Expedia Logo Flying" 
                className="h-14 sm:h-16 w-auto max-w-[260px] sm:max-w-[300px] object-contain brightness-125"
              />
            </div>
          </motion.div>
        )}

        {/* STAGE 4: Final Docked State & Interactive Product Architecture Sandbox */}
        {animStage === 'docked' && (
          <motion.div
            key="docked-showcase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-5xl flex flex-col items-center space-y-6"
          >
            {/* Holographic Status Ribbon */}
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono backdrop-blur-md shadow-lg shadow-cyan-950/50">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{isArabic ? 'الهندسة الرقمية جاهزة ومثبتة في شريط التنقل' : 'Antigravity Sovereign Digital Engine Online · Docked to Navigation'}</span>
            </div>

            {/* Interactive Architecture Sandbox Controller */}
            <div className="w-full rounded-3xl bg-obsidian-900/85 border border-white/10 backdrop-blur-2xl shadow-2xl p-6 sm:p-8">
              
              {/* Controller Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-6 border-b border-white/10 pb-4">
                <button
                  onClick={() => setActiveSandboxTab('web')}
                  className={`flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeSandboxTab === 'web'
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-obsidian-950 shadow-md shadow-cyan-500/25'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Code2 className="w-4 h-4" />
                  <span>{isArabic ? 'تطبيقات الويب والمنصات الذكية' : 'Full-Stack Web & Next.js Platforms'}</span>
                </button>

                <button
                  onClick={() => setActiveSandboxTab('crm')}
                  className={`flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeSandboxTab === 'crm'
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/25'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Database className="w-4 h-4" />
                  <span>{isArabic ? 'أنظمة CRM وأتمتة الأعمال' : 'Custom CRM & Business Portals'}</span>
                </button>

                <button
                  onClick={() => setActiveSandboxTab('aeo')}
                  className={`flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeSandboxTab === 'aeo'
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-obsidian-950 shadow-md shadow-emerald-500/25'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Search className="w-4 h-4" />
                  <span>{isArabic ? 'محركات الذكاء وهيمنة AEO/GEO' : 'AEO, GEO & Generative AI Search'}</span>
                </button>
              </div>

              {/* Tab 1: Web Applications Content */}
              {activeSandboxTab === 'web' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left rtl:text-right">
                  <div className="p-4 rounded-2xl bg-obsidian-950/80 border border-cyan-500/20">
                    <div className="text-xs font-mono text-cyan-400 uppercase font-bold mb-1">01 · Architecture</div>
                    <div className="text-sm font-bold text-white mb-1">Next.js 15 & React 19 Engine</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Zero-bloat server-side rendering, sub-second LCP, and bilingual Arabic/English responsive fluid layouts.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-obsidian-950/80 border border-cyan-500/20">
                    <div className="text-xs font-mono text-emerald-400 uppercase font-bold mb-1">02 · Performance</div>
                    <div className="text-sm font-bold text-white mb-1">100/100 Lighthouse & Core Web Vitals</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Optimized for rapid customer conversion, frictionless WhatsApp checkout, and zero client bounce rates.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-obsidian-950/80 border border-cyan-500/20">
                    <div className="text-xs font-mono text-goldMuted uppercase font-bold mb-1">03 · IP Sovereign Handover</div>
                    <div className="text-sm font-bold text-white mb-1">100% Full Source Code Ownership</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      No vendor lock-in or recurring template fees. Complete GitHub repository and production deployment transfer.
                    </p>
                  </div>
                </div>
              )}

              {/* Tab 2: Custom CRM Content */}
              {activeSandboxTab === 'crm' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left rtl:text-right">
                  <div className="p-4 rounded-2xl bg-obsidian-950/80 border border-indigo-500/20">
                    <div className="text-xs font-mono text-indigo-400 uppercase font-bold mb-1">01 · Multi-Tenant Isolation</div>
                    <div className="text-sm font-bold text-white mb-1">Company & Branch Isolation</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Enterprise role-based permissions (Super Admin, Manager, PRO Staff) with zero cross-tenant data leakage.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-obsidian-950/80 border border-indigo-500/20">
                    <div className="text-xs font-mono text-purple-400 uppercase font-bold mb-1">02 · Financial Automation</div>
                    <div className="text-sm font-bold text-white mb-1">UAE VAT Invoicing & Cashbook</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Automated 5% VAT invoices, quotation conversion, real-time banking reconciliation, and attachment tracking.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-obsidian-950/80 border border-indigo-500/20">
                    <div className="text-xs font-mono text-cyan-400 uppercase font-bold mb-1">03 · Government API Liaison</div>
                    <div className="text-sm font-bold text-white mb-1">TAMM & MOHRE Tracking</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Integrated document lifecycle tracking for commercial licenses, visa quotas, and labor file clearances.
                    </p>
                  </div>
                </div>
              )}

              {/* Tab 3: AEO & AI Search Content */}
              {activeSandboxTab === 'aeo' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left rtl:text-right">
                  <div className="p-4 rounded-2xl bg-obsidian-950/80 border border-emerald-500/20">
                    <div className="text-xs font-mono text-emerald-400 uppercase font-bold mb-1">01 · LLM Search Indexing</div>
                    <div className="text-sm font-bold text-white mb-1">ChatGPT, Perplexity & Gemini Citation</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Structured entity knowledge graphs that position your business as the direct verified answer in AI search.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-obsidian-950/80 border border-emerald-500/20">
                    <div className="text-xs font-mono text-teal-400 uppercase font-bold mb-1">02 · Localized GEO Authority</div>
                    <div className="text-sm font-bold text-white mb-1">Abu Dhabi & Dubai Google Rank</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Hyper-localized UAE commercial schema markup, Google Maps citation signals, and bilingual keyword dominance.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-obsidian-950/80 border border-emerald-500/20">
                    <div className="text-xs font-mono text-cyan-400 uppercase font-bold mb-1">03 · Conversion Architecture</div>
                    <div className="text-sm font-bold text-white mb-1">High-Velocity Lead Pipelines</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Frictionless interactive cost calculators, live tracking modals, and pre-filled WhatsApp lead generation funnels.
                    </p>
                  </div>
                </div>
              )}

              {/* Action Bar */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-white/10 mt-6">
                <button
                  onClick={onExploreServices}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-obsidian-950 font-display font-bold text-xs shadow-lg shadow-cyan-500/25 transition-all flex items-center space-x-2 rtl:space-x-reverse"
                >
                  <span>{isArabic ? 'استعراض خدمات الاستوديو الرقمي' : 'Explore Digital Engineering Pillars'}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </button>
                
                <button
                  onClick={onBookConsultation}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-xs transition-colors"
                >
                  {isArabic ? 'طلب استشارة برمجية فورية عبر واتساب' : 'Request WhatsApp Architecture Scope'}
                </button>

                <button
                  onClick={handleReplay}
                  className="px-4 py-3 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs flex items-center space-x-1.5 rtl:space-x-reverse transition-colors"
                  title="Replay Antigravity 3D Compilation"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'إعادة تشغيل حركة التجميع 3D' : 'Replay 3D Intro'}</span>
                </button>
              </div>

            </div>

          </motion.div>
        )}

      </div>

      {/* Skip Button during compilation */}
      {animStage !== 'docked' && (
        <button
          onClick={handleSkip}
          className="mt-3 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-[11px] font-mono text-slate-400 hover:text-slate-200 transition-colors"
        >
          {isArabic ? 'تخطي حركة التجميع ⏭' : 'Skip Intro ⏭'}
        </button>
      )}

    </div>
  );
};
