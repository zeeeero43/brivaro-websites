"use client"

import { useEffect } from 'react'
import * as CookieConsent from 'vanilla-cookieconsent'
import 'vanilla-cookieconsent/dist/cookieconsent.css'

// Declare global type for window.CookieConsent
declare global {
  interface Window {
    CookieConsent: typeof CookieConsent
  }
}

export function CookieConsentBanner() {
  useEffect(() => {
    // Make CookieConsent available globally
    if (typeof window !== 'undefined') {
      window.CookieConsent = CookieConsent
    }

    CookieConsent.run({
      // Kategorien
      categories: {
        necessary: {
          enabled: true,
          readOnly: true
        },
        analytics: {
          enabled: false,
          readOnly: false
        }
      },

      // Deutsche Sprache
      language: {
        default: 'de',
        translations: {
          de: {
            consentModal: {
              title: 'Wir nutzen Cookies',
              description: 'Wir verwenden Cookies, um Inhalte und Anzeigen zu personalisieren, Funktionen für soziale Medien anbieten zu können und die Zugriffe auf unsere Website zu analysieren. Außerdem geben wir Informationen zu Ihrer Verwendung unserer Website an unsere Partner weiter.',
              acceptAllBtn: 'Alle akzeptieren',
              acceptNecessaryBtn: 'Nur notwendige',
              showPreferencesBtn: 'Einstellungen verwalten',
              footer: '<a href="/datenschutz">Datenschutzerklärung</a>\n<a href="/impressum">Impressum</a>'
            },
            preferencesModal: {
              title: 'Cookie-Einstellungen',
              acceptAllBtn: 'Alle akzeptieren',
              acceptNecessaryBtn: 'Nur notwendige',
              savePreferencesBtn: 'Einstellungen speichern',
              closeIconLabel: 'Schließen',
              serviceCounterLabel: 'Dienste',
              sections: [
                {
                  title: 'Cookie-Verwendung',
                  description: 'Wir verwenden Cookies, um die grundlegenden Funktionen der Website zu gewährleisten und Ihr Online-Erlebnis zu verbessern. Sie können für jede Kategorie wählen, ob Sie sich an- oder abmelden möchten.'
                },
                {
                  title: 'Notwendige Cookies <span class="pm__badge">Immer aktiviert</span>',
                  description: 'Diese Cookies sind für das ordnungsgemäße Funktionieren der Website unerlässlich. Ohne diese Cookies würde die Website nicht richtig funktionieren.',
                  linkedCategory: 'necessary'
                },
                {
                  title: 'Analyse Cookies',
                  description: 'Analyse-Cookies helfen uns, unsere Website zu verbessern, indem sie Informationen über deren Nutzung sammeln und melden. Wir verwenden Google Analytics 4, um die Nutzung unserer Website zu verstehen.',
                  linkedCategory: 'analytics'
                },
                {
                  title: 'Weitere Informationen',
                  description: 'Bei Fragen zu unserer Cookie-Richtlinie und Ihren Auswahlmöglichkeiten wenden Sie sich bitte an uns unter <a href="mailto:info@brivaro.de">info@brivaro.de</a>. Weitere Informationen finden Sie in unserer <a href="/datenschutz">Datenschutzerklärung</a> und <a href="/cookies">Cookie-Richtlinie</a>.'
                }
              ]
            }
          }
        }
      },

      // GUI-Optionen
      guiOptions: {
        consentModal: {
          layout: 'box inline',
          position: 'bottom right',
          equalWeightButtons: true,
          flipButtons: false
        },
        preferencesModal: {
          layout: 'box',
          position: 'right',
          equalWeightButtons: true,
          flipButtons: false
        }
      },

      // Callback wenn Einstellungen geändert werden
      onConsent: ({ cookie }) => {
        // Wenn Analytics akzeptiert wurde
        if (cookie.categories.includes('analytics')) {
          // Hier Google Analytics initialisieren (wenn implementiert)
          console.log('Analytics cookies accepted')
        }
      },

      onChange: ({ changedCategories }) => {
        if (changedCategories.includes('analytics')) {
          if (CookieConsent.acceptedCategory('analytics')) {
            console.log('Analytics enabled')
            // Google Analytics aktivieren
          } else {
            console.log('Analytics disabled')
            // Google Analytics deaktivieren
          }
        }
      }
    })
  }, [])

  return null
}
