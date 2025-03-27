import type React from "react"
import Image from "next/image"

export function Background({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image src="/images/dark-background.jpeg" alt="Background" fill priority className="object-cover" />
      </div>
      <div className="relative z-10 w-full max-w-md">{children}</div>
    </div>
  )
}

export function HomeBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image src="/images/light-background.png" alt="Background" fill priority className="object-cover" />
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  )
}

