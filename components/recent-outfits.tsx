import Link from "next/link"
import Image from "next/image"

type Outfit = {
  id: string
  name: string
  image: string
  date: string
}

// Updated data for recent outfits with actual images
const recentOutfits: Outfit[] = [
  {
    id: "1",
    name: "Casual Friday",
    image: "/images/23aa7d3531cfdd9d980127065d4157ca.jpg",
    date: "2023-05-12",
  },
  {
    id: "2",
    name: "Weekend Brunch",
    image: "/images/0ddf3b608b9ed0dd2c4acf5115cb31f2.jpg",
    date: "2023-05-10",
  },
  {
    id: "3",
    name: "Office Meeting",
    image: "/images/a0b5e2d5730df42febfb9e81e377fb6d.jpg",
    date: "2023-05-08",
  },
]

export function RecentOutfits() {
  return (
    <div className="w-full mt-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-white font-medium">Recents</h2>
        <Link href="/recents" className="text-sm text-white/70">
          See all
        </Link>
      </div>

      <div className="flex space-x-3 overflow-x-auto pb-2">
        {recentOutfits.map((outfit) => (
          <Link key={outfit.id} href={`/outfits/${outfit.id}`} className="flex-shrink-0">
            <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mb-1 overflow-hidden">
              <Image
                src={outfit.image || "/placeholder.svg"}
                alt={outfit.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-xs text-white/80 text-center block">{outfit.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

