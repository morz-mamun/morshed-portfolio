"use client";
import type React from "react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalIcon } from "lucide-react";
import { ShimmerButton } from "../magicui/shimmer-button";
import TerminalContent from "./terminal-content";

export default function TerminalWidget() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalPosition, setTerminalPosition] = useState({ x: 0, y: 0 });
  // const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const buttonPosition = { x: 0, y: 0 };
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Toggle terminal visibility
  const toggleTerminal = () => {
    if (!isTerminalOpen) {
      // Update terminal position to start from button position
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setTerminalPosition({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      }
    }
    setIsTerminalOpen(!isTerminalOpen);
  };

  return (
    <>
      {/* Widget Button */}
      <ShimmerButton
        ref={buttonRef}
        onClick={toggleTerminal}
        className="w-fit flex items-center gap-2"
      >
        <div className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
          <div className="flex items-center gap-2 text-brand">
            <TerminalIcon className="h-6 w-6" />
            <p className="text-base">Play with Terminal</p>
          </div>
        </div>
      </ShimmerButton>

      {/* Terminal */}
      <AnimatePresence>
        {isTerminalOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              // Close terminal when clicking outside
              if (e.target === e.currentTarget) {
                setIsTerminalOpen(false);
              }
            }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="relative z-50 w-full max-w-4xl h-[650px] max-h-[80vh] rounded-lg overflow-hidden shadow-2xl"
              initial={{
                opacity: 0,
                scale: 0.3,
                x: terminalPosition.x - window.innerWidth / 2,
                y: terminalPosition.y - window.innerHeight / 2,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.3,
                x: buttonPosition.x - window.innerWidth / 2,
                y: buttonPosition.y - window.innerHeight / 2,
                transition: {
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                },
              }}
            >
              <TerminalContent onClose={() => setIsTerminalOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

