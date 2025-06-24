import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Background } from '@/components/Background';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// Reusable components for legal pages styling
const LegalSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="text-3xl font-bold text-[var(--brand-accent-primary)] mb-6 pb-2 border-b border-gray-200 text-center lg:text-left">{title}</h2>
    <div className="space-y-6 text-lg text-[var(--brand-text-secondary)]">{children}</div>
  </section>
);

const LegalSubSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div>
    <h3 className="text-2xl font-semibold text-[var(--brand-text-primary)] mb-4 text-center lg:text-left">{title}</h3>
    <div className="space-y-4">{children}</div>
  </div>
);

export const metadata = {
  title: 'AGB - L.A. Agency Vienna',
  description: 'Allgemeine Geschäftsbedingungen der L.A. Agency Vienna',
};

export default function TermsPage() {
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
                  Allgemeine Geschäftsbedingungen
                </h1>
                <p className="text-lg text-center lg:text-left text-[var(--brand-text-secondary)]">
                  Stand: {new Date().toLocaleDateString('de-AT')}
                </p>
              </div>

              {/* Content */}
              <div className="text-[var(--brand-text-secondary)] leading-relaxed space-y-12">
                
                <LegalSection title="§ 1 Geltungsbereich und Vertragspartner">
                  <p>
                    Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge und Leistungen 
                    des Club des Wiener Renn-Verein, Palais & Event Management, vertreten durch Lidija Ajvazi 
                    (nachfolgend &quot;Auftragnehmer&quot;) im Bereich Marketing, PR, Eventmanagement und verwandter Dienstleistungen.
                  </p>
                  <p>
                    Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Auftraggebers 
                    werden nur dann Vertragsbestandteil, wenn und soweit der Auftragnehmer ihrer Geltung ausdrücklich 
                    schriftlich zugestimmt hat.
                  </p>
                  <p>
                    Diese AGB gelten auch für alle künftigen Geschäftsbeziehungen, auch wenn sie nicht nochmals 
                    ausdrücklich vereinbart werden.
                  </p>
                </LegalSection>

                <LegalSection title="§ 2 Vertragsschluss und Angebote">
                  <p>
                    Angebote des Auftragnehmers sind freibleibend und unverbindlich, soweit nicht ausdrücklich 
                    etwas anderes schriftlich vereinbart wird. Ein Vertrag kommt erst durch die schriftliche 
                    Auftragsbestätigung des Auftragnehmers oder durch Beginn der Arbeiten zustande.
                  </p>
                  <p>
                    Mündliche Nebenabreden bedürfen zu ihrer Wirksamkeit der schriftlichen Bestätigung durch 
                    den Auftragnehmer. Dies gilt auch für Änderungen oder Ergänzungen dieser AGB.
                  </p>
                  <p>
                    Der Auftragnehmer behält sich das Eigentumsrecht und das Urheberrecht an allen abgegebenen 
                    Angeboten, Kostenvoranschlägen, Entwürfen und ähnlichen Unterlagen vor. Diese dürfen Dritten 
                    nicht zugänglich gemacht werden.
                  </p>
                </LegalSection>

                <LegalSection title="§ 3 Leistungsumfang und -durchführung">
                  <p>
                    Der Umfang der zu erbringenden Leistungen ergibt sich aus der jeweiligen Auftragsbestätigung 
                    oder dem Einzelvertrag. Dazu gehören insbesondere:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Marketing- und PR-Strategieentwicklung</li>
                    <li>Eventplanung und -management</li>
                    <li>Content-Erstellung und Kampagnenentwicklung</li>
                    <li>Projektmanagement und Beratungsleistungen</li>
                    <li>Koordination von Dienstleistern und Lieferanten</li>
                  </ul>
                  <p>
                    Änderungen oder Erweiterungen des Leistungsumfangs bedürfen der schriftlichen Vereinbarung. 
                    Daraus resultierende Mehrkosten werden nach Aufwand oder nach gesonderter Vereinbarung 
                    in Rechnung gestellt.
                  </p>
                  <p>
                    Der Auftragnehmer ist berechtigt, Teilleistungen durch qualifizierte Dritte (Subunternehmer) 
                    erbringen zu lassen, sofern dies nicht ausdrücklich ausgeschlossen wurde.
                  </p>
                </LegalSection>

                <LegalSection title="§ 4 Vergütung und Zahlungsbedingungen">
                  <p>
                    Die Vergütung richtet sich nach der jeweils gültigen Preisliste oder den individualvertraglich 
                    vereinbarten Preisen. Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer.
                  </p>
                  <p>
                    Bei Projekten mit einer Laufzeit von mehr als einem Monat können Abschlagszahlungen nach 
                    Projektfortschritt vereinbart werden. Rechnungen sind binnen 14 Tagen nach Rechnungsdatum 
                    ohne Abzug zur Zahlung fällig.
                  </p>
                  <p>
                    Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz 
                    der Österreichischen Nationalbank berechnet. Die Geltendmachung weiterer Verzugsschäden 
                    bleibt vorbehalten.
                  </p>
                  <p>
                    Auslagen und Spesen (wie Reisekosten, Materialkosten, Fremdleistungen) werden zusätzlich 
                    zur vereinbarten Vergütung gegen Nachweis in Rechnung gestellt, sofern nicht anders vereinbart.
                  </p>
                </LegalSection>

                <LegalSection title="§ 5 Mitwirkungspflichten des Auftraggebers">
                  <p>
                    Der Auftraggeber ist verpflichtet, alle für die ordnungsgemäße Durchführung des Auftrags 
                    erforderlichen Informationen, Unterlagen und Genehmigungen rechtzeitig und vollständig 
                    zur Verfügung zu stellen.
                  </p>
                  <p>
                    Dazu gehören insbesondere:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Briefing-Unterlagen und Projektspezifikationen</li>
                    <li>Corporate Design Guidelines und Markenmaterialien</li>
                    <li>Erforderliche Lizenzen und Genehmigungen</li>
                    <li>Zugang zu relevanten Systemen und Plattformen</li>
                    <li>Rechtzeitige Freigaben und Entscheidungen</li>
                  </ul>
                  <p>
                    Verzögerungen oder Mehrkosten aufgrund nicht, nicht rechtzeitig oder unvollständig zur 
                    Verfügung gestellter Informationen oder verspäteter Freigaben gehen zu Lasten des Auftraggebers.
                  </p>
                </LegalSection>

                <LegalSection title="§ 6 Urheberrecht und Nutzungsrechte">
                  <p>
                    Alle vom Auftragnehmer erstellten Konzepte, Entwürfe, Designs, Texte und sonstigen 
                    Arbeitsergebnisse unterliegen dem Urheberrecht und bleiben geistiges Eigentum des Auftragnehmers.
                  </p>
                  <p>
                    Der Auftraggeber erhält nach vollständiger Bezahlung der vereinbarten Vergütung die 
                    vereinbarten Nutzungsrechte. Soweit nicht anders vereinbart, werden einfache Nutzungsrechte 
                    für den vereinbarten Verwendungszweck eingeräumt.
                  </p>
                  <p>
                    Die Übertragung von Nutzungsrechten an Dritte oder eine über den vereinbarten Zweck 
                    hinausgehende Nutzung bedarf der vorherigen schriftlichen Zustimmung des Auftragnehmers 
                    und kann mit zusätzlichen Lizenzgebühren verbunden sein.
                  </p>
                  <p>
                    Der Auftragnehmer ist berechtigt, die erbrachten Leistungen zu Referenzzwecken zu verwenden 
                    und zu veröffentlichen, soweit nicht ausdrücklich etwas anderes vereinbart wurde.
                  </p>
                </LegalSection>

                <LegalSection title="§ 7 Vertraulichkeit und Datenschutz">
                  <p>
                    Beide Vertragsparteien verpflichten sich, alle ihnen im Rahmen der Geschäftsbeziehung 
                    bekannt gewordenen vertraulichen Informationen, Geschäfts- und Betriebsgeheimnisse 
                    streng vertraulich zu behandeln und nicht an Dritte weiterzugeben.
                  </p>
                  <p>
                    Diese Verpflichtung besteht auch nach Beendigung des Vertragsverhältnisses fort und 
                    gilt für alle Mitarbeiter und Subunternehmer des Auftragnehmers entsprechend.
                  </p>
                  <p>
                    Der Auftragnehmer verpflichtet sich, die geltenden Datenschutzbestimmungen einzuhalten 
                    und personenbezogene Daten nur im Rahmen der Auftragserfüllung zu verarbeiten.
                  </p>
                </LegalSection>

                <LegalSection title="§ 8 Termine und Fristen">
                  <p>
                    Vereinbarte Termine und Fristen sind nur dann verbindlich, wenn sie ausdrücklich 
                    schriftlich als verbindlich bezeichnet wurden. Ansonsten handelt es sich um 
                    unverbindliche Planungstermine.
                  </p>
                  <p>
                    Termine und Fristen verlängern sich angemessen bei Eintritt unvorhersehbarer Hindernisse, 
                    die der Auftragnehmer nicht zu vertreten hat, sowie bei verspäteter oder unvollständiger 
                    Mitwirkung des Auftraggebers.
                  </p>
                  <p>
                    Höhere Gewalt, Arbeitskampf, behördliche Maßnahmen und ähnliche Umstände berechtigen 
                    den Auftragnehmer, vereinbarte Termine entsprechend zu verschieben.
                  </p>
                </LegalSection>

                <LegalSection title="§ 9 Haftung und Gewährleistung">
                  <p>
                    Der Auftragnehmer haftet nur für Schäden, die auf Vorsatz oder grober Fahrlässigkeit beruhen. 
                    Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit nicht Schäden aus der 
                    Verletzung des Lebens, des Körpers oder der Gesundheit betroffen sind.
                  </p>
                  <p>
                    Die Haftung für mittelbare Schäden, Folgeschäden, entgangenen Gewinn und sonstige 
                    Vermögensschäden ist ausgeschlossen, soweit dies gesetzlich zulässig ist.
                  </p>
                  <p>
                    Die Haftung ist der Höhe nach auf die jeweilige Auftragssumme, maximal jedoch auf 
                    EUR 50.000,- je Schadensfall begrenzt.
                  </p>
                  <p>
                    Offensichtliche Mängel sind binnen 8 Tagen nach Lieferung/Leistung schriftlich zu rügen. 
                    Versteckte Mängel sind binnen 8 Tagen nach Entdeckung zu rügen. Bei berechtigten 
                    Mängelrügen ist der Auftragnehmer zunächst zur Nachbesserung berechtigt.
                  </p>
                </LegalSection>

                <LegalSection title="§ 10 Kündigung">
                  <p>
                    Verträge mit Dauerschuldcharakter können von beiden Seiten mit einer Frist von 
                    4 Wochen zum Monatsende gekündigt werden, soweit nicht etwas anderes vereinbart ist.
                  </p>
                  <p>
                    Das Recht zur außerordentlichen fristlosen Kündigung aus wichtigem Grund bleibt unberührt. 
                    Ein wichtiger Grund liegt insbesondere vor bei erheblicher Verletzung vertraglicher 
                    Pflichten, Zahlungsverzug von mehr als 30 Tagen oder Insolvenz einer Vertragspartei.
                  </p>
                  <p>
                    Bei vorzeitiger Beendigung sind bis zur Kündigung erbrachte Leistungen entsprechend 
                    zu vergüten. Bereits begonnene Arbeiten werden nach Aufwand abgerechnet.
                  </p>
                </LegalSection>

                <LegalSection title="§ 11 Höhere Gewalt">
                  <p>
                    Höhere Gewalt befreit beide Vertragsparteien für die Dauer der Behinderung und im 
                    Umfang ihrer Auswirkung von den Leistungsverpflichtungen. Als höhere Gewalt gelten 
                    insbesondere Naturkatastrophen, Krieg, Terroranschläge, Pandemien, Streik, Aussperrung 
                    und behördliche Anordnungen.
                  </p>
                  <p>
                    Die Vertragsparteien sind verpflichtet, sich über das Eintreten und die voraussichtliche 
                    Dauer der höheren Gewalt unverzüglich zu informieren und ihre Verpflichtungen den 
                    veränderten Verhältnissen nach Treu und Glauben anzupassen.
                  </p>
                </LegalSection>

                <LegalSection title="§ 12 Schlussbestimmungen">
                  <p>
                    Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts und der 
                    Verweisungsnormen des internationalen Privatrechts.
                  </p>
                  <p>
                    Ausschließlicher Gerichtsstand für alle Streitigkeiten aus und im Zusammenhang mit 
                    diesem Vertrag ist Wien, soweit der Auftraggeber Vollkaufmann, juristische Person 
                    des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
                  </p>
                  <p>
                    Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein oder werden, 
                    so berührt dies die Wirksamkeit der übrigen Bestimmungen nicht. Die unwirksame 
                    Bestimmung ist durch eine wirksame zu ersetzen, die dem wirtschaftlichen Zweck 
                    der unwirksamen Bestimmung am nächsten kommt.
                  </p>
                  <p>
                    Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform. Dies gilt auch 
                    für die Änderung dieser Schriftformklausel.
                  </p>
                </LegalSection>

                <div className="border-t border-gray-200 pt-8 mt-12">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[var(--brand-text-primary)] mb-3">Kontakt bei Fragen zu den AGB</h3>
                    <p>
                      <strong className="font-semibold text-[var(--brand-text-primary)]">Club des Wiener Renn-Verein</strong><br />
                      Palais & Event Management<br />
                      Lidija Ajvazi<br />
                      Palais Esterházy<br />
                      Wallnerstraße 4 / WA05<br />
                      1010 Wien – Austria<br />
                      <br />
                      E-Mail: info@palais-esterhazy.net<br />
                      Telefon: +43 664 3782030
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