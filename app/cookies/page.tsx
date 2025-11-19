"use client"

import type { Metadata } from "next"
import Link from "next/link"
import { Cookie, Check, X } from "lucide-react"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Cookie className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold">Cookie-Richtlinie</h1>
          </div>

          <p className="text-sm text-gray-600 mb-8">
            Zuletzt aktualisiert: November 2025
          </p>

          {/* Was sind Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Was sind Cookies?</h2>
            <p className="mb-4 text-gray-700">
              Cookies sind kleine Textdateien, die auf Ihrem Computer oder Mobilgerät gespeichert werden,
              wenn Sie eine Website besuchen. Sie werden weitverbreitet eingesetzt, um Websites
              funktionsfähig zu machen oder ihre Effizienz zu verbessern sowie um Informationen an die
              Eigentümer der Website zu liefern.
            </p>
          </section>

          {/* Warum verwenden wir Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Warum verwenden wir Cookies?</h2>
            <p className="mb-4 text-gray-700">
              Wir verwenden Cookies, um:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Die grundlegende Funktionalität unserer Website zu gewährleisten</li>
              <li>Ihre Cookie-Einstellungen zu speichern</li>
              <li>Die Nutzung unserer Website zu analysieren und zu verbessern (mit Ihrer Einwilligung)</li>
              <li>Ihre Sicherheit und die Integrität unserer Website zu schützen</li>
            </ul>
          </section>

          {/* Cookie-Kategorien */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Welche Arten von Cookies verwenden wir?</h2>

            {/* Notwendige Cookies */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-6">
              <div className="flex items-start gap-3 mb-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Notwendige Cookies</h3>
                  <p className="text-gray-700 mb-3">
                    Diese Cookies sind für das Funktionieren der Website unbedingt erforderlich.
                    Sie können nicht deaktiviert werden.
                  </p>
                  <div className="bg-white p-4 rounded-md">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 font-semibold">Cookie-Name</th>
                          <th className="text-left py-2 font-semibold">Zweck</th>
                          <th className="text-left py-2 font-semibold">Dauer</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 font-mono text-xs">cc_cookie</td>
                          <td className="py-2">Speichert Ihre Cookie-Einstellungen</td>
                          <td className="py-2">6 Monate</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-lg mb-6">
              <div className="flex items-start gap-3 mb-3">
                <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Analyse-Cookies (Optional)</h3>
                  <p className="text-gray-700 mb-3">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren,
                    indem sie Informationen anonym sammeln und melden. Sie werden nur mit Ihrer
                    ausdrücklichen Einwilligung gesetzt.
                  </p>
                  <div className="bg-white p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Google Analytics 4</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Wir verwenden Google Analytics 4, um die Nutzung unserer Website zu analysieren.
                      Google Analytics verwendet Cookies, um Informationen über Ihr Nutzungsverhalten zu
                      sammeln. Die gesammelten Informationen werden in der Regel an einen Server von
                      Google in den USA übertragen und dort gespeichert.
                    </p>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 font-semibold">Cookie-Name</th>
                          <th className="text-left py-2 font-semibold">Zweck</th>
                          <th className="text-left py-2 font-semibold">Dauer</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 font-mono text-xs">_ga</td>
                          <td className="py-2">Unterscheidet Nutzer</td>
                          <td className="py-2">2 Jahre</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-mono text-xs">_ga_*</td>
                          <td className="py-2">Speichert Session-Status</td>
                          <td className="py-2">2 Jahre</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-xs text-gray-600 mt-3">
                      Weitere Informationen:{" "}
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Google Datenschutzerklärung
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cookie-Verwaltung */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Wie kann ich Cookies verwalten?</h2>
            <p className="mb-4 text-gray-700">
              Sie haben jederzeit die Möglichkeit, Ihre Cookie-Einstellungen zu ändern:
            </p>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl mb-4">
              <h3 className="font-semibold text-lg mb-3">Cookie-Einstellungen auf dieser Website</h3>
              <p className="text-sm text-gray-700 mb-4">
                Sie können Ihre Cookie-Einstellungen jederzeit über das Cookie-Banner ändern,
                das beim ersten Besuch erscheint. Um das Banner erneut anzuzeigen, klicken Sie
                auf den folgenden Button:
              </p>
              <button
                onClick={() => {
                  // @ts-ignore - vanilla-cookieconsent global
                  if (typeof window !== 'undefined' && window.CookieConsent) {
                    // @ts-ignore
                    window.CookieConsent.showPreferences()
                  }
                }}
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                Cookie-Einstellungen öffnen
              </button>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Browser-Einstellungen</h3>
              <p className="text-sm text-gray-700 mb-3">
                Die meisten Webbrowser erlauben Ihnen, Cookies über die Browser-Einstellungen zu
                kontrollieren. Weitere Informationen finden Sie hier:
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/de-de/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Safari
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/de-de/windows/l%C3%B6schen-und-verwalten-von-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>
              <p className="text-xs text-gray-600 mt-3">
                Bitte beachten Sie, dass das Deaktivieren von Cookies die Funktionalität unserer
                Website beeinträchtigen kann.
              </p>
            </div>
          </section>

          {/* Rechtsgrundlage */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Rechtsgrundlage</h2>
            <p className="mb-4 text-gray-700">
              Die Verarbeitung von personenbezogenen Daten durch Cookies erfolgt auf Grundlage:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> (berechtigtes Interesse) für notwendige
                Cookies, die für die Funktionsfähigkeit der Website erforderlich sind
              </li>
              <li>
                <strong>Art. 6 Abs. 1 lit. a DSGVO</strong> und <strong>§ 25 Abs. 1 TDDDG</strong>
                (Einwilligung) für Analyse-Cookies
              </li>
            </ul>
          </section>

          {/* Aktualisierungen */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Aktualisierungen dieser Richtlinie</h2>
            <p className="text-gray-700">
              Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren, um Änderungen
              in unseren Praktiken oder aus anderen betrieblichen, rechtlichen oder regulatorischen
              Gründen widerzuspiegeln. Das Datum der letzten Aktualisierung finden Sie oben auf
              dieser Seite.
            </p>
          </section>

          {/* Kontakt */}
          <section className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
            <h3 className="font-semibold text-lg mb-3">Fragen zu Cookies?</h3>
            <p className="text-gray-700 mb-2">
              Bei Fragen zu unserer Verwendung von Cookies kontaktieren Sie uns bitte:
            </p>
            <p className="font-semibold">
              E-Mail:{" "}
              <a href="mailto:info@brivaro.de" className="text-primary hover:underline">
                info@brivaro.de
              </a>
            </p>
          </section>

          {/* Footer Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-6">
              <Link
                href="/datenschutz"
                className="text-primary hover:underline font-semibold"
              >
                Datenschutzerklärung
              </Link>
              <Link
                href="/impressum"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Impressum
              </Link>
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
