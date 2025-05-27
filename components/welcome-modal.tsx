"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export default function WelcomeModal() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show banner after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)

      // Auto-hide after 8 seconds
      const hideTimer = setTimeout(() => {
        setIsVisible(false)
      }, 3000) // 3 seconds

      return () => clearTimeout(hideTimer)
    }, 1500) // Show after confetti starts

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg border border-t-2 dark:border-t-brand max-w-md w-full mx-auto`}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1 pr-4">
              <h3 className="font-bold text-lg mb-1 dark:text-brand">Welcome to my portfolio!</h3>
              <p className={`text-sm `}>
                Thanks for visiting! Feel free to explore my projects and get in touch if you'd like to work together.
              </p>
            </div>
            <button
              onClick={handleClose}
              className={`p-1 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700`}
              aria-label="Close welcome message"
            >
              <X size={16} className="text-zinc-400" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
