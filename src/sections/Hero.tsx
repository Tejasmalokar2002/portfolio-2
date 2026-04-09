import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/profile';
import { fadeInUp, staggerContainer, reveal } from '../animations/variants';
import { Github, Linkedin, Mail, ArrowRight, Terminal } from 'lucide-react';

const CodeSnippet = () => {
  const code = `const developer = {
  name: "${personalInfo.name}",
  role: "${personalInfo.role}",
  experience: "${personalInfo.experience}",
  expertise: [
    "Spring Boot",
    "Microservices",
    "React",
    "Cloud"
  ],
  status: "Building systems at scale"
};`;

  return (
    <motion.div
      variants={fadeInUp}
      className="w-full max-w-lg saas-card p-6 font-mono text-sm relative group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="flex items-center gap-2 mb-6 border-b border-border pb-4">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30" />
        </div>
        <div className="flex items-center gap-2 ml-2 text-muted text-xs">
          <Terminal size={12} />
          <span>developer.ts</span>
        </div>
      </div>
      <div className="space-y-1">
        {code.split('\n').map((line, i) => (
          <div key={i} className="flex gap-4">
            <span className="text-muted w-4 text-right select-none">{i + 1}</span>
            <pre className="text-neutral-300">
              {line.split(/("[^"]*")/).map((part, j) => {
                if (part.startsWith('"')) return <span key={j} className="text-secondary">{part}</span>;
                if (['const', 'developer', 'expertise'].includes(part.trim())) return <span key={j} className="text-primary">{part}</span>;
                return part;
              })}
            </pre>
          </div>
        ))}
      </div>
      <motion.div 
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="absolute bottom-6 right-10 w-2 h-5 bg-primary/50"
      />
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-background to-background">
      <div className="absolute inset-0 bg-glow-gradient opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Side: Content */}
          <div className="flex flex-col items-start space-y-10">
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Available for projects
              </div>
            </motion.div>
            
            <div className="space-y-6">
              <motion.h1 
                variants={fadeInUp}
                className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.1] text-white"
              >
                Engineering <br /> 
                <span className="gradient-text">Scalable Solutions</span>
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-muted max-w-xl leading-relaxed font-medium"
              >
                {personalInfo.about}
              </motion.p>
            </div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-5">
              <a href="#projects" className="btn-saas px-8 py-4 flex items-center gap-2 group/btn relative overflow-hidden">
                <div className="absolute inset-0 bg-primary opacity-0 group-hover/btn:opacity-10 transition-opacity" />
                Explore Projects
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-saas-outline px-8 py-4 hover:border-white/40 transition-all">
                Get in touch
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-6 pt-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-muted hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right Side: Code Snippet */}
          <div className="hidden lg:flex justify-end">
            <CodeSnippet />
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={reveal}
        initial="initial"
        animate="animate"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
