import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Background } from '@/components/Background';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// Consistent layout for legal pages
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
    <div className="space-y-4 text-[var(--brand-text-secondary)] text-center lg:text-left">
      {children}
    </div>
  </section>
);

export const metadata = {
  title: 'AGB - L.A. Agency Vienna',
  description: 'Allgemeine Geschäftsbedingungen der L.A. Agency Vienna',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <LegalPageLayout 
        title="Allgemeine Geschäftsbedingungen"
        subtitle={`Stand: ${new Date().toLocaleDateString('de-AT')}`}
      >
        <Section title="§ 1 Geltungsbereich und Vertragspartner">
          <p>
            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge und Leistungen 
            der L.A. Agency, Inhaberin Lidija Ajvazi (nachfolgend &quot;Agentur&quot;), in den Bereichen 
            Marketing, Public Relations, Eventmanagement, Product Relaunches, Projektmanagement und Content Produktion.
          </p>
          <p>
            Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Auftraggebers 
            werden nur dann Vertragsbestandteil, wenn und soweit die Agentur ihrer Geltung ausdrücklich 
            schriftlich zugestimmt hat.
          </p>
          <p>
            Diese AGB gelten auch für alle künftigen Geschäftsbeziehungen, auch wenn sie nicht nochmals 
            ausdrücklich vereinbart werden.
          </p>
        </Section>

        <Section title="§ 2 Vertragsschluss und Angebote">
          <p>
            Angebote der Agentur sind freibleibend und unverbindlich, soweit nicht ausdrücklich 
            etwas anderes schriftlich vereinbart wird. Ein Vertrag kommt erst durch die schriftliche 
            Auftragsbestätigung der Agentur oder durch Beginn der Arbeiten zustande.
          </p>
          <p>
            Mündliche Nebenabreden bedürfen zu ihrer Wirksamkeit der schriftlichen Bestätigung durch 
            die Agentur. Dies gilt auch für Änderungen oder Ergänzungen dieser AGB.
          </p>
          <p>
            Die Agentur behält sich das Eigentumsrecht und das Urheberrecht an allen abgegebenen 
            Angeboten, Kostenvoranschlägen, Entwürfen und ähnlichen Unterlagen vor. Diese dürfen Dritten 
            nicht zugänglich gemacht werden.
          </p>
        </Section>

        <Section title="§ 3 Leistungsumfang und -durchführung">
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
            Die Agentur ist berechtigt, Teilleistungen durch qualifizierte Dritte (Subunternehmer) 
            erbringen zu lassen, sofern dies nicht ausdrücklich ausgeschlossen wurde.
          </p>
        </Section>

        <Section title="§ 4 Vergütung und Zahlungsbedingungen">
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
        </Section>

        <Section title="§ 5 Mitwirkungspflichten des Auftraggebers">
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
        </Section>

        <Section title="§ 6 Urheberrecht und Nutzungsrechte">
          <p>
            Alle von der Agentur erstellten Konzepte, Entwürfe, Designs, Texte und sonstigen 
            Arbeitsergebnisse unterliegen dem Urheberrecht und bleiben geistiges Eigentum der Agentur.
          </p>
          <p>
            Der Auftraggeber erhält nach vollständiger Bezahlung der vereinbarten Vergütung die 
            vereinbarten Nutzungsrechte. Soweit nicht anders vereinbart, werden einfache Nutzungsrechte 
            für den vereinbarten Verwendungszweck eingeräumt.
          </p>
          <p>
            Die Übertragung von Nutzungsrechten an Dritte oder eine über den vereinbarten Zweck 
            hinausgehende Nutzung bedarf der vorherigen schriftlichen Zustimmung der Agentur 
            und kann mit zusätzlichen Lizenzgebühren verbunden sein.
          </p>
          <p>
            Die Agentur ist berechtigt, die erbrachten Leistungen zu Referenzzwecken zu verwenden 
            und zu veröffentlichen, soweit nicht ausdrücklich etwas anderes vereinbart wurde.
          </p>
        </Section>

        <Section title="§ 7 Vertraulichkeit und Datenschutz">
          <p>
            Beide Vertragsparteien verpflichten sich, alle ihnen im Rahmen der Geschäftsbeziehung 
            bekannt gewordenen vertraulichen Informationen, Geschäfts- und Betriebsgeheimnisse 
            streng vertraulich zu behandeln und nicht an Dritte weiterzugeben.
          </p>
          <p>
            Diese Verpflichtung besteht auch nach Beendigung des Vertragsverhältnisses fort und 
            gilt für alle Mitarbeiter und Subunternehmer der Agentur entsprechend.
          </p>
          <p>
            Die Agentur verpflichtet sich, die geltenden Datenschutzbestimmungen einzuhalten 
            und personenbezogene Daten nur im Rahmen der Auftragserfüllung zu verarbeiten.
          </p>
        </Section>

        <Section title="§ 8 Termine und Fristen">
          <p>
            Vereinbarte Termine und Fristen sind nur dann verbindlich, wenn sie ausdrücklich 
            schriftlich als verbindlich bezeichnet wurden. Ansonsten handelt es sich um 
            unverbindliche Planungstermine.
          </p>
          <p>
            Termine und Fristen verlängern sich angemessen bei Eintritt unvorhersehbarer Hindernisse, 
            die die Agentur nicht zu vertreten hat, sowie bei verspäteter oder unvollständiger 
            Mitwirkung des Auftraggebers.
          </p>
          <p>
            Höhere Gewalt, Arbeitskampf, behördliche Maßnahmen und ähnliche Umstände berechtigen 
            die Agentur, vereinbarte Termine entsprechend zu verschieben.
          </p>
        </Section>

        <Section title="§ 9 Haftung und Gewährleistung">
          <p>
            Die Agentur haftet nur für Schäden, die auf Vorsatz oder grober Fahrlässigkeit beruhen. 
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
            Mängelrügen ist die Agentur zunächst zur Nachbesserung berechtigt.
          </p>
        </Section>

        <Section title="§ 10 Kündigung">
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
        </Section>

        <Section title="§ 11 Höhere Gewalt">
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
        </Section>

        <Section title="§ 12 Schlussbestimmungen">
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
        </Section>
        
        <Section title="Kontakt bei Fragen zu den AGB">
            <p>
              <strong>L.A. Agency</strong><br />
              Lidija Ajvazi<br />
              Neubaugasse 55/2/4<br />
              1070 Wien<br />
              Österreich<br />
              <br />
              <strong>E-Mail:</strong> <a href="mailto:hello@la-agency-vienna.com" className="hover:text-[var(--brand-accent-primary)] transition-colors">hello@la-agency-vienna.com</a><br />
              <strong>Telefon:</strong> <a href="tel:+436643782030" className="hover:text-[var(--brand-accent-primary)] transition-colors">+43 664 3782030</a>
            </p>
        </Section>
      </LegalPageLayout>
      <Footer />
    </>
  );
}