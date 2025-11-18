"use client"

import React from "react"
import { motion } from "framer-motion"

export function SocialProof() {
  const companies = [
    "WebDesign Pro",
    "Digital Agentur Berlin",
    "SEO Masters GmbH",
    "Marketing Solutions",
    "Creative Studios",
    "Tech Agency Hamburg",
    "Brand Builder",
    "Performance Marketing",
    "Growth Hackers",
    "Innovation Lab",
  ]

  return (
    <section className="py-12 border-y border-white/10 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-sm text-muted-foreground">
          Vertraut von führenden Web-Agenturen in Deutschland
        </p>
      </div>

      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Infinite scroll animation */}
        <div className="flex">
          <motion.div
            className="flex gap-8 pr-8"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="glass rounded-lg px-8 py-4 whitespace-nowrap font-medium text-foreground/70 hover:text-foreground hover:bg-white/10 transition-all duration-200 flex-shrink-0"
              >
                {company}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
