"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ChevronDown, ShoppingBag, History, Leaf, Shield, Sprout, Menu, X } from "lucide-react"

type NavbarProps = {
  activePage?: "home" | "equipe" | "contact" | "galerie"
}

const homeSections = [
  { href: "/#fonctions",  label: "Les fonctions",    Icon: ShoppingBag },
  { href: "/#histoire",   label: "Notre histoire",   Icon: History     },
  { href: "/#paillage",   label: "Paillage naturel", Icon: Sprout      },
  { href: "/#valeurs",    label: "Nos valeurs",      Icon: Shield      },
]

export default function Navbar({ activePage }: NavbarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div
      className="sticky top-0 z-50"
      style={{
        background: "rgba(245,237,224,0.97)",
        borderBottom: "2px solid var(--orange)",
        backdropFilter: "blur(8px)",
      }}
    >
      <nav className="flex items-center justify-between px-4 md:px-6 py-1.5">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <Image src="/Logo_sobre.png" alt="La Poche Basque" width={64} height={64} className="object-contain" />
          <span className="font-bold text-lg md:text-2xl" style={{ color: "var(--green-dark)", fontFamily: "var(--font-rubik)" }}>
            La Poche Basque
          </span>
        </Link>

        {/* Desktop links */}
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

          {/* Galerie */}
          <Link
            href="/galerie"
            className="px-4 py-2 rounded-full transition-all hover:scale-105"
            style={{
              color: activePage === "galerie" ? "white" : "var(--brown)",
              background: activePage === "galerie" ? "var(--green-dark)" : "transparent",
            }}
          >
            Galerie
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

        {/* Right side: desktop CTA + mobile hamburger */}
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden md:block px-5 py-2 rounded-full text-white text-sm font-bold transition-all hover:scale-105 hover:shadow-md"
            style={{ background: "var(--orange)" }}
          >
            Commander
          </Link>
          <button
            className="md:hidden p-2 rounded-xl transition-colors"
            style={{ color: "var(--brown)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — slide down */}
      <div
        className="md:hidden overflow-hidden"
        style={{
          maxHeight: mobileOpen ? "520px" : "0",
          transition: "max-height 0.3s ease",
        }}
      >
        <div className="px-4 py-4 flex flex-col gap-1 border-t" style={{ borderColor: "rgba(107,66,38,0.15)" }}>

          {/* Accueil */}
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold text-base transition-colors"
            style={{
              color: activePage === "home" ? "white" : "var(--brown)",
              background: activePage === "home" ? "var(--green-dark)" : "transparent",
            }}
            onClick={() => setMobileOpen(false)}
          >
            Accueil
          </Link>

          {/* Section sub-links */}
          <div className="pl-2 flex flex-col gap-0.5 mb-1">
            {homeSections.map(({ href, label, Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl transition-colors"
                style={{ color: "var(--brown-light)" }}
                onClick={() => setMobileOpen(false)}
              >
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--cream-dark)" }}
                >
                  <Icon className="w-3 h-3" style={{ color: "var(--green-dark)" }} />
                </div>
                <span className="text-sm font-medium">{label}</span>
              </Link>
            ))}
          </div>

          {/* L'équipe */}
          <Link
            href="/equipe"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold text-base transition-colors"
            style={{
              color: activePage === "equipe" ? "white" : "var(--brown)",
              background: activePage === "equipe" ? "var(--green-dark)" : "transparent",
            }}
            onClick={() => setMobileOpen(false)}
          >
            L&apos;équipe
          </Link>

          {/* Galerie */}
          <Link
            href="/galerie"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold text-base transition-colors"
            style={{
              color: activePage === "galerie" ? "white" : "var(--brown)",
              background: activePage === "galerie" ? "var(--green-dark)" : "transparent",
            }}
            onClick={() => setMobileOpen(false)}
          >
            Galerie
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold text-base transition-colors"
            style={{
              color: activePage === "contact" ? "white" : "var(--brown)",
              background: activePage === "contact" ? "var(--green-dark)" : "transparent",
            }}
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="mt-2 py-3 rounded-full text-white text-sm font-bold text-center transition-all hover:shadow-md"
            style={{ background: "var(--orange)" }}
            onClick={() => setMobileOpen(false)}
          >
            Commander
          </Link>
        </div>
      </div>
    </div>
  )
}
