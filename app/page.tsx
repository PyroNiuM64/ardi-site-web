import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import FunctionsSection, { FunctionsBanner } from "@/components/FunctionsSection"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"

// Lauburu — croix basque, PNG recolorisé selon le contexte
// "white"  : fond sombre (vert, brun)  → invert + screen efface le fond blanc
// "orange" : fond clair (crème)        → filtre sépia + saturate + multiply efface le fond blanc
const Lauburu = ({ size = 24, variant = "white" }: { size?: number; variant?: "white" | "orange" }) => {
  const style =
    variant === "white"
      ? { filter: "invert(1)", mixBlendMode: "screen" as const }
      : { filter: "sepia(1) saturate(6) hue-rotate(350deg) brightness(0.85)", mixBlendMode: "multiply" as const }
  return <img src="/Lauburu.png" width={size} height={size} alt="" style={style} />
}
import { NumberTicker } from "@/components/ui/number-ticker"
import {
  Wind, Star, Leaf, Shield, MapPin, Recycle, Mountain, ShoppingCart, Gift,
  Lightbulb, Globe, ChevronDown, Rabbit, Bug, Thermometer, Droplets
} from "lucide-react"


const tips = [
  { Icon: Thermometer, text: "Passez-le au micro-ondes pour réchauffer vos mains", img: "/Micro-ondes.png", label: "Bouillote" },
  { Icon: Droplets, text: "Lavable en machine en dessous de 20°C", img: "/Lavage.png", label: "Entretien" },
  { Icon: Star, text: "Rembourré avec des noyaux de cerises de confiterie basque", img: "/Cerises.png", label: "Cerises" },
  { Icon: Wind, text: "Sa laine capte les odeurs et l'humidité naturellement", img: "/Absorbe.png", label: "Absorbant" },
]

type ValueItem = {
  Icon: React.ElementType
  title: string
  desc: string
}

const values: ValueItem[] = [
  {
    Icon: Mountain,
    title: "Local & Authentique",
    desc: "Laine produite par les éleveurs du Pays Basque. Chaque Ardi valorise une ressource autrefois jetée ou brûlée.",
  },
  {
    Icon: Recycle,
    title: "Écologique",
    desc: "Remplace les sacs plastiques, les éponges synthétiques et les chauffe-mains jetables. Un objet, sept usages.",
  },
  {
    Icon: Shield,
    title: "Durable",
    desc: "Laine feutrée dense et robuste. Résistant aux lavages répétés et aux années d'utilisation.",
  },
]

export default function Page() {
  return (
    <main className="min-h-screen" style={{ background: "var(--cream)" }}>

      <Navbar activePage="home" />

      {/* HERO */}
      <section
        className="texture-bg relative overflow-hidden py-20 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #F5EDE0 0%, #EDE0CC 50%, #F5EDE0 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-10 -right-20 w-80 h-80 rotate-12 opacity-20" style={{ background: "var(--orange)" }} />
          <div className="absolute -bottom-10 -left-20 w-80 h-80 rotate-12 opacity-20" style={{ background: "var(--orange)" }} />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
            style={{ background: "var(--green)" }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-left">
            {/* AnimatedShinyText badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 border"
              style={{ background: "var(--green)", borderColor: "rgba(255,255,255,0.2)" }}
            >
              <AnimatedShinyText className="text-white font-semibold flex items-center gap-1.5">
                <Lauburu size={16} variant="white" /> Laine du Pays Basque
              </AnimatedShinyText>
            </div>

            <h1
              className="text-6xl md:text-7xl font-black mb-4 leading-tight"
              style={{ color: "var(--green-dark)", fontFamily: "var(--font-rubik)" }}
            >
              Ardi
            </h1>
            <p className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "var(--orange)", fontFamily: "var(--font-rubik)" }}>
              Le mouton multifonction
            </p>
            <p className="text-lg mb-8 max-w-lg leading-relaxed" style={{ color: "var(--brown-light)" }}>
              Le <strong>couteau suisse textile</strong> du Pays Basque. Un porte-clé en laine locale
              qui se transforme en sac, anti-stress, désodorisant, bouillote de poche et bien plus encore.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#fonctions"
                className="px-8 py-4 rounded-full text-white font-bold text-lg transition-all hover:scale-105 hover:shadow-lg"
                style={{ background: "var(--orange)" }}
              >
                Découvrir Ardi
              </a>
              <a
                href="#histoire"
                className="px-8 py-4 rounded-full font-bold text-lg border-2 transition-all hover:scale-105"
                style={{ borderColor: "var(--green)", color: "var(--green-dark)" }}
              >
                Notre histoire
              </a>
            </div>

            {/* Stats with NumberTicker */}
            <div className="flex gap-8 mt-10">
              <div className="text-center">
                <div className="text-3xl font-black" style={{ color: "var(--orange)", fontFamily: "var(--font-rubik)" }}>
                  <NumberTicker value={7} />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--brown-light)" }}>fonctions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black" style={{ color: "var(--orange)", fontFamily: "var(--font-rubik)" }}>
                  <NumberTicker value={100} />%
                </div>
                <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--brown-light)" }}>laine locale</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black flex items-center justify-center" style={{ color: "var(--orange)" }}>
                  <Recycle className="w-8 h-8" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--brown-light)" }}>écologique</div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="flex-shrink-0 relative">
            <div className="w-72 h-72 md:w-96 md:h-96 relative animate-float">
              <div
                className="absolute inset-0 rounded-full opacity-20"
                style={{ background: "radial-gradient(circle, var(--orange) 0%, transparent 70%)" }}
              />
              <Image
                src="/Ardi.gif"
                alt="Ardi le mouton multifonction"
                fill
                unoptimized
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center text-2xl animate-spin-slow"
              style={{ background: "var(--green)" }}
            >
              <Lauburu size={36} variant="white" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
          <span className="text-xs font-semibold" style={{ color: "var(--brown-light)" }}>Défiler</span>
          <ChevronDown className="w-5 h-5 animate-bounce" style={{ color: "var(--orange)" }} />
        </div>
      </section>

      {/* FUNCTIONS BANNER — 7 usages at a glance */}
      <div>
      <div
        className="sticky-section py-6 px-6"
        style={{ background: "var(--green-dark)", borderTop: "3px solid var(--orange)", borderBottom: "3px solid var(--orange)", zIndex: 2 }}
      >
        <FunctionsBanner />
      </div>
      </div>

      {/* FUNCTIONS SECTION */}
      <div>
      <section id="fonctions" className="sticky-section py-20 px-6" style={{ background: "var(--cream-dark)", zIndex: 3 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-4 rounded-2xl mb-4 rotate-[-1deg]" style={{ background: "var(--green-dark)" }}>
              <h2 className="text-4xl font-black text-white" style={{ fontFamily: "var(--font-rubik)" }}>
                Ardi & ses fonctions
              </h2>
            </div>
            <p className="text-lg mt-4" style={{ color: "var(--brown-light)" }}>
              Quand le sac est rangé, le mouton travaille.
            </p>
            <hr className="section-divider mt-6" />
          </div>

          <FunctionsSection />
        </div>
      </section>
      </div>

      {/* ORIGIN / HISTOIRE */}
      <div>
      <section id="histoire" className="sticky-section py-20 px-6 texture-bg" style={{ background: "var(--cream)", zIndex: 4 }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-4 rounded-2xl mb-4 rotate-[1deg]" style={{ background: "var(--orange)" }}>
              <h2 className="text-4xl font-black text-white" style={{ fontFamily: "var(--font-rubik)" }}>
                Notre histoire
              </h2>
            </div>
            <hr className="section-divider mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div
                className="rounded-3xl overflow-hidden shadow-xl border-4 aspect-square relative"
                style={{ borderColor: "var(--green)" }}
              >
                <Image src="/monter-la-rhune-pays-basque.jpg" alt="Pays Basque — La Rhune" fill className="object-cover" />
              </div>
              {/* Photo équipe */}
              <div
                className="relative w-full rounded-2xl overflow-hidden border-4 shadow-xl"
                style={{ height: "260px", borderColor: "var(--orange)" }}
              >
                <Image
                  src="/Photo_equipe.png.png"
                  alt="L'équipe La Poche Basque"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 45%" }}
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl p-6 border-l-4" style={{ background: "var(--cream-dark)", borderColor: "var(--orange)" }}>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2" style={{ color: "var(--green-dark)", fontFamily: "var(--font-rubik)" }}>
                  <Rabbit className="w-5 h-5 flex-shrink-0" style={{ color: "var(--orange)" }} />
                  Le paradoxe de la laine basque
                </h3>
                <p className="leading-relaxed text-sm" style={{ color: "var(--brown-light)" }}>
                  Les éleveurs du Pays Basque font face à un défi insoutenable : leur laine, autrefois précieuse,
                  est aujourd'hui traitée comme un <strong>déchet</strong> — jetée, brûlée ou enterrée. La laine
                  basque, plus hétérogène, ne correspond plus aux standards industriels du vêtement.
                </p>
              </div>

              <div className="rounded-2xl p-6 border-l-4" style={{ background: "var(--cream-dark)", borderColor: "var(--green)" }}>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2" style={{ color: "var(--orange)", fontFamily: "var(--font-rubik)" }}>
                  <Lightbulb className="w-5 h-5 flex-shrink-0" style={{ color: "var(--green)" }} />
                  Changer l'usage, pas la fibre
                </h3>
                <p className="leading-relaxed text-sm" style={{ color: "var(--brown-light)" }}>
                  Notre réponse est simple : <em>"changer l'usage plutôt que la fibre"</em>. Là où la laine
                  locale ne peut pas concurrencer le marché textile mondial, ses propriétés naturelles —
                  absorption, thermorégulation, anti-odeur — font d'elle une matière première <strong>exceptionnelle
                  pour Ardi</strong>.
                </p>
              </div>

              <div className="rounded-2xl p-6 border-l-4" style={{ background: "var(--cream-dark)", borderColor: "var(--orange)" }}>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2" style={{ color: "var(--green-dark)", fontFamily: "var(--font-rubik)" }}>
                  <Globe className="w-5 h-5 flex-shrink-0" style={{ color: "var(--orange)" }} />
                  Un impact réel
                </h3>
                <p className="leading-relaxed text-sm" style={{ color: "var(--brown-light)" }}>
                  Chaque Ardi vendu crée un <strong>revenu complémentaire</strong> pour les éleveurs locaux,
                  réduit les déchets agricoles, remplace des objets jetables (sacs plastiques, éponges,
                  chauffe-mains) et renforce l'économie circulaire du Pays Basque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* TIPS */}
      <div>
      <section id="tips" className="sticky-section py-20 px-6" style={{ background: "var(--green-dark)", zIndex: 5 }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: "var(--font-rubik)" }}>
              Quand le sac est rangé,<br />
              <span style={{ color: "var(--orange-light)" }}>le mouton travaille</span>
            </h2>
            <p className="text-green-200 text-lg">Quelques tips pour profiter d'Ardi au maximum</p>
            <hr
              className="section-divider mt-6"
              style={{ background: "linear-gradient(90deg, transparent, var(--orange-light), transparent)" }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {tips.map((tip) => (
              <div
                key={tip.text}
                className="flex flex-col rounded-3xl overflow-hidden transition-transform hover:scale-[1.03]"
                style={{ background: "rgba(255,255,255,0.95)" }}
              >
                {/* Illustration */}
                <div className="flex items-end justify-center px-4 pt-4" style={{ minHeight: 160 }}>
                  <Image
                    src={tip.img}
                    alt={tip.label}
                    width={200}
                    height={180}
                    className="w-full h-auto object-contain"
                  />
                </div>
                {/* Text */}
                <div className="p-4 flex flex-col gap-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--green)" }}
                  >
                    <tip.Icon className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-sm font-medium leading-snug" style={{ color: "var(--brown)" }}>
                    {tip.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>

      {/* FABRICATION */}
      <div>
      <section className="sticky-section py-20 px-6" style={{ background: "var(--cream-dark)", zIndex: 6 }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-8 py-4 rounded-2xl mb-4" style={{ background: "var(--green-dark)" }}>
              <h2 className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-rubik)" }}>
                Architecture du produit
              </h2>
            </div>
            <p style={{ color: "var(--brown-light)" }}>Une conception technique rigoureuse en 3 couches</p>
            <hr className="section-divider mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "1",
                title: "Enveloppe extérieure",
                desc: "Laine feutrée dense, résistante à l'abrasion, aux manipulations répétées et aux lavages. Surface efficace pour le nettoyage.",
                color: "var(--orange)",
                bgImg: "/Ardi 0.png",
              },
              {
                num: "2",
                title: "Cavité centrale",
                desc: "Laine feutrée structurée servant de rangement compact pour le sac, zone d'absorption d'humidité et zone anti-stress.",
                color: "var(--green)",
                bgImg: "/Sac dépliable 1.png",
              },
              {
                num: "3",
                title: "Sac intérieur dépliable",
                desc: "Tissu léger et résistant (laine, coton bio ou toile recyclée), cousu mécaniquement, isolé des zones humides.",
                color: "var(--orange)",
                bgImg: "/Sac dépliable 2.png",
              },
            ].map((layer) => (
              <div
                key={layer.num}
                className="relative rounded-2xl p-7 text-center border-t-4 shadow-sm transition-transform hover:scale-[1.02] overflow-hidden"
                style={{ background: "var(--cream)", borderColor: layer.color }}
              >
                {/* Background illustration */}
                <div className="absolute inset-0 pointer-events-none">
                  <Image
                    src={layer.bgImg}
                    alt=""
                    fill
                    className="object-contain"
                    style={{ opacity: 0.2 }}
                  />
                </div>
                {/* Content */}
                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl font-black mx-auto mb-4"
                    style={{ background: layer.color, fontFamily: "var(--font-rubik)" }}
                  >
                    {layer.num}
                  </div>
                  <h3 className="font-bold text-lg mb-3" style={{ color: "var(--brown)", fontFamily: "var(--font-rubik)" }}>{layer.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--brown-light)" }}>{layer.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Noyaux de cerises */}
          <div
            className="mt-6 rounded-2xl p-5 flex items-start gap-4 border-2"
            style={{ background: "rgba(200,83,28,0.06)", borderColor: "rgba(200,83,28,0.3)" }}
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--orange)" }}>
              <Thermometer className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-sm mb-1" style={{ color: "var(--orange)", fontFamily: "var(--font-rubik)" }}>
                Bouillote intégrée — noyaux de cerises basques
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--brown-light)" }}>
                Les pattes et la tête d&apos;Ardi sont rembourrées de noyaux de cerises issus de confiseries basques locales. Passés 30 secondes au micro-ondes, ils diffusent une chaleur douce et durable — parfait pour réchauffer les mains en hiver.
              </p>
            </div>
          </div>

        </div>
      </section>
      </div>

      {/* VALEURS */}
      <div>
      <section id="valeurs" className="sticky-section py-20 px-6" style={{ background: "var(--cream)", zIndex: 7 }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-4 rounded-2xl mb-4 rotate-[-1deg]" style={{ background: "var(--orange)" }}>
              <h2 className="text-4xl font-black text-white" style={{ fontFamily: "var(--font-rubik)" }}>
                Nos valeurs
              </h2>
            </div>
            <hr className="section-divider mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((val) => (
              <div
                key={val.title}
                className="rounded-2xl p-8 text-center border-2 transition-all hover:shadow-xl hover:scale-[1.03]"
                style={{ borderColor: "var(--cream-dark)", background: "var(--cream-dark)" }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: "var(--green-dark)" }}
                >
                  <val.Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: "var(--green-dark)", fontFamily: "var(--font-rubik)" }}>{val.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--brown-light)" }}>{val.desc}</p>
              </div>
            ))}
          </div>

          {/* Target audiences */}
          <div
            className="mt-16 rounded-2xl p-8 border-2"
            style={{ borderColor: "var(--orange)", background: "rgba(200,83,28,0.04)" }}
          >
            <h3 className="text-2xl font-bold text-center mb-8" style={{ color: "var(--orange)", fontFamily: "var(--font-rubik)" }}>
              Pour qui est Ardi ?
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { Icon: ShoppingCart, label: "Le quotidien", desc: "Consommateurs de tous âges en quête de praticité" },
                { Icon: Leaf, label: "L'éco-conscient", desc: "Sensibles à l'écologie et aux produits locaux, et curieux des multiples propriétés naturelles de la laine" },
                { Icon: MapPin, label: "Le touriste", desc: "Souvenir authentique et utile du Pays Basque" },
                { Icon: Gift, label: "Le cadeau", desc: "Original, utile et chargé de sens" },
              ].map((a) => (
                <div key={a.label} className="flex flex-col items-center gap-2">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: "var(--orange)" }}
                  >
                    <a.Icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="font-bold" style={{ color: "var(--brown)", fontFamily: "var(--font-rubik)" }}>{a.label}</p>
                  <p className="text-xs" style={{ color: "var(--brown-light)" }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* TARIFS */}
      <div>
      <section className="sticky-section py-20 px-6" style={{ background: "var(--cream)", zIndex: 8 }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-8 py-4 rounded-2xl mb-4 rotate-[1deg]" style={{ background: "var(--green-dark)" }}>
              <h2 className="text-4xl font-black text-white" style={{ fontFamily: "var(--font-rubik)" }}>
                Nos tarifs
              </h2>
            </div>
            <p style={{ color: "var(--brown-light)" }}>Simple, transparent, basque.</p>
            <hr className="section-divider mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Ardi de base */}
            <div
              className="relative rounded-3xl p-8 flex flex-col items-center text-center border-2 transition-all hover:scale-[1.03] hover:shadow-xl"
              style={{ background: "var(--cream-dark)", borderColor: "var(--cream-dark)" }}
            >
              <div className="w-20 h-20 relative mb-4">
                <Image src="/Ardi.gif" alt="Ardi" fill unoptimized className="object-contain" />
              </div>
              <h3 className="text-xl font-black mb-1" style={{ color: "var(--green-dark)", fontFamily: "var(--font-rubik)" }}>Ardi</h3>
              <p className="text-sm mb-6" style={{ color: "var(--brown-light)" }}>Le mouton multifonction</p>
              <div className="text-5xl font-black mb-1" style={{ color: "var(--orange)", fontFamily: "var(--font-rubik)" }}>25€</div>
              <p className="text-xs mb-6" style={{ color: "var(--brown-light)" }}>6 fonctions incluses</p>
              <ul className="text-sm space-y-2 text-left w-full mb-8">
                {["Sac dépliable", "Désodorisant naturel", "Anti-stress", "Éponge naturelle", "Bouillote de poche", "Porte-bonheur"].map(f => (
                  <li key={f} className="flex items-center gap-2" style={{ color: "var(--brown)" }}>
                    <span style={{ color: "var(--green)" }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="mt-auto w-full py-3 rounded-full font-bold text-white text-center transition-all hover:scale-105 hover:shadow-md" style={{ background: "var(--green-dark)" }}>
                Commander
              </a>
            </div>

            {/* Ardi + Décapsuleur */}
            <div
              className="relative rounded-3xl p-8 flex flex-col items-center text-center border-2 transition-all hover:scale-[1.03] hover:shadow-xl"
              style={{ background: "white", borderColor: "var(--orange)" }}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black text-white" style={{ background: "var(--orange)" }}>
                ★ Populaire
              </div>
              <div className="w-20 h-20 relative mb-4">
                <Image src="/Ardi.gif" alt="Ardi" fill unoptimized className="object-contain" />
              </div>
              <h3 className="text-xl font-black mb-1" style={{ color: "var(--green-dark)", fontFamily: "var(--font-rubik)" }}>Ardi + Décapsuleur</h3>
              <p className="text-sm mb-6" style={{ color: "var(--brown-light)" }}>Avec l'option décapsuleur</p>
              <div className="text-5xl font-black mb-1" style={{ color: "var(--orange)", fontFamily: "var(--font-rubik)" }}>30€</div>
              <p className="text-xs mb-6" style={{ color: "var(--brown-light)" }}>7 fonctions incluses</p>
              <ul className="text-sm space-y-2 text-left w-full mb-8">
                {["Sac dépliable", "Désodorisant naturel", "Anti-stress", "Éponge naturelle", "Bouillote de poche", "Porte-bonheur", "Décapsuleur"].map(f => (
                  <li key={f} className="flex items-center gap-2" style={{ color: "var(--brown)" }}>
                    <span style={{ color: "var(--orange)" }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="mt-auto w-full py-3 rounded-full font-bold text-white text-center transition-all hover:scale-105 hover:shadow-md" style={{ background: "var(--orange)" }}>
                Commander
              </a>
            </div>

            {/* Autocollant */}
            <div
              className="relative rounded-3xl p-8 flex flex-col items-center text-center border-2 transition-all hover:scale-[1.03] hover:shadow-xl"
              style={{ background: "var(--cream-dark)", borderColor: "var(--cream-dark)" }}
            >
              <div className="w-20 h-20 relative mb-4">
                <Image src="/Logo_lpb.png" alt="Autocollant La Poche Basque" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-black mb-1" style={{ color: "var(--green-dark)", fontFamily: "var(--font-rubik)" }}>Autocollant</h3>
              <p className="text-sm mb-6" style={{ color: "var(--brown-light)" }}>Logo La Poche Basque</p>
              <div className="text-5xl font-black mb-1" style={{ color: "var(--orange)", fontFamily: "var(--font-rubik)" }}>5€</div>
              <p className="text-xs mb-6" style={{ color: "var(--brown-light)" }}>L'identité basque sur tout</p>
              <ul className="text-sm space-y-2 text-left w-full mb-8">
                {["Design exclusif La Poche Basque", "Résistant à l'eau", "Parfait en cadeau"].map(f => (
                  <li key={f} className="flex items-center gap-2" style={{ color: "var(--brown)" }}>
                    <span style={{ color: "var(--green)" }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="mt-auto w-full py-3 rounded-full font-bold text-white text-center transition-all hover:scale-105 hover:shadow-md" style={{ background: "var(--green-dark)" }}>
                Commander
              </a>
            </div>

          </div>

          {/* Cagnotte Leetchi */}
          <div
            className="mt-10 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 border-2"
            style={{ background: "rgba(200,83,28,0.06)", borderColor: "var(--orange)" }}
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl" style={{ background: "var(--orange)" }}>
              🎉
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-black mb-1" style={{ color: "var(--green-dark)", fontFamily: "var(--font-rubik)" }}>
                Soutenez le projet & précommandez Ardi
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--brown-light)" }}>
                Participez à notre cagnotte Leetchi pour soutenir La Poche Basque et précommander votre Ardi en avant-première. Chaque contribution nous aide à lancer la production !
              </p>
            </div>
            <a
              href="https://www.leetchi.com/fr/c/la-poche-basque--ardi-2529713?utm_source=copylink&utm_medium=social_sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-8 py-4 rounded-full font-bold text-white text-center transition-all hover:scale-105 hover:shadow-lg"
              style={{ background: "var(--orange)" }}
            >
              Rejoindre la cagnotte 🐑
            </a>
          </div>

        </div>
      </section>
      </div>

      {/* PAILLAGE */}
      <div>
      <section id="paillage" className="sticky-section py-20 px-6" style={{ background: "var(--green-dark)", zIndex: 9 }}>
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-4 rounded-2xl mb-4 rotate-[-1deg]" style={{ background: "var(--orange)" }}>
              <h2 className="text-4xl font-black text-white" style={{ fontFamily: "var(--font-rubik)" }}>
                Paillage naturel
              </h2>
            </div>
            <p className="text-lg mt-4 font-semibold" style={{ color: "var(--orange-light)" }}>
              La laine qui nourrit votre jardin
            </p>
            <hr className="section-divider mt-6" style={{ background: "linear-gradient(90deg, transparent, var(--orange-light), transparent)" }} />
          </div>

          {/* Main grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left — illustration */}
            <div className="flex justify-center">
              <Image
                src="/ardi_paillage_walk.png"
                alt="Ardi épand le paillage dans votre jardin"
                width={420}
                height={520}
                className="w-full max-w-sm drop-shadow-2xl"
              />
            </div>

            {/* Right — content */}
            <div className="space-y-6">

              {/* Price */}
              <div
                className="inline-flex items-baseline gap-2 px-6 py-3 rounded-2xl"
                style={{ background: "var(--orange)" }}
              >
                <span className="text-white font-black text-4xl" style={{ fontFamily: "var(--font-rubik)" }}>5 €</span>
                <span className="text-white opacity-90 font-semibold text-base">/ 100 g</span>
              </div>

              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                Notre paillage à base de <strong className="text-white">laine basque</strong> est une
                alternative 100 % naturelle aux paillages synthétiques. Il protège, nourrit et hydrate
                votre sol — tout en se dégradant progressivement sur <strong className="text-white">3 ans et plus</strong>.
              </p>

              {/* Benefits grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { Icon: Droplets, title: "Rétention d'eau", desc: "Absorbe jusqu'à 30 % de son poids en eau — moins d'arrosage" },
                  { Icon: Leaf, title: "Nourrit le sol", desc: "Kératine → azote, potassium, phosphore libérés progressivement" },
                  { Icon: Shield, title: "Anti-adventices", desc: "Barrière naturelle contre les mauvaises herbes" },
                  { Icon: Thermometer, title: "Isolation thermique", desc: "Protège les racines du gel et de la chaleur estivale" },
                ].map((b) => (
                  <div
                    key={b.title}
                    className="rounded-2xl p-4 transition-transform hover:scale-[1.02]"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                      style={{ background: "var(--green)" }}
                    >
                      <b.Icon className="w-4 h-4 text-white" />
                    </div>
                    <p className="font-bold text-sm text-white mb-1" style={{ fontFamily: "var(--font-rubik)" }}>{b.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{b.desc}</p>
                  </div>
                ))}
                {/* Anti-limaces — pleine largeur pour le mettre en avant */}
                <div
                  className="col-span-2 flex items-center gap-4 rounded-2xl p-4 transition-transform hover:scale-[1.01]"
                  style={{ background: "rgba(200,83,28,0.25)", border: "1px solid rgba(200,83,28,0.5)" }}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "var(--orange)" }}
                  >
                    <Bug className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-white" style={{ fontFamily: "var(--font-rubik)" }}>Anti-limaces naturel</p>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                      La texture laineuse repousse les limaces — elles n'aiment pas la fibre et elle les assèche au contact.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-xl"
                style={{ background: "var(--orange)", color: "white" }}
              >
                <Leaf className="w-5 h-5" />
                Commander du paillage
              </a>
            </div>
          </div>

          {/* Second illustration — Ardi holding the bowl, centered */}
          <div className="mt-16 flex flex-col md:flex-row items-center gap-10 rounded-3xl p-8"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <Image
              src="/ardi_paillage_bowl.png"
              alt="Ardi et son bol de paillage"
              width={220}
              height={280}
              className="drop-shadow-2xl flex-shrink-0"
            />
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-2xl font-black text-white" style={{ fontFamily: "var(--font-rubik)" }}>
                100 % laine basque locale
              </h3>
              <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                La même laine qui compose Ardi — valorisée autrement. Là où les industriels du textile
                la refusent, votre jardin l'accueille. Chaque achat soutient directement les éleveurs
                du Pays Basque et réduit les déchets agricoles.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {["Biodégradable", "Zéro déchet", "Local Pays Basque", "3 ans de durée de vie"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "var(--green)", color: "white" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
      </div>

      {/* CTA / CONTACT */}
      <div>
      <section
        id="contact"
        className="sticky-section pt-0 pb-20 px-6 text-center relative overflow-hidden"
        style={{ background: "var(--green-dark)", zIndex: 10 }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-0 w-64 h-64 opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{ background: "var(--orange)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 opacity-10 rounded-full translate-x-1/3 translate-y-1/3"
            style={{ background: "var(--orange-light)" }}
          />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <div className="w-[384px] h-[384px] relative mx-auto mb-8 animate-float">
            <Image src="/Adoptez Ardi.png" alt="Ardi" fill className="object-contain drop-shadow-2xl" />
          </div>
          <h2 className="text-5xl font-black text-white mb-4" style={{ fontFamily: "var(--font-rubik)" }}>
            Adoptez Ardi
          </h2>
          <p className="text-xl mb-10" style={{ color: "var(--orange-light)" }}>
            Le couteau suisse textile, basque, durable et utile.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-xl"
              style={{ background: "var(--orange)", color: "white" }}
            >
              Nous contacter
            </a>
            <a
              href="#fonctions"
              className="px-10 py-4 rounded-full font-bold text-lg border-2 transition-all hover:scale-105"
              style={{ borderColor: "white", color: "white" }}
            >
              Revoir les fonctions
            </a>
          </div>
        </div>
      </section>
      </div>

      {/* FOOTER */}
      <div>
      <footer className="sticky-section py-10 px-6 text-center" style={{ background: "var(--brown)", color: "var(--cream)", zIndex: 11 }}>
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
          <div className="flex flex-col items-center md:items-end gap-2">
            <a
              href="https://www.instagram.com/la.poche.basque/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity"
              style={{ color: "var(--cream)" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              la.poche.basque
            </a>
            <p className="text-xs opacity-50">
              © 2025 La Poche Basque · Fait avec ♥ au Pays Basque
            </p>
          </div>
        </div>
      </footer>
      </div>

    </main>
  )
}

