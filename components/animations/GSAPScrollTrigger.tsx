"use client"

import React, { useEffect, useRef, ReactNode } from "react"
import { gsap } from "@/lib/gsap"

interface GSAPScrollTriggerProps {
  children: ReactNode
  animation?: "fadeUp" | "fadeIn" | "scale" | "slideLeft" | "slideRight" | "custom"
  start?: string
  end?: string
  scrub?: boolean | number
  pin?: boolean
  markers?: boolean
  stagger?: number
  customAnimation?: (element: HTMLElement) => gsap.core.Tween | gsap.core.Timeline
  className?: string
}

export function GSAPScrollTrigger({
  children,
  animation = "fadeUp",
  start = "top 80%",
  end,
  scrub = false,
  pin = false,
  markers = false,
  stagger = 0,
  customAnimation,
  className,
}: GSAPScrollTriggerProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current
    const ctx = gsap.context(() => {
      let tween: gsap.core.Tween | gsap.core.Timeline

      if (customAnimation) {
        tween = customAnimation(element)
      } else {
        const animationConfigs = {
          fadeUp: {
            y: 60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          fadeIn: {
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          scale: {
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          slideLeft: {
            x: 100,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          slideRight: {
            x: -100,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          custom: {},
        }

        const config = animationConfigs[animation]

        if (stagger > 0) {
          const children = element.children
          tween = gsap.from(children, {
            ...config,
            stagger,
            scrollTrigger: {
              trigger: element,
              start,
              end,
              scrub,
              pin,
              markers,
            },
          })
        } else {
          tween = gsap.from(element, {
            ...config,
            scrollTrigger: {
              trigger: element,
              start,
              end,
              scrub,
              pin,
              markers,
            },
          })
        }
      }

      return () => {
        tween.kill()
      }
    }, elementRef)

    return () => {
      ctx.revert()
    }
  }, [animation, start, end, scrub, pin, markers, stagger, customAnimation])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
