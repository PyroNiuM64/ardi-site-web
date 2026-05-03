import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import { Mountain, Rabbit, Users, Briefcase, TrendingUp, Heart, Palette, Package } from "lucide-react"

const Lauburu = ({ size = 24, variant = "white" }: { size?: number; variant?: "white" | "orange" }) => {
  const style =
    variant === "white"
      ? { filter: "invert(1)", mixBlendMode: "screen" as const }
      : { filter: "sepia(1) saturate(6) hue-rotate(350deg) brightness(0.85)", mixBlendMode: "multiply" as const }
  return <img src="/Lauburu.png" width={size} height={size} alt="" style={style} />
}

type Member = {
  name: string
  role: string
  dept: string
  desc: string
  quote: string
  photo: string
  illustration: string
  Icon: React.ElementType
  accent: "orange" | "green"
  photoShift?: number   // px, négatif = monte
  photoScale?: number
}

const members: Member[] = [
  {
    name: "Blandine",
    role: "PDG & Responsable Commerciale",
    dept: "Direction",
    desc: "Elle pilote la stratégie globale de l'entreprise et coordonne les équipes. Blandine porte la vision de La Poche Basque et impulse le développement commercial d'Ardi.",
    quote: "Ardi, c'est l'histoire d'un produit ancré dans notre identité basque, transformé en objet du quotidien utile et durable.",
    photo: "/Blandine.png",
    illustration: "/Commercial.png",
    Icon: Briefcase,
    accent: "orange",
    photoShift: -30,
  },
  {
    name: "Eztitxu",
    role: "PDG Adjoint & Finance Manager",
    dept: "Direction",
    desc: "En charge des finances et de la gestion administrative, elle garantit l'équilibre budgétaire et accompagne chaque décision stratégique avec rigueur.",
    quote: "Chaque décision financière est pensée pour assurer la pérennité de notre projet et valoriser la laine basque.",
    photo: "/Eztitxu.png",
    illustration: "/Direction.png",
    Icon: TrendingUp,
    accent: "green",
    photoShift: -15,
  },
  {
    name: "Lisa",
    role: "RH & Adjoint Commerciale",
    dept: "Ressources Humaines",
    desc: "Lisa gère les ressources humaines et soutient l'équipe commerciale. Elle veille à la cohésion, au bien-être collectif et au bon fonctionnement interne de La Poche Basque.",
    quote: "Une belle équipe, c'est la première ressource d'une entreprise. Mon rôle, c'est de la faire grandir ensemble.",
    photo: "/Lisa.png",
    illustration: "/RH.png",
    Icon: Heart,
    accent: "orange",
    photoShift: -30,
  },
  {
    name: "Eliott",
    role: "Responsable Communication & Marketing",
    dept: "Communication & Marketing",
    desc: "Eliott pilote toute la communication de La Poche Basque. Il a conçu la charte graphique, créé l'ensemble des visuels et des textes des posts Instagram, et développé ce site web de A à Z.",
    quote: "Raconter l'histoire d'Ardi visuellement, c'est partager un peu de l'âme du Pays Basque avec chaque personne qui le découvre.",
    photo: "/Eliott.png",
    illustration: "/Communication.png",
    Icon: TrendingUp,
    accent: "green",
    photoShift: -10,
  },
  {
    name: "Noémie",
    role: "Réseaux sociaux & Mascotte",
    dept: "Communication & Marketing",
    desc: "Noémie est à l'origine de la mascotte Ardi et assiste Eliott sur l'animation des réseaux sociaux. Elle crée du lien avec notre communauté et donne vie au personnage qui représente la marque.",
    quote: "Les réseaux, c'est l'occasion de montrer que derrière Ardi, il y a des gens passionnés et un territoire riche.",
    photo: "/Noemie.png",
    illustration: "/Communication.png",
    Icon: Users,
    accent: "orange",
  },
  {
    name: "Octave",
    role: "Illustrateur",
    dept: "Production",
    desc: "Octave est le dessinateur de l'équipe. Il réalise toutes les illustrations et les dessins qui accompagnent Ardi — du croquis initial aux visuels finaux.",
    quote: "Dessiner Ardi, c'est mettre en image des valeurs : la laine, le Pays Basque, la nature et l'utilité au quotidien.",
    photo: "/Octave.png",
    illustration: "/Illustrateur.png",
    Icon: Palette,
    accent: "green",
    photoShift: -22,
  },
  {
    name: "Liame",
    role: "Production Design & Porte-clé",
    dept: "Production",
    desc: "Liame participe à la conception et à la fabrication des porte-clés Ardi. Il veille à la qualité, à la cohérence du produit fini et incarne le soin artisanal mis dans chaque pièce.",
    quote: "Tenir un Ardi entre les mains, c'est tenir le résultat d'un travail collectif fait avec soin et fierté basque.",
    photo: "/Liame.png",
    illustration: "/Production.png",
    Icon: Package,
    accent: "orange",
    photoShift: -10,
    photoScale: 1.15,
  },
]

const depts = [
  { label: "Direction", color: "var(--orange)" },
  { label: "Ressources Humaines", color: "var(--green)" },
  { label: "Communication & Marketing", color: "var(--green-dark)" },
  { label: "Production", color: "var(--brown)" },
]

export default function EquipePage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--cream)" }}>

      <Navbar activePage="equipe" />

      {/* HERO */}
      <section
        className="relative overflow-hidden py-20 px-6 text-center"
        style={{ background: "linear-gradient(135deg, var(--green-dark) 0%, #1a3a2a 100%)" }}
      >
        {/* Decorative blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-16 -right-24 w-80 h-80 rounded-full opacity-10" style={{ background: "var(--orange)" }} />
          <div className="absolute -bottom-16 -left-24 w-96 h-96 rounded-full opacity-10" style={{ background: "var(--orange-light)" }} />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Badge */}
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
            Notre équipe
          </h1>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Sept étudiants du BTS GPN, unis par la passion du Pays Basque et l&apos;envie de valoriser la laine locale à travers Ardi — le mouton multifonction.
          </p>

          {/* Stats row */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { n: "7", label: "Membres" },
              { n: "4", label: "Pôles" },
              { n: "1", label: "Vision" },
            ].map(({ n, label }) => (
              <div key={label} className="text-center">
                <p className="text-4xl font-black text-white" style={{ fontFamily: "var(--font-rubik)" }}>{n}</p>
                <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PHOTO */}
      <section className="py-12 px-6" style={{ background: "var(--cream-dark)" }}>
        <div className="max-w-4xl mx-auto">
          <div
            className="relative w-full rounded-3xl overflow-hidden border-4 shadow-2xl"
            style={{ height: "320px", borderColor: "var(--orange)" }}
          >
            <Image
              src="/Photo_equipe.png.png"
              alt="L'équipe La Poche Basque"
              fill
              className="object-cover"
              style={{ objectPosition: "center 45%" }}
              priority
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(26,44,26,0.4) 0%, transparent 60%)" }}
            />
            <div className="absolute bottom-6 left-8">
              <p className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-rubik)" }}>
                La Poche Basque · BTS GPN
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ORGANIGRAMME PILL */}
      <section className="py-10 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-4xl mx-auto flex flex-wrap gap-3 justify-center">
          {depts.map((d) => (
            <span
              key={d.label}
              className="px-5 py-2 rounded-full text-sm font-bold text-white"
              style={{ background: d.color }}
            >
              {d.label}
            </span>
          ))}
        </div>
      </section>

      {/* MEMBERS GRID */}
      <section className="py-12 px-6 pb-24" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          {/* Row 1 — 3 members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {members.slice(0, 3).map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
          {/* Row 2 — 4 members */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {members.slice(3).map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* VALUES BANNER */}
      <section className="py-16 px-6" style={{ background: "var(--green-dark)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-8 py-4 rounded-2xl mb-6 rotate-[-1deg]" style={{ background: "var(--orange)" }}>
            <h2 className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-rubik)" }}>
              Un projet, une équipe, un territoire
            </h2>
          </div>
          <p className="text-lg mt-4 max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
            Ardi est né de la volonté de valoriser la laine des éleveurs du Pays Basque — une ressource locale trop souvent ignorée. Notre équipe d&apos;étudiants s&apos;est emparée de ce défi pour créer un produit authentique, utile et ancré dans un territoire qu&apos;on aime.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/#fonctions"
              className="px-8 py-3 rounded-full font-bold text-white transition-all hover:scale-105"
              style={{ background: "var(--orange)" }}
            >
              Découvrir Ardi
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full font-bold border-2 transition-all hover:scale-105"
              style={{ borderColor: "white", color: "white" }}
            >
              Nous contacter
            </Link>
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

function MemberCard({ member }: { member: Member }) {
  const accentColor = member.accent === "orange" ? "var(--orange)" : "var(--green-dark)"
  const shift = member.photoShift  // undefined = pas de décalage (Noémie)

  return (
    <div
      className="rounded-3xl overflow-hidden shadow-lg border-2 transition-all hover:shadow-2xl hover:scale-[1.02] flex flex-col"
      style={{ borderColor: "var(--cream-dark)", background: "white" }}
    >
      {/* Illustration header */}
      <div
        className="relative flex flex-col items-center justify-between pt-4 px-6"
        style={{ background: "var(--cream-dark)", minHeight: 180 }}
      >
        {/* Dept label */}
        <div
          className="self-start px-3 py-1 rounded-full text-xs font-bold text-white"
          style={{ background: accentColor }}
        >
          {member.dept}
        </div>

        {/* Role illustration — centrée et lisible */}
        <div className="relative w-36 h-36 my-2" style={{ opacity: 0.65 }}>
          <Image
            src={member.illustration}
            alt={`Illustration ${member.dept}`}
            fill
            className="object-contain"
          />
        </div>

        {/* Member photo — circular, overlapping footer */}
        <div
          className="relative z-10 w-32 h-32 rounded-full border-4 shadow-xl overflow-hidden mb-[-4rem]"
          style={{ borderColor: "white" }}
        >
          {shift !== undefined ? (
            // Div interne plus haute que le cercle, décalée vers le haut
            // → le bas reste couvert, pas de vide
            <div style={{ position: "absolute", top: `${shift}px`, left: 0, right: 0, bottom: 0 }}>
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover"
                style={{
                  objectPosition: "center top",
                  ...(member.photoScale
                    ? { transform: `scale(${member.photoScale})`, transformOrigin: "top center" }
                    : {}),
                }}
              />
            </div>
          ) : (
            // Noémie : ancienne méthode objectPosition qui lui convient
            <Image
              src={member.photo}
              alt={member.name}
              fill
              className="object-cover"
              style={{ objectPosition: "center 10%" }}
            />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="pt-20 pb-6 px-6 flex flex-col gap-3 flex-1">
        {/* Name + role */}
        <div className="text-center">
          <h3
            className="text-2xl font-black"
            style={{ color: "var(--green-dark)", fontFamily: "var(--font-rubik)" }}
          >
            {member.name}
          </h3>
          <p className="text-sm font-semibold mt-1" style={{ color: accentColor }}>
            {member.role}
          </p>
        </div>

        {/* Divider */}
        <div className="w-12 h-0.5 mx-auto rounded-full" style={{ background: accentColor }} />

        {/* Description */}
        <p className="text-sm leading-relaxed text-center" style={{ color: "var(--brown-light)" }}>
          {member.desc}
        </p>

        {/* Quote */}
        <div
          className="mt-auto rounded-2xl p-4 border-l-4"
          style={{
            background: member.accent === "orange" ? "rgba(200,83,28,0.06)" : "rgba(52,95,56,0.06)",
            borderColor: accentColor,
          }}
        >
          <div className="flex gap-2 items-start">
            <member.Icon className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: accentColor }} />
            <p className="text-xs italic leading-relaxed" style={{ color: "var(--brown)" }}>
              &ldquo;{member.quote}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
