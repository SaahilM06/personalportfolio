
import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';

const GitHubContributions = () => {
  const username = 'SaahilM06';

  return (
    <section className="py-24 px-6 bg-zinc-900/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">
            GitHub Activity
          </h2>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-white transition-colors duration-200 group"
          >
            <Github size={14} />
            Profile
            <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 md:p-8 overflow-x-auto">
          <img
            src={`https://ghchart.rshah.org/3b82f6/${username}`}
            alt="GitHub Contribution Chart"
            className="w-full h-auto mx-auto"
            style={{ imageRendering: 'crisp-edges' }}
          />
        </div>

        <div className="mt-4">
          <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 flex items-center justify-center overflow-hidden">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true&background=00000000&stroke=27272a&ring=3b82f6&fire=3b82f6&currStreakLabel=a1a1aa&sideLabels=a1a1aa&currStreakNum=fafafa&dates=52525b&sideNums=fafafa`}
              alt="GitHub Streak Stats"
              className="w-full h-auto max-w-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubContributions;
