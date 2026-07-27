import type { Metadata } from "next"
import Link from "next/link"
import s from "./v2.module.css"

export const metadata: Metadata = {
  title: "Proposition V2",
  robots: { index: false, follow: false },
}

/** Lama du logo, redécoupé en pièces (34 × 36 en repère local). */
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

const pacte = [
  {
    n: "0 €",
    t: "La cotisation",
    d: "Pas d'abonnement, pas de frais de dossier, pas de ticket d'entrée.",
  },
  {
    n: "100 %",
    t: "Ta propriété intellectuelle",
    d: "Code, design, données. À toi, définitivement — même ce que l'IA a écrit.",
  },
  {
    n: "0 %",
    t: "De ton capital",
    d: "Aucune part, aucune option, aucun droit de regard. Jamais.",
  },
  {
    n: "30 j",
    t: "Pour partir",
    d: "Tu emportes tout. Et on t'aide à financer tes premiers mois dehors.",
  },
]

const contre = [
  {
    t: "Pas un incubateur",
    d: "Pas de dossier, pas de business plan, pas de promo à intégrer. Tu nous racontes ton idée en quelques lignes, on te répond dans la semaine.",
  },
  {
    t: "Pas une agence",
    d: "On ne code pas à ta place. On t'apprend à passer les caps qui font peur : l'hébergement, la sécurité, la mise sur les stores.",
  },
  {
    t: "Pas un investisseur",
    d: "On ne prend aucune part. Notre seul retour, c'est que ton produit marche — et que tu dises d'où tu viens.",
  },
]

const phases = [
  {
    n: "01",
    t: "Tu as une idée",
    d: "Seul face à ton intuition. On la challenge, on te dit par où commencer, et tu la pitches devant des membres.",
  },
  {
    n: "02",
    t: "Tu construis avec le collectif",
    d: "Nos serveurs, nos outils d'IA, nos comptes de stores. Des sessions de codev pour ne plus avancer seul. Tu cherches ton public sans engager un euro.",
  },
  {
    n: "03",
    t: "Tu voles de tes propres ailes",
    d: "Ton produit a trouvé son monde et tu veux en vivre. Tu pars quand tu décides, avec tout, et un coup de pouce pour démarrer.",
  },
]

// À remplacer par les vrais prénoms et rôles des trois fondateurs.
const equipe = [
  { nom: "Prénom", role: "Ce qu'il fait au studio", attr: "bat" },
  { nom: "Prénom", role: "Ce qu'il fait au studio", attr: "baton" },
  { nom: "Prénom", role: "Ce qu'il fait au studio", attr: "aucun" },
]

export default function V2Page() {
  return (
    <div className={s.page}>
      <div className={s.draft}>
        Proposition · page de travail, le site actuel est sur{" "}
        <Link href="/">/</Link>
      </div>

      <header className={s.hero}>
        <div className={s.wrap}>
          <p className={s.eyebrow}>Association à but non lucratif</p>
          <h1 className={s.h1}>
            Lance ton produit.
            <br />
            <span className={s.accent}>Il reste à toi.</span>
          </h1>
          <p className={s.lede}>
            Studio Lamarck est une association de builders. On héberge ton
            projet, on te conseille, on te bouscule — et on ne prend ni argent,
            ni part de ton capital.
          </p>
          <div className={s.actions}>
            <a href="#contact" className={s.btn}>
              Raconte-nous ton idée
            </a>
            <a href="#parcours" className={s.btnGhost}>
              Comment ça marche
            </a>
          </div>
          <svg
            className={s.herd}
            viewBox="0 0 320 56"
            role="img"
            aria-label="Un troupeau de lamas."
          >
            {[32, 80, 128, 176, 224, 272].map((x, i) => (
              <Llama
                key={`f${x}`}
                x={x}
                y={10}
                k={0.55}
                flip={i % 3 === 1}
                cls={s.far}
              />
            ))}
            {[6, 54, 102, 150, 198, 246, 294].map((x, i) => (
              <Llama
                key={`n${x}`}
                x={x}
                y={24}
                k={0.72}
                flip={i % 4 === 2}
                cls={s.near}
              />
            ))}
          </svg>
        </div>
      </header>

      <section className={s.pacte}>
        <div className={s.wrap}>
          <p className={s.labelLight}>Le pacte</p>
          <h2 className={s.h2Light}>Ce qu&apos;on te prend : rien.</h2>
          <div className={s.pacteGrid}>
            {pacte.map((p) => (
              <div className={s.tile} key={p.t}>
                <span className={s.tileNum}>{p.n}</span>
                <strong>{p.t}</strong>
                <span>{p.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.wrap}>
          <p className={s.label}>Notre pari</p>
          <h2 className={s.h2}>On s&apos;est construits contre trois choses</h2>
          <p className={s.intro}>
            Le parcours balisé d&apos;un porteur de projet, c&apos;est un
            incubateur qui prend des parts, un business plan à rendre et, au
            bout du chemin, quelqu&apos;un qui t&apos;explique que tu vas être
            dilué. On a fait un autre pari.
          </p>
          <div className={s.three}>
            {contre.map((c) => (
              <div className={s.contre} key={c.t}>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.section} id="parcours">
        <div className={s.wrap}>
          <p className={s.label}>Le parcours</p>
          <h2 className={s.h2}>Tu n&apos;es pas obligé de construire seul</h2>
          <p className={s.intro}>
            La motivation qui retombe, une décision qui traîne depuis trois
            semaines, une idée jamais confrontée à personne : tous les builders
            connaissent ça.
          </p>
          <div className={s.three}>
            {phases.map((p, i) => (
              <div className={s.phase} key={p.n}>
                <svg
                  className={s.phaseArt}
                  viewBox="0 0 80 44"
                  role="img"
                  aria-label={p.t}
                >
                  {i === 0 && <Llama x={23} y={6} k={0.95} cls={s.near} />}
                  {i === 1 && (
                    <>
                      <Llama x={16} y={4} k={0.5} cls={s.far} />
                      <Llama x={44} y={4} k={0.5} flip cls={s.far} />
                      <Llama x={4} y={16} k={0.68} cls={s.near} />
                      <Llama x={30} y={16} k={0.68} cls={s.near} />
                      <Llama x={56} y={16} k={0.68} cls={s.near} />
                    </>
                  )}
                  {i === 2 && (
                    <>
                      <Llama x={2} y={14} k={0.5} cls={s.far} />
                      <Llama x={26} y={14} k={0.5} cls={s.far} />
                      <Llama x={48} y={6} k={0.95} flip cls={s.near} />
                    </>
                  )}
                </svg>
                <span className={s.phaseNum}>{p.n}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>

          <div className={s.promo}>
            <div>
              <p className={s.label}>Notre méthode</p>
              <h3>Les sessions de codev</h3>
              <p>
                Régulièrement, un builder expose un blocage et le groupe
                l&apos;aide à y voir clair. Six temps, trois rôles, sept
                principes.
              </p>
            </div>
            <Link href="/codev" className={s.btn}>
              Découvrir la méthode
            </Link>
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.wrap}>
          <p className={s.label}>Le collectif</p>
          <h2 className={s.h2}>Trois builders qui en accompagnent d&apos;autres</h2>
          <p className={s.intro}>
            On construit nos propres produits, avec les mêmes galères. C&apos;est
            pour ça qu&apos;on sait où ça coince.
          </p>
          <div className={s.three}>
            {equipe.map((m, i) => (
              <div className={s.membre} key={i}>
                <svg
                  className={s.avatar}
                  viewBox="0 0 60 44"
                  role="img"
                  aria-label="Portrait en lama."
                >
                  {m.attr === "bat" && (
                    <rect x="17" y="10" width="16" height="11" />
                  )}
                  {m.attr === "baton" && (
                    <>
                      <rect x="6" y="1" width="10" height="6" />
                      <rect x="9" y="7" width="4" height="35" />
                    </>
                  )}
                  <Llama x={m.attr === "baton" ? 20 : 8} y={7} k={0.95} cls={s.near} />
                </svg>
                <h3>{m.nom}</h3>
                <p>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.wrap}>
          <p className={s.label}>Ils construisent chez nous</p>
          <h2 className={s.h2}>Les projets du studio</h2>
          <div className={s.three}>
            <div className={s.projet}>
              <img src="/simplelttr.svg" alt="" className={s.logo} />
              <h3>SimpleLttr</h3>
              <p>
                Toutes ses newsletters au même endroit, lues en toute
                simplicité.
              </p>
            </div>
            <div className={s.projet}>
              <img src="/mymemoires.png" alt="" className={s.logo} />
              <h3>MyMémoires</h3>
              <p>
                Créer le livre de sa vie, uniquement par la voix. La
                transmission familiale mise entre les mains de chacun.
              </p>
            </div>
            <div className={`${s.projet} ${s.projetVide}`}>
              <h3>La place est libre</h3>
              <p>
                D&apos;autres projets sont en préparation. Le tien pourrait être
                le prochain.
              </p>
              <a href="#contact">Nous écrire →</a>
            </div>
          </div>
        </div>
      </section>

      <section className={s.section} id="contact">
        <div className={s.wrap}>
          <div className={s.contact}>
            <p className={s.labelLight}>Contact</p>
            <h2 className={s.h2Light}>Raconte-nous ton idée</h2>
            <p>
              Quelques lignes suffisent, avec de quoi te joindre. Pas de
              dossier, pas de business plan. On répond à tout le monde, en
              général sous une semaine.
            </p>
            <a href="mailto:contact@studiolamarck.fr" className={s.mail}>
              contact@studiolamarck.fr
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
