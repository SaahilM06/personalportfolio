
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Footer />
    </div>
  );
};

export default Index;
