"use client"

import React from "react"
import { Search, Brain, Mail, TrendingUp } from "lucide-react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { motion } from "framer-motion"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Automatische Lead-Suche",
      description: "Finde automatisch potenzielle Kunden in deiner Zielregion",
      features: [
        "107 deutsche Branchen-Kategorien",
        "Stadt/Region-Filter",
        "24/7 Automatische Suche",
      ],
    },
    {
      number: "02",
      icon: Brain,
      title: "KI-Website-Analyse",
      description: "ChatGPT 5.0 analysiert jede Website auf Design-, SEO- und Performance-Probleme",
      features: [
        "Automatische Screenshots",
        "PageSpeed-Audit",
        "SEO-Check",
        "Mobile-Optimierung",
      ],
    },
    {
      number: "03",
      icon: Mail,
      title: "Personalisierte E-Mails",
      description: "AI schreibt individuelle Mails basierend auf gefundenen Website-Problemen",
      features: [
        "Jede Mail einzigartig",
        "Probleme als Gesprächseinstieg",
        "3-Stufen Follow-up",
        "Optimale technische Einstellung",
      ],
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "ROI-Tracking",
      description: "Messe deinen Erfolg in Echtzeit und optimiere kontinuierlich",
      features: [
        "Öffnungs- & Klickraten",
        "Response-Tracking",
        "Conversion-Funnel",
        "ROI pro Kampagne",
      ],
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Wie es <span className="gradient-text">funktioniert</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            In nur 4 einfachen Schritten zu automatisierten Leads
          </p>
        </ScrollReveal>

        <div className="max-w-7xl mx-auto relative">
          {/* 2x2 Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className={`flex flex-col ${index === 2 ? 'md:order-[-1] md:-mt-8' : ''}`}>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden group">
                      {/* Visual Mockup Area */}
                      <div className="h-80 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden p-6">
                        {/* Step 1: Lead Scraping Mockup */}
                        {index === 0 && (
                          <div className="h-full flex gap-3">
                            {/* Map Area - BIGGER */}
                            <div className="flex-[2] bg-white rounded-lg border-2 border-gray-200 relative overflow-hidden">
                              {/* Simplified map background */}
                              <div className="absolute inset-0 opacity-10">
                                <svg className="w-full h-full" viewBox="0 0 200 200">
                                  <path d="M0,100 Q50,80 100,100 T200,100" stroke="currentColor" fill="none" strokeWidth="2"/>
                                  <path d="M100,0 Q120,50 100,100 T100,200" stroke="currentColor" fill="none" strokeWidth="2"/>
                                </svg>
                              </div>

                              {/* Location Pins - SMALLER & Company Names */}
                              {[
                                { x: 25, y: 35, name: "Weber GmbH" },
                                { x: 55, y: 55, name: "Fischer AG" },
                                { x: 40, y: 70, name: "Müller KG" },
                                { x: 70, y: 40, name: "Schmidt GmbH" },
                                { x: 30, y: 60, name: "Bauer KG" },
                              ].map((pin, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute z-20"
                                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                                  initial={{ scale: 0, y: -10 }}
                                  animate={{ scale: 1, y: 0 }}
                                  transition={{ delay: i * 0.2, duration: 0.5 }}
                                >
                                  <motion.div
                                    className="relative flex flex-col items-center"
                                    whileHover={{ scale: 1.1 }}
                                  >
                                    {/* Company Name - ABOVE pin */}
                                    <motion.div
                                      className="mb-1 px-2 py-0.5 bg-gray-900 text-white text-xs rounded whitespace-nowrap font-medium shadow-lg"
                                      initial={{ opacity: 0, y: 5 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: 0.5 + i * 0.2 }}
                                    >
                                      {pin.name}
                                    </motion.div>

                                    {/* Pin - SMALLER */}
                                    <div className="w-5 h-5 bg-primary rounded-full border-2 border-white shadow-lg flex items-center justify-center cursor-pointer">
                                      <div className="w-1.5 h-1.5 bg-white rounded-full"/>
                                    </div>

                                    {/* Pulse Effect */}
                                    <motion.div
                                      className="absolute top-[18px] w-5 h-5 bg-primary rounded-full"
                                      animate={{
                                        scale: [1, 2.5],
                                        opacity: [0.6, 0],
                                      }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.4,
                                      }}
                                    />
                                  </motion.div>
                                </motion.div>
                              ))}
                            </div>

                            {/* Lead List Sidebar - SMALLER */}
                            <div className="flex-1 bg-white rounded-lg border-2 border-gray-200 p-3 space-y-2">
                              <div className="text-xs font-semibold text-gray-500 mb-2">Gefundene Leads</div>
                              {["Weber GmbH", "Fischer AG", "Müller KG"].map((name, i) => (
                                <motion.div
                                  key={i}
                                  className="bg-gray-50 rounded p-2 border border-gray-200"
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.5 + i * 0.2 }}
                                  whileHover={{ scale: 1.02, backgroundColor: "#f0f9ff" }}
                                >
                                  <div className="text-xs font-medium text-gray-900 mb-1">{name}</div>
                                  <div className="text-xs text-gray-500">München</div>
                                  <motion.div
                                    className="text-xs text-green-600 mt-1 flex items-center gap-1"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 + i * 0.2 }}
                                  >
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"/>
                                    Neu
                                  </motion.div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Step 2: AI Analysis Mockup */}
                        {index === 1 && (
                          <div className="h-full flex gap-4">
                            {/* Website Screenshot Area */}
                            <div className="flex-1 bg-white rounded-lg border-2 border-gray-200 p-4 relative overflow-hidden">
                              {/* Mockup website */}
                              <div className="bg-gray-100 rounded h-full relative">
                                {/* Header bar */}
                                <div className="h-6 bg-gray-200 rounded-t flex items-center px-2 gap-1">
                                  <div className="w-2 h-2 rounded-full bg-red-400"/>
                                  <div className="w-2 h-2 rounded-full bg-yellow-400"/>
                                  <div className="w-2 h-2 rounded-full bg-green-400"/>
                                </div>
                                {/* Content bars */}
                                <div className="p-3 space-y-2">
                                  <div className="h-3 bg-gray-300 rounded w-3/4"/>
                                  <div className="h-2 bg-gray-200 rounded w-full"/>
                                  <div className="h-2 bg-gray-200 rounded w-5/6"/>
                                </div>

                                {/* Problem Markers */}
                                {[
                                  { x: 20, y: 30, label: "Slow Load" },
                                  { x: 60, y: 50, label: "No SSL" },
                                  { x: 40, y: 70, label: "Mobile" },
                                ].map((issue, i) => (
                                  <motion.div
                                    key={i}
                                    className="absolute"
                                    style={{ left: `${issue.x}%`, top: `${issue.y}%` }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.3 + i * 0.2 }}
                                  >
                                    <motion.div
                                      className="relative cursor-pointer"
                                      whileHover={{ scale: 1.2 }}
                                      animate={{
                                        y: [0, -5, 0],
                                      }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.3,
                                      }}
                                    >
                                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-lg">
                                        !
                                      </div>
                                      {/* Tooltip */}
                                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                        {issue.label}
                                      </div>
                                    </motion.div>
                                  </motion.div>
                                ))}

                                {/* Scanning Effect */}
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent h-12 pointer-events-none"
                                  animate={{
                                    y: ["-50%", "150%"],
                                  }}
                                  transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                  }}
                                />
                              </div>

                              {/* AI Badge */}
                              <motion.div
                                className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1"
                                animate={{
                                  scale: [1, 1.05, 1],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                }}
                              >
                                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"/>
                                Analyzing...
                              </motion.div>
                            </div>

                            {/* Score Sidebar */}
                            <div className="w-40 space-y-3">
                              {[
                                { label: "SEO", score: 45, color: "red" },
                                { label: "Speed", score: 60, color: "yellow" },
                                { label: "Mobile", score: 35, color: "red" },
                              ].map((metric, i) => (
                                <motion.div
                                  key={i}
                                  className="bg-white rounded-lg border-2 border-gray-200 p-3"
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.5 + i * 0.2 }}
                                  whileHover={{ scale: 1.05 }}
                                >
                                  <div className="text-xs text-gray-500 mb-1">{metric.label}</div>
                                  <div className="flex items-center gap-2">
                                    <motion.div
                                      className={`text-2xl font-bold ${
                                        metric.color === "red" ? "text-red-500" : metric.color === "yellow" ? "text-yellow-500" : "text-green-500"
                                      }`}
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{ delay: 1 + i * 0.2 }}
                                    >
                                      {metric.score}
                                    </motion.div>
                                    <div className="text-xs text-gray-400">/100</div>
                                  </div>
                                  {/* Progress Bar */}
                                  <div className="mt-2 h-1 bg-gray-100 rounded overflow-hidden">
                                    <motion.div
                                      className={`h-full ${
                                        metric.color === "red" ? "bg-red-500" : metric.color === "yellow" ? "bg-yellow-500" : "bg-green-500"
                                      }`}
                                      initial={{ width: 0 }}
                                      animate={{ width: `${metric.score}%` }}
                                      transition={{ delay: 1.2 + i * 0.2, duration: 0.8 }}
                                    />
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Step 3: Email Mockup */}
                        {index === 2 && (
                          <div className="h-full space-y-3">
                            {/* Email Cards */}
                            {[
                              { to: "Weber GmbH", status: "Kontaktiert", day: "Tag 1", color: "green", preview: "Ihre Website hat großes Potenzial, aber ich habe einige Performance-Probleme entdeckt..." },
                              { to: "Fischer AG", status: "Geantwortet", day: "Tag 3", color: "blue", preview: "Danke für Ihre Analyse! Die PageSpeed-Optimierung klingt interessant. Können wir..." },
                              { to: "Müller KG", status: "Kontaktiert", day: "Tag 7", color: "green", preview: "Ihre SEO-Rankings könnten mit ein paar gezielten Anpassungen deutlich verbessert..." },
                            ].map((email, i) => (
                              <motion.div
                                key={i}
                                className="bg-white rounded-lg border-2 border-gray-200 p-4 relative overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.3 }}
                                whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                              >
                                {/* Email Header */}
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-xs font-bold">
                                      {email.to.charAt(0)}
                                    </div>
                                    <div>
                                      <div className="text-sm font-semibold text-gray-900">{email.to}</div>
                                      <div className="text-xs text-gray-500">{email.day} Follow-up</div>
                                    </div>
                                  </div>
                                  <motion.div
                                    className={`px-2 py-1 rounded text-xs font-semibold ${
                                      email.status === "Geantwortet" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
                                    }`}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.5 + i * 0.3 }}
                                  >
                                    {email.status}
                                  </motion.div>
                                </div>

                                {/* Email Preview */}
                                <div className="text-xs text-gray-700 mb-2 line-clamp-2">
                                  {email.preview}
                                </div>

                                {/* Progress indicator */}
                                <div className="flex gap-1">
                                  {[0, 1, 2].map((dot) => (
                                    <motion.div
                                      key={dot}
                                      className={`h-1 flex-1 rounded ${
                                        dot <= i ? "bg-primary" : "bg-gray-200"
                                      }`}
                                      initial={{ scaleX: 0 }}
                                      animate={{ scaleX: 1 }}
                                      transition={{ delay: 0.8 + i * 0.3 + dot * 0.1 }}
                                    />
                                  ))}
                                </div>

                                {/* Flying envelope effect */}
                                {i === 0 && (
                                  <motion.div
                                    className="absolute right-4 top-4"
                                    animate={{
                                      x: [0, 30, 30],
                                      y: [0, -10, -10],
                                      opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      repeatDelay: 3,
                                    }}
                                  >
                                    <Mail className="h-4 w-4 text-primary" />
                                  </motion.div>
                                )}
                              </motion.div>
                            ))}
                          </div>
                        )}

                        {/* Step 4: Analytics Dashboard Mockup */}
                        {index === 3 && (
                          <div className="h-full space-y-3">
                            {/* Metric Cards Row */}
                            <div className="grid grid-cols-3 gap-3">
                              {[
                                { label: "Öffnungsrate", value: "28", trend: "+12%", color: "green" },
                                { label: "Responses", value: "47", trend: "+8%", color: "blue" },
                                { label: "Conversions", value: "12", trend: "+25%", color: "purple" },
                              ].map((metric, i) => (
                                <motion.div
                                  key={i}
                                  className="bg-white rounded-lg border-2 border-gray-200 p-3"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: i * 0.15 }}
                                  whileHover={{ y: -4, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                                >
                                  <div className="text-xs text-gray-500 mb-1">{metric.label}</div>
                                  <div className="flex items-end justify-between">
                                    <motion.div
                                      className="text-2xl font-bold text-gray-900"
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{ delay: 0.5 + i * 0.15 }}
                                    >
                                      {metric.value}
                                    </motion.div>
                                    <motion.div
                                      className={`text-xs font-semibold flex items-center gap-1 ${
                                        metric.color === "green" ? "text-green-600" :
                                        metric.color === "blue" ? "text-blue-600" :
                                        "text-purple-600"
                                      }`}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.7 + i * 0.15 }}
                                    >
                                      <TrendingUp className="h-3 w-3" />
                                      {metric.trend}
                                    </motion.div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>

                            {/* Chart Area */}
                            <div className="bg-white rounded-lg border-2 border-gray-200 p-4 flex-1">
                              <div className="text-xs text-gray-500 mb-3">Performance Trend</div>
                              <div className="relative h-32">
                                {/* Bar Chart */}
                                <div className="absolute inset-0 flex items-end justify-around gap-2">
                                  {[40, 55, 48, 72, 65, 85, 78].map((height, i) => (
                                    <motion.div
                                      key={i}
                                      className="flex-1 bg-primary/70 rounded-t hover:bg-primary transition-colors cursor-pointer"
                                      initial={{ height: 0 }}
                                      animate={{ height: `${height}%` }}
                                      transition={{
                                        delay: 1 + i * 0.1,
                                        duration: 0.5,
                                        ease: "easeOut",
                                      }}
                                      whileHover={{ opacity: 0.8 }}
                                    />
                                  ))}
                                </div>
                              </div>
                              {/* Week labels */}
                              <div className="flex justify-around text-xs text-gray-400 mt-2">
                                {["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"].map((day, i) => (
                                  <motion.span
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 + i * 0.1 }}
                                  >
                                    {day}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Text Content Below */}
                      <div className="p-8">
                        <div className="flex items-start gap-4 mb-4 relative z-10">
                        <div className="text-6xl font-bold text-primary/20">
                          {step.number}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                          <p className="text-gray-600 mb-4">
                            {step.description}
                          </p>
                          <ul className="space-y-2">
                            {step.features.map((feature, fIndex) => (
                              <motion.li
                                key={fIndex}
                                className="flex items-center gap-2 text-sm"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: fIndex * 0.05 }}
                                viewport={{ once: true }}
                              >
                                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                <span className="text-gray-700">{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
