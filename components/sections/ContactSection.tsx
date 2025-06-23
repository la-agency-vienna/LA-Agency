'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from '@/components/ContactForm';
import { Mail, Phone, MapPin, Instagram, Linkedin, Globe } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="heading-section">Let's Connect</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Bereit für Ihr nächstes Projekt? Kontaktieren Sie uns und lassen Sie uns gemeinsam etwas Außergewöhnliches schaffen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Kontakt</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#ffb366]/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#ffb366]" />
                  </div>
                  <div>
                    <p className="text-white font-medium">E-Mail</p>
                    <p className="text-white/70">hello@la-agency.vienna</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#ffb366]/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#ffb366]" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Telefon</p>
                    <p className="text-white/70">+43 1 234 5678</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#ffb366]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#ffb366]" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Standort</p>
                    <p className="text-white/70">Wien, Österreich</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/5 hover:bg-[#ffb366]/20 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                >
                  <Instagram className="w-5 h-5 text-white/60 group-hover:text-[#ffb366]" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/5 hover:bg-[#ffb366]/20 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-white/60 group-hover:text-[#ffb366]" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/5 hover:bg-[#ffb366]/20 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                >
                  <Globe className="w-5 h-5 text-white/60 group-hover:text-[#ffb366]" />
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Geschäftszeiten</h4>
              <div className="space-y-2 text-white/70">
                <div className="flex justify-between">
                  <span>Montag - Freitag</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samstag</span>
                  <span>10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sonntag</span>
                  <span>Nach Vereinbarung</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 