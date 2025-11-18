"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Gift, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from the top (closing tab/window)
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    // Add a small delay before enabling exit intent (user needs to be engaged)
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave)
    }, 5000) // 5 seconds delay

    return () => {
      clearTimeout(timer)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [hasShown])

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-2xl mx-4"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Schließen"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>

              {/* Content */}
              <div className="text-center">
                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-primary to-secondary mb-6"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Gift className="h-10 w-10 text-white" />
                </motion.div>

                {/* Headline */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Bereit für <span className="gradient-text">automatisierte Leads?</span>
                </h2>

                <p className="text-xl text-gray-600 mb-8">
                  Starte jetzt und bekomme 1-3 qualifizierte Anfragen pro Tag
                </p>

                {/* Offer Box */}
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 mb-8 border-2 border-primary/20">

                  {/* Benefits */}
                  <div className="space-y-2 text-left max-w-md mx-auto">
                    {[
                      "30 Tage Geld-zurück-Garantie",
                      "Keine Kreditkarte erforderlich",
                      "Setup in unter 5 Minuten",
                      "Exklusiver Beta-Zugang",
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index + 0.3 }}
                      >
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="text-lg px-8 py-6 w-full sm:w-auto">
                    <a href="#trial">
                      Jetzt Beta-Zugang sichern
                    </a>
                  </Button>
                  <button
                    onClick={handleClose}
                    className="text-gray-500 hover:text-gray-700 text-sm font-medium"
                  >
                    Nein danke, vielleicht später
                  </button>
                </div>

                {/* Trust indicator */}
                <p className="text-xs text-gray-500 mt-6">
                  🔒 Sicher & DSGVO-konform • 500+ zufriedene Kunden
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
