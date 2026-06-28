import { useRef } from 'react';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * useTilt — recreates a "react-tilt"-style 3D hover tilt using Framer
 * Motion's own motion values, so the effect has no dependency on an
 * unmaintained third-party package. Returns a ref to attach to the
 * tilting element plus the motion-ready style props to spread onto it.
 */
export function useTilt({ max = 8, scale = 1.02 } = {}) {
  const ref = useRef(null);
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);

  const springConfig = { stiffness: 200, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [max, -max]), springConfig);
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-max, max]), springConfig);
  const scaleSpring = useSpring(1, springConfig);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left) / rect.width);
    pointerY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseEnter = () => scaleSpring.set(scale);

  const handleMouseLeave = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
    scaleSpring.set(1);
  };

  return {
    ref,
    style: { rotateX, rotateY, scale: scaleSpring, transformPerspective: 800 },
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
}
