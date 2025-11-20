"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {

  const footerLinks = {
    navigation: [
      { label: "Demo", href: "/#demo-video" },
      { label: "ROI-Rechner", href: "/#roi-rechner" },
      { label: "Preise", href: "/#preise" },
    ],
    resources: [
      { label: "Blog", href: "/blog" },
      { label: "Hilfe-Center", href: "/hilfe" },
      { label: "Status", href: "/status" },
    ],
    company: [
      { label: "Über uns", href: "/uber-uns" },
      { label: "Karriere", href: "/karriere" },
    ],
    legal: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "AGB", href: "/agb" },
      { label: "Cookies", href: "/cookies" },
    ],
  }

  return (
    <footer className="relative overflow-hidden bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <motion.div
                className="text-3xl font-bold gradient-text"
                whileHover={{ scale: 1.05 }}
              >
                Brivaro
              </motion.div>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Lead Generation auf Autopilot für deutsche Web-Agenturen. DSGVO-konform
              und KI-powered.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Ressourcen</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Unternehmen</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  {link.label === "Cookies" ? (
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        if (typeof window !== 'undefined' && window.CookieConsent) {
                          window.CookieConsent.showPreferences()
                        }
                      }}
                      type="button"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm relative group text-left"
                    >
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm relative group"
                    >
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Brivaro. Made with ❤️ in Germany.
          </p>
        </div>
      </div>
    </footer>
  )
}
