"use client"

import React from "react"
import { Check, X, Sparkles } from "lucide-react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { motion } from "framer-motion"

export function Comparison() {
  const comparisons = [
    {
      category: "Lead-Generierung",
      features: [
        { name: "Automatische Lead-Suche", brivaro: true, manual: false, other: "begrenzt" },
        { name: "107 Branchen-Kategorien", brivaro: true, manual: false, other: false },
        { name: "Automatische Website-Erkennung", brivaro: true, manual: false, other: "teilweise" },
        { name: "24/7 Automatische Suche", brivaro: true, manual: false, other: false },
      ],
    },
    {
      category: "E-Mail Automation",
      features: [
        { name: "KI-personalisierte E-Mails", brivaro: true, manual: false, other: "templates" },
        { name: "Website-Analyse Integration", brivaro: true, manual: false, other: false },
        { name: "3-Stufen Follow-up", brivaro: true, manual: "teilweise", other: true },
        { name: "Optimale technische Einstellung", brivaro: true, manual: false, other: true },
        { name: "A/B Testing", brivaro: true, manual: false, other: true },
      ],
    },
    {
      category: "Analytics & ROI",
      features: [
        { name: "Echtzeit-Dashboard", brivaro: true, manual: false, other: true },
        { name: "Conversion-Funnel", brivaro: true, manual: false, other: "basic" },
        { name: "Response-Tracking", brivaro: true, manual: "excel", other: true },
        { name: "ROI pro Kampagne", brivaro: true, manual: false, other: "begrenzt" },
      ],
    },
    {
      category: "Compliance & Support",
      features: [
        { name: "DSGVO-konform", brivaro: true, manual: "manuell", other: "teilweise" },
        { name: "Deutsche Server", brivaro: true, manual: "egal", other: false },
        { name: "Priority Support", brivaro: true, manual: false, other: "paid" },
        { name: "Onboarding & Training", brivaro: true, manual: false, other: "extra" },
      ],
    },
  ]

  const renderValue = (value: boolean | string) => {
    if (value === true) {
      return <Check className="h-5 w-5 text-green-600 mx-auto" />
    } else if (value === false) {
      return <X className="h-5 w-5 text-gray-300 mx-auto" />
    } else {
      return <span className="text-xs text-gray-500">{value}</span>
    }
  }

  return (
    <section className="py-20 relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-semibold">Warum Brivaro?</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Der <span className="gradient-text">klare Unterschied</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Andere Tools lösen nur Teilprobleme. Brivaro ist die All-in-One Lösung, die wirklich auf Autopilot läuft.
            </p>
          </div>
        </ScrollReveal>

        {/* Comparison Table */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="bg-white rounded-t-2xl border border-gray-200 p-6 grid grid-cols-4 gap-4 items-center">
              <div className="text-sm font-semibold text-gray-500 uppercase">Feature</div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full">
                  <Sparkles className="h-4 w-4" />
                  <span className="font-bold">Brivaro</span>
                </div>
              </div>
              <div className="text-center text-sm font-semibold text-gray-700">
                Manuell
              </div>
              <div className="text-center text-sm font-semibold text-gray-700">
                Andere Tools
              </div>
            </div>

            {/* Categories */}
            {comparisons.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                className="bg-white border-x border-b border-gray-200 last:rounded-b-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: catIndex * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Category Header */}
                <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                  <h3 className="font-bold text-gray-900">{category.category}</h3>
                </div>

                {/* Features */}
                {category.features.map((feature, featIndex) => (
                  <div
                    key={featIndex}
                    className="grid grid-cols-4 gap-4 items-center p-6 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-sm text-gray-700">{feature.name}</div>
                    <div className="text-center bg-primary/5 py-2 rounded-lg">
                      {renderValue(feature.brivaro)}
                    </div>
                    <div className="text-center py-2">
                      {renderValue(feature.manual)}
                    </div>
                    <div className="text-center py-2">
                      {renderValue(feature.other)}
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}

            {/* Pricing Comparison */}
            <motion.div
              className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-b-2xl border-x border-b-2 border-primary/20 p-8 mt-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-4 gap-4 items-center">
                <div>
                  <div className="font-bold text-gray-900 mb-1">Monatliche Kosten</div>
                  <div className="text-xs text-gray-600">inkl. Zeitaufwand</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">399€</div>
                  <div className="text-xs text-gray-600">+ 0h Zeit</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-700 mb-1">0€</div>
                  <div className="text-xs text-gray-600">+ 80h Zeit*</div>
                  <div className="text-xs text-gray-500 mt-1">*≈ 4.000€ Kosten</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-700 mb-1">200€</div>
                  <div className="text-xs text-gray-600">+ 20h Zeit*</div>
                  <div className="text-xs text-gray-500 mt-1">*≈ 1.200€ Kosten</div>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.6}>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-2 max-w-3xl mx-auto">
              <strong>Das Problem:</strong> Manuelle Akquise kostet Zeit. Andere Tools lösen nur Teilprobleme und brauchen ständig Aufmerksamkeit.
            </p>
            <p className="text-xl font-semibold text-primary mt-4">
              Brivaro läuft komplett auf Autopilot – während du an deinen Projekten arbeitest.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
