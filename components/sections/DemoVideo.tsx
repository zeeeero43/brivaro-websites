"use client"

import React, { useState } from "react"
import { Play, Check, X } from "lucide-react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function DemoVideo() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const benefits = [
    "Sieh wie einfach Lead-Scraping funktioniert",
    "KI-personalisierte E-Mails in Aktion",
    "Kompletter Workflow in unter 2 Minuten",
  ]

  return (
    <section id="demo-video" className="py-20 relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Play className="h-5 w-5 text-primary" />
              <span className="font-semibold">2 Minuten Demo</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sieh <span className="gradient-text">Brivaro</span> in Aktion
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Verstehe in 90 Sekunden, wie Brivaro deine Kundengewinnung automatisiert
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Check className="h-4 w-4 text-secondary" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Video Thumbnail */}
        <ScrollReveal delay={0.2}>
          <motion.div
            className="max-w-5xl mx-auto relative group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setIsVideoOpen(true)}
          >
            {/* Video Placeholder/Thumbnail */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-gray-700 aspect-video">
              {/* Placeholder content - replace with actual thumbnail */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-white/90 mb-4 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Play className="h-12 w-12 text-primary ml-1" />
                  </motion.div>
                  <p className="text-white text-lg font-semibold">Demo Video ansehen</p>
                  <p className="text-white/80 text-sm">90 Sekunden</p>
                </div>
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <div>
                  <div className="text-sm opacity-80">Bereits angesehen von</div>
                  <div className="text-2xl font-bold">2.500+ Agenturen</div>
                </div>
                <div className="text-right">
                  <div className="text-sm opacity-80">Durchschnittliche Bewertung</div>
                  <div className="text-2xl font-bold">4.9/5.0 ⭐</div>
                </div>
              </div>
            </div>

            {/* Hover effect */}
            <div className="absolute inset-0 rounded-2xl border-4 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </ScrollReveal>

        {/* CTA below video */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Bereit, es selbst auszuprobieren?
            </p>
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#preise">Jetzt starten</a>
            </Button>
          </div>
        </ScrollReveal>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVideoOpen(false)}
            >
              {/* Video Player */}
              <motion.div
                className="relative w-full max-w-6xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setIsVideoOpen(false)}
                  className="absolute -top-12 right-0 p-2 hover:bg-white/10 rounded-full transition-colors z-10"
                  aria-label="Schließen"
                >
                  <X className="h-6 w-6 text-white" />
                </button>

                {/* Video container */}
                <div className="bg-black rounded-xl overflow-hidden shadow-2xl aspect-video">
                  {/* Placeholder for actual video - replace with YouTube/Vimeo embed or video element */}
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <div className="text-center">
                      <p className="text-xl mb-4">Video Player Placeholder</p>
                      <p className="text-sm text-gray-400">
                        Füge hier dein YouTube/Vimeo Video ein oder nutze HTML5 video element
                      </p>
                      <p className="text-xs text-gray-500 mt-4">
                        Beispiel: &lt;iframe src="https://www.youtube.com/embed/VIDEO_ID"&gt;&lt;/iframe&gt;
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
