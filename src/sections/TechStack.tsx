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
      className="saas-card p-10 group relative overflow-hidden flex flex-col h-full shadow-2xl shadow-black/40 border-border/40 hover:border-primary/40 transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Decorative corner glow */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />

      <div className="flex items-center gap-5 mb-10 relative z-10">
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-500 shadow-xl shadow-black/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Icon className="text-primary group-hover:text-secondary transition-colors duration-300 relative z-10" size={28} />
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
            className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-neutral-400 text-sm font-bold hover:text-white hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default shadow-sm shadow-black/20"
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
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="space-y-20"
        >
          {/* Header */}
          <div className="text-center space-y-6">
            <motion.div variants={fadeInUp}>
              <span className="section-label">Tech Ecosystem</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mt-4">
                The tools I use to build <br /> <span className="gradient-text">resilient software</span>
              </h2>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-muted text-lg max-w-2xl mx-auto">
              A comprehensive suite of technologies enabling enterprise-grade performance, 
              security, and modern user experiences.
            </motion.p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            className="saas-card p-1 relative overflow-hidden group shadow-2xl shadow-primary/5"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="bg-surface p-10 rounded-[15px] relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="space-y-6 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase">
                  Core Expertise
                </div>
                <h4 className="text-3xl font-bold text-white tracking-tight">Enterprise Full-Stack Synergy</h4>
                <p className="text-muted text-lg leading-relaxed">
                  Specialized in architecting complex <span className="text-white font-semibold">Java + Spring Boot</span> ecosystems 
                  integrated with high-performance <span className="text-white font-semibold">React/Angular</span> frontends. 
                  Leveraging modern DevOps practices and cloud infrastructure to deliver scalable, 
                  production-ready solutions.
                </p>
              </div>
              <div className="flex items-center gap-8 bg-black/40 p-8 rounded-[2rem] border border-border/50 shadow-inner group-hover:border-primary/30 transition-all duration-500">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-4 grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 shadow-xl">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring" className="w-full h-full" />
                  </div>
                  <span className="text-[10px] font-bold text-muted group-hover:text-primary transition-colors">Spring</span>
                </div>
                <div className="w-px h-12 bg-border/50" />
                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-4 grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 shadow-xl">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-full h-full" />
                  </div>
                  <span className="text-[10px] font-bold text-muted group-hover:text-secondary transition-colors">React</span>
                </div>
                <div className="w-px h-12 bg-border/50" />
                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-4 grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 shadow-xl">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-full h-full" />
                  </div>
                  <span className="text-[10px] font-bold text-muted group-hover:text-accent transition-colors">Docker</span>
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
