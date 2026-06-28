import { useEffect, useRef, useState } from 'react';
import { useIsTouchDevice } from '../../hooks/useIsTouchDevice';

/**
 * Cursor — custom dot + ring cursor that grows on interactive elements.
 * Skipped entirely on touch devices and when reduced-motion is preferred.
 */
export default function Cursor() {
  const isTouch = useIsTouchDevice();
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setEnabled(!isTouch && !prefersReduced);
  }, [isTouch]);

  useEffect(() => {
    if (!enabled) return undefined;

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let targetX = ringX;
    let targetY = ringY;
    let frame;

    const move = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${targetX}px, ${targetY}px) translate(-50%, -50%)`;
      }
    };

    const animateRing = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      frame = requestAnimationFrame(animateRing);
    };

    const grow = () => ringRef.current?.classList.add('cursor-ring--active');
    const shrink = () => ringRef.current?.classList.remove('cursor-ring--active');

    const interactiveSelector = 'a, button, [role="button"], input, textarea, select, .tilt-card';

    const handleOver = (e) => {
      if (e.target.closest?.(interactiveSelector)) grow();
    };
    const handleOut = (e) => {
      if (e.target.closest?.(interactiveSelector)) shrink();
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', handleOver, { passive: true });
    window.addEventListener('mouseout', handleOut, { passive: true });
    frame = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handleOver);
      window.removeEventListener('mouseout', handleOut);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div
        ref={ringRef}
        className="cursor-ring [&.cursor-ring--active]:w-12 [&.cursor-ring--active]:h-12 [&.cursor-ring--active]:border-accent/70 [&.cursor-ring--active]:bg-accent/10"
        aria-hidden="true"
      />
    </>
  );
}
