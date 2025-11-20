"use client"

import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Tag, ChevronRight } from "lucide-react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { useEffect, useState, use } from "react"
import { parseMarkdown, extractHeadings } from "@/lib/markdown"
import Image from "next/image"

// Blog-Post Interface
interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  updatedDate?: string
  readTime: string
  category: string
  tags: string[]
  image: string
  author: {
    name: string
    role: string
    image: string
  }
}

// Demo-Daten - später aus CMS/Markdown/Datenbank laden
const blogPosts: Record<string, BlogPost> = {
  "cold-email-kampagne-2025": {
    slug: "cold-email-kampagne-2025",
    title: "Cold Email Kampagnen 2025: 7 Strategien für 3x höhere Response-Raten",
    excerpt: "Entdecke die neuesten Strategien für erfolgreiche Cold Email Kampagnen. Von KI-Personalisierung bis DSGVO-Compliance - alles was du 2025 wissen musst.",
    content: `Cold Email Marketing ist tot? Ganz im Gegenteil! Mit den richtigen Strategien erreichst du 2025 Response-Raten von 15% und höher. In diesem Guide zeige ich dir, wie.

## KI-Personalisierung: Der Game-Changer

Die Zeiten von "Sehr geehrte Damen und Herren" sind vorbei. 2025 erwarten Empfänger hyper-personalisierte Nachrichten. Mit KI-Tools wie ChatGPT kannst du:

- Individuelle Ansprachen basierend auf LinkedIn-Profilen generieren
- Pain Points automatisch identifizieren und ansprechen
- Branchen-spezifische Sprache verwenden

**Beispiel einer personalisierten Cold Email:**

Betreff: Ihre Website-Performance auf domain.de

Hallo Max,

mir ist aufgefallen, dass Ihre Ladezeit bei über 3 Sekunden liegt. Bei einem ähnlichen Kunden konnten wir die Conversion-Rate um 240% steigern, indem wir die Performance optimiert haben.

Hätten Sie 15 Minuten für einen kurzen Call nächste Woche?

## DSGVO-Konforme Lead-Generierung

In Deutschland ist DSGVO-Compliance kein Optional - es ist Pflicht. Achte auf:

- **Art. 6 Abs. 1 lit. f DSGVO**: Berechtigtes Interesse bei B2B-Kontakten
- **§ 7 UWG**: Keine unzumutbare Belästigung
- **Transparenz**: Klare Angabe, woher du die Kontaktdaten hast
- **Opt-Out**: Immer eine einfache Abmeldemöglichkeit anbieten

Die rechtliche Lage in Deutschland erlaubt B2B Cold Emails, solange du das berechtigte Interesse nachweisen kannst und eine Opt-Out-Möglichkeit anbietest.

## Multi-Touch-Kampagnen statt Einzelmails

Eine einzelne Email reicht nicht mehr. Die optimale Sequenz 2025:

1. **Tag 0**: Initiale Email mit Wertversprechen
2. **Tag 3**: Follow-Up mit Social Proof (Case Study)
3. **Tag 7**: Mehrwert-Content (Guide, Checkliste, Template)
4. **Tag 14**: Letzte freundliche Erinnerung mit alternativer CTA
5. **Tag 30**: LinkedIn-Connection Request als Soft-Touch

**Wichtig**: Jede Email muss eigenständig Mehrwert bieten - kein "Bump" oder "Just checking in". Niemand mag diese nervigen Follow-Ups ohne Inhalt.

## A/B-Testing auf Steroiden

Teste systematisch alle Elemente deiner Kampagne:

**Betreffzeilen**: Frage vs. Statement vs. Personalisierung

- "Frage zu Ihrer Website-Performance" (Frage)
- "3 Quick Wins für höhere Conversion-Rates" (Statement)
- "Max, Ihre Ladezeit liegt bei 3.2 Sekunden" (Personalisierung)

**Email-Länge**: Kurz vs. Mittel vs. Lang

- Kurz (50 Wörter): Funktioniert bei C-Level
- Mittel (100 Wörter): Optimal für Manager
- Lang (150+ Wörter): Gut für technische Entscheider

**Call-to-Action**: Direkter Kalender-Link vs. Antwort-Anfrage vs. Ressource

Bei Brivaro haben wir festgestellt: **Dienstagmorgen zwischen 9-11 Uhr** performt am besten für B2B in Deutschland. Donnerstag ist auch gut, Montag und Freitag solltest du meiden.

## Email Deliverability optimieren

Die beste Email nützt nichts, wenn sie im Spam landet. Hier ist das technische Setup:

**DNS-Records konfigurieren:**

- **SPF**: Definiert, welche Server Emails für deine Domain versenden dürfen
- **DKIM**: Digitale Signatur zur Authentifizierung
- **DMARC**: Policy, was mit fehlgeschlagenen Authentifizierungen passiert
- **Custom Tracking Domain**: Verhindert Spam-Flags durch Standard-Tracker

**Domain Warming-Plan:**

- Woche 1: 10-20 Emails pro Tag
- Woche 2: 30-40 Emails pro Tag
- Woche 3: 50-70 Emails pro Tag
- Woche 4: 80-100 Emails pro Tag
- Ab Woche 6: 150-200 Emails pro Tag (Maximum)

Niemals zu schnell hochskalieren - sonst landest du im Spam!

## Segmentierung nach Intent

Nicht alle Leads sind gleich. Segmentiere nach:

**Kaufbereitschaft**: Problem erkannt vs. aktiv auf Lösungssuche vs. vergleicht Anbieter

**Unternehmensgröße**: Startup (1-10 MA) vs. Mittelstand (11-250 MA) vs. Enterprise (250+ MA)

**Branche**: SaaS vs. eCommerce vs. B2B Services vs. Agentur

**Technologie-Stack**: WordPress vs. Shopify vs. Custom vs. No-Code

Jedes Segment braucht eigene Messaging-Strategie. Ein Startup-Gründer hat andere Pain Points als ein Enterprise-Einkaufsleiter.

## Metriken die wirklich zählen

Vergiss Öffnungsraten - die sind 2025 durch Apple Mail Privacy obsolet. Fokussiere dich auf:

- **Reply-Rate**: 5-15% ist gut, 15%+ ist exzellent
- **Positive Reply-Rate**: Anteil interessierter Antworten (nicht "Nicht interessiert")
- **Meeting-Buchungs-Rate**: 2-5% vom Gesamt-Versand ist realistisch
- **Lead-to-Customer-Rate**: Die ultimative Success-Metrik

Wenn du 1000 Emails verschickst und 50 Replies bekommst (5% Reply-Rate), davon 25 positiv (2.5% positive Reply-Rate) und daraus 10 Meetings entstehen (1% Meeting-Rate), ist das ein sehr guter Funnel.

## Fazit: Qualität schlägt Quantität

Die Zeiten von "Spray and Pray" sind vorbei. 2025 gewinnst du mit:

✓ Hyper-Personalisierung durch KI statt generischer Templates
✓ DSGVO-Compliance als Standard, nicht als Afterthought
✓ Multi-Touch-Sequenzen mit echtem Mehrwert in jeder Email
✓ Systematisches Testing aller Kampagnen-Elemente
✓ Perfekte Deliverability durch korrektes Technical Setup
✓ Smart Segmentation nach Intent und Unternehmensprofil
✓ Focus auf Reply-Rate und Meetings statt Vanity-Metriken

Mit Brivaro automatisieren wir alle diese Schritte für dich. Von der Lead-Recherche bis zur Follow-Up-Sequenz - DSGVO-konform und KI-optimiert.

**Bereit, deine Cold Email Kampagnen auf das nächste Level zu heben?**

Buche jetzt dein kostenloses Onboarding-Gespräch oder rechne mit unserem ROI-Rechner durch, wie viel Zeit und Geld du sparen kannst.`,
    date: "2025-01-15",
    updatedDate: "2025-01-15",
    readTime: "8 Min.",
    category: "Cold Outreach",
    tags: ["Cold Email", "Lead Generation", "KI", "DSGVO", "Email Marketing"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=630&fit=crop",
    author: {
      name: "Brivaro Team",
      role: "Lead Generation Experten",
      image: "/brivaro-team.png",
    },
  },
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const post = blogPosts[slug]
  const [activeHeading, setActiveHeading] = useState<string>('')

  // 404 wenn Post nicht existiert
  if (!post) {
    notFound()
  }

  const headings = extractHeadings(post.content)
  const htmlContent = parseMarkdown(post.content)

  // Verwandte Posts
  const relatedPosts = Object.values(blogPosts)
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  // Scroll spy für aktives Heading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -80% 0px' }
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  // Smooth scroll zu Heading
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <article className="min-h-screen bg-white pt-20">
        {/* Hero mit Featured Image */}
        <div className="relative h-[50vh] min-h-[400px] bg-gray-900">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${post.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          {/* Breadcrumb */}
          <div className="absolute top-24 left-0 right-0 container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-white/80" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">{post.category}</span>
            </nav>
          </div>

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-12">
            <ScrollReveal>
              <div className="max-w-4xl">
                <div className="inline-block px-3 py-1 bg-primary text-white text-sm font-semibold rounded-full mb-4">
                  {post.category}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-white/90">
                  <div className="flex items-center gap-3">
                    <Image
                      src={post.author.image}
                      alt={post.author.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full border-2 border-white object-cover"
                    />
                    <div>
                      <div className="font-semibold">{post.author.name}</div>
                      <div className="text-sm text-white/70">{post.author.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('de-DE', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-8">
                {/* Excerpt */}
                <ScrollReveal>
                  <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium border-l-4 border-primary pl-6 italic bg-primary/5 py-4 rounded-r-lg">
                    {post.excerpt}
                  </p>
                </ScrollReveal>

                {/* Table of Contents - Mobile Only */}
                {headings.length > 0 && (
                  <ScrollReveal delay={0.1}>
                    <div className="lg:hidden bg-gray-50 rounded-xl p-6 border border-gray-200 mb-8">
                      <h3 className="font-bold mb-4 text-gray-900">Inhaltsverzeichnis</h3>
                      <nav className="space-y-2">
                        {headings.map(({ id, text }) => (
                          <button
                            key={id}
                            onClick={() => scrollToHeading(id)}
                            className={`block w-full text-left text-sm transition-colors ${
                              activeHeading === id
                                ? 'text-primary font-semibold'
                                : 'text-gray-700 hover:text-primary'
                            }`}
                          >
                            {text}
                          </button>
                        ))}
                      </nav>
                    </div>
                  </ScrollReveal>
                )}

                {/* Article Content */}
                <ScrollReveal delay={0.1}>
                  <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                  />
                </ScrollReveal>

                {/* Tags */}
                <ScrollReveal delay={0.2}>
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-wrap items-center gap-2">
                      <Tag className="h-5 w-5 text-gray-600" />
                      {post.tags.map((tag, index) => (
                        <Link
                          key={index}
                          href={`/blog?tag=${encodeURIComponent(tag)}`}
                          className="px-3 py-1 bg-gray-100 hover:bg-primary hover:text-white text-gray-700 text-sm font-medium rounded-full transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Author Bio */}
                <ScrollReveal delay={0.3}>
                  <div className="mt-12 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
                    <div className="flex items-start gap-4">
                      <Image
                        src={post.author.image}
                        alt={post.author.name}
                        width={64}
                        height={64}
                        className="h-16 w-16 rounded-full border-2 border-primary/20 object-cover flex-shrink-0"
                      />
                      <div>
                        <h3 className="font-bold text-lg mb-1">{post.author.name}</h3>
                        <p className="text-gray-600 mb-3">{post.author.role}</p>
                        <p className="text-gray-700">
                          Das Brivaro Team hilft Web-Agenturen seit 2024, ihre Kundenakquise zu automatisieren.
                          Mit über 500+ betreuten Kampagnen wissen wir, was funktioniert.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-4">
                <div className="sticky top-32 space-y-6">
                  {/* Share */}
                  <ScrollReveal delay={0.2}>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <h3 className="font-bold mb-4 flex items-center gap-2 text-gray-900">
                        <Share2 className="h-5 w-5" />
                        Artikel teilen
                      </h3>
                      <div className="flex gap-3">
                        <a
                          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://brivaro.de/blog/' + post.slug)}&text=${encodeURIComponent(post.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-lg hover:opacity-90 transition-opacity"
                          aria-label="Auf Twitter teilen"
                        >
                          <Twitter className="h-4 w-4" />
                        </a>
                        <a
                          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://brivaro.de/blog/' + post.slug)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-lg hover:opacity-90 transition-opacity"
                          aria-label="Auf LinkedIn teilen"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://brivaro.de/blog/' + post.slug)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded-lg hover:opacity-90 transition-opacity"
                          aria-label="Auf Facebook teilen"
                        >
                          <Facebook className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* CTA */}
                  <ScrollReveal delay={0.3}>
                    <div className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white rounded-xl p-6 shadow-lg">
                      <h3 className="font-bold text-xl mb-3">
                        Bereit für automatisierte Lead-Generierung?
                      </h3>
                      <p className="text-white/90 mb-4 text-sm">
                        Teste Brivaro 30 Tage kostenlos und erlebe, wie KI-powered Lead-Generation funktioniert.
                      </p>
                      <Link
                        href="/#demo-video"
                        className="block w-full text-center px-4 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-md"
                      >
                        Kostenlos testen
                      </Link>
                    </div>
                  </ScrollReveal>

                  {/* Table of Contents - Desktop Only */}
                  {headings.length > 0 && (
                    <ScrollReveal delay={0.4}>
                      <div className="hidden lg:block bg-gray-50 rounded-xl p-6 border border-gray-200">
                        <h3 className="font-bold mb-4 text-gray-900">Inhaltsverzeichnis</h3>
                        <nav className="space-y-2">
                          {headings.map(({ id, text }) => (
                            <button
                              key={id}
                              onClick={() => scrollToHeading(id)}
                              className={`block w-full text-left text-sm transition-colors ${
                                activeHeading === id
                                  ? 'text-primary font-semibold'
                                  : 'text-gray-700 hover:text-primary'
                              }`}
                            >
                              {text}
                            </button>
                          ))}
                        </nav>
                      </div>
                    </ScrollReveal>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="bg-gray-50 py-20 border-t border-gray-200">
            <div className="container mx-auto px-4">
              <ScrollReveal>
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Ähnliche Artikel</h2>
              </ScrollReveal>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
                {relatedPosts.map((relatedPost, index) => (
                  <ScrollReveal key={relatedPost.slug} delay={0.1 * index}>
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <article className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                        <div className="relative h-48 overflow-hidden">
                          <div
                            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                            style={{ backgroundImage: `url(${relatedPost.image})` }}
                          />
                          <div className="absolute top-4 left-4">
                            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                              {relatedPost.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                        </div>
                      </article>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Back to Blog */}
        <div className="container mx-auto px-4 py-12">
          <ScrollReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold"
            >
              <ArrowLeft className="h-5 w-5" />
              Zurück zur Blog-Übersicht
            </Link>
          </ScrollReveal>
        </div>
      </article>

      {/* Structured Data für SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": {
              "@type": "ImageObject",
              "url": post.image,
              "width": 1200,
              "height": 630
            },
            "datePublished": post.date,
            "dateModified": post.updatedDate || post.date,
            "author": {
              "@type": "Organization",
              "name": post.author.name,
              "url": "https://brivaro.de"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Brivaro",
              "url": "https://brivaro.de",
              "logo": {
                "@type": "ImageObject",
                "url": "https://brivaro.de/favicon.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://brivaro.de/blog/${post.slug}`
            },
            "keywords": post.tags.join(", "),
            "articleSection": post.category,
            "inLanguage": "de-DE"
          })
        }}
      />

      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://brivaro.de"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://brivaro.de/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `https://brivaro.de/blog/${post.slug}`
              }
            ]
          })
        }}
      />
    </>
  )
}
