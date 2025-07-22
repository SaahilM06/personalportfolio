
import React from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'saahilm30@gmail.com',
      href: 'mailto:saahilm30@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Austin, Texas',
      href: '#'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: 'Available on request',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[rgb(10,16,29)]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="relative">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl"></div>
              
              {/* Form container */}
              <div className="relative bg-[rgb(15,23,42)]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <form className="space-y-6">
                  {/* Name input */}
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>

                  {/* Email input */}
                  <div className="relative group">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>

                  {/* Message textarea */}
                  <div className="relative group">
                    <textarea
                      placeholder="Your Message"
                      rows={5}
                      className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                    ></textarea>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl py-4 font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/50 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="group bg-[rgb(15,23,42)]/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 flex items-start gap-6 transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon size={24} className="text-blue-400" />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                    <p className="text-slate-300">{info.value}</p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/0 to-cyan-400/10 transform rotate-45 translate-x-8 -translate-y-8"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
