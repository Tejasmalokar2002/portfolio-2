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
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 text-muted hover:text-white transition-colors">
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
                      {project.tech.slice(0, 3).map(t => (
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
      className="snap-center shrink-0 w-[85vw] md:w-[calc(50%-1.5rem)] saas-card group relative overflow-hidden flex flex-col p-0 border border-border/50 hover:border-primary/50 transition-all duration-700 h-[600px] shadow-2xl shadow-black/50"
    >
      {/* Premium Border Shimmer Effect */}
      <div className="absolute inset-0 pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity duration-1000">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-[1500ms] ease-in-out" />
      </div>

      {/* Visual Background Section */}
      <div className="h-64 relative overflow-hidden bg-[#050505] border-b border-border/50">
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
          <Icon size={180} className="text-primary" />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-8 rounded-[2rem] bg-background/40 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group-hover:border-primary/40 transition-all duration-500 relative"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <Icon className="text-primary group-hover:text-secondary transition-colors duration-500 relative z-10" size={56} />
          </motion.div>
        </div>

        {/* Floating Tags */}
        <div className="absolute top-6 left-6 z-20 flex gap-2">
          <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/5 text-[9px] font-bold text-white tracking-widest uppercase shadow-xl">
            {project.type}
          </span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-6 right-6 z-20">
          {project.link ? (
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-[9px] font-extrabold text-green-500 tracking-tighter uppercase shadow-xl">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              Live Deployment
            </div>
          ) : (
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[9px] font-extrabold text-amber-500 tracking-tighter uppercase shadow-xl">
              Internal Architecture
            </div>
          )}
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-12 flex flex-col flex-1 relative z-10 bg-gradient-to-b from-transparent to-black/20">
        <div className="space-y-6 mb-10">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-primary/60">{project.subtitle}</span>
          </div>
          <h3 className="text-4xl font-extrabold text-white tracking-tighter group-hover:text-primary transition-colors duration-500">
            {project.title}
          </h3>
          <p className="text-muted text-base leading-relaxed line-clamp-3 group-hover:text-neutral-300 transition-colors duration-500 font-medium">
            {project.description}
          </p>
        </div>

        <div className="mt-auto space-y-10">
          <div className="flex flex-wrap gap-2.5">
            {project.tech.map((t: string) => (
              <span key={t} className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-neutral-500 text-[11px] font-bold hover:text-white hover:border-neutral-600 hover:bg-white/10 transition-all duration-300">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-10 border-t border-border/30">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted font-black opacity-50">Core Impact</span>
              <span className="text-sm font-bold text-neutral-100 group-hover:text-primary transition-colors tracking-tight italic">"{project.impact}"</span>
            </div>
            
            {project.link && (
              <motion.a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white text-black hover:bg-primary hover:text-white transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group/btn"
              >
                <ArrowUpRight size={28} strokeWidth={2.5} />
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

  // Show only first 4 projects in horizontal scroll
  const featuredProjects = projects.slice(0, 4);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -(clientWidth * 0.8) : (clientWidth * 0.8);
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
          className="space-y-24"
        >
          {/* Header Section */}
          <div className="px-6 lg:px-20 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-3xl space-y-8">
              <motion.div variants={fadeInUp} className="space-y-4">
                <span className="section-label !mb-0">Product Portfolio</span>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.95]">
                  Engineering <span className="gradient-text">Case Studies.</span>
                </h2>
              </motion.div>
              <motion.p variants={fadeInUp} className="text-xl text-muted leading-relaxed font-medium max-w-2xl">
                A selection of high-impact enterprise systems, full-stack platforms, 
                and specialized technical solutions delivered for global clients.
              </motion.p>
            </div>

            {/* Navigation Controls - Premium Design */}
            <motion.div variants={fadeInUp} className="flex items-center gap-6">
              <div className="flex flex-col items-end gap-2 mr-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted opacity-50">Navigate</span>
                <div className="flex gap-1">
                  {featuredProjects.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1 rounded-full transition-all duration-500 ${
                        Math.round((scrollProgress / 100) * (featuredProjects.length - 1)) === i 
                        ? 'w-6 bg-primary' 
                        : 'w-2 bg-border'
                      }`} 
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  className={`w-16 h-16 rounded-2xl border border-border flex items-center justify-center transition-all duration-500 ${
                    canScrollLeft 
                    ? 'bg-surface hover:border-primary/50 text-white shadow-xl shadow-black/20 hover:-translate-y-1' 
                    : 'opacity-10 cursor-not-allowed text-muted'
                  }`}
                >
                  <ChevronLeft size={28} strokeWidth={2.5} />
                </button>
                <button
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  className={`w-16 h-16 rounded-2xl border border-border flex items-center justify-center transition-all duration-500 ${
                    canScrollRight 
                    ? 'bg-surface hover:border-primary/50 text-white shadow-xl shadow-black/20 hover:-translate-y-1' 
                    : 'opacity-10 cursor-not-allowed text-muted'
                  }`}
                >
                  <ChevronRight size={28} strokeWidth={2.5} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Horizontal Scroll Area */}
          <div className="relative group/container">
            <div
              ref={scrollRef}
              className="flex gap-10 overflow-x-auto snap-x snap-mandatory no-scrollbar px-6 lg:px-20 pb-20"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {featuredProjects.map((project: any) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                />
              ))}
              
              {/* "View Archive" Placeholder Card */}
              <motion.div 
                variants={fadeInUp}
                onClick={() => setIsArchiveOpen(true)}
                className="snap-center shrink-0 w-[85vw] md:w-[400px] saas-card group/more relative overflow-hidden flex flex-col items-center justify-center p-12 border border-dashed border-border hover:border-primary/50 transition-all duration-700 h-[600px] cursor-pointer bg-primary/5"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.05)_0%,transparent_100%)]" />
                <div className="relative z-10 text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-background border border-border flex items-center justify-center mx-auto group-hover/more:scale-110 group-hover/more:border-primary/50 transition-all duration-500 shadow-2xl">
                    <ArrowRight size={32} className="text-primary group-hover/more:translate-x-2 transition-transform duration-500" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">View Archive</h4>
                    <p className="text-muted text-sm font-medium">Explore all {projects.length} technical implementations</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Premium Scroll Progress Bar */}
            <div className="px-6 lg:px-20">
              <div className="h-[1px] w-full bg-border/20 relative overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary"
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
