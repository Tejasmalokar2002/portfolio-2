import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/profile';

const TechStack = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
  ref={ref}
  initial={{ opacity: 0, y: 30 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
  className="text-center mb-16"
>
  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
    Tejas Malokar <span className="text-primary">Tech Stack</span>
  </h2>

  {/* ✅ Hidden SEO Heading */}
  <h3 className="sr-only">
    Full Stack Java Developer Skills - Tejas Malokar
  </h3>

  {/* ✅ SEO Description */}
  <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
    Tejas Malokar is a Full Stack Java Developer skilled in Spring Boot, Microservices, Kafka, React, and modern web technologies for building scalable applications.
  </p>
</motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: groupIndex * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl glass-card relative group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                  <skillGroup.icon className="text-primary group-hover:text-secondary transition-colors" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-sm hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
