
import React from 'react';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Creative solutions to complex technical challenges'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborative approach to achieving project goals'
    },
    {
      icon: Zap,
      title: 'Fast Learner',
      description: 'Quick to adapt to new technologies and frameworks'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="prose prose-lg text-slate-300">
                <p className="text-xl leading-relaxed mb-6">
                  I'm a passionate Full Stack Developer with a love for creating innovative web applications. 
                  My journey in tech started with curiosity and has evolved into a career focused on building 
                  solutions that make a difference.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  With expertise in modern frameworks and a keen eye for user experience, I enjoy the entire 
                  development process – from conceptualization to deployment. I'm always eager to learn new 
                  technologies and tackle challenging problems.
                </p>
                <p className="text-lg leading-relaxed">
                  When I'm not coding, you'll find me exploring new tech trends, contributing to open-source 
                  projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:border-blue-400/30"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
