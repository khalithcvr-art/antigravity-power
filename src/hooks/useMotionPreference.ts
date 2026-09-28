import { useSyncExternalStore } from 'react';

const query = '(prefers-reduced-motion: reduce)';
const subscribe = (notify: () => void) => {
  const media = window.matchMedia(query);
  media.addEventListener('change', notify);
  return () => media.removeEventListener('change', notify);
};
const getSnapshot = () => window.matchMedia(query).matches;

export const useMotionPreference = () => useSyncExternalStore(subscribe, getSnapshot, () => false);
export const preferredScrollBehavior = (): ScrollBehavior =>
  window.matchMedia(query).matches ? 'instant' : 'smooth';

/** One-off read for code that must decide before starting a timer or listener. */
export const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia(query).matches;
