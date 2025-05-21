"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import { WardrobeCategories } from "@/components/wardrobe-categories"
import { FooterNavigation } from "@/components/footer-navigation"
import { useAuth } from "@/context/auth-context"
import { HomeBackground } from "@/components/background"

export default function WardrobePage() {
  const router = useRouter()
  const { user, isLoading } = useAuth()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  if (isLoading || !user) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  return (
    <HomeBackground>
      <div className="min-h-screen pb-16">
        {/* Header */}
        <header className="bg-fashion-black p-4 flex items-center">
          <button onClick={() => router.back()} className="mr-4">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-xl font-bold text-white">My Wardrobe</h1>
        </header>

        {/* Main Content */}
        <main className="home-container p-4">
          <WardrobeCategories />
        </main>

        {/* Footer Navigation */}
        <FooterNavigation />
      </div>
    </HomeBackground>
  )
}

