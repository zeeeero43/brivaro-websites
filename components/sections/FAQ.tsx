"use client"

import React from "react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Ist Brivaro DSGVO-konform?",
      answer: "Ja, absolut. Wir nutzen ausschließlich öffentlich verfügbare Daten, hosten auf deutschen Servern und jede E-Mail enthält einen Opt-out-Link. Alle Daten werden TLS/SSL verschlüsselt übertragen.",
    },
    {
      question: "Wie funktioniert die AI-Analyse?",
      answer: "Wir verwenden ChatGPT 5.0, um Websites automatisch zu analysieren. Die KI erkennt Design-Probleme, SEO-Issues, Performance-Schwachstellen und erstellt personalisierte Empfehlungen für jede Website.",
    },
    {
      question: "Kann ich eigene E-Mail-Vorlagen nutzen?",
      answer: "Ja! Du kannst eigene Templates erstellen oder unsere AI-generierten Vorlagen anpassen. Die KI berücksichtigt dabei automatisch die gefundenen Website-Probleme für maximale Personalisierung.",
    },
    {
      question: "Wie viele Leads kann ich generieren?",
      answer: "Je nach Plan: Starter (1.500 Leads/Monat), Professional (5.000 Leads/Monat) oder Enterprise (10.000+ Leads/Monat). Pro Lead kannst du bis zu 3 E-Mails versenden (Initial + 2 Follow-ups).",
    },
    {
      question: "Gibt es eine Geld-zurück-Garantie?",
      answer: "Ja! 30 Tage Geld-zurück-Garantie ohne Wenn und Aber. Wenn du nicht zufrieden bist, erstatten wir dir den vollen Betrag - keine Fragen gestellt.",
    },
    {
      question: "Kann ich jederzeit kündigen?",
      answer: "Absolut. Keine Vertragsbindung, keine versteckten Kosten. Kündige jederzeit mit einem Klick in deinem Dashboard. Deine Daten bleiben 30 Tage gespeichert, falls du zurückkehren möchtest.",
    },
    {
      question: "Welche E-Mail-Provider werden unterstützt?",
      answer: "Gmail, Outlook, und jeder IMAP/SMTP-fähige Provider. Du kannst bis zu 3 E-Mail-Konten (Professional) verbinden und Absender-Rotation nutzen für bessere Zustellraten.",
    },
    {
      question: "Wie hoch ist die Response-Rate?",
      answer: "Durchschnittlich 9% - deutlich höher als der Branchen-Durchschnitt von 2%. Dank AI-Personalisierung und optimalen Sendezeiten erzielen unsere Nutzer überdurchschnittliche Ergebnisse.",
    },
    {
      question: "Woher kommen die Lead-Daten?",
      answer: "Brivaro durchsucht automatisch öffentlich verfügbare Quellen und Verzeichnisse in deiner Zielregion. Du kannst aus 107 Branchen-Kategorien wählen und nach Stadt/Region filtern.",
    },
    {
      question: "Kann ich mehrere Team-Mitglieder einladen?",
      answer: "Ja, im Professional- und Enterprise-Plan kannst du unbegrenzt Team-Mitglieder einladen. Alle arbeiten in Echtzeit zusammen mit Live-Updates via WebSocket.",
    },
  ]

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Häufig gestellte <span className="gradient-text">Fragen</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Alles was du über Brivaro wissen musst
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
