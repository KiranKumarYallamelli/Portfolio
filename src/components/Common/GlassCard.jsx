import { motion } from 'framer-motion';

/**
 * GlassCard — shared glassmorphic surface with gradient border + hover
 * lift, used by About, Certificates, Education and stat tiles.
 */
export default function GlassCard({
  children,
  className = '',
  hover = true,
  as: Component = 'div',
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`gradient-border ${className}`}
    >
      <Component className="glass rounded-xl2 p-6 sm:p-8 h-full">
        {children}
      </Component>
    </motion.div>
  );
}
