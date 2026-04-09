import React from 'react';
import { personalInfo } from '../data/profile';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 bg-background border-t border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <a href="#" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
                TM
              </div>
              <span>Tejas Malokar</span>
            </a>
            <p className="text-muted text-sm max-w-sm leading-relaxed">
              Full Stack Java Developer focused on high-performance enterprise systems and modern SaaS architectures.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-muted hover:text-white text-sm transition-colors">About</a></li>
              <li><a href="#skills" className="text-muted hover:text-white text-sm transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-muted hover:text-white text-sm transition-colors">Projects</a></li>
              <li><a href="#experience" className="text-muted hover:text-white text-sm transition-colors">Experience</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest">Social</h4>
            <div className="flex gap-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-muted hover:text-white hover:border-neutral-700 transition-all">
                <Github size={18} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-muted hover:text-white hover:border-neutral-700 transition-all">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-muted hover:text-white hover:border-neutral-700 transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-xs font-semibold text-muted hover:text-white uppercase tracking-widest transition-colors group"
          >
            Back to top
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
