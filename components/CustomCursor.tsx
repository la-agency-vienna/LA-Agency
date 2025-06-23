'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMouse } from './MouseContext';

export const CustomCursor: React.FC = () => {
  const { mousePosition, isPressed, isOverText } = useMouse();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('mouseenter', handleMouseEnter);
      };
    }
  }, []);

  if (!isVisible) return null;

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