import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: 'Debate Bot',
      description:
        'Real-time AI debate assistant that streams live audio using WebSockets, transcribes with Whisper, and generates contextual rebuttals using GPT-3.5 and Coqui TTS.',
      image: '/debatebot.png',
      technologies: ['Whisper', 'Coqui TTS', 'WebSockets', 'GPT-3.5', 'Brave Search API', 'FAISS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/SaahilM06/debate-bot'
    },
    {
      title: 'Volatility Predictor',
      description:
        'NLP pipeline that forecasts market volatility based on financial headlines, using Google XLNet embeddings and NLTK tone analysis for early market shift identification.',
      image: '/nlp.png',
      technologies: ['Python', 'Google XLNet', 'NLTK', 'Pandas', 'Finance APIs'],
      liveUrl: '#',
      githubUrl: 'https://github.com/SaahilM06/volatility-predictor'
    },
    {
      title: 'Sentiment Analysis Therapist',
      description:
        'AI-powered mental wellness companion that analyzes user mood through text or speech, detects emotional states using NLP models, and responds with supportive, empathetic dialogue. Tracks emotional trends and suggests self-care tips.',
      image: '/sentiment.png',
      technologies: ['Whisper', 'Transformers', 'HuggingFace', 'Python', 'React', 'MongoDB'],
      liveUrl: '#',
      githubUrl: 'https://github.com/SaahilM06/sentiment-therapist'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative" style={{ height: `${projects.length * 100}vh` }}>
            {projects.map((project, index) => (
              <div
                key={index}
                className="sticky top-0 h-screen flex items-center justify-center"
                style={{ zIndex: index + 1 }}
              >
                <div className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02] hover:border-blue-400/30 group shadow-2xl">
                  <div className="grid md:grid-cols-2 gap-0 h-[70vh]">
                    <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"

                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    
                    <div className="p-8 flex flex-col justify-center">
                      <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                      <p className="text-slate-300 mb-6 leading-relaxed text-lg">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium border border-blue-600/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 flex items-center gap-2"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          className="border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-slate-900 flex items-center gap-2"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github size={16} />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
