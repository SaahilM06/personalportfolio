import React from 'react';
import { Code2, Layers, Wrench, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={24} />,
      color: 'blue',
      skills: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'Go', 'C', 'R', 'SQL']
    },
    {
      title: 'AI/ML & Frameworks',
      icon: <Brain size={24} />,
      color: 'purple',
      skills: ['TensorFlow', 'PyTorch', 'LangChain', 'scikit-learn', 'Pandas', 'NumPy', 'FAISS', 'OpenCV']
    },
    {
      title: 'Web & Backend',
      icon: <Layers size={24} />,
      color: 'cyan',
      skills: ['React', 'Node.js', 'Spring Boot', 'FastAPI', 'WebSockets', 'REST APIs', 'GraphQL', 'Next.js']
    },
    {
      title: 'Tools & Cloud',
      icon: <Wrench size={24} />,
      color: 'green',
      skills: ['Git', 'AWS', 'Docker', 'PostgreSQL', 'MongoDB', 'Firebase', 'Redis', 'Linux']
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'from-blue-500/10 to-blue-600/10',
      border: 'border-blue-500/30 hover:border-blue-400/50',
      icon: 'text-blue-400',
      badge: 'bg-blue-600/20 text-blue-300 border-blue-600/30'
    },
    purple: {
      bg: 'from-purple-500/10 to-purple-600/10',
      border: 'border-purple-500/30 hover:border-purple-400/50',
      icon: 'text-purple-400',
      badge: 'bg-purple-600/20 text-purple-300 border-purple-600/30'
    },
    cyan: {
      bg: 'from-cyan-500/10 to-cyan-600/10',
      border: 'border-cyan-500/30 hover:border-cyan-400/50',
      icon: 'text-cyan-400',
      badge: 'bg-cyan-600/20 text-cyan-300 border-cyan-600/30'
    },
    green: {
      bg: 'from-green-500/10 to-green-600/10',
      border: 'border-green-500/30 hover:border-green-400/50',
      icon: 'text-green-400',
      badge: 'bg-green-600/20 text-green-300 border-green-600/30'
    }
  };

  return (
    <section id="skills" className="py-20 bg-[rgb(10,16,29)]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technical <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-4"></div>
            <p className="text-slate-300 text-lg">Proficient in modern technologies across the full development stack</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const colors = colorClasses[category.color as keyof typeof colorClasses];
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${colors.bg} border ${colors.border} backdrop-blur-sm rounded-xl p-8 transition-all duration-300 transform hover:scale-[1.02]`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`${colors.icon}`}>{category.icon}</div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-4 py-2 ${colors.badge} rounded-lg text-sm font-medium border transition-all duration-200 hover:scale-105 hover:shadow-lg`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Skills Note */}
          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm">
              Constantly learning and exploring new technologies to stay at the forefront of software development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
