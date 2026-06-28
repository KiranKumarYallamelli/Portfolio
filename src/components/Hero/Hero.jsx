import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Code2, ChevronDown, Download, ArrowRight } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/data';
import { useMousePosition } from '../../hooks/useMousePosition';
import { scrollToSection } from '../../utils/scroll';
import AnimatedBackground from '../Common/AnimatedBackground';
import RippleButton from '../Common/RippleButton';

const socialItems = [
  { icon: Github, href: socialLinks.github, label: 'GitHub' },
  { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
  { icon: Code2, href: socialLinks.leetcode, label: 'LeetCode' },
  { icon: Mail, href: socialLinks.email, label: 'Email' },
];

// Small "cloud ops" status chips — the signature element tying the hero
// back to Kiran's Cloud Operations Engineer objective. Genuinely reflects
// his GCP certification rather than decorating for decoration's sake.
const statusChips = [
  { label: 'GCP · Associate Cloud Engineer', dot: 'bg-primary', position: '-top-4 -left-6 sm:-left-10' },
  { label: 'react.js · building', dot: 'bg-accent', position: 'top-1/2 -right-8 sm:-right-14' },
  { label: 'status: open to work', dot: 'bg-primary', position: '-bottom-5 left-2 sm:left-8' },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const { x, y } = useMousePosition();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={sectionRef}
      id="home"
      aria-label="Introduction"
      className="relative min-h-screen flex items-center pt-28 pb-20 px-6 sm:px-10 lg:px-20 overflow-hidden bg-background-light dark:bg-background-dark"
    >
      <AnimatedBackground density={22} />

      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center"
      >
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary mb-5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
            {personalInfo.greeting}
          </span>

          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[3.6rem] leading-[1.08] text-ink-light dark:text-ink-dark">
            {personalInfo.name}
          </h1>

          <div className="mt-4 h-10 sm:h-12 font-display text-xl sm:text-2xl md:text-3xl font-semibold text-gradient">
            <TypeAnimation
              sequence={personalInfo.roles.flatMap((role) => [role, 1800])}
              wrapper="span"
              speed={50}
              deletionSpeed={65}
              repeat={Infinity}
              cursor
            />
          </div>

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted-light dark:text-muted-dark">
            {personalInfo.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <RippleButton
              variant="primary"
              onClick={() => scrollToSection('projects')}
              ariaLabel="View projects"
            >
              View Projects <ArrowRight size={16} />
            </RippleButton>
            <RippleButton
              variant="outline"
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="Download resume"
            >
              <Download size={16} /> Download Resume
            </RippleButton>
            <RippleButton
              variant="ghost"
              onClick={() => scrollToSection('contact')}
              ariaLabel="Contact me"
            >
              Contact Me
            </RippleButton>
          </div>

          <ul className="mt-10 flex items-center gap-3" aria-label="Social links">
            {socialItems.map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-11 h-11 rounded-full glass border border-primary/20 flex items-center justify-center text-ink-light dark:text-ink-dark hover:text-primary hover:border-primary hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Visual column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <motion.div
            style={{ x: x * 14, y: y * 14 }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
            className="gradient-border shadow-glow-primary"
          >
            <div className="glass rounded-xl2 p-3 aspect-square flex items-center justify-center relative overflow-hidden">
              {/* Replace this placeholder with /src/assets/profile.jpg of your choice */}
              <div className="w-full h-full rounded-[1rem] bg-gradient-primary opacity-90 flex items-center justify-center relative">
                <span className="font-display font-bold text-7xl sm:text-8xl text-white/95 select-none">
                  {personalInfo.initials}
                </span>
                <div className="absolute inset-0 bg-grid-glow opacity-60" />
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary animate-pulse-dot" />
            </div>
          </motion.div>

          {/* Signature floating status chips */}
          {statusChips.map((chip) => (
            <motion.div
              key={chip.label}
              style={{ x: x * 10, y: y * 10 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ y: { repeat: Infinity, duration: 4.5, ease: 'easeInOut' } }}
              className={`hidden sm:flex absolute ${chip.position} items-center gap-2 glass shadow-glass rounded-full px-3.5 py-2 text-xs font-mono whitespace-nowrap border border-white/10`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${chip.dot} animate-pulse-dot`} />
              <span className="text-ink-light dark:text-ink-dark">{chip.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.button
        type="button"
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to About section"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted-light dark:text-muted-dark hover:text-primary transition-colors"
      >
        <ChevronDown size={28} aria-hidden="true" />
      </motion.button>
    </section>
  );
}
