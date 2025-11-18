"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface PremiumCardProps {
  children: React.ReactNode
  className?: string
  hover3D?: boolean
  glowColor?: "primary" | "secondary" | "accent"
}

export function PremiumCard({
  children,
  className,
  hover3D = true,
  glowColor = "primary",
}: PremiumCardProps) {
  const [rotateX, setRotateX] = React.useState(0)
  const [rotateY, setRotateY] = React.useState(0)
  const [mouseX, setMouseX] = React.useState(0)
  const [mouseY, setMouseY] = React.useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hover3D) return

    const card = e.currentTarget
    const box = card.getBoundingClientRect()
    const x = e.clientX - box.left
    const y = e.clientY - box.top
    const centerX = box.width / 2
    const centerY = box.height / 2
    const rotateXValue = ((y - centerY) / centerY) * -8
    const rotateYValue = ((x - centerX) / centerX) * 8

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
    setMouseX((x / box.width) * 100)
    setMouseY((y / box.height) * 100)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  const glowColors = {
    primary: "rgba(37, 99, 235, 0.4)",
    secondary: "rgba(16, 185, 129, 0.4)",
    accent: "rgba(245, 158, 11, 0.4)",
  }

  return (
    <motion.div
      className={cn("relative group", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <motion.div
          className="absolute inset-[-2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `conic-gradient(from 0deg, transparent, ${glowColors[glowColor]}, transparent 310deg)`,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Main card content */}
      <div
        className={cn(
          "relative rounded-2xl p-6 backdrop-blur-xl overflow-hidden",
          "bg-white/5 dark:bg-black/20",
          "border border-white/10",
          "shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]",
          "transition-shadow duration-300 group-hover:shadow-2xl"
        )}
        style={{
          transform: "translateZ(20px)",
        }}
      >
        {/* Multi-layer glassmorphism */}
        <div className="absolute inset-0 rounded-2xl">
          {/* Layer 1: Base glass */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5" />

          {/* Layer 2: Inner glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at ${mouseX}% ${mouseY}%, ${glowColors[glowColor]}, transparent 60%)`,
            }}
          />

          {/* Layer 3: Inset shadows */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              boxShadow: `
                inset 0 1px 2px rgba(255, 255, 255, 0.2),
                inset 0 -1px 2px rgba(0, 0, 0, 0.1)
              `,
            }}
          />
        </div>

        {/* Content with elevated z-index */}
        <div className="relative z-10">{children}</div>
      </div>

      {/* Outer glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `radial-gradient(circle at ${mouseX}% ${mouseY}%, ${glowColors[glowColor]}, transparent 50%)`,
          filter: "blur(20px)",
          transform: "translateZ(-10px)",
        }}
      />
    </motion.div>
  )
}
