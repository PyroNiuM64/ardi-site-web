"use client"

import Image from "next/image"
import Navbar from "@/components/Navbar"
import { useState } from "react"
import { X, ZoomIn, Mountain, Rabbit } from "lucide-react"

const Lauburu = ({ size = 24, variant = "white" }: { size?: number; variant?: "white" | "orange" }) => {
  const style =
    variant === "white"
      ? { filter: "invert(1)", mixBlendMode: "screen" as const }
      : { filter: "sepia(1) saturate(6) hue-rotate(350deg) brightness(0.85)", mixBlendMode: "multiply" as const }
  return <img src="/Lauburu.png" width={size} height={size} alt="" style={style} />
}

type GalleryItem = {
  src: string
  alt: string
  category: "produit" | "fonctions" | "paillage" | "equipe" | "galerie"
  unoptimized?: boolean
}


export default function GalerieClient({ dynamicImages }: { dynamicImages: string[] }) {
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null)

  const allItems: GalleryItem[] = dynamicImages.map((filename) => ({
    src: `/galerie/${filename}`,
    alt: filename.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
    category: "galerie" as const,
    unoptimized: /\.gif$/i.test(filename),
  }))

  return (
    <main className="min-h-screen" style={{ background: "var(--cream)" }}>
      <Navbar activePage="galerie" />

      {/* HERO */}
      <section
        className="relative overflow-hidden py-12 md:py-20 px-4 md:px-6 text-center"
        style={{ background: "linear-gradient(135deg, var(--green-dark) 0%, #1a3a2a 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-16 -right-24 w-80 h-80 rounded-full opacity-10" style={{ background: "var(--orange)" }} />
          <div className="absolute -bottom-16 -left-24 w-96 h-96 rounded-full opacity-10" style={{ background: "var(--orange-light)" }} />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8 border"
            style={{ background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}
          >
            <Lauburu size={16} variant="white" />
            <span className="text-white">La Poche Basque</span>
          </div>
          <h1
            className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-rubik)" }}
          >
            Galerie
          </h1>
          <p className="text-base md:text-lg" style={{ color: "rgba(255,255,255,0.7)" }}>
            Photos, illustrations et visuels autour d&apos;Ardi et de La Poche Basque
          </p>
          <p className="text-sm mt-2 font-semibold" style={{ color: "rgba(255,255,255,0.45)" }}>
            {allItems.length} visuels
          </p>
        </div>
      </section>

      {/* GRILLE */}
      <section className="py-10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
            {allItems.map((item) => (
              <div
                key={item.src}
                className="break-inside-avoid mb-3 md:mb-4 group relative rounded-2xl overflow-hidden cursor-zoom-in shadow-sm hover:shadow-xl transition-all hover:scale-[1.02]"
                style={{ border: "2px solid var(--cream-dark)" }}
                onClick={() => setLightbox(item)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={400}
                  unoptimized={item.unoptimized ?? true}
                  className="w-full h-auto block"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "rgba(0,0,0,0.35)" }}
                >
                  <ZoomIn className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
              </div>
            ))}
          </div>

          {allItems.length === 0 && (
            <div className="text-center py-24">
              <p className="text-lg font-semibold mb-2" style={{ color: "var(--brown-light)" }}>
                Aucune photo pour l&apos;instant
              </p>
              <p className="text-sm" style={{ color: "var(--brown-light)", opacity: 0.6 }}>
                Glisse des images dans le dossier <code className="px-2 py-0.5 rounded" style={{ background: "var(--cream-dark)" }}>public/galerie/</code>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(6px)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
            style={{ background: "rgba(255,255,255,0.15)" }}
            onClick={() => setLightbox(null)}
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1200}
              height={900}
              unoptimized={lightbox.unoptimized ?? true}
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
            <p className="text-center text-sm mt-3 font-semibold capitalize" style={{ color: "rgba(255,255,255,0.6)" }}>
              {lightbox.alt}
            </p>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="py-10 px-6 text-center" style={{ background: "var(--brown)", color: "var(--cream)" }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/Logo_sobre.png" alt="La Poche Basque" width={44} height={44} className="object-contain" />
            <div className="text-left">
              <p className="font-bold text-lg" style={{ fontFamily: "var(--font-rubik)" }}>La Poche Basque</p>
              <p className="text-xs opacity-60">Ardi — Le mouton multifonction</p>
            </div>
          </div>
          <div className="flex items-center gap-4 opacity-70">
            <Lauburu size={24} variant="white" />
            <Mountain className="w-6 h-6" />
            <Rabbit className="w-6 h-6" />
          </div>
          <p className="text-xs opacity-50">© 2025 La Poche Basque · Fait avec ♥ au Pays Basque</p>
        </div>
      </footer>
    </main>
  )
}
