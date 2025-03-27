import Link from "next/link"
import Image from "next/image"

type Category = {
  id: string
  name: string
  icon: string
}

const categories: Category[] = [
  { id: "tshirts", name: "T-shirts", icon: "/images/tshirt.png" },
  { id: "jackets", name: "Jackets", icon: "/images/blazer.png" },
  { id: "pants", name: "Pants", icon: "/images/pants.png" },
  { id: "jeans", name: "Jeans", icon: "/images/jeans.png" },
  { id: "Coats", name: "Coats", icon: "/images/dress.png" },
  { id: "sarees", name: "Sarees", icon: "/images/formal-dress.png" },
  { id: "shirts", name: "Shirts", icon: "/images/shirt.png" },
  { id: "lehengas", name: "Lehengas", icon: "/images/gown.png" },
  { id: "shorts", name: "Shorts", icon: "/images/shorts.png" },
  { id: "kurtas", name: "Kurtas", icon: "/images/yellow-kurta.png" },
  { id: "dresses", name: "Dresses", icon: "/images/maroon-gown.png" },
  { id: "burkhas", name: "Burkhas", icon: "/images/coats.png" },
]

export function WardrobeCategories() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-white font-medium">My Wardrobe</h2>
        <Link href="/wardrobe" className="text-sm text-white/70">
          See all
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {categories.map((category) => (
          <Link key={category.id} href={`/wardrobe/${category.id}`} className="flex flex-col items-center">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-1">
              <Image
                src={category.icon || "/placeholder.svg"}
                alt={category.name}
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
            <span className="text-xs text-white/80 text-center">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

