import { preferredScrollBehavior } from '../hooks/useMotionPreference';
import { useScrolled } from '../hooks/useScrolled';
import React from 'react';
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

// Round, icon-first buttons. Labels appear only where the dock has room for them.
const DOCK_BUTTON =
  'inline-flex h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-white';

export const FloatingDock: React.FC<FloatingDockProps> = ({
  mode,
  onToggleMode,
  onOpenEstimator,
  onOpenTracker,
  isArabic = false,
}) => {
  const showScrollTop = useScrolled(350);
  const t = isArabic ? TRANSLATIONS.ar.dock : TRANSLATIONS.en.dock;

  const handleWhatsApp = () => {
    trackConversion('whatsapp_click', { source: 'floating_dock' });
    window.open(generateWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  const handleCall = () => {
    trackConversion('call_click', { source: 'floating_dock' });
    window.location.href = generateCallUrl();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: preferredScrollBehavior() });
  };

  const modeLabel = mode === 'corporate' ? t.digital : t.corporate;
  const callLabel = isArabic ? 'اتصال هاتفي مباشر: +971 56 4425 950' : 'Direct Call: +971 56 4425 950';

  return (
    // Centred with auto margins, not a transform: nothing here can be overwritten by an animation.
    <div className="pointer-events-none fixed inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex justify-center px-3 print:hidden sm:bottom-6">
      <div className="pointer-events-auto flex max-w-full items-center gap-1.5 rounded-full border border-white/15 bg-obsidian-950/90 p-1.5 shadow-pop backdrop-blur-2xl sm:gap-2">
        <button
          type="button"
          onClick={handleWhatsApp}
          aria-label={t.whatsapp}
          className="inline-flex h-11 min-w-11 items-center justify-center gap-2 rounded-full bg-emerald-500 px-3 text-sm font-bold text-obsidian-950 transition-colors hover:bg-emerald-400 sm:px-4"
        >
          <MessageSquare className="h-4 w-4 fill-obsidian-950" aria-hidden="true" />
          <span className="hidden sm:inline">{t.whatsapp}</span>
        </button>

        <button type="button" onClick={handleCall} aria-label={callLabel} title={callLabel} className={DOCK_BUTTON}>
          <PhoneCall className="h-4 w-4 text-emerald-400" aria-hidden="true" />
        </button>

        <button type="button" onClick={onOpenEstimator} aria-label={t.estimator} title={t.estimator} className={DOCK_BUTTON}>
          <Calculator className="h-4 w-4 text-emerald-400" aria-hidden="true" />
          <span className="hidden lg:inline">{t.estimator}</span>
        </button>

        <button type="button" onClick={onOpenTracker} aria-label={t.tracker} title={t.tracker} className={DOCK_BUTTON}>
          <Search className="h-4 w-4 text-cyan-400" aria-hidden="true" />
          <span className="hidden lg:inline">{t.tracker}</span>
        </button>

        <button
          type="button"
          onClick={() => onToggleMode(mode === 'corporate' ? 'digital' : 'corporate')}
          aria-label={modeLabel}
          title="Switch Engine View"
          className={DOCK_BUTTON}
        >
          {mode === 'corporate' ? (
            <Sparkles className="h-4 w-4 text-cyan-400" aria-hidden="true" />
          ) : (
            <Building2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />
          )}
          <span className="hidden md:inline">{modeLabel}</span>
        </button>

        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label={isArabic ? 'العودة للأعلى' : 'Scroll To Top'}
            title={isArabic ? 'العودة للأعلى' : 'Scroll To Top'}
            className={DOCK_BUTTON}
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
};
