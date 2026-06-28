import { useEffect, useState } from 'react';

/**
 * useIsTouchDevice — detects coarse-pointer (touch) devices so we can
 * skip the custom cursor and other desktop-only interactions on mobile.
 */
export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(pointer: coarse)');
    setIsTouch(query.matches);
    const handler = (e) => setIsTouch(e.matches);
    query.addEventListener('change', handler);
    return () => query.removeEventListener('change', handler);
  }, []);

  return isTouch;
}
