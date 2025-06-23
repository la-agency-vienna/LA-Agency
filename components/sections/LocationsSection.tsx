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
    id: 'loft-z13',
    title: 'Loft Z13',
    description: 'Ein außergewöhnlicher Veranstaltungsort im Herzen Wiens. Das Loft Z13 bietet eine einzigartige Atmosphäre für exklusive Events, Produktpräsentationen und unvergessliche Feiern. Mit moderner Ausstattung und stilvollem Ambiente ist es der perfekte Rahmen für Ihre besonderen Anlässe.',
    imageUrl: '/images/loft-z13.jpg',
    websiteUrl: 'https://loftz13.com',
    features: ['Moderne Ausstattung', 'Zentrale Lage', 'Exklusives Ambiente', 'Flexible Raumgestaltung']
  },
  {
    id: 'palais-esterhazy',
    title: 'Palais Esterházy',
    description: 'Erleben Sie Geschichte hautnah im prächtigen Palais Esterházy. Diese historische Location verbindet klassische Eleganz mit modernem Komfort und bietet den idealen Rahmen für Gala-Events, Geschäftstermine und kulturelle Veranstaltungen höchster Ansprüche.',
    imageUrl: '/images/palais-esterhazy.jpg',
    websiteUrl: 'https://palais-esterhazy.net',
    features: ['Historisches Ambiente', 'Erstklassige Akustik', 'Repräsentative Räume', 'Kulturelles Erbe']
  }
];

export const LocationsSection: React.FC = () => {
  return (
    <section id="locations" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="heading-section">Exklusive Locations</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Entdecken Sie unsere handverlesenen Veranstaltungsorte für unvergessliche Events.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="glass-card p-8 mb-8 group hover:scale-105 transition-transform duration-300">
                <div className="aspect-video bg-gradient-to-br from-[#ffb366]/20 to-[#ff9933]/20 rounded-2xl mb-6 flex items-center justify-center">
                  <div className="text-6xl font-bold text-[#ffb366]/40">
                    {location.title.split(' ')[0].charAt(0)}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{location.title}</h3>
                
                <p className="text-white/70 mb-6 leading-relaxed">
                  {location.description.split('.')[0]}.
                </p>

                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {location.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-[#ffb366]/10 text-[#ffb366] text-sm rounded-full border border-[#ffb366]/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="w-full">
                    {location.title} entdecken
                  </Button>
                </DialogTrigger>
                <LocationModal location={location} />
              </Dialog>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6">
            Suchen Sie nach der perfekten Location für Ihr Event?
          </p>
          <Button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            size="lg"
          >
            Beratung anfragen
          </Button>
        </motion.div>
      </div>
    </section>
  );
}; 