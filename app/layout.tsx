import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { StructuredData } from "@/components/seo/StructuredData";
import { Navigation } from "@/components/layout/Navigation";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { Footer } from "@/components/sections/Footer";
import { CookieConsentBanner } from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Optimized: faster LCP, prevents invisible text
  preload: true, // Faster font loading
  adjustFontFallback: true, // Metric-compatible fallback
});

export const metadata: Metadata = {
  metadataBase: new URL('https://brivaro.de'),
  title: {
    default: "Brivaro - Lead Generation für Web-Agenturen | DSGVO",
    template: "%s | Brivaro"
  },
  description: "Automatisierte B2B Lead-Generierung für Web-Agenturen. 80% Zeitersparnis, 3x höhere Response-Rate. DSGVO-konform mit KI. Jetzt kostenlos testen.",
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  keywords: [
    "Lead Generation Deutschland",
    "B2B Leadgenerierung",
    "Automatisierte Kundenakquise",
    "Web Agentur Lead Generation",
    "DSGVO Lead Generation",
    "KI Lead Generierung",
    "Email Automation B2B",
    "Vertriebsautomatisierung",
    "Cold Outreach Deutschland",
    "Sales Automation Software",
    "Lead Generation Tool",
    "Kundengewinnung Web-Agenturen",
    "B2B Marketing Automation",
    "Lead Scraping",
    "Email Marketing Automation",
    "Cold Email Software",
    "Lead Generation Software",
    "Automatische Kundengewinnung"
  ],
  authors: [{ name: "Brivaro GmbH", url: "https://brivaro.de" }],
  creator: "Brivaro",
  publisher: "Brivaro GmbH",
  alternates: {
    canonical: "https://brivaro.de",
    languages: {
      'de-DE': 'https://brivaro.de',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://brivaro.de',
    siteName: 'Brivaro',
    title: 'Brivaro - Lead Generation auf Autopilot für Web-Agenturen',
    description: '80% weniger Zeitaufwand. 3x höhere Response-Rate. DSGVO-konforme Lead-Generierung mit KI.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Brivaro - Automatisierte Lead Generation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@brivaro',
    creator: '@brivaro',
    title: 'Brivaro - Lead Generation auf Autopilot',
    description: '80% weniger Zeitaufwand. 3x höhere Response-Rate.',
    images: ['/twitter-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'DEINE_GOOGLE_VERIFICATION_CODE_HIER',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        {/* Resource Hints for PageSpeed */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cal.com" />
        <link rel="preconnect" href="https://app.cal.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <Navigation />
          <StickyCTA />
          {children}
          <Footer />
          <CookieConsentBanner />
          <StructuredData />
        </ThemeProvider>
      </body>
    </html>
  );
}
