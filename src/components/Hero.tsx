import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { personalInfo } from '../data/profile';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { Helmet } from 'react-helmet';
const Hero = () => {
  return (
    <>
     <Helmet>
        <title>Tejas Malokar | Full Stack Java Developer | Portfolio</title>
        <meta
          name="description"
          content="Tejas Malokar is a Full Stack Java Developer specializing in Spring Boot, Microservices, Kafka, and React. Explore projects, experience, and contact details."
        />
        <meta
          name="keywords"
          content="Tejas Malokar, Full Stack Developer, Java Developer, Spring Boot, Microservices, React Developer, Portfolio"
        />
        <meta name="author" content="Tejas Malokar" />
        <meta name="robots" content="index, follow" />

        {/* 🔥 Open Graph (LinkedIn Preview) */}
        <meta property="og:title" content="Tejas Malokar | Full Stack Developer" />
        <meta property="og:description" content="Portfolio of Tejas Malokar showcasing projects, skills and experience in Java, Spring Boot and React." />
        <meta property="og:url" content="https://tejasmalokar.in" />
        <meta property="og:type" content="website" />
      </Helmet>

    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-[120px] animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
            Available for New Opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">{personalInfo.name}</span>
          </h1>
          
          <div className="text-2xl md:text-4xl font-semibold text-gray-400 mb-8 h-12">
            <Typewriter
              words={[
                'Full Stack Java Developer',
                'Spring Boot Specialist',
                'Microservices Architect',
                'React Developer',
                'UI/UX Enthusiast'
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>

          <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-10 leading-relaxed">
            Building robust, scalable enterprise solutions with modern Java technologies 
            and crafting immersive user experiences with cutting-edge frontend frameworks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline"
            >
              Let's Talk
            </motion.a>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#fff' }}
              className="text-gray-400 transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#fff' }}
              className="text-gray-400 transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ y: -5, color: '#fff' }}
              className="text-gray-400 transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} className="text-gray-500 hover:text-white transition-colors" />
      </motion.div>
    </section>
        </>
  );
};

export default Hero;
