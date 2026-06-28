import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { experience } from '../../data/data';
import SectionWrapper from '../Common/SectionWrapper';
import SectionHeading from '../Common/SectionHeading';
import { fadeUp, staggerContainer } from '../../utils/motionVariants';

/**
 * Experience — vertical timeline. Numbering here is real: each entry is a
 * chronological step in Kiran's journey, not a decorative 01/02/03 motif.
 */
export default function Experience() {
  return (
    <SectionWrapper id="experience" label="Experience" className="bg-background-light dark:bg-background-dark">
      <SectionHeading
        index="04"
        eyebrow="Experience"
        title="Where I've put these skills to work."
      />

      <motion.ol variants={staggerContainer(0.15)} className="relative border-l border-primary/20 pl-8 sm:pl-10 flex flex-col gap-12 max-w-3xl">
        {experience.map((exp) => (
          <motion.li key={exp.id} variants={fadeUp} className="relative">
            <span className="absolute -left-[2.65rem] sm:-left-[3.15rem] top-0 w-9 h-9 rounded-full bg-gradient-primary shadow-glow-primary flex items-center justify-center text-white">
              <Briefcase size={16} aria-hidden="true" />
            </span>

            <div className="gradient-border">
              <div className="glass rounded-xl2 p-6 sm:p-7">
                <p className="font-mono text-xs text-primary mb-2">{exp.duration}</p>
                <h3 className="font-display font-semibold text-lg sm:text-xl text-ink-light dark:text-ink-dark">
                  {exp.role}
                </h3>
                <p className="text-sm text-muted-light dark:text-muted-dark mt-1 mb-4">{exp.organization}</p>
                <ul className="flex flex-col gap-2">
                  {exp.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm sm:text-base text-muted-light dark:text-muted-dark leading-relaxed">
                      <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </SectionWrapper>
  );
}
