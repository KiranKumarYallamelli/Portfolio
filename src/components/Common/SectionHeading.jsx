import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/motionVariants';

/**
 * SectionHeading — consistent "eyebrow / title / subtitle" header used
 * at the top of every section, with the index number as structural info
 * (these sections genuinely are an ordered journey through the page).
 */
export default function SectionHeading({ index, eyebrow, title, subtitle, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <motion.div variants={fadeUp} className={`flex flex-col gap-3 mb-14 ${alignment} max-w-2xl`}>
      <div className="flex items-center gap-3 text-primary">
        {index && (
          <span className="font-mono text-xs text-muted-light dark:text-muted-dark">
            {index}
          </span>
        )}
        <span className="section-eyebrow text-xs uppercase tracking-widest text-primary">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink-light dark:text-ink-dark leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-light dark:text-muted-dark text-base sm:text-lg leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
