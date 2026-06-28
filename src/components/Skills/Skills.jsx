import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { skillCategories } from '../../data/data';
import { skillIconSlugs, skillIconFallback } from '../../data/skillIcons';
import SectionWrapper from '../Common/SectionWrapper';
import SectionHeading from '../Common/SectionHeading';
import { fadeUp, staggerContainer } from '../../utils/motionVariants';

function SkillChip({ name }) {
  const [imgFailed, setImgFailed] = useState(false);
  const slug = skillIconSlugs[name];
  const FallbackIcon = skillIconFallback[name] || Code2;
  const showImage = Boolean(slug) && !imgFailed;

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="flex items-center gap-3 px-4 py-3 rounded-xl glass border border-primary/10 hover:border-primary/40 hover:shadow-glow-primary transition-all duration-300"
    >
      <span className="w-9 h-9 rounded-lg bg-white flex items-center justify-center shrink-0 p-1.5 shadow-sm">
        {showImage ? (
          <img
            src={`https://cdn.simpleicons.org/${slug}`}
            alt=""
            className="w-full h-full object-contain"
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <FallbackIcon size={18} className="text-primary" aria-hidden="true" />
        )}
      </span>
      <span className="text-sm font-medium text-ink-light dark:text-ink-dark">{name}</span>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filters = useMemo(
    () => [{ id: 'all', label: 'All' }, ...skillCategories.map((c) => ({ id: c.id, label: c.label }))],
    []
  );

  const visibleCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <SectionWrapper id="skills" label="Skills" className="bg-background-light dark:bg-background-dark">
      <SectionHeading
        index="02"
        eyebrow="Skills"
        title="Tools and technologies I reach for."
        subtitle="A practical toolkit spanning frontend, backend, cloud, and systems — built through coursework, internships, and personal projects."
      />

      {/* Category filters */}
      <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter skills by category">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActiveCategory(f.id)}
            aria-pressed={activeCategory === f.id}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
              activeCategory === f.id
                ? 'bg-gradient-primary text-white border-transparent shadow-glow-primary'
                : 'glass border-primary/15 text-muted-light dark:text-muted-dark hover:text-primary hover:border-primary/40'
            }`}
          >
            {f.label}
          </button>
        ))}
      </motion.div>

      <motion.div
        variants={staggerContainer(0.08)}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {visibleCategories.map((category) => (
          <motion.div key={category.id} variants={fadeUp} className="gradient-border">
            <div className="glass rounded-xl2 p-6 h-full flex flex-col gap-4">
              <h3 className="font-display font-semibold text-base text-primary">{category.label}</h3>
              <motion.div variants={staggerContainer(0.05)} className="flex flex-col gap-2.5">
                {category.skills.map((skill) => (
                  <SkillChip key={skill.name} name={skill.name} />
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
