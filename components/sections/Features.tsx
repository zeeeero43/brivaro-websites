"use client"

import React from "react"
import { Target, Bot, Mail, BarChart3, Shield, Users } from "lucide-react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { motion } from "framer-motion"

export function Features() {
  const features = [
    {
      icon: Target,
      title: "Automatische Lead-Generation",
      description: "24/7 automatische Lead-Suche für kontinuierliche Lead-Generierung",
      items: ["24/7 Automatische Lead-Suche", "107 Branchen-Kategorien", "Geo-Targeting (Stadt/Region)", "Echtzeit-Datenabgleich"],
      gradient: "from-blue-500 to-cyan-500",
      mockup: "lead-scraping",
    },
    {
      icon: Bot,
      title: "KI-Website-Analyse",
      description: "ChatGPT 5.0 erkennt Design-Probleme, SEO-Issues und Performance-Schwachstellen",
      items: ["ChatGPT 5.0 Analyse", "Design-Probleme erkennen", "SEO & Performance-Audit", "Automatische Screenshots"],
      gradient: "from-purple-500 to-pink-500",
      mockup: "ai-analysis",
    },
    {
      icon: Mail,
      title: "Email-Automation",
      description: "Personalisierte Mails mit 3-Stufen Follow-up und optimaler technischer Konfiguration",
      items: ["Personalisierte Mails (AI)", "3-Stufen Follow-up", "Optimale technische Einstellung", "Auto-Stop bei Antwort"],
      gradient: "from-orange-500 to-red-500",
      mockup: "email-composer",
    },
    {
      icon: BarChart3,
      title: "ROI-Tracking",
      description: "Echtzeit-Analytics mit Conversion-Funnel und detaillierten Reports",
      items: ["Echtzeit-Analytics", "Öffnungs-/Klickraten", "Conversion-Funnel", "Export (PDF/Excel)"],
      gradient: "from-green-500 to-emerald-500",
      mockup: "analytics",
    },
    {
      icon: Shield,
      title: "DSGVO-Konform",
      description: "Deutsche Server, nur öffentliche Daten, Opt-out in jeder Mail",
      items: ["Deutsche Server", "Nur öffentliche Daten", "Opt-out in jeder Mail", "TLS/SSL verschlüsselt"],
      gradient: "from-indigo-500 to-blue-500",
      mockup: "security",
    },
    {
      icon: Users,
      title: "CRM & Lead-Verwaltung",
      description: "Übersichtliches CRM mit direktem Response-Tracking und Conversion-Management",
      items: ["Antworten direkt tracken", "Kunden als konvertiert markieren", "Lead-Status-Übersicht", "Vollständiges Lead-Management"],
      gradient: "from-pink-500 to-rose-500",
      mockup: "crm-pipeline",
    },
  ]

  return (
    <section id="features" className="py-20 relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Alle <span className="gradient-text">Features</span> die du brauchst
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Eine komplette Lead-Generation-Lösung in einer Plattform
          </p>
        </ScrollReveal>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden h-full group cursor-pointer flex flex-col"
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Mockup/Screenshot Area */}
                <div className={`relative h-48 bg-gradient-to-br ${feature.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <feature.icon className="h-20 w-20 text-white/80" />
                  </div>
                  {/* Placeholder for future screenshot */}
                  <div className="absolute bottom-0 right-0 bg-black/20 text-white/80 text-xs px-3 py-1 rounded-tl-lg">
                    Screenshot: {feature.mockup}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex-grow flex flex-col">
                  {/* Icon with Gradient */}
                  <motion.div
                    className={`h-12 w-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-md`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Feature Items */}
                  <ul className="space-y-2 mt-auto">
                    {feature.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        className="flex items-center gap-2 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${feature.gradient} flex-shrink-0`} />
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
