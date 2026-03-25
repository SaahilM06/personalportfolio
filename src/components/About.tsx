
import React from 'react';
import { GraduationCap, Crosshair, MapPin, Award } from 'lucide-react';

const About = () => {
  const facts = [
    {
      icon: GraduationCap,
      label: 'Education',
      value: 'UT Austin, Computer Science',
      sub: 'Expected May 2027',
    },
    {
      icon: Crosshair,
      label: 'Focus',
      value: 'Low-Latency & Distributed Systems',
      sub: 'ML, Full-Stack',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Austin, TX',
      sub: undefined,
    },
    {
      icon: Award,
      label: 'Recognition',
      value: 'Eagle Scout',
      sub: undefined,
    },
  ];

  return (
    <section id="about" className="py-14 px-6 border-t border-zinc-200">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs text-zinc-500 uppercase tracking-widest mb-6">
          Quick Facts
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="bg-white border border-zinc-200 rounded-xl p-5 hover:border-zinc-400 transition-colors duration-200"
            >
              <fact.icon size={16} className="text-zinc-500 mb-3" />
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1.5">{fact.label}</p>
              <p className="text-sm font-semibold text-zinc-800">{fact.value}</p>
              {fact.sub && (
                <p className="text-xs text-zinc-500 mt-1">{fact.sub}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
