import { useEffect, useState } from 'react';

/**
 * useMousePosition — normalized (-0.5 to 0.5) cursor position relative to
 * the viewport center. Used to drive subtle parallax on hero blobs/cards.
 */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return position;
}
