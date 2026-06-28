import { useRef } from 'react';
import { motion } from 'framer-motion';

const VARIANTS = {
  primary:
    'bg-gradient-primary text-white shadow-glow-primary hover:shadow-glow-accent border border-transparent',
  outline:
    'glass border border-primary/40 text-ink-light dark:text-ink-dark hover:border-primary',
  ghost:
    'bg-transparent border border-transparent text-ink-light dark:text-ink-dark hover:bg-surface-light/60 dark:hover:bg-surface-dark/60',
};

/**
 * RippleButton — shared button primitive with a material-style ripple
 * on click and a gentle hover lift. Renders as <a> when `href` is given.
 */
export default function RippleButton({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
  ariaLabel,
  target,
  rel,
  download,
}) {
  const ref = useRef(null);

  const handleClick = (e) => {
    const el = ref.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      const span = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      span.className = 'ripple-span';
      span.style.width = span.style.height = `${size}px`;
      span.style.left = `${e.clientX - rect.left - size / 2}px`;
      span.style.top = `${e.clientY - rect.top - size / 2}px`;
      el.appendChild(span);
      setTimeout(() => span.remove(), 650);
    }
    onClick?.(e);
  };

  const classes = `btn-ripple inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${VARIANTS[variant]} ${className}`;

  const motionProps = {
    whileHover: { y: -3, scale: 1.02 },
    whileTap: { scale: 0.96 },
  };

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        download={download}
        onClick={handleClick}
        aria-label={ariaLabel}
        className={classes}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={handleClick}
      aria-label={ariaLabel}
      className={classes}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
