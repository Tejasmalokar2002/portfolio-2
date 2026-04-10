import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../data/profile';
import { fadeInUp, staggerContainer } from '../animations/variants';
import { Terminal, Code2, Layers, Cpu, Database, Server } from 'lucide-react';

const AboutCard = ({ icon: Icon, title, description, delay = 0 }: any) => {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ delay, duration: 0.5 }}
      className="saas-card p-10 group relative overflow-hidden flex flex-col items-start text-left h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative z-10">
        <div className="p-4 w-fit rounded-2xl bg-white/5 border border-white/10 mb-8 group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-500 shadow-xl shadow-black/20">
          <Icon className="text-primary group-hover:text-secondary transition-colors duration-300" size={28} aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300 tracking-tight">{title}</h3>
        <p className="text-muted text-base leading-relaxed group-hover:text-neutral-300 transition-colors duration-300 font-medium">
          {description}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Server,
      title: "Backend Scalability",
      description: "Designing high-throughput microservices using Spring Boot and high-performance databases."
    },
    {
      icon: Code2,
      title: "Frontend Engineering",
      description: "Building responsive and accessible user interfaces with React, TypeScript, and Tailwind."
    },
    {
      icon: Layers,
      title: "System Design",
      description: "Architecting modular and maintainable systems with a focus on decoupling and resilience."
    },
    {
      icon: Cpu,
      title: "Performance Tuning",
      description: "Optimizing database queries, caching strategies, and frontend rendering for 60fps experience."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="flex flex-col items-center space-y-20"
        >
          {/* Header */}
          <div className="max-w-3xl text-center space-y-6">
            <motion.div variants={fadeInUp}>
              <span className="section-label">Engineering Story</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text mt-4">
                Architecting solutions for the <br /> modern enterprise
              </h2>
            </motion.div>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-muted leading-relaxed"
            >
              With 2+ years of experience in building mission-critical systems, 
              I specialize in bridging the gap between complex backend architectures 
              and premium user experiences.
            </motion.p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {features.map((feature, index) => (
              <AboutCard 
                key={index} 
                {...feature} 
                delay={index * 0.1} 
              />
            ))}
          </div>

          {/* Core Philosophy */}
          <motion.div 
            variants={fadeInUp}
            className="w-full saas-card p-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(79,70,229,0.1)_0%,transparent_50%)]" />
            <div className="max-w-2xl relative z-10 space-y-4">
              <h3 className="text-2xl font-bold text-white">Philosophy: Code as a Product</h3>
              <p className="text-muted leading-relaxed">
                I believe that every line of code should serve a product goal. 
                Whether it's a microservice in the banking sector or a retail analytics dashboard, 
                quality, security, and performance are non-negotiable.
              </p>
            </div>
            <div className="flex gap-10 relative z-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">2+</div>
                <div className="text-[10px] uppercase tracking-widest text-muted">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">10+</div>
                <div className="text-[10px] uppercase tracking-widest text-muted">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-muted">Delivery</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
