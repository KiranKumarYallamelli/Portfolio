import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeUp } from '../../utils/motionVariants';

/**
 * SectionWrapper — every top-level page section is wrapped in this.
 * Provides: semantic <section> landmark, consistent spacing, id for
 * scroll-spy/nav, and a one-shot scroll-reveal animation.
 */
export default function SectionWrapper({
  id,
  label,
  className = '',
  children,
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.12,
  });

  return (
    <section
      id={id}
      aria-label={label}
      className={`relative w-full py-24 sm:py-28 px-6 sm:px-10 lg:px-20 scroll-mt-24 ${className}`}
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeUp}
        className="max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
}
