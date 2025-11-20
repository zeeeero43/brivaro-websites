import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, Search, Tag } from "lucide-react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"

export const metadata: Metadata = {
  title: "Blog - Lead Generation Tipps & Best Practices",
  description: "Expertenwissen zu B2B Lead-Generierung, Cold Outreach, DSGVO-konformer Kundenakquise und Vertriebsautomatisierung für Web-Agenturen. Praktische Tipps und Strategien.",
  keywords: [
    "Lead Generation Blog",
    "B2B Vertrieb Tipps",
    "Cold Outreach Best Practices",
    "DSGVO Lead Generation",
    "Email Marketing Strategien",
    "Kundenakquise Tipps",
    "Sales Automation",
    "Web Agentur Marketing"
  ],
  openGraph: {
    title: "Brivaro Blog - Lead Generation Expertise",
    description: "Expertenwissen zu B2B Lead-Generierung und Vertriebsautomatisierung",
    type: "website",
    url: "https://brivaro.de/blog",
  },
  alternates: {
    canonical: "https://brivaro.de/blog",
  },
}

// Blog-Post Typ
interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  image: string
  featured: boolean
}

// Demo Blog-Posts - später aus CMS oder Markdown laden
const blogPosts: BlogPost[] = [
  {
    slug: "cold-email-kampagne-2025",
    title: "Cold Email Kampagnen 2025: 7 Strategien für 3x höhere Response-Raten",
    excerpt: "Entdecke die neuesten Strategien für erfolgreiche Cold Email Kampagnen. Von KI-Personalisierung bis DSGVO-Compliance - alles was du 2025 wissen musst.",
    date: "2025-01-15",
    readTime: "8 Min.",
    category: "Cold Outreach",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop",
    featured: true,
  },
  {
    slug: "dsgvo-konforme-lead-generierung",
    title: "DSGVO-konforme Lead-Generierung: Der komplette Leitfaden für 2025",
    excerpt: "Rechtssichere Lead-Generierung in Deutschland. Alle wichtigen Aspekte zu DSGVO, TDDDG und rechtlichen Fallstricken - verständlich erklärt.",
    date: "2025-01-12",
    readTime: "12 Min.",
    category: "Recht & Compliance",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop",
    featured: true,
  },
  {
    slug: "ki-personalisierung-cold-emails",
    title: "KI-Personalisierung: Wie du mit ChatGPT deine Cold Emails optimierst",
    excerpt: "Automatisierte Personalisierung mit KI - ohne den persönlichen Touch zu verlieren. Praktische Prompts und Strategien für bessere Conversion-Raten.",
    date: "2025-01-10",
    readTime: "10 Min.",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    featured: true,
  },
  {
    slug: "lead-scraping-best-practices",
    title: "Lead Scraping Best Practices: Qualität vor Quantität",
    excerpt: "Wie du hochwertige B2B Leads findest und qualifizierst. Tools, Techniken und Strategien für nachhaltige Lead-Generierung.",
    date: "2025-01-08",
    readTime: "7 Min.",
    category: "Lead Generation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    featured: false,
  },
  {
    slug: "email-deliverability-optimieren",
    title: "Email Deliverability 2025: So landen deine Mails im Posteingang",
    excerpt: "Spam-Filter umgehen und Zustellraten maximieren. Domain-Warming, SPF, DKIM, DMARC und weitere technische Optimierungen einfach erklärt.",
    date: "2025-01-05",
    readTime: "9 Min.",
    category: "Email Marketing",
    image: "https://images.unsplash.com/photo-1526554850534-7c78330d5f90?w=800&h=400&fit=crop",
    featured: false,
  },
  {
    slug: "sales-automation-roi",
    title: "Sales Automation ROI: Lohnt sich die Investition?",
    excerpt: "Detaillierte Kostenanalyse und ROI-Berechnung für Sales Automation Tools. Real-World Beispiele von Web-Agenturen.",
    date: "2025-01-03",
    readTime: "11 Min.",
    category: "Business",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    featured: false,
  },
]

// Einzigartige Kategorien extrahieren
const categories = Array.from(new Set(blogPosts.map(post => post.category)))

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gray-50 pt-40 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-6">
              <Tag className="h-5 w-5 text-primary" />
              <span className="font-semibold">Wissen & Insights</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Brivaro <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Expertenwissen zu Lead-Generierung, Cold Outreach, DSGVO-Compliance und
              Vertriebsautomatisierung für moderne Web-Agenturen.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Blog durchsuchen..."
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <button className="px-6 py-2 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors">
              Alle Artikel
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-full glass hover:bg-white/50 transition-colors font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-20">
            <ScrollReveal delay={0.2}>
              <h2 className="text-3xl font-bold mb-8">Featured Artikel</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <ScrollReveal key={post.slug} delay={0.1 * index}>
                  <Link href={`/blog/${post.slug}`}>
                    <article className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                          style={{ backgroundImage: `url(${post.image})` }}
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                            {post.category}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <time dateTime={post.date}>
                              {new Date(post.date).toLocaleDateString('de-DE', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </time>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center text-primary font-semibold group-hover:gap-3 transition-all">
                          <span>Weiterlesen</span>
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        {regularPosts.length > 0 && (
          <div>
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-8">Alle Artikel</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <ScrollReveal key={post.slug} delay={0.1 * index}>
                  <Link href={`/blog/${post.slug}`}>
                    <article className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                          style={{ backgroundImage: `url(${post.image})` }}
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full">
                            {post.category}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <time dateTime={post.date}>
                              {new Date(post.date).toLocaleDateString('de-DE', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </time>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center text-primary font-semibold group-hover:gap-3 transition-all">
                          <span>Weiterlesen</span>
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Structured Data für SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Brivaro Blog",
            "description": "Expertenwissen zu B2B Lead-Generierung und Vertriebsautomatisierung",
            "url": "https://brivaro.de/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Brivaro",
              "url": "https://brivaro.de",
              "logo": {
                "@type": "ImageObject",
                "url": "https://brivaro.de/favicon.png"
              }
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "datePublished": post.date,
              "url": `https://brivaro.de/blog/${post.slug}`,
              "author": {
                "@type": "Organization",
                "name": "Brivaro"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Brivaro"
              },
              "image": post.image
            }))
          })
        }}
      />
    </div>
  )
}
