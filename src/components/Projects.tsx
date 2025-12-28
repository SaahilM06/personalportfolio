import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: 'Real-Time Collaborative Editor',
      description:
        'Engineered a collaboration system in Go to support multi-user editing with under 100ms update propagation. Implemented Operational Transformation and CRDTs to develop algorithms that merge concurrent edits. Built goroutine concurrency pipelines to handle safe message distribution across all active WebSocket connections.',
      image: '/placeholder.svg',
      technologies: ['Go', 'Operational Transformation', 'CRDTs', 'WebSockets', 'Concurrency', 'Goroutines'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Artificial Neural Network for Image Classification and Regression',
      description:
        'Built an Artificial Neural Network (ANN) from scratch in C++ for image classification and pattern recognition. Implemented layers, neurons, weights, and activation functions to process data and make accurate predictions and integrated backward propagation, modular layers, and gradient descent for streamlined training. Added multi-threading to optimize forward and backward propagation reducing model training time by 27%.',
      image: '/placeholder.svg',
      technologies: ['C++', 'Neural Networks', 'Backpropagation', 'Multi-threading', 'Gradient Descent', 'Image Classification'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Real-time Debate Assistant',
      description:
        'Built a full stack audio pipeline with WebSockets, Whisper ASR, and Coqui TTS for live debate interactions. Integrated Brave Search API with FAISS indexing and GPT-3.5 to generate contextual rebuttals in real time.',
      image: '/debatebot.png',
      technologies: ['WebSockets', 'Whisper ASR', 'Coqui TTS', 'GPT-3.5', 'Brave Search API', 'FAISS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/SaahilM06/debate-bot'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[rgb(10,16,29)]">
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
                <div className="w-full bg-[rgb(10,25,47)] rounded-xl overflow-hidden shadow-2xl hover:scale-[1.01] transition-transform duration-300 border border-white/10">
                  <div className="grid md:grid-cols-2 gap-0 h-[70vh]">
                    <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgb(10,25,47)] to-transparent"></div>
                    </div>

                    <div className="p-8 flex flex-col justify-center bg-[rgb(10,25,47)]">
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
                          className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-[rgb(10,25,47)] flex items-center gap-2"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          className="border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-[rgb(10,25,47)] flex items-center gap-2"
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
