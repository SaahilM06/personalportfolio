
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-blue-900/20">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <p className="text-xs text-slate-600">
          &copy; {new Date().getFullYear()} Saahil Mehta
        </p>
        <p className="text-xs text-slate-700">
          Built with React & Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
