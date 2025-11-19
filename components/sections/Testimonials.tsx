"use client"

import React from "react"
import { Star, Quote } from "lucide-react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { motion } from "framer-motion"

export function Testimonials() {
  const testimonials = [
    {
      name: "Max Mustermann",
      role: "Geschäftsführer",
      company: "WebDesign Pro GmbH",
      image: "/testimonials/max.jpg", // Placeholder - needs real image
      rating: 5,
      text: "Brivaro hat unsere Kundengewinnung komplett automatisiert. Wir erhalten jetzt konstant 2-3 qualifizierte Anfragen pro Tag, ohne aktiv nach Kunden suchen zu müssen. Der ROI war bereits nach 3 Wochen positiv.",
      results: "2-3 Anfragen/Tag",
      logo: "/testimonials/logo1.png", // Placeholder
    },
    {
      name: "Sarah Schmidt",
      role: "Marketing Leiterin",
      company: "Digital Solutions AG",
      image: "/testimonials/sarah.jpg", // Placeholder
      rating: 5,
      text: "Die KI-personalisierten E-Mails sind unglaublich. Unsere Öffnungsrate hat sich von 12% auf 31% mehr als verdoppelt. Wir sparen mindestens 15 Stunden pro Woche an manueller Recherche.",
      results: "+158% Öffnungsrate",
      logo: "/testimonials/logo2.png", // Placeholder
    },
    {
      name: "Thomas Wagner",
      role: "Gründer",
      company: "SEO Experts München",
      image: "/testimonials/thomas.jpg", // Placeholder
      rating: 5,
      text: "Ich war skeptisch, aber Brivaro hat mich überzeugt. Innerhalb von 6 Wochen konnten wir 8 neue Kunden gewinnen. Die automatische Website-Analyse gibt uns perfekte Gesprächseinstiege.",
      results: "8 neue Kunden in 6 Wochen",
      logo: "/testimonials/logo3.png", // Placeholder
    },
  ]

  return (
    <section className="py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Was unsere <span className="gradient-text">Kunden</span> sagen
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Echte Erfahrungen von Agenturen, die ihre Kundengewinnung automatisiert haben
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 h-full flex flex-col"
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Quote Icon */}
                <Quote className="h-10 w-10 text-primary/20 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 flex-grow leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Results Badge */}
                <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 mb-6 self-start">
                  <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                  <span className="text-sm font-semibold text-secondary">
                    {testimonial.results}
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Trust Elements */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <p className="text-sm text-gray-500 mb-4">
              Verifizierte Bewertungen von echten Kunden
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <span className="text-sm font-semibold">4.9/5.0</span>
                <span className="text-sm text-gray-500">(127 Bewertungen)</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
