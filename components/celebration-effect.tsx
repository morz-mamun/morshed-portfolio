"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"


type Particle = {
  id: number
  x: number
  size: number
  color: string
  delay: number
  duration: number
  rotation: number
  type: "circle" | "square" | "triangle" | "star"
}

export default function CelebrationEffect() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [show, setShow] = useState(false)
  const { theme } = useTheme()

  // Generate particles
  useEffect(() => {
    const colors =
      theme === "dark"
        ? ["#10b981", "#14b8a6", "#f59e0b", "#3b82f6", "#8b5cf6", "#ec4899"]
        : ["#059669", "#0d9488", "#d97706", "#2563eb", "#7c3aed", "#db2777"]

    const types: ("circle" | "square" | "triangle" | "star")[] = ["circle", "square", "triangle", "star"]

    const newParticles: Particle[] = []

    for (let i = 0; i < 100; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100, // random horizontal position (0-100%)
        size: Math.random() * 10 + 5, // random size (5-20px)
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 1, // random delay (0-1s)
        duration: Math.random() * 3 + 2, // random duration (2-5s)
        rotation: Math.random() * 360, // random initial rotation
        type: types[Math.floor(Math.random() * types.length)],
      })
    }

    setParticles(newParticles)

    // Show particles after a small delay
    const timer = setTimeout(() => {
      setShow(true)

      // Hide particles after animation completes
      const hideTimer = setTimeout(() => {
        setShow(false)
      }, 6000)

      return () => clearTimeout(hideTimer)
    }, 500)

    return () => clearTimeout(timer)
  }, [theme])

  if (!show) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles?.map((particle) => (
        <motion.div
          key={particle?.id}
          initial={{
            y: -100,
            x: `${particle?.x}vw`,
            opacity: 1,
            rotate: particle?.rotation,
          }}
          animate={{
            y: "100vh",
            rotate: particle?.rotation + 360,
            opacity: [1, 1, 0.8, 0.5, 0],
          }}
          transition={{
            duration: particle?.duration,
            delay: particle?.delay,
            ease: "easeOut",
          }}
          className="absolute top-0"
          style={{ width: particle?.size, height: particle?.size }}
        >
          {particle?.type === "circle" && (
            <div className="w-full h-full rounded-full" style={{ backgroundColor: particle?.color }} />
          )}

          {particle?.type === "square" && (
            <div className="w-full h-full rotate-45" style={{ backgroundColor: particle?.color }} />
          )}

          {particle?.type === "triangle" && (
            <div
              className="w-0 h-0 border-solid"
              style={{
                borderLeftWidth: particle?.size / 2,
                borderRightWidth: particle?.size / 2,
                borderBottomWidth: particle?.size,
                borderLeftColor: "transparent",
                borderRightColor: "transparent",
                borderBottomColor: particle?.color,
              }}
            />
          )}

          {particle?.type === "star" && (
            <div className="relative">
              <svg
                width={particle?.size}
                height={particle?.size}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill={particle?.color}
                />
              </svg>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
