import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Machine Learning Research Intern',
      company: 'Texas Instruments',
      location: 'Dallas, TX',
      period: 'May 2025 – Aug 2025',
      description: [
        'Led development of an edge-cloud fall-detection system leveraging mmWave sensors and AWS services',
        'Achieved >98% reduction in power consumption through optimized ML model quantization',
        'Built MQTT pipeline into AWS IoT Core, Lambda, and SageMaker for real-time processing',
        'Developed PointNet++ classifier processing 100+ events/sec with 95% accuracy'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Suits',
      location: 'Austin, TX',
      period: 'Aug 2024 – May 2025',
      description: [
        'Boosted chatbot accuracy 40% with LangChain and Hugging Face Transformers',
        'Designed payment behavior predictor on 15,000+ transactions achieving 94.6% accuracy',
        'Implemented real-time data processing pipeline handling 1000+ requests/minute'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Texas Convergent',
      location: 'Austin, TX',
      period: 'Aug 2024 – Present',
      description: [
        'Launched MVP with React and Firebase backends serving 5,000+ users',
        'Delivered apps with 5,000+ downloads across Apple and Google Play Stores',
        'Led investor demo initiatives with live product showcases'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[rgb(10,16,29)]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Work <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>

            {/* Experience cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 items-center md:items-start ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full border-4 border-[rgb(10,16,29)] z-10"></div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                    <div className="bg-[rgb(15,23,42)]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transform hover:scale-[1.02] transition-all duration-300 group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                      
                      <div className="relative">
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <h4 className="text-xl text-blue-400 mb-4">{exp.company}</h4>
                        
                        <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-300">
                          <div className="flex items-center gap-1">
                            <MapPin size={16} className="text-blue-400" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={16} className="text-blue-400" />
                            {exp.period}
                          </div>
                        </div>

                        <ul className="space-y-3">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-300">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
