import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Sparkles, Cpu, CheckCircle2, RotateCcw, Zap, Layers, Code, Play } from 'lucide-react';

interface DigitalCinematicHeroProps {
  isArabic: boolean;
  onLogoDocked: (docked: boolean) => void;
  onExploreServices: () => void;
  onBookConsultation: () => void;
}

const TERMINAL_LINES = [
  { text: '$ npx antigravity-engine compile --target=expedia-digital-studio', color: 'text-cyan-400 font-bold' },
  { text: '✓ Initializing UAE Sovereign Architecture [Next.js 15 + Three.js 3D]...', color: 'text-emerald-400' },
  { text: '✓ Loading Vector Assets & Holographic Brand Shader Mesh...', color: 'text-indigo-300' },
  { text: '✓ Optimizing Sub-Second LCP, AEO Knowledge Graph & Geo-Location Data...', color: 'text-teal-300' },
  { text: '✓ Compiling 3D Cybernetic Master Asset: EXPEDIA_BRAND_V4.OBJ', color: 'text-goldMuted font-semibold' },
  { text: '⚡ BUILD READY: Materializing 3D Holographic Entity into Viewport [100%]', color: 'text-cyan-300 font-bold animate-pulse' },
];

export const DigitalCinematicHero: React.FC<DigitalCinematicHeroProps> = ({
  isArabic,
  onLogoDocked,
  onExploreServices,
  onBookConsultation,
}) => {
  const [animStage, setAnimStage] = useState<'terminal' | 'materialize' | 'flying' | 'docked'>('terminal');
  const [visibleLines, setVisibleLines] = useState<number>(1);
  const [progress, setProgress] = useState<number>(0);
  const [targetCoords, setTargetCoords] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
    setVisibleLines(1);
    setProgress(15);
    updateTargetCoords();

    // Stage 1: Fast typing terminal lines
    const line1 = setTimeout(() => { setVisibleLines(2); setProgress(35); }, 300);
    const line2 = setTimeout(() => { setVisibleLines(3); setProgress(60); }, 650);
    const line3 = setTimeout(() => { setVisibleLines(4); setProgress(80); }, 1000);
    const line4 = setTimeout(() => { setVisibleLines(5); setProgress(95); }, 1350);
    const line5 = setTimeout(() => { setVisibleLines(6); setProgress(100); }, 1700);

    // Stage 2: Materialize 3D holographic logo in center
    const matTimer = setTimeout(() => {
      setAnimStage('materialize');
    }, 2100);

    // Stage 3: Fly and scale down to top-left navbar
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
      clearTimeout(line1);
      clearTimeout(line2);
      clearTimeout(line3);
      clearTimeout(line4);
      clearTimeout(line5);
      clearTimeout(matTimer);
      clearTimeout(flyTimer);
      clearTimeout(dockTimer);
    };
  };

  useEffect(() => {
    const cleanup = runSequence();
    return cleanup;
  }, []);

  const handleReplay = () => {
    runSequence();
  };

  const handleSkip = () => {
    setAnimStage('docked');
    onLogoDocked(true);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-5xl mx-auto flex flex-col items-center">
      
      {/* Visual Sequence Viewport */}
      <div className="relative w-full min-h-[440px] sm:min-h-[480px] flex flex-col items-center justify-center">

        {/* STAGE 1: Interactive Coding Terminal */}
        <AnimatePresence>
          {animStage === 'terminal' && (
            <motion.div
              key="terminal-window"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-3xl rounded-2xl bg-obsidian-950/90 border border-cyan-500/30 backdrop-blur-2xl shadow-2xl shadow-cyan-950/50 overflow-hidden font-mono text-left z-20"
            >
              {/* Terminal Window Bar */}
              <div className="px-4 py-3 bg-obsidian-900/90 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-400 font-medium">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>antigravity-ide :: compiling-expedia-brand.tsx</span>
                </div>
                <div className="text-[11px] text-cyan-400 font-bold">
                  {progress}%
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 space-y-2 text-xs sm:text-sm min-h-[220px]">
                {TERMINAL_LINES.slice(0, visibleLines).map((line, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`flex items-start space-x-2 ${line.color}`}
                  >
                    <span className="text-slate-500 select-none">{idx + 1}</span>
                    <span className="leading-relaxed">{line.text}</span>
                  </motion.div>
                ))}

                {/* Blinking Prompt Cursor */}
                <div className="flex items-center space-x-2 text-cyan-400 pt-1">
                  <span className="text-slate-500 select-none">{visibleLines + 1}</span>
                  <span className="animate-pulse font-bold text-base">▋</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 w-full bg-obsidian-900 overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-400"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.3 }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* STAGE 2: 3D Hologram Materialization (Center Stage) */}
        <AnimatePresence>
          {animStage === 'materialize' && (
            <motion.div
              key="hologram-stage"
              initial={{ opacity: 0, scale: 0.5, rotateY: -30, rotateX: 20 }}
              animate={{ 
                opacity: 1, 
                scale: [0.6, 1.15, 1],
                rotateY: [ -20, 15, 0 ],
                rotateX: [ 15, -10, 0 ]
              }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center justify-center text-center z-20"
            >
              {/* 3D Holographic Perspective Rings & Portal Glow */}
              <div className="absolute -inset-16 bg-gradient-to-tr from-cyan-500/30 via-indigo-500/20 to-purple-600/30 rounded-full blur-3xl animate-pulse pointer-events-none" />
              
              <div className="relative p-8 sm:p-10 rounded-3xl bg-obsidian-900/60 border border-cyan-400/40 backdrop-blur-xl shadow-[0_0_80px_rgba(6,182,212,0.4)]">
                
                {/* Hologram Scanline Effect */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none rounded-3xl overflow-hidden"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.4) 1px, transparent 1px)',
                    backgroundSize: '100% 4px'
                  }}
                />

                {/* Big 3D Expedia Logo */}
                <motion.div
                  animate={{
                    y: [-6, 6, -6],
                    rotateZ: [-1, 1, -1]
                  }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="relative z-10 filter drop-shadow-[0_15px_35px_rgba(6,182,212,0.6)]"
                >
                  <img 
                    src="/expedia-latest-logo.png" 
                    alt="Expedia Business Services" 
                    className="h-20 sm:h-28 md:h-36 w-auto max-w-[340px] sm:max-w-[440px] md:max-w-[520px] object-contain brightness-125 contrast-110 scale-105"
                  />
                </motion.div>

                {/* Holographic Badge */}
                <div className="mt-4 inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[11px] font-mono text-cyan-300">
                  <Zap className="w-3 h-3 text-cyan-400 animate-spin" />
                  <span>3D SOVEREIGN ASSET COMPILED · ANTIGRAVITY ENGINE</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* STAGE 3: Flying and Scaling to Top-Left Navbar Spot */}
        {animStage === 'flying' && targetCoords && (
          <motion.div
            key="flying-logo"
            initial={{
              position: 'fixed',
              top: '42%',
              left: '50%',
              x: '-50%',
              y: '-50%',
              scale: 2.2,
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
            className="pointer-events-none filter drop-shadow-[0_10px_30px_rgba(6,182,212,0.8)]"
          >
            <div className="relative">
              {/* Flight Energy Tail Pulse */}
              <div className="absolute -inset-4 bg-cyan-400/40 rounded-full blur-xl animate-ping" />
              <img 
                src="/expedia-latest-logo.png" 
                alt="Expedia Logo Flying" 
                className="h-14 sm:h-16 w-auto max-w-[260px] sm:max-w-[300px] object-contain brightness-125"
              />
            </div>
          </motion.div>
        )}

        {/* STAGE 4: Final Docked State & Interactive Showcase */}
        {animStage === 'docked' && (
          <motion.div
            key="docked-showcase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl flex flex-col items-center text-center space-y-6"
          >
            {/* Holographic Live Status Capsule */}
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono backdrop-blur-md shadow-lg shadow-cyan-950/50">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{isArabic ? 'تم ربط الهوية الرقمية وتثبيتها في شريط التنقل بنجاح' : 'Digital Brand Engine Online · Docked to Navigation'}</span>
            </div>

            {/* Feature Highlights Grid for Digital Studio */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-2">
              <div className="p-5 rounded-2xl bg-obsidian-900/80 border border-white/10 hover:border-cyan-500/40 transition-all text-left rtl:text-right group">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                  <Code className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-sm text-white mb-1">
                  {isArabic ? 'هندسة برمجية متقدمة' : 'Full-Stack Web & Apps'}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {isArabic 
                    ? 'بناء منصات وتطبيقات Next.js و React فائقة السرعة مع كود مصدري مملوك لك 100%.' 
                    : 'Bespoke Next.js & React architectures with 100% intellectual property ownership.'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-obsidian-900/80 border border-white/10 hover:border-indigo-500/40 transition-all text-left rtl:text-right group">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3 group-hover:scale-110 transition-transform">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-sm text-white mb-1">
                  {isArabic ? 'محركات الذكاء وأتمتة CRM' : 'AI & Custom CRM Portals'}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {isArabic 
                    ? 'أنظمة إدارة الأعمال، عروض الأسعار، والفواتير المؤتمتة مع أمان عالي وعزل للبيانات.' 
                    : 'Tailored enterprise CRM, invoicing, and quotation automation built for UAE commerce.'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-obsidian-900/80 border border-white/10 hover:border-emerald-500/40 transition-all text-left rtl:text-right group">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3 group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-sm text-white mb-1">
                  {isArabic ? 'تهيئة محركات البحث والذكاء' : 'SEO / AEO / GEO Dominance'}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {isArabic 
                    ? 'تصدر نتائج محركات البحث التقليدية والذكاء الاصطناعي (ChatGPT, Gemini, Perplexity).' 
                    : 'Optimized for generative AI search engines and localized Google UAE ranking.'}
                </p>
              </div>
            </div>

            {/* Action Bar & Replay Option */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={onExploreServices}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-obsidian-950 font-display font-bold text-xs shadow-lg shadow-cyan-500/25 transition-all"
              >
                {isArabic ? 'استكشف ركائز الاستوديو الرقمي' : 'Explore Digital Engineering Pillars'}
              </button>
              
              <button
                onClick={onBookConsultation}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-xs transition-colors"
              >
                {isArabic ? 'طلب استشارة برمجية مباشرة' : 'Request Architecture Consultation'}
              </button>

              <button
                onClick={handleReplay}
                className="px-4 py-3.5 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs flex items-center space-x-1.5 rtl:space-x-reverse transition-colors"
                title="Replay Antigravity 3D Compilation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{isArabic ? 'إعادة تشغيل حركة التجميع 3D' : 'Replay 3D Intro'}</span>
              </button>
            </div>
          </motion.div>
        )}

      </div>

      {/* Skip Button if user wants to bypass during animation */}
      {animStage !== 'docked' && (
        <button
          onClick={handleSkip}
          className="mt-4 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-[11px] font-mono text-slate-400 hover:text-slate-200 transition-colors"
        >
          {isArabic ? 'تخطي الحركة ⏭' : 'Skip Intro ⏭'}
        </button>
      )}

    </div>
  );
};
