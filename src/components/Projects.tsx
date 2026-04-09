import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/profile';
import { ExternalLink, Github, Code2, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-28 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 text-white">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real-world systems built with scalable architecture, clean code, and performance in mind.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:border-primary/40"
            >

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-2xl" />

              {/* Top Gradient Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-secondary to-transparent opacity-40" />

              <div className="relative z-10">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <Code2 className="text-primary" size={26} />
                  </div>

                  <div className="flex gap-3">
                    <a href={project.link} target="_blank">
                      <Github className="text-gray-400 hover:text-white transition" />
                    </a>
                    <a href={project.link} target="_blank">
                      <ExternalLink className="text-gray-400 hover:text-white transition" />
                    </a>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-primary transition">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Problem / Solution */}
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs uppercase text-primary font-semibold mb-1">Problem</p>
                    <p className="text-gray-500 text-sm">{project.problem}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase text-secondary font-semibold mb-1">Solution</p>
                    <p className="text-gray-500 text-sm">{project.solution}</p>
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-6">
                  <p className="text-xs uppercase text-accent font-semibold mb-1">Impact</p>
                  <p className="text-gray-300 text-sm font-medium">
                    {project.impact}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-gray-300 hover:bg-primary/20 hover:border-primary/40 transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
                >
                  View Project <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;