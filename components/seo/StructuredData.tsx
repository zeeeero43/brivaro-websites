import Script from 'next/script'

export function StructuredData() {
  // Organization & SoftwareApplication Schema
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Brivaro",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter",
        "price": "399",
        "priceCurrency": "EUR",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "399.00",
          "priceCurrency": "EUR",
          "billingDuration": "P1M",
          "billingIncrement": 1,
        },
      },
      {
        "@type": "Offer",
        "name": "Professional",
        "price": "699",
        "priceCurrency": "EUR",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "699.00",
          "priceCurrency": "EUR",
          "billingDuration": "P1M",
          "billingIncrement": 1,
        },
      },
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1",
    },
    "description":
      "Automatisierte B2B Lead-Generierung für deutsche Web-Agenturen. 80% Zeitersparnis, 3x höhere Response-Rate. DSGVO-konform mit KI-Personalisierung.",
    "url": "https://brivaro.de",
    "screenshot": "https://brivaro.de/og-image.jpg",
    "featureList": [
      "Google Maps Lead-Scraping in 107 Branchen",
      "KI-Website-Analyse mit ChatGPT",
      "Automatische E-Mail-Personalisierung",
      "DSGVO-konforme Lead-Generierung",
      "3-Stufen Follow-up Automation",
      "Echtzeit Analytics Dashboard",
    ],
    "author": {
      "@type": "Organization",
      "@id": "https://brivaro.de/#organization",
      "name": "Brivaro GmbH",
      "url": "https://brivaro.de",
      "logo": {
        "@type": "ImageObject",
        "url": "https://brivaro.de/logo.png",
        "width": 512,
        "height": 512,
      },
      "sameAs": [
        "https://twitter.com/brivaro",
        "https://linkedin.com/company/brivaro",
        "https://github.com/brivaro",
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "DE",
        "addressLocality": "Deutschland",
      },
    },
  }

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ist Brivaro DSGVO-konform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, absolut. Wir nutzen ausschließlich öffentlich verfügbare Daten, hosten auf deutschen Servern und jede E-Mail enthält einen Opt-out-Link. Alle Daten werden TLS/SSL verschlüsselt übertragen.",
        },
      },
      {
        "@type": "Question",
        "name": "Wie funktioniert die AI-Analyse?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir verwenden moderne KI-Technologie, um Websites automatisch zu analysieren. Die KI erkennt Design-Probleme, SEO-Issues, Performance-Schwachstellen und erstellt personalisierte Empfehlungen für jede Website.",
        },
      },
      {
        "@type": "Question",
        "name": "Kann ich eigene E-Mail-Vorlagen nutzen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja! Du kannst eigene Templates erstellen oder unsere AI-generierten Vorlagen anpassen. Die KI berücksichtigt dabei automatisch die gefundenen Website-Probleme für maximale Personalisierung.",
        },
      },
      {
        "@type": "Question",
        "name": "Wie viele Leads kann ich generieren?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Je nach Plan: Starter (1.500 Leads/Monat), Professional (5.000 Leads/Monat) oder Enterprise (10.000+ Leads/Monat). Pro Lead kannst du bis zu 3 E-Mails versenden (Initial + 2 Follow-ups).",
        },
      },
      {
        "@type": "Question",
        "name": "Gibt es eine Geld-zurück-Garantie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja! 30 Tage Geld-zurück-Garantie ohne Wenn und Aber. Wenn du nicht zufrieden bist, erstatten wir dir den vollen Betrag - keine Fragen gestellt.",
        },
      },
      {
        "@type": "Question",
        "name": "Kann ich jederzeit kündigen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolut. Keine Vertragsbindung, keine versteckten Kosten. Kündige jederzeit mit einem Klick in deinem Dashboard. Deine Daten bleiben 30 Tage gespeichert, falls du zurückkehren möchtest.",
        },
      },
      {
        "@type": "Question",
        "name": "Welche E-Mail-Provider werden unterstützt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gmail, Outlook, und jeder IMAP/SMTP-fähige Provider. Du kannst bis zu 3 E-Mail-Konten (Professional) verbinden und Absender-Rotation nutzen für bessere Zustellraten.",
        },
      },
      {
        "@type": "Question",
        "name": "Wie hoch ist die Response-Rate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Durchschnittlich 9% - deutlich höher als der Branchen-Durchschnitt von 2%. Dank AI-Personalisierung und optimalen Sendezeiten erzielen unsere Nutzer überdurchschnittliche Ergebnisse.",
        },
      },
      {
        "@type": "Question",
        "name": "Woher kommen die Lead-Daten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Brivaro durchsucht automatisch öffentlich verfügbare Quellen und Verzeichnisse in deiner Zielregion. Du kannst aus 107 Branchen-Kategorien wählen und nach Stadt/Region filtern.",
        },
      },
      {
        "@type": "Question",
        "name": "Kann ich mehrere Team-Mitglieder einladen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, im Professional- und Enterprise-Plan kannst du unbegrenzt Team-Mitglieder einladen. Alle arbeiten in Echtzeit zusammen mit Live-Updates via WebSocket.",
        },
      },
    ],
  }

  // WebSite Schema for Search Box
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://brivaro.de",
    "name": "Brivaro",
    "description": "Lead Generation auf Autopilot für deutsche Web-Agenturen",
    "publisher": {
      "@id": "https://brivaro.de/#organization",
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://brivaro.de/suche?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://brivaro.de",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Features",
        "item": "https://brivaro.de/#features",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Preise",
        "item": "https://brivaro.de/#preise",
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "FAQ",
        "item": "https://brivaro.de/#faq",
      },
    ],
  }

  return (
    <>
      <Script
        id="software-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
