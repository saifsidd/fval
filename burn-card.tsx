"use client"

import { useState } from "react"
import confetti from "canvas-confetti"
import { Button } from "@/components/ui/button"

export function BurnCard() {
  const [isBurning, setIsBurning] = useState(false)

  const handleBurn = () => {
    setIsBurning(true)

    // Trigger confetti effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#dc2626", "#991b1b", "#ffffff"],
    })

    // Reset burning state after animation
    setTimeout(() => setIsBurning(false), 1000)
  }

  return (
    <Button
      onClick={handleBurn}
      disabled={isBurning}
      className={`relative overflow-hidden transition-all duration-500 
        ${isBurning ? "bg-red-700 scale-95" : "bg-red-700 hover:bg-red-800"}`}
    >
      {isBurning ? "🔥" : "Burn the Card"}
      {isBurning && <div className="absolute inset-0 bg-gradient-to-t from-red-600 to-yellow-400 animate-burn" />}
    </Button>
  )
}

