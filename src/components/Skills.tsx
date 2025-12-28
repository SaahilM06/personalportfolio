import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Python', level: 95 },
        { name: 'C++', level: 90 },
        { name: 'C', level: 88 },
        { name: 'R', level: 85 },
        { name: 'SQL', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 88 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Pandas', level: 90 },
        { name: 'NodeJS', level: 90 },
        { name: 'Spring', level: 85 },
        { name: 'LangChain', level: 88 },
        { name: 'scikit-learn', level: 90 },
        { name: 'TensorFlow', level: 85 },
        { name: 'NumPy', level: 90 },
        { name: 'PyTorch', level: 85 }
      ]
    },
    {
      title: 'Platforms & Tools',
      skills: [
        { name: 'AWS', level: 90 },
        { name: 'Firebase', level: 85 },
        { name: 'Docker', level: 85 },
        { name: 'Git', level: 95 },
        { name: 'Figma', level: 80 },
        { name: 'WebSockets', level: 85 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'DynamoDB', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[rgb(10,16,29)]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technical <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/30"
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
