/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Dark mode is the default brand state; `.dark` class (added by
        // default on <html>, see useTheme) activates the `dark:` variants.
        // Base (unprefixed) utilities below carry the LIGHT mode values.
        background: {
          light: '#F7F9FC',
          dark: '#050816',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#111827',
        },
        primary: {
          DEFAULT: '#38BDF8',
          dim: '#0EA5E9',
        },
        accent: {
          DEFAULT: '#8B5CF6',
          dim: '#7C3AED',
        },
        ink: {
          light: '#0B1220',
          dark: '#F9FAFB',
        },
        muted: {
          light: '#5B6472',
          dark: '#9CA3AF',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 20% 20%, rgba(56,189,248,0.16), transparent 45%), radial-gradient(circle at 80% 0%, rgba(139,92,246,0.16), transparent 40%), radial-gradient(circle at 50% 100%, rgba(56,189,248,0.10), transparent 45%)',
        'gradient-primary': 'linear-gradient(135deg, #38BDF8 0%, #8B5CF6 100%)',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.35)',
        'glow-primary': '0 0 40px rgba(56,189,248,0.35)',
        'glow-accent': '0 0 40px rgba(139,92,246,0.35)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-25px, 25px) scale(0.95)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: 0.5 },
          '100%': { transform: 'scale(4)', opacity: 0 },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.35 },
        },
      },
      animation: {
        blob: 'blob 12s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 14s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        ripple: 'ripple 0.6s linear',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
