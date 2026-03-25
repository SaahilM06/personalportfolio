
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
    <section id="experience" className="py-14 px-6 border-t border-zinc-200">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs text-zinc-500 uppercase tracking-widest mb-8">
          Experience
        </p>
        <div className="space-y-14">
          {experiences.map((exp, index) => (
            <div key={index}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-5">
                <div>
                  <h3 className="text-base font-semibold text-zinc-900">{exp.title}</h3>
                  <p className="text-sm text-zinc-600">{exp.company}</p>
                </div>
                <p className="text-xs text-zinc-400 shrink-0">
                  {exp.period} &middot; {exp.location}
                </p>
              </div>
              <ul className="space-y-2.5 border-l border-zinc-200 pl-4">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="text-sm text-zinc-600 leading-relaxed">
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
