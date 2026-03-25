
import React, { useRef, useState, useCallback } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const dragThreshold = useRef(false);

  const projects = [
    {
      title: 'SQL Database Query Optimizer',
      description:
        'Cost-based SQL query optimizer in Rust that parses queries, evaluates execution strategies, and selects optimal plans using CPU, I/O, and memory cost modeling. Includes a Redis-compatible in-memory cache in C++ with sub-millisecond retrieval.',
      technologies: ['Rust', 'C++', 'Redis', 'SQL', 'TCP'],
      highlight: '2–5x query cost reduction',
      githubUrl: '',
      demoUrl: '',
    },
    {
      title: 'Automated Basketball Score Engine',
      description:
        'GPU-based computer vision system using YOLO, multi-object tracking, jersey and scoreboard OCR, and appearance embeddings to map player-to-ball interactions and generate live stats.',
      technologies: ['Python', 'YOLO', 'FastAPI', 'Triton', 'PostgreSQL'],
      highlight: 'Real-time GPU inference',
      githubUrl: '',
      demoUrl: '',
    },
    {
      title: 'Real-Time Collaborative Editor',
      description:
        'Multi-user editing system in Go with sub-100ms update propagation. Uses Operational Transformation and CRDTs for concurrent edit merging, with goroutine pipelines across WebSocket connections.',
      technologies: ['Go', 'OT/CRDTs', 'WebSockets', 'Goroutines'],
      highlight: 'Sub-100ms latency',
      githubUrl: '',
      demoUrl: '',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: direction === 'left' ? -460 : 460, behavior: 'smooth' });
  };

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    dragThreshold.current = false;
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = 'grabbing';
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    if (Math.abs(walk) > 4) dragThreshold.current = true;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
  }, []);

  return (
    <section id="projects" className="py-14 border-t border-zinc-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs text-zinc-500 uppercase tracking-widest">Projects</p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-lg border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:border-zinc-400 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-lg border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:border-zinc-400 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 select-none"
          style={{ cursor: 'grab', scrollbarWidth: 'thin' }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="snap-start shrink-0 w-[420px] bg-white border border-zinc-200 rounded-2xl p-8 flex flex-col hover:border-zinc-400 hover:shadow-sm transition-all duration-200"
            >
              {/* Top */}
              <div className="mb-5">
                <span className="text-xs text-zinc-400 bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-full">
                  {project.highlight}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-zinc-900 mb-4 leading-snug">
                {project.title}
              </h3>

              <p className="text-sm text-zinc-600 leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-zinc-500 bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 mt-auto">
                <a
                  href={project.githubUrl || '#'}
                  target={project.githubUrl ? '_blank' : undefined}
                  rel={project.githubUrl ? 'noopener noreferrer' : undefined}
                  onClick={(e) => { if (dragThreshold.current) e.preventDefault(); }}
                  className={`flex items-center gap-2 text-sm px-4 py-2 rounded-lg border transition-colors duration-200 ${
                    project.githubUrl
                      ? 'text-zinc-700 border-zinc-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-900'
                      : 'text-zinc-300 border-zinc-200 cursor-not-allowed'
                  }`}
                >
                  <Github size={14} />
                  GitHub
                </a>
                <a
                  href={project.demoUrl || '#'}
                  target={project.demoUrl ? '_blank' : undefined}
                  rel={project.demoUrl ? 'noopener noreferrer' : undefined}
                  onClick={(e) => { if (dragThreshold.current) e.preventDefault(); }}
                  className={`flex items-center gap-2 text-sm px-4 py-2 rounded-lg border transition-colors duration-200 ${
                    project.demoUrl
                      ? 'text-zinc-700 border-zinc-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-900'
                      : 'text-zinc-300 border-zinc-200 cursor-not-allowed'
                  }`}
                >
                  <ExternalLink size={14} />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <a
            href="https://github.com/SaahilM06?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-400 hover:text-zinc-700 transition-colors"
          >
            View all on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
