import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  Sparkles, 
  Cpu, 
  CheckCircle2, 
  RotateCcw, 
  Zap, 
  Code2, 
  ArrowRight,
  Database,
  Search,
  ShieldCheck,
  Globe2,
  Gauge,
  Calculator,
  MessageSquare,
  Sparkle
} from 'lucide-react';
import { BorderBeam } from './motion/MotionPrimitives';
import { TRANSLATIONS } from '../data/translations';

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

const IDE_TABS: IdeTab[] = [
  {
    id: 'architecture',
    name: 'architecture.config.ts',
    lines: [
      { text: '// Step 1: Initialize Sovereign Web & App Engine', color: 'text-slate-500 italic' },
      { text: 'import { SovereignEngine, NeuralMesh, AeoKnowledgeGraph } from "@expedia/core";', color: 'text-indigo-400 font-semibold' },
      { text: '', color: 'text-transparent' },
      { text: 'export const digitalStudio = new SovereignEngine({', color: 'text-cyan-300 font-bold' },
      { text: '  jurisdiction: "Abu Dhabi · Dubai, UAE",', color: 'text-emerald-300' },
      { text: '  framework: "Next.js 15 + React 19 + Three.js 3D",', color: 'text-emerald-300' },
      { text: '  performance: { lcp: "0.4s", lighthouse: 100, latency: "1.2ms" },', color: 'text-teal-300' },
      { text: '  aiSearchEngine: { aeo: true, geo: true, llmIndexing: "Active" },', color: 'text-goldMuted' },
      { text: '  intellectualProperty: "100% Client Source Code & Asset Handover"', color: 'text-cyan-300' },
      { text: '});', color: 'text-cyan-300 font-bold' },
      { text: 'await digitalStudio.materialize3DVisualEntity(); // [100% COMPILED]', color: 'text-emerald-400 font-mono font-bold animate-pulse' },
    ]
  },
  {
    id: 'shader',
    name: 'holographic3D.glsl',
    lines: [
      { text: '// Step 2: GPU Volumetric Raymarching Shader', color: 'text-slate-500 italic' },
      { text: '#version 300 es', color: 'text-purple-400' },
      { text: 'precision highp float;', color: 'text-purple-400' },
      { text: 'uniform vec3 u_neonGlow; // Electric Cyan & Emerald', color: 'text-cyan-300' },
      { text: 'void main() {', color: 'text-cyan-400 font-bold' },
      { text: '  vec3 logoVector = renderExpedia3DMesh(v_uv);', color: 'text-emerald-300' },
      { text: '  fragColor = vec4(logoVector * u_neonGlow, 1.0); // 3D Mesh Output', color: 'text-teal-300 font-bold' },
      { text: '}', color: 'text-cyan-400 font-bold' },
    ]
  }
];

export const DigitalCinematicHero: React.FC<DigitalCinematicHeroProps> = ({
  isArabic,
  onLogoDocked,
  onOpenEstimator,
  onOpenTracker,
  onBookConsultation,
  onExploreServices,
}) => {
  // Stages:
  // 1. 'terminal' (0s - 4.5s): Terminal in center, typing line-by-line slowly and clearly
  // 2. 'materialize' (4.5s - 8.5s): Code morphs into Grand 3D Logo with glowing wireframes & explanation
  // 3. 'flying' (8.5s - 11.0s): Smooth, slow, majestic flight curving up-left to header logo position
  // 4. 'docked' (11.0s+): Snaps into navbar, and hero headlines, directional animated buttons (Left/Right) appear!
  const [animStage, setAnimStage] = useState<'terminal' | 'materialize' | 'flying' | 'docked'>('terminal');
  const [activeTab, setActiveTab] = useState<string>('architecture');
  const [visibleLinesCount, setVisibleLinesCount] = useState<number>(2);
  const [progress, setProgress] = useState<number>(10);
  const [mouseTilt, setMouseTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeSandboxTab, setActiveSandboxTab] = useState<'web' | 'crm' | 'aeo'>('web');
  const [targetCoords, setTargetCoords] = useState<{ x: number; y: number } | null>(null);

  const tHero = isArabic ? TRANSLATIONS.ar.hero : TRANSLATIONS.en.hero;
  const tNav = isArabic ? TRANSLATIONS.ar.navbar : TRANSLATIONS.en.navbar;

  // Measure target navbar position dynamically
  const updateTargetCoords = () => {
    const targetEl = document.getElementById('navbar-logo-target');
    if (targetEl) {
      const rect = targetEl.getBoundingClientRect();
      setTargetCoords({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    } else {
      setTargetCoords({ x: 140, y: 40 });
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

    // Stage 1: Paced, clear line-by-line typing in terminal
    const t1 = setTimeout(() => { setVisibleLinesCount(4); setProgress(30); }, 700);
    const t2 = setTimeout(() => { setVisibleLinesCount(6); setProgress(50); }, 1400);
    const t3 = setTimeout(() => { setVisibleLinesCount(8); setProgress(75); }, 2100);
    const t4 = setTimeout(() => { setActiveTab('shader'); setVisibleLinesCount(4); setProgress(88); }, 2800);
    const t5 = setTimeout(() => { setActiveTab('architecture'); setVisibleLinesCount(11); setProgress(100); }, 3500);

    // Stage 2: Transformation / 3D Hologram Materialization in center (4.5s)
    const matTimer = setTimeout(() => {
      setAnimStage('materialize');
    }, 4500);

    // Stage 3: Smooth, majestic flight & scale-down to header (8.5s)
    const flyTimer = setTimeout(() => {
      updateTargetCoords();
      setAnimStage('flying');
    }, 8500);

    // Stage 4: Snap and dock into navbar (11.0s) -> triggers hero buttons choreography!
    const dockTimer = setTimeout(() => {
      setAnimStage('docked');
      onLogoDocked(true);
    }, 11000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
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
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 22;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -22;
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
      
      {/* 
        PRE-DOCKED STATE:
        During compilation and 3D flying flight, ONLY the central creation canvas is visible 
      */}
      {animStage !== 'docked' && (
        <div 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full min-h-[520px] sm:min-h-[580px] flex flex-col items-center justify-center py-8"
        >

          {/* STAGE 1: Interactive Paced IDE Terminal (Center Stage) */}
          <AnimatePresence>
            {animStage === 'terminal' && (
              <motion.div
                key="terminal-window"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -25, filter: 'blur(14px)' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-3xl rounded-3xl bg-obsidian-950/95 border border-cyan-500/40 backdrop-blur-2xl shadow-[0_0_80px_rgba(6,182,212,0.3)] overflow-hidden font-mono text-left z-20"
              >
                {/* IDE Top Bar */}
                <div className="px-5 py-3.5 bg-obsidian-900/90 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block shadow-sm"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block shadow-sm"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm"></span>
                    <span className="text-xs text-slate-400 font-semibold pl-2 hidden sm:inline">
                      Antigravity IDE :: Sovereign Digital Architecture
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono text-[11px]">
                      ⚡ Phase 1: Source Compilation
                    </span>
                    <span className="text-cyan-300 font-bold font-mono">
                      {progress}%
                    </span>
                  </div>
                </div>

                {/* IDE Tab Bar */}
                <div className="flex items-center bg-obsidian-950 border-b border-white/5 px-3 pt-2 text-xs">
                  {IDE_TABS.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-3.5 py-2 rounded-t-xl transition-all border-t border-x ${
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

                {/* Code Body with Scanning Laser Beam */}
                <div className="relative p-6 space-y-2 text-xs sm:text-sm min-h-[270px] overflow-hidden">
                  
                  {/* Laser Scanline Beam */}
                  <motion.div 
                    animate={{ y: [0, 260, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80 shadow-[0_0_20px_#06b6d4] pointer-events-none"
                  />

                  {currentTabObj.lines.slice(0, visibleLinesCount).map((line, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex items-start space-x-3 ${line.color}`}
                    >
                      <span className="text-slate-600 select-none w-6 text-right shrink-0 font-mono text-[11px]">{idx + 1}</span>
                      <span className="leading-relaxed whitespace-pre-wrap">{line.text}</span>
                    </motion.div>
                  ))}

                  {/* Blinking Cursor */}
                  <div className="flex items-center space-x-3 text-cyan-400 pt-1">
                    <span className="text-slate-600 select-none w-6 text-right shrink-0 font-mono text-[11px]">{visibleLinesCount + 1}</span>
                    <span className="animate-pulse font-bold text-base">▋</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="h-1.5 w-full bg-obsidian-900 overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-400"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: 'easeOut', duration: 0.35 }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* STAGE 2: Code Transforms into Grand 3D Holographic Expedia Logo */}
          <AnimatePresence>
            {animStage === 'materialize' && (
              <motion.div
                key="hologram-stage"
                initial={{ opacity: 0, scale: 0.35, rotateY: -40, rotateX: 30 }}
                animate={{ 
                  opacity: 1, 
                  scale: [0.4, 1.25, 1],
                  rotateY: mouseTilt.x || 0,
                  rotateX: mouseTilt.y || 0,
                }}
                exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ perspective: 1200 }}
                className="relative flex flex-col items-center justify-center text-center z-20"
              >
                {/* Volumetric Neon Portal Glow */}
                <div className="absolute -inset-28 bg-gradient-to-tr from-cyan-500/40 via-indigo-500/30 to-purple-600/40 rounded-full blur-[120px] animate-pulse pointer-events-none" />
                <div className="absolute -inset-12 border border-cyan-400/30 rounded-full animate-ping pointer-events-none opacity-50" />

                <div className="relative p-8 sm:p-14 md:p-16 rounded-3xl bg-obsidian-900/80 border border-cyan-400/60 backdrop-blur-2xl shadow-[0_0_120px_rgba(6,182,212,0.5)]">
                  
                  {/* Holographic Wireframe Scanlines */}
                  <div 
                    className="absolute inset-0 opacity-30 pointer-events-none rounded-3xl overflow-hidden"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.6) 1px, transparent 1px)',
                      backgroundSize: '100% 4px'
                    }}
                  />

                  {/* Transformation Headline Callout */}
                  <div className="mb-4 inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 text-xs font-mono font-bold tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-spin" />
                    <span>⚡ CODE COMPILED → MATERIALIZING SOVEREIGN 3D ASSET</span>
                  </div>

                  {/* Grand 3D Logo */}
                  <motion.div
                    animate={{
                      y: [-8, 8, -8],
                      rotateZ: [-1, 1, -1]
                    }}
                    transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                    className="relative z-10 filter drop-shadow-[0_25px_50px_rgba(6,182,212,0.8)]"
                  >
                    <img 
                      src="/expedia-latest-logo.png" 
                      alt="Expedia Business Services" 
                      className="h-24 sm:h-36 md:h-44 w-auto max-w-[380px] sm:max-w-[500px] md:max-w-[620px] object-contain brightness-125 contrast-115 scale-105"
                    />
                  </motion.div>

                  {/* Live Value Proposition Badges */}
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono text-cyan-300">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/40 flex items-center space-x-1.5 shadow-sm">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>100% Client Source Code Ownership</span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-400/40 flex items-center space-x-1.5 shadow-sm">
                      <Gauge className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Sub-Second 0.4s LCP Speed</span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/40 flex items-center space-x-1.5 shadow-sm">
                      <Globe2 className="w-3.5 h-3.5 text-teal-300" />
                      <span>AEO / GEO Search Indexed</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* STAGE 3: Smooth, Majestic Curved Flight to Top-Left Navbar */}
          {animStage === 'flying' && targetCoords && (
            <motion.div
              key="flying-logo"
              initial={{
                position: 'fixed',
                top: '45%',
                left: '50%',
                x: '-50%',
                y: '-50%',
                scale: 2.8,
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
                duration: 2.2, // Slower, silky smooth flight
                ease: [0.25, 1, 0.5, 1], // Smooth parabolic easing
              }}
              className="pointer-events-none filter drop-shadow-[0_15px_40px_rgba(6,182,212,0.9)]"
            >
              <div className="relative">
                {/* Radiant Flight Particle Tail */}
                <div className="absolute -inset-8 bg-gradient-to-r from-cyan-400/50 via-indigo-500/40 to-emerald-400/50 rounded-full blur-3xl animate-ping" />
                <img 
                  src="/expedia-latest-logo.png" 
                  alt="Expedia Logo Flying" 
                  className="h-14 sm:h-16 w-auto max-w-[260px] sm:max-w-[300px] object-contain brightness-125"
                />
              </div>
            </motion.div>
          )}

          {/* Skip Button during compilation */}
          <button
            onClick={handleSkip}
            className="mt-6 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors border border-white/10"
          >
            {isArabic ? 'تخطي حركة التجميع المباشر ⏭' : 'Skip Live Creation Intro ⏭'}
          </button>

        </div>
      )}

      {/* 
        STAGE 4: DOCKED STATE
        After landing in the navbar, the full Hero section reveals dynamically with 
        choreographed animations for Badge, Title, Subtitle, and Directional Buttons!
      */}
      {animStage === 'docked' && (
        <motion.div
          key="docked-hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center"
        >
          {/* 1. Eyebrow Badge drops smoothly from top */}
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-6"
          >
            <div className="relative inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-1.5 rounded-full bg-obsidian-900/95 border border-cyan-500/30 text-xs backdrop-blur-md shadow-2xl overflow-hidden">
              <BorderBeam size={180} duration={8} colorFrom="#06b6d4" colorTo="#6366f1" />
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-slate-200 font-medium tracking-wide">
                {tHero.digital.badge}
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-cyan-400 font-mono font-semibold">
                {isArabic ? 'هندسة سيادية' : 'Sovereign Architecture'}
              </span>
            </div>
          </motion.div>

          {/* 2. Main Title & Rotating Kinetic Line rises smoothly */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto mb-6"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.15] mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
              {tHero.digital.titleMain}{' '}
              <span className="block text-gradient-digital font-extrabold mt-1">
                {isArabic ? 'من الكود المصدري إلى منتج بصري متكامل' : 'From Zero Code to Sovereign Visual Products'}
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {tHero.digital.subtitle}
            </p>
          </motion.div>

          {/* 3. Action Buttons with Directional Choreography (Left, Center Pulse, Right) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full max-w-3xl">
            
            {/* Button 1: Sweeps in from LEFT */}
            <motion.button
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenEstimator}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-display font-bold text-sm sm:text-base flex items-center justify-center space-x-3 rtl:space-x-reverse transition-all duration-300 shadow-xl bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-obsidian-950 shadow-cyan-500/30 hover:shadow-cyan-500/50"
            >
              <Calculator className="w-5 h-5" />
              <span>{tHero.digital.ctaStudio}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </motion.button>

            {/* Button 2: Zooms up from CENTER with radiant pulse */}
            <motion.button
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={onBookConsultation}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-obsidian-900 hover:bg-obsidian-850 border border-cyan-500/40 text-white font-display font-semibold text-sm sm:text-base flex items-center justify-center space-x-3 rtl:space-x-reverse transition-all duration-300 hover:border-cyan-400 shadow-lg shadow-black/50"
            >
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              <span>{tNav.whatsappDirect}</span>
            </motion.button>

            {/* Button 3: Sweeps in from RIGHT */}
            <motion.button
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenTracker}
              className="w-full sm:w-auto px-5 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-sm font-semibold flex items-center justify-center space-x-2 rtl:space-x-reverse transition-all"
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>{tHero.digital.ctaPortfolio}</span>
            </motion.button>

          </div>

          {/* 4. Interactive Architecture Sandbox Controller */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full rounded-3xl bg-obsidian-900/85 border border-white/10 backdrop-blur-2xl shadow-2xl p-6 sm:p-8"
          >
            {/* Controller Module Selector */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6 border-b border-white/10 pb-4">
              <button
                onClick={() => setActiveSandboxTab('web')}
                className={`flex items-center space-x-2 rtl:space-x-reverse px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
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
                className={`flex items-center space-x-2 rtl:space-x-reverse px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
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
                className={`flex items-center space-x-2 rtl:space-x-reverse px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
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

            {/* Live Performance & Sovereign Benchmark Comparison Matrix */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                    {isArabic ? 'مقارنة الأداء والسيادة البرمجية' : 'Live Architectural Benchmark'}
                  </div>
                  <div className="text-sm font-bold text-white">
                    {isArabic ? 'وكالات القوالب التقليدية مقابل منظومة إكسبيديا السيادية' : 'Standard Agency Templates vs Expedia Sovereign NextGen'}
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-[11px]">
                  100% Verified Metrics
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Standard Agency */}
                <div className="p-5 rounded-2xl bg-red-950/20 border border-red-500/20 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-red-400">
                      {isArabic ? 'الوكالات التقليدية (قوالب جاهزة)' : 'Standard Agency (WordPress / Templates)'}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/20 text-red-300">Poor ROI</span>
                  </div>

                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex justify-between border-b border-red-500/10 pb-1.5">
                      <span>{isArabic ? 'سرعة التحميل (LCP):' : 'Loading Speed (LCP):'}</span>
                      <span className="font-mono text-red-400 font-bold">4.2s (Slow / High Bounce)</span>
                    </div>
                    <div className="flex justify-between border-b border-red-500/10 pb-1.5">
                      <span>{isArabic ? 'تقييم جوجل للأداء:' : 'Google Lighthouse Score:'}</span>
                      <span className="font-mono text-red-400 font-bold">42 / 100</span>
                    </div>
                    <div className="flex justify-between border-b border-red-500/10 pb-1.5">
                      <span>{isArabic ? 'ملكية الكود المصدري:' : 'Source Code Ownership:'}</span>
                      <span className="font-mono text-red-400">0% (Vendor Lock-in)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{isArabic ? 'الظهور في محركات الذكاء الاصطناعي:' : 'AI Search Citation (AEO):'}</span>
                      <span className="font-mono text-red-400">Not Indexed</span>
                    </div>
                  </div>
                </div>

                {/* Expedia Sovereign Architecture */}
                <div className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/40 space-y-3 relative overflow-hidden shadow-lg shadow-cyan-950/50">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-xs font-mono font-bold text-cyan-300 flex items-center space-x-1.5 rtl:space-x-reverse">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{isArabic ? 'منظومة إكسبيديا السيادية' : 'Expedia Sovereign NextGen'}</span>
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">Enterprise Grade</span>
                  </div>

                  <div className="space-y-2 text-xs text-slate-200 relative z-10">
                    <div className="flex justify-between border-b border-cyan-500/15 pb-1.5">
                      <span>{isArabic ? 'سرعة التحميل (LCP):' : 'Loading Speed (LCP):'}</span>
                      <span className="font-mono text-emerald-400 font-bold">0.4s (Instant Sub-Second)</span>
                    </div>
                    <div className="flex justify-between border-b border-cyan-500/15 pb-1.5">
                      <span>{isArabic ? 'تقييم جوجل للأداء:' : 'Google Lighthouse Score:'}</span>
                      <span className="font-mono text-emerald-400 font-bold">100 / 100 Perfect</span>
                    </div>
                    <div className="flex justify-between border-b border-cyan-500/15 pb-1.5">
                      <span>{isArabic ? 'ملكية الكود المصدري:' : 'Source Code Ownership:'}</span>
                      <span className="font-mono text-cyan-300 font-bold">100% Full IP Transfer</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{isArabic ? 'الظهور في محركات الذكاء الاصطناعي:' : 'AI Search Citation (AEO):'}</span>
                      <span className="font-mono text-teal-300 font-bold">Top Verified AI Answer</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Actions & Replay Control */}
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

          </motion.div>
        </motion.div>
      )}

    </div>
  );
};
