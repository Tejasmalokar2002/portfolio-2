import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../data/profile';
import { fadeInUp, staggerContainer, scaleIn } from '../animations/variants';
import { Code2, Cpu, Globe, GraduationCap, Sparkles, User, Zap } from 'lucide-react';
import profilePhoto from '../assets/091A9064.JPG';

const Profile = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const expertise = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Expertise in building end-to-end applications using Java, Spring Boot, and React."
    },
    {
      icon: Cpu,
      title: "Microservices Architecture",
      description: "Designing scalable and resilient distributed systems with high availability."
    },
    {
      icon: Globe,
      title: "API Design & Integration",
      description: "Crafting robust RESTful APIs and integrating third-party services seamlessly."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Enhancing system throughput and reducing latency for optimal user experience."
    }
  ];

  return (
    <section id="profile" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="space-y-24"
        >
          {/* Header */}
          <div className="flex flex-col items-center text-center space-y-6">
            <motion.div variants={fadeInUp}>
              <span className="section-label">Identity & Expertise</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mt-4">
                The Architect behind the <span className="gradient-text">Systems</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left: Photo & Basic Info */}
            <motion.div 
              variants={scaleIn}
              className="lg:col-span-5 space-y-8"
            >
              <div className="relative group">
                {/* Photo Container */}
                <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] shadow-2xl shadow-black/40 bg-surface">
                  <img 
                    src={profilePhoto} 
                    alt={`Tejas Malokar - ${personalInfo.role}`} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Floating Info Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
                        <User className="text-primary" size={20} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-primary tracking-widest uppercase">Currently</p>
                        <p className="text-sm font-medium text-white">{personalInfo.role}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 rounded-[40px] blur-2xl -z-10 opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-secondary/30 rounded-br-3xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="saas-card p-6 flex flex-col items-center text-center space-y-2">
                  <GraduationCap className="text-primary" size={24} />
                  <p className="text-2xl font-bold text-white">{personalInfo.experience}</p>
                  <p className="text-xs text-muted font-medium uppercase tracking-wider">Experience</p>
                </div>
                <div className="saas-card p-6 flex flex-col items-center text-center space-y-2">
                  <Sparkles className="text-secondary" size={24} />
                  <p className="text-2xl font-bold text-white">10+</p>
                  <p className="text-xs text-muted font-medium uppercase tracking-wider">Projects</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Detailed About & Expertise */}
            <div className="lg:col-span-7 space-y-12">
              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-primary/50" />
                  <span className="text-primary font-bold tracking-widest text-xs uppercase">The Story</span>
                </div>
                <h3 className="text-3xl font-bold text-white tracking-tight">
                  Crafting Digital Excellence with <br /> <span className="text-primary">Java & Modern Web Tech</span>
                </h3>
                <p className="text-lg text-muted leading-relaxed font-medium italic">
                  "I believe that software engineering is not just about writing code, but about solving real-world problems with elegant, scalable, and maintainable solutions."
                </p>
                <p className="text-lg text-muted leading-relaxed">
                  Based in {personalInfo.location}, I specialize in building high-availability enterprise systems and modern SaaS architectures. With {personalInfo.experience} of experience, I've honed my skills in bridging the gap between complex backend logic and seamless frontend experiences.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-primary/50" />
                  <span className="text-primary font-bold tracking-widest text-xs uppercase">Core Expertise</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {expertise.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div 
                        key={index} 
                        variants={fadeInUp}
                        className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                            <Icon className="text-primary group-hover:text-secondary transition-colors" size={20} aria-hidden="true" />
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-bold text-white group-hover:text-primary transition-colors">{item.title}</h4>
                            <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="pt-8">
                <a href="#contact" className="btn-saas px-8 py-4 flex items-center gap-2 group/btn relative overflow-hidden w-fit">
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover/btn:opacity-10 transition-opacity" />
                  <span>Let's Build Something Great</span>
                  <Zap size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
