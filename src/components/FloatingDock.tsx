import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  Calculator, 
  Search, 
  ArrowUp, 
  Sparkles, 
  Building2,
  PhoneCall
} from 'lucide-react';
import { DualEngineMode } from '../types';
import { generateWhatsAppUrl, generateCallUrl, trackConversion } from '../lib/tracking';
import { TRANSLATIONS } from '../data/translations';

interface FloatingDockProps {
  mode: DualEngineMode;
  onToggleMode: (newMode: DualEngineMode) => void;
  onOpenEstimator: () => void;
  onOpenTracker: () => void;
  isArabic?: boolean;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({
  mode,
  onToggleMode,
  onOpenEstimator,
  onOpenTracker,
  isArabic = false,
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const t = isArabic ? TRANSLATIONS.ar.dock : TRANSLATIONS.en.dock;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    trackConversion('whatsapp_click', { source: 'floating_dock' });
    window.open(generateWhatsAppUrl(), '_blank');
  };

  const handleCall = () => {
    trackConversion('call_click', { source: 'floating_dock' });
    window.location.href = generateCallUrl();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div 
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-xl w-[92%] sm:w-auto print:hidden"
    >
      <div className="flex items-center justify-between sm:justify-center p-2 rounded-full bg-obsidian-950/90 border border-white/20 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.85)] gap-1.5 sm:gap-2">
        
        {/* WhatsApp Fast Action with glowing pulse */}
        <motion.button
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleWhatsApp}
          className="relative flex items-center space-x-2 rtl:space-x-reverse px-4 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 text-obsidian-950 text-xs font-bold transition-all shadow-lg shadow-emerald-500/30 overflow-hidden group"
        >
          <span className="animate-ping absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-300 opacity-60 pointer-events-none" />
          <MessageSquare className="w-4 h-4 fill-obsidian-950" />
          <span className="hidden sm:inline font-display font-black tracking-wide">{t.whatsapp}</span>
        </motion.button>

        {/* Direct Call Button */}
        <motion.button
          whileHover={{ scale: 1.08, y: -1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCall}
          className="p-2.5 rounded-full bg-white/5 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-400 transition-all border border-white/10 relative"
          title={isArabic ? 'اتصال هاتفي مباشر: +971 56 4425 950' : 'Direct Call: +971 56 4425 950'}
        >
          <PhoneCall className="w-4 h-4 text-emerald-400" />
        </motion.button>

        {/* Cost Estimator */}
        <motion.button
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenEstimator}
          className="flex items-center space-x-1.5 rtl:space-x-reverse px-3.5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-medium border border-white/10 transition-all hover:text-white"
        >
          <Calculator className="w-4 h-4 text-emerald-400" />
          <span className="hidden xs:inline">{t.estimator}</span>
        </motion.button>

        {/* Live Status Tracker */}
        <motion.button
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenTracker}
          className="flex items-center space-x-1.5 rtl:space-x-reverse px-3.5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-medium border border-white/10 transition-all hover:text-white"
        >
          <Search className="w-4 h-4 text-cyan-400" />
          <span className="hidden xs:inline">{t.tracker}</span>
        </motion.button>

        {/* Quick Mode Toggle */}
        <motion.button
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onToggleMode(mode === 'corporate' ? 'digital' : 'corporate')}
          title="Switch Engine View"
          className="flex items-center space-x-1.5 rtl:space-x-reverse px-3.5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium border border-white/10 transition-all"
        >
          {mode === 'corporate' ? (
            <>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden md:inline">{t.digital}</span>
            </>
          ) : (
            <>
              <Building2 className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden md:inline">{t.corporate}</span>
            </>
          )}
        </motion.button>

        {/* Scroll To Top Action (Conditional) */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all border border-white/10"
              title={isArabic ? 'العودة للأعلى' : 'Scroll To Top'}
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
};
