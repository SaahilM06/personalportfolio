
import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: [
        'Led development of high-traffic web applications serving 100k+ users',
        'Architected and implemented microservices infrastructure using Node.js and React',
        'Mentored junior developers and established coding standards',
        'Improved application performance by 40% through optimization techniques'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions LLC',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: [
        'Developed and maintained multiple client-facing web applications',
        'Collaborated with design teams to implement pixel-perfect UI/UX',
        'Integrated third-party APIs and payment gateways',
        'Reduced bug reports by 60% through comprehensive testing strategies'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2019 - 2020',
      description: [
        'Built responsive web applications using React and TypeScript',
        'Implemented modern CSS frameworks and design systems',
        'Collaborated in agile development environment',
        'Contributed to open-source projects and technical documentation'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02] hover:border-blue-400/30"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-xl text-blue-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:text-right mt-2 md:mt-0">
                    <div className="flex items-center text-slate-400 mb-1">
                      <MapPin size={16} className="mr-2" />
                      {exp.location}
                    </div>
                    <div className="flex items-center text-slate-400">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-slate-300 flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
