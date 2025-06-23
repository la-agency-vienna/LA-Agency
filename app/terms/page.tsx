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
                Allgemeine Geschäftsbedingungen
              </h1>
              <p className="text-white/70 text-center lg:text-left" 
                 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>
                Stand: {new Date().toLocaleDateString('de-AT')}
              </p>
            </div>

            {/* Content */}
            <div className="glass-card text-white/80 leading-relaxed responsive-spacing-lg" 
                 style={{ padding: 'clamp(1.5rem, 4vw, 3rem)' }}>
              
              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">§ 1 Geltungsbereich und Vertragspartner</h2>
                <p className="mb-4">
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge und Leistungen 
                  des Club des Wiener Renn-Verein, Palais & Event Management, vertreten durch Lidija Ajvazi 
                  (nachfolgend "Auftragnehmer") im Bereich Marketing, PR, Eventmanagement und verwandter Dienstleistungen.
                </p>
                <p className="mb-4">
                  Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Auftraggebers 
                  werden nur dann Vertragsbestandteil, wenn und soweit der Auftragnehmer ihrer Geltung ausdrücklich 
                  schriftlich zugestimmt hat.
                </p>
                <p className="mb-4">
                  Diese AGB gelten auch für alle künftigen Geschäftsbeziehungen, auch wenn sie nicht nochmals 
                  ausdrücklich vereinbart werden.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">§ 2 Vertragsschluss und Angebote</h2>
                <p className="mb-4">
                  Angebote des Auftragnehmers sind freibleibend und unverbindlich, soweit nicht ausdrücklich 
                  etwas anderes schriftlich vereinbart wird. Ein Vertrag kommt erst durch die schriftliche 
                  Auftragsbestätigung des Auftragnehmers oder durch Beginn der Arbeiten zustande.
                </p>
                <p className="mb-4">
                  Mündliche Nebenabreden bedürfen zu ihrer Wirksamkeit der schriftlichen Bestätigung durch 
                  den Auftragnehmer. Dies gilt auch für Änderungen oder Ergänzungen dieser AGB.
                </p>
                <p className="mb-4">
                  Der Auftragnehmer behält sich das Eigentumsrecht und das Urheberrecht an allen abgegebenen 
                  Angeboten, Kostenvoranschlägen, Entwürfen und ähnlichen Unterlagen vor. Diese dürfen Dritten 
                  nicht zugänglich gemacht werden.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">§ 3 Leistungsumfang und -durchführung</h2>
                <p className="mb-4">
                  Der Umfang der zu erbringenden Leistungen ergibt sich aus der jeweiligen Auftragsbestätigung 
                  oder dem Einzelvertrag. Dazu gehören insbesondere:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Marketing- und PR-Strategieentwicklung</li>
                  <li>Eventplanung und -management</li>
                  <li>Content-Erstellung und Kampagnenentwicklung</li>
                  <li>Projektmanagement und Beratungsleistungen</li>
                  <li>Koordination von Dienstleistern und Lieferanten</li>
                </ul>
                <p className="mb-4">
                  Änderungen oder Erweiterungen des Leistungsumfangs bedürfen der schriftlichen Vereinbarung. 
                  Daraus resultierende Mehrkosten werden nach Aufwand oder nach gesonderter Vereinbarung 
                  in Rechnung gestellt.
                </p>
                <p className="mb-4">
                  Der Auftragnehmer ist berechtigt, Teilleistungen durch qualifizierte Dritte (Subunternehmer) 
                  erbringen zu lassen, sofern dies nicht ausdrücklich ausgeschlossen wurde.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">§ 4 Vergütung und Zahlungsbedingungen</h2>
                <p className="mb-4">
                  Die Vergütung richtet sich nach der jeweils gültigen Preisliste oder den individualvertraglich 
                  vereinbarten Preisen. Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer.
                </p>
                <p className="mb-4">
                  Bei Projekten mit einer Laufzeit von mehr als einem Monat können Abschlagszahlungen nach 
                  Projektfortschritt vereinbart werden. Rechnungen sind binnen 14 Tagen nach Rechnungsdatum 
                  ohne Abzug zur Zahlung fällig.
                </p>
                <p className="mb-4">
                  Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz 
                  der Österreichischen Nationalbank berechnet. Die Geltendmachung weiterer Verzugsschäden 
                  bleibt vorbehalten.
                </p>
                <p className="mb-4">
                  Auslagen und Spesen (wie Reisekosten, Materialkosten, Fremdleistungen) werden zusätzlich 
                  zur vereinbarten Vergütung gegen Nachweis in Rechnung gestellt, sofern nicht anders vereinbart.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">§ 5 Mitwirkungspflichten des Auftraggebers</h2>
                <p className="mb-4">
                  Der Auftraggeber ist verpflichtet, alle für die ordnungsgemäße Durchführung des Auftrags 
                  erforderlichen Informationen, Unterlagen und Genehmigungen rechtzeitig und vollständig 
                  zur Verfügung zu stellen.
                </p>
                <p className="mb-4">
                  Dazu gehören insbesondere:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>Briefing-Unterlagen und Projektspezifikationen</li>
                  <li>Corporate Design Guidelines und Markenmaterialien</li>
                  <li>Erforderliche Lizenzen und Genehmigungen</li>
                  <li>Zugang zu relevanten Systemen und Plattformen</li>
                  <li>Rechtzeitige Freigaben und Entscheidungen</li>
                </ul>
                <p className="mb-4">
                  Verzögerungen oder Mehrkosten aufgrund nicht, nicht rechtzeitig oder unvollständig zur 
                  Verfügung gestellter Informationen oder verspäteter Freigaben gehen zu Lasten des Auftraggebers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">§ 6 Urheberrecht und Nutzungsrechte</h2>
                <p className="mb-4">
                  Alle vom Auftragnehmer erstellten Konzepte, Entwürfe, Designs, Texte und sonstigen 
                  Arbeitsergebnisse unterliegen dem Urheberrecht und bleiben geistiges Eigentum des Auftragnehmers.
                </p>
                <p className="mb-4">
                  Der Auftraggeber erhält nach vollständiger Bezahlung der vereinbarten Vergütung die 
                  vereinbarten Nutzungsrechte. Soweit nicht anders vereinbart, werden einfache Nutzungsrechte 
                  für den vereinbarten Verwendungszweck eingeräumt.
                </p>
                <p className="mb-4">
                  Die Übertragung von Nutzungsrechten an Dritte oder eine über den vereinbarten Zweck 
                  hinausgehende Nutzung bedarf der vorherigen schriftlichen Zustimmung des Auftragnehmers 
                  und kann mit zusätzlichen Lizenzgebühren verbunden sein.
                </p>
                <p className="mb-4">
                  Der Auftragnehmer ist berechtigt, die erbrachten Leistungen zu Referenzzwecken zu verwenden 
                  und zu veröffentlichen, soweit nicht ausdrücklich etwas anderes vereinbart wurde.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">§ 7 Vertraulichkeit und Datenschutz</h2>
                <p className="mb-4">
                  Beide Vertragsparteien verpflichten sich, alle ihnen im Rahmen der Geschäftsbeziehung 
                  bekannt gewordenen vertraulichen Informationen, Geschäfts- und Betriebsgeheimnisse 
                  streng vertraulich zu behandeln und nicht an Dritte weiterzugeben.
                </p>
                <p className="mb-4">
                  Diese Verpflichtung besteht auch nach Beendigung des Vertragsverhältnisses fort und 
                  gilt für alle Mitarbeiter und Subunternehmer des Auftragnehmers entsprechend.
                </p>
                <p className="mb-4">
                  Der Auftragnehmer verpflichtet sich, die geltenden Datenschutzbestimmungen einzuhalten 
                  und personenbezogene Daten nur im Rahmen der Auftragserfüllung zu verarbeiten.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">§ 8 Termine und Fristen</h2>
                <p className="mb-4">
                  Vereinbarte Termine und Fristen sind nur dann verbindlich, wenn sie ausdrücklich 
                  schriftlich als verbindlich bezeichnet wurden. Ansonsten handelt es sich um 
                  unverbindliche Planungstermine.
                </p>
                <p className="mb-4">
                  Termine und Fristen verlängern sich angemessen bei Eintritt unvorhersehbarer Hindernisse, 
                  die der Auftragnehmer nicht zu vertreten hat, sowie bei verspäteter oder unvollständiger 
                  Mitwirkung des Auftraggebers.
                </p>
                <p className="mb-4">
                  Höhere Gewalt, Arbeitskampf, behördliche Maßnahmen und ähnliche Umstände berechtigen 
                  den Auftragnehmer, vereinbarte Termine entsprechend zu verschieben.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">§ 9 Haftung und Gewährleistung</h2>
                <p className="mb-4">
                  Der Auftragnehmer haftet nur für Schäden, die auf Vorsatz oder grober Fahrlässigkeit beruhen. 
                  Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit nicht Schäden aus der 
                  Verletzung des Lebens, des Körpers oder der Gesundheit betroffen sind.
                </p>
                <p className="mb-4">
                  Die Haftung für mittelbare Schäden, Folgeschäden, entgangenen Gewinn und sonstige 
                  Vermögensschäden ist ausgeschlossen, soweit dies gesetzlich zulässig ist.
                </p>
                <p className="mb-4">
                  Die Haftung ist der Höhe nach auf die jeweilige Auftragssumme, maximal jedoch auf 
                  EUR 50.000,- je Schadensfall begrenzt.
                </p>
                <p className="mb-4">
                  Offensichtliche Mängel sind binnen 8 Tagen nach Lieferung/Leistung schriftlich zu rügen. 
                  Versteckte Mängel sind binnen 8 Tagen nach Entdeckung zu rügen. Bei berechtigten 
                  Mängelrügen ist der Auftragnehmer zunächst zur Nachbesserung berechtigt.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">§ 10 Kündigung</h2>
                <p className="mb-4">
                  Verträge mit Dauerschuldcharakter können von beiden Seiten mit einer Frist von 
                  4 Wochen zum Monatsende gekündigt werden, soweit nicht etwas anderes vereinbart ist.
                </p>
                <p className="mb-4">
                  Das Recht zur außerordentlichen fristlosen Kündigung aus wichtigem Grund bleibt unberührt. 
                  Ein wichtiger Grund liegt insbesondere vor bei erheblicher Verletzung vertraglicher 
                  Pflichten, Zahlungsverzug von mehr als 30 Tagen oder Insolvenz einer Vertragspartei.
                </p>
                <p className="mb-4">
                  Bei vorzeitiger Beendigung sind bis zur Kündigung erbrachte Leistungen entsprechend 
                  zu vergüten. Bereits begonnene Arbeiten werden nach Aufwand abgerechnet.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">§ 11 Höhere Gewalt</h2>
                <p className="mb-4">
                  Höhere Gewalt befreit beide Vertragsparteien für die Dauer der Behinderung und im 
                  Umfang ihrer Auswirkung von den Leistungsverpflichtungen. Als höhere Gewalt gelten 
                  insbesondere Naturkatastrophen, Krieg, Terroranschläge, Pandemien, Streik, Aussperrung 
                  und behördliche Anordnungen.
                </p>
                <p className="mb-4">
                  Die Vertragsparteien sind verpflichtet, sich über das Eintreten und die voraussichtliche 
                  Dauer der höheren Gewalt unverzüglich zu informieren und ihre Verpflichtungen den 
                  veränderten Verhältnissen nach Treu und Glauben anzupassen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">§ 12 Schlussbestimmungen</h2>
                <p className="mb-4">
                  Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts und der 
                  Verweisungsnormen des internationalen Privatrechts.
                </p>
                <p className="mb-4">
                  Ausschließlicher Gerichtsstand für alle Streitigkeiten aus und im Zusammenhang mit 
                  diesem Vertrag ist Wien, soweit der Auftraggeber Vollkaufmann, juristische Person 
                  des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
                </p>
                <p className="mb-4">
                  Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein oder werden, 
                  so berührt dies die Wirksamkeit der übrigen Bestimmungen nicht. Die unwirksame 
                  Bestimmung ist durch eine wirksame zu ersetzen, die dem wirtschaftlichen Zweck 
                  der unwirksamen Bestimmung am nächsten kommt.
                </p>
                <p className="mb-4">
                  Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform. Dies gilt auch 
                  für die Änderung dieser Schriftformklausel.
                </p>
              </section>

              <div className="border-t border-white/10 pt-8 mt-12">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-white font-semibold mb-3">Kontakt bei Fragen zu den AGB</h3>
                  <p>
                    <strong>Club des Wiener Renn-Verein</strong><br />
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
    </>
  );
}