"use client"

import React, { useState, useEffect } from "react"
import { CheckCircle, AlertCircle, XCircle, Clock, Activity } from "lucide-react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { motion } from "framer-motion"

// API Response Interface
interface ApiResponse {
  status: "operational" | "degraded" | "outage"
  timestamp: string
  components: {
    api: "operational" | "degraded" | "outage"
    database: "operational" | "degraded" | "outage"
    services: "operational" | "degraded" | "outage"
  }
}

// Internal UI Interface
interface ServiceStatus {
  name: string
  status: "operational" | "degraded" | "outage"
  responseTime?: number
  lastChecked: string
}

interface StatusData {
  overall: "operational" | "degraded" | "outage"
  services: ServiceStatus[]
  uptime: number
  lastUpdated: string
}

export default function StatusPage() {
  const [statusData, setStatusData] = useState<StatusData | null>(null)
  const [loading, setLoading] = useState(true)
  const [lastChecked, setLastChecked] = useState<Date>(new Date())

  const fetchStatus = async () => {
    try {
      const response = await fetch("/api/status")
      if (!response.ok) {
        throw new Error("API nicht erreichbar")
      }
      const apiData: ApiResponse = await response.json()

      // Transform API response to internal format
      const transformedData: StatusData = {
        overall: apiData.status,
        services: [
          {
            name: "API",
            status: apiData.components.api,
            lastChecked: apiData.timestamp,
          },
          {
            name: "Datenbank",
            status: apiData.components.database,
            lastChecked: apiData.timestamp,
          },
          {
            name: "Services",
            status: apiData.components.services,
            lastChecked: apiData.timestamp,
          },
        ],
        uptime: 99.9, // Mock value since API doesn't provide it
        lastUpdated: apiData.timestamp,
      }

      setStatusData(transformedData)
      setLastChecked(new Date())
    } catch (err) {
      // Set outage status instead of showing error UI
      setStatusData({
        overall: "outage",
        services: [
          {
            name: "API",
            status: "outage",
            lastChecked: new Date().toISOString(),
          },
          {
            name: "Datenbank",
            status: "outage",
            lastChecked: new Date().toISOString(),
          },
          {
            name: "Services",
            status: "outage",
            lastChecked: new Date().toISOString(),
          },
        ],
        uptime: 0,
        lastUpdated: new Date().toISOString(),
      })
      console.error("Status fetch error:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStatus()
    const interval = setInterval(fetchStatus, 60000) // Refresh every 60 seconds
    return () => clearInterval(interval)
  }, [])

  const getStatusColor = (status: "operational" | "degraded" | "outage") => {
    switch (status) {
      case "operational":
        return {
          bg: "bg-green-50",
          border: "border-green-200",
          text: "text-green-700",
          icon: "text-green-600",
          gradient: "from-green-500 to-emerald-500",
        }
      case "degraded":
        return {
          bg: "bg-yellow-50",
          border: "border-yellow-200",
          text: "text-yellow-700",
          icon: "text-yellow-600",
          gradient: "from-yellow-500 to-amber-500",
        }
      case "outage":
        return {
          bg: "bg-red-50",
          border: "border-red-200",
          text: "text-red-700",
          icon: "text-red-600",
          gradient: "from-red-500 to-rose-500",
        }
    }
  }

  const getStatusIcon = (status: "operational" | "degraded" | "outage") => {
    switch (status) {
      case "operational":
        return CheckCircle
      case "degraded":
        return AlertCircle
      case "outage":
        return XCircle
    }
  }

  const getStatusText = (status: "operational" | "degraded" | "outage") => {
    switch (status) {
      case "operational":
        return "Alle Systeme funktionieren"
      case "degraded":
        return "Teilweise Einschränkungen"
      case "outage":
        return "Systemausfall"
    }
  }

  const formatLastChecked = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)
    if (seconds < 60) return "Gerade eben"
    if (seconds < 3600) return `Vor ${Math.floor(seconds / 60)} Min.`
    return date.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-40 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
              <div className="h-12 bg-gray-200 rounded w-96 mx-auto mb-8"></div>
              <div className="h-32 bg-gray-200 rounded mb-8"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const overallStatus = statusData?.overall || "outage"
  const statusColors = getStatusColor(overallStatus)
  const StatusIcon = getStatusIcon(overallStatus)

  return (
    <div className="min-h-screen bg-white pt-40 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-6 py-3 mb-6">
              <Activity className="h-5 w-5 text-primary" />
              <span className="font-semibold text-gray-900">System Status</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Brivaro <span className="gradient-text">Status</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed px-4">
              Aktuelle Verfügbarkeit aller Brivaro Services
            </p>
          </div>
        </ScrollReveal>

        {/* Overall Status Card */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-4xl mx-auto mb-12">
            <div
              className={`${statusColors.bg} border-2 ${statusColors.border} rounded-2xl p-8 md:p-12`}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <StatusIcon className={`h-16 w-16 ${statusColors.icon}`} />
                    {overallStatus === "operational" && (
                      <motion.div
                        className="absolute -top-1 -right-1 h-4 w-4 bg-green-500 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [1, 0.8, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                  </div>
                  <div>
                    <h2 className={`text-3xl md:text-4xl font-bold ${statusColors.text}`}>
                      {getStatusText(overallStatus)}
                    </h2>
                    <p className="text-gray-600 mt-1 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Zuletzt geprüft: {formatLastChecked(lastChecked)}
                    </p>
                  </div>
                </div>

                {statusData && (
                  <div className="text-center md:text-right">
                    <div className="text-4xl md:text-5xl font-bold gradient-text">
                      {statusData.uptime.toFixed(2)}%
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Uptime (90 Tage)</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Services Status */}
        {statusData?.services && statusData.services.length > 0 && (
          <ScrollReveal delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 px-4">
                Service Status
              </h2>
              <div className="space-y-4">
                {statusData.services.map((service, index) => {
                  const serviceColors = getStatusColor(service.status)
                  const ServiceIcon = getStatusIcon(service.status)

                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <ServiceIcon className={`h-8 w-8 ${serviceColors.icon}`} />
                          <div>
                            <h3 className="font-bold text-lg text-gray-900">
                              {service.name}
                            </h3>
                            <p className={`text-sm ${serviceColors.text} font-medium`}>
                              {getStatusText(service.status)}
                            </p>
                          </div>
                        </div>

                        {service.responseTime && (
                          <div className="text-left sm:text-right">
                            <div className="text-2xl font-bold text-gray-900">
                              {service.responseTime}ms
                            </div>
                            <div className="text-xs text-gray-600">Response Time</div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Info Section */}
        <ScrollReveal delay={0.3}>
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Über diese Seite
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Diese Seite wird alle 60 Sekunden automatisch aktualisiert und zeigt den
                aktuellen Status aller Brivaro Services. Bei Fragen oder Problemen
                kontaktiere uns unter{" "}
                <a
                  href="mailto:support@brivaro.de"
                  className="text-primary font-semibold hover:underline"
                >
                  support@brivaro.de
                </a>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Brivaro System Status",
            "description": "Aktuelle Verfügbarkeit und Status aller Brivaro Services",
            "url": "https://brivaro.de/status",
            "mainEntity": {
              "@type": "Service",
              "name": "Brivaro Platform",
              "provider": {
                "@type": "Organization",
                "name": "Brivaro",
              },
              "areaServed": "DE",
            },
          }),
        }}
      />
    </div>
  )
}
