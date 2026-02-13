import React, { useEffect, useState } from 'react';
import { Github, GitFork, Star, Book, Code2, Package } from 'lucide-react';

interface GitHubStats {
  publicRepos: number;
  totalStars: number;
  totalForks: number;
  totalCommits: number;
}

interface LanguageStats {
  [key: string]: number;
}

const GitHubStats = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const username = 'SaahilM06'; // Your GitHub username

  // Hardcoded languages and frameworks showcase with repo counts
  const languages: LanguageStats = {
    'Python': 8,
    'Java': 8,
    'JavaScript': 6,
    'TypeScript': 4,
    'Go': 3,
    'C++': 2,
    'Rust': 2,
    'C': 2,
    'SQL': 2,
    'R': 2,
    'Shell': 2,
    'HTML': 2
  };

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userResponse.json();

        // Fetch repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
        );
        const reposData = await reposResponse.json();

        // Calculate total stars and forks
        const totalStars = reposData.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0);
        const totalForks = reposData.reduce((sum: number, repo: any) => sum + repo.forks_count, 0);

        setStats({
          publicRepos: userData.public_repos,
          totalStars,
          totalForks,
          totalCommits: reposData.length * 10 // Rough estimate
        });

        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <section id="github-stats" className="py-20 bg-[rgb(10,16,29)]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-400 border-r-transparent"></div>
              <p className="text-slate-300 mt-4">Loading GitHub stats...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      'Python': 'from-blue-400/20 to-blue-500/20 border-blue-400/40 text-blue-300',
      'Java': 'from-red-500/20 to-orange-600/20 border-red-500/40 text-orange-400',
      'JavaScript': 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/40 text-yellow-400',
      'TypeScript': 'from-blue-500/20 to-blue-600/20 border-blue-500/40 text-blue-400',
      'Go': 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/40 text-cyan-400',
      'C++': 'from-pink-500/20 to-pink-600/20 border-pink-500/40 text-pink-400',
      'C': 'from-purple-500/20 to-purple-600/20 border-purple-500/40 text-purple-400',
      'Rust': 'from-orange-600/20 to-red-600/20 border-orange-600/40 text-orange-500',
      'SQL': 'from-indigo-500/20 to-indigo-600/20 border-indigo-500/40 text-indigo-400',
      'R': 'from-blue-500/20 to-indigo-600/20 border-blue-500/40 text-blue-400',
      'HTML': 'from-orange-500/20 to-red-600/20 border-orange-500/40 text-orange-400',
      'Shell': 'from-green-500/20 to-green-600/20 border-green-500/40 text-green-400',
    };
    return colors[language] || 'from-slate-500/20 to-slate-600/20 border-slate-500/40 text-slate-400';
  };

  const getLanguageBarColor = (language: string) => {
    const colors: { [key: string]: string } = {
      'Python': 'bg-blue-500',
      'Java': 'bg-orange-500',
      'JavaScript': 'bg-yellow-500',
      'TypeScript': 'bg-blue-500',
      'Go': 'bg-cyan-500',
      'C++': 'bg-pink-500',
      'C': 'bg-purple-500',
      'Rust': 'bg-orange-600',
      'SQL': 'bg-indigo-500',
      'R': 'bg-blue-500',
      'HTML': 'bg-orange-500',
      'Shell': 'bg-green-500',
    };
    return colors[language] || 'bg-slate-500';
  };

  return (
    <section id="github-stats" className="py-20 bg-[rgb(10,16,29)]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              GitHub <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Analytics</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-4"></div>
            <p className="text-slate-300 text-lg">Live statistics and technology usage from my GitHub profile</p>
          </div>

          {/* Stats Cards Grid */}
          {stats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <StatCard
                icon={<Book size={24} />}
                value={stats.publicRepos}
                label="Repositories"
                color="blue"
              />
              <StatCard
                icon={<Star size={24} />}
                value={stats.totalStars}
                label="Total Stars"
                color="yellow"
              />
              <StatCard
                icon={<GitFork size={24} />}
                value={stats.totalForks}
                label="Total Forks"
                color="cyan"
              />
              <StatCard
                icon={<Code2 size={24} />}
                value={Object.keys(languages).length}
                label="Languages"
                color="purple"
              />
            </div>
          )}

          {/* Languages & Technologies Section */}
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Languages & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Technologies</span>
            </h3>
            
            <div className="bg-[rgb(15,23,42)]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <Package className="text-blue-400" size={24} />
                <p className="text-slate-300">
                  Programming languages and technologies I work with across my projects
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Object.entries(languages).map(([language, repoCount]) => {
                  return (
                    <div
                      key={language}
                      className={`bg-gradient-to-br ${getLanguageColor(language)} backdrop-blur-sm border rounded-xl p-4 transform hover:scale-105 transition-all duration-300 hover:shadow-lg`}
                    >
                      <div className="mb-3">
                        <h4 className={`font-bold text-lg ${getLanguageColor(language).split(' ')[2]}`}>
                          {language}
                        </h4>
                      </div>
                      <p className="text-sm text-slate-300 font-medium">
                        {repoCount} {repoCount === 1 ? 'repository' : 'repositories'}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* GitHub Profile Link */}
          <div className="mt-12 text-center">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              <Github size={24} />
              View Full GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  color: 'blue' | 'yellow' | 'cyan' | 'purple' | 'green' | 'pink';
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, color }) => {
  const colorClasses = {
    blue: 'from-blue-500/10 to-blue-600/10 border-blue-500/30 text-blue-400',
    yellow: 'from-yellow-500/10 to-yellow-600/10 border-yellow-500/30 text-yellow-400',
    cyan: 'from-cyan-500/10 to-cyan-600/10 border-cyan-500/30 text-cyan-400',
    purple: 'from-purple-500/10 to-purple-600/10 border-purple-500/30 text-purple-400',
    green: 'from-green-500/10 to-green-600/10 border-green-500/30 text-green-400',
    pink: 'from-pink-500/10 to-pink-600/10 border-pink-500/30 text-pink-400',
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} border backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-lg`}>
      <div className={`${colorClasses[color].split(' ')[2]} mb-3`}>{icon}</div>
      <div className="text-3xl font-bold text-white mb-1">
        {value.toLocaleString()}
      </div>
      <div className="text-sm text-slate-300">{label}</div>
    </div>
  );
};

export default GitHubStats;
