
import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown, Code2, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import HeroBackground from './HeroBackground';

const Hero = () => {
  const [githubStats, setGithubStats] = useState({ repos: 0, stars: 0 });

  useEffect(() => {
    // Fetch basic GitHub stats for the hero
    const fetchStats = async () => {
      try {
        const userResponse = await fetch('https://api.github.com/users/SaahilM06');
        const userData = await userResponse.json();
        
        const reposResponse = await fetch('https://api.github.com/users/SaahilM06/repos?per_page=100');
        const reposData = await reposResponse.json();
        
        const totalStars = reposData.reduce((sum: any, repo: any) => sum + repo.stargazers_count, 0);
        
        setGithubStats({
          repos: userData.public_repos || 0,
          stars: totalStars || 0
        });
      } catch (err) {
        console.error('Error fetching GitHub stats:', err);
      }
    };
    
    fetchStats();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[rgb(10,16,29)]">
      <HeroBackground />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="mb-8 opacity-0 animate-[fade-in_1s_ease-out_0.1s_forwards]">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1 shadow-2xl shadow-blue-500/20">
              <div className="w-full h-full rounded-full bg-[rgb(10,16,29)] flex items-center justify-center">
                <Code2 size={48} className="text-blue-400" />
              </div>
            </div>
          </div>

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
            <div className="text-2xl md:text-4xl mb-6 opacity-0 animate-[slide-up_1s_ease-out_0.6s_forwards]">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-[length:200%_auto] animate-[gradient_4s_linear_infinite] bg-clip-text text-transparent font-semibold">
                AI/ML Engineer & Full-Stack Developer
              </span>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 opacity-0 animate-[fade-in_1s_ease-out_0.7s_forwards]">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                <GraduationCap size={20} className="text-blue-400" />
                <span className="text-slate-300 text-sm">UT Austin CS '27</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                <Briefcase size={20} className="text-cyan-400" />
                <span className="text-slate-300 text-sm">{githubStats.repos}+ Projects</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                <Github size={20} className="text-purple-400" />
                <span className="text-slate-300 text-sm">{githubStats.stars} Stars</span>
              </div>
            </div>
          </div>

          {/* Description with fade-in and blur effect */}
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed opacity-0 animate-[fade-in_1s_ease-out_0.8s_forwards] [text-shadow:0_0_30px_rgba(59,130,246,0.1)]">
            Passionate about building <span className="text-blue-400 font-semibold">AI-powered applications</span>, real-time systems, and scalable solutions.
            Specializing in <span className="text-cyan-400 font-semibold">machine learning engineering</span>, deep learning, and full-stack development.
            I create intelligent software that makes a real impact.
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
            <Button
              onClick={() => scrollToSection('github-stats')}
              variant="outline"
              className="relative border-2 border-blue-400/50 text-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Github size={20} className="mr-2" />
              GitHub Analytics
            </Button>
            <a
              href="/SaahilFinalRes.pdf"
              download
              className="relative bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 leading-none group"
            >
              <Download size={20} className="mb-[1px] group-hover:translate-y-0.5 transition-transform" />
              Resume
            </a>
          </div>

          {/* Social links with hover effects */}
          <div className="flex justify-center space-x-6 mb-16 opacity-0 animate-[fade-in_1s_ease-out_1.2s_forwards]">
            {[
              { icon: Github, href: 'https://github.com/SaahilM06', label: 'GitHub', color: 'hover:text-purple-400' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/saahil-mehta-5431a525b/', label: 'LinkedIn', color: 'hover:text-blue-400' },
              { icon: Mail, href: 'mailto:snm3332@utexas.edu', label: 'Email', color: 'hover:text-cyan-400' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`group w-14 h-14 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-white/10 relative ${social.color}`}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon size={22} className="text-slate-300 group-hover:scale-110 transition-all duration-300" />
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
