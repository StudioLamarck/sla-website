import type { Metadata } from "next"
import Link from "next/link"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Studio Lamarck — Studio de développement de projets numériques",
    template: "%s — Studio Lamarck",
  },
  description:
    "Studio Lamarck promeut l'innovation technologique, soutient la création numérique indépendante et accompagne les porteurs de projets dans la conception et le développement d'outils digitaux.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <header className="site-header">
          <div className="container">
            <Link href="/" className="logo">
              Studio Lamarck
            </Link>
            <nav className="site-nav">
              <Link href="/#principes">Principes</Link>
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
            <Link href="/mentions-legales">Mentions légales</Link>
          </div>
        </footer>
      </body>
    </html>
  )
}
