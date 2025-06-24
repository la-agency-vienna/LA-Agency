import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Background } from '@/components/Background';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// New component for legal pages styling
const LegalSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold text-[var(--brand-accent-primary)] mb-6 text-center lg:text-left">{title}</h2>
    <div className="bg-white/5 rounded-lg p-6 mb-8 text-center lg:text-left">
      {children}
    </div>
  </section>
);

const LegalSubSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-[var(--brand-text-primary)] mb-3 text-center lg:text-left">{title}</h3>
    <div className="text-base text-[var(--brand-text-secondary)] space-y-4">{children}</div>
  </div>
);

export const metadata = {
  title: 'Impressum - L.A. Agency Vienna',
  description: 'Impressum der L.A. Agency Vienna',
};

export default function ImprintPage() {
  return (
    <>
      <Header />
      <main>
        <Background />
        <div className="min-h-screen bg-white py-20 lg:py-24">
          <div className="container-max section-padding">
            <div className="container-narrow mx-auto">
              {/* Header */}
              <div className="mb-12">
                <Link href="/">
                  <Button variant="ghost" className="mb-6 text-sm text-[var(--brand-text-secondary)] hover:text-[var(--brand-accent-primary)]">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Zurück zur Startseite
                  </Button>
                </Link>
                <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-left text-[var(--brand-text-primary)] mb-4">
                  Impressum
                </h1>
                <p className="text-lg text-center lg:text-left text-[var(--brand-text-secondary)]">
                  Angaben gemäß Mediengesetz und E-Commerce-Gesetz
                </p>
              </div>

              {/* Content */}
              <div className="text-[var(--brand-text-secondary)] leading-relaxed space-y-12">
                
                <LegalSection title="Medieninhaber und Herausgeber">
                  <div className="text-center lg:text-left">
                    <h3 className="text-2xl font-semibold text-[var(--brand-text-primary)] mb-4">
                      Club des Wiener Renn-Verein
                    </h3>
                    <p className="text-lg">
                      <strong className="font-semibold text-[var(--brand-accent-primary)]">Palais & Event Management</strong><br />
                      Geschäftsführung: Lidija Ajvazi<br />
                      <br />
                      Palais Esterházy<br />
                      Wallnerstraße 4 / WA05<br />
                      1010 Wien – Austria<br />
                      <br />
                      <strong className="font-semibold text-[var(--brand-text-primary)]">Telefon:</strong> +43 664 3782030<br />
                      <strong className="font-semibold text-[var(--brand-text-primary)]">E-Mail:</strong> info@palais-esterhazy.net<br />
                      <strong className="font-semibold text-[var(--brand-text-primary)]">Website:</strong> www.palais-esterhazy.net
                    </p>
                  </div>
                </LegalSection>

                <LegalSection title="Unternehmensangaben">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-[var(--brand-text-primary)] mb-2 text-center lg:text-left">
                        Firmenbuchnummer
                      </h3>
                      <p className="text-base text-center lg:text-left">
                        FN 485729a
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-[var(--brand-text-primary)] mb-2 text-center lg:text-left">
                        Firmenbuchgericht
                      </h3>
                      <p className="text-base text-center lg:text-left">
                        Handelsgericht Wien
                      </p>
                    </div>
                  </div>
                </LegalSection>

                <LegalSection title="Steuerliche Angaben">
                  <p className="text-lg">
                    <strong className="font-semibold text-[var(--brand-text-primary)]">Umsatzsteuer-Identifikationsnummer:</strong><br />
                    ATU 67894523<br />
                    <br />
                    <strong className="font-semibold text-[var(--brand-text-primary)]">Gewerbeordnung:</strong><br />
                    Unternehmensberatung einschließlich der Unternehmensorganisation<br />
                    Event- und Projektmanagement<br />
                    <br />
                    <strong className="font-semibold text-[var(--brand-text-primary)]">Aufsichtsbehörde:</strong><br />
                    Magistrat der Stadt Wien<br />
                    Gewerberechtliche Geschäfte
                  </p>
                </LegalSection>

                <LegalSection title="Berufsbezeichnung und berufsrechtliche Regelungen">
                  <p className="text-lg">
                    <strong className="font-semibold text-[var(--brand-text-primary)]">Berufsbezeichnung:</strong><br />
                    Event- und Projektmanagement, Unternehmensberatung<br />
                    <br />
                    <strong className="font-semibold text-[var(--brand-text-primary)]">Verliehen in:</strong> Österreich<br />
                    <strong className="font-semibold text-[var(--brand-text-primary)]">Zuständige Kammer:</strong> Wirtschaftskammer Wien<br />
                    <strong className="font-semibold text-[var(--brand-text-primary)]">Berufsrechtliche Regelungen:</strong> Gewerbeordnung (GewO)
                  </p>
                </LegalSection>

                <LegalSection title="Redaktionell verantwortlich">
                  <p className="text-lg">
                    <strong className="font-semibold text-[var(--brand-text-primary)]">Lidija Ajvazi</strong><br />
                    Palais Esterházy<br />
                    Wallnerstraße 4 / WA05<br />
                    1010 Wien – Austria
                  </p>
                </LegalSection>

                <LegalSection title="Gerichtsstand und anwendbares Recht">
                  <p className="text-lg">
                    <strong className="font-semibold text-[var(--brand-text-primary)]">Gerichtsstand:</strong> Wien<br />
                    <strong className="font-semibold text-[var(--brand-text-primary)]">Anwendbares Recht:</strong> Österreichisches Recht<br />
                    <br />
                    Für alle Rechtsstreitigkeiten, die sich aus oder im Zusammenhang mit der 
                    Nutzung dieser Website ergeben, ist ausschließlich das sachlich zuständige 
                    Gericht in Wien zuständig.
                  </p>
                </LegalSection>

                <LegalSection title="EU-Streitschlichtung">
                  <p className="text-lg mb-4">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                    <a 
                      href="https://ec.europa.eu/consumers/odr/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[var(--brand-accent-primary)] hover:text-[var(--brand-accent-dark)] underline transition-colors duration-300 ml-2"
                    >
                      https://ec.europa.eu/consumers/odr/
                    </a>
                  </p>
                  <p className="text-lg">
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                  </p>
                </LegalSection>

                <LegalSection title="Verbraucherstreitbeilegung">
                  <p className="text-lg">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </LegalSection>

                <LegalSection title="Haftungsausschluss">
                  <LegalSubSection title="Haftung für Inhalte">
                    <p>
                      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                      nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                      Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
                      fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                      rechtswidrige Tätigkeit hinweisen.
                    </p>
                  </LegalSubSection>

                  <LegalSubSection title="Haftung für Links">
                    <p>
                      Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                      Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                      Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber 
                      der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung 
                      auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
                      Verlinkung nicht erkennbar.
                    </p>
                  </LegalSubSection>

                  <LegalSubSection title="Urheberrecht">
                    <p>
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                      dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und 
                      jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                      Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
                      nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                    </p>
                  </LegalSubSection>
                </LegalSection>

                <div className="border-t border-gray-200 pt-8 mt-12">
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <p className="text-base">
                      <strong className="font-semibold text-[var(--brand-text-primary)]">Letzte Aktualisierung:</strong> {new Date().toLocaleDateString('de-AT')}<br />
                      <br />
                      Bei Fragen zu diesem Impressum wenden Sie sich bitte an:<br />
                      <span className="text-[var(--brand-accent-primary)] font-medium">info@palais-esterhazy.net</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 