'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMouse } from '../MouseContext';
import { VideoBackground } from '../VideoBackground';

export const HeroSection: React.FC = () => {
  const { mousePosition } = useMouse();
  const titleRef = useRef(null);

  return (
    <section className="relative overflow-hidden" style={{ 
      height: '100vh',
      marginTop: '5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Video Background */}
      <VideoBackground 
        videoSrc="/videos/background.mp4" 
        opacity={0.3}
        blur={1.5}
        className="z-0"
      />
      
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
            {/* L.A. AGENCY - Static text */}
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                L.A. AGENCY
              </motion.div>
            </div>
            
            {/* VIENNA - Static text */}
            <div className="block text-accent mt-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                VIENNA
              </motion.div>
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