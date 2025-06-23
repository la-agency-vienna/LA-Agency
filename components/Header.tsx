'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    const handleClickOutside = () => {
      setIsMobileMenuOpen(false);
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <>
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

            {/* Desktop Navigation */}
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
            <button 
              className="md:hidden text-white/80 hover:text-[#ffb366] transition-colors p-2"
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-xl" />
          <div className="fixed top-20 left-0 right-0 bg-[#1a1a1a]/95 backdrop-blur-xl border-b border-white/10">
            <nav className="container-max section-padding py-8">
              <div className="flex flex-col space-y-6">
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-left text-lg text-white/80 hover:text-[#ffb366] transition-colors duration-200 py-2"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('locations')}
                  className="text-left text-lg text-white/80 hover:text-[#ffb366] transition-colors duration-200 py-2"
                >
                  Locations
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-left text-lg text-white/80 hover:text-[#ffb366] transition-colors duration-200 py-2"
                >
                  Projects
                </button>
                <div className="pt-4">
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full"
                    size="lg"
                  >
                    Kontakt aufnehmen
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}; 