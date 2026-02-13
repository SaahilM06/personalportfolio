import React from 'react';

const GitHubContributions = () => {
  const username = 'SaahilM06';

  return (
    <section className="py-12 bg-[rgb(10,16,29)]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Contribution <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Activity</span>
            </h3>
            <p className="text-slate-300">My GitHub contribution graph over the past year</p>
          </div>

          {/* GitHub Contribution Graph using GitHub's chart */}
          <div className="bg-[rgb(15,23,42)]/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 overflow-x-auto">
            <img
              src={`https://ghchart.rshah.org/2ea043/${username}`}
              alt="GitHub Contribution Chart"
              className="w-full h-auto mx-auto"
              style={{ 
                filter: 'brightness(1.2) contrast(1.1)',
                imageRendering: 'crisp-edges'
              }}
            />
          </div>

          {/* GitHub Streak Stats */}
          <div className="mt-8">
            <div className="bg-[rgb(15,23,42)]/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex items-center justify-center overflow-hidden">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=0f172a&stroke=2ea043&ring=2ea043&fire=409cff&currStreakLabel=cbd5e1&sideLabels=cbd5e1&currStreakNum=2ea043&dates=cbd5e1&sideNums=2ea043`}
                alt="GitHub Streak Stats"
                className="w-full h-auto max-w-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubContributions;
