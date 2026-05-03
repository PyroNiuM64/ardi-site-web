"use client"

import Image from "next/image"
import { ShoppingBag, Leaf, Hand, Droplets, Thermometer, Flower2, Beer } from "lucide-react"
import FunctionCard, { type FunctionItem } from "@/components/FunctionCard"

const Lauburu = ({ size = 24, variant = "white" }: { size?: number; variant?: "white" | "orange" }) => {
  const style =
    variant === "white"
      ? { filter: "invert(1)", mixBlendMode: "screen" as const }
      : { filter: "sepia(1) saturate(6) hue-rotate(350deg) brightness(0.85)", mixBlendMode: "multiply" as const }
  return <img src="/Lauburu.png" width={size} height={size} alt="" style={style} />
}

const functions: FunctionItem[] = [
  {
    Icon: ShoppingBag,
    title: "Sac Dépliable",
    subtitle: "Praticité",
    desc: "Dépliez Ardi pour révéler un sac réutilisable toujours à portée de main. Fini les sacs plastiques improvisés !",
    accent: "orange",
    img: "/Sac dépliable 1.png",
    imgScale: 1.4,
    imgY: -5,
    imgRotate: 90,
    featured: true,
    video: "Sac-dépliable.mp4",
  },
  {
    Icon: Leaf,
    title: "Désodorisant Naturel",
    subtitle: "Assimile les odeurs",
    desc: "La laine kératinique absorbe naturellement les mauvaises odeurs dans chaussures, sac de sport ou voiture.",
    accent: "green",
    img: "/Désodorisant.png",
    imgScale: 1.8,
    imgY: -3,
  },
  {
    Icon: Hand,
    title: "Anti-stress",
    subtitle: "Sensoriel",
    desc: "Sa texture laineuse apaisante offre un exutoire sensoriel instantané. Pétrissez, serrez, lâchez.",
    accent: "orange",
    img: "/Anti-stress.png",
    imgScale: 1.1,
    imgY: -6,
    video: "Anti-Stresse.mp4",
  },
  {
    Icon: Droplets,
    title: "Éponge Naturelle",
    subtitle: "Absorbant d'humidité",
    desc: "La laine absorbe jusqu'à 30 % de son poids en eau. Parfaite pour les petits imprévus du quotidien.",
    accent: "green",
    img: "/Eponge.png",
    imgScale: 1.8,
    imgY: 5,
    video: "Eponge.mp4",
  },
  {
    Icon: Thermometer,
    title: "Bouillote de Poche",
    subtitle: "Confort thermique",
    desc: "Passez Ardi 30 secondes au micro-ondes. Vos mains resteront chaudes grâce aux noyaux de cerises basques.",
    accent: "orange",
    img: "/Bouillote.png",
    imgScale: 1.4,
    imgY: 2,
    video: "Bouillote.mp4",
  },
  {
    Icon: Flower2,
    title: "Porte-Bonheur",
    subtitle: "Identité",
    desc: "Symbole du Pays Basque, Ardi vous accompagne partout comme un talisman affectif et identitaire.",
    accent: "green",
    img: "/Porte clé.png",
    imgScale: 1.3,
    imgY: -7,
  },
  {
    Icon: Beer,
    title: "Décapsuleur",
    subtitle: "Option",
    desc: "En option, Ardi cache un petit décapsuleur discret. Parce qu'un bon mouton pense à tout.",
    accent: "orange",
    img: "/Décapsuleur.png",
    imgScale: 1.3,
    imgY: -13,
    optional: true,
    video: "Décapsuleur.mp4",
  },
]

export function FunctionsBanner() {
  return (
    <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-3">
      {functions.map((fn) => (
        <div
          key={fn.title}
          className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm"
          style={{
            background: fn.accent === "orange" ? "var(--orange)" : "var(--green)",
            color: "white",
          }}
        >
          <fn.Icon className="w-4 h-4 flex-shrink-0" />
          <span>{fn.title}</span>
        </div>
      ))}
    </div>
  )
}

export default function FunctionsSection() {
  return (
    <div className="grid md:grid-cols-3 gap-6 items-start">
      {/* Left — 3 function cards */}
      <div className="space-y-4">
        {functions.slice(0, 3).map((fn) => (
          <FunctionCard key={fn.title} fn={fn} videoSide="right" />
        ))}
      </div>

      {/* Center — Ardi gif */}
      <div className="flex flex-col items-center gap-4 sticky top-24">
        <div className="relative w-full max-w-xs aspect-square drop-shadow-2xl animate-float">
          <Image src="/Ardi.gif" alt="Ardi le mouton multifonction" fill unoptimized className="object-contain" />
        </div>
        <p className="text-center text-sm font-semibold flex items-center justify-center gap-2" style={{ color: "var(--green-dark)" }}>
          <Lauburu size={16} variant="orange" /> 7 usages · 1 objet <Lauburu size={16} variant="orange" />
        </p>
      </div>

      {/* Right — 4 function cards */}
      <div className="space-y-4">
        {functions.slice(3).map((fn) => (
          <FunctionCard key={fn.title} fn={fn} videoSide="left" />
        ))}
      </div>
    </div>
  )
}
