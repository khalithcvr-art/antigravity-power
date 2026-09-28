import { useMotionPreference, prefersReducedMotion } from '../../hooks/useMotionPreference';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

/*
 * Motion primitives. Scroll reveals, hover lift and the cursor glow are plain CSS plus
 * IntersectionObserver / one rAF-throttled pointer listener; nothing here needs a
 * JavaScript animation library.
 *
 * Rules every primitive follows:
 *  - Content is visible by default. The server-rendered HTML carries no hidden state.
 *  - A block is only hidden once a real person has interacted (wheel, touch, key, pointer), motion
 *    is allowed and the block is below the fold. Crawlers, audits, print and screenshots never
 *    interact, so they always see the finished page (no half-faded text mid-measurement).
 *  - Only opacity and transform change, so document flow never moves.
 *  - Reduced motion is checked before any observer or listener is created.
 */

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

let armed = false;
let listening = false;
const waiting = new Set<() => void>();

function arm() {
  if (armed) return;
  armed = true;
  waiting.forEach((engage) => engage());
  waiting.clear();
}

/** Runs `engage` once a real person has interacted with the page (immediately if they already have). */
function whenInteracting(engage: () => void): () => void {
  if (armed) {
    engage();
    return () => {};
  }
  waiting.add(engage);
  if (!listening && typeof window !== 'undefined') {
    listening = true;
    for (const type of ['wheel', 'touchstart', 'keydown', 'pointerdown'] as const) {
      window.addEventListener(type, arm, { once: true, passive: true, capture: true });
    }
  }
  return () => {
    waiting.delete(engage);
  };
}

/** Hide-until-seen. Returns a ref for the element to reveal. */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined' || prefersReducedMotion()) return;

    let observer: IntersectionObserver | undefined;
    // Keyboard focus landing inside a hidden block shows it at once, so a focus ring is never half-faded.
    const showNow = () => {
      el.style.transitionDuration = '0ms';
      el.dataset.reveal = 'done';
    };
    const engage = () => {
      // Already reachable on screen: leave it visible, so nothing flashes.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
      el.dataset.reveal = 'pending';
      el.addEventListener('focusin', showNow, { once: true });
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            el.dataset.reveal = 'done';
            observer?.disconnect();
          }
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.01 },
      );
      observer.observe(el);
    };

    const stop = whenInteracting(engage);
    return () => {
      stop();
      observer?.disconnect();
      el.removeEventListener('focusin', showNow);
    };
  }, []);

  return ref;
}

/**
 * BorderBeam: a light that travels a card edge. Reserve it for one selected element per
 * view; it is a continuous animation and the global reduced-motion rule freezes it.
 */
interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export const BorderBeam: React.FC<BorderBeamProps> = ({
  className = '',
  size = 250,
  duration = 12,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = 'rgb(var(--c-emerald-500))',
  colorTo = 'rgb(var(--c-cyan-500))',
  delay = 0,
}) => {
  return (
    <div
      aria-hidden="true"
      style={
        {
          '--size': size,
          '--duration': duration,
          '--anchor': anchor,
          '--border-width': borderWidth,
          '--color-from': colorFrom,
          '--color-to': colorTo,
          '--delay': `-${delay}s`,
        } as React.CSSProperties
      }
      className={`pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))] ${className}`}
    />
  );
};

/**
 * InteractiveCard: a calm surface with a 2px hover lift (fine pointers only, in CSS).
 * `glow` adds a cursor-following highlight for selected digital-studio cards; the
 * pointer listener is created only for fine pointers and skipped under reduced motion.
 */
interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  onClick?: () => void;
  id?: string;
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({
  children,
  className = '',
  glow = false,
  onClick,
  id,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!glow || !el || prefersReducedMotion() || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    let frame = 0;
    let x = 0;
    let y = 0;
    const paint = () => {
      frame = 0;
      el.style.setProperty('--mx', `${x}px`);
      el.style.setProperty('--my', `${y}px`);
    };
    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;
      if (!frame) frame = requestAnimationFrame(paint);
    };
    el.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      el.removeEventListener('pointermove', onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [glow]);

  return (
    <div
      ref={ref}
      id={id}
      onClick={onClick}
      className={`card card-interactive ${glow ? 'spotlight' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

/**
 * AnimatedCounter: rolls a number up once when it scrolls into view. The real value is
 * always in the markup (server HTML, reduced motion, already-visible), so it is never "0".
 */
interface AnimatedCounterProps {
  value: string | number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, className = '' }) => {
  const reducedMotion = useMotionPreference();
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(String(value));

  useEffect(() => {
    setDisplay(String(value));
    const el = ref.current;
    const strVal = String(value);
    const numericMatch = strVal.match(/\d+/);
    if (!el || reducedMotion || !numericMatch || typeof IntersectionObserver === 'undefined') return;

    const target = parseInt(numericMatch[0], 10);
    const prefix = strVal.slice(0, numericMatch.index);
    const suffix = strVal.slice((numericMatch.index || 0) + numericMatch[0].length);
    let frame = 0;
    let observer: IntersectionObserver | undefined;

    const engage = () => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
      observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return;
          observer?.disconnect();
          const start = performance.now();
          const duration = 1100;
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(progress < 1 ? `${prefix}${Math.floor(target * eased)}${suffix}` : strVal);
            if (progress < 1) frame = requestAnimationFrame(tick);
          };
          frame = requestAnimationFrame(tick);
        },
        { rootMargin: '0px 0px -10% 0px' },
      );
      observer.observe(el);
    };

    const stop = whenInteracting(engage);
    return () => {
      stop();
      observer?.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value, reducedMotion]);

  return (
    <span ref={ref} className={`tnum ${className}`}>
      {display}
    </span>
  );
};

/** ScrollReveal: fade and rise once, when the block scrolls into view. */
interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 14,
}) => {
  const ref = useReveal<HTMLDivElement>();
  const offset = {
    up: [0, distance],
    down: [0, -distance],
    left: [distance, 0],
    right: [-distance, 0],
    none: [0, 0],
  }[direction];

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={
        {
          '--reveal-delay': `${Math.round(delay * 1000)}ms`,
          '--reveal-x': `${offset[0]}px`,
          '--reveal-y': `${offset[1]}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};
