import { preferredScrollBehavior } from '../hooks/useMotionPreference';
import React from 'react';
import { Building2, Sparkles } from 'lucide-react';
import { DualEngineMode } from '../types';
import { trackConversion, generateWhatsAppUrl } from '../lib/tracking';
import { TRANSLATIONS } from '../data/translations';
import { DigitalCinematicHero } from './DigitalCinematicHero';

interface HeroSectionProps {
  mode: DualEngineMode;
  onOpenEstimator: () => void;
  onOpenTracker: () => void;
  onToggleMode: (newMode: DualEngineMode) => void;
  isArabic: boolean;
  onLogoDocked?: (docked: boolean) => void;
  onNavigateSlug?: (slug: string) => void;
}

/**
 * Digital-studio opening. (Corporate mode opens with ComfortHero, so this section only ever
 * renders in digital mode.) Two slow ambient orbs sit behind the console; nothing else moves.
 */
export const HeroSection: React.FC<HeroSectionProps> = ({
  mode,
  onOpenEstimator,
  onOpenTracker,
  onToggleMode,
  isArabic,
  onLogoDocked = () => {},
}) => {
  const tNav = isArabic ? TRANSLATIONS.ar.navbar : TRANSLATIONS.en.navbar;

  const handleWhatsAppHero = () => {
    trackConversion('whatsapp_click', { source: 'hero_primary_cta' });
    const msg = isArabic
      ? "مرحباً إكسبيديا الرقمية، أود الاستفسار حول تصميم منصة رقمية وتطوير الهوية المؤسسية."
      : "Hello Expedia Digital, I am interested in building a bespoke web application and brand identity.";
    window.open(generateWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative isolate overflow-hidden pb-20 pt-[calc(var(--header-h)+2rem)] md:pb-28">

      {/* Ambient orbs: radial gradients, transform-only drift, hidden from assistive tech */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div
          className="orb -top-40 start-[6%] h-[38rem] w-[38rem]"
          style={{ '--orb': 'rgb(var(--c-cyan-500) / 0.16)' } as React.CSSProperties}
        />
        <div
          className="orb -bottom-32 end-[4%] h-[34rem] w-[34rem]"
          style={{ '--orb': 'rgb(var(--c-emerald-500) / 0.10)', animationDelay: '-16s', animationDirection: 'alternate-reverse' } as React.CSSProperties}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Mode switch (also in the header and the dock) */}
        <div
          role="group"
          aria-label={isArabic ? 'وضع العرض' : 'Site mode'}
          className="mx-auto mb-10 grid max-w-md grid-cols-2 gap-1 rounded-2xl border border-white/10 bg-obsidian-900/90 p-1 backdrop-blur-xl"
        >
          {(
            [
              ['corporate', Building2, tNav.corporateMode],
              ['digital', Sparkles, tNav.digitalMode],
            ] as const
          ).map(([target, Icon, label]) => (
            <button
              key={target}
              type="button"
              aria-pressed={mode === target}
              onClick={() => onToggleMode(target)}
              className={`flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition-colors duration-300 ${
                mode === target ? 'bg-accent text-obsidian-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        <DigitalCinematicHero
          isArabic={isArabic}
          onLogoDocked={onLogoDocked}
          onOpenEstimator={onOpenEstimator}
          onOpenTracker={onOpenTracker}
          onExploreServices={() => {
            document.getElementById('services')?.scrollIntoView({ behavior: preferredScrollBehavior() });
          }}
          onBookConsultation={handleWhatsAppHero}
        />

      </div>
    </section>
  );
};
