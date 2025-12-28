
import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import HeroBackground from './HeroBackground';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[rgb(10,16,29)]">
      <HeroBackground />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            {/* Intro text with staggered animation */}
            <h2 className="text-xl md:text-2xl text-blue-400 font-medium mb-4 opacity-0 animate-[slide-up_1s_ease-out_0.2s_forwards]">
              Hello, I'm
            </h2>

            {/* Name with gradient and shine effect */}
            <div className="relative mb-6">
              <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-white bg-[length:250%_100%] animate-[text-shimmer_3s_ease-in-out_infinite]">
                Saahil Mehta
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]" />
            </div>

            {/* Role with gradient animation */}
            <div className="text-2xl md:text-4xl mb-8 opacity-0 animate-[slide-up_1s_ease-out_0.6s_forwards]">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-[length:200%_auto] animate-[gradient_4s_linear_infinite] bg-clip-text text-transparent font-semibold">
                Student + Software Engineer
              </span>
            </div>
          </div>

          {/* Description with fade-in and blur effect */}
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed opacity-0 animate-[fade-in_1s_ease-out_0.8s_forwards] [text-shadow:0_0_30px_rgba(59,130,246,0.1)]">
            I'm passionate about building AI-powered tools, real-time systems, and creative software that solves real problems.
            From debate bots and embedded ML to cloud-native apps, I love engineering projects that blend intelligence, usability, and impact.
          </p>

          {/* CTA buttons with hover effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 opacity-0 animate-[slide-up_1s_ease-out_1s_forwards]">
            <Button
              onClick={() => scrollToSection('projects')}
              className="relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 group overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/50 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Button>
            <a
              href="/SaahilFinalRes.pdf"
              download
              className="relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 leading-none group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download size={20} className="mb-[1px] group-hover:translate-y-0.5 transition-transform" />
                Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/50 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </a>
          </div>

          {/* Social links with hover effects */}
          <div className="flex justify-center space-x-6 mb-16 opacity-0 animate-[fade-in_1s_ease-out_1.2s_forwards]">
            {[
              { icon: Github, href: 'https://github.com/SaahilM06', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/saahil-mehta-5431a525b/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:snm3332@utexas.edu', label: 'Email' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="group w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-white/10 relative"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon size={20} className="text-slate-300 group-hover:text-blue-400 transition-colors duration-300" />
                <div className="absolute inset-0 rounded-full border border-blue-400/0 group-hover:border-blue-400/50 group-hover:scale-125 transition-all duration-500" />
              </a>
            ))}
          </div>

          {/* Scroll indicator with pulse effect */}
          <div className="opacity-0 animate-[fade-in_1s_ease-out_1.4s_forwards]">
            <button
              onClick={() => scrollToSection('about')}
              className="relative group text-slate-400 hover:text-blue-400 transition-colors duration-200"
            >
              <ArrowDown size={32} className="animate-bounce" />
              <div className="absolute inset-0 rounded-full border border-blue-400/0 group-hover:border-blue-400/50 group-hover:scale-125 transition-all duration-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
