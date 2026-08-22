import React, { useState, useEffect } from 'react';
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
      setShowScrollTop(window.scrollY > 400);
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
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-xl w-[92%] sm:w-auto">
      <div className="flex items-center justify-between sm:justify-center p-1.5 rounded-full bg-obsidian-950/90 border border-white/15 backdrop-blur-2xl shadow-2xl shadow-black/80 gap-1.5">
        
        {/* WhatsApp Fast Action */}
        <button
          onClick={handleWhatsApp}
          className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-obsidian-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/30 hover:scale-[1.03]"
        >
          <MessageSquare className="w-4 h-4 fill-obsidian-950" />
          <span className="hidden sm:inline">{t.whatsapp}</span>
        </button>

        {/* Cost Estimator */}
        <button
          onClick={onOpenEstimator}
          className="flex items-center space-x-1.5 rtl:space-x-reverse px-3.5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-medium border border-white/10 transition-all hover:text-white"
        >
          <Calculator className="w-4 h-4 text-emerald-400" />
          <span className="hidden xs:inline">{t.estimator}</span>
        </button>

        {/* Live Status Tracker */}
        <button
          onClick={onOpenTracker}
          className="flex items-center space-x-1.5 rtl:space-x-reverse px-3.5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-medium border border-white/10 transition-all hover:text-white"
        >
          <Search className="w-4 h-4 text-cyan-400" />
          <span className="hidden xs:inline">{t.tracker}</span>
        </button>

        {/* Quick Mode Toggle */}
        <button
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
        </button>

        {/* Direct Call Button */}
        <button
          onClick={handleCall}
          className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all border border-white/10"
          title={isArabic ? 'اتصال هاتفي مباشر' : 'Direct Call'}
        >
          <PhoneCall className="w-4 h-4 text-emerald-400" />
        </button>

        {/* Scroll To Top Action (Conditional) */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all border border-white/10"
            title={isArabic ? 'العودة للأعلى' : 'Scroll To Top'}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

      </div>
    </div>
  );
};
