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
                Datenschutzerklärung
              </h1>
              <p className="text-white/70 text-lg">
                Stand: {new Date().toLocaleDateString('de-AT')}
              </p>
            </div>

            {/* Content */}
            <div className="glass-card p-8 md:p-12 space-y-8 text-white/80 leading-relaxed">
              
              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">1. Datenschutz auf einen Blick</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">Allgemeine Hinweise</h3>
                <p className="mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                  Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
                  denen Sie persönlich identifiziert werden können.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">Datenerfassung auf dieser Website</h3>
                <p className="mb-4">
                  <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                  können Sie dem Abschnitt "Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">2. Hosting</h2>
                <p className="mb-4">
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>
                
                <h3 className="text-xl font-semibold text-white mb-3">Vercel</h3>
                <p className="mb-4">
                  Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA (nachfolgend "Vercel").
                  Wenn Sie unsere Website besuchen, erfasst Vercel verschiedene Logfiles inklusive Ihrer IP-Adressen.
                </p>
                <p className="mb-4">
                  Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein 
                  berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
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

                <h3 className="text-xl font-semibold text-white mb-3">Hinweis zur verantwortlichen Stelle</h3>
                <p className="mb-4">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="bg-white/5 p-4 rounded-lg mb-4">
                  <p>
                    <strong>L.A. Agency Vienna</strong><br />
                    [Ihre Adresse]<br />
                    Wien, Österreich<br />
                    <br />
                    Telefon: +43 1 234 5678<br />
                    E-Mail: hello@la-agency.vienna
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">4. Datenerfassung auf dieser Website</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">Kontaktformular</h3>
                <p className="mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                  Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                  der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
                <p className="mb-4">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
                  sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung 
                  vorvertraglicher Maßnahmen erforderlich ist.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">E-Mail-Versand mit Resend</h3>
                <p className="mb-4">
                  Für den Versand von E-Mails nutzen wir den Dienst Resend (Resend, Inc.). 
                  Wenn Sie unser Kontaktformular nutzen, werden Ihre Daten an Resend übertragen, 
                  um die E-Mail-Zustellung zu gewährleisten.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">5. Ihre Rechte</h2>
                <p className="mb-4">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck 
                  Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, 
                  die Berichtigung oder Löschung dieser Daten zu verlangen.
                </p>
                <p className="mb-4">
                  Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese 
                  jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten 
                  Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#ffb366] mb-4">6. Kontakt</h2>
                <p className="mb-4">
                  Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:
                </p>
                <div className="bg-white/5 p-4 rounded-lg">
                  <p>
                    E-Mail: hello@la-agency.vienna<br />
                    Telefon: +43 1 234 5678
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