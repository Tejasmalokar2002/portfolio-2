import React from 'react';
import { personalInfo } from '../data/profile';
import { Github, Linkedin, Mail, ArrowUp, Zap, Heart, Globe, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Profile', href: '#profile' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative pt-24 pb-12 bg-background border-t border-border/50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Identity Section */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-start gap-6"
            >
              <a href="#" className="flex items-center gap-4 group">
                <Logo className="w-12 h-12" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold tracking-tighter text-white group-hover:text-primary transition-colors">
                    {personalInfo.name}
                  </span>
                  <span className="text-xs font-bold text-muted uppercase tracking-[0.2em]">
                    {personalInfo.role}
                  </span>
                </div>
              </a>
              <p className="text-muted text-lg leading-relaxed max-w-md font-medium">
                Designing and architecting high-availability enterprise systems with a focus on 
                <span className="text-white"> performance, security, and modern user experiences.</span>
              </p>
              
              <div className="flex items-center gap-6 pt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-muted hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all shadow-xl shadow-black/20"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Navigation & Contact Section */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-8">
              <h4 className="text-xs font-bold text-white uppercase tracking-[0.3em] flex items-center gap-2">
                <Globe size={14} className="text-primary" />
                Navigation
              </h4>
              <ul className="space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-muted hover:text-white text-sm font-medium transition-all hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-xs font-bold text-white uppercase tracking-[0.3em] flex items-center gap-2">
                <MessageSquare size={14} className="text-secondary" />
                Get in Touch
              </h4>
              <div className="space-y-4">
                <p className="text-sm text-muted font-medium leading-relaxed">
                  Have a project in mind? Let's build something amazing together.
                </p>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-white font-bold text-sm transition-colors group"
                >
                  {personalInfo.email}
                  <Zap size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-6 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 shadow-2xl">
                <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4">Status</h4>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                    <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-500 blur-sm animate-pulse" />
                  </div>
                  <span className="text-sm font-bold text-neutral-300">Available for Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <p className="text-muted text-[10px] font-bold tracking-[0.2em] uppercase">
              © {currentYear} {personalInfo.name}
            </p>
            <span className="hidden md:block w-1 h-1 rounded-full bg-white/20" />
            <p className="text-muted text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              Built with <Heart size={10} className="text-red-500 fill-red-500" /> & Passion
            </p>
          </div>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/30 transition-all shadow-xl shadow-black/20"
          >
            <span className="text-[10px] font-bold text-muted group-hover:text-white uppercase tracking-[0.2em]">
              Back to top
            </span>
            <div className="p-1.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <ArrowUp size={14} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
