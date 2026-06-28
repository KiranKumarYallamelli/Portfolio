import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

/**
 * AnimatedBackground — animated gradient blobs + floating particles with
 * subtle mouse parallax. Decorative only (aria-hidden), pointer-events: none.
 *
 * `density` controls particle count; `parallax` toggles mouse-follow.
 */
export default function AnimatedBackground({ density = 18, parallax = true, className = '' }) {
  const { x, y } = useMousePosition();

  const particles = useMemo(
    () =>
      Array.from({ length: density }, (_, i) => ({
        id: i,
        size: 2 + Math.random() * 4,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 5 + Math.random() * 6,
      })),
    [density]
  );

  const offsetX = parallax ? x * 24 : 0;
  const offsetY = parallax ? y * 24 : 0;

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Grid glow */}
      <div className="absolute inset-0 bg-grid-glow" />

      {/* Blobs */}
      <motion.span
        className="blob w-72 h-72 sm:w-96 sm:h-96 bg-primary top-[-6rem] left-[-4rem] animate-blob"
        style={{ x: offsetX, y: offsetY }}
        transition={{ type: 'spring', stiffness: 40, damping: 20 }}
      />
      <motion.span
        className="blob w-64 h-64 sm:w-[26rem] sm:h-[26rem] bg-accent bottom-[-8rem] right-[-6rem] animate-blob [animation-delay:2s]"
        style={{ x: -offsetX, y: -offsetY }}
        transition={{ type: 'spring', stiffness: 40, damping: 20 }}
      />
      <motion.span
        className="blob w-56 h-56 bg-primary/70 top-1/3 right-1/4 animate-blob [animation-delay:4s]"
        style={{ x: offsetX * 0.6, y: -offsetY * 0.6 }}
        transition={{ type: 'spring', stiffness: 40, damping: 20 }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-primary/50 animate-float"
          style={{
            width: p.size,
            height: p.size,
            top: `${p.top}%`,
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}

      {/* Noise overlay for texture */}
      <div className="absolute inset-0 bg-noise opacity-40" />
    </div>
  );
}
