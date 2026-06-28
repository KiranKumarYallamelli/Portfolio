import { motion } from 'framer-motion';
import { GraduationCap, Sparkles, Cloud, Code } from 'lucide-react';
import { personalInfo, education } from '../../data/data';
import SectionWrapper from '../Common/SectionWrapper';
import SectionHeading from '../Common/SectionHeading';
import GlassCard from '../Common/GlassCard';
import { fadeUp, staggerContainer } from '../../utils/motionVariants';

const highlights = [
  { icon: Code, text: 'React & Python developer' },
  { icon: Cloud, text: 'Google Cloud Certified — Associate Cloud Engineer' },
  { icon: Sparkles, text: 'AI & ML focused B.Tech (CSE)' },
];

export default function About() {
  return (
    <SectionWrapper id="about" label="About me" className="bg-background-light dark:bg-background-dark">
      <SectionHeading index="01" eyebrow="About Me" title="A developer who likes building things that actually work." />

      <motion.div variants={staggerContainer()} className="grid lg:grid-cols-5 gap-8">
        {/* Bio */}
        <motion.div variants={fadeUp} className="lg:col-span-3">
          <GlassCard className="h-full">
            <div className="space-y-5 text-base sm:text-lg leading-relaxed text-muted-light dark:text-muted-dark">
              {personalInfo.about.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-8 flex flex-col gap-3">
              {highlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm sm:text-base text-ink-light dark:text-ink-dark">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Icon size={16} aria-hidden="true" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>

        {/* Education timeline */}
        <motion.div variants={fadeUp} className="lg:col-span-2 flex flex-col gap-5">
          <h3 className="font-display font-semibold text-lg text-ink-light dark:text-ink-dark flex items-center gap-2">
            <GraduationCap size={20} className="text-primary" aria-hidden="true" />
            Education
          </h3>
          <ol className="relative border-l border-primary/20 pl-6 flex flex-col gap-6">
            {education.map((edu) => (
              <li key={edu.id} className="relative">
                <span className="absolute -left-[1.95rem] top-1 w-3 h-3 rounded-full bg-gradient-primary shadow-glow-primary" />
                <p className="font-mono text-xs text-primary mb-1">{edu.duration}</p>
                <p className="font-semibold text-ink-light dark:text-ink-dark leading-snug">{edu.institution}</p>
                <p className="text-sm text-muted-light dark:text-muted-dark mt-0.5">{edu.degree}</p>
                <p className="text-xs text-muted-light dark:text-muted-dark mt-1">
                  {edu.location} · {edu.score}
                </p>
              </li>
            ))}
          </ol>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
