import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "System Status - Brivaro Verfügbarkeit",
  description: "Aktuelle Verfügbarkeit und Status aller Brivaro Services. Echtzeit-Monitoring der Lead-Generation-Plattform.",
  keywords: [
    "Brivaro Status",
    "System Verfügbarkeit",
    "Service Status",
    "Uptime",
    "System Monitoring",
  ],
  openGraph: {
    title: "System Status - Brivaro Verfügbarkeit",
    description: "Aktuelle Verfügbarkeit und Status aller Brivaro Services",
    type: "website",
    url: "https://brivaro.de/status",
  },
  alternates: {
    canonical: "https://brivaro.de/status",
  },
}

export default function StatusLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
