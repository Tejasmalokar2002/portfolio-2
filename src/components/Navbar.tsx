import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ArrowRight, Sparkles, ChevronRight, Home, User, Code2, Briefcase, Layers } from 'lucide-react';
import { personalInfo } from '../data/profile';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    const sections = ['hero', 'profile', 'about', 'skills', 'projects', 'experience', 'contact'];
    const observers = sections.map(id => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3, rootMargin: '-100px 0px -100px 0px' }
      );

      observer.observe(element);
      return observer;
    });

    return () => observers.forEach(o => o?.disconnect());
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero', icon: Home },
    { name: 'Profile', href: '#profile', id: 'profile', icon: User },
    { name: 'About', href: '#about', id: 'about', icon: User },
    { name: 'Skills', href: '#skills', id: 'skills', icon: Code2 },
    { name: 'Projects', href: '#projects', id: 'projects', icon: Layers },
    { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none px-4 pt-4 md:pt-6">
      <motion.nav
        initial={false}
        animate={{
          width: scrolled ? 'auto' : '100%',
          maxWidth: scrolled ? '1100px' : '1280px',
          padding: scrolled ? '0.5rem 1rem' : '0.75rem 1.5rem',
          backgroundColor: scrolled 
            ? 'rgba(10, 10, 10, 0.85)' 
            : 'rgba(10, 10, 10, 0.3)',
          borderRadius: scrolled ? '100px' : '32px',
          borderWidth: '1px',
          borderColor: scrolled 
            ? 'rgba(79, 70, 229, 0.4)' 
            : 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(20px)',
          y: scrolled ? 10 : 0,
          boxShadow: scrolled 
            ? '0 20px 40px -12px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(79, 70, 229, 0.1)'
            : '0 8px 32px -8px rgba(0, 0, 0, 0.2)',
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 1
        }}
        className="pointer-events-auto flex items-center justify-between relative group/nav overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 opacity-0 group-hover/nav:opacity-100 transition-opacity duration-500 blur-xl" />
        
        {/* Mouse-following Glow */}
        <div 
          className="absolute pointer-events-none transition-opacity duration-300 opacity-0 group-hover/nav:opacity-100"
          style={{
            left: mousePosition.x - 150,
            top: mousePosition.y - 150,
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        
        {/* Subtle Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/nav:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

        {/* Logo and Name Section */}
        <div className="flex items-center gap-2 md:gap-3 relative z-10">
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 group shrink-0"
            aria-label="Tejas Malokar Home"
          >
            <div className="relative">
              <Logo className="w-8 h-8 md:w-9 md:h-9 transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping opacity-0 group-hover:opacity-100" />
            </div>
            
            {/* Name - Always visible but responsive */}
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-tighter bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent whitespace-nowrap">
              Tejas <span className="text-primary">Malokar</span>
            </span>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1 ml-2">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.id)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`relative px-3 xl:px-4 py-1.5 xl:py-2 text-xs xl:text-sm font-medium transition-all duration-300 rounded-full ${
                  activeSection === link.id 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
                aria-label={`Navigate to ${link.name}`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {activeSection === link.id && (
                    <link.icon size={12} className="text-primary" />
                  )}
                  {link.name}
                </span>
                
                {/* Active Indicator */}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-full border border-primary/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                {/* Hover Effect */}
                {hoveredLink === link.id && activeSection !== link.id && (
                  <motion.div
                    layoutId="hoverNav"
                    className="absolute inset-0 bg-white/5 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                  />
                )}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 md:gap-3 relative z-10">
          {/* Social Icons (Desktop) */}
          <div className="hidden xl:flex items-center gap-1">
            {[
              { icon: Github, href: personalInfo.github, label: 'GitHub' },
              { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-1.5 xl:p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-all group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={16} className="xl:w-[18px] xl:h-[18px]" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] bg-black/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>

          {/* CTA Button - Responsive sizing */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`group relative flex items-center gap-1.5 text-[11px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-500 overflow-hidden uppercase tracking-wider shadow-lg whitespace-nowrap ${
              scrolled 
                ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-primary/30 hover:shadow-primary/50' 
                : 'bg-white text-black hover:bg-gray-100'
            }`}
            aria-label="Hire Me"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button Shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            
            <Sparkles size={11} className="sm:w-[12px] sm:h-[12px] group-hover:rotate-12 transition-transform duration-300" />
            <span className="hidden xs:inline">Hire Me</span>
            <span className="xs:hidden">Hire</span>
            <ChevronRight size={11} className="sm:w-[12px] sm:h-[12px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden text-gray-400 hover:text-white transition-all p-2 relative z-[60] bg-white/5 hover:bg-white/10 rounded-full border border-white/10 backdrop-blur-sm"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'close' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden bg-black/95 backdrop-blur-xl pointer-events-auto"
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.1 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 z-[70] w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 flex items-center justify-center"
              aria-label="Close menu"
            >
              <X size={20} />
            </motion.button>

            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col h-full px-6 pt-20 pb-8"
            >
              {/* Navigation Links */}
              <div className="flex-1">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    variants={itemVariants}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 py-4 text-lg font-medium text-white/90 hover:text-white border-b border-white/10 active:opacity-70 transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <link.icon size={18} className="text-primary" />
                    </div>
                    <span>{link.name}</span>
                  </motion.a>
                ))}
              </div>
              
              {/* Bottom Section */}
              <motion.div variants={itemVariants} className="pt-8 space-y-6">
                {/* CTA Button */}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-primary to-primary/80 text-white active:scale-95 transition-transform duration-200"
                >
                  <Mail size={16} />
                  Get in Touch
                </a>
                
                {/* Social Links */}
                <div className="flex justify-center gap-5">
                  {[
                    { icon: Github, href: personalInfo.github, label: 'GitHub' },
                    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' }
                  ].map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all flex items-center justify-center"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;