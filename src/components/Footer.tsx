
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[rgb(10,16,29)] border-t border-slate-700/50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                Saahil Mehta
              </div>
              <p className="text-slate-400">Full Stack Developer</p>
            </div>
            
            <div className="flex space-x-6 mb-6 md:mb-0">
              {[
                { icon: Github, href: 'https://github.com/SaahilM06', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/saahil-mehta-5431a525b/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:saahilm30@gmail.com', label: 'Email' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-blue-400/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-slate-700/50 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              © {currentYear} Saahil Mehta. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
