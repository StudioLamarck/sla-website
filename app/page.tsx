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
            Studio Lamarck est un studio de développement de projets dédié à
            l&apos;innovation technologique et à la création numérique
            indépendante.
          </p>
          <a href="#contact" className="cta">
            Nous contacter
          </a>
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
          <p className="section-label">Contact</p>
          <h2>Un projet, une question ?</h2>
          <p>
            Écrivez-nous, nous vous répondrons dans les meilleurs délais.
          </p>
          <div className="contact-box">
            <a href="mailto:contact@studiolamarck.fr" className="email">
              contact@studiolamarck.fr
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
