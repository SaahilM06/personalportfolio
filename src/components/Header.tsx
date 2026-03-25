
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
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fafafa]/90 backdrop-blur-md border-b border-zinc-200'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div />

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <a
              href="/SaahilFinalRes.pdf"
              download
              className="text-sm text-zinc-700 border border-zinc-300 hover:border-zinc-500 hover:text-zinc-900 px-4 py-1.5 rounded-full transition-colors duration-200"
            >
              Resume
            </a>
          </div>

          <button
            className="md:hidden text-zinc-500 hover:text-zinc-900 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4 border-t border-zinc-200 pt-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors text-left"
              >
                {item.label}
              </button>
            ))}
            <a
              href="/SaahilFinalRes.pdf"
              download
              className="text-sm text-zinc-700 border border-zinc-300 px-4 py-1.5 rounded-full w-fit"
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
