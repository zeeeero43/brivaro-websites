import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Brivaro - Informationen zur Datenverarbeitung gemäß DSGVO",
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
          <p className="text-sm text-gray-600 mb-8">
            Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          {/* 1. Verantwortlicher */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Verantwortlicher</h2>
            <p className="mb-4">
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer
              datenschutzrechtlicher Bestimmungen ist:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold">Kaan Kaya</p>
              <p>Heinrich-Lübke-Straße 1</p>
              <p>50181 Bedburg</p>
              <p>Deutschland</p>
              <p className="mt-3">
                <strong>Telefon:</strong> +49 176 44607369
              </p>
              <p>
                <strong>E-Mail:</strong>{" "}
                <a href="mailto:info@brivaro.de" className="text-primary hover:underline">
                  info@brivaro.de
                </a>
              </p>
              <p className="mt-3">
                <strong>USt-ID:</strong> DE363473918
              </p>
            </div>
          </section>

          {/* 2. Allgemeine Hinweise */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Allgemeine Hinweise</h2>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          {/* 3. Datenerfassung auf dieser Website */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Datenerfassung auf dieser Website</h2>

            <h3 className="text-xl font-semibold mb-3">3.1 Wer ist verantwortlich für die Datenerfassung?</h3>
            <p className="mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
              Dessen Kontaktdaten können Sie dem Abschnitt „Verantwortlicher" in dieser
              Datenschutzerklärung entnehmen.
            </p>

            <h3 className="text-xl font-semibold mb-3">3.2 Wie erfassen wir Ihre Daten?</h3>
            <p className="mb-4">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
              Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular
              oder bei einer Terminbuchung eingeben.
            </p>
            <p className="mb-4">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der
              Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten
              (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>

            <h3 className="text-xl font-semibold mb-3">3.3 Wofür nutzen wir Ihre Daten?</h3>
            <p className="mb-4">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website
              zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
          </section>

          {/* 4. Hosting */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Hosting und Content Delivery</h2>
            <h3 className="text-xl font-semibold mb-3">4.1 Externes Hosting</h3>
            <p className="mb-4">
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser
              Website erfasst werden, werden auf den Servern des Hosters gespeichert.
            </p>
            <div className="bg-blue-50 border-l-4 border-primary p-4 mb-4">
              <p className="font-semibold mb-2">Hosting-Anbieter:</p>
              <p>Strato AG</p>
              <p>Otto-Ostrowski-Straße 7</p>
              <p>10249 Berlin, Deutschland</p>
            </div>
            <p className="mb-4">
              Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
              potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse
              einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots
              durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p className="mb-4">
              Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung
              seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf
              diese Daten befolgen.
            </p>
          </section>

          {/* 5. Server-Log-Dateien */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Server-Log-Dateien</h2>
            <p className="mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in
              sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mb-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>
            <p className="mb-4">
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien
              Darstellung und der Optimierung seiner Website.
            </p>
          </section>

          {/* 6. Kontakt und Terminbuchung */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Kontakt und Terminbuchung</h2>

            <h3 className="text-xl font-semibold mb-3">6.1 Cal.com (Terminbuchungstool)</h3>
            <p className="mb-4">
              Auf unserer Website verwenden wir Cal.com, ein Open-Source-Tool für die Terminbuchung.
              Anbieter ist Cal.com, Inc., 2261 Market Street, San Francisco, CA 94114, USA.
            </p>
            <p className="mb-4">
              Wenn Sie einen Termin über Cal.com buchen, werden die von Ihnen eingegebenen Daten
              (Name, E-Mail-Adresse, Telefonnummer, gewünschter Termin) an Cal.com übermittelt und
              dort gespeichert.
            </p>
            <p className="mb-4">
              <strong>Rechtsgrundlage:</strong> Die Nutzung von Cal.com erfolgt auf Grundlage
              von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an einer effizienten Terminverwaltung).
            </p>
            <p className="mb-4">
              <strong>Datentransfer in die USA:</strong> Cal.com ist Teilnehmer des EU-US Data
              Privacy Framework. Zusätzlich haben wir Standardvertragsklauseln (SCC) mit Cal.com
              abgeschlossen.
            </p>
            <p className="mb-4">
              Weitere Informationen finden Sie in der Datenschutzerklärung von Cal.com:{" "}
              <a
                href="https://cal.com/de/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://cal.com/de/privacy
              </a>
            </p>
          </section>

          {/* 7. Google Fonts */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Google Fonts (lokales Hosting)</h2>
            <p className="mb-4">
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten sogenannte
              Google Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal
              installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.
            </p>
            <p className="mb-4">
              Weitere Informationen zu Google Fonts finden Sie unter{" "}
              <a
                href="https://developers.google.com/fonts/faq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://developers.google.com/fonts/faq
              </a>
            </p>
          </section>

          {/* 8. Google Analytics (vorbereitet) */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Analyse-Tools und Werbung</h2>

            <h3 className="text-xl font-semibold mb-3">8.1 Google Analytics 4</h3>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
              <p className="font-semibold">Hinweis: Google Analytics wird derzeit nicht eingesetzt.</p>
              <p className="text-sm text-gray-700 mt-2">
                Bei zukünftiger Nutzung werden Sie durch ein Cookie-Banner um Ihre Einwilligung gebeten.
              </p>
            </div>
            <p className="mb-4">
              Diese Website kann Google Analytics 4 verwenden, einen Webanalysedienst der
              Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className="mb-4">
              <strong>Umfang der Verarbeitung:</strong> Google Analytics verwendet Cookies,
              die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch das
              Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der
              Regel an einen Server von Google in den USA übertragen und dort gespeichert.
            </p>
            <p className="mb-4">
              <strong>IP-Anonymisierung:</strong> Auf dieser Website ist die IP-Anonymisierung
              aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten
              der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den
              Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt.
            </p>
            <p className="mb-4">
              <strong>Rechtsgrundlage:</strong> Die Nutzung von Google Analytics erfolgt nur
              mit Ihrer ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO und
              § 25 Abs. 1 TDDDG.
            </p>
            <p className="mb-4">
              <strong>Datentransfer in die USA:</strong> Google ist Teilnehmer des EU-US Data
              Privacy Framework. Die Datenübermittlung in die USA ist durch Standardvertragsklauseln
              (SCC) abgesichert.
            </p>
            <p className="mb-4">
              <strong>Speicherdauer:</strong> Die Speicherdauer beträgt maximal 14 Monate.
            </p>
            <p className="mb-4">
              <strong>Widerruf:</strong> Sie können Ihre Einwilligung jederzeit widerrufen,
              indem Sie in den Cookie-Einstellungen Ihre Präferenzen ändern.
            </p>
            <p className="mb-4">
              Weitere Informationen zu Google Analytics 4:{" "}
              <a
                href="https://support.google.com/analytics/answer/6004245"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://support.google.com/analytics/answer/6004245
              </a>
            </p>
          </section>

          {/* 9. SSL-Verschlüsselung */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. SSL- bzw. TLS-Verschlüsselung</h2>
            <p className="mb-4">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
              Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
              senden, eine SSL- bzw. TLS-Verschlüsselung.
            </p>
            <p className="mb-4">
              Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers
              von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
            <p className="mb-4">
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie
              an uns übermitteln, nicht von Dritten mitgelesen werden.
            </p>
          </section>

          {/* 10. Ihre Rechte */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Ihre Rechte als betroffene Person</h2>
            <p className="mb-4">
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden
              personenbezogenen Daten:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Recht auf Auskunft (Art. 15 DSGVO)</h4>
                <p className="text-sm">
                  Sie haben das Recht, Auskunft über Ihre von uns verarbeiteten personenbezogenen
                  Daten zu verlangen.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Recht auf Berichtigung (Art. 16 DSGVO)</h4>
                <p className="text-sm">
                  Sie haben das Recht, unverzüglich die Berichtigung Sie betreffender unrichtiger
                  personenbezogener Daten zu verlangen.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Recht auf Löschung (Art. 17 DSGVO)</h4>
                <p className="text-sm">
                  Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen,
                  sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</h4>
                <p className="text-sm">
                  Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
                  Daten zu verlangen.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</h4>
                <p className="text-sm">
                  Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen und
                  maschinenlesbaren Format zu erhalten.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Widerspruchsrecht (Art. 21 DSGVO)</h4>
                <p className="text-sm">
                  Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
                  jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten Widerspruch
                  einzulegen.
                </p>
              </div>
            </div>
          </section>

          {/* 11. Widerruf der Einwilligung */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Widerruf Ihrer Einwilligung zur Datenverarbeitung</h2>
            <p className="mb-4">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich.
              Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
              der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>
          </section>

          {/* 12. Beschwerderecht */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">12. Beschwerderecht bei der zuständigen Aufsichtsbehörde</h2>
            <p className="mb-4">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht
              bei einer Aufsichtsbehörde zu. Das Beschwerderecht besteht unbeschadet anderweitiger
              verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold mb-2">Zuständige Aufsichtsbehörde für Nordrhein-Westfalen:</p>
              <p>Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)</p>
              <p>Kavalleriestraße 2-4</p>
              <p>40213 Düsseldorf</p>
              <p className="mt-2">
                Telefon: 0211 38424-0
              </p>
              <p>
                E-Mail:{" "}
                <a href="mailto:poststelle@ldi.nrw.de" className="text-primary hover:underline">
                  poststelle@ldi.nrw.de
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://www.ldi.nrw.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.ldi.nrw.de
                </a>
              </p>
            </div>
          </section>

          {/* 13. Speicherdauer */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">13. Speicherdauer</h2>
            <p className="mb-4">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
              wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
              Datenverarbeitung entfällt.
            </p>
            <p className="mb-4">
              Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
              Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen
              rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben
              (z.B. steuer- oder handelsrechtliche Aufbewahrungsfristen).
            </p>
          </section>

          {/* 14. Änderungen */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">14. Änderungen dieser Datenschutzerklärung</h2>
            <p className="mb-4">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den
              aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen
              in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services.
            </p>
            <p className="mb-4">
              Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
            </p>
          </section>

          {/* Kontakt für Datenschutzfragen */}
          <section className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
            <h3 className="font-semibold text-lg mb-3">Fragen zum Datenschutz?</h3>
            <p className="mb-2">
              Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten,
              bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:
            </p>
            <p className="font-semibold">
              E-Mail:{" "}
              <a href="mailto:info@brivaro.de" className="text-primary hover:underline">
                info@brivaro.de
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
