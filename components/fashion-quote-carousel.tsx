"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const quotes = [
  "Your Personal Style Manager :)",
  "It is your time to showcase your style! How you ask? Just leave it on us😉"
  "Fashion is the armor to survive the reality of everyday life.",
  "Fashion is about dressing according to what's fashionable. Style is more about being yourself.",
  "Fashion is what you're offered four times a year by designers. Style is what you choose.",
  "The joy of dressing is an art.",
]

export function FashionQuoteCarousel() {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length)
  }

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length)
  }

  return (
    <div className="relative w-full h-32 bg-gray-200 rounded-xl flex items-center justify-center mb-4">
      <button
        onClick={prevQuote}
        className="absolute left-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
      >
        <ChevronLeft className="w-5 h-5 text-gray-600" />
      </button>

      <p className="text-center text-gray-800 font-medium px-10">{quotes[currentQuote]}</p>

      <button
        onClick={nextQuote}
        className="absolute right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
      >
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  )
}

