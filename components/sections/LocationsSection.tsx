'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { LocationModal } from '@/components/LocationModal';
import { 
  Dialog, 
  DialogTrigger 
} from '@/components/ui/dialog';

const locations = [
  {
    id: 'palais-esterhazy',
    title: 'Palais Esterházy',
    description: 'Historisches Flair im Herzen Wiens für elegante Events & Pressetermine. Jahrhundertealte Eleganz trifft auf moderne Raffinesse für Veranstaltungen von höchster Distinktion.',
    imageUrl: '/images/palais-esterhazy.jpg',
    websiteUrl: 'https://palais-esterhazy.net',
    features: ['Historisches Flair', 'Zentrale Wien Lage', 'Elegante Events', 'Pressetermine']
  },
  {
    id: 'loft-z13',
    title: 'Loft Z13',
    description: 'Urbaner Industrial-Chic mit Dachterrasse für moderne Markenerlebnisse. Ein außergewöhnlicher Veranstaltungsort mit minimalistischer Eleganz und zeitloser Ästhetik.',
    imageUrl: '/images/loft-z13.jpg',
    websiteUrl: 'https://loftz13.com',
    features: ['Industrial-Chic', 'Dachterrasse', 'Moderne Markenerlebnisse', 'Urbaner Style']
  }
];

export const LocationsSection: React.FC = () => {
  return (
    <section id="locations" className="relative" style={{ 
      paddingLeft: 'clamp(1.5rem, 5vw, 8rem)', 
      paddingRight: 'clamp(1.5rem, 5vw, 8rem)', 
      paddingTop: 'clamp(2rem, 4vw, 4rem)', 
      paddingBottom: 'clamp(4rem, 8vw, 8rem)' 
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
          <h2 className="heading-section">Eventmanagement mit Stil</h2>
          <p className="text-luxury mx-auto leading-relaxed container-narrow" 
             style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', paddingLeft: 'clamp(1rem, 3vw, 2rem)', paddingRight: 'clamp(1rem, 3vw, 2rem)' }}>
            Ob Produktlaunch, Gala oder Networking-Event, wir bieten Full-Service-Planung an außergewöhnlichen Orten.
          </p>
          <h3 className="heading-card" style={{ marginTop: 'clamp(1rem, 2vw, 1.5rem)', marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
            Exklusiv bei uns im Portfolio:
          </h3>
          <p className="text-luxury mx-auto leading-relaxed container-narrow" 
             style={{ fontSize: 'clamp(0.875rem, 2vw, 1.125rem)', marginTop: 'clamp(1rem, 2vw, 1.5rem)', paddingLeft: 'clamp(1rem, 3vw, 2rem)', paddingRight: 'clamp(1rem, 3vw, 2rem)' }}>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 container-max mx-auto responsive-gap-lg max-w-none lg:max-w-5xl xl:max-w-6xl">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: index * 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <div className="luxury-card hover-lift metallic-shine-hover h-full flex flex-col">
                <div className="aspect-[4/3] bg-gradient-to-br from-[var(--brand-accent-primary)]/10 to-[var(--brand-accent-secondary)]/10 mb-6 lg:mb-6 flex items-center justify-center relative overflow-hidden"
                     style={{
                       backgroundImage: location.id === 'loft-z13' 
                         ? `url('/images/z13/2.jpg')` 
                         : location.id === 'palais-esterhazy' 
                         ? `url('/images/esterhazy/1.jpg')` 
                         : 'none',
                       backgroundSize: 'cover',
                       backgroundPosition: 'center',
                       backgroundRepeat: 'no-repeat'
                     }}>
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                
                <h3 className="heading-card group-hover:text-[var(--brand-accent-primary)] luxury-transition text-center lg:text-left" 
                    style={{ marginBottom: 'clamp(1rem, 3vw, 1.25rem)' }}>
                  {location.title}
                </h3>
                
                <p className="text-luxury leading-relaxed text-center lg:text-left" 
                   style={{ marginBottom: 'clamp(1.5rem, 4vw, 1.75rem)', fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
                  {location.description}
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start responsive-gap-sm" 
                     style={{ marginBottom: 'clamp(1.5rem, 4vw, 1.75rem)' }}>
                  {location.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-subtle border border-[var(--brand-text-primary)]/10 text-[var(--brand-text-muted)] text-center"
                      style={{ 
                        padding: 'clamp(0.25rem, 0.5vw, 0.375rem) clamp(0.375rem, 1vw, 0.5rem)',
                        fontSize: 'clamp(0.625rem, 1vw, 0.75rem)'
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4 flex justify-center lg:justify-start">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="lg" variant="outline" 
                              style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 1.5rem)' }}>
                        {location.title} entdecken
                      </Button>
                    </DialogTrigger>
                    <LocationModal location={location} />
                  </Dialog>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginTop: 'clamp(3rem, 8vw, 8rem)' }}
        >
          <p className="text-luxury" 
             style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
            Suchen Sie nach der perfekten Location für Ihr Event?
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
            Location-Beratung
          </Button>
        </motion.div>
      </div>
    </section>
  );
}; 