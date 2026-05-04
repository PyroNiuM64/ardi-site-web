"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart } from "lucide-react"

export default function FloatingCTA() {
  const pathname = usePathname()

  // Masqué sur la page contact (inutile) et sur desktop
  if (pathname === "/contact") return null

  return (
    <div className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
      <Link
        href="/contact"
        className="flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-base shadow-2xl transition-all active:scale-95"
        style={{
          background: "var(--orange)",
          boxShadow: "0 8px 32px rgba(200,83,28,0.45)",
        }}
      >
        <ShoppingCart className="w-5 h-5" />
        Commander
      </Link>
    </div>
  )
}
