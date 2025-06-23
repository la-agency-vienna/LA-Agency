'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="heading-main mb-6"
            >
              L.A. Agency
              <br />
              <span className="text-white">Vienna</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl font-light text-[#ffb366] mb-6"
            >
              Creating Moments.
              <br />
              Building Brands.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-white/80 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Wir sind Ihre exklusive Agentur für Marketing, PR und Eventmanagement in Wien. 
              Mit kreativen Lösungen und strategischem Denken verwandeln wir Ihre Vision in unvergessliche Erlebnisse.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="animate-float"
              >
                Jetzt Kontakt aufnehmen
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('services')}
              >
                Unsere Services
              </Button>
            </motion.div>
          </motion.div>

          {/* Video Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-video rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 relative">
              {/* Placeholder for video - you can replace this with actual video */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#ffb366] to-[#ff9933] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-white/60 text-sm">Loft Walkthrough Video</p>
                  <p className="text-white/40 text-xs mt-1">Coming Soon</p>
                </div>
              </div>
              
              {/* Uncomment and replace with actual video path when available */}
              {/* <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/loft-walkthrough.mp4" type="video/mp4" />
              </video> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('services')}
          className="flex flex-col items-center text-white/60 hover:text-[#ffb366] transition-colors duration-300"
        >
          <span className="text-sm mb-2">Scroll</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}; 