import { Github, Linkedin, Mail, Code2, ArrowUp } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/data';
import { scrollToTop } from '../../utils/scroll';

const socialItems = [
  { icon: Github, href: socialLinks.github, label: 'GitHub' },
  { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
  { icon: Code2, href: socialLinks.leetcode, label: 'LeetCode' },
  { icon: Mail, href: socialLinks.email, label: 'Email' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-primary/10 bg-background-light dark:bg-background-dark px-6 sm:px-10 lg:px-20 py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-light dark:text-muted-dark text-center sm:text-left">
          © {year} {personalInfo.name}. Built with React, Tailwind &amp; Framer Motion.
        </p>

        <ul className="flex items-center gap-3" aria-label="Social links">
          {socialItems.map(({ icon: Icon, href, label }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="w-10 h-10 rounded-full glass border border-primary/15 flex items-center justify-center text-ink-light dark:text-ink-dark hover:text-primary hover:border-primary transition-colors duration-300"
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="font-mono text-xs uppercase tracking-widest text-muted-light dark:text-muted-dark hover:text-primary transition-colors flex items-center gap-1.5"
        >
          Back to top <ArrowUp size={14} aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
}
