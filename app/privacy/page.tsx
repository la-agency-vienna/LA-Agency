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

const SubSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[var(--brand-text-primary)] mt-6 mb-3">
        {title}
      </h3>
      {children}
    </div>
  );

export const metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklärung der L.A. Agency Vienna',
};

export default function PrivacyPage() {
  const responsibleParty = {
    name: 'L.A. Agency',
    owner: 'Lidija Ajvazi',
    street: 'Neubaugasse 55/2/4',
    city: '1070 Wien',
    country: 'Österreich',
    phone: '+43 664 3782030',
    email: 'hello@la-agency-vienna.com',
  };

  return (
    <>
      <Header />
      <LegalPageLayout 
        title="Datenschutzerklärung"
        subtitle={`Stand: ${new Date().toLocaleDateString('de-AT')}`}
      >
        <Section title="1. Datenschutz auf einen Blick">
            <SubSection title="Allgemeine Hinweise">
                <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
                denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz 
                entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </p>
            </SubSection>

            <SubSection title="Datenerfassung auf dieser Website">
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
            </SubSection>
        </Section>

        <Section title="2. Hosting und E-Mail-Versand">
            <SubSection title="Hosting mit Vercel">
                <p>
                    Wir hosten unsere Website bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
                    Wenn Sie unsere Website besuchen, erfasst Vercel verschiedene Logfiles inklusive Ihrer IP-Adressen.
                    Details finden Sie in der Datenschutzerklärung von Vercel: 
                    <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" 
                        className="underline hover:text-[var(--brand-accent-primary)] transition-colors ml-1">
                    https://vercel.com/legal/privacy-policy
                    </a>
                </p>
            </SubSection>
            <SubSection title="E-Mail-Versand mit Resend">
                <p>
                    Für den Versand von E-Mails (z.B. über das Kontaktformular) nutzen wir Resend, Inc., 2261 Market Street #4818, San Francisco, CA 94114, USA. 
                    Resend verarbeitet Ihre E-Mail-Adresse und Nachrichteninhalte zur Zustellung.
                    Details finden Sie in der Datenschutzerklärung von Resend: 
                    <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" 
                        className="underline hover:text-[var(--brand-accent-primary)] transition-colors ml-1">
                    https://resend.com/legal/privacy-policy
                    </a>
                </p>
            </SubSection>
        </Section>

        <Section title="3. Allgemeine Hinweise und Pflichtinformationen">
            <SubSection title="Datenschutz">
                <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
                Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften 
                sowie dieser Datenschutzerklärung.
                </p>
            </SubSection>

            <SubSection title="Hinweis zur verantwortlichen Stelle">
                <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="bg-[var(--brand-bg-secondary)]/50 border border-[var(--brand-accent-primary)]/10 p-6 rounded-lg text-left">
                    <p className="font-semibold text-[var(--brand-text-primary)]">{responsibleParty.name}</p>
                    <p>{responsibleParty.owner}</p>
                    <p>{responsibleParty.street}</p>
                    <p>{responsibleParty.city}</p>
                    <p>{responsibleParty.country}</p>
                    <br />
                    <p>
                        Telefon: <a href={`tel:${responsibleParty.phone.replace(/\s/g, '')}`} className="hover:text-[var(--brand-accent-primary)] transition-colors">{responsibleParty.phone}</a>
                    </p>
                    <p>
                        E-Mail: <a href={`mailto:${responsibleParty.email}`} className="hover:text-[var(--brand-accent-primary)] transition-colors">{responsibleParty.email}</a>
                    </p>
                </div>
            </SubSection>

            <SubSection title="Speicherdauer">
                <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, 
                verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. 
                Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung 
                widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für 
                die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche 
                Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                </p>
            </SubSection>

            <SubSection title="Widerruf Ihrer Einwilligung zur Datenverarbeitung">
                <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können 
                eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf 
                erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>
            </SubSection>
        </Section>

        <Section title="4. Datenerfassung auf dieser Website">
            <SubSection title="Kontaktformular und E-Mail-Kontakt">
                <p>
                Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                Anfrageformular bzw. Ihrer E-Mail inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
                wir nicht ohne Ihre Einwilligung weiter.
                </p>
            </SubSection>

            <SubSection title="Server-Log-Dateien">
                <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp/-version, Betriebssystem, 
                Referrer URL, Hostname, Uhrzeit, IP-Adresse. Eine Zusammenführung dieser Daten mit anderen 
                Datenquellen wird nicht vorgenommen.
                </p>
            </SubSection>
        </Section>

        <Section title="5. Analyse-Tools">
            <SubSection title="Vercel Web Analytics">
                <p>
                Diese Website nutzt Vercel Web Analytics zur anonymisierten Analyse des Nutzerverhaltens. 
                Vercel verwendet keine Cookies und erfasst keine personenbezogenen Daten, die eine 
                Rückverfolgung zu einzelnen Nutzern ermöglichen. Die Analyse dient der Optimierung unserer Website.
                Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel.
                </p>
            </SubSection>
        </Section>

        <Section title="6. Ihre Rechte als betroffene Person">
            <p>
            Im Rahmen der geltenden gesetzlichen Bestimmungen haben Sie jederzeit das Recht auf unentgeltliche 
            Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den 
            Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. 
            Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
            </p>
            <p>
            Ihnen steht zudem ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. In Österreich ist dies die Datenschutzbehörde (www.dsb.gv.at).
            </p>
        </Section>
      </LegalPageLayout>
      <Footer />
    </>
  );
} 