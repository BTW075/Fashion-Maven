"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, LogOut, Settings, User, Bell, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FooterNavigation } from "@/components/footer-navigation"
import { useAuth } from "@/context/auth-context"
import { HomeBackground } from "@/components/background"

export default function ProfilePage() {
  const router = useRouter()
  const { user, logout, isLoading } = useAuth()

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
          <h1 className="text-xl font-bold text-white">Profile</h1>
        </header>

        {/* Main Content */}
        <main className="home-container p-4">
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <User className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-xl font-bold text-black">{user.name}</h2>
            <p className="text-black/70">{user.email}</p>
          </div>

          <div className="space-y-4">
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="text-black font-medium mb-3">Account Settings</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-black/70 mr-3" />
                    <span className="text-black">Edit Profile</span>
                  </div>
                  <ChevronLeft className="w-5 h-5 text-white/70 transform rotate-180" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Bell className="w-5 h-5 text-black/70 mr-3" />
                    <span className="text-black">Notifications</span>
                  </div>
                  <ChevronLeft className="w-5 h-5 text-white/70 transform rotate-180" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Moon className="w-5 h-5 text-black/70 mr-3" />
                    <span className="text-black">Dark Mode</span>
                  </div>
                  <div className="w-10 h-6 bg-fashion-purple rounded-full relative">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Settings className="w-5 h-5 text-black/70 mr-3" />
                    <span className="text-black">Settings</span>
                  </div>
                  <ChevronLeft className="w-5 h-5 text-white/70 transform rotate-180" />
                </div>
              </div>
            </div>

            <Button onClick={logout} className="w-full bg-red-500 hover:bg-red-600 flex items-center justify-center">
              <LogOut className="w-4 h-4 mr-2" />
              Log Out
            </Button>
          </div>
        </main>

        {/* Footer Navigation */}
        <FooterNavigation />
      </div>
    </HomeBackground>
  )
}

