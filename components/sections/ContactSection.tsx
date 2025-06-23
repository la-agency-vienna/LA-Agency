'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from '../ContactForm';
import { Mail, Phone, MapPin, Instagram, Linkedin, Globe } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative section-padding">

      
      <div className="container-max relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: 'clamp(3rem, 8vw, 8rem)' }}
        >
          <h2 className="heading-section">Let's connect!</h2>
          <p className="text-luxury mx-auto leading-relaxed container-narrow" 
             style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', paddingLeft: 'clamp(1rem, 3vw, 2rem)', paddingRight: 'clamp(1rem, 3vw, 2rem)' }}>
            Bereit für dein nächstes Projekt? Kontaktiere uns für ein unverbindliches Erstgespräch, wir freuen uns auf deine Vision!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 responsive-gap-lg">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            viewport={{ once: true }}
            className="responsive-spacing-lg text-center lg:text-left"
          >
            <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
              <h3 className="heading-card" style={{ marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>L.A. Agency Vienna</h3>
              <p className="text-luxury" 
                 style={{ marginBottom: 'clamp(1.5rem, 3vw, 2rem)', fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
                Deine Agentur für Marketing, PR, Events & mehr in Wien
              </p>
              
              <div className="responsive-spacing-md">
                <div className="flex flex-col sm:flex-row items-center responsive-gap-sm group">
                  <div className="border border-[var(--brand-accent-primary)]/30 group-hover:border-[var(--brand-accent-primary)] flex items-center justify-center luxury-transition"
                       style={{ width: 'clamp(2.5rem, 5vw, 3rem)', height: 'clamp(2.5rem, 5vw, 3rem)' }}>
                    <Mail className="text-[var(--brand-accent-primary)]" 
                          style={{ width: 'clamp(1rem, 2vw, 1.25rem)', height: 'clamp(1rem, 2vw, 1.25rem)' }} />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-subtle" style={{ marginBottom: 'clamp(0.25rem, 0.5vw, 0.5rem)', fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}>E-Mail</p>
                    <p className="text-[var(--brand-text-primary)] font-light tracking-wide" 
                       style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>hello@la-agency-vienna.com</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center responsive-gap-sm group">
                  <div className="border border-[var(--brand-accent-primary)]/30 group-hover:border-[var(--brand-accent-primary)] flex items-center justify-center luxury-transition"
                       style={{ width: 'clamp(2.5rem, 5vw, 3rem)', height: 'clamp(2.5rem, 5vw, 3rem)' }}>
                    <Phone className="text-[var(--brand-accent-primary)]" 
                           style={{ width: 'clamp(1rem, 2vw, 1.25rem)', height: 'clamp(1rem, 2vw, 1.25rem)' }} />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-subtle" style={{ marginBottom: 'clamp(0.25rem, 0.5vw, 0.5rem)', fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}>Telefon</p>
                    <p className="text-[var(--brand-text-primary)] font-light tracking-wide" 
                       style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>+43 664 3782030</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center responsive-gap-sm group">
                  <div className="border border-[var(--brand-accent-primary)]/30 group-hover:border-[var(--brand-accent-primary)] flex items-center justify-center luxury-transition"
                       style={{ width: 'clamp(2.5rem, 5vw, 3rem)', height: 'clamp(2.5rem, 5vw, 3rem)' }}>
                    <MapPin className="text-[var(--brand-accent-primary)]" 
                            style={{ width: 'clamp(1rem, 2vw, 1.25rem)', height: 'clamp(1rem, 2vw, 1.25rem)' }} />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-subtle" style={{ marginBottom: 'clamp(0.25rem, 0.5vw, 0.5rem)', fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}>Standort</p>
                    <div className="text-[var(--brand-text-primary)] font-light tracking-wide" 
                         style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
                      <p style={{ margin: '0', lineHeight: '1.4' }}>Palais Esterházy</p>
                      <p style={{ margin: '0', lineHeight: '1.4' }}>Wallnerstraße 4 / WA05</p>
                      <p style={{ margin: '0', lineHeight: '1.4' }}>1010 Wien – Austria</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Separation Line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--brand-accent-primary)]/30 to-transparent" 
                 style={{ margin: 'clamp(2rem, 4vw, 3rem) 0' }} />

            {/* Social Media */}
            <div className="text-center lg:text-left" style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
              <h4 className="heading-card" style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>Folge uns auf Social Media</h4>
              <div className="flex justify-center lg:justify-start responsive-gap-sm">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[var(--brand-accent-primary)]/30 hover:border-[var(--brand-accent-primary)] flex items-center justify-center luxury-transition group"
                  aria-label="Instagram"
                  style={{ width: 'clamp(2.5rem, 5vw, 3rem)', height: 'clamp(2.5rem, 5vw, 3rem)' }}
                >
                  <Instagram className="text-[var(--brand-text-muted)] group-hover:text-[var(--brand-accent-primary)]" 
                             style={{ width: 'clamp(1rem, 2vw, 1.25rem)', height: 'clamp(1rem, 2vw, 1.25rem)' }} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[var(--brand-accent-primary)]/30 hover:border-[var(--brand-accent-primary)] flex items-center justify-center luxury-transition group"
                  aria-label="LinkedIn"
                  style={{ width: 'clamp(2.5rem, 5vw, 3rem)', height: 'clamp(2.5rem, 5vw, 3rem)' }}
                >
                  <Linkedin className="text-[var(--brand-text-muted)] group-hover:text-[var(--brand-accent-primary)]" 
                            style={{ width: 'clamp(1rem, 2vw, 1.25rem)', height: 'clamp(1rem, 2vw, 1.25rem)' }} />
                </a>
              </div>
            </div>

            {/* Separation Line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--brand-accent-primary)]/30 to-transparent" 
                 style={{ margin: 'clamp(2rem, 4vw, 3rem) 0' }} />

            {/* Business Hours */}
            <div className="text-center lg:text-left">
              <h4 className="heading-card" style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>Verfügbarkeit</h4>
              <div className="text-luxury responsive-spacing-sm">
                <div className="flex justify-between border-b border-[var(--brand-accent-primary)]/10" 
                     style={{ paddingBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
                  <span className="text-subtle" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}>Montag - Freitag</span>
                  <span className="font-light" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between border-b border-[var(--brand-accent-primary)]/10" 
                     style={{ paddingBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
                  <span className="text-subtle" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}>Samstag</span>
                  <span className="font-light" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}>10:00 - 16:00</span>
                </div>
                <div className="flex justify-between border-b border-[var(--brand-accent-primary)]/10" 
                     style={{ paddingBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
                  <span className="text-subtle" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}>Sonntag</span>
                  <span className="font-light" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}>Nach Vereinbarung</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            id="contact-form"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 