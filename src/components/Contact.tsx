
import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const links = [
    {
      icon: Mail,
      label: 'snm3332@utexas.edu',
      href: 'mailto:snm3332@utexas.edu',
      external: false,
    },
    {
      icon: Phone,
      label: '972-469-3673',
      href: 'tel:972-469-3673',
      external: false,
    },
    {
      icon: Github,
      label: 'github.com/SaahilM06',
      href: 'https://github.com/SaahilM06',
      external: true,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/saahil-mehta-5431a525b/',
      external: true,
    },
    {
      icon: MapPin,
      label: 'Austin, TX',
      href: undefined,
      external: false,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-blue-950/10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-medium text-blue-400/60 uppercase tracking-wider mb-4">
          Contact
        </h2>
        <p className="text-lg text-slate-200 mb-10">
          Interested in working together? Let's connect.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {links.map((link, index) => {
            const content = (
              <div className="flex items-center gap-3 p-4 bg-slate-900/40 border border-blue-900/20 rounded-lg hover:border-blue-500/30 transition-all duration-200 group">
                <link.icon size={16} className="text-blue-400/40 group-hover:text-blue-400 transition-colors shrink-0" />
                <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors truncate">
                  {link.label}
                </span>
                {link.external && (
                  <ArrowUpRight size={12} className="text-slate-600 group-hover:text-blue-400 ml-auto shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                )}
              </div>
            );

            if (link.href) {
              return (
                <a
                  key={index}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                >
                  {content}
                </a>
              );
            }

            return <div key={index}>{content}</div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
