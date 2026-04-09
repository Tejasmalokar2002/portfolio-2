import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience } from '../data/profile';
import { fadeInUp, staggerContainer } from '../animations/variants';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';

const ExperienceItem = ({ exp, index }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      className="relative pl-10 pb-20 last:pb-0 group"
    >
      {/* Timeline Line with Gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-border via-border to-transparent group-last:h-10 transition-colors group-hover:from-primary/50 group-hover:via-primary/30 group-hover:to-transparent" />
      
      {/* Timeline Dot with Glow */}
      <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-border border-[3px] border-background group-hover:bg-primary group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(79,70,229,0.5)] transition-all duration-500 z-10" />

      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
            <Calendar size={12} className="opacity-70" />
            <span>{exp.period}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-primary transition-colors duration-300">{exp.role}</h3>
          <div className="flex flex-wrap items-center gap-3 text-muted text-sm font-medium">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <Building2 size={14} className="text-secondary" />
              <span>{exp.company}</span>
            </div>
            {exp.client && (
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <span className="text-neutral-500 text-xs">Client:</span>
                <span className="text-neutral-300 italic">{exp.client}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="saas-card p-10 relative overflow-hidden group/card shadow-2xl shadow-black/50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-[80px] group-hover/card:bg-primary/10 transition-colors" />
        
        <p className="text-neutral-400 text-lg mb-10 leading-relaxed max-w-4xl relative z-10 font-medium">
          {exp.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {exp.highlights.map((highlight: string, i: number) => (
            <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 group-hover/card:border-primary/20 group-hover/card:bg-primary/[0.02] transition-all duration-500">
              <div className="mt-1 p-1 rounded-md bg-primary/10 border border-primary/20">
                <CheckCircle2 className="text-primary shrink-0" size={14} />
              </div>
              <span className="text-xs text-neutral-500 leading-relaxed group-hover/card:text-neutral-300 transition-colors">
                {highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
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
              <span className="section-label">Professional Roadmap</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text mt-4">
                The journey through <br /> enterprise engineering
              </h2>
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <ExperienceItem 
                key={index} 
                exp={exp} 
                index={index} 
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
