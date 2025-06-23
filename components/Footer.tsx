'use client';

import React from 'react';
import { Instagram, Linkedin, Globe, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-padding border-t border-white/10">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#ffb366] to-[#ff9933] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">LA</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">L.A. Agency</h3>
                <p className="text-xs text-white/60 -mt-1">Vienna</p>
              </div>
            </div>
            <p className="text-sm text-[#ffb366] font-medium">
              Creating Moments. Building Brands.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <button
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white/70 hover:text-[#ffb366] transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('locations');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white/70 hover:text-[#ffb366] transition-colors duration-200"
              >
                Locations
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white/70 hover:text-[#ffb366] transition-colors duration-200"
              >
                Projekte
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white/70 hover:text-[#ffb366] transition-colors duration-200"
              >
                Kontakt
              </button>
            </nav>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end space-x-4 mb-3">
              <a
                href="#"
                className="w-8 h-8 bg-white/5 hover:bg-[#ffb366]/20 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white/60 group-hover:text-[#ffb366]" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/5 hover:bg-[#ffb366]/20 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-white/60 group-hover:text-[#ffb366]" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/5 hover:bg-[#ffb366]/20 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                aria-label="Website"
              >
                <Globe className="w-4 h-4 text-white/60 group-hover:text-[#ffb366]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-white/50">
              <p>&copy; {currentYear} L.A. Agency Vienna. Alle Rechte vorbehalten.</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="/imprint" className="text-white/50 hover:text-[#ffb366] transition-colors">
                Impressum
              </a>
              <a href="/privacy" className="text-white/50 hover:text-[#ffb366] transition-colors">
                Datenschutz
              </a>
              <a href="/terms" className="text-white/50 hover:text-[#ffb366] transition-colors">
                AGB
              </a>
              <div className="flex items-center text-white/50">
                <span className="mr-1">Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span className="ml-1">in Vienna</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 