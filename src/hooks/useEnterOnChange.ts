import { useRef } from 'react';

/**
 * Returns the entrance class only after `dep` has changed at least once. A keyed panel or list
 * therefore stays static on first mount (nothing half-faded at load) and animates on user action.
 */
export function useEnterOnChange(dep: unknown): string {
  const previous = useRef(dep);
  const changed = useRef(false);
  if (previous.current !== dep) {
    previous.current = dep;
    changed.current = true;
  }
  return changed.current ? 'enter-rise' : '';
}
