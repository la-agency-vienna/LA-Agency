import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Background } from '@/components/Background';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const LegalPageLayout: React.FC<{ title: string; subtitle?: string; children: React.ReactNode }> = ({ title, subtitle, children }) => (
  <main>
    <Background />
    <div className="min-h-screen bg-transparent py-20 lg:py-24 text-[var(--brand-text-primary)]">
      <div className="container-max section-padding">
        <div className="glass-effect-light p-6 sm:p-8 md:p-12 rounded-lg max-w-4xl mx-auto">
          <div className="mb-12">
            <Link href="/" passHref>
              <Button variant="ghost" className="mb-6 text-sm text-[var(--brand-text-secondary)] hover:text-[var(--brand-accent-primary)] transition-colors duration-300 px-0">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zur Startseite
              </Button>
            </Link>
            <h1 className="text-4xl lg:text-5xl font-light text-center tracking-wider text-[var(--brand-text-primary)] mb-2">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-center text-[var(--brand-text-secondary)]">
                {subtitle}
              </p>
            )}
          </div>
          <div className="space-y-8 text-base leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  </main>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section>
    <h2 className="text-2xl font-normal tracking-wide text-[var(--brand-accent-primary)] mb-4 border-b border-[var(--brand-accent-primary)]/20 pb-2 text-center lg:text-left">
      {title}
    </h2>
    <div className="space-y-2 text-[var(--brand-text-secondary)] text-center lg:text-left">
      {children}
    </div>
  </section>
);


export const metadata = {
  title: 'Impressum - L.A. Agency Vienna',
  description: 'Impressum der L.A. Agency Vienna',
};

export default function ImprintPage() {
  return (
    <>
      <Header />
      <LegalPageLayout 
        title="Impressum"
        subtitle="Angaben gemäß § 5 ECG, § 25 MedienG und § 63 GewO"
      >
        <Section title="L.A. Agency">
          <p>Einzelunternehmen</p>
          <p>Lidija Ajvazi</p>
          <p>Neubaugasse 55/2/4</p>
          <p>1070 Wien</p>
          <p>Österreich</p>
        </Section>

        <Section title="Kontakt">
          <p>
            <strong>Telefon:</strong> <a href="tel:+436643782030" className="hover:text-[var(--brand-accent-primary)] transition-colors">+43 664 3782030</a>
          </p>
          <p>
            <strong>E-Mail:</strong> <a href="mailto:hello@la-agency-vienna.com" className="hover:text-[var(--brand-accent-primary)] transition-colors">hello@la-agency-vienna.com</a>
          </p>
        </Section>

        <Section title="Unternehmensdaten">
          <p>
            <strong>Umsatzsteuer-Identifikationsnummer (UID):</strong> ATU82138312
          </p>
          <p>
            <strong>Medieninhaberin & inhaltlich verantwortlich:</strong> Lidija Ajvazi
          </p>
          <p>
            <strong>Unternehmensgegenstand:</strong> Agentur für Marketing, Kommunikation und Design
          </p>
        </Section>

        <Section title="Berufsrechtliche Informationen">
          <p>
            <strong>Aufsichtsbehörde:</strong> Magistratisches Bezirksamt für den 7. Bezirk, Wien
          </p>
          <p>
            Mitglied der Wirtschaftskammer Wien
          </p>
          <p>
            <strong>Fachgruppe:</strong> Werbung und Marktkommunikation
          </p>
          <p>
            <strong>Berufsrechtliche Vorschriften:</strong> Gewerbeordnung (GewO), abrufbar unter <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--brand-accent-primary)] transition-colors">www.ris.bka.gv.at</a>
          </p>
        </Section>
      </LegalPageLayout>
      <Footer />
    </>
  );
} 