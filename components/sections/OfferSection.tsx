'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: 'Marketing & Markenstrategie',
    description: 'Von Markenpositionierung über Kampagnenentwicklung bis hin zu Social Media, wir machen deine Marke sichtbar und relevant.'
  },
  {
    title: 'Public Relations (PR)',
    description: 'Wir platzieren deine Botschaft gezielt in Medien, stärken deine Reputation und schaffen Vertrauen bei deiner Zielgruppe.'
  },
  {
    title: 'Eventmanagement',
    description: 'Konzeption, Planung und Umsetzung von Events mit Stil,  ob Produktpräsentation, Corporate Event oder Launch Party.'
  },
  {
    title: 'Product Relaunch & Brand Refresh',
    description: 'Neupositionierung von Produkten und Marken inklusive Storytelling, Pressearbeit und Markteinführung.'
  },
  {
    title: 'Projektmanagement',
    description: 'Effiziente Projektsteuerung mit einem Auge fürs Detail,  wir halten Timings und Budgets im Griff.'
  },
  {
    title: 'Content Produktion',
    description: 'Von Video über Foto bis Text, wir produzieren hochwertigen Content für Web, Social Media und Print.'
  }
];

export const OfferSection: React.FC = () => {
  return (
    <>
      <section id="services" className="relative" style={{ 
        paddingLeft: 'clamp(1.5rem, 5vw, 8rem)', 
        paddingRight: 'clamp(1.5rem, 5vw, 8rem)', 
        paddingTop: 'clamp(2rem, 4vw, 4rem)', 
        paddingBottom: 'clamp(2rem, 4vw, 4rem)' 
      }}>
        
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center"
            style={{ marginBottom: 'clamp(3rem, 8vw, 8rem)' }}
          >
            <h2 className="heading-section">Leistungsangebot</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 responsive-gap-lg">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: index * 0.15, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group"
              >
                <Card 
                  className="luxury-card h-full hover-lift metallic-shine"
                  style={{ 
                    '--delay': index === 0 ? '0s' :     // Marketing & Markenstrategie
                               index === 1 ? '0.5s' :   // Public Relations (PR)  
                               index === 2 ? '1s' :     // Eventmanagement
                               index === 3 ? '1.5s' :   // Product Relaunch
                               index === 4 ? '2s' :     // Projektmanagement
                               '2.5s'                    // Content Produktion
                  } as React.CSSProperties}
                >
                  <CardHeader className="pb-8 text-center">
                    <CardTitle className="heading-card text-[var(--brand-text-primary)] group-hover:text-[var(--brand-accent-primary)] luxury-transition text-center">
                      {service.title}
                    </CardTitle>
                    <div className="w-12 h-px bg-[var(--brand-accent-primary)] group-hover:w-16 luxury-transition mx-auto" />
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-luxury leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Centered Button Between Sections */}
      <div className="relative" style={{ 
        paddingTop: 'clamp(2rem, 4vw, 4rem)', 
        paddingBottom: 'clamp(2rem, 4vw, 4rem)' 
      }}>
        
        <div className="container-max relative z-20 text-center" style={{ paddingLeft: 'clamp(1.5rem, 5vw, 3rem)', paddingRight: 'clamp(1.5rem, 5vw, 3rem)' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <button
              onClick={() => {
                if (typeof document !== 'undefined') {
                  // eslint-disable-next-line no-restricted-globals
                  const element = document.getElementById('contact-form');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-luxury-filled hover-lift"
            >
              Erstgespräch
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
}; 