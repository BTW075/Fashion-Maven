"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import { FooterNavigation } from "@/components/footer-navigation"
import { useAuth } from "@/context/auth-context"
import Image from "next/image"
import { HomeBackground } from "@/components/background"

// Mock data for favorite outfits
const favoriteOutfits = [
  { id: "1", name: "Summer Casual", image: "/placeholder.svg?height=200&width=150" },
  { id: "2", name: "Office Formal", image: "/placeholder.svg?height=200&width=150" },
  { id: "3", name: "Weekend Party", image: "/placeholder.svg?height=200&width=150" },
  { id: "4", name: "Autumn Look", image: "/placeholder.svg?height=200&width=150" },
]

export default function FavoritesPage() {
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
        <header className="bg-fashion-purple p-4 flex items-center">
          <button onClick={() => router.back()} className="mr-4">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-xl font-bold text-white">Favorite Outfits</h1>
        </header>

        {/* Main Content */}
        <main className="home-container p-4">
          <div className="grid grid-cols-2 gap-4">
            {favoriteOutfits.map((outfit) => (
              <div key={outfit.id} className="bg-white/10 rounded-lg p-2">
                <div className="relative w-full h-40 mb-2">
                  <Image
                    src={outfit.image || "/placeholder.svg"}
                    alt={outfit.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-white text-sm">{outfit.name}</p>
              </div>
            ))}
          </div>
        </main>

        {/* Footer Navigation */}
        <FooterNavigation />
      </div>
    </HomeBackground>
  )
}

