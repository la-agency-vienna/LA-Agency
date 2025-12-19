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
  opacity = 1,
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

  // Handle video load and Safari-specific autoplay fix
  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      const video = videoRef.current;

      // Safari fix: explicitly set muted property via JavaScript
      video.muted = true;
      video.defaultMuted = true;

      const handleLoadedData = () => {
        setIsLoaded(true);
        // Safari: try to play immediately when data is loaded
        video.play().catch(() => { });
      };

      const handleLoadedMetadata = () => {
        // Safari: another attempt to play
        video.muted = true;
        video.play().catch(() => { });
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('canplay', () => video.play().catch(() => { }));

      // Preload video
      video.preload = 'auto';
      video.load();

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, [shouldLoad]);

  // Handle video play when loaded and in view
  useEffect(() => {
    if (isLoaded && isInView && videoRef.current) {
      const video = videoRef.current;
      // Safari: ensure muted before play
      video.muted = true;
      video.currentTime = 0;
      video.play().catch(() => { });
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
          // @ts-ignore - webkit-playsinline for older Safari
          webkit-playsinline="true"
          disablePictureInPicture
          preload="auto"
          onCanPlayThrough={() => {
            if (videoRef.current) {
              videoRef.current.play().catch(() => { });
            }
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-[var(--brand-accent-primary)]/10 to-[var(--brand-accent-secondary)]/10"
            style={{ opacity: opacity }}
          />
        </video>
      )}

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