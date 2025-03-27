"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Background } from "@/components/background"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/context/auth-context"
import { ChevronLeft, Facebook } from "lucide-react"

export default function SignupPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()
  const { signup, isLoading } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      await signup(name, email, password)
      // The redirect to login page is now handled in the auth context
    } catch (err) {
      setError("Failed to create account. Please try again.")
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
          <h1 className="text-3xl font-bold text-white">Create Account</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <Input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-white text-black rounded-full h-12 px-4"
          />

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
            {isLoading ? "Creating Account..." : "Sign Up"}
          </Button>
        </form>

        <div className="flex items-center justify-center my-6">
          <div className="h-px bg-white/30 flex-1"></div>
          <span className="px-4 text-white/70 text-sm">or</span>
          <div className="h-px bg-white/30 flex-1"></div>
        </div>

        <div className="flex justify-center space-x-4">
          <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <Facebook className="w-5 h-5 text-white" />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
          </button>
        </div>

        <div className="mt-auto mb-8 text-center">
          <p className="text-white/70">
            Already have an account?{" "}
            <Link href="/login" className="text-fashion-blue font-medium">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </Background>
  )
}

