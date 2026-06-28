import { motion } from 'framer-motion';
import { Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { useTilt } from '../../hooks/useTilt';

/**
 * ProjectCard — premium project card with tilt-on-hover, tech badges,
 * feature list, and GitHub / live demo actions (demo hidden when absent
 * rather than inventing a link that doesn't exist).
 */
export default function ProjectCard({ project }) {
  const { ref, style, handlers } = useTilt({ max: 8, scale: 1.02 });

  return (
    <motion.div ref={ref} style={style} {...handlers} className="tilt-card h-full">
      <div className="gradient-border h-full">
        <article className="glass rounded-xl2 h-full flex flex-col overflow-hidden">
          {/* Visual header */}
          <div className="relative h-40 sm:h-44 bg-gradient-primary flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-grid-glow opacity-70" />
            <span className="relative font-display font-bold text-white/90 text-lg sm:text-xl text-center px-6">
              {project.title}
            </span>
            <span className="absolute top-3 right-3 text-[11px] font-mono uppercase tracking-wide bg-black/30 text-white px-2.5 py-1 rounded-full">
              {project.category}
            </span>
          </div>

          <div className="p-6 flex flex-col gap-4 flex-1">
            <p className="text-sm sm:text-base text-muted-light dark:text-muted-dark leading-relaxed">
              {project.description}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Features */}
            <ul className="flex flex-col gap-1.5 mt-1">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs sm:text-sm text-ink-light dark:text-ink-dark">
                  <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>

            {project.highlights && (
              <p className="text-xs sm:text-sm text-muted-light dark:text-muted-dark italic border-l-2 border-accent/40 pl-3">
                {project.highlights}
              </p>
            )}

            <div className="mt-auto pt-3 flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-light dark:text-ink-dark hover:text-primary transition-colors"
                >
                  <Github size={16} aria-hidden="true" /> Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors"
                >
                  <ExternalLink size={16} aria-hidden="true" /> Live Demo
                </a>
              )}
            </div>
          </div>
        </article>
      </div>
    </motion.div>
  );
}
