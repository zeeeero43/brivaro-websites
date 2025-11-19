"use client"

import React, { useState } from "react"
import { TrendingUp, Mail, Users, CheckCircle } from "lucide-react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { motion, AnimatePresence } from "framer-motion"

export function LeadCalculator() {
  const [emailsPerDay, setEmailsPerDay] = useState(50)

  // Calculate metrics
  const emailsPerMonth = emailsPerDay * 22 // 22 Arbeitstage
  const responseRate = 0.09 // 9% average response rate
  const leadsPerMonth = Math.round(emailsPerMonth * responseRate)

  // Determine recommended plan based on emails per month
  // 1 email = 1 lead
  const getRecommendedPlan = () => {
    // Starter: 1500 Leads/Emails per month
    // Professional: 5000 Leads/Emails per month
    // Enterprise: 10000+ Leads/Emails per month

    if (emailsPerMonth <= 1500) {
      return {
        name: "Starter",
        price: 399,
        monthlyLeads: "1500 Leads",
        monthlyEmails: "1.500 E-Mails",
        campaigns: "3 Kampagnen"
      }
    } else if (emailsPerMonth <= 5000) {
      return {
        name: "Professional",
        price: 699,
        monthlyLeads: "5000 Leads",
        monthlyEmails: "5.000 E-Mails",
        campaigns: "6 Kampagnen"
      }
    } else {
      return {
        name: "Enterprise",
        price: "Auf Anfrage",
        monthlyLeads: "10.000+ Leads",
        monthlyEmails: "10.000+ E-Mails",
        campaigns: "Unlimitiert"
      }
    }
  }

  const plan = getRecommendedPlan()

  return (
    <section id="roi-rechner" className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="font-semibold">Lead-Rechner</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Wie viele <span className="gradient-text">Leads</span> möchtest du?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Berechne deine erwarteten Ergebnisse basierend auf deiner E-Mail-Strategie
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={0.2}>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-gray-200 p-8 md:p-12 shadow-xl">
              {/* Input Section */}
              <div className="mb-12">
                <label className="block text-lg font-semibold mb-4 text-gray-900">
                  Wie viele E-Mails möchtest du pro Tag versenden?
                </label>

                {/* Slider */}
                <div className="space-y-6">
                  <div className="relative">
                    <input
                      type="range"
                      min="10"
                      max="300"
                      step="10"
                      value={emailsPerDay}
                      onChange={(e) => setEmailsPerDay(Number(e.target.value))}
                      className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>10/Tag</span>
                      <span>300/Tag</span>
                    </div>
                  </div>

                  {/* Display Value */}
                  <motion.div
                    className="text-center"
                    key={emailsPerDay}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="inline-flex items-center gap-3 bg-primary/10 rounded-2xl px-8 py-4">
                      <Mail className="h-8 w-8 text-primary" />
                      <div className="text-left">
                        <div className="text-4xl font-bold text-primary">{emailsPerDay}</div>
                        <div className="text-sm text-gray-600">E-Mails pro Tag</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Results Grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={emailsPerDay}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-6 mb-8"
                >
                  {/* Monthly Emails */}
                  <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <Mail className="h-6 w-6 text-primary" />
                      <h3 className="font-semibold text-gray-900">E-Mails pro Monat</h3>
                    </div>
                    <div className="text-3xl font-bold gradient-text">{emailsPerMonth.toLocaleString('de-DE')}</div>
                    <p className="text-sm text-gray-600 mt-1">Basierend auf 22 Arbeitstagen</p>
                  </div>

                  {/* Expected Leads */}
                  <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="h-6 w-6 text-primary" />
                      <h3 className="font-semibold text-gray-900">Erwartete Leads</h3>
                    </div>
                    <div className="text-3xl font-bold gradient-text">{leadsPerMonth}</div>
                    <p className="text-sm text-gray-600 mt-1">Bei 9% Response-Rate (Brivaro Durchschnitt)</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Recommended Plan */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border-2 border-primary/20 p-8"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                        <CheckCircle className="h-4 w-4" />
                        Empfohlenes Paket
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-gray-600">Perfekt für dein Volumen</p>
                    </div>
                    <div className="text-right">
                      {typeof plan.price === 'number' ? (
                        <>
                          <div className="text-4xl font-bold gradient-text">{plan.price}€</div>
                          <div className="text-sm text-gray-600">/Monat</div>
                        </>
                      ) : (
                        <div className="text-2xl font-bold gradient-text">{plan.price}</div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-gray-700">{plan.monthlyLeads}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-gray-700">{plan.monthlyEmails}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-gray-700">{plan.campaigns}</span>
                    </div>
                  </div>

                  <motion.button
                    className="w-full bg-primary text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Jetzt {plan.name} Plan starten
                  </motion.button>
                </motion.div>
              </AnimatePresence>

              {/* Disclaimer */}
              <p className="text-center text-sm text-gray-500 mt-6">
                * Durchschnittliche Response-Rate basierend auf Brivaro Kundendaten. Individuelle Ergebnisse können variieren.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
