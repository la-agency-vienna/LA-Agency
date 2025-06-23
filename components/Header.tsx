'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#ffb366] to-[#ff9933] rounded-xl flex items-center justify-center">
              <span className="text-black font-bold text-lg">LA</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">L.A. Agency</h1>
              <p className="text-xs text-white/60 -mt-1">Vienna</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-white/80 hover:text-[#ffb366] transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('locations')}
              className="text-white/80 hover:text-[#ffb366] transition-colors duration-200"
            >
              Locations
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-white/80 hover:text-[#ffb366] transition-colors duration-200"
            >
              Projects
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              size="sm"
              className="ml-4"
            >
              Kontakt
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white/80 hover:text-[#ffb366] transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}; 