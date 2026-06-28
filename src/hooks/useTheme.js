import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'kky-theme';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'dark' || stored === 'light') return stored;
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  return prefersLight ? 'light' : 'dark';
}

/**
 * useTheme — manages dark/light mode, persists the choice, and syncs the
 * `.dark` class on <html> for Tailwind's `darkMode: 'class'` strategy.
 * Dark is the brand default: unprefixed utilities hold light-mode values,
 * `dark:` utilities hold dark-mode values, and `.dark` is added unless the
 * person has explicitly chosen (or the OS prefers) light mode.
 */
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    root.style.colorScheme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme, isDark: theme === 'dark' };
}
