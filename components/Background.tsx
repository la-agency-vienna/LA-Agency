import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#222222] to-[#0f0f0f]" />
      
      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #ffb36608 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, #ffb36608 0%, transparent 50%),
            linear-gradient(to right, transparent 48%, #ffffff02 50%, transparent 52%)
          `,
          backgroundSize: '400px 400px, 400px 400px, 100px 100px'
        }}
      />
      
      {/* Ambient Light Effect */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at top center, rgba(255, 179, 102, 0.1) 0%, transparent 60%)',
        }}
      />
      
      {/* Bottom Vignette */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse at bottom center, transparent 0%, rgba(26, 26, 26, 0.8) 100%)',
        }}
      />
    </div>
  );
}; 