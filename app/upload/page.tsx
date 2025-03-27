"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, Upload, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FooterNavigation } from "@/components/footer-navigation"
import { useAuth } from "@/context/auth-context"
import { HomeBackground } from "@/components/background"

export default function UploadPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const { user } = useAuth()

  if (!user) {
    router.push("/login")
    return null
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setSelectedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <HomeBackground>
      <div className="min-h-screen pb-16">
        {/* Header */}
        <header className="bg-fashion-purple p-4 flex items-center">
          <button onClick={() => router.back()} className="mr-4">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-xl font-bold text-white">Add to Wardrobe</h1>
        </header>

        {/* Main Content */}
        <main className="home-container p-4">
          <div className="flex flex-col items-center justify-center h-96">
            {selectedImage ? (
              <div className="relative w-64 h-64 mb-4">
                <img
                  src={selectedImage || "/placeholder.svg"}
                  alt="Selected outfit"
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                >
                  ✕
                </button>
              </div>
            ) : (
              <div className="border-2 border-dashed border-white/30 rounded-lg p-8 mb-4 flex flex-col items-center">
                <Upload className="w-12 h-12 text-white/70 mb-4" />
                <p className="text-white/70 text-center">Upload a photo of your outfit</p>
              </div>
            )}

            <div className="flex space-x-4">
              <Button onClick={triggerFileInput} className="bg-fashion-purple hover:bg-purple-700 flex items-center">
                <Upload className="w-4 h-4 mr-2" />
                Upload Photo
              </Button>

              <Button className="bg-fashion-blue hover:bg-blue-700 flex items-center">
                <Camera className="w-4 h-4 mr-2" />
                Take Photo
              </Button>
            </div>

            <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
          </div>
        </main>

        {/* Footer Navigation */}
        <FooterNavigation />
      </div>
    </HomeBackground>
  )
}

