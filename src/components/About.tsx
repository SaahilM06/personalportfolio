
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[rgb(10,16,29)]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative bg-[rgb(15,23,42)] rounded-2xl p-6 border border-white/10">
                <img
                  src="/Facetune_13-07-2025-07-22-57.png"
                  alt="Profile"
                  className="w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <div className="bg-[rgb(15,23,42)]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transform hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-2xl font-semibold text-white mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Who I Am
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  I'm a Computer Science student at the University of Texas at Austin, graduating in May 2027. 
                  I have a passion for AI/ML, machine learning engineering, and full-stack development, with experience 
                  in building end-to-end ML pipelines and real-time applications.
                </p>
              </div>

              <div className="bg-[rgb(15,23,42)]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transform hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-2xl font-semibold text-white mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  What I Do
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  I specialize in developing AI-powered applications, from deep learning models to real-time ML pipelines. 
                  My work spans from edge-to-cloud systems using mmWave sensors to RAG-based QA systems, always focusing on 
                  creating impactful solutions that leverage cutting-edge AI/ML technologies.
                </p>
              </div>

              <div className="bg-[rgb(15,23,42)]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transform hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-2xl font-semibold text-white mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  My Goals
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  I aim to leverage technology to solve real-world problems, particularly in AI ethics and accessibility. 
                  I'm constantly learning and experimenting with new technologies to create more intelligent and 
                  user-centric solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
