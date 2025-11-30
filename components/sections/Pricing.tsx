"use client"

import React, { useState } from "react"
import { Check, Star, Calendar } from "lucide-react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CalModal } from "@/components/CalModal"

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [isCalOpen, setIsCalOpen] = useState(false)

  const plans = [
    {
      name: "Starter",
      priceMonthly: "299",
      priceAnnual: "219",
      description: "Perfekt für kleine Agenturen die gerade erst mit automatisierter Kundengewinnung starten.",
      features: [
        "1500 Leads pro Monat",
        "3 aktive Kampagnen",
        "Google Maps Lead-Scraping",
        "KI-personalisierte E-Mails",
        "Website Screenshot-Generator + weitere Tools",
        "E-Mail Support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      priceMonthly: "599",
      priceAnnual: "459",
      description: "Ideal für wachsende Agenturen die ihre Kundengewinnung skalieren und optimieren möchten.",
      features: [
        "Alles aus Starter und:",
        "5000 Leads pro Monat",
        "6 aktive Kampagnen",
        "Prioritäts-Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      priceMonthly: "Auf Anfrage",
      priceAnnual: "Auf Anfrage",
      description: "Für große Agenturen mit hohem Volumen und besonderen Anforderungen.",
      features: [
        "Alles aus Professional und:",
        "10000+ E-Mails pro Monat",
        "Unlimitierte Kampagnen",
        "24/7 Premium Support",
      ],
      popular: false,
    },
  ]

  return (
    <section id="preise" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          {/* Guarantee Badge */}
          <div className="flex justify-center mb-8">
            <motion.div
              className="inline-flex items-center gap-2 bg-green-50 border-2 border-green-200 rounded-full px-6 py-3"
              whileHover={{ scale: 1.05 }}
            >
              <Check className="h-5 w-5 text-green-600" />
              <span className="text-sm font-semibold text-green-700">30 Tage Geld-zurück-Garantie</span>
            </motion.div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Einfache <span className="gradient-text">Preise</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-3 max-w-2xl mx-auto">
            Transparente Preisgestaltung ohne versteckte Kosten
          </p>

          {/* Short Onboarding Info */}
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            ✨ <span className="font-semibold text-primary">Inklusive: Persönliches 30-Minuten Onboarding</span> – Wir gehen gemeinsam mit dir durch die App und richten alles optimal ein, damit du sofort erfolgreich durchstarten kannst.
          </p>

          {/* Annual/Monthly Toggle */}
          <div className="flex flex-col items-center gap-2 mb-8">
            <div className="flex items-center gap-4">
              <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                Monatlich
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative w-16 h-8 bg-gray-200 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                style={{ backgroundColor: isAnnual ? 'rgb(99, 102, 241)' : 'rgb(229, 231, 235)' }}
                aria-label="Zwischen monatlicher und jährlicher Zahlung wechseln"
                aria-pressed={isAnnual}
              >
                <motion.div
                  className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md"
                  animate={{ x: isAnnual ? 32 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
              <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                Jährlich
              </span>
            </div>
            <motion.span
              className="inline-flex items-center bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: isAnnual ? 1 : 0 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              Spare 20%
            </motion.span>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: plan.popular ? 0 : -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="bg-primary rounded-full px-4 py-1 text-sm font-semibold text-white shadow-lg flex items-center gap-1">
                        <Star className="h-4 w-4 fill-current" />
                        Empfohlen
                      </div>
                    </motion.div>
                  </div>
                )}

                <div
                  className={`bg-white rounded-2xl border-2 shadow-lg p-8 h-full ${plan.popular ? "border-primary shadow-2xl shadow-primary/20 scale-105" : "border-gray-200"}`}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-gray-600 mb-6">{plan.description}</p>
                    <div className="flex flex-col items-center gap-1 mb-2 min-h-[60px]">
                      {plan.priceMonthly === "Auf Anfrage" ? (
                        <span className="text-4xl font-bold gradient-text leading-tight">{plan.priceMonthly}</span>
                      ) : (
                        <>
                          <div className="flex items-end justify-center gap-1">
                            <span className="text-5xl font-bold gradient-text">
                              {isAnnual ? plan.priceAnnual : plan.priceMonthly}€
                            </span>
                            <span className="text-gray-500 mb-2">/monat</span>
                          </div>
                          {isAnnual && (
                            <div className="text-xs text-gray-500">
                              <span className="line-through">{plan.priceMonthly}€</span>
                              <span className="text-green-600 font-semibold ml-2">Spare {Math.round((1 - parseFloat(plan.priceAnnual) / parseFloat(plan.priceMonthly)) * 100)}%</span>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-start gap-3"
                      >
                        <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    onClick={() => setIsCalOpen(true)}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    {plan.priceMonthly === "Auf Anfrage" ? "Enterprise Gespräch buchen" : "Onboarding buchen"}
                  </Button>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Cal.com Modal */}
      <CalModal isOpen={isCalOpen} onClose={() => setIsCalOpen(false)} />
    </section>
  )
}
