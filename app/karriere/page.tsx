import type { Metadata } from "next"
import Link from "next/link"
import { Briefcase, MapPin, Euro, Clock, TrendingUp, Users, Zap, Heart, Coffee, Laptop, GraduationCap, Calendar } from "lucide-react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"

export const metadata: Metadata = {
  title: "Karriere - Jobs bei Brivaro",
  description: "Werde Teil von Brivaro und bau die Zukunft der Lead-Generierung mit uns. Remote Jobs in Engineering, Sales, Marketing & Product. Jetzt bewerben!",
  keywords: [
    "Brivaro Jobs",
    "Remote Jobs Deutschland",
    "Web Development Jobs",
    "Sales Jobs",
    "Marketing Jobs",
    "Startup Jobs Deutschland",
    "Tech Jobs Remote"
  ],
  openGraph: {
    title: "Karriere - Jobs bei Brivaro",
    description: "Bau die Zukunft der Lead-Generierung mit uns. Remote-First, Top-Gehalt, moderne Tech.",
    type: "website",
    url: "https://brivaro.de/karriere",
  },
  alternates: {
    canonical: "https://brivaro.de/karriere",
  },
}

interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  salary: string
  description: string
  responsibilities: string[]
  requirements: string[]
  niceToHave: string[]
}

const jobs: Job[] = [
  {
    id: "senior-full-stack-developer",
    title: "Senior Full-Stack Developer (Next.js/Node.js)",
    department: "Engineering",
    location: "Remote (Deutschland)",
    type: "Vollzeit",
    salary: "70.000 - 85.000€",
    description: "Entwickle die nächste Generation unserer Lead-Scraping-Engine und KI-Integration. Du arbeitest mit modernstem Tech-Stack und löst spannende technische Herausforderungen.",
    responsibilities: [
      "Lead-Scraping-Engine optimieren und skalieren",
      "KI/ML-Integration für Email-Personalisierung",
      "Performance-Optimierung für Tausende gleichzeitiger Nutzer",
      "Code Reviews und Mentoring von Junior-Entwicklern",
      "Architektur-Entscheidungen treffen"
    ],
    requirements: [
      "5+ Jahre Erfahrung mit React/Next.js und Node.js",
      "Expertise in TypeScript, PostgreSQL, Redis",
      "Erfahrung mit Cloud-Infrastruktur (AWS/GCP)",
      "Verständnis für Web Scraping und APIs",
      "Fließend Deutsch und Englisch"
    ],
    niceToHave: [
      "Erfahrung mit AI/ML (OpenAI, LangChain)",
      "DevOps-Kenntnisse (Docker, Kubernetes)",
      "Open-Source Contributions",
      "Startup-Erfahrung"
    ]
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote (Deutschland)",
    type: "Vollzeit",
    salary: "65.000 - 80.000€",
    description: "Skaliere unsere Infrastruktur für exponentielles Wachstum. Automatisiere alles was automatisierbar ist und sorge für 99.9% Uptime.",
    responsibilities: [
      "CI/CD Pipeline aufbauen und optimieren",
      "Infrastructure as Code (Terraform, CloudFormation)",
      "Monitoring, Logging, Alerting (Datadog, Sentry)",
      "Skalierung für 1000+ Kunden vorbereiten",
      "Security Best Practices implementieren"
    ],
    requirements: [
      "3+ Jahre DevOps/SRE Erfahrung",
      "Expertise in AWS oder GCP",
      "Docker, Kubernetes, CI/CD Pipelines",
      "Scripting (Bash, Python)",
      "Monitoring-Tools (Prometheus, Grafana, Datadog)"
    ],
    niceToHave: [
      "Zertifizierungen (AWS/GCP/Kubernetes)",
      "GitOps-Erfahrung (ArgoCD, Flux)",
      "Cost-Optimization Expertise",
      "Incident Management Erfahrung"
    ]
  },
  {
    id: "sales-development-representative",
    title: "Sales Development Representative",
    department: "Sales",
    location: "Remote (Deutschland)",
    type: "Vollzeit",
    salary: "45.000€ + Commission",
    description: "Du bist der erste Kontaktpunkt für Web-Agenturen die mit Brivaro wachsen wollen. Führe Demo-Calls, qualifiziere Leads und schließe Deals ab.",
    responsibilities: [
      "Outbound-Kampagnen für Web-Agenturen durchführen",
      "Demo-Calls führen und Produkt präsentieren",
      "Leads qualifizieren und Pipeline aufbauen",
      "Close Deals und Upselling bei Bestandskunden",
      "Kundenfeedback an Product Team weitergeben"
    ],
    requirements: [
      "2+ Jahre Erfahrung im B2B Sales (SaaS bevorzugt)",
      "Hervorragende Kommunikationsfähigkeiten",
      "Selbstständige, strukturierte Arbeitsweise",
      "Erfahrung mit CRM-Tools (HubSpot, Salesforce)",
      "Verhandlungssicher in Deutsch"
    ],
    niceToHave: [
      "Vertriebs-Erfahrung im Marketing-Tech Bereich",
      "Netzwerk in der Web-Agentur-Branche",
      "Erfahrung mit Cold Outreach",
      "Hunter-Mentalität"
    ]
  },
  {
    id: "content-marketing-manager",
    title: "Content Marketing Manager",
    department: "Marketing",
    location: "Remote (Deutschland)",
    type: "Vollzeit",
    salary: "50.000 - 65.000€",
    description: "Erstelle Content der Web-Agenturen wirklich hilft. Blog, SEO, Social Media, Email - du baust unseren Content-Funnel von 0 auf 100.",
    responsibilities: [
      "Content-Strategie entwickeln und umsetzen",
      "Blog-Artikel, Case Studies, Whitepapers schreiben",
      "SEO-Optimierung für Top-Rankings",
      "Social Media Presence aufbauen (LinkedIn, Twitter)",
      "Email-Marketing Kampagnen erstellen"
    ],
    requirements: [
      "3+ Jahre Content Marketing Erfahrung (B2B)",
      "Exzellente Schreibfähigkeiten auf Deutsch",
      "SEO-Expertise (Keyword Research, On-Page, Link-Building)",
      "Datengetriebenes Arbeiten (Analytics, A/B-Tests)",
      "Portfolio mit nachweisbaren Erfolgen"
    ],
    niceToHave: [
      "Erfahrung mit Marketing-Tech/SaaS",
      "Video-Content Erstellung",
      "Community Building Erfahrung",
      "Persönliche Brand auf LinkedIn"
    ]
  },
  {
    id: "product-manager",
    title: "Product Manager",
    department: "Product",
    location: "Remote (Deutschland)",
    type: "Vollzeit",
    salary: "60.000 - 75.000€",
    description: "Shape die Zukunft von Brivaro. Du verantwortest die Roadmap, priorisierst Features und stellst sicher dass wir das bauen was Kunden wirklich brauchen.",
    responsibilities: [
      "Product Roadmap entwickeln und kommunizieren",
      "User Research und Customer Interviews führen",
      "Features priorisieren basierend auf Impact",
      "Eng mit Engineering und Design zusammenarbeiten",
      "KPIs definieren und Product Analytics treiben"
    ],
    requirements: [
      "3+ Jahre Product Management Erfahrung (B2B SaaS)",
      "Datengetriebene Entscheidungsfindung",
      "Technisches Verständnis (APIs, Datenbanken)",
      "Exzellente Kommunikationsfähigkeiten",
      "Customer-First Mindset"
    ],
    niceToHave: [
      "Erfahrung mit Marketing-Automation Tools",
      "Technical Background (Engineering)",
      "Product-Led Growth Erfahrung",
      "Startup-Erfahrung"
    ]
  }
]

const benefits = [
  {
    icon: Laptop,
    title: "Remote-First",
    description: "Arbeite von überall in Deutschland. Wir sind 100% remote und asynchron."
  },
  {
    icon: Euro,
    title: "Top-Gehalt + Equity",
    description: "Wettbewerbsfähiges Gehalt plus Firmenanteile. Du profitierst vom Erfolg."
  },
  {
    icon: GraduationCap,
    title: "Weiterbildung",
    description: "1.500€ jährliches Budget für Konferenzen, Kurse, Bücher."
  },
  {
    icon: Laptop,
    title: "Top Equipment",
    description: "MacBook Pro, Monitor, ergonomischer Stuhl - alles was du brauchst."
  },
  {
    icon: Calendar,
    title: "Flexible Zeiten",
    description: "30 Tage Urlaub + flexible Arbeitszeiten. Work-Life-Balance ist wichtig."
  },
  {
    icon: Users,
    title: "Team Events",
    description: "Quartalsweise Team-Retreats in Deutschland. Lerne das Team kennen."
  }
]

export default function KarrierePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-40 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
              <Briefcase className="h-5 w-5 text-primary" />
              <span className="font-semibold text-primary">Wir wachsen</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight px-4">
              Bau die Zukunft der{" "}
              <span className="gradient-text">Lead-Generierung</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 px-4">
              Wir sind von 0 auf 500+ Kunden in 18 Monaten gewachsen.
              Werde Teil eines Teams, das Web-Agenturen in ganz Deutschland hilft zu wachsen.
            </p>
          </div>
        </ScrollReveal>

        {/* Why Brivaro */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-6xl mx-auto mb-20">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Warum <span className="gradient-text">Brivaro</span>?
              </h2>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Hyperwachstum</h3>
                  <p className="text-gray-600 text-sm">0 → 500+ Kunden in 18 Monaten</p>
                </div>
                <div>
                  <Heart className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Impact</h3>
                  <p className="text-gray-600 text-sm">500k+ Leads generiert für unsere Kunden</p>
                </div>
                <div>
                  <Zap className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Innovation</h3>
                  <p className="text-gray-600 text-sm">KI, Automation, modernster Tech-Stack</p>
                </div>
                <div>
                  <Users className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Team</h3>
                  <p className="text-gray-600 text-sm">Klein, fokussiert, hochperformant</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Benefits */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center px-4">
              Was wir <span className="gradient-text">bieten</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <benefit.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Jobs */}
        <ScrollReveal delay={0.3}>
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center px-4">
              Offene <span className="gradient-text">Positionen</span>
            </h2>
            <div className="space-y-6">
              {jobs.map((job, index) => (
                <ScrollReveal key={job.id} delay={0.1 * index}>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    {/* Job Header */}
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <div className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full mb-2">
                            {job.department}
                          </div>
                          <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {job.type}
                            </div>
                            <div className="flex items-center gap-1">
                              <Euro className="h-4 w-4" />
                              {job.salary}
                            </div>
                          </div>
                        </div>
                        <a
                          href={`mailto:jobs@brivaro.de?subject=Bewerbung: ${job.title}`}
                          className="w-full md:w-auto bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-center"
                        >
                          Jetzt bewerben
                        </a>
                      </div>
                    </div>

                    {/* Job Details */}
                    <div className="p-6">
                      <p className="text-gray-700 mb-6 leading-relaxed">{job.description}</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold mb-3">Deine Aufgaben:</h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                <div className="bg-primary/20 rounded-full p-0.5 mt-1 flex-shrink-0">
                                  <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                                </div>
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold mb-3">Das bringst du mit:</h4>
                          <ul className="space-y-2 mb-4">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                <div className="bg-green-100 rounded-full p-0.5 mt-1 flex-shrink-0">
                                  <div className="h-1.5 w-1.5 bg-green-600 rounded-full" />
                                </div>
                                {req}
                              </li>
                            ))}
                          </ul>

                          <h4 className="font-bold mb-3 text-sm">Nice-to-have:</h4>
                          <ul className="space-y-2">
                            {job.niceToHave.map((nice, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                <div className="bg-gray-200 rounded-full p-0.5 mt-1 flex-shrink-0">
                                  <div className="h-1.5 w-1.5 bg-gray-400 rounded-full" />
                                </div>
                                {nice}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Application Process */}
        <ScrollReveal delay={0.4}>
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center px-4">
              Der <span className="gradient-text">Bewerbungsprozess</span>
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-5 gap-6">
                {[
                  { step: "1", title: "Bewerbung", desc: "Per Email" },
                  { step: "2", title: "Kennenlernen", desc: "30 Min Call" },
                  { step: "3", title: "Challenge", desc: "Case Study" },
                  { step: "4", title: "Team-Fit", desc: "Interview" },
                  { step: "5", title: "Offer", desc: "Welcome!" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-primary text-white rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                      {item.step}
                    </div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.5}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Keine passende Position dabei?
              </h2>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Wir sind immer auf der Suche nach Talenten.
                Schick uns eine Initiativbewerbung!
              </p>
              <a
                href="mailto:jobs@brivaro.de?subject=Initiativbewerbung"
                className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Initiativ bewerben
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Structured Data for Jobs */}
      {jobs.map((job) => (
        <script
          key={job.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JobPosting",
              "title": job.title,
              "description": job.description,
              "identifier": {
                "@type": "PropertyValue",
                "name": "Brivaro",
                "value": job.id
              },
              "datePosted": "2025-01-01",
              "employmentType": job.type === "Vollzeit" ? "FULL_TIME" : "PART_TIME",
              "hiringOrganization": {
                "@type": "Organization",
                "name": "Brivaro",
                "sameAs": "https://brivaro.de",
                "logo": "https://brivaro.de/favicon.png"
              },
              "jobLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "DE",
                  "addressLocality": "Remote"
                }
              },
              "baseSalary": {
                "@type": "MonetaryAmount",
                "currency": "EUR",
                "value": {
                  "@type": "QuantitativeValue",
                  "value": job.salary,
                  "unitText": "YEAR"
                }
              },
              "applicantLocationRequirements": {
                "@type": "Country",
                "name": "DE"
              },
              "jobLocationType": "TELECOMMUTE"
            })
          }}
        />
      ))}
    </div>
  )
}
