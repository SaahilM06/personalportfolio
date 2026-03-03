
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Aristocrat Technologies',
      location: 'Austin, TX',
      period: 'Aug – Dec 2025',
      bullets: [
        'Authored a modular parsing library in Python, converting game-requirement documentation (DOCX, Excel, TFS, JIRA) into structured dictionaries for the LLM test-case automation pipeline',
        'Developed intelligent parsing workflows for malformed Excel spreadsheets using Mistral Small 3.1 with fuzzy matching, data chunking, and prompt engineering',
        'Applied Llama validation against casino game implementations, reducing manual QA by 15+ hours per quarter',
      ],
    },
    {
      title: 'Machine Learning Engineer Fellow',
      company: 'Texas Instruments',
      location: 'Dallas, TX',
      period: 'May – Aug 2025',
      bullets: [
        'Built an end-to-end ML pipeline using mmWave sensor for real-time human fall detection and occupancy monitoring with 90%+ accuracy',
        'Implemented edge-to-cloud pipeline: binary sensor → JSON → MQTT → AWS IoT Core → Lambda → EC2-hosted PointNet-LSTM inference',
        'Developed a PointNet-LSTM model for 3D point cloud fall classification, outperforming TI baselines by 15%',
        'Created a React + Node.js dashboard with WebSockets for real-time model training and dataset management',
      ],
    },
    {
      title: 'Software Engineer Intern',
      company: 'Suits',
      location: 'Austin, TX',
      period: 'Aug 2024 – May 2025',
      bullets: [
        'Built a RAG QA pipeline with LangChain to retrieve and summarize class action lawsuit details',
        'Integrated Hugging Face Transformers and Pinecone for vector search, increasing retrieval accuracy by 40%',
        'Developed PostgreSQL/MySQL schemas for 10,000+ records, reducing data processing latency by 25%',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-blue-950/10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-medium text-blue-400/60 uppercase tracking-wider mb-12">
          Experience
        </h2>
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                  <p className="text-sm text-blue-400">{exp.company}</p>
                </div>
                <p className="text-sm text-slate-500 shrink-0">
                  {exp.period} &middot; {exp.location}
                </p>
              </div>
              <ul className="space-y-3 border-l border-blue-900/30 pl-4 ml-0.5">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="text-sm text-slate-400 leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
