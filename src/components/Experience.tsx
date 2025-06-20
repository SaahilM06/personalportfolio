import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Development Project Lead',
      company: 'Texas Instruments',
      location: 'Dallas, TX',
      period: 'May 2025 – Present',
      description: [
        'Engineered real-time fall detection on TI IWR6843 radar using a lightweight ONNX model with sub-50ms latency',
        'Trained PyTorch classifier to distinguish human vs object falls, achieving 95% accuracy',
        'Deployed FastAPI pipeline to stream event alerts to client interfaces'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Suits',
      location: 'Austin, TX',
      period: 'Aug 2024 – Present',
      description: [
        'Built GPT-3.5-powered RAG pipeline increasing chatbot relevance by 40%',
        'Predicted payment likelihood using logistic regression (85% accuracy)',
        'Designed mobile UI with React Native and Figma, enhancing usability'
      ]
    },
    {
      title: 'AI Quality Assurance Intern',
      company: 'Efficienergi Consulting',
      location: 'Mumbai, India',
      period: 'Jun 2023 – Sep 2023',
      description: [
        'Developed fully offline AI chatbot to parse technical manuals',
        'Integrated LangChain, Docker, and HTML/CSS for modularity',
        'Reduced response time by 40%, improving internal efficiency'
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
