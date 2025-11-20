"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (roughly 80vh)
      const scrollY = window.scrollY

      if (scrollY > window.innerHeight * 0.8 && !isDismissed) {
        setIsVisible(true)
      } else if (scrollY <= window.innerHeight * 0.8) {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between gap-2">
              {/* Left side - Message (hidden on mobile) */}
              <div className="hidden sm:flex flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <h3 className="font-bold text-lg whitespace-nowrap">
                    Noch nicht überzeugt?
                  </h3>
                  <p className="text-sm text-gray-600 truncate">
                    Sieh Brivaro in 90 Sekunden in Aktion
                  </p>
                </div>
              </div>

              {/* Mobile: Compact message */}
              <div className="sm:hidden flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900">
                  Demo ansehen?
                </p>
              </div>

              {/* Right side - CTA Buttons */}
              <div className="flex items-center gap-2">
                <Button asChild className="h-9 px-3 sm:h-11 sm:px-8 group whitespace-nowrap">
                  <a href="#demo-video">
                    <Play className="h-4 w-4 sm:mr-2" />
                    <span className="hidden sm:inline">Demo ansehen</span>
                  </a>
                </Button>

                {/* Dismiss button */}
                <button
                  onClick={handleDismiss}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Schließen"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
