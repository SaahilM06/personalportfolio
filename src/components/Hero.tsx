
import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h2 className="text-xl md:text-2xl text-blue-400 font-medium mb-4">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Saahil Mehta
            </h1>
            <div className="text-2xl md:text-4xl text-slate-300 mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                Student + Software Engineer
              </span>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-200">
  I’m passionate about building AI-powered tools, real-time systems, and creative software that solves real problems. 
  From debate bots and embedded ML to cloud-native apps, I love engineering projects that blend intelligence, usability, and impact.
</p>

          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-300">
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              View My Work
            </Button>
            <a
  href="/SaahilFinalRes.pdf"
  download
  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 leading-none"
>
  <Download size={20} className="mb-[1px]" />
  Resume
</a>
          </div>
          
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in delay-400">
  {[
    { icon: Github, href: 'https://github.com/SaahilM06', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/saahil-mehta-5431a525b/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:saahilm30@gmail.com', label: 'Email' }
  ].map((social, index) => (
    <a
      key={index}
      href={social.href}
      className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-slate-300 hover:text-blue-400 hover:bg-blue-400/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-110"
      aria-label={social.label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <social.icon size={20} />
    </a>
  ))}
</div>

          
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
