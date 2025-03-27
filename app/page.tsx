"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Background } from "@/components/background"
import { useAuth } from "@/context/auth-context"

export default function WelcomePage() {
  const router = useRouter()
  const { user } = useAuth()
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    if (user) {
      router.push("/home")
    }
  }, [user, router])

  const handleScreenClick = () => {
    setFadeOut(true)
    setTimeout(() => {
      router.push("/signup")
    }, 500) // Wait for fade animation to complete
  }

  return (
    <Background>
      <div
        className={`flex flex-col items-center justify-center px-6 py-12 text-center transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"}`}
        onClick={handleScreenClick}
      >
        <div className="space-y-4 mt-20">
          <h1 className="text-4xl font-bold text-white">Fashion Maven</h1>
          <p className="text-lg text-white/80">Your Personal AI Style Manager</p>
        </div>
        <div className="mt-auto mb-20">
          <p className="text-sm text-white/60 mt-8">Tap anywhere to continue</p>
        </div>
      </div>
    </Background>
  )
}

