
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <p className="text-xs text-zinc-500 uppercase tracking-widest mb-4">
          UT Austin &middot; CS '27
        </p>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-zinc-900 tracking-tight leading-[0.95] mb-6">
          Saahil Mehta
        </h1>

        <p className="text-base text-zinc-600 max-w-lg leading-relaxed mb-8">
          Computer Science student at UT Austin. Interested in distributed
          systems, low-latency engineering, and building high-performance
          software. In my free time I play basketball, follow the Golden State
          Warriors, and read.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/SaahilM06"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/saahil-mehta-5431a525b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
          <a
            href="mailto:snm3332@utexas.edu"
            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
          >
            <Mail size={15} />
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
