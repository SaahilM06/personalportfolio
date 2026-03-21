
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-zinc-200">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-sm font-medium text-zinc-900 mb-1">Saahil Mehta</p>
          <p className="text-xs text-zinc-400">snm3332@utexas.edu &middot; Austin, TX</p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="mailto:snm3332@utexas.edu"
            className="text-zinc-400 hover:text-zinc-900 transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://github.com/SaahilM06"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-900 transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/saahil-mehta-5431a525b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-900 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
