import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Background } from '@/components/Background';

export const metadata = {
  title: 'AGB - L.A. Agency Vienna',
  description: 'Allgemeine Geschäftsbedingungen der L.A. Agency Vienna',
};

export default function TermsPage() {
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
                Allgemeine Geschäftsbedingungen
              </h1>
              <p className="text-white/70 text-lg">
                Stand: {new Date().toLocaleDateString('de-AT')}
              </p>
            </div>

            {/* Content */}
            <div className="glass-card p-8 md:p-12 space-y-8 text-white/80 leading-relaxed">
              
              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">§ 1 Geltungsbereich</h2>
                <p className="mb-4">
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge und Leistungen 
                  der L.A. Agency Vienna (nachfolgend "Agentur") im Bereich Marketing, PR und Eventmanagement.
                </p>
                <p className="mb-4">
                  Abweichende Bedingungen des Auftraggebers werden nur wirksam, wenn sie von der Agentur 
                  ausdrücklich schriftlich anerkannt werden.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">§ 2 Vertragsschluss</h2>
                <p className="mb-4">
                  Ein Vertrag kommt durch die schriftliche Auftragsbestätigung der Agentur oder durch 
                  die Aufnahme der Arbeiten zustande.
                </p>
                <p className="mb-4">
                  Angebote der Agentur sind freibleibend und unverbindlich, soweit nicht ausdrücklich 
                  etwas anderes vereinbart wird.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">§ 3 Leistungsumfang</h2>
                <p className="mb-4">
                  Der Umfang der zu erbringenden Leistungen ergibt sich aus der jeweiligen 
                  Auftragsbestätigung oder dem Einzelvertrag.
                </p>
                <p className="mb-4">
                  Änderungen des Leistungsumfangs bedürfen der schriftlichen Vereinbarung. 
                  Daraus resultierende Mehrkosten werden gesondert in Rechnung gestellt.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">§ 4 Vergütung und Zahlungsbedingungen</h2>
                <p className="mb-4">
                  Die Vergütung richtet sich nach der jeweils gültigen Preisliste oder den 
                  individualvertraglich vereinbarten Preisen.
                </p>
                <p className="mb-4">
                  Rechnungen sind binnen 14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig.
                </p>
                <p className="mb-4">
                  Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten über dem 
                  Basiszinssatz der Österreichischen Nationalbank berechnet.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">§ 5 Mitwirkungspflichten des Auftraggebers</h2>
                <p className="mb-4">
                  Der Auftraggeber ist verpflichtet, alle für die Durchführung des Auftrags 
                  erforderlichen Informationen und Unterlagen rechtzeitig zur Verfügung zu stellen.
                </p>
                <p className="mb-4">
                  Verzögerungen aufgrund nicht oder verspätet zur Verfügung gestellter Informationen 
                  gehen zu Lasten des Auftraggebers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">§ 6 Urheberrecht und Nutzungsrechte</h2>
                <p className="mb-4">
                  Alle von der Agentur erstellten Konzepte, Entwürfe und sonstigen Arbeitsergebnisse 
                  unterliegen dem Urheberrecht.
                </p>
                <p className="mb-4">
                  Die Übertragung von Nutzungsrechten erfolgt erst nach vollständiger Bezahlung 
                  der vereinbarten Vergütung.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">§ 7 Vertraulichkeit</h2>
                <p className="mb-4">
                  Beide Vertragsparteien verpflichten sich, alle ihnen im Rahmen der Geschäftsbeziehung 
                  bekannt gewordenen vertraulichen Informationen streng vertraulich zu behandeln.
                </p>
                <p className="mb-4">
                  Diese Verpflichtung besteht auch nach Beendigung des Vertragsverhältnisses fort.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">§ 8 Haftung</h2>
                <p className="mb-4">
                  Die Agentur haftet nur für Schäden, die auf Vorsatz oder grober Fahrlässigkeit beruhen.
                </p>
                <p className="mb-4">
                  Die Haftung für mittelbare Schäden, entgangenen Gewinn und sonstige Vermögensschäden 
                  ist ausgeschlossen, soweit gesetzlich zulässig.
                </p>
                <p className="mb-4">
                  Die Haftung ist der Höhe nach auf die Auftragssumme begrenzt.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">§ 9 Kündigung</h2>
                <p className="mb-4">
                  Verträge können von beiden Seiten mit einer Frist von 4 Wochen zum Monatsende 
                  gekündigt werden, soweit nicht etwas anderes vereinbart ist.
                </p>
                <p className="mb-4">
                  Das Recht zur fristlosen Kündigung aus wichtigem Grund bleibt unberührt.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">§ 10 Streitbeilegung</h2>
                <p className="mb-4">
                  Bei Streitigkeiten zwischen den Vertragsparteien wird zunächst eine einvernehmliche 
                  Lösung angestrebt.
                </p>
                <p className="mb-4">
                  Ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist Wien.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">§ 11 Schlussbestimmungen</h2>
                <p className="mb-4">
                  Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts.
                </p>
                <p className="mb-4">
                  Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit 
                  der übrigen Bestimmungen davon unberührt.
                </p>
                <p className="mb-4">
                  Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform.
                </p>
              </section>

              <div className="border-t border-white/10 pt-8 mt-12">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-white font-semibold mb-3">Kontakt bei Fragen zu den AGB</h3>
                  <p>
                    <strong>L.A. Agency Vienna</strong><br />
                    E-Mail: hello@la-agency.vienna<br />
                    Telefon: +43 1 234 5678
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