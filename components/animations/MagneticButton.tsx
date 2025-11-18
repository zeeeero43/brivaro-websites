"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  magneticStrength?: number
}

export function MagneticButton({
  children,
  className,
  magneticStrength = 0.3,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e
    const { width, height, left, top } = e.currentTarget.getBoundingClientRect()
    const x = (clientX - (left + width / 2)) * magneticStrength
    const y = (clientY - (top + height / 2)) * magneticStrength
    setPosition({ x, y })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "relative inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-semibold transition-all duration-200",
        "bg-primary text-primary-foreground shadow-lg hover:shadow-xl",
        "active:scale-95",
        className
      )}
    >
      <motion.span
        className="relative z-10"
        animate={{ x: position.x * 0.5, y: position.y * 0.5 }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        {children}
      </motion.span>
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary-foreground/10 to-primary/0"
        animate={{
          opacity: position.x !== 0 || position.y !== 0 ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  )
}
