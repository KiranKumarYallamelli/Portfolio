import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home as HomeIcon } from 'lucide-react';
import AnimatedBackground from '../components/Common/AnimatedBackground';
import RippleButton from '../components/Common/RippleButton';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function NotFound() {
  useDocumentTitle('Page not found | Kiran Kumar Yallamelli');

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-background-light dark:bg-background-dark overflow-hidden">
      <AnimatedBackground density={10} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center gap-6"
      >
        <span className="font-display font-bold text-7xl sm:text-8xl text-gradient">404</span>
        <h1 className="font-display font-semibold text-2xl sm:text-3xl text-ink-light dark:text-ink-dark">
          This page wandered off the map.
        </h1>
        <p className="text-muted-light dark:text-muted-dark max-w-md">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to the portfolio.
        </p>
        <RippleButton href="/" variant="primary" ariaLabel="Back to home">
          <HomeIcon size={16} /> Back to Home
        </RippleButton>
      </motion.div>
    </main>
  );
}
