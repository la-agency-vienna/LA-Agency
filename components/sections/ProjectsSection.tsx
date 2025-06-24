'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Beauty Brand Relaunch',
    category: 'Rebranding',
    description: 'Komplettes Rebranding inkl. PR-Kampagne, Influencer-Kooperation und Launch Event in Wien.',
    image: '/images/projects/brand-relaunch.png',
    link: 'https://google.com'
  },
  {
    id: 2,
    title: 'Tech Start-up Launch',
    category: 'Markteinführung',
    description: 'Markteintrittsstrategie inkl. Medienarbeit, Eventplanung & digitaler Kampagne.',
    image: '/images/projects/tech-startup.png',
    link: 'https://google.com'
  },
  {
    id: 3,
    title: 'Luxury Lifestyle Event',
    category: 'Premium Event',
    description: 'Premium-Event mit über 300 Gästen, inklusive Location-Scouting, Gästelistenmanagement und Pressebetreuung.',
    image: '/images/projects/premium-event.png',
    link: 'https://google.com'
  },
  {
    id: 4,
    title: 'Social Media Kampagne für F&B Brand',
    category: 'Digital Campaign',
    description: 'Content Creation & Influencer-Kollaboration mit über 1 Mio. organischer Reichweite.',
    image: '/images/projects/digital-campaign.png',
    link: 'https://google.com'
  }
];



export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="relative" style={{ 
      paddingLeft: 'clamp(1.5rem, 5vw, 8rem)', 
      paddingRight: 'clamp(1.5rem, 5vw, 8rem)', 
      paddingTop: 'clamp(2rem, 4vw, 4rem)', 
      paddingBottom: 'clamp(4rem, 8vw, 8rem)' 
    }}>
      <div className="container-max relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: 'clamp(3rem, 8vw, 8rem)' }}
        >
          <h2 className="heading-section">KUNDENPROJEKTE</h2>
          <h3 className="heading-card mb-6">Erfolgsstories & Projekte</h3>
          <p className="text-luxury mx-auto leading-relaxed container-narrow" 
             style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', paddingLeft: 'clamp(1rem, 3vw, 2rem)', paddingRight: 'clamp(1rem, 3vw, 2rem)' }}>
            Wir glauben an Ergebnisse, die für sich sprechen. Hier ein Auszug unserer Projekte:
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 container-max mx-auto responsive-gap-lg" 
             style={{ marginBottom: 'clamp(4rem, 8vw, 6rem)' }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="luxury-card hover-lift">
                <div className="aspect-[4/3] mb-6 relative overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-subtle text-[var(--brand-text-secondary)] border border-[var(--brand-text-primary)]/10" 
                          style={{ padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.5rem, 1vw, 0.75rem)', fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}>
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="heading-card text-[var(--brand-text-primary)] group-hover:text-[var(--brand-accent-primary)] luxury-transition">
                    {project.title}
                  </h3>
                  
                  <p className="text-luxury leading-relaxed" 
                     style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
                    {project.description}
                  </p>

                  <div className="pt-4">
                    <Button
                      onClick={() => {
                        if (typeof window !== 'undefined') {
        // eslint-disable-next-line no-restricted-globals
        window.open(project.link, '_blank');
      }
                      }}
                      variant="outline"
                      size="sm"
                      className="text-xs border-[var(--brand-text-muted)] text-[var(--brand-text-muted)] hover:bg-[var(--brand-accent-primary)] hover:border-[var(--brand-accent-primary)] hover:text-white"
                    >
                      Projekt ansehen
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>



        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-luxury" 
             style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
            Bereit für Ihr nächstes außergewöhnliches Event?
          </p>
          <Button
            onClick={() => {
              if (typeof document !== 'undefined') {
                // eslint-disable-next-line no-restricted-globals
                const element = document.getElementById('contact-form');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            size="lg"
            className="btn-luxury"
            style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 3rem)' }}
          >
            Projekt besprechen
          </Button>
        </motion.div>
      </div>
    </section>
  );
}; 