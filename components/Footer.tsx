'use client';

import React from 'react';
import { Instagram, Linkedin, Globe, Heart } from 'lucide-react';
import Image from 'next/image';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-padding border-t border-[var(--brand-accent-primary)]/20 bg-[var(--brand-bg-secondary)]">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center text-center lg:text-left responsive-gap-lg">
          {/* Luxury Logo & Tagline */}
          <div>
            <div className="flex items-center justify-center lg:justify-start responsive-gap-sm" 
                 style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
              <div className="relative" style={{ width: 'clamp(1.5rem, 3vw, 2rem)', height: 'clamp(1.5rem, 3vw, 2rem)' }}>
                <Image
                  src="/images/logo/logo.png"
                  alt="L.A. Agency Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-light text-[var(--brand-text-primary)] tracking-wide" 
                    style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}>L.A. AGENCY</h3>
                <p className="text-[var(--brand-text-muted)] tracking-widest uppercase" 
                   style={{ fontSize: 'clamp(0.625rem, 1vw, 0.75rem)', marginTop: '-0.125rem' }}>Vienna</p>
              </div>
            </div>
          </div>

          {/* Empty div for spacing */}
          <div />

          {/* Refined Social Media */}
          <div className="text-center lg:text-right">
            <div className="flex justify-center lg:justify-end responsive-gap-md" 
                 style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[var(--brand-accent-primary)]/30 hover:border-[var(--brand-accent-primary)] flex items-center justify-center luxury-transition group"
                aria-label="Instagram"
                style={{ width: 'clamp(2rem, 4vw, 2.5rem)', height: 'clamp(2rem, 4vw, 2.5rem)' }}
              >
                <Instagram className="text-[var(--brand-text-muted)] group-hover:text-[var(--brand-accent-primary)]" 
                           style={{ width: 'clamp(1rem, 2vw, 1.125rem)', height: 'clamp(1rem, 2vw, 1.125rem)' }} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[var(--brand-accent-primary)]/30 hover:border-[var(--brand-accent-primary)] flex items-center justify-center luxury-transition group"
                aria-label="LinkedIn"
                style={{ width: 'clamp(2rem, 4vw, 2.5rem)', height: 'clamp(2rem, 4vw, 2.5rem)' }}
              >
                <Linkedin className="text-[var(--brand-text-muted)] group-hover:text-[var(--brand-accent-primary)]" 
                          style={{ width: 'clamp(1rem, 2vw, 1.125rem)', height: 'clamp(1rem, 2vw, 1.125rem)' }} />
              </a>
              <a
                href="#"
                className="border border-[var(--brand-accent-primary)]/30 hover:border-[var(--brand-accent-primary)] flex items-center justify-center luxury-transition group"
                aria-label="Website"
                style={{ width: 'clamp(2rem, 4vw, 2.5rem)', height: 'clamp(2rem, 4vw, 2.5rem)' }}
              >
                <Globe className="text-[var(--brand-text-muted)] group-hover:text-[var(--brand-accent-primary)]" 
                       style={{ width: 'clamp(1rem, 2vw, 1.125rem)', height: 'clamp(1rem, 2vw, 1.125rem)' }} />
              </a>
            </div>
          </div>
        </div>

        {/* Elegant Divider */}
        <div className="luxury-divider" style={{ margin: 'clamp(3rem, 6vw, 4rem) 0' }} />

        {/* Refined Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left responsive-gap-lg">
          <div className="text-[var(--brand-text-muted)] font-light" 
               style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}>
            <p>&copy; {currentYear} L.A. Agency Vienna. Alle Rechte vorbehalten.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end responsive-gap-md" 
               style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}>
            <div className="flex flex-col sm:flex-row items-center responsive-gap-sm">
              <a href="/imprint" className="text-[var(--brand-text-muted)] hover:text-[var(--brand-accent-primary)] luxury-transition font-light tracking-wide">
                Impressum
              </a>
              <a href="/privacy" className="text-[var(--brand-text-muted)] hover:text-[var(--brand-accent-primary)] luxury-transition font-light tracking-wide">
                Datenschutz
              </a>
              <a href="/terms" className="text-[var(--brand-text-muted)] hover:text-[var(--brand-accent-primary)] luxury-transition font-light tracking-wide">
                AGB
              </a>
            </div>
            <div className="flex items-center text-[var(--brand-text-muted)] font-light">
              <span style={{ marginRight: 'clamp(0.25rem, 0.5vw, 0.5rem)' }}>Made with</span>
              <Heart className="text-[var(--brand-accent-primary)] fill-current" 
                     style={{ width: 'clamp(0.875rem, 1.5vw, 1rem)', height: 'clamp(0.875rem, 1.5vw, 1rem)' }} />
              <span style={{ marginLeft: 'clamp(0.25rem, 0.5vw, 0.5rem)' }}>by Raw Fiction e.U.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 