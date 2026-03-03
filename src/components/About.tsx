
import React from 'react';
import { GraduationCap, Crosshair, MapPin, Award } from 'lucide-react';

const About = () => {
  const cards = [
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
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-medium text-blue-400/60 uppercase tracking-wider mb-10">
          About
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-slate-900/40 border border-blue-900/20 rounded-xl p-5 hover:border-blue-500/25 transition-all duration-300"
            >
              <card.icon size={18} className="text-blue-400/50 mb-3" />
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-1.5">{card.label}</p>
              <p className="text-sm font-medium text-slate-200">{card.value}</p>
              {card.sub && (
                <p className="text-xs text-slate-500 mt-1">{card.sub}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
