'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface MouseContextType {
  isPressed: boolean;
  mousePosition: { x: number; y: number };
  isOverText: boolean;
  setIsOverText: (over: boolean) => void;
}

const MouseContext = createContext<MouseContextType | undefined>(undefined);

export const MouseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOverText, setIsOverText] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-restricted-globals
      window.addEventListener('mousemove', handleMouseMove);
      // eslint-disable-next-line no-restricted-globals
      window.addEventListener('mousedown', handleMouseDown);
      // eslint-disable-next-line no-restricted-globals
      window.addEventListener('mouseup', handleMouseUp);

      return () => {
        // eslint-disable-next-line no-restricted-globals
        window.removeEventListener('mousemove', handleMouseMove);
        // eslint-disable-next-line no-restricted-globals
        window.removeEventListener('mousedown', handleMouseDown);
        // eslint-disable-next-line no-restricted-globals
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, []);

  return (
    <MouseContext.Provider value={{ 
      isPressed, 
      mousePosition, 
      isOverText, 
      setIsOverText 
    }}>
      {children}
    </MouseContext.Provider>
  );
};

export const useMouse = () => {
  const context = useContext(MouseContext);
  if (context === undefined) {
    throw new Error('useMouse must be used within a MouseProvider');
  }
  return context;
}; 