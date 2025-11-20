import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Target, TrendingUp, Users, Award, Heart, Zap, Shield } from "lucide-react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { AnimatedCounter } from "@/components/animations/AnimatedCounter"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Über Uns - Die Geschichte hinter Brivaro",
  description: "Erfahre wie Brivaro entstand: Vom frustrierten Web-Agentur-Inhaber zur führenden Lead-Generation-Lösung für deutsche Agenturen. Die persönliche Journey von Kaan Kaya.",
  keywords: [
    "Brivaro Geschichte",
    "Gründer Story",
    "Lead Generation Deutschland",
    "Web Agentur Gründer",
    "Startup Journey",
    "Kaan Kaya"
  ],
  openGraph: {
    title: "Über Uns - Die Geschichte hinter Brivaro",
    description: "Vom frustrierten Agentur-Inhaber zur führenden Lead-Generation-Lösung",
    type: "website",
    url: "https://brivaro.de/uber-uns",
  },
  alternates: {
    canonical: "https://brivaro.de/uber-uns",
  },
}

export default function UberUnsPage() {
  const timeline = [
    {
      year: "2020",
      title: "Das Problem erkannt",
      description: "Als Web-Agentur-Inhaber verschwendete ich 80+ Stunden pro Monat mit manueller Lead-Akquise. Es musste eine bessere Lösung geben.",
      icon: Target,
    },
    {
      year: "2022",
      title: "Entwicklung gestartet",
      description: "Nach zwei Jahren Frustration begann ich, Brivaro zu entwickeln - zunächst nur für meine eigene Agentur.",
      icon: Zap,
    },
    {
      year: "2023",
      title: "Erste Beta-Kunden",
      description: "Die Ergebnisse waren überragend: 3x mehr Leads, 80% weniger Zeitaufwand. Ich wusste: Das brauchen andere auch.",
      icon: TrendingUp,
    },
    {
      year: "2025",
      title: "Offizieller Launch",
      description: "Brivaro ging live. Innerhalb von 6 Monaten gewannen wir 200+ Web-Agenturen als Kunden.",
      icon: Award,
    },
    {
      year: "2026",
      title: "Die Zukunft",
      description: "500+ zufriedene Kunden, 500.000+ generierte Leads. Wir skalieren und planen unsere Series A Finanzierung.",
      icon: TrendingUp,
    },
  ]

  const stats = [
    { value: 500, suffix: "+", label: "Zufriedene Agenturen" },
    { value: 500, suffix: "k+", label: "Generierte Leads" },
    { value: 95, suffix: "%", label: "Kundenzufriedenheit" },
    { value: 80, suffix: "%", label: "Zeitersparnis" },
  ]

  const values = [
    {
      icon: Shield,
      title: "DSGVO-Konformität",
      description: "Datenschutz ist nicht optional - sondern Standard. Alle Daten auf deutschen Servern.",
    },
    {
      icon: Heart,
      title: "Kunden-Erfolg",
      description: "Wir sind nur erfolgreich, wenn unsere Kunden erfolgreich sind. Punkt.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "KI, Automation, modernste Technologie - wir bleiben immer am Puls der Zeit.",
    },
    {
      icon: Users,
      title: "Transparenz",
      description: "Ehrliche Kommunikation, faire Preise, keine versteckten Kosten.",
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-40 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
              <Heart className="h-5 w-5 text-primary" />
              <span className="font-semibold text-primary">Unsere Geschichte</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Die Geschichte hinter{" "}
              <span className="gradient-text">Brivaro</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 px-4">
              Was als persönliche Frustration begann, ist heute die führende Lead-Generation-Lösung
              für Web-Agenturen in Deutschland. Hier ist unsere Journey.
            </p>
          </div>
        </ScrollReveal>

        {/* The Problem Section */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto mb-32">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border-l-4 border-red-500">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                2020-2022: Das Problem
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  "Ich führte eine erfolgreiche Web-Agentur. Technisch waren wir top. Unsere Projekte liefen hervorragend.
                  Aber ein Problem plagte mich täglich: <strong>Wo kommen die nächsten Kunden her?</strong>"
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Jeden Monat verbrachte ich 80+ Stunden mit manueller Lead-Akquise. LinkedIn durchforsten.
                  Kalte E-Mails schreiben. Follow-Ups tracken. Es war ein Albtraum.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Das Schlimmste: Die Ergebnisse waren miserabel. 2-3% Response-Rate.
                  Und selbst dann oft unqualifizierte Leads. <strong>Ich wusste: Es muss eine bessere Lösung geben.</strong>
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* The Solution Section */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto mb-32">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 border-l-4 border-primary">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                2023: Die Lösung
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Ende 2022 hatte ich genug. Wenn niemand eine Lösung für mein Problem entwickelte,
                  musste ich es selbst tun. Ich begann, Brivaro zu entwickeln - zunächst nur für meine eigene Agentur.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Die erste Version war simpel: Automatische Lead-Suche, KI-personalisierte E-Mails, Follow-Up-Sequenzen.
                  Aber die Ergebnisse waren überwältigend:
                </p>
                <ul className="list-none space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <Award className="h-4 w-4 text-green-600" />
                    </div>
                    <span><strong>3x mehr qualifizierte Leads</strong> als vorher</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <Award className="h-4 w-4 text-green-600" />
                    </div>
                    <span><strong>80% weniger Zeitaufwand</strong> für Akquise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <Award className="h-4 w-4 text-green-600" />
                    </div>
                    <span><strong>9% Response-Rate</strong> statt 2-3%</span>
                  </li>
                </ul>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Ich hatte das Tool, das ich immer gebraucht hätte. Und ich wusste:
                  <strong> Jede Web-Agentur in Deutschland hat das gleiche Problem.</strong>
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto mb-32">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Die <span className="gradient-text">Brivaro Timeline</span>
              </h2>
              <p className="text-lg text-gray-600">
                Von der Idee zur führenden Lead-Generation-Plattform
              </p>
            </div>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <ScrollReveal key={index} delay={0.1 * index}>
                    <div className={`relative flex items-start gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}>
                      {/* Icon */}
                      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 bg-white border-4 border-primary rounded-full p-3 shadow-lg z-10">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>

                      {/* Content */}
                      <div className={`flex-1 ml-20 md:ml-0 ${
                        index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                      }`}>
                        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                          <div className="text-primary font-bold text-2xl mb-2">{item.year}</div>
                          <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>

                      {/* Spacer for alternating layout */}
                      <div className="hidden md:block flex-1" />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-6xl mx-auto mb-32">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border border-gray-200">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Brivaro in Zahlen
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                      <AnimatedCounter to={stat.value} duration={2} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Values */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-6xl mx-auto mb-32">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Unsere <span className="gradient-text">Werte</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Was uns antreibt und wie wir arbeiten
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <ScrollReveal key={index} delay={0.1 * index}>
                  <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
                    <div className="bg-primary/10 rounded-full p-4 w-fit mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Werde Teil der Erfolgsgeschichte
              </h2>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Über 500 Web-Agenturen vertrauen bereits auf Brivaro.
                Bist du bereit für automatisierte Lead-Generation?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/#demo-video"
                  className="w-full sm:w-auto bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-center"
                >
                  Live-Demo ansehen
                </Link>
                <Link
                  href="/karriere"
                  className="w-full sm:w-auto bg-primary-dark border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary transition-colors text-center"
                >
                  Bei uns arbeiten
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Brivaro",
            "url": "https://brivaro.de",
            "logo": "https://brivaro.de/favicon.png",
            "foundingDate": "2023",
            "founder": {
              "@type": "Person",
              "name": "Kaan Kaya"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Heinrich-Lübke-Straße 1",
              "addressLocality": "Bedburg",
              "postalCode": "50181",
              "addressCountry": "DE"
            },
            "description": "Führende Lead-Generation-Lösung für Web-Agenturen in Deutschland",
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "value": 10
            }
          })
        }}
      />
    </div>
  )
}
