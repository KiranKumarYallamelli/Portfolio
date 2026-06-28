import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Loader — premium full-screen loading sequence shown on first paint.
 * Purely cosmetic/branding (no network wait), removed automatically.
 */
export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background-light dark:bg-background-dark"
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative w-20 h-20 mb-6"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-30 blur-xl animate-pulse-dot" />
            <div className="relative w-full h-full rounded-2xl border-2 border-primary/40 flex items-center justify-center font-display font-bold text-2xl text-gradient">
              KY
            </div>
            <motion.div
              className="absolute -inset-1 rounded-2xl border border-accent/40"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-mono text-xs tracking-widest uppercase text-muted-light dark:text-muted-dark"
          >
            booting portfolio<span className="animate-pulse-dot">...</span>
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
