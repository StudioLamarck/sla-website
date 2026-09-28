import type { Metadata } from "next"
import Link from "next/link"
import s from "./page.module.css"
import JamCircle from "./JamCircle"

export const metadata: Metadata = {
  title: "Studio Lamarck — Studio de développement de projets numériques",
  description:
    "Studio associatif de développement de projets dédié à l'innovation technologique et à la création numérique indépendante. Nous accompagnons les porteurs de projets.",
}

const LLAMA_PATH =
  "M17.25,61.5l31.5,-2.25l0,-59.25l23.25,0l0,57.75l23.25,-1.5l0,-56.25l23.25,0l0,157.5c0,0 1.575,19.367 20.25,19.5c18.675,0.133 196.5,0 196.5,0c0,0 31.721,-1.9 31.5,31.5c-0.221,33.4 0,22.5 0,22.5l-23.25,0l0,-21c0,0 0.726,-9.334 -9.75,-9.75c-10.476,-0.416 -24.75,0 -24.75,0l0,183.75l-39.75,0l0,-95.25l-146.25,0l0,95.25l-39.75,0l0,-95.25c0,0 -23.211,-0.576 -23.25,-20.25c-0.039,-19.674 0,-168 0,-168l-42.75,0l0,-39Z"

/** Lama officiel du logo en SVG vectoriel (calibré sur 34 × 36 en repère local). */
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
          {/* Aile arrière */}
          <path
            d="M 180,177 C 180,148 198,122 228,112 C 216,126 217,138 226,145 C 213,148 211,160 217,167 C 204,171 192,174 162,177 Z"
            fill="var(--accent)"
            opacity="0.65"
          />
          {/* Aile avant */}
          <path
            d="M 200,177 C 200,142 223,110 255,98 C 241,116 242,130 253,139 C 237,143 234,157 242,165 C 227,169 212,173 177,177 Z"
            fill="var(--accent)"
          />
        </g>
      )}
    </g>
  )
}

const piliers = [
  {
    n: "01",
    t: "Le pouvoir de fabriquer",
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
    d: "Pas d'argent, du temps et de l'attention. Le collectif t'aide sur ton projet, et tu apportes naturellement ton énergie aux autres.",
  },
  {
    n: "04",
    t: "Impact réel & Prod",
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
    t: "Célébrer d'abord",
    d: "On commence toujours par partager son produit et ses réussites récentes avant de poser ses blocages.",
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
    n: "01",
    t: "La Rencontre",
    d: "Une présentation de ton projet, des échanges humains et l'intégration de la communauté sur Discord.",
  },
  {
    n: "02",
    t: "La Construction",
    d: "Tu fabriques ton produit en toute autonomie grâce aux Jam Sessions, à nos infrastructures et à l'énergie collective.",
  },
  {
    n: "03",
    t: "L'Envol",
    d: "Ton produit est en production et rencontre ses utilisateurs. Tu continues ta route en totale liberté : tu es toujours le bienvenu dans la communauté et tu peux partager ton expérience avec tes pairs.",
  },
]

interface CreatorSocials {
  twitter?: string
  linkedin?: string
  github?: string
  discord?: string
  website?: string
}

interface ProjectCreator {
  prenom: string
  role?: string
  photo?: string
  socials?: CreatorSocials
}

interface ProjectItem {
  nom: string
  logo?: string
  description: string
  url?: string
  createurs: ProjectCreator[]
}

const projets: ProjectItem[] = [
  {
    nom: "SimpleLttr",
    logo: "/simplelttr.svg",
    description:
      "Toutes ses newsletters au même endroit, lues en toute simplicité.",
    url: "https://www.simplelttr.app/",
    createurs: [
      {
        prenom: "Emile",
        photo: "/emile.png",
      },
    ],
  },
  {
    nom: "MyMémoires",
    logo: "/mymemoires.png",
    description:
      "Créer le livre de sa vie, uniquement par la voix. La transmission familiale mise entre les mains de chacun.",
    url: "https://www.mymemoires.com/",
    createurs: [
      {
        prenom: "Thibaut",
        photo: "/thibaut.png",
        socials: {
          linkedin: "https://www.linkedin.com/in/thibaut-sainrat/",
          github: "https://github.com/sainrat-t",
          website: "https://sainrat.writizzy.blog/",
        },
      },
    ],
  },
]

const DISCORD_URL = "https://discord.studiolamarck.fr"

export default function HomePage() {
  return (
    <div className={s.page}>
      <div className={s.banner}>
        <span className={s.bannerText}>
          <span>Pour nous rejoindre et échanger avec le collectif :</span>
        </span>
        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={s.bannerCta}
        >
          <svg
            className={s.discordIcon}
            viewBox="0 0 127.14 96.36"
            aria-hidden="true"
          >
            <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
          </svg>
          Rejoindre notre Discord
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <header className={s.hero}>
        <div className={s.wrap}>
          <h1 className={s.h1}>
            Rejoins une
            <br />
            <span className={s.accent}>communauté de builders.</span>
          </h1>
          <p className={s.lede}>
            Studio Lamarck est une association à but non lucratif. Tu intègres
            la communauté, on te conseille, on héberge ton projet, on te
            bouscule et on ne prend ni argent, ni part de ton capital.
          </p>
          <div className={s.actions}>
            <a href="#contact" className={s.btn}>
              Raconte-nous ton idée
            </a>
            <a href="#methode" className={s.btnGhost}>
              Les Jam Sessions
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

      <section className={s.pacte} id="piliers">
        <span id="principes" style={{ position: "relative", top: "-5.5rem" }} />
        <div className={s.wrap}>
          <p className={s.labelLight}>Nos piliers</p>
          <h2 className={s.h2Light}>Un cadre libre et souverain.</h2>
          <p className={s.introLight}>
            Studio Lamarck existe pour faire tomber les barrières du numérique
            et permettre à chaque esprit créatif d&apos;incarner sa vision.
          </p>
          <div className={s.pacteGrid}>
            {piliers.map((p) => (
              <div className={s.tile} key={p.n}>
                <span className={s.tileNum}>{p.n}</span>
                <strong>{p.t}</strong>
                <span>{p.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.section} id="methode">
        <div className={s.wrap}>
          <div className={s.methodeHeader}>
            <div className={s.methodeText}>
              <p className={s.label}>La méthode d&apos;atelier</p>
              <h2 className={s.h2}>Les Jam Sessions de Builders</h2>
              <p className={s.intro}>
                Pas de réunion corporate ni de chronomètre rigide. Nos sessions
                fonctionnent comme un atelier créatif : un seul projet est placé au
                centre de la table pour recevoir toute l&apos;énergie du collectif.
              </p>
            </div>
            <div className={s.methodeIllus}>
              <JamCircle />
            </div>
          </div>

          <div className={s.jamGrid}>
            {jamPrincipes.map((jp) => (
              <div className={s.jamCard} key={jp.n}>
                <span className={s.jamNum}>PRINCIPE #{jp.n}</span>
                <h3>{jp.t}</h3>
                <p>{jp.d}</p>
              </div>
            ))}
          </div>

          <div className={s.promo}>
            <div>
              <p className={s.label}>Envie d&apos;en savoir plus ?</p>
              <h3>Découvre le fonctionnement détaillé</h3>
              <p>
                Les 5 principes fondateurs, des formats adaptés, un esprit
                d&apos;atelier ouvert et sans filtre pour progresser ensemble.
              </p>
            </div>
            <Link href="/jam-session" className={s.btn}>
              Explorer les Jam Sessions
            </Link>
          </div>
        </div>
      </section>

      <section className={s.section} id="parcours">
        <span id="builders" style={{ position: "relative", top: "-5.5rem" }} />
        <div className={s.wrap}>
          <p className={s.label}>Le parcours</p>
          <h2 className={s.h2}>Trois étapes pour concrétiser</h2>
          <p className={s.intro}>
            Construire seul peut être intimidant. Voici comment nous
            t&apos;accompagnons de la première rencontre jusqu&apos;au lancement.
          </p>
          <div className={s.three}>
            {parcours.map((p, i) => (
              <div className={s.phase} key={p.n}>
                <svg
                  className={s.phaseArt}
                  viewBox="0 0 80 44"
                  role="img"
                  aria-label={p.t}
                >
                  {i === 0 && (
                    <>
                      {/* Deux lamas face à face pour la rencontre */}
                      <Llama x={10} y={11} k={0.76} flip cls={s.near} />
                      <Llama x={44} y={11} k={0.76} cls={s.near} />
                    </>
                  )}
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
                      {/* Deux lamas au sol qui observent l'envol */}
                      <Llama x={2} y={16} k={0.48} cls={s.far} />
                      <Llama x={20} y={16} k={0.48} cls={s.far} />

                      {/* Le petit lama qui vole de haut en bas avec ses ailes */}
                      <g transform="translate(43 2)">
                        <g className={s.flyingLlama}>
                          <Llama x={0} y={0} k={0.88} flip cls={s.near} wings />
                        </g>
                      </g>
                    </>
                  )}
                </svg>
                <span className={s.phaseNum}>{p.n}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.section} id="projets">
        <div className={s.wrap}>
          <p className={s.label}>Ils construisent chez nous</p>
          <h2 className={s.h2}>Les projets du studio Lamarck</h2>
          <div className={s.three}>
            {projets.map((p) => (
              <div className={s.projet} key={p.nom}>
                <div className={s.projetTop}>
                  {p.logo && <img src={p.logo} alt={p.nom} className={s.logo} />}
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={s.projetLink}
                      aria-label={`Visiter ${p.nom}`}
                    >
                      Voir le projet
                      <svg
                        className={s.projetLinkIcon}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </a>
                  )}
                </div>
                <h3>{p.nom}</h3>
                <p>{p.description}</p>

                {p.createurs && p.createurs.length > 0 && (
                  <div className={s.createursList}>
                    <span className={s.createursLabel}>
                      {p.createurs.length > 1 ? "Créateurs" : "Créateur"}
                    </span>
                    {p.createurs.map((c, i) => (
                      <div className={s.createurItem} key={i}>
                        <div className={s.createurInfo}>
                          <div className={s.avatarWrapper}>
                            {c.photo ? (
                              <img
                                src={c.photo}
                                alt={c.prenom}
                                className={s.avatarImg}
                              />
                            ) : (
                              <svg
                                className={s.avatarImg}
                                viewBox="0 0 40 40"
                                fill="none"
                                aria-hidden="true"
                              >
                                <rect
                                  width="40"
                                  height="40"
                                  rx="20"
                                  fill="#e8ebe9"
                                />
                                <circle cx="20" cy="15" r="6" fill="#88928c" />
                                <path
                                  d="M9 34C9 27.925 13.925 23 20 23C26.075 23 31 27.925 31 34"
                                  fill="#88928c"
                                />
                              </svg>
                            )}
                          </div>
                          <div className={s.createurText}>
                            <span className={s.createurNom}>{c.prenom}</span>
                          </div>
                        </div>

                        {c.socials && (
                          <div className={s.socials}>
                            {c.socials.twitter && (
                              <a
                                href={c.socials.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={s.socialLink}
                                aria-label={`Twitter/X de ${c.prenom}`}
                                title="Twitter / X"
                              >
                                <svg
                                  className={s.socialIcon}
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                              </a>
                            )}
                            {c.socials.linkedin && (
                              <a
                                href={c.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={s.socialLink}
                                aria-label={`LinkedIn de ${c.prenom}`}
                                title="LinkedIn"
                              >
                                <svg
                                  className={s.socialIcon}
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                </svg>
                              </a>
                            )}
                            {c.socials.github && (
                              <a
                                href={c.socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={s.socialLink}
                                aria-label={`GitHub de ${c.prenom}`}
                                title="GitHub"
                              >
                                <svg
                                  className={s.socialIcon}
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                                </svg>
                              </a>
                            )}
                            {c.socials.discord && (
                              <a
                                href={c.socials.discord}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={s.socialLink}
                                aria-label={`Discord de ${c.prenom}`}
                                title="Discord"
                              >
                                <svg
                                  className={s.socialIcon}
                                  viewBox="0 0 127.14 96.36"
                                  fill="currentColor"
                                >
                                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                                </svg>
                              </a>
                            )}
                            {c.socials.website && (
                              <a
                                href={c.socials.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={s.socialLink}
                                aria-label={
                                  c.socials.website.includes("blog")
                                    ? `Blog de ${c.prenom}`
                                    : `Site web de ${c.prenom}`
                                }
                                title={
                                  c.socials.website.includes("blog")
                                    ? "Blog"
                                    : "Site web"
                                }
                              >
                                <svg
                                  className={s.socialIcon}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <circle cx="12" cy="12" r="10" />
                                  <line x1="2" y1="12" x2="22" y2="12" />
                                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                </svg>
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className={`${s.projet} ${s.projetVide}`}>
              <h3>La place est libre</h3>
              <p>
                D&apos;autres projets sont en préparation. Le tien pourrait être
                le prochain.
              </p>
              <a href="#contact">Nous rejoindre →</a>
            </div>
          </div>
        </div>
      </section>

      <section className={s.section} id="contact">
        <div className={s.wrap}>
          <div className={s.contact}>
            <p className={s.labelLight}>Rejoindre</p>
            <h2 className={s.h2Light}>Raconte-nous ton idée.</h2>
            <p>
              Pas de dossier, pas de business plan. On demande juste une chose :
              une vraie envie de fabriquer. Que ton idée soit un simple
              brouillon ou déjà un prototype, viens nous la pitcher sur Discord.
            </p>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={s.mail}
            >
              <svg
                viewBox="0 0 127.14 96.36"
                aria-hidden="true"
                style={{
                  width: "1.3rem",
                  height: "1.3rem",
                  fill: "currentColor",
                  flexShrink: 0,
                }}
              >
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
              </svg>
              <span>Rejoindre notre Discord</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
