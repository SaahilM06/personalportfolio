
import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto w-full">
        <p className="text-xs text-zinc-400 uppercase tracking-widest mb-5">
          UT Austin &middot; CS '27
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-zinc-900 tracking-tight leading-[0.95] mb-8">
          Saahil Mehta
        </h1>

        <p className="text-base text-zinc-500 max-w-lg leading-relaxed mb-10">
          Computer Science student at UT Austin. Interested in distributed
          systems, low-latency engineering, and building high-performance
          software. In my free time I play basketball, follow the Golden State
          Warriors, and read.
        </p>

        <div className="flex items-center gap-6 mb-20">
          <a
            href="https://github.com/SaahilM06"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-900 transition-colors duration-200"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/saahil-mehta-5431a525b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-900 transition-colors duration-200"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:snm3332@utexas.edu"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-900 transition-colors duration-200"
          >
            <Mail size={16} />
            <span>Email</span>
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="text-zinc-300 hover:text-zinc-600 transition-colors"
        >
          <ArrowDown size={18} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
