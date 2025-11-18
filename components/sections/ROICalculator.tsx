"use client"

import React, { useState } from "react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { GlassmorphicCard } from "@/components/animations/GlassmorphicCard"
import { motion, AnimatePresence } from "framer-motion"
import { TrendingUp, Clock, DollarSign, Users } from "lucide-react"

export function ROICalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(20)
  const [hourlyRate, setHourlyRate] = useState(100)
  const [newCustomers, setNewCustomers] = useState(5)

  // Berechnungen
  const hoursPerMonth = hoursPerWeek * 4
  const savedTime = hoursPerMonth * 0.8 // 80% Zeitersparnis
  const savedMoney = savedTime * hourlyRate
  const averageProjectValue = 5000 // Durchschnittlicher Projektwert
  const additionalRevenue = newCustomers * averageProjectValue
  const totalValue = savedMoney + additionalRevenue
  const roiPercentage = ((totalValue / 149) * 100).toFixed(0) // Basierend auf Professional Plan

  return (
    <section className="py-32 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Berechne deinen <span className="gradient-text">ROI</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Interaktiver Rechner: Sieh sofort, wie viel du sparen kannst
          </p>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto">
          <GlassmorphicCard className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Input Side */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold mb-6">Deine Zahlen</h3>

                {/* Hours Slider */}
                <div>
                  <label className="block text-sm font-medium mb-3">
                    Wie viele Stunden pro Woche für Lead-Gen?
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="5"
                      max="40"
                      value={hoursPerWeek}
                      onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                      className="flex-1 h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
                    />
                    <motion.span
                      key={hoursPerWeek}
                      initial={{ scale: 1.3 }}
                      animate={{ scale: 1 }}
                      className="text-2xl font-bold gradient-text min-w-[4rem] text-right"
                    >
                      {hoursPerWeek}h
                    </motion.span>
                  </div>
                </div>

                {/* Hourly Rate Slider */}
                <div>
                  <label className="block text-sm font-medium mb-3">
                    Dein Stundensatz?
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="50"
                      max="200"
                      step="10"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(Number(e.target.value))}
                      className="flex-1 h-2 bg-secondary/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-secondary"
                    />
                    <motion.span
                      key={hourlyRate}
                      initial={{ scale: 1.3 }}
                      animate={{ scale: 1 }}
                      className="text-2xl font-bold gradient-text min-w-[5rem] text-right"
                    >
                      €{hourlyRate}
                    </motion.span>
                  </div>
                </div>

                {/* New Customers Slider */}
                <div>
                  <label className="block text-sm font-medium mb-3">
                    Gewünschte neue Kunden/Monat?
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="2"
                      max="20"
                      value={newCustomers}
                      onChange={(e) => setNewCustomers(Number(e.target.value))}
                      className="flex-1 h-2 bg-accent/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent"
                    />
                    <motion.span
                      key={newCustomers}
                      initial={{ scale: 1.3 }}
                      animate={{ scale: 1 }}
                      className="text-2xl font-bold gradient-text min-w-[3rem] text-right"
                    >
                      {newCustomers}
                    </motion.span>
                  </div>
                </div>
              </div>

              {/* Results Side */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Deine Ergebnisse</h3>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${hoursPerWeek}-${hourlyRate}-${newCustomers}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-4"
                  >
                    {/* Saved Time */}
                    <div className="glass rounded-xl p-4 flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground">Zeitersparnis</div>
                        <div className="text-2xl font-bold">{savedTime.toFixed(0)}h/Monat</div>
                      </div>
                    </div>

                    {/* Saved Money */}
                    <div className="glass rounded-xl p-4 flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <DollarSign className="h-6 w-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground">Geldersparnis</div>
                        <div className="text-2xl font-bold">€{savedMoney.toLocaleString('de-DE')}/Monat</div>
                      </div>
                    </div>

                    {/* Additional Revenue */}
                    <div className="glass rounded-xl p-4 flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Users className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground">Zusätzlicher Umsatz</div>
                        <div className="text-2xl font-bold">€{additionalRevenue.toLocaleString('de-DE')}/Monat</div>
                      </div>
                    </div>

                    {/* Total ROI */}
                    <div className="glass rounded-xl p-6 bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-muted-foreground">Gesamt-ROI</div>
                          <div className="text-4xl font-bold gradient-text">{roiPercentage}%</div>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Gesamtwert: €{totalValue.toLocaleString('de-DE')}/Monat
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </GlassmorphicCard>
        </div>
      </div>
    </section>
  )
}
