import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/profile';
import { fadeInUp, staggerContainer, scaleIn } from '../animations/variants';
import { ArrowUpRight, Globe, Shield, Github, ChevronLeft, ArrowRight, ChevronRight, X, ExternalLink } from 'lucide-react';

const ArchiveModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/90 backdrop-blur-xl"
          />
          
          <motion.div
            variants={scaleIn}
            initial="initial"
            animate="animate"
            exit="initial"
            className="relative w-full max-w-6xl max-h-[90vh] bg-surface border border-border rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Modal Header */}
            <div className="p-8 border-b border-border flex items-center justify-between bg-surface/50 backdrop-blur-md sticky top-0 z-10">
              <div>
                <h3 className="text-3xl font-black tracking-tight text-white">Project Archive</h3>
                <p className="text-muted text-sm font-medium mt-1">Full collection of technical implementations</p>
              </div>
              <button
                onClick={onClose}
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content - Scrollable Grid */}
            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <div 
                    key={project.id}
                    className="saas-card p-6 group hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                        <project.icon className="text-primary" size={24} />
                      </div>
                      <div className="flex gap-2">
                        {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-2 rounded-lg bg-white/5 text-muted hover:text-white transition-colors"
                            aria-label={`View ${project.title} live`}
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="text-[8px] font-bold tracking-widest uppercase text-primary/80">{project.type}</span>
                      </div>
                      <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h4>
                      <p className="text-muted text-xs leading-relaxed line-clamp-2">{project.description}</p>
                    </div>
                    <div className="mt-auto pt-4 border-t border-border/50 flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((t: string) => (
                        <span key={t} className="px-2 py-1 rounded-md bg-white/5 text-[9px] font-bold text-neutral-500">{t}</span>
                      ))}
                      {project.tech.length > 3 && <span className="text-[9px] text-muted font-bold">+{project.tech.length - 3}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const ProjectCard = ({ project }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      className="snap-center shrink-0 w-[85vw] md:w-[calc(33.333%-1.33rem)] lg:w-[calc(33.333%-1.33rem)] saas-card group relative overflow-hidden flex flex-col border border-border/50 hover:border-primary/50 transition-all duration-700 shadow-2xl shadow-black/50"
      style={{ height: 'auto', minHeight: '600px' }}
    >
      {/* Premium Border Shimmer Effect */}
      <div className="absolute inset-0 pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity duration-1000">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-[1500ms] ease-in-out" />
      </div>

      {/* Visual Background Section */}
      <div className="h-56 relative overflow-hidden bg-[#050505] border-b border-border/50 flex-shrink-0">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700" 
             style={{ 
               backgroundImage: `radial-gradient(circle at 2px 2px, #1F1F1F 1px, transparent 0)`, 
               backgroundSize: '32px 32px' 
             }} 
        />
        
        {/* Interactive Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(79,70,229,0.15)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Floating Large Icon */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-10 group-hover:opacity-30 transition-all duration-1000"
          animate={{
            scale: inView ? [1, 1.2, 1] : 1,
            rotate: inView ? [0, 5, 0] : 0,
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <Icon size={160} className="text-primary" />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 rounded-[2rem] bg-background/40 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group-hover:border-primary/40 transition-all duration-500 relative"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <Icon className="text-primary group-hover:text-secondary transition-colors duration-500 relative z-10" size={48} />
          </motion.div>
        </div>

        {/* Floating Tags */}
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/5 text-[9px] font-bold text-white tracking-widest uppercase shadow-xl">
            {project.type}
          </span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-20">
          {project.link ? (
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-[9px] font-extrabold text-green-500 tracking-tighter uppercase shadow-xl">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              Live
            </div>
          ) : (
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[9px] font-extrabold text-amber-500 tracking-tighter uppercase shadow-xl">
              Internal
            </div>
          )}
        </div>
      </div>
      
      {/* Content Section - Flexible height with proper spacing */}
      <div className="p-8 flex flex-col flex-1 relative z-10 bg-gradient-to-b from-transparent to-black/20">
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary/60">{project.subtitle}</span>
          </div>
          <h3 className="text-2xl font-extrabold text-white tracking-tighter group-hover:text-primary transition-colors duration-500 line-clamp-2">
            {project.title}
          </h3>
          <p className="text-muted text-sm leading-relaxed line-clamp-3 group-hover:text-neutral-300 transition-colors duration-500">
            {project.description}
          </p>
        </div>

        <div className="mt-auto space-y-6">
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((t: string) => (
              <span key={t} className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-neutral-500 text-[10px] font-bold hover:text-white hover:border-neutral-600 hover:bg-white/10 transition-all duration-300">
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-neutral-500 text-[10px] font-bold">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-border/30">
            <div className="flex flex-col gap-1">
              <span className="text-[9px] uppercase tracking-[0.2em] text-muted font-black opacity-50">Impact</span>
              <span className="text-xs font-bold text-neutral-100 group-hover:text-primary transition-colors line-clamp-1 italic">"{project.impact}"</span>
            </div>
            
            {project.link && (
              <motion.a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-white text-black hover:bg-primary hover:text-white transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group/btn"
                aria-label={`Open ${project.title} live demo`}
              >
                <ArrowUpRight size={22} strokeWidth={2.5} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Show projects in horizontal scroll (all projects except those in archive view)
  const featuredProjects = projects;

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
      
      // Update arrow visibility
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
      setShowLeftArrow(scrollLeft > 20);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      // Initial check
      setTimeout(handleScroll, 100);
      window.addEventListener('resize', handleScroll);
      return () => {
        el.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-32 bg-background relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-[1600px] mx-auto">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="space-y-16"
        >
          {/* Header Section */}
          <div className="px-6 lg:px-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-6">
              <motion.div variants={fadeInUp} className="space-y-3">
                <span className="section-label !mb-0">Product Portfolio</span>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.95]">
                  Engineering <span className="gradient-text">Case Studies.</span>
                </h2>
              </motion.div>
              <motion.p variants={fadeInUp} className="text-lg text-muted leading-relaxed max-w-2xl">
                A selection of high-impact enterprise systems, full-stack platforms, 
                and specialized technical solutions delivered for global clients.
              </motion.p>
            </div>

            {/* Progress Indicators */}
            <motion.div variants={fadeInUp} className="flex flex-col items-end gap-3">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted">Explore</span>
                <div className="flex gap-1.5">
                  {featuredProjects.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1 rounded-full transition-all duration-500 ${
                        Math.round((scrollProgress / 100) * (featuredProjects.length - 1)) === i 
                        ? 'w-8 bg-primary' 
                        : 'w-2 bg-border'
                      }`} 
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Horizontal Scroll Area with Visible Arrows */}
          <div className="relative">
            {/* Left Arrow - Fixed Position */}
            <AnimatePresence>
              {showLeftArrow && (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onClick={() => scroll('left')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-surface/90 backdrop-blur-md border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-500 shadow-2xl hover:scale-110"
                  style={{ zIndex: 40 }}
                >
                  <ChevronLeft size={24} strokeWidth={2.5} className="text-white" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Right Arrow - Fixed Position */}
            <AnimatePresence>
              {showRightArrow && (
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onClick={() => scroll('right')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-surface/90 backdrop-blur-md border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-500 shadow-2xl hover:scale-110"
                  style={{ zIndex: 40 }}
                >
                  <ChevronRight size={24} strokeWidth={2.5} className="text-white" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Scroll Container */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar px-6 lg:px-20 pb-12"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {featuredProjects.map((project: any) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                />
              ))}
              
              {/* "View Archive" Card - Consistent sizing */}
              <motion.div 
                variants={fadeInUp}
                onClick={() => setIsArchiveOpen(true)}
                className="snap-center shrink-0 w-[85vw] md:w-[calc(33.333%-1.33rem)] saas-card group/more relative overflow-hidden flex flex-col items-center justify-center p-8 border-2 border-dashed border-border hover:border-primary/50 transition-all duration-700 cursor-pointer bg-primary/5"
                style={{ minHeight: '600px' }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.05)_0%,transparent_100%)]" />
                <div className="relative z-10 text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-background border-2 border-border flex items-center justify-center mx-auto group-hover/more:scale-110 group-hover/more:border-primary/50 transition-all duration-500 shadow-2xl">
                    <ArrowRight size={32} className="text-primary group-hover/more:translate-x-2 transition-transform duration-500" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Full Archive</h4>
                    <p className="text-muted text-sm">Explore all {projects.length} projects</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Premium Scroll Progress Bar */}
            <div className="px-6 lg:px-20 pt-4">
              <div className="h-[2px] w-full bg-border/20 relative overflow-hidden rounded-full">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  style={{ width: `${scrollProgress}%` }}
                  transition={{ type: 'spring', damping: 30, stiffness: 150 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Archive Modal */}
      <ArchiveModal isOpen={isArchiveOpen} onClose={() => setIsArchiveOpen(false)} />
    </section>
  );
};

export default Projects;