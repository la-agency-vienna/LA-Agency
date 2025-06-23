'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMouse } from '../MouseContext';

export const HeroSection: React.FC = () => {
  const { mousePosition } = useMouse();
  const titleRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
      }
    };
    
    checkMobile();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  // Function to split text into individual characters
  const splitTextIntoChars = (text: string) => {
    return text.split('').map((char, index) => ({
      char: char === ' ' ? '\u00A0' : char, // Non-breaking space
      index
    }));
  };

  return (
    <section className="relative" style={{ 
      height: '100vh',
      marginTop: '5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="container-max relative z-30 text-center" style={{ paddingLeft: 'clamp(1.5rem, 5vw, 3rem)', paddingRight: 'clamp(1.5rem, 5vw, 3rem)' }}>
        
        {/* Main Headline - Desktop: Wave animations, Mobile: Simple */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          style={{ marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}
          className="relative"
        >
          <h1 className="heading-hero">
            {/* L.A. AGENCY - Desktop: Wave animation, Mobile: Simple */}
            <div className="wave-text-container">
              {isMobile ? (
                // Mobile: Simple text animation
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  L.A. AGENCY
                </motion.div>
              ) : (
                // Desktop: Complex wave animation
                splitTextIntoChars("L.A. AGENCY").map(({ char, index }) => (
                  <motion.span
                    key={`la-${index}`}
                    className="wave-char inline-block"
                    data-char={char}
                    animate={{
                      y: [0, -15, 0],
                      rotateX: [0, 10, 0],
                      rotateY: [0, 5, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 3.5,
                      delay: index * 0.08,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 0
                    }}
                    style={{
                      transformOrigin: 'center bottom',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {char}
                  </motion.span>
                ))
              )}
            </div>
            
            {/* VIENNA - Desktop: Wave animation, Mobile: Simple */}
            <div className="wave-text-container block text-accent mt-6">
              {isMobile ? (
                // Mobile: Simple text animation
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  VIENNA
                </motion.div>
              ) : (
                // Desktop: Complex wave animation
                splitTextIntoChars("VIENNA").map(({ char, index }) => (
                  <motion.span
                    key={`vienna-${index}`}
                    className="wave-char inline-block"
                    data-char={char}
                    animate={{
                      y: [0, -12, 0],
                      rotateX: [0, -8, 0],
                      rotateY: [0, -3, 0],
                      scale: [1, 1.03, 1]
                    }}
                    transition={{
                      duration: 3.2,
                      delay: 0.3 + index * 0.12,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 0
                    }}
                    style={{
                      transformOrigin: 'center bottom',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {char}
                  </motion.span>
                ))
              )}
            </div>
          </h1>
        </motion.div>

        {/* Enhanced Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ marginBottom: 'clamp(2rem, 4vw, 4rem)' }}
          className="text-center"
        >
          <h2 className="font-light text-luxury tracking-tight leading-[1.4] text-center" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', paddingTop: 'clamp(0.5rem, 2vw, 1.5rem)', paddingBottom: 'clamp(0.5rem, 2vw, 1.5rem)' }}>
            Deine Full-Service-Agentur für Marketing, PR & Events
          </h2>
        </motion.div>
      </div>
    </section>
  );
}; 