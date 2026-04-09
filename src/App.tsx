import React, { Suspense, lazy, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

// Lazy load sections for better performance
const Hero = lazy(() => import('./sections/Hero'));
const About = lazy(() => import('./sections/About'));
const TechStack = lazy(() => import('./sections/TechStack'));
const Projects = lazy(() => import('./sections/Projects'));
const Experience = lazy(() => import('./sections/Experience'));
const Contact = lazy(() => import('./sections/Contact'));

// Performance optimized Loading fallback
const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
);

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden selection:bg-primary/30 selection:text-white">
      {/* Custom Cursor - Minimalist */}
      <CustomCursor />

      {/* Global Glow Layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] animate-pulse-glow" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Suspense fallback={<SectionLoader />}>
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Experience />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>

      {/* Scroll Progress Indicator - Premium Linear Style */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent z-[100] transition-all duration-300 ease-out shadow-[0_0_10px_rgba(79,70,229,0.5)]" 
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

export default App;
