"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GradientMeshProps {
  className?: string
  animated?: boolean
}

export function GradientMesh({ className, animated = true }: GradientMeshProps) {
  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      <motion.div
        className="gradient-mesh absolute inset-0"
        animate={
          animated
            ? {
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }
            : {}
        }
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/50" />
    </div>
  )
}
