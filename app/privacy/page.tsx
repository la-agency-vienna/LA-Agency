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
    <div className="space-y-6">{children}</div>
  </section>
);

const LegalSubSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div>
    <h3 className="text-2xl font-semibold text-[var(--brand-text-primary)] mb-4 text-center lg:text-left">{title}</h3>
    <div className="text-lg text-[var(--brand-text-secondary)] space-y-4">{children}</div>
  </div>
);

export const metadata = {
  title: 'Datenschutzerklärung - L.A. Agency Vienna',
  description: 'Datenschutzerklärung der L.A. Agency Vienna',
};

export default function PrivacyPage() {
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
                  Datenschutzerklärung
                </h1>
                <p className="text-lg text-center lg:text-left text-[var(--brand-text-secondary)]">
                  Stand: {new Date().toLocaleDateString('de-AT')}
                </p>
              </div>

              {/* Content */}
              <div className="text-[var(--brand-text-secondary)] leading-relaxed space-y-12">

                <LegalSection title="1. Datenschutz auf einen Blick">
                  <LegalSubSection title="Allgemeine Hinweise">
                    <p>
                      Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                      Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
                      denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz 
                      entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                    </p>
                  </LegalSubSection>

                  <LegalSubSection title="Datenerfassung auf dieser Website">
                    <p>
                      <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                      Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                      können Sie dem Abschnitt &quot;Hinweis zur Verantwortlichen Stelle&quot; in dieser Datenschutzerklärung entnehmen.
                    </p>
                    
                    <p>
                      <strong>Wie erfassen wir Ihre Daten?</strong><br />
                      Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
                      z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                    </p>
                    
                    <p>
                      Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere 
                      IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem 
                      oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                    </p>

                    <p>
                      <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                      Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                      Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                    </p>

                    <p>
                      <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
                      Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                      gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
                      oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, 
                      können Sie diese jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten 
                      Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren 
                      steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                    </p>
                  </LegalSubSection>
                </LegalSection>

                <LegalSection title="2. Hosting">
                  <LegalSubSection title="Vercel">
                    <p>
                      Wir hosten die Inhalte unserer Website bei Vercel. Anbieter ist die Vercel Inc., 
                      340 S Lemon Ave #4133, Walnut, CA 91789, USA (nachfolgend &quot;Vercel&quot;).
                    </p>
                    <p>
                      Wenn Sie unsere Website besuchen, erfasst Vercel verschiedene Logfiles inklusive Ihrer IP-Adressen. 
                      Details entnehmen Sie der Datenschutzerklärung von Vercel: 
                      <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" 
                         className="text-[var(--brand-accent-primary)] hover:text-[var(--brand-accent-dark)] underline ml-1">
                        https://vercel.com/legal/privacy-policy
                      </a>
                    </p>
                    <p>
                      Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein 
                      berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine 
                      entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage 
                      von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung 
                      von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) 
                      im Sinne des TTDSG umfasst.
                    </p>
                  </LegalSubSection>
                </LegalSection>

                <LegalSection title="3. Allgemeine Hinweise und Pflichtinformationen">
                  <LegalSubSection title="Datenschutz">
                    <p>
                      Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
                      Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen 
                      sowie dieser Datenschutzerklärung.
                    </p>
                    <p>
                      Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene 
                      Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende 
                      Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert 
                      auch, wie und zu welchem Zweck das geschieht.
                    </p>
                  </LegalSubSection>

                  <LegalSubSection title="Hinweis zur verantwortlichen Stelle">
                    <p>
                      Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                    </p>
                    <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                      <p>
                        <strong className="font-semibold text-[var(--brand-text-primary)]">Club des Wiener Renn-Verein</strong><br />
                        Palais & Event Management<br />
                        Lidija Ajvazi<br />
                        Palais Esterházy<br />
                        Wallnerstraße 4 / WA05<br />
                        1010 Wien – Austria<br />
                        <br />
                        Telefon: +43 664 3782030<br />
                        E-Mail: info@palais-esterhazy.net<br />
                        Website: www.palais-esterhazy.net
                      </p>
                    </div>
                    <p>
                      Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit 
                      anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, 
                      E-Mail-Adressen o. Ä.) entscheidet.
                    </p>
                  </LegalSubSection>

                  <LegalSubSection title="Speicherdauer">
                    <p>
                      Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, 
                      verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. 
                      Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung 
                      widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für 
                      die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche 
                      Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                    </p>
                  </LegalSubSection>

                  <LegalSubSection title="Widerruf Ihrer Einwilligung zur Datenverarbeitung">
                    <p>
                      Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können 
                      eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf 
                      erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                    </p>
                  </LegalSubSection>
                </LegalSection>

                <LegalSection title="4. Datenerfassung auf dieser Website">
                  <LegalSubSection title="Server-Log-Dateien">
                    <p>
                      Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                      die Ihr Browser automatisch an uns übermittelt. Dies sind:
                    </p>
                    <ul className="list-disc list-inside space-y-1 pl-4">
                      <li>Browsertyp und Browserversion</li>
                      <li>verwendetes Betriebssystem</li>
                      <li>Referrer URL</li>
                      <li>Hostname des zugreifenden Rechners</li>
                      <li>Uhrzeit der Serveranfrage</li>
                      <li>IP-Adresse</li>
                    </ul>
                    <p>
                      Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung 
                      dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes 
                      Interesse an der technisch fehlerfreien Darstellung und der Optimierung unserer Website – hierzu 
                      müssen die Server-Log-Files erfasst werden.
                    </p>
                  </LegalSubSection>
                  
                  <LegalSubSection title="Kontaktformular">
                    <p>
                      Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                      Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                      der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
                      wir nicht ohne Ihre Einwilligung weiter.
                    </p>
                    <p>
                      Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
                      sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung 
                      vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung 
                      auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten 
                      Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) 
                      sofern diese abgefragt wurde.
                    </p>
                    <p>
                      Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur 
                      Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die 
                      Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). 
                      Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                    </p>
                  </LegalSubSection>

                  <LegalSubSection title="E-Mail-Versand mit Resend">
                    <p>
                      Für den Versand von E-Mails nutzen wir den Dienst Resend (Resend, Inc., 2261 Market Street 
                      #4818, San Francisco, CA 94114, USA). Wenn Sie unser Kontaktformular nutzen, werden Ihre 
                      Daten an Resend übertragen, um die E-Mail-Zustellung zu gewährleisten.
                    </p>
                    <p>
                      Resend verarbeitet dabei folgende Daten: E-Mail-Adresse des Absenders und Empfängers, 
                      Betreff und Inhalt der E-Mail sowie Metadaten wie Zeitstempel und IP-Adresse.
                    </p>
                    <p>
                      Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse 
                      an zuverlässiger E-Mail-Zustellung) bzw. Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
                    </p>
                    <p>
                      Weitere Informationen finden Sie in der Datenschutzerklärung von Resend: 
                      <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" 
                         className="text-[var(--brand-accent-primary)] hover:text-[var(--brand-accent-dark)] underline ml-1">
                        https://resend.com/legal/privacy-policy
                      </a>
                    </p>
                  </LegalSubSection>
                </LegalSection>

                <LegalSection title="5. Analyse-Tools und Werbung">
                  <LegalSubSection title="Vercel Web Analytics">
                    <p>
                      Diese Website nutzt Vercel Web Analytics zur Analyse des Nutzerverhaltens. Anbieter ist 
                      Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
                    </p>
                    <p>
                      Vercel Web Analytics erfasst anonymisierte Daten über Ihre Nutzung unserer Website, 
                      einschließlich Seitenaufrufe, Verweildauer und Klickverhalten. Diese Daten werden 
                      verwendet, um die Leistung und Benutzerfreundlichkeit unserer Website zu verbessern.
                    </p>
                    <p>
                      Vercel Web Analytics verwendet keine Cookies und sammelt keine personenbezogenen Daten. 
                      Die erfassten Daten sind vollständig anonymisiert und können nicht zu einzelnen Nutzern 
                      zurückverfolgt werden.
                    </p>
                    <p>
                      Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser 
                      berechtigtes Interesse liegt in der Analyse, Optimierung und dem wirtschaftlichen 
                      Betrieb unserer Website.
                    </p>
                    <p>
                      Weitere Informationen zu Vercel Web Analytics finden Sie unter: 
                      <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer" 
                         className="text-[var(--brand-accent-primary)] hover:text-[var(--brand-accent-dark)] underline ml-1">
                        https://vercel.com/docs/analytics/privacy-policy
                      </a>
                    </p>
                  </LegalSubSection>
                </LegalSection>

                <LegalSection title="6. Ihre Rechte">
                  <LegalSubSection title="Auskunftsrecht">
                    <p>
                      Sie haben das Recht, jederzeit unentgeltlich Auskunft über Herkunft, Empfänger und Zweck 
                      Ihrer gespeicherten personenbezogenen Daten zu erhalten.
                    </p>
                  </LegalSubSection>

                  <LegalSubSection title="Recht auf Berichtigung und Löschung">
                    <p>
                      Sie haben das Recht, die Berichtigung unrichtiger oder die Vervollständigung unvollständiger 
                      personenbezogener Daten zu verlangen. Außerdem haben Sie das Recht auf Löschung Ihrer 
                      personenbezogenen Daten, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
                    </p>
                  </LegalSubSection>

                  <LegalSubSection title="Recht auf Einschränkung der Verarbeitung">
                    <p>
                      Sie haben das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung 
                      Ihrer personenbezogenen Daten zu verlangen.
                    </p>
                  </LegalSubSection>

                  <LegalSubSection title="Beschwerderecht">
                    <p>
                      Sie haben das Recht, sich bei einer Aufsichtsbehörde über die Verarbeitung Ihrer 
                      personenbezogenen Daten durch uns zu beschweren. Zuständige Aufsichtsbehörde in 
                      Österreich ist die Datenschutzbehörde.
                    </p>
                  </LegalSubSection>
                </LegalSection>

                <LegalSection title="7. Kontakt">
                  <p>
                    Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:
                  </p>
                  <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                    <p>
                      <strong className="font-semibold text-[var(--brand-text-primary)]">Club des Wiener Renn-Verein</strong><br />
                      Palais & Event Management<br />
                      Lidija Ajvazi<br />
                      E-Mail: info@palais-esterhazy.net<br />
                      Telefon: +43 664 3782030
                    </p>
                  </div>
                </LegalSection>

              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 