import type { Metadata } from "next"
import Link from "next/link"
import { Mail, Phone, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Angaben von Brivaro - Kaan Kaya",
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-8">Impressum</h1>

          {/* Angaben gemäß § 5 TMG */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl border-l-4 border-primary">
              <p className="font-semibold text-lg mb-3">Kaan Kaya</p>
              <div className="space-y-2 text-gray-700">
                <p>Heinrich-Lübke-Straße 1</p>
                <p>50181 Bedburg</p>
                <p>Deutschland</p>
              </div>
            </div>
          </section>

          {/* Kontakt */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Telefon</p>
                  <a
                    href="tel:+4917644607369"
                    className="font-semibold text-gray-900 hover:text-primary transition-colors"
                  >
                    +49 176 44607369
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">E-Mail</p>
                  <a
                    href="mailto:info@brivaro.de"
                    className="font-semibold text-gray-900 hover:text-primary transition-colors"
                  >
                    info@brivaro.de
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Umsatzsteuer-ID */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Umsatzsteuer-ID</h2>
            <p className="mb-3">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-mono text-lg font-semibold text-gray-900">DE363473918</p>
            </div>
          </section>

          {/* Verantwortlich für den Inhalt */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold mb-2">Kaan Kaya</p>
              <p className="text-gray-700">Heinrich-Lübke-Straße 1</p>
              <p className="text-gray-700">50181 Bedburg</p>
            </div>
          </section>

          {/* EU-Streitschlichtung */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">EU-Streitschlichtung</h2>
            <p className="mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            </p>
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
            >
              <ExternalLink className="h-4 w-4" />
              https://ec.europa.eu/consumers/odr/
            </a>
            <p className="mt-4 text-gray-700">
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          {/* Verbraucherstreitbeilegung */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p className="text-gray-700">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          {/* Haftungsausschluss */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Haftung für Inhalte</h2>
            <p className="mb-4 text-gray-700">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mb-4 text-gray-700">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
              jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
              umgehend entfernen.
            </p>
          </section>

          {/* Haftung für Links */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Haftung für Links</h2>
            <p className="mb-4 text-gray-700">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <p className="mb-4 text-gray-700">
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
              Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung
              nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
              jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          {/* Urheberrecht */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Urheberrecht</h2>
            <p className="mb-4 text-gray-700">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
            <p className="mb-4 text-gray-700">
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
              Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
              wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet.
            </p>
            <p className="text-gray-700">
              Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir
              um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir
              derartige Inhalte umgehend entfernen.
            </p>
          </section>

          {/* Bildnachweise */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Bildnachweise</h2>
            <p className="text-gray-700">
              Die auf dieser Website verwendeten Bilder stammen von{" "}
              <a
                href="https://unsplash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Unsplash
              </a>{" "}
              und sind unter der{" "}
              <a
                href="https://unsplash.com/license"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Unsplash-Lizenz
              </a>{" "}
              lizenziert.
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
