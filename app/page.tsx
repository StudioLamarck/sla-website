import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <h1>
            <img
              src="/logo.svg"
              alt="Studio Lamarck"
              className="hero-logo"
            />
          </h1>
          <p>
            Studio Lamarck est un studio associatif de développement de projets
            dédié à l&apos;innovation technologique et à la création numérique
            indépendante.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="cta">
              Nous contacter
            </a>
            <a href="#builders" className="cta-ghost">
              Découvrir le parcours
            </a>
          </div>
        </div>
      </div>

      <section id="principes">
        <div className="container">
          <p className="section-label">Nos principes</p>
          <h2>Trois engagements qui guident notre action</h2>
          <div className="principles">
            <div className="principle">
              <span className="num">01</span>
              <h3>Promouvoir l&apos;innovation technologique</h3>
              <p>
                Nous encourageons l&apos;exploration de nouvelles technologies
                et de nouveaux usages, en favorisant l&apos;expérimentation et
                le partage de connaissances.
              </p>
            </div>
            <div className="principle">
              <span className="num">02</span>
              <h3>Soutenir la création numérique indépendante</h3>
              <p>
                Nous soutenons les créateurs et créatrices indépendants dans la
                réalisation de leurs projets numériques, en défendant une
                création libre et accessible.
              </p>
            </div>
            <div className="principle">
              <span className="num">03</span>
              <h3>Accompagner les porteurs de projets</h3>
              <p>
                Nous accompagnons les porteurs de projets dans la conception et
                le développement de leurs outils digitaux, de l&apos;idée
                initiale jusqu&apos;à la mise en production.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="builders">
        <div className="container">
          <p className="section-label">Les builders</p>
          <h2>Vous n&apos;êtes pas obligé de construire seul</h2>
          <p>
            La motivation qui retombe, une décision qui traîne depuis trois
            semaines, une idée qu&apos;on n&apos;a jamais confrontée à personne :
            tous les builders connaissent ça. Studio Lamarck existe pour ces
            moments-là. Voici les trois phases du parcours, et ce qu&apos;on
            apporte à chacune.
          </p>
          <div className="phases">
            <div className="phase">
              <div className="phase-marker">
                <span className="phase-num">01</span>
              </div>
              <h3>Vous avez une idée</h3>
              <p className="phase-context">
                Seul face à votre intuition. Est-ce que ça vaut quelque chose ?
                Par où commencer ? À qui en parler ?
              </p>
              <p className="phase-lead">Ce qu&apos;on apporte</p>
              <ul className="phase-list">
                <li>
                  Une réponse à votre message — on répond à tout le monde, en
                  général sous une semaine
                </li>
                <li>Un regard extérieur qui challenge l&apos;idée</li>
                <li>Une méthode concrète pour se lancer</li>
                <li>
                  Un pitch devant des membres : des questions, des retours, et
                  notre décision
                </li>
              </ul>
            </div>
            <div className="phase">
              <div className="phase-marker">
                <span className="phase-num">02</span>
              </div>
              <h3>Vous construisez, avec le collectif</h3>
              <p className="phase-context">
                Vous construisez vous-même — avec l&apos;IA s&apos;il le faut —
                et vous cherchez votre product-market fit sans engagement de
                coût.
              </p>
              <p className="phase-lead">Ce qu&apos;on apporte</p>
              <ul className="phase-list">
                <li>
                  Des <Link href="/codev">sessions de codev</Link> régulières,
                  pour ne plus avancer seul
                </li>
                <li>
                  Nos infrastructures mutualisées et nos outils d&apos;IA, pour
                  une cotisation de 0 €
                </li>
                <li>
                  L&apos;hébergement, la sécurité, le déploiement : on passe ces
                  caps avec vous
                </li>
                <li>
                  La publication sous nos comptes de stores, sans compte
                  développeur à ouvrir
                </li>
                <li>
                  100 % de la propriété intellectuelle reste à vous,
                  définitivement
                </li>
              </ul>
            </div>
            <div className="phase">
              <div className="phase-marker">
                <span className="phase-num">03</span>
              </div>
              <h3>Vous volez de vos propres ailes</h3>
              <p className="phase-context">
                Le produit a trouvé son public et vous voulez en vivre. C&apos;est
                le signe qu&apos;il est temps de sortir du studio.
              </p>
              <p className="phase-lead">Ce qu&apos;on apporte</p>
              <ul className="phase-list">
                <li>Le passage du modèle économique à l&apos;échelle réelle</li>
                <li>
                  Un départ quand vous le décidez : 30 jours de préavis, et vous
                  emportez tout
                </li>
                <li>
                  Un coup de pouce financier pour vos premiers mois
                  d&apos;indépendance
                </li>
                <li>
                  Une place de conseiller dans le collectif, de l&apos;autre côté
                  du miroir
                </li>
              </ul>
            </div>
          </div>

          <div className="codev-promo">
            <div className="codev-promo-body">
              <span className="promo-label">Notre méthode</span>
              <h3>Les sessions de codev</h3>
              <p>
                Régulièrement, un builder expose un blocage et le groupe
                l&apos;aide à y voir clair. Six temps, trois rôles, sept
                principes — c&apos;est le cœur de ce qu&apos;on apporte.
              </p>
            </div>
            <Link href="/codev" className="cta">
              Découvrir la méthode
            </Link>
          </div>

        </div>
      </section>

      <section id="projets">
        <div className="container">
          <p className="section-label">Nos projets</p>
          <h2>Les projets soutenus</h2>
          <div className="projects">
            <div className="project">
              <img
                src="/simplelttr.svg"
                alt=""
                className="project-logo"
              />
              <h3>SimpleLttr</h3>
              <p>
                Une application pour rassembler toutes ses newsletters au même
                endroit et les lire en toute simplicité.
              </p>
            </div>
            <div className="project">
              <img
                src="/mymemoires.png"
                alt=""
                className="project-logo"
              />
              <h3>MyMémoires</h3>
              <p>
                MyMémoires est l&apos;application qui révolutionne la
                transmission familiale en mettant l&apos;intelligence
                artificielle au service de l&apos;héritage immatériel. Sa
                mission est simple : permettre à chacun de créer le livre de sa
                vie, uniquement par la voix.
              </p>
            </div>
            <div className="project project-teaser">
              <h3>Et bientôt d&apos;autres…</h3>
              <p>
                D&apos;autres projets sont en préparation. Vous avez une idée
                de projet ou un outil à faire naître ?
              </p>
              <a href="#contact">Rejoignez-nous →</a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="contact-panel">
            <p className="section-label">Contact</p>
            <h2>Un projet, une question ?</h2>
            <p>
              Racontez-nous votre idée en quelques lignes et laissez-nous de
              quoi vous joindre. On répond à tout le monde, en général sous une
              semaine.
            </p>
            <a href="mailto:contact@studiolamarck.fr" className="email">
              contact@studiolamarck.fr
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
