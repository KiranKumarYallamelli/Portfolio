import { lazy, Suspense } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';

// Code-split everything below the fold — keeps the initial bundle (and
// first paint) focused on the Navbar + Hero only.
const About = lazy(() => import('../components/About/About'));
const Skills = lazy(() => import('../components/Skills/Skills'));
const Projects = lazy(() => import('../components/Projects/Projects'));
const Experience = lazy(() => import('../components/Experience/Experience'));
const Certificates = lazy(() => import('../components/Certificates/Certificates'));
const GitHub = lazy(() => import('../components/GitHub/GitHub'));
const Resume = lazy(() => import('../components/Resume/Resume'));
const Contact = lazy(() => import('../components/Contact/Contact'));
const Footer = lazy(() => import('../components/Footer/Footer'));

function SectionFallback() {
  return (
    <div className="w-full py-24 flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-primary/30 border-t-primary animate-spin" aria-hidden="true" />
      <span className="sr-only">Loading section…</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certificates />
          <GitHub />
          <Resume />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
