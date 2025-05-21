"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Grid, PlusCircle, Heart, User } from "lucide-react"

type NavItem = {
  name: string
  href: string
  icon: React.ReactNode
}

export function FooterNavigation() {
  const pathname = usePathname()

  const navItems: NavItem[] = [
    {
      name: "Home",
      href: "/home",
      icon: <Home className="w-6 h-6" />,
    },
    {
      name: "Wardrobe",
      href: "/wardrobe",
      icon: <Grid className="w-6 h-6" />,
    },
    {
      name: "Add",
      href: "/upload",
      icon: <PlusCircle className="w-8 h-8" />,
    },
    {
      name: "Favorites",
      href: "/favorites",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      name: "Profile",
      href: "/profile",
      icon: <User className="w-6 h-6" />,
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-fashion-purple rounded-t-xl py-2 px-4">
      <div className="flex justify-between items-center">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center ${isActive ? "text-white" : "text-white/60"}`}
            >
              {item.name === "Add" ? (
                <div className="bg-white rounded-full p-1 -mt-6">
                  <PlusCircle className="w-8 h-8 text-fashion-purple" />
                </div>
              ) : (
                item.icon
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

