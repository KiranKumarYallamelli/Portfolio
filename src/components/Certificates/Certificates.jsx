import { motion } from 'framer-motion';
import { Award, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';
import { certificates } from '../../data/data';
import SectionWrapper from '../Common/SectionWrapper';
import SectionHeading from '../Common/SectionHeading';
import { fadeUp, staggerContainer } from '../../utils/motionVariants';

export default function Certificates() {
  return (
    <SectionWrapper id="certificates" label="Certificates" className="bg-background-light dark:bg-background-dark">
      <SectionHeading
        index="05"
        eyebrow="Certificates"
        title="Credentials I've earned."
      />

      <motion.div variants={staggerContainer(0.12)} className="grid sm:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="group relative gradient-border"
          >
            <div className="absolute -inset-px rounded-xl2 bg-gradient-primary opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
            <div className="relative glass rounded-xl2 p-7 h-full flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <span className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-white shadow-glow-primary">
                  <Award size={22} aria-hidden="true" />
                </span>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View credential for ${cert.title}`}
                    className="text-muted-light dark:text-muted-dark hover:text-primary transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              <h3 className="font-display font-semibold text-lg text-ink-light dark:text-ink-dark leading-snug">
                {cert.title}
              </h3>
              <p className="font-mono text-xs text-primary uppercase tracking-wide">{cert.issuer}</p>
              <ul className="flex flex-col gap-2 mt-1">
                {cert.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-muted-light dark:text-muted-dark leading-relaxed">
                    <CheckCircle2 size={15} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}

        {/* Future certificates placeholder */}
        <motion.div
          variants={fadeUp}
          className="relative rounded-xl2 border border-dashed border-primary/25 flex flex-col items-center justify-center gap-3 p-7 min-h-[14rem] text-center"
        >
          <span className="w-12 h-12 rounded-xl glass border border-primary/20 flex items-center justify-center text-primary">
            <Sparkles size={20} aria-hidden="true" />
          </span>
          <p className="text-sm text-muted-light dark:text-muted-dark max-w-xs">
            More certifications are on the way — this space will grow as I keep learning.
          </p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
