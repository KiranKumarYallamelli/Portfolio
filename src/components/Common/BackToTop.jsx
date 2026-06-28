import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { scrollToTop } from '../../utils/scroll';

/**
 * BackToTop — floating button that appears after the visitor scrolls
 * past the hero, scrolling smoothly back to top on click.
 */
export default function BackToTop() {
  const progress = useScrollProgress();
  const visible = progress > 12;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.92 }}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full glass shadow-glass flex items-center justify-center text-primary border border-primary/30 hover:shadow-glow-primary transition-shadow"
        >
          <ArrowUp size={20} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
