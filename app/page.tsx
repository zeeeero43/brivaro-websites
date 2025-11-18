import { Navigation } from "@/components/layout/Navigation"
import { ScrollProgress } from "@/components/layout/ScrollProgress"
import { StickyCTA } from "@/components/layout/StickyCTA"
import { Hero } from "@/components/sections/Hero"
import { ProblemSolution } from "@/components/sections/ProblemSolution"
import { Stats } from "@/components/sections/Stats"
import { DemoVideo } from "@/components/sections/DemoVideo"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { Features } from "@/components/sections/Features"
import { CaseStudies } from "@/components/sections/CaseStudies"
import { Comparison } from "@/components/sections/Comparison"
import { LeadCalculator } from "@/components/sections/LeadCalculator"
import { Pricing } from "@/components/sections/Pricing"
import { FAQ } from "@/components/sections/FAQ"
import { Trust } from "@/components/sections/Trust"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { Footer } from "@/components/sections/Footer"

// PageSpeed Optimization: Force static generation for instant TTFB
export const dynamic = 'force-static'
export const revalidate = 3600 // ISR: Revalidate every hour

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <StickyCTA />
      <main className="min-h-screen">
        <Hero />
        <ProblemSolution />
        <Stats />
        <DemoVideo />
        <HowItWorks />
        <Features />
        <CaseStudies />
        <Comparison />
        <LeadCalculator />
        <Pricing />
        <FAQ />
        <Trust />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
