import { useScrollProgress } from '../../hooks/useScrollProgress';

/**
 * ScrollProgressBar — thin gradient bar fixed to the top of the viewport
 * reflecting how far the visitor has scrolled through the page.
 */
export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 h-[3px] w-full z-[60] bg-transparent"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-gradient-primary shadow-glow-primary transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
