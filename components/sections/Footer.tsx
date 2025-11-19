"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Github, Twitter, Linkedin, Youtube, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Newsletter logic here
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  const footerLinks = {
    product: [
      { label: "Features", href: "#features" },
      { label: "Preise", href: "#preise" },
      { label: "Use Cases", href: "#use-cases" },
      { label: "Roadmap", href: "#roadmap" },
    ],
    resources: [
      { label: "Blog", href: "/blog" },
      { label: "Hilfe-Center", href: "/hilfe" },
      { label: "API-Docs", href: "/api" },
      { label: "Status", href: "/status" },
    ],
    company: [
      { label: "Über uns", href: "/uber-uns" },
      { label: "Karriere", href: "/karriere" },
      { label: "Presse", href: "/presse" },
      { label: "Partner", href: "/partner" },
    ],
    legal: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "AGB", href: "/agb" },
      { label: "Cookies", href: "/cookies" },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ]

  return (
    <footer className="relative overflow-hidden bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand + Newsletter */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <motion.div
                className="text-3xl font-bold gradient-text"
                whileHover={{ scale: 1.05 }}
              >
                Brivaro
              </motion.div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Lead Generation auf Autopilot für deutsche Web-Agenturen. DSGVO-konform
              und KI-powered.
            </p>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2 text-base">
                <Mail className="h-4 w-4" />
                Newsletter
              </h3>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="deine@email.de"
                  className="flex-1 px-4 py-2 rounded-lg glass border border-white/10 focus:border-primary focus:outline-none text-sm"
                  required
                  aria-label="E-Mail-Adresse für Newsletter"
                />
                <Button type="submit" size="icon" aria-label="Newsletter abonnieren">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-2">
                Lead-Gen-Tipps & Updates. Jederzeit abmeldbar.
              </p>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Produkt</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
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
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Brivaro. Made with ❤️ in Germany.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
