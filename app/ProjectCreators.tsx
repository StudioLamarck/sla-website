import type { ReactNode } from "react"
import s from "./ProjectCreators.module.css"

export interface CreatorSocials {
  twitter?: string
  linkedin?: string
  github?: string
  discord?: string
  website?: string
}

export interface ProjectCreator {
  prenom: string
  role?: string
  photo?: string
  socials?: CreatorSocials
}

type SocialKey = keyof CreatorSocials

/** Ordre d'affichage, libellés et icônes des réseaux. */
const SOCIALS: {
  key: SocialKey
  label: (url: string) => string
  icon: ReactNode
}[] = [
  {
    key: "twitter",
    label: () => "Twitter / X",
    icon: (
      <svg className={s.socialIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    key: "linkedin",
    label: () => "LinkedIn",
    icon: (
      <svg className={s.socialIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    key: "github",
    label: () => "GitHub",
    icon: (
      <svg className={s.socialIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
      </svg>
    ),
  },
  {
    key: "discord",
    label: () => "Discord",
    icon: (
      <svg className={s.socialIcon} viewBox="0 0 127.14 96.36" fill="currentColor" aria-hidden="true">
        <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
      </svg>
    ),
  },
  {
    key: "website",
    label: (url) => (url.includes("blog") ? "Blog" : "Site web"),
    icon: (
      <svg
        className={s.socialIcon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
]

function Avatar({ creator }: { creator: ProjectCreator }) {
  if (creator.photo) {
    return (
      <span className={s.avatar}>
        <img src={creator.photo} alt="" className={s.avatarImg} />
      </span>
    )
  }
  // Pas de photo : initiale du prénom sur fond vert doux.
  return (
    <span className={`${s.avatar} ${s.avatarInitial}`} aria-hidden="true">
      {creator.prenom.charAt(0).toUpperCase()}
    </span>
  )
}

function Socials({ creator }: { creator: ProjectCreator }) {
  const links = SOCIALS.filter(({ key }) => creator.socials?.[key])
  if (links.length === 0) return null

  return (
    <div className={s.socials}>
      {links.map(({ key, label, icon }) => {
        const url = creator.socials![key]!
        const name = label(url)
        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={s.socialLink}
            aria-label={`${name} de ${creator.prenom}`}
            title={name}
          >
            {icon}
          </a>
        )
      })}
    </div>
  )
}

/** Personnes derrière un projet, chacune avec ses réseaux. */
export default function ProjectCreators({
  createurs,
}: {
  createurs: ProjectCreator[]
}) {
  if (createurs.length === 0) return null
  const multiple = createurs.length > 1

  return (
    <div className={`${s.createurs} ${multiple ? s.multiple : ""}`}>
      <span className={s.label}>{multiple ? "Créateurs" : "Créateur"}</span>

      <ul className={s.list}>
        {createurs.map((c) => (
          <li className={s.item} key={c.prenom}>
            <div className={s.identity}>
              <Avatar creator={c} />
              <span className={s.text}>
                <span className={s.nom}>{c.prenom}</span>
                {c.role && <span className={s.role}>{c.role}</span>}
              </span>
            </div>
            <Socials creator={c} />
          </li>
        ))}
      </ul>
    </div>
  )
}
