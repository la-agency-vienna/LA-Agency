'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: 'Marketing & Branding',
    description: 'Strategische Markenentwicklung und innovative Marketingkampagnen für nachhaltigen Erfolg.'
  },
  {
    title: 'PR & Kommunikation',
    description: 'Professionelle Öffentlichkeitsarbeit und authentische Kommunikationsstrategien.'
  },
  {
    title: 'Eventmanagement',
    description: 'Unvergessliche Events von der Konzeption bis zur perfekten Durchführung.'
  },
  {
    title: 'Product Relaunch',
    description: 'Neupositionierung und erfolgreiche Markteinführung Ihrer Produkte und Services.'
  },
  {
    title: 'Projektmanagement',
    description: 'Effiziente Koordination und professionelle Umsetzung komplexer Projekte.'
  },
  {
    title: 'Content Produktion',
    description: 'Hochwertige Inhalte für alle digitalen und analogen Kommunikationskanäle.'
  }
];

export const OfferSection: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-transparent via-black/20 to-transparent">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="heading-section">Unsere Services</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Wir bieten Ihnen umfassende Lösungen für alle Bereiche des modernen Marketings und Eventmanagements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group cursor-pointer">
                <CardHeader>
                  <CardTitle className="group-hover:scale-105 transition-transform duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6">
            Interessiert an einer Zusammenarbeit?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-[#ffb366] hover:text-[#ff9933] font-semibold transition-colors duration-200 text-lg underline underline-offset-4 hover:underline-offset-8"
          >
            Lassen Sie uns sprechen →
          </button>
        </motion.div>
      </div>
    </section>
  );
}; 