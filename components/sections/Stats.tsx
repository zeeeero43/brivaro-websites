"use client"

import React from "react"
import { GSAPScrollTrigger } from "@/components/animations/GSAPScrollTrigger"
import { AnimatedCounter } from "@/components/animations/AnimatedCounter"
import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

export function Stats() {
  const stats = [
    {
      value: 28,
      suffix: "%",
      label: "Öffnungsrate",
      comparison: "Branchen-Durchschnitt: 18%",
      trend: "+55%",
    },
    {
      value: 9,
      suffix: "%",
      label: "Response-Rate",
      comparison: "Branchen-Durchschnitt: 2%",
      trend: "+350%",
    },
    {
      value: 15,
      suffix: "%",
      label: "Conversion zu Termin",
      comparison: "von Responses",
      trend: "Durchschnitt",
    },
    {
      value: 30,
      suffix: "%",
      label: "Conversion zu Kunde",
      comparison: "von Terminen",
      trend: "Branchenführend",
    },
  ]

  return (
    <section className="py-12 relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4">
        <GSAPScrollTrigger animation="fadeUp" start="top 85%">
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <ArrowUp className="h-5 w-5 text-secondary" />
              <span className="font-semibold text-secondary">Echte Ergebnisse</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Performance die <span className="gradient-text">überzeugt</span>
            </h2>
          </div>
        </GSAPScrollTrigger>

        <GSAPScrollTrigger
          animation="fadeUp"
          start="top 80%"
          stagger={0.15}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 text-center group"
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-5xl font-bold gradient-text mb-2">
                <AnimatedCounter to={stat.value} duration={2.5} suffix={stat.suffix} />
              </div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-gray-600 mb-3">
                {stat.comparison}
              </div>
              <div className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full bg-secondary/20 text-secondary">
                <ArrowUp className="h-3 w-3" />
                {stat.trend}
              </div>
            </motion.div>
          ))}
        </GSAPScrollTrigger>
      </div>
    </section>
  )
}
