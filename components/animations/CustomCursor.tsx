"use client"

import React, { useEffect, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

type CursorState = "default" | "hover" | "click" | "cta"

export function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>("default")
  const [isVisible, setIsVisible] = useState(false)

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)

      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Detect hover states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      if (target.closest('button, a, [role="button"]')) {
        if (target.closest('.magnetic-button, .cta-button')) {
          setCursorState("cta")
        } else {
          setCursorState("hover")
        }
      } else if (target.closest('.card, .glassmorphic-card')) {
        setCursorState("hover")
      } else {
        setCursorState("default")
      }
    }

    const handleMouseDown = () => setCursorState("click")
    const handleMouseUp = () => setCursorState("default")

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("mouseover", handleMouseOver)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mouseover", handleMouseOver)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [cursorX, cursorY, isVisible])

  const getCursorSize = () => {
    switch (cursorState) {
      case "hover":
        return 50
      case "cta":
        return 60
      case "click":
        return 35
      default:
        return 40
    }
  }

  const getCursorVariant = () => {
    const size = getCursorSize()
    return {
      width: size,
      height: size,
      opacity: isVisible ? 1 : 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 28,
      },
    }
  }

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = "none"

    // Add cursor-none class to all interactive elements
    const style = document.createElement("style")
    style.innerHTML = `
      * { cursor: none !important; }
      a, button, [role="button"], input, textarea, select {
        cursor: none !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.body.style.cursor = "auto"
      document.head.removeChild(style)
    }
  }, [])

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={getCursorVariant()}
      >
        <div className="relative w-full h-full">
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white"
            animate={{
              scale: cursorState === "cta" ? 1.2 : 1,
              borderWidth: cursorState === "click" ? 3 : 2,
            }}
            transition={{ type: "spring", stiffness: 400 }}
          />

          {/* Inner dot */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{
              width: cursorState === "click" ? 8 : cursorState === "hover" ? 6 : 4,
              height: cursorState === "click" ? 8 : cursorState === "hover" ? 6 : 4,
            }}
          >
            <div className="w-full h-full rounded-full bg-white" />
          </motion.div>

          {/* Glow effect for CTA */}
          {cursorState === "cta" && (
            <motion.div
              className="absolute inset-0 rounded-full bg-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.3, scale: 1 }}
              exit={{ opacity: 0 }}
              style={{
                filter: "blur(10px)",
              }}
            />
          )}
        </div>
      </motion.div>

      {/* Trailing cursor (secondary) */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full bg-white/20 backdrop-blur-sm"
          animate={{
            width: getCursorSize() * 1.5,
            height: getCursorSize() * 1.5,
            opacity: isVisible ? 0.2 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 30,
          }}
        />
      </motion.div>
    </>
  )
}
