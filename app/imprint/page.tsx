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
                Angaben gemäß Mediengesetz und E-Commerce-Gesetz
              </p>
            </div>

            {/* Content */}
            <div className="glass-card text-white/80 leading-relaxed responsive-spacing-lg" 
                 style={{ padding: 'clamp(1.5rem, 4vw, 3rem)' }}>
              
              <section>
                <h2 className="font-bold text-[#ffb366] text-center lg:text-left" 
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  Medieninhaber und Herausgeber
                </h2>
                <div className="bg-white/5 rounded-lg" 
                     style={{ padding: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
                  <div className="text-center lg:text-left">
                    <h3 className="text-white font-semibold" 
                        style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)', marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
                      Club des Wiener Renn-Verein
                    </h3>
                    <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.6' }}>
                      <strong className="text-[#ffb366]">Palais & Event Management</strong><br />
                      Geschäftsführung: Lidija Ajvazi<br />
                      <br />
                      Palais Esterházy<br />
                      Wallnerstraße 4 / WA05<br />
                      1010 Wien – Austria<br />
                      <br />
                      <strong className="text-white">Telefon:</strong> +43 664 3782030<br />
                      <strong className="text-white">E-Mail:</strong> info@palais-esterhazy.net<br />
                      <strong className="text-white">Website:</strong> www.palais-esterhazy.net
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-bold text-[#ffb366] text-center lg:text-left" 
                    style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
                  Unternehmensangaben
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 responsive-gap-lg">
                  <div className="bg-white/5 rounded-lg" 
                       style={{ padding: 'clamp(1rem, 2vw, 1.5rem)' }}>
                    <h3 className="text-white font-semibold text-center lg:text-left" 
                        style={{ marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)', fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}>
                      Firmenbuchnummer
                    </h3>
                    <p className="text-center lg:text-left" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
                      FN 485729a
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg" 
                       style={{ padding: 'clamp(1rem, 2vw, 1.5rem)' }}>
                    <h3 className="text-white font-semibold text-center lg:text-left" 
                        style={{ marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)', fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}>
                      Firmenbuchgericht
                    </h3>
                    <p className="text-center lg:text-left" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
                      Handelsgericht Wien
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-bold text-[#ffb366] text-center lg:text-left" 
                    style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
                  Steuerliche Angaben
                </h2>
                <div className="bg-white/5 rounded-lg" 
                     style={{ padding: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', marginBottom: 'clamp(1rem, 2vw, 1rem)', textAlign: 'center' }} 
                     className="lg:text-left">
                    <strong className="text-white">Umsatzsteuer-Identifikationsnummer:</strong><br />
                    ATU 67894523<br />
                    <br />
                    <strong className="text-white">Gewerbeordnung:</strong><br />
                    Unternehmensberatung einschließlich der Unternehmensorganisation<br />
                    Event- und Projektmanagement<br />
                    <br />
                    <strong className="text-white">Aufsichtsbehörde:</strong><br />
                    Magistrat der Stadt Wien<br />
                    Gewerberechtliche Geschäfte
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-bold text-[#ffb366] text-center lg:text-left" 
                    style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
                  Berufsbezeichnung und berufsrechtliche Regelungen
                </h2>
                <div className="bg-white/5 rounded-lg" 
                     style={{ padding: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', textAlign: 'center' }} 
                     className="lg:text-left">
                    <strong className="text-white">Berufsbezeichnung:</strong><br />
                    Event- und Projektmanagement, Unternehmensberatung<br />
                    <br />
                    <strong className="text-white">Verliehen in:</strong> Österreich<br />
                    <strong className="text-white">Zuständige Kammer:</strong> Wirtschaftskammer Wien<br />
                    <strong className="text-white">Berufsrechtliche Regelungen:</strong> Gewerbeordnung (GewO)
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-bold text-[#ffb366] text-center lg:text-left" 
                    style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
                  Redaktionell verantwortlich
                </h2>
                <div className="bg-white/5 rounded-lg" 
                     style={{ padding: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', textAlign: 'center' }} 
                     className="lg:text-left">
                    <strong className="text-white">Lidija Ajvazi</strong><br />
                    Palais Esterházy<br />
                    Wallnerstraße 4 / WA05<br />
                    1010 Wien – Austria
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-bold text-[#ffb366] text-center lg:text-left" 
                    style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
                  Gerichtsstand und anwendbares Recht
                </h2>
                <div className="bg-white/5 rounded-lg" 
                     style={{ padding: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', textAlign: 'center' }} 
                     className="lg:text-left">
                    <strong className="text-white">Gerichtsstand:</strong> Wien<br />
                    <strong className="text-white">Anwendbares Recht:</strong> Österreichisches Recht<br />
                    <br />
                    Für alle Rechtsstreitigkeiten, die sich aus oder im Zusammenhang mit der 
                    Nutzung dieser Website ergeben, ist ausschließlich das sachlich zuständige 
                    Gericht in Wien zuständig.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-bold text-[#ffb366] text-center lg:text-left" 
                    style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
                  EU-Streitschlichtung
                </h2>
                <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', marginBottom: 'clamp(1rem, 2vw, 1rem)', textAlign: 'center' }} 
                   className="lg:text-left">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a 
                    href="https://ec.europa.eu/consumers/odr/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#ffb366] hover:text-[#ff9933] underline transition-colors duration-300"
                    style={{ marginLeft: 'clamp(0.25rem, 0.5vw, 0.5rem)' }}
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', marginBottom: 'clamp(1.5rem, 3vw, 2rem)', textAlign: 'center' }} 
                   className="lg:text-left">
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-[#ffb366] text-center lg:text-left" 
                    style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
                  Verbraucherstreitbeilegung
                </h2>
                <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', marginBottom: 'clamp(1.5rem, 3vw, 2rem)', textAlign: 'center' }} 
                   className="lg:text-left">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-[#ffb366] text-center lg:text-left" 
                    style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
                  Haftungsausschluss
                </h2>
                
                <h3 className="text-white font-semibold text-center lg:text-left" 
                    style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)' }}>
                  Haftung für Inhalte
                </h3>
                <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', marginBottom: 'clamp(1rem, 2vw, 1.5rem)', textAlign: 'center' }} 
                   className="lg:text-left">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                  Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
                  fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                  rechtswidrige Tätigkeit hinweisen.
                </p>

                <h3 className="text-white font-semibold text-center lg:text-left" 
                    style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)' }}>
                  Haftung für Links
                </h3>
                <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', marginBottom: 'clamp(1rem, 2vw, 1.5rem)', textAlign: 'center' }} 
                   className="lg:text-left">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber 
                  der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung 
                  auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
                  Verlinkung nicht erkennbar.
                </p>

                <h3 className="text-white font-semibold text-center lg:text-left" 
                    style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)' }}>
                  Urheberrecht
                </h3>
                <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', marginBottom: 'clamp(1rem, 2vw, 1.5rem)', textAlign: 'center' }} 
                   className="lg:text-left">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                  dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und 
                  jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                  Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
                  nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
              </section>

              <div className="border-t border-white/10 pt-8 mt-12">
                <div className="bg-white/5 p-6 rounded-lg text-center">
                  <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
                    <strong className="text-white">Letzte Aktualisierung:</strong> {new Date().toLocaleDateString('de-AT')}<br />
                    <br />
                    Bei Fragen zu diesem Impressum wenden Sie sich bitte an:<br />
                    <span className="text-[#ffb366]">info@palais-esterhazy.net</span>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
} 