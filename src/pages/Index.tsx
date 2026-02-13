
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import GitHubStats from '../components/GitHubStats';
import GitHubContributions from '../components/GitHubContributions';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
     
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <GitHubStats />
        <GitHubContributions />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
