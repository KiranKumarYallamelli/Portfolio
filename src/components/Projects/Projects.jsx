import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { projects } from '../../data/data';
import SectionWrapper from '../Common/SectionWrapper';
import SectionHeading from '../Common/SectionHeading';
import ProjectCard from './ProjectCard';
import { fadeUp, staggerContainer } from '../../utils/motionVariants';

export default function Projects() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const categories = useMemo(
    () => ['All', ...new Set(projects.map((p) => p.category))],
    []
  );

  const filtered = projects.filter((p) => {
    const matchesCategory = category === 'All' || p.category === category;
    const haystack = `${p.title} ${p.tech.join(' ')}`.toLowerCase();
    const matchesQuery = haystack.includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <SectionWrapper id="projects" label="Projects" className="bg-background-light dark:bg-background-dark">
      <SectionHeading
        index="03"
        eyebrow="Projects"
        title="Things I've built."
        subtitle="A couple of projects where I went from idea to working application — real‑time systems, data structures, and clean UI."
      />

      <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-10">
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark"
            aria-hidden="true"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects or tech (e.g. React, MongoDB)..."
            aria-label="Search projects"
            className="w-full pl-11 pr-4 py-3 rounded-full glass border border-primary/15 text-sm text-ink-light dark:text-ink-dark placeholder:text-muted-light dark:placeholder:text-muted-dark focus:border-primary outline-none transition-colors"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto" role="group" aria-label="Filter projects by category">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border transition-all duration-200 ${
                category === c
                  ? 'bg-gradient-primary text-white border-transparent shadow-glow-primary'
                  : 'glass border-primary/15 text-muted-light dark:text-muted-dark hover:text-primary hover:border-primary/40'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </motion.div>

      {filtered.length === 0 ? (
        <motion.p variants={fadeUp} className="text-center text-muted-light dark:text-muted-dark py-12">
          No projects match that search yet — try a different keyword.
        </motion.p>
      ) : (
        <motion.div
          variants={staggerContainer(0.1)}
          className="grid sm:grid-cols-2 gap-8"
        >
          {filtered.map((project) => (
            <motion.div key={project.id} variants={fadeUp}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </SectionWrapper>
  );
}
