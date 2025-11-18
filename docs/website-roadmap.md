# Brivaro Website - Roadmap & TODO

Nächste Schritte für die Website nach Launch der Landing Page.

---

## ✅ **ERLEDIGT**

- [x] Landing Page Design & Entwicklung
- [x] PageSpeed Optimierung Phase 1 (75-80/100)
- [x] Logo & Favicon Integration
- [x] Navigation optimiert
- [x] SEO Basics (Meta-Tags, Structured Data)
- [x] AI Bots erlaubt (robots.txt)
- [x] Hydration Errors behoben
- [x] Video-Modal zentriert
- [x] VPS Feature-Ideen dokumentiert

---

## 🔥 **SOFORT (Diese Woche)**

### 1. Production Deployment (30 Min) 🚀
**Warum:** Website muss live gehen!

**Optionen:**
- **Vercel** (Empfohlen - Einfach & Schnell)
  - GitHub Repo verbinden
  - Auto-Deploy bei jedem Push
  - Kostenlos für kleine Projekte

- **Eigener VPS** (Mehr Kontrolle)
  - Nginx + PM2 Setup
  - Mehr Arbeit, mehr Features möglich

**Schritte:**
1. GitHub Repo erstellen
2. Code pushen
3. Vercel Account erstellen
4. Repo verbinden
5. Deploy! ✅

---

### 2. Domain Setup (15 Min) 🌐
**Domain:** brivaro.de

**Schritte:**
1. Domain kaufen (falls noch nicht)
   - Namecheap / Cloudflare / Hetzner
   - ~10€/Jahr

2. DNS konfigurieren:
   ```
   A Record: @ → Vercel IP (oder VPS IP)
   CNAME: www → brivaro.de
   ```

3. SSL automatisch via Vercel/Let's Encrypt

---

### 3. Analytics Setup (15 Min) 📊
**Warum:** Du musst Traffic & Conversions tracken!

**Empfehlung: Plausible Analytics**
- Privacy-friendly (DSGVO-compliant)
- Kein Cookie-Banner nötig
- Einfaches Dashboard
- ~9€/Monat

**Alternative: Umami** (Self-hosted, kostenlos)

**Installation:**
```html
<!-- In app/layout.tsx <head> -->
<script defer data-domain="brivaro.de"
  src="https://plausible.io/js/script.js">
</script>
```

**Was tracken:**
- Pageviews
- Button-Clicks ("Jetzt starten", "Demo ansehen")
- Form-Submissions
- Scroll-Depth

---

### 4. Google Search Console (10 Min) 🔍
**Warum:** Google muss deine Seite kennen!

**Schritte:**
1. Gehe zu: https://search.google.com/search-console
2. Domain hinzufügen: brivaro.de
3. Verification:
   ```tsx
   // In app/layout.tsx bereits vorbereitet (Zeile 87):
   verification: {
     google: 'DEINE_GOOGLE_VERIFICATION_CODE_HIER',
   }
   ```
4. Sitemap submitten: https://brivaro.de/sitemap.xml

**Nutzen:**
- Siehst welche Keywords Traffic bringen
- Indexierungs-Status
- Core Web Vitals Monitoring

---

### 5. Demo-Video hochladen (1-2 Std) 🎥
**Aktuell:** Placeholder "Video Player Placeholder"

**Optionen:**

#### Option A: YouTube (Empfohlen)
```tsx
// In components/sections/DemoVideo.tsx ersetzen:
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
  className="w-full h-full"
  allow="autoplay; fullscreen"
/>
```

#### Option B: Vimeo (Professioneller)
```tsx
<iframe
  src="https://player.vimeo.com/video/VIDEO_ID?autoplay=1"
  className="w-full h-full"
  allow="autoplay; fullscreen"
/>
```

#### Option C: Loom (Schnell & Einfach)
- Screen Recording mit Loom
- Embed Code kopieren
- Fertig!

**Video-Content Ideen:**
- 90 Sekunden Walkthrough
- Zeig Lead-Scraping in Action
- KI-Email-Generierung Demo
- Dashboard-Übersicht

---

### 6. CTA-Flow implementieren (2-3 Std) 💰
**Problem:** "Jetzt starten" Button geht nirgendwo hin!

#### Was ist ein CTA Flow?
Der Weg vom Button-Click bis zur Conversion.

#### Option 1: Demo-Buchung (Empfohlen für Start)
**Tool:** Cal.com (kostenlos) oder Calendly

**Flow:**
```
1. User klickt "Jetzt starten"
2. Modal öffnet sich oder neue Seite
3. Calendly Embed zeigt verfügbare Zeiten
4. User bucht 30-Min Demo-Call
5. Bekommt Confirmation-Email
6. Du bekommst Notification
```

**Implementation:**
```tsx
// components/sections/Hero.tsx
<Button onClick={() => window.open('https://cal.com/brivaro/demo', '_blank')}>
  Jetzt starten
</Button>
```

#### Option 2: Waitlist + Email-Collection
**Tool:** Typeform oder eigenes Formular

**Flow:**
```
1. User klickt "Jetzt starten"
2. Modal mit Email-Input
3. Optional: 2-3 Qualifying-Fragen
4. Landet auf Waitlist
5. Bekommt "Du bist dabei!" Email
6. Du bekommst Lead in CRM
```

**Implementation:**
```tsx
// Eigenes Modal mit React Hook Form + Resend API
const handleSubmit = async (email) => {
  await fetch('/api/waitlist', {
    method: 'POST',
    body: JSON.stringify({ email })
  })
  // Send welcome email via Resend
}
```

#### Option 3: Direct Stripe Payment (Später)
**Für Self-Service SaaS**

**Flow:**
```
1. User wählt Plan (Starter/Pro)
2. Klickt "Jetzt kaufen"
3. Stripe Checkout öffnet
4. Zahlt 399€
5. Bekommt Login-Daten
6. Kann sofort nutzen
```

**Empfehlung:** Start mit **Option 1 (Demo-Buchung)** - am einfachsten!

---

## 📋 **KURZFRISTIG (Nächste 2 Wochen)**

### 7. Email-Marketing Setup 📧
**Warum:** Leads müssen genurtured werden!

**Tool-Empfehlungen:**
- **Resend** (Developer-friendly, günstig)
- **Loops.so** (No-Code Email Automation)
- **ConvertKit** (Klassisch, aber gut)

**Email-Flows einrichten:**

#### Welcome-Sequence (nach Waitlist)
```
Tag 1: "Willkommen bei Brivaro! 🎉"
Tag 3: "Wie Brivaro funktioniert (Video)"
Tag 5: "Case Study: Agentur XYZ steigerte Leads um 300%"
Tag 7: "Bereit loszulegen? Buche deine Demo"
```

#### Demo-Follow-Up
```
Direkt nach Demo: "Danke für das Gespräch!"
Tag 2: "Hier sind die Links die ich erwähnt habe"
Tag 5: "Hast du noch Fragen?"
Tag 10: "Last Chance: 20% Early-Bird Discount"
```

---

### 8. Legal Pages erstellen (2-3 Std) ⚖️
**PFLICHT in Deutschland!**

#### Erstellen:
1. **Impressum** (`/impressum`)
   - Firmenname, Adresse
   - Geschäftsführer
   - Handelsregister
   - Kontakt

2. **Datenschutz** (`/datenschutz`)
   - Welche Daten sammelst du?
   - Analytics (Plausible)
   - Email-Provider (Resend)
   - User-Rechte (DSGVO)

3. **AGB** (`/agb`)
   - Service-Beschreibung
   - Pricing
   - Kündigungsrechte
   - Haftungsausschluss

**Tools:**
- **eRecht24** (Generator - ~15€/Monat)
- **Anwalt.de** (Templates)
- **Händlerbund** (Full-Service)

**Implementation:**
```tsx
// Neue Files erstellen:
app/impressum/page.tsx
app/datenschutz/page.tsx
app/agb/page.tsx

// Footer Links updaten (components/sections/Footer.tsx)
<Link href="/impressum">Impressum</Link>
<Link href="/datenschutz">Datenschutz</Link>
<Link href="/agb">AGB</Link>
```

---

### 9. Sitemap generieren (15 Min) 🗺️
**Warum:** Hilft Google beim Crawlen

**Next.js macht das automatisch!**

Erstelle: `app/sitemap.ts`
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://brivaro.de',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://brivaro.de/impressum',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://brivaro.de/datenschutz',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    // Später: Blog-Posts
  ]
}
```

Submit dann in Google Search Console!

---

### 10. Content finalisieren ✍️

#### Aktuell Placeholder:
- Demo-Video → Echtes Video hochladen
- Case Studies → Echte Kunden-Stories
- Testimonials → Beta-Tester Feedback
- OG-Image → Screenshot der Website

#### Case Studies schreiben:
**Template:**
```markdown
## Agentur XYZ steigerte Leads um 300%

**Challenge:**
"Wir haben Stunden mit Cold-Calling verbracht..."

**Solution:**
"Mit Brivaro automatisieren wir jetzt..."

**Results:**
- 300% mehr qualifizierte Leads
- 80% Zeitersparnis
- ROI von 1:15

**Testimonial:**
"Brivaro hat unser Business transformiert" - Max Mustermann, CEO
```

---

### 11. OG-Image & Social Sharing 🖼️
**Aktuell:** `og-image.svg` (Placeholder)

**Erstellen:**
1. Screenshot von Hero-Section machen
2. In Figma/Canva designen:
   - Logo
   - Headline: "Lead Generation auf Autopilot"
   - Subtext: "80% Zeitersparnis, 3x Response-Rate"
   - Gradient-Background

3. Exportieren als PNG (1200x630px)

4. Ersetzen:
```bash
# Alte ersetzen
rm public/og-image.svg
# Neue hochladen
cp og-image.png public/og-image.png
```

5. Update `app/layout.tsx`:
```tsx
openGraph: {
  images: [
    {
      url: '/og-image.png', // .svg → .png
      width: 1200,
      height: 630,
    },
  ],
}
```

---

## 🚀 **MITTELFRISTIG (Monat 1)**

### 12. Phase 2 PageSpeed Optimization (90/100) ⚡
**Aktuell:** ~75-80/100

**Optimierungen:**

#### Image Optimization
```bash
# Alle Bilder durch TinyPNG/Squoosh
# Oder nutze next/image mit quality-prop:
<Image
  src="/hero.jpg"
  quality={85}  // Statt 100
  placeholder="blur"
/>
```

#### Font Optimization
```tsx
// Nur nötige Font-Weights laden
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Nur diese
  display: 'swap',
})
```

#### CSS Purging
```bash
# Unused CSS entfernen mit PurgeCSS
npm install -D @fullhuman/postcss-purgecss
```

#### Third-Party Scripts
```tsx
// Alle <script> tags mit next/script + strategy
<Script
  src="https://analytics.example.com"
  strategy="lazyOnload"  // Nicht "beforeInteractive"
/>
```

**Ziel:** 90+/100 auf PageSpeed Insights

---

### 13. A/B Testing Setup 🧪
**Warum:** Optimiere Conversion-Rate!

**Tool-Empfehlungen:**
- **PostHog** (Open-Source, Feature-Rich)
- **Google Optimize** (Kostenlos, aber wird eingestellt)
- **Vercel Edge Config** (A/B direkt im Code)

**Was testen:**

#### Headlines
```
Variante A: "1-3 qualifizierte Anfragen pro Tag auf Autopilot"
Variante B: "Automatisiere deine Kundengewinnung mit KI"
Variante C: "Lead-Generation die funktioniert"
```

#### CTA-Buttons
```
Farbe: Grün vs. Blau vs. Orange
Text: "Jetzt starten" vs. "Demo buchen" vs. "Kostenlos testen"
```

#### Pricing Display
```
Variante A: Monatlich (399€/Monat)
Variante B: Jährlich mit Discount (399€/Monat oder 3990€/Jahr - spare 20%)
Variante C: Nur Custom Pricing
```

**Metriken:**
- Conversion-Rate (Button-Clicks / Visits)
- Bounce-Rate
- Time on Page
- Scroll-Depth

---

### 14. Blog Setup + SEO Content 📝
**Warum:** Organic Traffic aufbauen!

**Struktur:**
```
app/
  blog/
    page.tsx          # Blog-Übersicht
    [slug]/
      page.tsx        # Blog-Post
content/
  posts/
    lead-generation-2025.mdx
    ai-email-automation.mdx
```

**Erste Blog-Posts:**
1. "Lead Generation für Web-Agenturen: Der komplette Guide 2025"
2. "DSGVO-konforme Cold Emails: So geht's richtig"
3. "KI vs. Manuelle Lead-Gen: Der ehrliche Vergleich"
4. "Top 50 Web-Agenturen Benchmark 2025" (Auto-generiert!)

**SEO-Keywords:**
- "Lead Generation Deutschland"
- "Web-Agentur Lead-Gen"
- "DSGVO Cold Outreach"
- "Automatische Kundengewinnung"

**Tools:**
- **MDX** (Markdown mit React Components)
- **Contentlayer** (Type-safe Content)
- **Auto-Publishing** via Auto-Blogger (VPS!)

---

### 15. Conversion Tracking (30 Min) 📈
**Warum:** Wissen was funktioniert!

**Events tracken:**

#### In Plausible:
```tsx
// components/sections/Hero.tsx
<Button onClick={() => {
  // Track event
  window.plausible('CTA Click', {
    props: { location: 'Hero' }
  })
  // Open booking
  window.open('https://cal.com/brivaro/demo')
}}>
  Jetzt starten
</Button>
```

#### Custom Events:
```javascript
// Video-Play
plausible('Video Play')

// Pricing-Plan-Select
plausible('Plan Selected', { props: { plan: 'Starter' }})

// FAQ-Open
plausible('FAQ Opened', { props: { question: 'DSGVO' }})

// Scroll-To-Bottom
plausible('Scroll Complete')
```

**Dashboard dann zeigt:**
```
Jetzt starten (Hero): 245 Clicks
Jetzt starten (Final CTA): 89 Clicks
Video Play: 567 Plays
Plan Selected (Starter): 34 Clicks
```

---

## 🤖 **OPTIONAL: VPS Features (Monat 1-2)**

### 16. Auto-Blogger entwickeln
**Details:** Siehe `/docs/vps-feature-ideas.md` #10

**Quick-Recap:**
- Deepseek API (Content)
- Runware.ai (Bilder)
- Cron-Job (täglich)
- Auto-Publish auf `/blog`

**Aufwand:** 3-4 Tage
**ROI:** Evergreen SEO Content

---

### 17. Live Lead-Qualifier Chatbot
**Details:** Siehe `/docs/vps-feature-ideas.md` #1

**Quick-Recap:**
- User gibt Website ein
- Puppeteer scraped live
- KI analysiert
- Zeigt Probleme in Echtzeit

**Aufwand:** 2-3 Tage
**ROI:** 🔥🔥🔥 Höchste Conversion!

---

### 18. Website Health Check API
**Details:** Siehe `/docs/vps-feature-ideas.md` #3

**Quick-Recap:**
- REST API für Website-Checks
- Partner können embedden
- Du bekommst deren Leads

**Aufwand:** 2-3 Tage
**ROI:** Viral Growth Potential

---

## 📊 **Prioritäten-Matrix**

| Task | Aufwand | Impact | Wann? |
|------|---------|--------|-------|
| **Production Deploy** | 30 Min | 🔥🔥🔥 | SOFORT |
| **Analytics Setup** | 15 Min | 🔥🔥🔥 | SOFORT |
| **Demo Video** | 2 Std | 🔥🔥🔥 | Diese Woche |
| **CTA Flow** | 2-3 Std | 🔥🔥🔥 | Diese Woche |
| **Search Console** | 10 Min | 🔥🔥🔥 | Diese Woche |
| **Legal Pages** | 2 Std | 🔥🔥 | Woche 1 |
| **Email Setup** | 3 Std | 🔥🔥 | Woche 1-2 |
| **Content finalisieren** | 4-6 Std | 🔥🔥 | Woche 2 |
| **OG-Image** | 1 Std | 🔥 | Woche 2 |
| **Sitemap** | 15 Min | 🔥 | Woche 2 |
| **Phase 2 PageSpeed** | 1 Tag | 🔥🔥 | Woche 3 |
| **A/B Testing** | 2 Std | 🔥 | Woche 3-4 |
| **Blog Setup** | 1 Tag | 🔥🔥 | Monat 1 |
| **Auto-Blogger** | 4 Tage | 🔥🔥 | Monat 1-2 |
| **Lead-Qualifier** | 3 Tage | 🔥🔥🔥 | Monat 2 |

---

## 🎯 **Empfohlener 2-Wochen-Plan**

### **Woche 1: Launch**
- [ ] Tag 1: Vercel Deploy + Domain + Analytics
- [ ] Tag 2: Search Console + Demo Video
- [ ] Tag 3: CTA Flow (Cal.com Integration)
- [ ] Tag 4: Legal Pages (Impressum, Datenschutz)
- [ ] Tag 5: Email Setup (Resend + Welcome Flow)
- [ ] Tag 6-7: Content finalisieren (Case Studies, Testimonials)

### **Woche 2: Optimize**
- [ ] Tag 8: OG-Image + Social Sharing
- [ ] Tag 9: Sitemap + Google Submit
- [ ] Tag 10: Conversion Tracking Setup
- [ ] Tag 11-12: Phase 2 PageSpeed
- [ ] Tag 13: A/B Testing Setup
- [ ] Tag 14: Blog Struktur + First Post

### **Nach 2 Wochen:**
✅ Website ist LIVE
✅ Analytics laufen
✅ Leads kommen rein
✅ SEO optimiert
✅ Legal compliant

**→ Dann kannst du mit VPS-Features starten!**

---

## 🛠️ **Tools-Übersicht**

### Must-Have (Sofort)
- **Vercel** - Hosting (kostenlos)
- **Plausible** - Analytics (~9€/Monat)
- **Cal.com** - Demo-Buchung (kostenlos)
- **Resend** - Transactional Emails (~0-20€/Monat)

### Nice-to-Have (Später)
- **PostHog** - A/B Testing + Analytics
- **Stripe** - Payments
- **Contentlayer** - Blog-Content
- **eRecht24** - Legal Texts

### VPS-Stack (Monat 2+)
- **Hetzner VPS** - VC 2-4 (4€/Monat)
- **Deepseek** - AI (~20€/Monat)
- **Runware.ai** - Images (~10€/Monat)
- **Redis** - Cache/Queue
- **PostgreSQL** - Database

---

## 📞 **Support & Fragen**

Wenn du bei einem dieser Schritte Hilfe brauchst:
1. Frag mich! Ich kann dir bei jedem Schritt helfen
2. Next.js Docs: https://nextjs.org/docs
3. Vercel Discord: https://vercel.com/discord

**Let's ship this! 🚀**
