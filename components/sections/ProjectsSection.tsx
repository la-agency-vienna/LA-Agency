'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    id: 1,
    title: 'Luxury Brand Launch',
    client: 'Premium Fashion House',
    description: 'Erfolgreiche Markteinführung einer Luxus-Modemarke mit integrierter Marketing- und PR-Strategie.',
    category: 'Marketing & Branding',
    image: '/images/project-1.jpg'
  },
  {
    id: 2,
    title: 'Corporate Gala Event',
    client: 'Fortune 500 Company',
    description: 'Exklusive Firmenfeier im Palais Esterházy mit 300 VIP-Gästen und internationaler Presse.',
    category: 'Eventmanagement',
    image: '/images/project-2.jpg'
  },
  {
    id: 3,
    title: 'Digital Campaign',
    client: 'Tech Startup',
    description: 'Innovative Social Media Kampagne für Produktlaunch mit viraler Reichweite.',
    category: 'Content Produktion',
    image: '/images/project-3.jpg'
  },
  {
    id: 4,
    title: 'Product Relaunch',
    client: 'Established Brand',
    description: 'Komplette Neupositionierung und Markteinführung eines traditionsreichen Produkts.',
    category: 'Product Relaunch',
    image: '/images/project-4.jpg'
  }
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-transparent via-black/20 to-transparent">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="heading-section">Unsere Projekte</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Entdecken Sie eine Auswahl unserer erfolgreichsten Projekte und lassen Sie sich inspirieren.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group cursor-pointer hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-0">
                  {/* Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-[#ffb366]/20 to-[#ff9933]/20 rounded-t-3xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="relative text-center z-10">
                      <div className="text-4xl font-bold text-[#ffb366]/60 mb-2">
                        {project.id}
                      </div>
                      <p className="text-white/40 text-sm">Projektbild</p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-[#ffb366]/10 text-[#ffb366] text-xs font-medium rounded-full border border-[#ffb366]/20">
                        {project.category}
                      </span>
                      <span className="text-white/50 text-sm">{project.client}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ffb366] transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-white/70 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
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
            Möchten Sie Ihr nächstes Projekt mit uns realisieren?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-[#ffb366] hover:text-[#ff9933] font-semibold transition-colors duration-200 text-lg underline underline-offset-4 hover:underline-offset-8"
          >
            Projekt besprechen →
          </button>
        </motion.div>
      </div>
    </section>
  );
}; 