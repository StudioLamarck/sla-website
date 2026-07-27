import type { Metadata } from "next"
import Link from "next/link"
import { Archivo_Black, Space_Mono } from "next/font/google"
import s from "./v4.module.css"

const display = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--v3-display",
})

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--v3-mono",
})

export const metadata: Metadata = {
  title: "Studio Lamarck — Collectif associatif de créateurs numériques",
  description:
    "Studio Lamarck est un collectif associatif. Nous accompagnons les créatifs — tech ou non-tech — pour concrétiser leurs idées en produits digitaux solides avec l'IA et le collectif.",
}

function Llama({
  x = 0,
  y = 0,
  k = 1,
  flip = false,
  cls,
}: {
  x?: number
  y?: number
  k?: number
  flip?: boolean
  cls?: string
}) {
  return (
    <g
      className={cls}
      transform={
        flip
          ? `translate(${x} ${y}) scale(${-k} ${k}) translate(-34 0)`
          : `translate(${x} ${y}) scale(${k})`
      }
    >
      <rect x="3" y="0" width="2" height="6" />
      <rect x="7" y="0" width="2" height="6" />
      <rect x="0" y="6" width="9" height="4" />
      <rect x="4" y="10" width="5" height="7" />
      <rect x="4" y="17" width="25" height="10" />
      <rect x="29" y="17" width="4" height="6" />
      <rect x="6" y="27" width="4" height="9" />
      <rect x="23" y="27" width="4" height="9" />
    </g>
  )
}

function Plaque({ children }: { children: React.ReactNode }) {
  return (
    <span className={s.plaque}>
      <span className={s.bullet}>12</span>
      <span className={s.plaqueText}>{children}</span>
    </span>
  )
}

const piliers = [
  {
    n: "01",
    t: "Accessibilité & Inclusivité",
    d: "Développeur aguerri ou créatif non-tech, tu as ta place dans l'atelier pour construire avec l'IA et les outils modernes.",
  },
  {
    n: "02",
    t: "Souveraineté totale",
    d: "0 € de cotisation obligatoire, 0 % de capital prélevé et 100 % de propriété intellectuelle conservée. Tu restes maître chez toi.",
  },
  {
    n: "03",
    t: "Émulsion & Réciprocité",
    d: "Pas d'argent, du temps et de l'attention. Le collectif t'aide sur ton projet, et tu apportes naturellement ton regard aux autres.",
  },
  {
    n: "04",
    t: "Mise en prod & Impact",
    d: "On ne reste pas au stade de l'idée : on fabrique, on déploie en production et on met le produit entre les mains de ses utilisateurs.",
  },
]

const jamPrincipes = [
  {
    n: "01",
    t: "Un projet au centre",
    d: "100 % de l'énergie et de l'attention du groupe est dédiée à un seul builder par session.",
  },
  {
    n: "02",
    t: "Célébrer avant d'explorer",
    d: "On commence toujours par partager son produit et ses réussites récents avant de poser ses blocages.",
  },
  {
    n: "03",
    t: "L'esprit d'atelier",
    d: "Pas de réunion corporate, pas de chronomètre rigide. On réfléchit et on crée ensemble comme des artisans du numérique.",
  },
  {
    n: "04",
    t: "Parler d'expérience",
    d: "Pas de leçons théoriques : on partage des idées créatives, des retours d'usage et ce qui a marché pour soi.",
  },
  {
    n: "05",
    t: "Réciprocité créative",
    d: "Chercher des solutions pour un confrère débloque ses propres idées et redonne de l'énergie pour son propre produit.",
  },
]

const parcours = [
  {
    badge: "Station 01",
    t: "La Rencontre",
    d: "Un échange humain et convivial pour faire connaissance, challenger l'idée et s'assurer de l'alignement avec le collectif.",
  },
  {
    badge: "Station 02",
    t: "La Construction",
    d: "Tu fabriques ton produit en toute autonomie grâce aux Jam Sessions, à nos infrastructures et au potentiel des outils d'IA.",
  },
  {
    badge: "Station 03",
    t: "L'Envol",
    d: "Ton produit est en production et rencontre ses utilisateurs. Tu continues ta route en totale liberté tout en restant au studio.",
  },
]

const ticker = [
  "0 € de cotisation",
  "100 % de ta PI",
  "0 % de capital",
  "Jam Sessions collectives",
  "Inclusivité & IA",
]

export default function V4Page() {
  return (
    <div className={`${s.page} ${display.variable} ${mono.variable}`}>
      <div className={s.draft}>
        Proposition V4 · Nouveau positionnement — <Link href="/">retour au site</Link>
      </div>

      {/* HERO */}
      <header className={s.hero}>
        <div className={s.heroInner}>
          <span className={s.logoBadge}>
            <img src="/logo.svg" alt="Studio Lamarck" />
          </span>

          <h1 className={s.giant}>
            Lance
            <br />
            ton produit.
            <br />
            <em className={s.outline}>En toute liberté.</em>
          </h1>

          <div className={s.heroFoot}>
            <p>
              Studio Lamarck est un collectif associatif dédié aux créateurs numériques.
              Nous accompagnons les builders — tech ou non-tech — pour concrétiser leurs idées
              en produits applicatifs solides, avec l'IA et la force du groupe.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="#contact" className={s.btnCream}>
                Raconte-nous ton idée
              </a>
              <a href="#parcours" className={s.btnOutline}>
                Le Parcours
              </a>
            </div>
          </div>
        </div>

        <svg className={s.heroLlama} viewBox="0 0 34 36" aria-hidden="true">
          <Llama />
        </svg>
      </header>

      {/* TICKER */}
      <div className={s.ticker}>
        <div className={s.tickerTrack}>
          {[0, 1].map((dup) => (
            <div className={s.tickerRun} key={dup} aria-hidden={dup === 1}>
              {ticker.map((t) => (
                <span className={s.tickerItem} key={t}>
                  {t}
                  <svg viewBox="0 0 34 36" className={s.tickerLlama}>
                    <Llama />
                  </svg>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* LES 4 PILIERS */}
      <section className={s.paper}>
        <span className={s.tagDark}>[ 01 ] — les piliers</span>
        <h2 className={s.bigDark}>
          Un cadre libre et <em className={s.green}>engagé.</em>
        </h2>
        <p className={s.chapo}>
          Studio Lamarck existe pour faire tomber les barrières du numérique et permettre
          à chaque esprit créatif d'incarner sa vision.
        </p>

        <div className={s.piliersGrid}>
          {piliers.map((p) => (
            <div className={s.pilierCard} key={p.n}>
              <div>
                <span className={s.pilierNum}>{p.n}</span>
                <h3 className={s.pilierTitle}>{p.t}</h3>
                <p className={s.pilierText}>{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LA METHODE : JAM SESSION DE BUILDERS */}
      <section className={s.greenBlock} id="jam">
        <span className={s.tag}>[ 02 ] — la méthode d'atelier</span>
        <h2 className={s.big}>
          Les Jam Sessions de Builders
        </h2>
        <p className={s.chapoLight}>
          Pas de réunion corporate, pas de chronomètre. Nos sessions fonctionnent comme un atelier créatif :
          un seul projet est placé au centre de la table pour recevoir toute l'énergie et les idées du collectif.
        </p>

        <div className={s.jamGrid}>
          {jamPrincipes.map((jp) => (
            <div className={s.jamCard} key={jp.n}>
              <span className={s.jamNum}>[ {jp.n} ]</span>
              <h3 className={s.jamTitle}>{jp.t}</h3>
              <p className={s.jamText}>{jp.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LE PARCOURS */}
      <section className={s.paper} id="parcours">
        <span className={s.tagDark}>[ 03 ] — le parcours</span>
        <h2 className={s.bigDark}>
          Trois étapes, <em className={s.green}>une aventure.</em>
        </h2>
        <p className={s.chapo}>
          Construire seul peut être intimidant. Voici comment nous t'accompagnons de la première rencontre jusqu'à la mise en production.
        </p>

        <div className={s.parcoursGrid}>
          {parcours.map((st) => (
            <div className={s.stationCard} key={st.t}>
              <span className={s.stationBadge}>{st.badge}</span>
              <h3 className={s.stationTitle}>{st.t}</h3>
              <p className={s.stationText}>{st.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJETS SOUTENUS */}
      <section className={s.ink}>
        <span className={s.tag}>[ 04 ] — les projets</span>
        <h2 className={s.big}>Ils construisent chez nous</h2>
        <div className={s.projetsGrid}>
          <div className={s.projetCard}>
            <div className={s.projetHeader}>
              <span className={s.projetLogo}>
                <img src="/simplelttr.svg" alt="SimpleLttr" />
              </span>
              <h3 className={s.projetTitle}>SimpleLttr</h3>
            </div>
            <p className={s.projetText}>
              Toutes ses newsletters au même endroit, lues en toute simplicité.
            </p>
          </div>

          <div className={s.projetCard}>
            <div className={s.projetHeader}>
              <span className={s.projetLogo}>
                <img src="/mymemoires.png" alt="MyMémoires" />
              </span>
              <h3 className={s.projetTitle}>MyMémoires</h3>
            </div>
            <p className={s.projetText}>
              Créer le livre de sa vie, uniquement par la voix. La transmission familiale grâce à l'IA.
            </p>
          </div>

          <div className={`${s.projetCard} ${s.projetCardFree}`}>
            <h3 className={s.projetTitle}>Ta place est libre</h3>
            <p className={s.projetText}>
              D'autres projets s'apprêtent à sortir de l'atelier. Le tien pourrait être le prochain.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className={s.greenBlock} id="contact">
        <span className={s.tag}>[ 05 ] — contact</span>
        <h2 className={s.big}>Raconte-nous ton idée</h2>
        <p className={s.chapoLight}>
          Pas de dossier, pas de business plan. Raconte-nous ton projet en quelques lignes avec de quoi te joindre.
          On répond à tout le monde !
        </p>
        <a href="mailto:contact@studiolamarck.fr" className={s.mail}>
          contact@studiolamarck.fr
        </a>
        <div className={s.signature}>
          <Plaque>Lamarck — Caulaincourt · ligne 12</Plaque>
        </div>
      </section>
    </div>
  )
}
