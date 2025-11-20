"use client"

import React from "react"
import { motion } from "framer-motion"
import { ChevronDown, Check } from "lucide-react"
import { AnimatedCounter } from "@/components/animations/AnimatedCounter"

export function Hero() {
  const stats = [
    { value: 500, suffix: "k+", label: "Generierte Leads" },
    { value: 95, suffix: "%+", label: "Zufriedenheit" },
    { value: 9, suffix: "%", label: "Response-Rate" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white">

      <div className="container mx-auto px-4 py-20 z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Guarantee Badge at top */}
          <motion.div
            className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-5 py-2 mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            whileHover={{ scale: 1.05 }}
          >
            <Check className="h-4 w-4 text-green-600" />
            <span className="text-sm font-semibold text-green-700">30 Tage Geld-zurück-Garantie</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="gradient-text">1-3 qualifizierte Anfragen</span>
            <br />
            pro Tag auf Autopilot
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto px-4 sm:px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-secondary font-semibold">80% weniger Zeitaufwand.</span>{" "}
            <span className="text-primary font-semibold">3x höhere Response-Rate.</span>{" "}
            <span className="text-foreground font-semibold">100% DSGVO-konform.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.a
              href="#demo-video"
              className="w-full sm:w-auto bg-primary text-white text-base sm:text-lg px-8 sm:px-10 py-4 rounded-lg font-semibold shadow-lg inline-block text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Live-Demo ansehen
            </motion.a>
            <motion.a
              href="#preise"
              className="w-full sm:w-auto bg-white border-2 border-gray-300 text-gray-900 text-base sm:text-lg px-8 sm:px-10 py-4 rounded-lg font-semibold inline-block text-center"
              whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Kostenlos testen
            </motion.a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  <AnimatedCounter to={stat.value} duration={2} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="cursor-pointer"
        >
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
