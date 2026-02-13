import React from 'react';
import { ExternalLink, Github, Calendar, TrendingUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: 'Real-Time Collaborative Editor',
      description:
        'Engineered a collaboration system in Go to support multi-user editing with under 100ms update propagation. Implemented Operational Transformation and CRDTs to develop algorithms that merge concurrent edits. Built goroutine concurrency pipelines to handle safe message distribution across all active WebSocket connections.',
      image: '/placeholder.svg',
      technologies: ['Go', 'Operational Transformation', 'CRDTs', 'WebSockets', 'Concurrency', 'Goroutines'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      impact: 'Sub-100ms latency for real-time collaboration'
    },
    {
      title: 'Artificial Neural Network for Image Classification',
      description:
        'Built an Artificial Neural Network (ANN) from scratch in C++ for image classification and pattern recognition. Implemented layers, neurons, weights, and activation functions to process data and make accurate predictions and integrated backward propagation, modular layers, and gradient descent for streamlined training. Added multi-threading to optimize forward and backward propagation reducing model training time by 27%.',
      image: '/placeholder.svg',
      technologies: ['C++', 'Neural Networks', 'Backpropagation', 'Multi-threading', 'Gradient Descent', 'Image Classification'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      impact: '27% faster training with multi-threading'
    },
    {
      title: 'Real-time Debate Assistant',
      description:
        'Built a full stack audio pipeline with WebSockets, Whisper ASR, and Coqui TTS for live debate interactions. Integrated Brave Search API with FAISS indexing and GPT-3.5 to generate contextual rebuttals in real time.',
      image: '/debatebot.png',
      technologies: ['Python', 'WebSockets', 'Whisper ASR', 'Coqui TTS', 'GPT-3.5', 'FAISS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/SaahilM06/debate-bot',
      featured: true,
      impact: 'Real-time AI-powered debate assistance'
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
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-4"></div>
            <p className="text-slate-300 text-lg">Showcasing impactful projects in AI/ML, real-time systems, and full-stack development</p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group bg-[rgb(15,23,42)]/50 backdrop-blur-sm border-white/10 hover:border-blue-400/50 transition-all duration-500 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-5 gap-0">
                    {/* Image Section */}
                    <div className="md:col-span-2 relative overflow-hidden bg-gradient-to-br from-blue-900/30 to-cyan-900/30 min-h-[300px] md:min-h-[400px]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgb(15,23,42)] via-transparent to-transparent"></div>
                      {project.featured && (
                        <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full flex items-center gap-1">
                          <TrendingUp size={12} />
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="md:col-span-3 p-8 flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-slate-300 mb-6 leading-relaxed text-base">
                        {project.description}
                      </p>

                      {/* Impact Badge */}
                      {project.impact && (
                        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-cyan-600/10 border border-cyan-600/30 rounded-lg w-fit">
                          <TrendingUp size={16} className="text-cyan-400" />
                          <span className="text-cyan-300 text-sm font-medium">{project.impact}</span>
                        </div>
                      )}
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium border border-blue-600/30 hover:bg-blue-600/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3">
                        {project.githubUrl !== '#' && (
                          <Button
                            variant="outline"
                            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white flex items-center gap-2 transition-all duration-300"
                            asChild
                          >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github size={16} />
                              View Code
                            </a>
                          </Button>
                        )}
                        {project.liveUrl !== '#' && (
                          <Button
                            variant="outline"
                            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white flex items-center gap-2 transition-all duration-300"
                            asChild
                          >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={16} />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Projects CTA */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/SaahilM06?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-400/50 hover:border-blue-400 text-blue-400 hover:text-white rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm group"
            >
              <Github size={24} className="group-hover:rotate-12 transition-transform" />
              Explore More Projects
              <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
