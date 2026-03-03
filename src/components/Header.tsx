
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060b18]/80 backdrop-blur-lg border-b border-blue-900/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-base font-semibold text-white tracking-tight hover:text-blue-300 transition-colors"
          >
            SM
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-slate-400 hover:text-blue-300 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <a
              href="/SaahilFinalRes.pdf"
              download
              className="text-sm text-white bg-blue-600 hover:bg-blue-500 px-4 py-1.5 rounded-full font-medium transition-colors duration-200"
            >
              Resume
            </a>
          </div>

          <button
            className="md:hidden text-slate-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4 border-t border-blue-900/20 pt-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-slate-400 hover:text-blue-300 transition-colors text-left"
              >
                {item.label}
              </button>
            ))}
            <a
              href="/SaahilFinalRes.pdf"
              download
              className="text-sm text-white bg-blue-600 hover:bg-blue-500 px-4 py-1.5 rounded-full font-medium transition-colors w-fit"
            >
              Resume
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
