"use client"

import React from "react"
import { Check, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { motion } from "framer-motion"

export function FinalCTA() {
  const benefits = [
    "Keine Kreditkarte erforderlich",
    "Alle Professional-Features inklusive",
    "Jederzeit kündbar",
    "Setup in unter 5 Minuten",
  ]

  return (
    <section className="py-16 relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            {/* Compact CTA Box */}
            <div className="bg-white rounded-3xl border-2 border-gray-200 shadow-xl p-8 md:p-12 text-center">
              {/* Guarantee Badge at top */}
              <div className="flex justify-center mb-6">
                <motion.div
                  className="inline-flex items-center gap-2 bg-green-50 border-2 border-green-200 rounded-full px-5 py-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-semibold text-green-700">30 Tage Geld-zurück-Garantie</span>
                </motion.div>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Starte jetzt mit{" "}
                <span className="gradient-text">Brivaro</span>
              </h2>

              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Schließe dich hunderten zufriedenen Agenturen an und automatisiere
                deine Kundengewinnung noch heute
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-center gap-2 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <motion.a
                  href="https://app.brivaro.de"
                  className="bg-primary text-white text-lg px-10 py-4 rounded-xl font-semibold shadow-lg group w-full sm:w-auto inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  aria-label="Jetzt starten - Zur Brivaro App"
                >
                  Jetzt starten
                  <ArrowRight className="ml-2 h-5 w-5 inline group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="#demo-video"
                  className="border-2 border-gray-300 text-gray-900 text-lg px-10 py-4 rounded-xl font-semibold hover:border-primary transition-colors w-full sm:w-auto text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live-Demo ansehen
                </motion.a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-600 flex items-center gap-1">
                  <Check className="h-4 w-4 text-primary" />
                  DSGVO-konform
                </div>
                <div className="text-sm text-gray-600 flex items-center gap-1">
                  <Check className="h-4 w-4 text-primary" />
                  SSL verschlüsselt
                </div>
                <div className="text-sm text-gray-600 flex items-center gap-1">
                  <Check className="h-4 w-4 text-primary" />
                  Deutsche Server
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
