'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        // eslint-disable-next-line no-restricted-globals
        setIsScrolled(window.scrollY > 20);
      }
    };

    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-restricted-globals
      window.addEventListener('scroll', handleScroll);
      // eslint-disable-next-line no-restricted-globals
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    const handleClickOutside = () => {
      setIsMobileMenuOpen(false);
    };

    if (isMobileMenuOpen && typeof document !== 'undefined') {
      // eslint-disable-next-line no-restricted-globals
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      if (typeof document !== 'undefined') {
        // eslint-disable-next-line no-restricted-globals
        document.removeEventListener('click', handleClickOutside);
      }
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    if (typeof document !== 'undefined') {
      // eslint-disable-next-line no-restricted-globals
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const handleNavClick = (sectionId: string) => {
    const isLegalPage = ['/imprint', '/privacy', '/terms'].includes(pathname);
    if (isLegalPage) {
      router.push(`/#${sectionId}`);
    } else {
      scrollToSection(sectionId);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 luxury-transition border-b ${
          isScrolled 
            ? 'bg-[var(--brand-white)]/95 backdrop-blur-md border-[var(--brand-accent-primary)]/20 shadow-lg' 
            : 'bg-[var(--brand-white)]/90 backdrop-blur-sm border-[var(--brand-accent-primary)]/10'
        }`}
      >
        <div className="container-max mx-auto" style={{ padding: 'clamp(1rem, 3vw, 2rem)' }}>
          <div className="flex items-center justify-between" style={{ height: 'clamp(4rem, 5vw, 5rem)' }}>
            {/* Luxury Logo */}
            <Link href="/" passHref>
              <div className="flex items-center responsive-gap-sm cursor-pointer">
                <div className="relative" style={{ width: 'clamp(1.5rem, 3vw, 2rem)', height: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  <Image
                    src="/images/logo/logo.png"
                    alt="L.A. Agency Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h1 className="font-light text-[var(--brand-text-primary)] tracking-wide" 
                      style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}>L.A. AGENCY</h1>
                  <p className="text-[var(--brand-text-muted)] tracking-widest uppercase" 
                     style={{ fontSize: 'clamp(0.625rem, 1vw, 0.75rem)', marginTop: '-0.125rem' }}>Vienna</p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center responsive-gap-lg">
              <button
                onClick={() => handleNavClick('services')}
                className="btn-luxury-minimal" 
                style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick('locations')}
                className="btn-luxury-minimal"
                style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}
              >
                Locations
              </button>
              <button
                onClick={() => handleNavClick('projects')}
                className="btn-luxury-minimal"
                style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}
              >
                Projekte
              </button>
              <Button 
                onClick={() => handleNavClick('contact-form')}
                size="sm"
                style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)', marginLeft: 'clamp(1rem, 2vw, 2rem)' }}
              >
                Kontakt
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-[var(--brand-text-primary)] hover:text-[var(--brand-accent-primary)] luxury-transition-fast"
              style={{ padding: 'clamp(0.5rem, 1vw, 0.75rem)' }}
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X style={{ width: 'clamp(1.25rem, 2.5vw, 1.5rem)', height: 'clamp(1.25rem, 2.5vw, 1.5rem)' }} />
              ) : (
                <Menu style={{ width: 'clamp(1.25rem, 2.5vw, 1.5rem)', height: 'clamp(1.25rem, 2.5vw, 1.5rem)' }} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-[var(--brand-white)]/80 backdrop-blur-md" />
          <div className="fixed left-0 right-0 bg-[var(--brand-white)] border-b border-[var(--brand-accent-primary)]/20 shadow-lg" 
               style={{ 
                 top: 'clamp(4rem, 5vw, 5rem)',
                 minHeight: '60vh',
                 zIndex: 41
               }}>
            <nav className="container-max mx-auto" 
                 style={{ padding: 'clamp(2rem, 4vw, 3rem)' }}>
              <div className="flex flex-col text-center responsive-spacing-md">
                <button
                  onClick={() => handleNavClick('services')}
                  className="text-[var(--brand-text-primary)] hover:text-[var(--brand-accent-primary)] luxury-transition tracking-wide font-light"
                  style={{ 
                    fontSize: 'clamp(1.125rem, 3vw, 1.25rem)', 
                    padding: 'clamp(0.75rem, 2vw, 1rem)',
                    display: 'block',
                    width: '100%'
                  }}
                >
                  SERVICES
                </button>
                <button
                  onClick={() => handleNavClick('locations')}
                  className="text-[var(--brand-text-primary)] hover:text-[var(--brand-accent-primary)] luxury-transition tracking-wide font-light"
                  style={{ 
                    fontSize: 'clamp(1.125rem, 3vw, 1.25rem)', 
                    padding: 'clamp(0.75rem, 2vw, 1rem)',
                    display: 'block',
                    width: '100%'
                  }}
                >
                  LOCATIONS
                </button>
                <button
                  onClick={() => handleNavClick('projects')}
                  className="text-[var(--brand-text-primary)] hover:text-[var(--brand-accent-primary)] luxury-transition tracking-wide font-light"
                  style={{ 
                    fontSize: 'clamp(1.125rem, 3vw, 1.25rem)', 
                    padding: 'clamp(0.75rem, 2vw, 1rem)',
                    display: 'block',
                    width: '100%'
                  }}
                >
                  PROJEKTE
                </button>
                <div style={{ paddingTop: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  <Button 
                    onClick={() => handleNavClick('contact-form')}
                    className="w-full"
                    size="lg"
                    style={{ 
                      fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', 
                      padding: 'clamp(1rem, 3vw, 1.25rem) clamp(1.5rem, 4vw, 2rem)',
                      minHeight: 'clamp(3rem, 8vw, 3.5rem)'
                    }}
                  >
                    Kontakt aufnehmen
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}; 