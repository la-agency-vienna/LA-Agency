import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Background } from '@/components/Background';

export const metadata = {
  title: 'Impressum - L.A. Agency Vienna',
  description: 'Impressum der L.A. Agency Vienna',
};

export default function ImprintPage() {
  return (
    <>
      <Background />
      <div className="min-h-screen" style={{ paddingTop: 'clamp(5rem, 8vw, 6rem)', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container-max section-padding">
          <div className="container-narrow mx-auto">
            {/* Header */}
            <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
              <Link href="/">
                <Button variant="ghost" 
                        style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)', fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
                  <ArrowLeft style={{ width: 'clamp(1rem, 2vw, 1.125rem)', height: 'clamp(1rem, 2vw, 1.125rem)', marginRight: 'clamp(0.5rem, 1vw, 0.75rem)' }} />
                  Zurück zur Startseite
                </Button>
              </Link>
              <h1 className="font-bold text-white text-center lg:text-left" 
                  style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: 'clamp(1rem, 2vw, 1rem)' }}>
                Impressum
              </h1>
              <p className="text-white/70 text-center lg:text-left" 
                 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>
                Angaben gemäß § 5 TMG
              </p>
            </div>

            {/* Content */}
            <div className="glass-card text-white/80 leading-relaxed responsive-spacing-lg" 
                 style={{ padding: 'clamp(1.5rem, 4vw, 3rem)' }}>
              
              <section>
                <h2 className="font-bold text-[#ffb366] text-center lg:text-left" 
                    style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: 'clamp(1rem, 2vw, 1rem)' }}>
                  Verantwortlich für den Inhalt
                </h2>
                <div className="bg-white/5 rounded-lg" 
                     style={{ padding: 'clamp(1rem, 3vw, 1.5rem)', marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
                  <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
                    <strong className="text-white">L.A. Agency Vienna</strong><br />
                    [Vollständiger Name des Inhabers/Geschäftsführers]<br />
                    [Straße und Hausnummer]<br />
                    [PLZ] Wien<br />
                    Österreich
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-bold text-[#ffb366] text-center lg:text-left" 
                    style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: 'clamp(1rem, 2vw, 1rem)' }}>
                  Kontakt
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 responsive-gap-md">
                  <div className="bg-white/5 rounded-lg" 
                       style={{ padding: 'clamp(1rem, 2vw, 1rem)' }}>
                    <h3 className="text-white font-semibold text-center lg:text-left" 
                        style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.5rem)', fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>Telefon</h3>
                    <p className="text-center lg:text-left" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>+43 1 234 5678</p>
                  </div>
                  <div className="bg-white/5 rounded-lg" 
                       style={{ padding: 'clamp(1rem, 2vw, 1rem)' }}>
                    <h3 className="text-white font-semibold text-center lg:text-left" 
                        style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.5rem)', fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>E-Mail</h3>
                    <p className="text-center lg:text-left" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>hello@la-agency.vienna</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-bold text-[#ffb366] text-center lg:text-left" 
                    style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: 'clamp(1rem, 2vw, 1rem)' }}>
                  Umsatzsteuer-ID
                </h2>
                <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', marginBottom: 'clamp(1rem, 2vw, 1rem)', textAlign: 'center' }} 
                   className="lg:text-left">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  <strong>ATU [Ihre USt-IdNr.]</strong>
                </p>
              </section>

              <section>
                <h2 className="font-bold text-[#ffb366] text-center lg:text-left" 
                    style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: 'clamp(1rem, 2vw, 1rem)' }}>
                  Berufsbezeichnung und berufsrechtliche Regelungen
                </h2>
                <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', marginBottom: 'clamp(1rem, 2vw, 1rem)', textAlign: 'center' }} 
                   className="lg:text-left">
                  <strong>Berufsbezeichnung:</strong> Marketing- und Eventagentur<br />
                  <strong>Verliehen in:</strong> Österreich
                </p>
              </section>

              <section>
                <h2 className="font-bold text-[#ffb366] text-center lg:text-left" 
                    style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: 'clamp(1rem, 2vw, 1rem)' }}>
                  Redaktionell verantwortlich
                </h2>
                <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', marginBottom: 'clamp(1rem, 2vw, 1rem)', textAlign: 'center' }} 
                   className="lg:text-left">
                  [Name des Verantwortlichen]<br />
                  [Adresse wie oben]
                </p>
              </section>

              <section>
                <h2 className="font-bold text-[#ffb366] text-center lg:text-left" 
                    style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: 'clamp(1rem, 2vw, 1rem)' }}>
                  EU-Streitschlichtung
                </h2>
                <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', marginBottom: 'clamp(1rem, 2vw, 1rem)', textAlign: 'center' }} 
                   className="lg:text-left">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a 
                    href="https://ec.europa.eu/consumers/odr/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#ffb366] hover:text-[#ff9933] underline"
                    style={{ marginLeft: 'clamp(0.25rem, 0.5vw, 0.5rem)' }}
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', marginBottom: 'clamp(1rem, 2vw, 1rem)', textAlign: 'center' }} 
                   className="lg:text-left">
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-[#ffb366] text-center lg:text-left" 
                    style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: 'clamp(1rem, 2vw, 1rem)' }}>
                  Verbraucherstreitbeilegung/Universalschlichtungsstelle
                </h2>
                <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', marginBottom: 'clamp(1rem, 2vw, 1rem)', textAlign: 'center' }} 
                   className="lg:text-left">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-[#ffb366] text-center lg:text-left" 
                    style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: 'clamp(1rem, 2vw, 1rem)' }}>
                  Haftung für Inhalte
                </h2>
                <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', marginBottom: 'clamp(1rem, 2vw, 1rem)', textAlign: 'center' }} 
                   className="lg:text-left">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                  Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
                  fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                  rechtswidrige Tätigkeit hinweisen.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-[#ffb366] text-center lg:text-left" 
                    style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: 'clamp(1rem, 2vw, 1rem)' }}>
                  Haftung für Links
                </h2>
                <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', marginBottom: 'clamp(1rem, 2vw, 1rem)', textAlign: 'center' }} 
                   className="lg:text-left">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber 
                  der Seiten verantwortlich.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-[#ffb366] text-center lg:text-left" 
                    style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: 'clamp(1rem, 2vw, 1rem)' }}>
                  Urheberrecht
                </h2>
                <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', marginBottom: 'clamp(1rem, 2vw, 1rem)', textAlign: 'center' }} 
                   className="lg:text-left">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                  dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und 
                  jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                  Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </section>

            </div>
          </div>
        </div>
      </div>
    </>
  );
} 