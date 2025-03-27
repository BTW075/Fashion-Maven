"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Background } from "@/components/background"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/context/auth-context"
import { ChevronLeft } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()
  const { login, isLoading } = useAuth()

  useEffect(() => {
    // Check if user just registered
    const registeredUser = localStorage.getItem("registeredUser")
    if (registeredUser) {
      const userData = JSON.parse(registeredUser)
      setEmail(userData.email || "")
      // Clear the stored registration data
      localStorage.removeItem("registeredUser")
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      await login(email, password)
      // After successful login, redirect to home page
      router.push("/home")
    } catch (err) {
      setError("Failed to log in. Please check your credentials.")
    }
  }

  return (
    <Background>
      <div className="relative w-full h-screen flex flex-col px-6 py-8">
        <button
          onClick={() => router.push("/")}
          className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        <div className="mt-16 mb-8">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white text-black rounded-full h-12 px-4"
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-white text-black rounded-full h-12 px-4"
          />

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-fashion-purple hover:bg-purple-700 text-white rounded-full h-12"
          >
            {isLoading ? "Logging in..." : "Log In"}
          </Button>
        </form>

        <div className="mt-4 text-center">
          <Link href="/forgot-password" className="text-white/70 text-sm">
            Forgot Password
          </Link>
        </div>

        <div className="mt-auto mb-8 text-center">
          <p className="text-white/70">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-fashion-blue font-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </Background>
  )
}

