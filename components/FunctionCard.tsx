"use client"

import Image from "next/image"
import { useRef, useState } from "react"

export type FunctionItem = {
  Icon: React.ElementType
  title: string
  subtitle: string
  desc: string
  accent: "orange" | "green"
  img: string
  imgScale?: number
  imgY?: number
  imgRotate?: number
  featured?: boolean
  optional?: boolean
  video?: string
}

export default function FunctionCard({
  fn,
  videoSide = "right",
}: {
  fn: FunctionItem
  videoSide?: "left" | "right"
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hovered, setHovered] = useState(false)

  const handleMouseEnter = () => {
    setHovered(true)
    videoRef.current?.play()
  }
  const handleMouseLeave = () => {
    setHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const imgTransform =
    fn.imgScale || fn.imgY || fn.imgRotate
      ? {
          transform: `scale(${fn.imgScale ?? 1}) translateY(${fn.imgY ?? 0}px) rotate(${fn.imgRotate ?? 0}deg)`,
        }
      : undefined

  const accent = fn.accent === "orange" ? "var(--orange)" : "var(--green)"

  const videoPanel = fn.video ? (
    <div
      className="absolute top-0 z-50 pointer-events-none"
      style={{
        [videoSide === "right" ? "left" : "right"]: "calc(100% + 12px)",
        width: 260,
        opacity: hovered ? 1 : 0,
        transform: hovered
          ? "translateY(0) scale(1)"
          : videoSide === "right"
          ? "translateX(-8px) scale(0.96)"
          : "translateX(8px) scale(0.96)",
        transition: "opacity 0.2s ease, transform 0.2s ease",
      }}
    >
      <div
        className="rounded-2xl overflow-hidden shadow-2xl border-2"
        style={{ borderColor: "var(--orange)", background: "#000" }}
      >
        <video
          ref={videoRef}
          src={`/${fn.video}`}
          loop
          muted
          playsInline
          className="w-full h-auto block"
        />
      </div>
    </div>
  ) : null

  /* ── Décapsuleur (option) ── */
  if (fn.optional) {
    return (
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {videoPanel}
        <div
          className="relative rounded-2xl overflow-hidden transition-all hover:scale-[1.02] hover:shadow-md hover:opacity-100 cursor-default opacity-75"
          style={{ background: "rgba(255,255,255,0.4)", border: "2px dashed rgba(107,66,38,0.3)" }}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Image
              src={fn.img}
              alt=""
              width={200}
              height={90}
              className="object-contain"
              style={{ opacity: 0.15, ...imgTransform }}
            />
          </div>
          <div className="relative z-10 p-3 flex items-center gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(107,66,38,0.2)" }}>
              <fn.Icon className="w-4 h-4" style={{ color: "var(--brown-light)" }} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm" style={{ color: "var(--brown-light)", fontFamily: "var(--font-rubik)" }}>{fn.title}</h3>
                <span className="px-2 py-0.5 rounded-full text-xs font-bold" style={{ background: "rgba(107,66,38,0.12)", color: "var(--brown-light)" }}>
                  En option
                </span>
              </div>
              <p className="text-xs leading-relaxed mt-0.5" style={{ color: "var(--brown-light)", opacity: 0.8 }}>{fn.desc}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  /* ── Sac Dépliable (fonction principale) ── */
  if (fn.featured) {
    return (
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {videoPanel}
        <div
          className="relative rounded-2xl overflow-hidden transition-all hover:scale-[1.02] hover:shadow-xl cursor-default"
          style={{ background: "rgba(200,83,28,0.08)", border: "2px solid var(--orange)" }}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Image
              src={fn.img}
              alt=""
              width={220}
              height={130}
              className="object-contain"
              style={{ opacity: 0.15, ...imgTransform }}
            />
          </div>
          <div className="px-4 pt-3 relative z-10">
            <span className="px-3 py-1 rounded-full text-xs font-black text-white" style={{ background: "var(--orange)" }}>
              ★ Fonction principale
            </span>
          </div>
          <div className="relative z-10 p-4 flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--orange)" }}>
              <fn.Icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-base leading-tight" style={{ color: "var(--brown)", fontFamily: "var(--font-rubik)" }}>{fn.title}</h3>
              <p className="text-xs font-semibold uppercase tracking-wide mt-0.5 mb-1" style={{ color: "var(--orange)" }}>{fn.subtitle}</p>
              <p className="text-xs leading-relaxed" style={{ color: "var(--brown-light)" }}>{fn.desc}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  /* ── Carte standard ── */
  const accentBg = fn.accent === "orange" ? "rgba(200,83,28,0.07)" : "rgba(52,140,70,0.07)"
  const accentBorder = fn.accent === "orange" ? "rgba(200,83,28,0.25)" : "rgba(52,140,70,0.25)"

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {videoPanel}
      <div
        className="relative rounded-2xl overflow-hidden border-2 transition-all hover:scale-[1.02] hover:shadow-lg cursor-default"
        style={{ background: accentBg, borderColor: accentBorder }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src={fn.img}
            alt=""
            width={200}
            height={110}
            className="object-contain"
            style={{ opacity: 0.15, ...imgTransform }}
          />
        </div>
        <div className="relative z-10 p-4 flex items-start gap-3">
          <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center mt-0.5" style={{ background: accent }}>
            <fn.Icon className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-sm leading-tight" style={{ color: "var(--brown)", fontFamily: "var(--font-rubik)" }}>{fn.title}</h3>
            <p className="text-xs font-semibold uppercase tracking-wide mt-0.5 mb-1" style={{ color: accent }}>{fn.subtitle}</p>
            <p className="text-xs leading-relaxed" style={{ color: "var(--brown-light)" }}>{fn.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
