"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Settings, Menu } from "lucide-react"
import { FashionQuoteCarousel } from "@/components/fashion-quote-carousel"
import { WardrobeCategories } from "@/components/wardrobe-categories"
import { RecentOutfits } from "@/components/recent-outfits"
import { FooterNavigation } from "@/components/footer-navigation"
import { useAuth } from "@/context/auth-context"
import { HomeBackground } from "@/components/background"

export default function HomePage() {
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
        <header className="bg-fashion-black p-4 flex justify-between items-center">
          <button>
            <Menu className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-xl font-bold text-white">Fashion Maven</h1>
          <button>
            <Settings className="w-6 h-6 text-white" />
          </button>
        </header>

        {/* Main Content */}
        <main className="home-container">
          {/* Quote Carousel */}
          <FashionQuoteCarousel />

          {/* Wardrobe Categories */}
          <WardrobeCategories />

          {/* Recent Outfits */}
          <RecentOutfits />
        </main>

        {/* Footer Navigation */}
        <FooterNavigation />
      </div>
    </HomeBackground>
  )
}

