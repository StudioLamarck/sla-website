import type { Metadata } from "next"
import Link from "next/link"
import { Work_Sans, Space_Mono, Plus_Jakarta_Sans } from "next/font/google"
import s from "./v5.module.css"
import LlamaDispersal from "./LlamaDispersal"

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--v5-work-sans",
})

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--v5-mono",
})

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--v5-sans",
})

export const metadata: Metadata = {
  title: "Studio Lamarck — Collectif & Atelier de Builders",
  description:
    "Le collectif associatif des créateurs numériques. 0 € de cotisation, 100 % de propriété intellectuelle, Jam Sessions et accompagnement avec l'IA.",
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

const piliers = [
  {
    n: "01",
    title: "Accessibilité & IA",
    desc: "Développeur aguerri ou créatif non-tech, tu as ta place dans l'atelier pour construire avec l'IA et les outils modernes.",
  },
  {
    n: "02",
    title: "Souveraineté totale",
    desc: "0 € de cotisation obligatoire, 0 % de capital prélevé et 100 % de propriété intellectuelle conservée. Tu restes maître chez toi.",
  },
  {
    n: "03",
    title: "Émulsion & Réciprocité",
    desc: "Pas d'argent, du temps et de l'attention. Le collectif t'aide sur ton projet, et tu apportes naturellement ton énergie aux autres.",
  },
  {
    n: "04",
    title: "Impact réel & Prod",
    desc: "On ne reste pas au stade de l'idée : on fabrique, on déploie en production et on met le produit entre les mains de ses utilisateurs.",
  },
]

const jamPrincipes = [
  {
    n: "01",
    title: "Un projet au centre",
    desc: "100 % de l'énergie et de l'attention du groupe est dédiée à un seul builder par session.",
  },
  {
    n: "02",
    title: "Célébrer d'abord",
    desc: "On commence toujours par partager son produit et ses réussites récents avant de poser ses blocages.",
  },
  {
    n: "03",
    title: "L'esprit d'atelier",
    desc: "Pas de réunion corporate, pas de chronomètre rigide. On réfléchit et on crée ensemble comme des artisans du numérique.",
  },
  {
    n: "04",
    title: "Parler d'expérience",
    desc: "Pas de leçons théoriques : on partage des idées créatives, des retours d'usage et ce qui a marché pour soi.",
  },
  {
    n: "05",
    title: "Réciprocité créative",
    desc: "Chercher des solutions pour un confrère débloque ses propres idées et redonne de l'énergie pour son propre produit.",
  },
]

const parcours = [
  {
    n: "01",
    title: "La Rencontre",
    desc: "Un échange humain et convivial pour faire connaissance, challenger l'idée et s'assurer de l'alignement avec le collectif.",
  },
  {
    n: "02",
    title: "La Construction",
    desc: "Tu fabriques ton produit en toute autonomie grâce aux Jam Sessions, à nos infrastructures et au potentiel des outils d'IA.",
  },
  {
    n: "03",
    title: "L'Envol",
    desc: "Ton produit est en production et rencontre ses utilisateurs. Tu continues ta route en totale liberté tout en restant au studio.",
  },
]

export default function V5Page() {
  return (
    <div className={`${s.page} ${workSans.variable} ${mono.variable} ${sans.variable}`}>
      {/* ANIMATION DU MÉTRO AVEC ARRÊT EN STATION & PORTES COULISSANTES */}
      <div className={s.stationStage}>
        <div className={s.railTrack}>
          <div className={s.railLines} />
          <div className={s.metroTrain}>
            {/* Rame 1 */}
            <div className={s.metroCar}>
              <span className={s.metroHeadlight} />
              <span>STUDIO LAMARCK</span>
              <div className={s.doorFrame}>
                <div className={s.doorLeft} />
                <div className={s.doorRight} />
              </div>
            </div>

            {/* Rame 2 */}
            <div className={s.metroCar}>
              <span className={s.metroWindow} />
              <span>COLLECTIF</span>
              <div className={s.doorFrame}>
                <div className={s.doorLeft} />
                <div className={s.doorRight} />
              </div>
            </div>

            {/* Rame 3 */}
            <div className={s.metroCar}>
              <span className={s.metroWindow} />
              <span>JAM SESSIONS</span>
              <div className={s.doorFrame}>
                <div className={s.doorLeft} />
                <div className={s.doorRight} />
              </div>
            </div>
          </div>
        </div>

        {/* COMPOSANT CLIENT AVEC GARDE DE MONTAGE SÉCURISÉE */}
        <LlamaDispersal />
      </div>

      {/* HEADER AVEC PLAQUE ÉMAILLÉE */}
      <header className={s.header}>
        <div className={s.plaqueBadge}>
          <img src="/logo.svg" alt="Studio Lamarck" />
        </div>
        <div className={s.statusPill}>
          <span className={s.statusDot} />
          <span>Association Loi 1901</span>
        </div>
      </header>

      {/* HERO STATION EN CARREAUX BLANCS */}
      <section className={s.hero}>
        <div className={s.heroCard}>
          <span className={s.heroTag}>[ ATELIER CRÉATIF & COLLECTIF ]</span>

          <h1 className={s.title}>
            Lance ton produit.
            <br />
            <span className={s.titleGreen}>Garde ta liberté.</span>
          </h1>

          <p className={s.heroSub}>
            Studio Lamarck est un collectif associatif dédié aux créateurs numériques.
            Nous accompagnons les builders — tech ou non-tech — pour concrétiser leurs idées
            en produits applicatifs solides, grâce au potentiel de l'IA et à la force du collectif.
          </p>

          <div className={s.heroBtns}>
            <a href="#contact" className={s.btnGreen}>
              Raconte-nous ton idée →
            </a>
            <a href="#methode" className={s.btnBlue}>
              Les Jam Sessions
            </a>
          </div>

          <svg className={s.heroLlamaArt} viewBox="0 0 34 36" aria-hidden="true">
            <Llama />
          </svg>
        </div>
      </section>

      {/* LES 4 PILIERS */}
      <section className={s.section}>
        <span className={s.sectionTag}>[ 01 // NOS PILIERS ]</span>
        <h2 className={s.sectionTitle}>Un cadre libre et souverain.</h2>
        <p className={s.sectionSub}>
          Studio Lamarck existe pour faire tomber les barrières du numérique et permettre
          à chaque esprit créatif d'incarner sa vision.
        </p>

        <div className={s.piliersGrid}>
          {piliers.map((p) => (
            <div className={s.pilierPlaque} key={p.n}>
              <div className={s.pilierHeader}>
                <span className={s.pilierNumBadge}>PILIER #{p.n}</span>
              </div>
              <h3 className={s.pilierTitle}>{p.title}</h3>
              <p className={s.pilierText}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JAM SESSIONS (ATELIER CONTAINER) */}
      <section className={s.section} id="methode">
        <div className={s.jamStation}>
          <span className={s.sectionTag}>[ 02 // LA MÉTHODE D'ATELIER ]</span>
          <h2 className={s.sectionTitle}>Les Jam Sessions de Builders</h2>
          <p className={s.sectionSub}>
            Pas de réunion corporate ni de chronomètre rigide. Nos sessions fonctionnent comme un atelier créatif :
            un seul projet est placé au centre de la table pour recevoir toute l'énergie du collectif.
          </p>

          <div className={s.jamGrid}>
            {jamPrincipes.map((jp) => (
              <div className={s.jamCard} key={jp.n}>
                <span className={s.jamTagNum}>PRINCIPE #{jp.n}</span>
                <h3 className={s.jamTitle}>{jp.title}</h3>
                <p className={s.jamText}>{jp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LE PARCOURS */}
      <section className={s.section}>
        <span className={s.sectionTag}>[ 03 // LE PARCOURS ]</span>
        <h2 className={s.sectionTitle}>Trois étapes pour concrétiser.</h2>
        <p className={s.sectionSub}>
          Construire seul peut être intimidant. Voici comment nous t'accompagnons de la première rencontre jusqu'au lancement.
        </p>

        <div className={s.parcoursGrid}>
          {parcours.map((st) => (
            <div className={s.stationPlaque} key={st.title}>
              <div className={s.stationHeader}>
                <span className={s.stationBullet}>{st.n}</span>
                <span className={s.stationTagText}>ÉTAPE</span>
              </div>
              <h3 className={s.stationTitle}>{st.title}</h3>
              <p className={s.stationText}>{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJETS SHOWCASE */}
      <section className={s.section}>
        <span className={s.sectionTag}>[ 04 // LES PROJETS ]</span>
        <h2 className={s.sectionTitle}>Ils construisent chez nous.</h2>

        <div className={s.projetsGrid}>
          <div className={s.projetCard}>
            <div className={s.projetLogo}>
              <img src="/simplelttr.svg" alt="SimpleLttr" />
            </div>
            <h3 className={s.projetTitle}>SimpleLttr</h3>
            <p className={s.projetText}>
              Toutes ses newsletters au même endroit, lues en toute simplicité.
            </p>
          </div>

          <div className={s.projetCard}>
            <div className={s.projetLogo}>
              <img src="/mymemoires.png" alt="MyMémoires" />
            </div>
            <h3 className={s.projetTitle}>MyMémoires</h3>
            <p className={s.projetText}>
              Créer le livre de sa vie, uniquement par la voix. La transmission familiale facilitée par l'IA.
            </p>
          </div>

          <div className={`${s.projetCard} ${s.projetFree}`}>
            <h3 className={s.projetTitle}>Ta place est libre</h3>
            <p className={s.projetText}>
              D'autres projets s'apprêtent à sortir du studio. Le tien pourrait être le prochain.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className={s.section} id="contact">
        <div className={s.contactStation}>
          <span className={s.sectionTag}>[ 05 // REJOINDRE ]</span>
          <h2 className={s.sectionTitle}>Raconte-nous ton idée.</h2>
          <p className={s.sectionSub}>
            Pas de dossier, pas de business plan. Raconte-nous ton projet en quelques lignes avec de quoi te joindre.
            On répond à tout le monde !
          </p>
          <a href="mailto:contact@studiolamarck.fr" className={s.contactMail}>
            contact@studiolamarck.fr →
          </a>
        </div>
      </section>

      <footer className={s.footer}>
        Studio Lamarck // Collectif associatif // Paris 18e // <Link href="/" style={{ color: "var(--green-l12)", fontWeight: 700 }}>Retour à l'accueil</Link>
      </footer>
    </div>
  )
}
