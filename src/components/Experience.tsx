import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience } from '../data/profile';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Professional <span className="text-primary">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A timeline of my professional experience in the tech industry, 
            focusing on high-impact enterprise projects.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-20 hidden md:block" />

          <div className="space-y-16">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`relative flex flex-col md:flex-row items-center justify-between ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className="w-full md:w-[45%] p-8 rounded-3xl glass-card group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                        <Briefcase className="text-primary" size={24} />
                      </div>
                      <span className="text-sm font-semibold text-primary uppercase tracking-wider">{exp.period}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-medium text-gray-400 mb-6 flex items-center gap-2">
                      {exp.company}
                    </h4>
                    
                    <p className="text-gray-500 text-sm leading-relaxed mb-8">
                      {exp.description}
                    </p>

                    <ul className="space-y-4">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-20 hidden md:block shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
