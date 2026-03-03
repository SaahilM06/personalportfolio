
import React from 'react';
import { Github, ArrowUpRight, Play } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'SQL Database Query Optimizer',
      description:
        'Cost-based SQL query optimizer in Rust that parses queries, evaluates execution strategies, and selects optimal plans using CPU, I/O, and memory cost modeling. Includes a Redis-compatible in-memory cache in C++ with sub-millisecond retrieval.',
      technologies: ['Rust', 'C++', 'Redis', 'SQL', 'TCP'],
      githubUrl: '',
      highlight: '2–5x query cost reduction',
    },
    {
      title: 'Automated Basketball Score Engine',
      description:
        'GPU-based computer vision system using YOLO, multi-object tracking, jersey and scoreboard OCR, and appearance embeddings to map player-to-ball interactions and generate live stats.',
      technologies: ['Python', 'YOLO', 'FastAPI', 'Triton', 'PostgreSQL'],
      githubUrl: '',
      highlight: 'Real-time GPU inference',
    },
    {
      title: 'Real-Time Collaborative Editor',
      description:
        'Multi-user editing system in Go with sub-100ms update propagation. Uses Operational Transformation and CRDTs for concurrent edit merging, with goroutine pipelines across WebSocket connections.',
      technologies: ['Go', 'OT/CRDTs', 'WebSockets', 'Goroutines'],
      githubUrl: '',
      highlight: 'Sub-100ms latency',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-medium text-blue-400/60 uppercase tracking-wider mb-12">
          Projects
        </h2>
        <div className="grid gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/40 border border-blue-900/20 rounded-xl p-6 md:p-8 hover:border-blue-500/30 hover:bg-slate-900/60 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-200 mb-3">
                {project.title}
              </h3>

              <span className="inline-block text-xs text-blue-300/70 bg-blue-500/10 border border-blue-500/15 px-2 py-0.5 rounded mb-4">
                {project.highlight}
              </span>

              <p className="text-sm text-slate-400 leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-slate-400 bg-blue-950/30 border border-blue-900/20 px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/15 px-3 py-1.5 rounded-md hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-200"
                >
                  <Play size={12} />
                  Demo
                </a>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 bg-slate-800/40 border border-blue-900/20 px-3 py-1.5 rounded-md hover:text-slate-200 hover:border-blue-500/30 transition-all duration-200"
                  >
                    <Github size={12} />
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="https://github.com/SaahilM06?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-blue-300 transition-colors duration-200 group"
          >
            View all projects on GitHub
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
