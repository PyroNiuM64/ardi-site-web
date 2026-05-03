"use client"

import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import { useState } from "react"
import { Mountain, Rabbit, Send, CheckCircle, AlertCircle, Mail, MapPin, AtSign } from "lucide-react"

const Lauburu = ({ size = 24, variant = "white" }: { size?: number; variant?: "white" | "orange" }) => {
  const style =
    variant === "white"
      ? { filter: "invert(1)", mixBlendMode: "screen" as const }
      : { filter: "sepia(1) saturate(6) hue-rotate(350deg) brightness(0.85)", mixBlendMode: "multiply" as const }
  return <img src="/Lauburu.png" width={size} height={size} alt="" style={style} />
}

type Status = "idle" | "loading" | "success" | "error"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (res.ok) {
        setStatus("success")
        setForm({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus("error")
        setErrorMsg(data.error ?? "Une erreur est survenue.")
      }
    } catch {
      setStatus("error")
      setErrorMsg("Impossible de contacter le serveur. Réessayez plus tard.")
    }
  }

  return (
    <main className="min-h-screen" style={{ background: "var(--cream)" }}>

      <Navbar activePage="contact" />

      {/* HERO */}
      <section
        className="relative overflow-hidden py-20 px-6 text-center"
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
            className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-rubik)" }}
          >
            Nous contacter
          </h1>
          <p className="text-xl max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Une question sur Ardi, une commande, un partenariat ? On vous répond rapidement.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12">

          {/* Infos à gauche */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-black mb-6" style={{ color: "var(--green-dark)", fontFamily: "var(--font-rubik)" }}>
                On est là pour vous
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--brown-light)" }}>
                Que ce soit pour une commande groupée, un partenariat avec un commerce local, ou simplement pour en savoir plus sur Ardi — écrivez-nous, on répondra dans les 48h.
              </p>
            </div>

            {/* Contact cards */}
            <div className="flex flex-col gap-4">
              <div
                className="flex items-center gap-4 rounded-2xl p-4"
                style={{ background: "var(--cream-dark)", border: "2px solid var(--orange)" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--orange)" }}>
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold mb-0.5" style={{ color: "var(--brown-light)" }}>Email</p>
                  <a
                    href="mailto:lapochebasque@gmail.com"
                    className="text-sm font-bold hover:underline"
                    style={{ color: "var(--green-dark)" }}
                  >
                    lapochebasque@gmail.com
                  </a>
                </div>
              </div>

              <div
                className="flex items-center gap-4 rounded-2xl p-4"
                style={{ background: "var(--cream-dark)", border: "2px solid rgba(52,95,56,0.3)" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--green-dark)" }}>
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold mb-0.5" style={{ color: "var(--brown-light)" }}>Localisation</p>
                  <p className="text-sm font-bold" style={{ color: "var(--green-dark)" }}>Pays Basque, France</p>
                </div>
              </div>

              <div
                className="flex items-center gap-4 rounded-2xl p-4"
                style={{ background: "var(--cream-dark)", border: "2px solid rgba(52,95,56,0.3)" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--green-dark)" }}>
                  <AtSign className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold mb-0.5" style={{ color: "var(--brown-light)" }}>Instagram</p>
                  <a
                    href="https://www.instagram.com/la.poche.basque/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold hover:underline"
                    style={{ color: "var(--green-dark)" }}
                  >
                    @la.poche.basque
                  </a>
                </div>
              </div>
            </div>

            {/* Ardi illustration */}
            <div className="relative w-40 h-40 mx-auto mt-4 animate-float">
              <Image src="/Ardi.gif" alt="Ardi" fill className="object-contain" unoptimized />
            </div>
          </div>

          {/* Formulaire à droite */}
          <div className="md:col-span-3">
            <div
              className="rounded-3xl p-8 shadow-xl border-2"
              style={{ background: "white", borderColor: "var(--cream-dark)" }}
            >
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(52,95,56,0.1)" }}>
                    <CheckCircle className="w-8 h-8" style={{ color: "var(--green-dark)" }} />
                  </div>
                  <h3 className="text-2xl font-black" style={{ color: "var(--green-dark)", fontFamily: "var(--font-rubik)" }}>
                    Message envoyé !
                  </h3>
                  <p className="text-sm" style={{ color: "var(--brown-light)" }}>
                    Merci pour votre message. On vous répondra dans les 48h.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-6 py-2 rounded-full text-sm font-bold text-white transition-transform hover:scale-105"
                    style={{ background: "var(--orange)" }}
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="text-xl font-black mb-2" style={{ color: "var(--green-dark)", fontFamily: "var(--font-rubik)" }}>
                    Envoyer un message
                  </h3>

                  {/* Nom + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold" style={{ color: "var(--brown)" }}>Nom *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Votre nom"
                        className="rounded-xl px-4 py-3 text-sm outline-none transition-all"
                        style={{
                          background: "var(--cream)",
                          border: "2px solid var(--cream-dark)",
                          color: "var(--brown)",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--orange)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--cream-dark)")}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold" style={{ color: "var(--brown)" }}>Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="votre@email.com"
                        className="rounded-xl px-4 py-3 text-sm outline-none transition-all"
                        style={{
                          background: "var(--cream)",
                          border: "2px solid var(--cream-dark)",
                          color: "var(--brown)",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--orange)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--cream-dark)")}
                      />
                    </div>
                  </div>

                  {/* Sujet */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold" style={{ color: "var(--brown)" }}>Sujet *</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="rounded-xl px-4 py-3 text-sm outline-none transition-all appearance-none"
                      style={{
                        background: "var(--cream)",
                        border: "2px solid var(--cream-dark)",
                        color: form.subject ? "var(--brown)" : "var(--brown-light)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--orange)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--cream-dark)")}
                    >
                      <option value="" disabled>Choisissez un sujet</option>
                      <option value="Commande Ardi">Commande Ardi</option>
                      <option value="Commande paillage">Commande paillage</option>
                      <option value="Commande groupée">Commande groupée</option>
                      <option value="Partenariat / Revendeur">Partenariat / Revendeur</option>
                      <option value="Presse / Médias">Presse / Médias</option>
                      <option value="Question générale">Question générale</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold" style={{ color: "var(--brown)" }}>Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Votre message..."
                      className="rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none"
                      style={{
                        background: "var(--cream)",
                        border: "2px solid var(--cream-dark)",
                        color: "var(--brown)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--orange)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--cream-dark)")}
                    />
                  </div>

                  {/* Erreur */}
                  {status === "error" && (
                    <div
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm"
                      style={{ background: "rgba(200,83,28,0.08)", border: "1px solid rgba(200,83,28,0.3)", color: "var(--orange)" }}
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white transition-all hover:scale-[1.02] hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: status === "loading" ? "var(--brown-light)" : "var(--orange)" }}
                  >
                    {status === "loading" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Envoi en cours…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 text-center" style={{ background: "var(--brown)", color: "var(--cream)" }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/Logo_sobre.png" alt="La Poche Basque" width={44} height={44} className="object-contain" />
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
          <p className="text-xs opacity-50">
            © 2025 La Poche Basque · Fait avec ♥ au Pays Basque
          </p>
        </div>
      </footer>

    </main>
  )
}
