
import React from 'react';
import { Code2, Cpu, Database, Cloud, Brain, Zap, Award, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain size={24} />,
      title: 'AI/ML Engineering',
      description: 'Specialized in building end-to-end ML pipelines, deep learning models, and RAG-based systems.',
      color: 'blue'
    },
    {
      icon: <Zap size={24} />,
      title: 'Real-Time Systems',
      description: 'Expert in building low-latency systems with WebSockets, concurrency, and distributed architectures.',
      color: 'cyan'
    },
    {
      icon: <Code2 size={24} />,
      title: 'Full-Stack Development',
      description: 'Proficient in React, TypeScript, Go, Python, and modern web technologies.',
      color: 'purple'
    },
    {
      icon: <Cloud size={24} />,
      title: 'Cloud & DevOps',
      description: 'Experience with cloud-native apps, Docker, microservices, and scalable infrastructure.',
      color: 'green'
    }
  ];

  const achievements = [
    {
      icon: <Award size={20} />,
      text: 'University of Texas at Austin CS Student',
      subtext: 'Expected graduation: May 2027'
    },
    {
      icon: <Zap size={20} />,
      text: 'Sub-100ms latency systems',
      subtext: 'Real-time collaborative applications'
    }, 
    {
      icon: <Target size={20} />,
      text: 'Eagle Scout',
      subtext: '10+ years of service'
    }
  ];

  const colorClasses = {
    blue: 'from-blue-500/10 to-blue-600/10 border-blue-500/30 text-blue-400',
    cyan: 'from-cyan-500/10 to-cyan-600/10 border-cyan-500/30 text-cyan-400',
    purple: 'from-purple-500/10 to-purple-600/10 border-purple-500/30 text-purple-400',
    green: 'from-green-500/10 to-green-600/10 border-green-500/30 text-green-400'
  };

  return (
    <section id="about" className="py-20 bg-[rgb(10,16,29)]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-4"></div>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              A passionate Computer Science student and AI/ML engineer focused on creating intelligent, impactful solutions
            </p>
          </div>

          {/* Main About Content */}
          <div className="mb-12">
            {/* Story Section */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-[rgb(15,23,42)]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transform hover:scale-[1.02] transition-all duration-300 hover:border-blue-400/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <Code2 size={24} className="text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  I'm a Computer Science student at the <span className="text-blue-400 font-semibold">University of Texas at Austin</span>, graduating in May 2027. 
                  I specialize in <span className="text-cyan-400 font-semibold">AI/ML engineering</span>, machine learning pipelines, and full-stack development, 
                  with a passion for creating systems that are both intelligent and user-centric.
                </p>
              </div>

              <div className="bg-[rgb(15,23,42)]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transform hover:scale-[1.02] transition-all duration-300 hover:border-cyan-400/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-cyan-600/20 rounded-lg">
                    <Cpu size={24} className="text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">What Drives Me</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  I'm driven by the challenge of solving complex technical problems and the opportunity to create technology that makes a real difference. 
                  Whether it's building neural networks from scratch, designing real-time systems, or developing AI-powered applications, 
                  I strive to push the boundaries of what's possible while maintaining a focus on <span className="text-purple-400 font-semibold">ethical AI</span> and accessibility.
                </p>
              </div>
            </div>

            {/* Centered Achievements */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center justify-center gap-2">
                  <Award size={24} className="text-blue-400" />
                  Key Achievements
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <div className="mt-1 text-cyan-400">{achievement.icon}</div>
                      <div>
                        <p className="text-white font-medium">{achievement.text}</p>
                        <p className="text-slate-400 text-sm">{achievement.subtext}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Expertise Cards */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
              Areas of <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-br ${colorClasses[highlight.color as keyof typeof colorClasses]} border backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-lg`}
                >
                  <div className={`${colorClasses[highlight.color as keyof typeof colorClasses].split(' ')[2]} mb-4`}>
                    {highlight.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{highlight.title}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{highlight.description}</p>
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
