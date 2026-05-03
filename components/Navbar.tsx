"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ChevronDown, ShoppingBag, History, Leaf, Shield, Sprout } from "lucide-react"

type NavbarProps = {
  activePage?: "home" | "equipe" | "contact"
}

const homeSections = [
  { href: "/#fonctions",  label: "Les fonctions",    Icon: ShoppingBag },
  { href: "/#histoire",   label: "Notre histoire",   Icon: History     },
  { href: "/#paillage",   label: "Paillage naturel", Icon: Sprout      },
  { href: "/#valeurs",    label: "Nos valeurs",      Icon: Shield      },
]

export default function Navbar({ activePage }: NavbarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-1.5"
      style={{
        background: "rgba(245,237,224,0.95)",
        borderBottom: "2px solid var(--orange)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <Image src="/Logo_sobre.png" alt="La Poche Basque" width={64} height={64} className="object-contain" />
        <span className="font-bold text-2xl" style={{ color: "var(--green-dark)", fontFamily: "var(--font-rubik)" }}>
          La Poche Basque
        </span>
      </Link>

      {/* Links */}
      <div className="hidden md:flex items-center gap-1 text-sm font-semibold">

        {/* Accueil + dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <Link
            href="/"
            className="flex items-center gap-1 px-4 py-2 rounded-full transition-all hover:scale-105"
            style={{
              color: activePage === "home" ? "white" : "var(--brown)",
              background: activePage === "home" ? "var(--green-dark)" : "transparent",
            }}
          >
            Accueil
            <ChevronDown
              className="w-3.5 h-3.5 transition-transform duration-200"
              style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </Link>

          {/* Dropdown */}
          <div
            className="absolute top-full left-0 pt-2"
            style={{ pointerEvents: dropdownOpen ? "auto" : "none" }}
          >
            <div
              className="rounded-2xl shadow-xl border overflow-hidden"
              style={{
                background: "white",
                borderColor: "var(--cream-dark)",
                minWidth: 210,
                opacity: dropdownOpen ? 1 : 0,
                transform: dropdownOpen ? "translateY(0)" : "translateY(-6px)",
                transition: "opacity 0.18s ease, transform 0.18s ease",
              }}
            >
              {/* Header */}
              <div className="px-4 py-2.5 border-b" style={{ background: "var(--cream)", borderColor: "var(--cream-dark)" }}>
                <p className="text-xs font-bold uppercase tracking-wide" style={{ color: "var(--brown-light)" }}>
                  Sur la page principale
                </p>
              </div>

              {/* Section links */}
              {homeSections.map(({ href, label, Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-orange-50 group"
                  onClick={() => setDropdownOpen(false)}
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ background: "var(--cream-dark)" }}
                  >
                    <Icon className="w-3.5 h-3.5" style={{ color: "var(--green-dark)" }} />
                  </div>
                  <span className="text-sm font-semibold" style={{ color: "var(--brown)" }}>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* L'équipe */}
        <Link
          href="/equipe"
          className="px-4 py-2 rounded-full transition-all hover:scale-105"
          style={{
            color: activePage === "equipe" ? "white" : "var(--brown)",
            background: activePage === "equipe" ? "var(--green-dark)" : "transparent",
          }}
        >
          L&apos;équipe
        </Link>

        {/* Contact */}
        <Link
          href="/contact"
          className="px-4 py-2 rounded-full transition-all hover:scale-105"
          style={{
            color: activePage === "contact" ? "white" : "var(--brown)",
            background: activePage === "contact" ? "var(--green-dark)" : "transparent",
          }}
        >
          Contact
        </Link>
      </div>

      {/* CTA */}
      <Link
        href="/contact"
        className="hidden md:block px-5 py-2 rounded-full text-white text-sm font-bold transition-all hover:scale-105 hover:shadow-md"
        style={{ background: "var(--orange)" }}
      >
        Commander
      </Link>
    </nav>
  )
}
