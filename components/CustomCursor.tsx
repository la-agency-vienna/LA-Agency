'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMouse } from './MouseContext';

export const CustomCursor: React.FC = () => {
  const { mousePosition, isPressed, isOverText } = useMouse();
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch device on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
      setIsTouchDevice(hasTouchScreen || hasCoarsePointer);
    }
  }, []);

  useEffect(() => {
    // Skip mouse event listeners on touch devices
    if (isTouchDevice) return;

    const handleMouseMove = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      // eslint-disable-next-line no-restricted-globals
      window.addEventListener('mousemove', handleMouseMove);
      // eslint-disable-next-line no-restricted-globals
      document.addEventListener('mouseleave', handleMouseLeave);
      // eslint-disable-next-line no-restricted-globals
      document.addEventListener('mouseenter', handleMouseEnter);

      return () => {
        // eslint-disable-next-line no-restricted-globals
        window.removeEventListener('mousemove', handleMouseMove);
        // eslint-disable-next-line no-restricted-globals
        document.removeEventListener('mouseleave', handleMouseLeave);
        // eslint-disable-next-line no-restricted-globals
        document.removeEventListener('mouseenter', handleMouseEnter);
      };
    }
  }, [isTouchDevice]);

  // Don't render on touch devices or when not visible
  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]">
      <div
        className="absolute"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Horizontal line */}
        <motion.div
          className="absolute bg-[var(--brand-accent-primary)]"
          animate={{
            width: isPressed ? '50px' : '30px',
            height: isPressed ? '3px' : '2px',
            opacity: isPressed ? 1 : 0.8,
          }}
          transition={{ duration: 0.1, ease: "easeOut" }}
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Vertical line */}
        <motion.div
          className="absolute bg-[var(--brand-accent-primary)]"
          animate={{
            width: isPressed ? '3px' : '2px',
            height: isPressed ? '50px' : '30px',
            opacity: isPressed ? 1 : 0.8,
          }}
          transition={{ duration: 0.1, ease: "easeOut" }}
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
    </div>
  );
}; 