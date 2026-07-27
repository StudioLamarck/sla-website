import type { Metadata } from "next"
import Link from "next/link"
import { Archivo_Black, Space_Mono } from "next/font/google"
import s from "./v3.module.css"

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
  title: "Proposition V3 — arty",
  robots: { index: false, follow: false },
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

/** Plaque émaillée façon station de métro. */
function Plaque({ children }: { children: React.ReactNode }) {
  return (
    <span className={s.plaque}>
      <span className={s.bullet}>12</span>
      <span className={s.plaqueText}>{children}</span>
    </span>
  )
}

const pacte = [
  ["0 €", "La cotisation", "Pas d'abonnement, pas de frais de dossier, pas de ticket d'entrée."],
  ["100 %", "Ta propriété intellectuelle", "Code, design, données. À toi, définitivement — même ce que l'IA a écrit."],
  ["0 %", "De ton capital", "Aucune part, aucune option, aucun droit de regard. Jamais."],
  ["30 j", "Pour partir", "Tu emportes tout. Et on t'aide à financer tes premiers mois dehors."],
]

const contre = [
  ["Pas un incubateur", "Pas de dossier, pas de business plan, pas de promo à intégrer. Tu racontes ton idée en quelques lignes, on répond dans la semaine."],
  ["Pas une agence", "On ne code pas à ta place. On t'apprend à passer les caps qui font peur : l'hébergement, la sécurité, la mise sur les stores."],
  ["Pas un investisseur", "On ne prend aucune part. Notre seul retour, c'est que ton produit marche — et que tu dises d'où tu viens."],
]

const stations = [
  ["Terminus idée", "Tu as une idée", "Seul face à ton intuition. On la challenge, on te dit par où commencer, et tu la pitches devant des membres."],
  ["Correspondance", "Tu construis avec le collectif", "Nos serveurs, nos outils d'IA, nos comptes de stores. Des sessions de codev pour ne plus avancer seul."],
  ["Sortie", "Tu voles de tes propres ailes", "Ton produit a trouvé son monde. Tu pars quand tu décides, avec tout, et un coup de pouce pour démarrer."],
]

const ticker = [
  "0 € de cotisation",
  "100 % de ta PI",
  "0 % de ton capital",
  "30 jours pour partir",
]

export default function V3Page() {
  return (
    <div className={`${s.page} ${display.variable} ${mono.variable}`}>
      <p className={s.draft}>
        Proposition arty · page de travail — <Link href="/">retour au site</Link>
      </p>

      {/* ---------- HERO ---------- */}
      <header className={s.hero}>
        <span className={s.rail}>Association loi 1901 — Paris 18e</span>
        <div className={s.heroInner}>
          <span className={s.logoBadge}>
            <img src="/logo.svg" alt="Studio Lamarck" />
          </span>
          <h1 className={s.giant}>
            Lance
            <br />
            ton produit.
            <br />
            <em className={s.outline}>Il reste à toi.</em>
          </h1>
          <div className={s.heroFoot}>
            <p>
              Association de builders. On héberge ton projet, on te conseille,
              on te bouscule — et on ne prend ni argent, ni part de ton capital.
            </p>
            <a href="#contact" className={s.btnCream}>
              Raconte-nous ton idée
            </a>
          </div>
        </div>
        <svg className={s.heroLlama} viewBox="0 0 34 36" aria-hidden="true">
          <Llama />
        </svg>
      </header>

      {/* ---------- TICKER ---------- */}
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

      {/* ---------- LE PACTE ---------- */}
      <section className={s.paper}>
        <p className={s.tagDark}>[ 01 ] — le pacte</p>
        <h2 className={s.bigDark}>
          Ce qu&apos;on te prend&nbsp;: <em className={s.green}>rien.</em>
        </h2>
        <ul className={s.pacte}>
          {pacte.map(([n, t, d]) => (
            <li key={t}>
              <span className={s.pacteNum}>{n}</span>
              <span className={s.pacteTitle}>{t}</span>
              <span className={s.pacteText}>{d}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- CONTRE ---------- */}
      <section className={s.ink}>
        <p className={s.tag}>[ 02 ] — notre pari</p>
        <h2 className={s.big}>
          On s&apos;est construits
          <br />
          contre trois choses
        </h2>
        <p className={s.chapoLight}>
          Le parcours balisé d&apos;un porteur de projet, c&apos;est un
          incubateur qui prend des parts, un business plan à rendre et, au bout
          du chemin, quelqu&apos;un qui t&apos;explique que tu vas être dilué.
        </p>
        <ol className={s.contre}>
          {contre.map(([t, d], i) => (
            <li key={t}>
              <span className={s.contreNum}>0{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- PARCOURS / LIGNE 12 ---------- */}
      <section className={s.paper} id="parcours">
        <p className={s.tagDark}>[ 03 ] — le parcours</p>
        <h2 className={s.bigDark}>
          Trois stations,
          <br />
          <em className={s.green}>une seule ligne.</em>
        </h2>
        <p className={s.chapo}>
          La motivation qui retombe, une décision qui traîne depuis trois
          semaines, une idée jamais confrontée à personne : tous les builders
          connaissent ça. Tu montes où tu veux, tu descends quand tu veux.
        </p>

        <div className={s.metro}>
          <span className={s.rails} aria-hidden="true" />
          {stations.map(([kicker, t, d], i) => (
            <div className={s.station} key={t}>
              <svg className={s.stationArt} viewBox="0 0 90 44" aria-hidden="true">
                {i === 0 && <Llama x={28} y={6} k={0.95} cls={s.greenFill} />}
                {i === 1 && (
                  <>
                    <Llama x={20} y={3} k={0.5} cls={s.faint} />
                    <Llama x={50} y={3} k={0.5} flip cls={s.faint} />
                    <Llama x={6} y={16} k={0.68} cls={s.greenFill} />
                    <Llama x={34} y={16} k={0.68} cls={s.greenFill} />
                    <Llama x={62} y={16} k={0.68} cls={s.greenFill} />
                  </>
                )}
                {i === 2 && (
                  <>
                    <Llama x={2} y={16} k={0.5} cls={s.faint} />
                    <Llama x={26} y={16} k={0.5} cls={s.faint} />
                    <Llama x={56} y={6} k={0.95} flip cls={s.greenFill} />
                  </>
                )}
              </svg>
              <span className={s.dot} aria-hidden="true" />
              <span className={s.kicker}>{kicker}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- CODEV ---------- */}
      <section className={s.greenBlock}>
        <p className={s.tag}>[ 04 ] — la méthode</p>
        <h2 className={s.big}>Les sessions de codev</h2>
        <p className={s.chapoLight}>
          Régulièrement, un builder expose un blocage et le groupe l&apos;aide à
          y voir clair. Six temps, trois rôles, sept principes.
        </p>
        <Link href="/codev" className={s.btnCream}>
          Découvrir la méthode →
        </Link>
      </section>

      {/* ---------- COLLECTIF ---------- */}
      <section className={s.paper}>
        <p className={s.tagDark}>[ 05 ] — le collectif</p>
        <h2 className={s.bigDark}>
          Trois builders qui en
          <br />
          accompagnent d&apos;autres
        </h2>
        <div className={s.team}>
          {[0, 1, 2].map((i) => (
            <div key={i} className={s.member}>
              <svg viewBox="0 0 60 44" className={s.avatar} aria-hidden="true">
                {i === 0 && <rect x="17" y="10" width="16" height="11" />}
                {i === 1 && (
                  <>
                    <rect x="6" y="1" width="10" height="6" />
                    <rect x="9" y="7" width="4" height="35" />
                  </>
                )}
                <Llama x={i === 1 ? 20 : 8} y={7} k={0.95} cls={s.greenFill} />
              </svg>
              <h3>Prénom</h3>
              <p>Ce qu&apos;il fait au studio</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- PROJETS ---------- */}
      <section className={s.ink}>
        <p className={s.tag}>[ 06 ] — les projets</p>
        <h2 className={s.big}>Ils construisent ici</h2>
        <ul className={s.projets}>
          <li>
            <span className={s.projLogo}>
              <img src="/simplelttr.svg" alt="SimpleLttr" />
            </span>
            <h3>SimpleLttr</h3>
            <p>Toutes ses newsletters au même endroit.</p>
          </li>
          <li>
            <span className={s.projLogo}>
              <img src="/mymemoires.png" alt="MyMémoires" />
            </span>
            <h3>MyMémoires</h3>
            <p>Créer le livre de sa vie, uniquement par la voix.</p>
          </li>
          <li className={s.projFree}>
            <span className={`${s.projLogo} ${s.projLogoEmpty}`}>03</span>
            <h3>La place est libre</h3>
            <p>Le tien pourrait être le prochain.</p>
          </li>
        </ul>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section className={s.greenBlock} id="contact">
        <p className={s.tag}>[ 07 ] — contact</p>
        <h2 className={s.big}>Raconte-nous ton idée</h2>
        <p className={s.chapoLight}>
          Quelques lignes suffisent, avec de quoi te joindre. Pas de dossier,
          pas de business plan. On répond à tout le monde, en général sous une
          semaine.
        </p>
        <a href="mailto:contact@studiolamarck.fr" className={s.mail}>
          contact@studiolamarck.fr
        </a>
        <p className={s.signature}>
          <Plaque>Lamarck — Caulaincourt · ligne 12</Plaque>
        </p>
      </section>
    </div>
  )
}
