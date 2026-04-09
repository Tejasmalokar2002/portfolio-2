import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../data/profile';
import { fadeInUp, staggerContainer } from '../animations/variants';
import { Send, Github, Linkedin, Mail, MapPin, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      // Simulate EmailJS or actual API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('success');
      formRef.current?.reset();
    } catch (error) {
      console.error('Email error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left Side: Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.div variants={fadeInUp}>
                <span className="section-label">Get in Touch</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text mt-4">
                  Let's build something <br /> extraordinary
                </h2>
              </motion.div>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-muted leading-relaxed max-w-lg"
              >
                I'm currently open to new opportunities and collaborations. 
                Whether you have a specific project or just want to discuss system design, 
                feel free to reach out.
              </motion.p>
            </div>

            <motion.div variants={fadeInUp} className="space-y-8">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-widest mb-1">Email</p>
                  <p className="text-lg text-white font-medium group-hover:text-primary transition-colors">{personalInfo.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg text-white font-medium group-hover:text-primary transition-colors">{personalInfo.location}</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center space-x-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-saas-outline p-4 rounded-2xl flex items-center gap-2 group">
                <Github size={20} />
                <span>GitHub</span>
                <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-saas-outline p-4 rounded-2xl flex items-center gap-2 group">
                <Linkedin size={20} />
                <span>LinkedIn</span>
                <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </motion.div>
          </div>

          {/* Right Side: Contact Form */}
          <motion.div
            variants={fadeInUp}
            className="saas-card p-10 md:p-14 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-xs font-semibold text-muted uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-6 py-4 rounded-xl bg-black/40 border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/50 text-white transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-xs font-semibold text-muted uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-6 py-4 rounded-xl bg-black/40 border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/50 text-white transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label htmlFor="subject" className="text-xs font-semibold text-muted uppercase tracking-widest ml-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-6 py-4 rounded-xl bg-black/40 border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/50 text-white transition-all outline-none"
                  placeholder="How can I help you?"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="message" className="text-xs font-semibold text-muted uppercase tracking-widest ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-6 py-4 rounded-xl bg-black/40 border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/50 text-white transition-all outline-none resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 rounded-xl bg-white text-black font-bold text-base flex items-center justify-center gap-3 hover:bg-neutral-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-white/5"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-500 bg-green-500/10 p-4 rounded-xl border border-green-500/20"
                >
                  <CheckCircle2 size={18} />
                  Message sent successfully!
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
