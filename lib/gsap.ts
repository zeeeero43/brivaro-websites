import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export { gsap, ScrollTrigger }

// Utility functions for common animations
export const fadeInUp = (element: string | Element, options = {}) => {
  return gsap.from(element, {
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    ...options,
  })
}

export const staggerFadeIn = (elements: string | Element[], options = {}) => {
  return gsap.from(elements, {
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out",
    ...options,
  })
}

export const scaleIn = (element: string | Element, options = {}) => {
  return gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: 0.7,
    ease: "back.out(1.4)",
    ...options,
  })
}

export const drawLine = (element: string | Element, options = {}) => {
  return gsap.from(element, {
    scaleX: 0,
    transformOrigin: "left center",
    duration: 1.2,
    ease: "power3.inOut",
    ...options,
  })
}
