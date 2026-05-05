import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col" style={{ background: "var(--cream)" }}>
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-0 text-center">
        {/* Illustration */}
        <div className="w-96 h-96 md:w-[600px] md:h-[600px] relative mb-0 animate-float">
          <Image
            src="/ERROR 404_1.png"
            alt="Ardi perdu — erreur 404"
            fill
            className="object-contain drop-shadow-xl"
          />
        </div>

        {/* Texte */}
        <h1
          className="text-5xl md:text-7xl font-black mb-1"
          style={{ color: "var(--green-dark)", fontFamily: "var(--font-rubik)" }}
        >
          404
        </h1>
        <p
          className="text-xl md:text-2xl font-bold mb-1"
          style={{ color: "var(--orange)", fontFamily: "var(--font-rubik)" }}
        >
          Ardi s&apos;est perdu dans la lande…
        </p>
        <p className="text-base mb-4 max-w-sm" style={{ color: "var(--brown-light)" }}>
          Cette page n&apos;existe pas ou a été déplacée. Pas de panique, on va te ramener au bercail.
        </p>

        {/* Boutons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-3 rounded-full font-bold text-white transition-all hover:scale-105 hover:shadow-lg"
            style={{ background: "var(--orange)" }}
          >
            Retour à l'accueil
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 rounded-full font-bold border-2 transition-all hover:scale-105"
            style={{ borderColor: "var(--green)", color: "var(--green-dark)" }}
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </main>
  )
}
