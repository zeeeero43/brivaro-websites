"use client"

import React from "react"
import { ArrowRight, TrendingUp, Users, Euro, Clock, Star } from "lucide-react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CaseStudies() {
  const caseStudies = [
    {
      company: "WebDesign Pro GmbH",
      industry: "Webentwicklung",
      location: "München",
      logo: "/case-studies/logo1.png", // Placeholder
      challenge: "Manuelles Cold Calling führte zu nur 1-2 Anfragen pro Woche bei 20h Zeitaufwand",
      solution: "Implementierung von Brivaro für automatisierte Lead-Generierung mit KI-personalisierten E-Mails",
      results: [
        { icon: TrendingUp, label: "Response-Rate", value: "+350%", description: "von 2% auf 9%" },
        { icon: Users, label: "Neue Leads", value: "180+", description: "in 3 Monaten" },
        { icon: Euro, label: "Umsatz", value: "+85.000€", description: "zusätzlicher MRR" },
        { icon: Clock, label: "Zeitersparnis", value: "18h/Woche", description: "mehr Zeit für Projekte" },
      ],
      testimonial: "Brivaro hat unsere Akquise komplett transformiert. Statt 20 Stunden pro Woche für manuelle Kaltakquise zu investieren, bekommen wir jetzt konstant 2-3 qualifizierte Anfragen täglich - vollautomatisch.",
      author: "Max Mustermann",
      role: "Geschäftsführer",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      company: "Digital Solutions AG",
      industry: "SEO & Marketing",
      location: "Berlin",
      logo: "/case-studies/logo2.png", // Placeholder
      challenge: "Niedrige Öffnungsraten (12%) und keine Antworten auf Standard-E-Mail-Kampagnen",
      solution: "Nutzung von Brivaro's KI-Website-Analyse für hochpersonalisierte Erstkontakte",
      results: [
        { icon: TrendingUp, label: "Öffnungsrate", value: "+158%", description: "von 12% auf 31%" },
        { icon: Users, label: "Conversions", value: "24", description: "neue Kunden" },
        { icon: Euro, label: "ROI", value: "12x", description: "in 2 Monaten" },
        { icon: Clock, label: "Setup-Zeit", value: "4h", description: "einmalig" },
      ],
      testimonial: "Die KI-Website-Analyse ist unglaublich. Jede E-Mail wird individuell auf die Probleme des Empfängers zugeschnitten. Unsere Response-Rate hat sich mehr als verdoppelt.",
      author: "Sarah Schmidt",
      role: "Marketing Leiterin",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <TrendingUp className="h-5 w-5 text-secondary" />
              <span className="font-semibold">Erfolgsgeschichten</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Echte <span className="gradient-text">Ergebnisse</span> von echten Kunden
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Wie Agenturen mit Brivaro ihre Kundengewinnung transformiert haben
            </p>
          </div>
        </ScrollReveal>

        {/* Case Studies */}
        <div className="space-y-24 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <motion.div
                className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Header */}
                <div className={`bg-gradient-to-br ${study.gradient} p-8 text-white`}>
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <span className="text-2xl font-bold">{study.company.charAt(0)}</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{study.company}</h3>
                          <p className="text-white/80">{study.industry} • {study.location}</p>
                        </div>
                      </div>
                    </div>
                    <Button variant="secondary" size="sm" className="whitespace-nowrap">
                      Vollständige Story lesen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Herausforderung</h4>
                      <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Lösung</h4>
                      <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-6 text-center">Ergebnisse</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {study.results.map((result, idx) => (
                        <motion.div
                          key={idx}
                          className="text-center"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className={`inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br ${study.gradient} mb-3`}>
                            <result.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="text-3xl font-bold gradient-text mb-1">{result.value}</div>
                          <div className="text-sm font-semibold text-gray-700 mb-1">{result.label}</div>
                          <div className="text-xs text-gray-500">{result.description}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="border-l-4 border-primary pl-6 py-2">
                    <p className="text-lg text-gray-700 italic mb-4">"{study.testimonial}"</p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                        {study.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{study.author}</div>
                        <div className="text-sm text-gray-600">{study.role}, {study.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <p className="text-xl text-gray-700 mb-6">
              Bereit, ähnliche Ergebnisse zu erzielen?
            </p>
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#preise">Jetzt starten</a>
            </Button>
          </div>
        </ScrollReveal>

        {/* Ratings Section */}
        <ScrollReveal delay={0.5}>
          <div className="text-center mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              Verifizierte Bewertungen von echten Kunden
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <span className="text-sm font-semibold">4.9/5.0</span>
              <span className="text-sm text-gray-500">(127 Bewertungen)</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
