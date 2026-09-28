import type { Metadata } from "next"
import Link from "next/link"
import { Manrope } from "next/font/google"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Studio Lamarck — Studio de développement de projets numériques",
    template: "%s — Studio Lamarck",
  },
  description:
    "Studio associatif de développement de projets dédié à l'innovation technologique et à la création numérique indépendante. Nous accompagnons les porteurs de projets.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={manrope.variable}>
      <body>
        <header className="site-header">
          <div className="container">
            <Link href="/" className="logo">
              Studio Lamarck
            </Link>
            <nav className="site-nav">
              <Link href="/#piliers">Piliers</Link>
              <Link href="/jam-session">Jam Session</Link>
              <Link href="/#parcours">Parcours</Link>
              <Link href="/#projets">Projets</Link>
              <Link href="/#contact">Contact</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="container">
            <span>
              © {new Date().getFullYear()} Studio Lamarck — Tous droits
              réservés
            </span>
            <div className="footer-links">
              <Link href="/jam-session">Jam Session</Link>
              <Link href="/mentions-legales">Mentions légales</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
