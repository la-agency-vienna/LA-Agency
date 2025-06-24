'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const ScrollTextSection: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  
  // Ensure client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Text lines for staggered animation
  const textLines = [
    "Willkommen bei der L.A. Agency Vienna, deiner kreativen",
    "und strategischen Partnerin für Marketing, Public Relations,",
    "Eventmanagement, Product Relaunches, Projektmanagement",
    "und Content Produktion.",
    "",
    "Wir bringen Marken zum Strahlen, von Wien aus,",
    "über Österreich und darüber hinaus.",
    "",
    "Ob Markenaufbau, Medienpräsenz oder Events mit Wow-Effekt,",
    "wir entwickeln maßgeschneiderte Konzepte mit echtem Impact."
  ];

  const scrollToSection = (sectionId: string) => {
    if (!isClient) return; // Prevent scroll during SSR
    
    if (typeof document !== 'undefined') {
      // eslint-disable-next-line no-restricted-globals
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      className="relative overflow-hidden" 
      style={{ 
        paddingTop: 'clamp(2rem, 3vw, 3rem)', 
        paddingBottom: 'clamp(4rem, 6vw, 5rem)'
      }}
    >
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/z13/12.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25,
          filter: 'blur(1px)',
          transform: 'scale(1.1)'
        }}
      />
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to bottom, var(--brand-bg-primary) 0%, transparent 20%, transparent 80%, var(--brand-bg-primary) 100%)'
        }}
      />
      
      <div className="container-narrow relative z-20 w-full" style={{ 
        paddingLeft: 'clamp(1.5rem, 5vw, 3rem)', 
        paddingRight: 'clamp(1.5rem, 5vw, 3rem)' 
      }}>
        {/* Text content - Simple fade-in animations for all devices */}
        <div className="relative">
          <div className="py-16 space-y-6 text-center">
            {textLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: line === "" ? 0 : 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${line === "" ? "h-4" : ""} text-center`}
              >
                {line !== "" && (
                  <p className="text-luxury leading-[1.8] font-light tracking-wide" 
                     style={{ 
                       fontSize: 'clamp(1.125rem, 2.5vw, 1.75rem)', 
                       paddingLeft: 'clamp(1rem, 2vw, 1rem)', 
                       paddingRight: 'clamp(1rem, 2vw, 1rem)' 
                     }}>
                    {line}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Button Section */}
      <div className="relative z-20 w-full" style={{ 
        paddingTop: 'clamp(4rem, 8vw, 6rem)', 
        paddingBottom: 'clamp(2rem, 4vw, 3rem)' 
      }}>
        <div className="container-max mx-auto text-center" style={{ 
          paddingLeft: 'clamp(1.5rem, 5vw, 3rem)', 
          paddingRight: 'clamp(1.5rem, 5vw, 3rem)' 
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <button
              onClick={() => scrollToSection('contact-form')}
              className="btn-luxury-filled hover-lift"
              style={{ 
                fontSize: 'clamp(0.875rem, 2vw, 1rem)', 
                padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 3rem)',
                minHeight: 'clamp(2.5rem, 5vw, 3rem)'
              }}
            >
              Erstgespräch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 