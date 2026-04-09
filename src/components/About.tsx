import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo, stats } from '../data/profile';
import { Code2, Server, Smartphone, Globe } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const icons = [Code2, Server, Smartphone, Globe];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Side: Stats & About */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Designing the <span className="text-primary">Future</span> of Enterprise Tech
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              {personalInfo.about}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-2xl glass-card text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Feature Grid */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { title: "Backend Systems", desc: "Building high-performance APIs & Microservices", color: "from-blue-500 to-cyan-500" },
              { title: "Mobile Development", desc: "Cross-platform apps with Ionic Framework", color: "from-purple-500 to-pink-500" },
              { title: "Frontend Architecture", desc: "Responsive UIs with React and Angular", color: "from-orange-500 to-red-500" },
              { title: "Database Optimization", desc: "SQL/NoSQL tuning and data architecture", color: "from-green-500 to-emerald-500" }
            ].map((feature, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-3xl glass-card group relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  <div className="p-3 w-fit rounded-xl bg-white/5 border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
