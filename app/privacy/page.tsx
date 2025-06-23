import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Background } from '@/components/Background';

export const metadata = {
  title: 'Datenschutzerklärung - L.A. Agency Vienna',
  description: 'Datenschutzerklärung der L.A. Agency Vienna',
};

export default function PrivacyPage() {
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
                Datenschutzerklärung
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
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">1. Datenschutz auf einen Blick</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">Allgemeine Hinweise</h3>
                <p className="mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                  Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
                  denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz 
                  entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">Datenerfassung auf dieser Website</h3>
                <p className="mb-4">
                  <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                  können Sie dem Abschnitt &quot;Hinweis zur Verantwortlichen Stelle&quot; in dieser Datenschutzerklärung entnehmen.
                </p>
                
                <p className="mb-4">
                  <strong>Wie erfassen wir Ihre Daten?</strong><br />
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
                  z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
                
                <p className="mb-4">
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere 
                  IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem 
                  oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                </p>

                <p className="mb-4">
                  <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                  Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>

                <p className="mb-4">
                  <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                  gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
                  oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, 
                  können Sie diese jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten 
                  Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren 
                  steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">2. Hosting</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">Vercel</h3>
                <p className="mb-4">
                  Wir hosten die Inhalte unserer Website bei Vercel. Anbieter ist die Vercel Inc., 
                  340 S Lemon Ave #4133, Walnut, CA 91789, USA (nachfolgend &quot;Vercel&quot;).
                </p>
                <p className="mb-4">
                  Wenn Sie unsere Website besuchen, erfasst Vercel verschiedene Logfiles inklusive Ihrer IP-Adressen. 
                  Details entnehmen Sie der Datenschutzerklärung von Vercel: 
                  <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" 
                     className="text-[#ffb366] hover:text-[#ff9933] underline ml-1">
                    https://vercel.com/legal/privacy-policy
                  </a>
                </p>
                <p className="mb-4">
                  Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein 
                  berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine 
                  entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage 
                  von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung 
                  von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) 
                  im Sinne des TTDSG umfasst.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">Datenschutz</h3>
                <p className="mb-4">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
                  Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen 
                  sowie dieser Datenschutzerklärung.
                </p>
                <p className="mb-4">
                  Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene 
                  Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende 
                  Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert 
                  auch, wie und zu welchem Zweck das geschieht.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">Hinweis zur verantwortlichen Stelle</h3>
                <p className="mb-4">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="bg-white/5 p-4 rounded-lg mb-4">
                  <p>
                    <strong>Club des Wiener Renn-Verein</strong><br />
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
                <p className="mb-4">
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit 
                  anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, 
                  E-Mail-Adressen o. Ä.) entscheidet.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">Speicherdauer</h3>
                <p className="mb-4">
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, 
                  verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. 
                  Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung 
                  widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für 
                  die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche 
                  Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                <p className="mb-4">
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können 
                  eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf 
                  erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">4. Datenerfassung auf dieser Website</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">Server-Log-Dateien</h3>
                <p className="mb-4">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                  die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="mb-4">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung 
                  dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes 
                  Interesse an der technisch fehlerfreien Darstellung und der Optimierung unserer Website – hierzu 
                  müssen die Server-Log-Files erfasst werden.
                </p>
                
                <h3 className="text-xl font-semibold text-white mb-3">Kontaktformular</h3>
                <p className="mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                  Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                  der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
                  wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="mb-4">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
                  sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung 
                  vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung 
                  auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten 
                  Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) 
                  sofern diese abgefragt wurde.
                </p>
                <p className="mb-4">
                  Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur 
                  Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die 
                  Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). 
                  Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">E-Mail-Versand mit Resend</h3>
                <p className="mb-4">
                  Für den Versand von E-Mails nutzen wir den Dienst Resend (Resend, Inc., 2261 Market Street 
                  #4818, San Francisco, CA 94114, USA). Wenn Sie unser Kontaktformular nutzen, werden Ihre 
                  Daten an Resend übertragen, um die E-Mail-Zustellung zu gewährleisten.
                </p>
                <p className="mb-4">
                  Resend verarbeitet dabei folgende Daten: E-Mail-Adresse des Absenders und Empfängers, 
                  Betreff und Inhalt der E-Mail sowie Metadaten wie Zeitstempel und IP-Adresse.
                </p>
                <p className="mb-4">
                  Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse 
                  an zuverlässiger E-Mail-Zustellung) bzw. Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
                </p>
                <p className="mb-4">
                  Weitere Informationen finden Sie in der Datenschutzerklärung von Resend: 
                  <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" 
                     className="text-[#ffb366] hover:text-[#ff9933] underline ml-1">
                    https://resend.com/legal/privacy-policy
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">5. Analyse-Tools und Werbung</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">Vercel Web Analytics</h3>
                <p className="mb-4">
                  Diese Website nutzt Vercel Web Analytics zur Analyse des Nutzerverhaltens. Anbieter ist 
                  Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
                </p>
                <p className="mb-4">
                  Vercel Web Analytics erfasst anonymisierte Daten über Ihre Nutzung unserer Website, 
                  einschließlich Seitenaufrufe, Verweildauer und Klickverhalten. Diese Daten werden 
                  verwendet, um die Leistung und Benutzerfreundlichkeit unserer Website zu verbessern.
                </p>
                <p className="mb-4">
                  Vercel Web Analytics verwendet keine Cookies und sammelt keine personenbezogenen Daten. 
                  Die erfassten Daten sind vollständig anonymisiert und können nicht zu einzelnen Nutzern 
                  zurückverfolgt werden.
                </p>
                <p className="mb-4">
                  Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser 
                  berechtigtes Interesse liegt in der Analyse, Optimierung und dem wirtschaftlichen 
                  Betrieb unserer Website.
                </p>
                <p className="mb-4">
                  Weitere Informationen zu Vercel Web Analytics finden Sie unter: 
                  <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer" 
                     className="text-[#ffb366] hover:text-[#ff9933] underline ml-1">
                    https://vercel.com/docs/analytics/privacy-policy
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">6. Ihre Rechte</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">Auskunftsrecht</h3>
                <p className="mb-4">
                  Sie haben das Recht, jederzeit unentgeltlich Auskunft über Herkunft, Empfänger und Zweck 
                  Ihrer gespeicherten personenbezogenen Daten zu erhalten.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">Recht auf Berichtigung und Löschung</h3>
                <p className="mb-4">
                  Sie haben das Recht, die Berichtigung unrichtiger oder die Vervollständigung unvollständiger 
                  personenbezogener Daten zu verlangen. Außerdem haben Sie das Recht auf Löschung Ihrer 
                  personenbezogenen Daten, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">Recht auf Einschränkung der Verarbeitung</h3>
                <p className="mb-4">
                  Sie haben das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung 
                  Ihrer personenbezogenen Daten zu verlangen.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">Beschwerderecht</h3>
                <p className="mb-4">
                  Sie haben das Recht, sich bei einer Aufsichtsbehörde über die Verarbeitung Ihrer 
                  personenbezogenen Daten durch uns zu beschweren. Zuständige Aufsichtsbehörde in 
                  Österreich ist die Datenschutzbehörde.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">7. Kontakt</h2>
                <p className="mb-4">
                  Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:
                </p>
                <div className="bg-white/5 p-4 rounded-lg">
                  <p>
                    <strong>Club des Wiener Renn-Verein</strong><br />
                    Palais & Event Management<br />
                    Lidija Ajvazi<br />
                    E-Mail: info@palais-esterhazy.net<br />
                    Telefon: +43 664 3782030
                  </p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </>
  );
} 