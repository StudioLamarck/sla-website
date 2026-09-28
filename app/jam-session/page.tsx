import type { Metadata } from "next"
import s from "./jam-session.module.css"
import JamCircle from "./JamCircle"

export const metadata: Metadata = {
  title: "Les sessions Jam — Studio Lamarck",
  description:
    "Découvrez les sessions Jam de Studio Lamarck : la méthode collaborative et souple pour les créateurs numériques.",
}

const DISCORD_URL = "https://discord.studiolamarck.fr"

const LLAMA_PATH =
  "M17.25,61.5l31.5,-2.25l0,-59.25l23.25,0l0,57.75l23.25,-1.5l0,-56.25l23.25,0l0,157.5c0,0 1.575,19.367 20.25,19.5c18.675,0.133 196.5,0 196.5,0c0,0 31.721,-1.9 31.5,31.5c-0.221,33.4 0,22.5 0,22.5l-23.25,0l0,-21c0,0 0.726,-9.334 -9.75,-9.75c-10.476,-0.416 -24.75,0 -24.75,0l0,183.75l-39.75,0l0,-95.25l-146.25,0l0,95.25l-39.75,0l0,-95.25c0,0 -23.211,-0.576 -23.25,-20.25c-0.039,-19.674 0,-168 0,-168l-42.75,0l0,-39Z"

/** Lama officiel du logo en SVG vectoriel */
function Llama({
  x = 0,
  y = 0,
  k = 1,
  flip = false,
  cls,
  wings = false,
}: {
  x?: number
  y?: number
  k?: number
  flip?: boolean
  cls?: string
  wings?: boolean
}) {
  const factor = 0.09375 * k
  return (
    <g
      className={cls}
      transform={
        flip
          ? `translate(${x} ${y}) scale(${-factor} ${factor}) translate(-366.75 0)`
          : `translate(${x} ${y}) scale(${factor}) translate(-17.25 0)`
      }
    >
      <path d={LLAMA_PATH} />
      {wings && (
        <g className={s.llamaWings}>
          <path
            d="M 180,177 C 180,148 198,122 228,112 C 216,126 217,138 226,145 C 213,148 211,160 217,167 C 204,171 192,174 162,177 Z"
            className={s.wingBack}
          />
          <path
            d="M 200,177 C 200,142 223,110 255,98 C 241,116 242,130 253,139 C 237,143 234,157 242,165 C 227,169 212,173 177,177 Z"
            className={s.wingFront}
          />
        </g>
      )}
    </g>
  )
}

const jamPrincipes = [
  {
    num: "01",
    title: "Un projet au centre",
    tagline:
      "100 % de l'énergie et de l'attention du groupe est dédiée à un seul builder par session.",
    desc: "Toute l'intelligence du collectif se concentre sur un produit unique. Les pairs se mettent dans la peau de tes utilisateurs ou de ton équipe pour creuser les vrais sujets en profondeur.",
  },
  {
    num: "02",
    title: "Célébrer d'abord",
    tagline:
      "On commence toujours par partager son produit et ses réussites récentes avant de poser ses blocages.",
    desc: "Une nouvelle release, un premier bêta-testeur ou un bug résolu : chaque progrès mérite d'être montré. Fêter les victoires donne l'énergie positive nécessaire pour attaquer les défis.",
  },
  {
    num: "03",
    title: "L'esprit d'atelier",
    tagline:
      "Pas de réunion corporate, pas de chronomètre rigide. On réfléchit et on crée ensemble comme des artisans du numérique.",
    desc: "Zéro formalisme. On ouvre son écran, on teste en direct et on échange sans filtre. C'est l'ambiance décontractée d'un atelier partagé où les idées fusent naturellement.",
  },
  {
    num: "04",
    title: "Parler d'expérience",
    tagline:
      "Pas de leçons théoriques : on partage des idées créatives, des retours d'usage et ce qui a marché pour soi.",
    desc: "Zéro dogme. On s'appuie sur du vécu : ce qui a marché pour nous, ce qui a planté, et nos ressentis d'utilisateurs directs. Des retours concrets et immédiatement actionnables.",
  },
  {
    num: "05",
    title: "Réciprocité créative",
    tagline:
      "Chercher des solutions pour un confrère débloque ses propres idées et redonne de l'énergie pour son propre produit.",
    desc: "En cherchant des réponses pour un pair, on prend du recul sur son propre projet. On découvre des outils, des raccourcis UX et on repart reboosté avec de nouvelles pistes.",
  },
]

// Un seul format rassemblé en une seule ligne (4 piliers horizontaux)
const formatPiliers = [
  {
    num: "01",
    title: "Régulièrement",
    desc: "Toutes les deux semaines pour maintenir l'élan créatif et avancer sans perdre le rythme.",
  },
  {
    num: "02",
    title: "Physique ou Visio",
    desc: "Autour d'une table à Paris ou en direct sur notre Discord pour participer d'où que tu sois.",
  },
  {
    num: "03",
    title: "En petit comité",
    desc: "4 à 8 builders par session pour que chacun prenne la parole et bénéficie d'une vraie écoute.",
  },
  {
    num: "04",
    title: "1 projet au centre",
    desc: "Un cas décortiqué à fond, complété par des ateliers d'entraide et de tests en binômes.",
  },
]

export default function JamSessionPage() {
  return (
    <div className={s.page}>
      <div className={s.wrap}>
        {/* HERO */}
        <section className={s.hero}>
          <div className={s.heroText}>
            <div className={s.badge}>
              <span className={s.badgeDot} />
              Notre méthode de Jam
            </div>
            <h1 className={s.h1}>Les sessions Jam</h1>
            <p className={s.lead}>
              Construire seul son produit, ça marche un temps. Les Jam Sessions
              réunissent les builders pour débloquer leurs projets et célébrer
              ce qui avance.
            </p>
            <p className={s.introText}>
              Inspirées du codéveloppement et adaptées aux artisans du numérique :
              zéro réunion corporate, zéro chronomètre anxiogène. Un atelier
              ouvert pour avancer avec la force du collectif.
            </p>
            <div className={s.actions}>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={s.btnPrimary}
              >
                Rejoindre une Jam sur Discord
                <span aria-hidden="true">→</span>
              </a>
              <a href="#principes" className={s.btnGhost}>
                Les 5 principes
              </a>
            </div>
          </div>

          <div className={s.heroVisual}>
            <JamCircle />
          </div>
        </section>

        {/* SECTION 1 : LES 5 PRINCIPES */}
        <section className={s.section} id="principes">
          <p className={s.label}>Philosophie</p>
          <h2 className={s.h2}>Les cinq principes de la Jam</h2>
          <p className={s.intro}>
            L&apos;état d&apos;esprit partagé qui rend chaque échange constructif
            et stimulant.
          </p>

          <div className={s.principlesGrid}>
            {jamPrincipes.map((p) => (
              <div className={s.principleCard} key={p.num}>
                <div className={s.principleHeader}>
                  <span className={s.principleNum}>PRINCIPE #{p.num}</span>
                </div>
                <h3 className={s.principleTitle}>{p.title}</h3>
                <p className={s.principleTagline}>« {p.tagline} »</p>
                <p className={s.principleDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2 : LE FORMAT UNIQUE EN 1 LIGNE (STYLE V2) */}
        <section className={s.section} id="format">
          <p className={s.label}>Le format</p>
          <h2 className={s.h2}>Une formule unique et récurrente</h2>
          <p className={s.intro}>
            Un rendez-vous simple et sans friction, ouvert à tous les créateurs
            du studio.
          </p>

          <div className={s.formatRow}>
            {formatPiliers.map((fp) => (
              <div className={s.formatTile} key={fp.num}>
                <span className={s.tileNum}>#{fp.num}</span>
                <strong className={s.tileTitle}>{fp.title}</strong>
                <span className={s.tileDesc}>{fp.desc}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* SECTION 3 : DÉROULEMENT (DIRECTION GRAPHIQUE « NOS PILIERS » V2 - FOND VERT) */}
      <section className={s.pacteSection} id="deroule">
        <div className={s.wrap}>
          <p className={s.labelMint}>Le déroulement</p>
          <h2 className={s.h2White}>Quatre temps, zéro chronomètre.</h2>
          <p className={s.introMint}>
            Pas de soutenance ni d&apos;examen. Une Jam suit le tempo naturel
            d&apos;une session créative.
          </p>

          <div className={s.pacteGrid}>
            {/* Étape 1 */}
            <div className={s.pacteTile}>
              <svg
                className={s.pacteArt}
                viewBox="0 0 80 44"
                role="img"
                aria-hidden="true"
              >
                <Llama x={8} y={10} k={0.76} flip cls={s.nearLlamaLight} />
                <Llama x={46} y={10} k={0.76} cls={s.nearLlamaLight} />
                <path
                  d="M 40,8 L 41.5,14 L 47.5,15.5 L 41.5,17 L 40,23 L 38.5,17 L 32.5,15.5 L 38.5,14 Z"
                  fill="#8fd0ae"
                />
              </svg>
              <span className={s.pacteNum}>01</span>
              <strong>Célébrer</strong>
              <span>
                On brise la glace et on fête les progrès récents autour d&apos;une
                démo vivante.
              </span>
            </div>

            {/* Étape 2 */}
            <div className={s.pacteTile}>
              <svg
                className={s.pacteArt}
                viewBox="0 0 80 44"
                role="img"
                aria-hidden="true"
              >
                <rect
                  x="8"
                  y="6"
                  width="22"
                  height="28"
                  rx="2"
                  fill="none"
                  stroke="#8fd0ae"
                  strokeWidth="1.5"
                />
                <line
                  x1="13"
                  y1="12"
                  x2="25"
                  y2="12"
                  stroke="rgba(207, 227, 216, 0.7)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <line
                  x1="13"
                  y1="17"
                  x2="25"
                  y2="17"
                  stroke="rgba(207, 227, 216, 0.7)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <line
                  x1="13"
                  y1="22"
                  x2="21"
                  y2="22"
                  stroke="#8fd0ae"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <Llama x={40} y={10} k={0.82} cls={s.nearLlamaLight} />
              </svg>
              <span className={s.pacteNum}>02</span>
              <strong>Poser le défi</strong>
              <span>
                Le porteur expose son blocage sans filtre : UX, technique,
                pricing ou acquisition.
              </span>
            </div>

            {/* Étape 3 */}
            <div className={s.pacteTile}>
              <svg
                className={s.pacteArt}
                viewBox="0 0 80 44"
                role="img"
                aria-hidden="true"
              >
                <Llama x={6} y={12} k={0.65} flip cls={s.nearLlamaLight} />
                <Llama x={28} y={6} k={0.5} cls={s.farLlamaLight} />
                <Llama x={48} y={12} k={0.65} cls={s.nearLlamaLight} />
                <circle cx="26" cy="6" r="1.5" fill="#8fd0ae" />
                <circle cx="40" cy="3" r="2" fill="#8fd0ae" />
                <circle cx="54" cy="6" r="1.5" fill="#8fd0ae" />
              </svg>
              <span className={s.pacteNum}>03</span>
              <strong>La Jam</strong>
              <span>
                Questions sincères, retours d&apos;expérience et remue-méninges :
                le groupe phosphore ensemble.
              </span>
            </div>

            {/* Étape 4 */}
            <div className={s.pacteTile}>
              <svg
                className={s.pacteArt}
                viewBox="0 0 80 44"
                role="img"
                aria-hidden="true"
              >
                <Llama x={4} y={14} k={0.6} cls={s.farLlamaLight} />
                <g transform="translate(40 2)">
                  <g className={s.flyingLlama}>
                    <Llama x={0} y={0} k={0.82} flip cls={s.nearLlamaLight} wings />
                  </g>
                </g>
              </svg>
              <span className={s.pacteNum}>04</span>
              <strong>Cap & Suivi</strong>
              <span>
                Le créateur choisit ses prochaines actions, et les pépites
                partagées sont archivées sur Discord.
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className={s.wrap}>
        {/* SECTION 4 : LES ANIMATEURS */}
        <section className={s.section} id="animateurs">
          <p className={s.label}>Facilitation</p>
          <h2 className={s.h2}>Des animateurs bienveillants, rien d&apos;imposé</h2>
          <p className={s.intro}>
            Pas d&apos;arbitre autoritaire. L&apos;animateur est un facilitateur
            au service de l&apos;énergie du groupe.
          </p>

          <div className={s.facilitationBox}>
            <div className={s.facilitationText}>
              <h3>Garant de l&apos;écoute et de la bonne humeur</h3>
              <p>
                Il accueille les nouveaux, s&apos;assure que chacun puisse
                s&apos;exprimer et préserve l&apos;ambiance d&apos;atelier. Il
                n&apos;impose aucune décision.
              </p>
              <p>
                Chaque membre motivé peut animer une Jam pour faire grandir le
                collectif.
              </p>
              <div className={s.facilitationPills}>
                <span className={s.pillItem}>Zéro jugement</span>
                <span className={s.pillItem}>Circulation de la parole</span>
                <span className={s.pillItem}>Écoute active</span>
                <span className={s.pillItem}>Ouvert à tous</span>
              </div>
            </div>

            <svg
              className={s.facilitationLlama}
              viewBox="0 0 40 40"
              role="img"
              aria-label="Lama facilitateur Studio Lamarck"
            >
              <Llama x={2} y={3} k={0.95} />
            </svg>
          </div>
        </section>

        {/* SECTION 5 : VALEUR POUR TOUS */}
        <section className={s.section} id="valeur">
          <p className={s.label}>Enseignements</p>
          <h2 className={s.h2}>Tout le monde repart gagnant</h2>
          <p className={s.intro}>
            On apprend autant en aidant un confrère qu&apos;en recevant des
            retours sur son propre produit.
          </p>

          <div className={s.valueGrid}>
            <div className={s.valueCard}>
              <span className={s.valueHeaderBadge}>Pour le porteur</span>
              <h3>Celui qui présente son projet</h3>
              <p>
                Un œil neuf pour débloquer sa situation et repartir avec de
                l&apos;élan pour fabriquer.
              </p>
              <ul className={s.valueList}>
                <li>
                  <svg className={s.checkIcon} viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    <strong>Sortie de l&apos;isolement :</strong> un regard
                    extérieur sincère pour briser les doutes.
                  </span>
                </li>
                <li>
                  <svg className={s.checkIcon} viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    <strong>Pistes concrètes :</strong> des solutions testées sur
                    le terrain par d&apos;autres builders.
                  </span>
                </li>
                <li>
                  <svg className={s.checkIcon} viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    <strong>Clarté d&apos;action :</strong> une feuille de route
                    simple pour les prochains jours.
                  </span>
                </li>
              </ul>
            </div>

            <div className={s.valueCard}>
              <span className={s.valueHeaderBadge}>Pour les participants</span>
              <h3>Ceux qui conseillent et échangent</h3>
              <p>
                Chacun s&apos;enrichit des défis abordés et transpose les
                déclics sur son propre produit.
              </p>
              <ul className={s.valueList}>
                <li>
                  <svg className={s.checkIcon} viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    <strong>Apprentissage direct :</strong> voir les choix
                    d&apos;un autre évite de reproduire les mêmes erreurs.
                  </span>
                </li>
                <li>
                  <svg className={s.checkIcon} viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    <strong>Veille appliquée :</strong> découverte de nouveaux
                    outils, stacks et tactiques d&apos;acquisition.
                  </span>
                </li>
                <li>
                  <svg className={s.checkIcon} viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    <strong>Effet miroir :</strong> chercher des solutions pour
                    un tiers débloque ses propres impasses.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 6 : BANDEAU DISCORD CTA */}
        <section className={s.ctaPanel}>
          <div>
            <p className={s.ctaLabel}>Rejoins le collectif</p>
            <h2>Viens vivre ta première Jam Session.</h2>
            <p>
              Prototype en ligne, idée sur papier ou simple curiosité : nos
              portes sont grandes ouvertes sur Discord.
            </p>
          </div>
          <div className={s.ctaBtnWrap}>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={s.ctaDiscord}
            >
              <svg
                className={s.ctaDiscordIcon}
                viewBox="0 0 127.14 96.36"
                aria-hidden="true"
              >
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
              </svg>
              Rejoindre notre Discord
              <span aria-hidden="true">→</span>
            </a>
            <span className={s.ctaSub}>Gratuit, sans engagement et ouvert à tous</span>
          </div>
        </section>
      </div>
    </div>
  )
}
