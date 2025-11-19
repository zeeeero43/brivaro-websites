"use client"

import React from "react"
import { Shield, Lock, Server } from "lucide-react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { motion } from "framer-motion"

export function Trust() {
  const badges = [
    {
      icon: Shield,
      title: "DSGVO-konform",
      description: "100% konform mit deutschen Datenschutzgesetzen",
    },
    {
      icon: Lock,
      title: "SSL/TLS verschlüsselt",
      description: "Alle Daten end-to-end verschlüsselt",
    },
    {
      icon: Server,
      title: "Deutsche Server",
      description: "Hosting bei Hetzner Deutschland",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Sicherheit & <span className="gradient-text">Vertrauen</span>
            </h3>
            <p className="text-muted-foreground">
              Deine Daten sind bei uns in sicheren Händen
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-0">
          {badges.map((badge, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <motion.div
                className="flex flex-col items-center text-center p-4 glass rounded-xl group cursor-pointer"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <badge.icon className="h-6 w-6 text-primary" />
                </motion.div>
                <h4 className="font-semibold text-sm mb-1">{badge.title}</h4>
                <p className="text-xs text-muted-foreground">{badge.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
