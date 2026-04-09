import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/profile';
import { fadeInUp, staggerContainer } from '../animations/variants';

const SkillCategory = ({ category, icon: Icon, items, delay = 0 }: any) => {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ delay, duration: 0.5 }}
      className="saas-card p-10 group relative overflow-hidden flex flex-col h-full shadow-xl shadow-black/20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="flex items-center gap-5 mb-10 relative z-10">
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-500 shadow-lg shadow-black/20">
          <Icon className="text-primary group-hover:text-secondary transition-colors duration-300" size={28} />
        </div>
        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300 tracking-tight">
          {category}
        </h3>
      </div>

      <div className="flex flex-wrap gap-3 relative z-10">
        {items.map((skill: string, index: number) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-neutral-400 text-sm font-bold hover:text-white hover:border-neutral-600 hover:bg-white/10 transition-all cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

const TechStack = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="space-y-16"
        >
          {/* Header */}
          <div className="text-center space-y-6">
            <motion.div variants={fadeInUp}>
              <span className="section-label">Tech Ecosystem</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text mt-4">
                The tools I use to build <br /> resilient software
              </h2>
            </motion.div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <SkillCategory 
                key={index} 
                {...skillGroup} 
                delay={index * 0.1} 
              />
            ))}
          </div>

          {/* Featured Integration Highlight */}
          <motion.div 
            variants={fadeInUp}
            className="saas-card p-1 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-20" />
            <div className="bg-surface p-8 rounded-[15px] relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-white">Full-Stack Synergy</h4>
                <p className="text-muted max-w-xl">
                  Specialized in the Java + React ecosystem. 
                  Leveraging Spring Boot for high-performance backends 
                  and React/TypeScript for type-safe, fluid frontend architectures.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring" className="w-full h-full" />
                </div>
                <div className="w-4 h-px bg-border" />
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-full h-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
