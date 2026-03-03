
import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient blue glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-[100px] animate-glow-pulse [animation-delay:4s]" />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-sky-500/10 rounded-full blur-[80px] animate-glow-pulse [animation-delay:2s]" />
      </div>

      {/* Dot grid texture */}
      <div className="absolute inset-0 dot-grid opacity-60" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-6">
          <span className="inline-block text-sm text-blue-400/60 tracking-wider uppercase mb-6">
            UT Austin &middot; CS '27
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[0.95]">
            Saahil Mehta
          </h1>
        </div>

        <p className="text-base text-slate-400 max-w-xl mx-auto leading-relaxed mb-12">
          Hi! I'm a Computer Science student at UT Austin. I'm interested in
          distributed systems, low-latency engineering, and building
          high-performance software. In my free time, I enjoy playing
          basketball, watching the Golden State Warriors, and reading.
        </p>

        <div className="flex items-center justify-center gap-6 mb-20">
          <a
            href="https://github.com/SaahilM06"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm text-slate-400 hover:text-blue-300 transition-colors duration-200"
          >
            <Github size={18} className="group-hover:scale-110 transition-transform duration-200" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/saahil-mehta-5431a525b/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm text-slate-400 hover:text-blue-300 transition-colors duration-200"
          >
            <Linkedin size={18} className="group-hover:scale-110 transition-transform duration-200" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="mailto:snm3332@utexas.edu"
            className="group flex items-center gap-2 text-sm text-slate-400 hover:text-blue-300 transition-colors duration-200"
          >
            <Mail size={18} className="group-hover:scale-110 transition-transform duration-200" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="text-blue-500/40 hover:text-blue-400 transition-colors"
        >
          <ArrowDown size={20} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
