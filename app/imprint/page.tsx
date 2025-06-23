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
      <div className="min-h-screen py-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <Link href="/">
                <Button variant="ghost" className="mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Zurück zur Startseite
                </Button>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Impressum
              </h1>
              <p className="text-white/70 text-lg">
                Angaben gemäß § 5 TMG
              </p>
            </div>

            {/* Content */}
            <div className="glass-card p-8 md:p-12 space-y-8 text-white/80 leading-relaxed">
              
              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">Verantwortlich für den Inhalt</h2>
                <div className="bg-white/5 p-6 rounded-lg mb-6">
                  <p className="text-lg">
                    <strong className="text-white">L.A. Agency Vienna</strong><br />
                    [Vollständiger Name des Inhabers/Geschäftsführers]<br />
                    [Straße und Hausnummer]<br />
                    [PLZ] Wien<br />
                    Österreich
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">Kontakt</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h3 className="text-white font-semibold mb-2">Telefon</h3>
                    <p>+43 1 234 5678</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h3 className="text-white font-semibold mb-2">E-Mail</h3>
                    <p>hello@la-agency.vienna</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">Umsatzsteuer-ID</h2>
                <p className="mb-4">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  <strong>ATU [Ihre USt-IdNr.]</strong>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                <p className="mb-4">
                  <strong>Berufsbezeichnung:</strong> Marketing- und Eventagentur<br />
                  <strong>Verliehen in:</strong> Österreich
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">Redaktionell verantwortlich</h2>
                <p className="mb-4">
                  [Name des Verantwortlichen]<br />
                  [Adresse wie oben]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">EU-Streitschlichtung</h2>
                <p className="mb-4">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a 
                    href="https://ec.europa.eu/consumers/odr/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#ffb366] hover:text-[#ff9933] underline ml-1"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="mb-4">
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
                <p className="mb-4">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">Haftung für Inhalte</h2>
                <p className="mb-4">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                  Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
                  fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                  rechtswidrige Tätigkeit hinweisen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">Haftung für Links</h2>
                <p className="mb-4">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber 
                  der Seiten verantwortlich.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">Urheberrecht</h2>
                <p className="mb-4">
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