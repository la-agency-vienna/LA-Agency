'use client';

import React, { useRef, useEffect, useState } from 'react';

interface VideoBackgroundProps {
  videoSrc: string;
  opacity?: number;
  blur?: number;
  className?: string;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoSrc,
  opacity = 0.25,
  blur = 1,
  className = '',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Delay video loading slightly to ensure page has loaded
          setTimeout(() => setShouldLoad(true), 100);
        }
      },
      {
        rootMargin: '50px', // Start loading when video is 50px from viewport
        threshold: 0.1,
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  // Handle video load
  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        setIsLoaded(true);
      });

      // Preload video metadata only
      videoRef.current.preload = 'metadata';
      videoRef.current.load();
    }
  }, [shouldLoad]);

  // Handle video play when loaded and in view
  useEffect(() => {
    if (isLoaded && isInView && videoRef.current) {
      // Ensure video is ready to play
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Video autoplay was prevented:', error);
        });
      }
    }
  }, [isLoaded, isInView]);

  return (
    <div 
      ref={observerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Video Element - Only render when should load */}
      {shouldLoad && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{
            opacity: isLoaded ? opacity : 0,
            filter: `blur(${blur}px)`,
            transform: 'scale(1.1)', // Slight zoom for edge coverage
            zIndex: 0,
          }}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          preload="none" // Don't preload until needed
        >
          <source src={videoSrc} type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-[var(--brand-accent-primary)]/10 to-[var(--brand-accent-secondary)]/10"
            style={{ opacity: opacity }}
          />
        </video>
      )}
      
      {/* Gradient Overlay for Faded Borders - Similar to ScrollTextSection */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, var(--brand-bg-primary) 0%, transparent 20%, transparent 80%, var(--brand-bg-primary) 100%)',
          zIndex: 10,
        }}
      />
      
      {/* Additional side fade effect for more luxury look */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, var(--brand-bg-primary) 0%, transparent 15%, transparent 85%, var(--brand-bg-primary) 100%)',
          zIndex: 10,
        }}
      />
      
      {/* Loading placeholder - Shows while video is loading */}
      {!isLoaded && shouldLoad && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[var(--brand-accent-primary)]/5 to-[var(--brand-accent-secondary)]/5 animate-pulse"
          style={{ zIndex: 5 }}
        />
      )}
    </div>
  );
}; 