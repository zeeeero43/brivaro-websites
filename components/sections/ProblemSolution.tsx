"use client"

import React from "react"
import { X, Check } from "lucide-react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { motion } from "framer-motion"

export function ProblemSolution() {
  const problems = [
    "Manuelle Recherche",
    "Excel-Listen pflegen",
    "Individuelle E-Mails schreiben",
    "Unstrukturiertes Follow-up",
    "Keine messbaren Ergebnisse",
  ]

  const solutions = [
    "Automatische Lead-Suche (24/7)",
    "KI-Analyse jeder Website",
    "Personalisierte E-Mails (AI-generiert)",
    "3-Stufen Follow-up (automatisch)",
    "Echtzeit ROI-Tracking",
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
            <span className="text-destructive">Stopp!</span> Verschwende keine <span className="text-destructive">20h/Woche</span> mehr
            <br />
            mit manueller Akquise
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-20 max-w-3xl mx-auto">
            Während du Excel-Listen pflegst und E-Mails schreibst, laufen deine Wettbewerber bereits auf Autopilot
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Problem Side */}
          <ScrollReveal direction="left">
            <motion.div
              className="relative rounded-3xl overflow-hidden border-2 border-destructive/50 p-8 bg-destructive/5"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-transparent" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-full bg-destructive/20 flex items-center justify-center">
                    <X className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="text-2xl font-bold">Problem</h3>
                </div>
                <p className="text-xl font-semibold mb-6 text-destructive">
                  &ldquo;20-30 Stunden/Woche für manuelle Lead-Generierung&rdquo;
                </p>
                <ul className="space-y-4">
                  {problems.map((problem, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{problem}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                  <p className="text-sm font-medium">
                    <span className="text-destructive">Resultat:</span> 1-2% Response-Rate, keine Skalierung möglich
                  </p>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Solution Side */}
          <ScrollReveal direction="right" delay={0.2}>
            <motion.div
              className="relative rounded-3xl overflow-hidden border-2 border-secondary/50 p-8 bg-secondary/5"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Check className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold">Lösung</h3>
                </div>
                <p className="text-xl font-semibold mb-6 text-secondary">
                  &ldquo;Vollautomatisierte Lead-Generation mit KI&rdquo;
                </p>
                <ul className="space-y-4">
                  {solutions.map((solution, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{solution}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8 p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                  <p className="text-sm font-medium">
                    <span className="text-secondary">Resultat:</span> 9% Response-Rate, unbegrenzt skalierbar
                  </p>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
