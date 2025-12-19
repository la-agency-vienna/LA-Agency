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
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingBottom: 'clamp(10rem, 20vh, 16rem)'
    }}>
      {/* Solid background to block grid pattern */}
      <div className="absolute inset-0 bg-[var(--brand-bg-primary)] z-[15]" />

      {/* Video Background */}
      <VideoBackground
        videoSrc="/videos/background.mp4"
        opacity={1}
        blur={0}
        className="z-20"
      />

      <div className="container-max mx-auto relative z-30 w-full" style={{ paddingLeft: 'clamp(1rem, 3vw, 2rem)', paddingRight: 'clamp(1rem, 3vw, 2rem)' }}>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          style={{ marginBottom: '0' }}
          className="relative flex flex-col items-start"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '0', display: 'inline-block' }}
          >
            <span style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 0.95, display: 'block', marginTop: '-0.05em', marginBottom: '-0.08em' }} className="text-[var(--brand-text-primary)]">
              L.A. AGENCY
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '0', display: 'inline-block', marginTop: '0.3rem' }}
          >
            <span style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 0.95, display: 'block', marginTop: '-0.05em', marginBottom: '-0.08em' }} className="text-[var(--brand-accent-primary)]">
              VIENNA
            </span>
          </motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '0 0.15rem', display: 'inline-block', marginTop: '0.3rem' }}
        >
          <h2 className="font-light tracking-tight leading-[1.3] text-left text-[var(--brand-black)]" style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}>
            Deine Full-Service-Agentur für Marketing, PR & Events
          </h2>
        </motion.div>
      </div>
    </section>
  );
}; 