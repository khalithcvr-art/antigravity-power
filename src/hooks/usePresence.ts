import { useEffect, useState } from 'react';
import { prefersReducedMotion } from './useMotionPreference';

/**
 * Keeps an element mounted for `exitMs` after `open` turns false, so its CSS exit
 * animation can play. Under reduced motion it unmounts at once and starts no timer.
 * The server and the first client render match: closed means not mounted.
 */
export function usePresence(open: boolean, exitMs = 180) {
  const [mounted, setMounted] = useState(open);

  useEffect(() => {
    if (open) {
      setMounted(true);
      return;
    }
    if (prefersReducedMotion()) {
      setMounted(false);
      return;
    }
    const timer = setTimeout(() => setMounted(false), exitMs);
    return () => clearTimeout(timer);
  }, [open, exitMs]);

  return { mounted: open || mounted, state: open ? 'open' : 'closed' } as const;
}
