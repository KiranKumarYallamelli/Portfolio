import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { navLinks, personalInfo } from '../../data/data';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { scrollToSection } from '../../utils/scroll';
import { useThemeContext } from '../../context/ThemeContext';

/**
 * Navbar — sticky, shrinks on scroll, highlights the active section,
 * smooth-scrolls to anchors, and hosts the dark/light mode toggle.
 */
export default function Navbar() {
  const { theme, toggleTheme } = useThemeContext();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (id) => {
    setMobileOpen(false);
    scrollToSection(id);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <nav
        aria-label="Primary"
        className={`mx-auto flex items-center justify-between gap-4 px-5 sm:px-8 max-w-7xl transition-all duration-300 ${
          scrolled ? 'glass shadow-glass rounded-full mt-2 py-2' : ''
        }`}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="font-display font-bold text-lg sm:text-xl text-ink-light dark:text-ink-dark flex items-center gap-2"
        >
          <span className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center text-white text-sm font-bold">
            {personalInfo.initials}
          </span>
          <span className="hidden sm:inline">Kiran Kumar</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1 font-medium text-sm">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
                aria-current={activeId === link.id ? 'page' : undefined}
                className={`relative px-4 py-2 rounded-full transition-colors duration-200 ${
                  activeId === link.id
                    ? 'text-primary'
                    : 'text-muted-light dark:text-muted-dark hover:text-ink-light dark:hover:text-ink-dark'
                }`}
              >
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-primary/10 border border-primary/30 -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-10 h-10 rounded-full glass border border-primary/20 flex items-center justify-center text-primary hover:shadow-glow-primary transition-shadow"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex"
              >
                {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="lg:hidden w-10 h-10 rounded-full glass border border-primary/20 flex items-center justify-center text-ink-light dark:text-ink-dark"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mx-4 mt-2 glass shadow-glass rounded-2xl overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.id);
                    }}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      activeId === link.id
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-light dark:text-muted-dark hover:text-ink-light dark:hover:text-ink-dark'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
