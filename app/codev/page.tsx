import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "La méthode codev",
  description:
    "Le fonctionnement des sessions de codéveloppement de Studio Lamarck : le format, les trois rôles, le déroulé en six temps et les sept principes.",
}

const steps = [
  {
    num: "01",
    title: "L'exposé",
    time: "10 min",
    text: "Le porteur expose une situation qui le bloque. Pas une démo produit — un problème.",
  },
  {
    num: "02",
    title: "Les questions",
    time: "15 min",
    text: "Les consultants ne posent que des questions d'information. Aucun conseil autorisé à ce stade.",
  },
  {
    num: "03",
    title: "Le contrat",
    time: "5 min",
    text: "Le porteur reformule sa demande : « aidez-moi à… ». C'est lui qui fixe ce sur quoi on travaille.",
  },
  {
    num: "04",
    title: "La consultation",
    time: "30 min",
    text: "Les consultants réagissent, racontent, proposent. Le porteur écoute et note.",
  },
  {
    num: "05",
    title: "La synthèse",
    time: "10 min",
    text: "Le porteur dit ce qu'il retient et ce qu'il fera d'ici la prochaine séance. À voix haute.",
  },
  {
    num: "06",
    title: "Les apprentissages",
    time: "10 min",
    text: "Chacun dit ce que la séance lui apporte pour son propre projet.",
  },
]

/**
 * Le lama du logo redécoupé en pièces (34 × 36 dans son repère local),
 * pour pouvoir le poser, le retourner et le mettre en scène.
 * `tilt` fait pivoter tête + cou autour de la base du cou.
 */
function Llama({
  x = 0,
  y = 0,
  s = 1,
  flip = false,
  tilt = 0,
  cls = "rule-llama",
}: {
  x?: number
  y?: number
  s?: number
  flip?: boolean
  tilt?: number
  cls?: string
}) {
  return (
    <g
      className={cls}
      transform={
        flip
          ? `translate(${x} ${y}) scale(${-s} ${s}) translate(-34 0)`
          : `translate(${x} ${y}) scale(${s})`
      }
    >
      <g transform={tilt ? `rotate(${tilt} 6.5 17)` : undefined}>
        <rect x="3" y="0" width="2" height="6" />
        <rect x="7" y="0" width="2" height="6" />
        <rect x="0" y="6" width="9" height="4" />
        <rect x="4" y="10" width="5" height="7" />
      </g>
      <rect x="4" y="17" width="25" height="10" />
      <rect x="29" y="17" width="4" height="6" />
      <rect x="6" y="27" width="4" height="9" />
      <rect x="23" y="27" width="4" height="9" />
    </g>
  )
}

type Rule = {
  title: string
  text: string
  alt: string
  scene: React.ReactNode
}

const rules: Rule[] = [
  {
    title: "On vient avec un problème, pas avec une démo",
    text: "Le réflexe du builder est de présenter son produit. Le codev sert à exposer un blocage.",
    alt: "Un lama arrêté net devant un mur de briques.",
    scene: (
      <>
        <rect x="0" y="2" width="10" height="6" />
        <rect x="12" y="2" width="10" height="6" />
        <rect x="0" y="10" width="5" height="6" />
        <rect x="7" y="10" width="10" height="6" />
        <rect x="19" y="10" width="3" height="6" />
        <rect x="0" y="18" width="10" height="6" />
        <rect x="12" y="18" width="10" height="6" />
        <rect x="0" y="26" width="5" height="6" />
        <rect x="7" y="26" width="10" height="6" />
        <rect x="19" y="26" width="3" height="6" />
        <rect x="0" y="34" width="10" height="6" />
        <rect x="12" y="34" width="10" height="6" />
        <rect x="0" y="42" width="5" height="6" />
        <rect x="7" y="42" width="10" height="6" />
        <rect x="19" y="42" width="3" height="6" />
        <rect x="0" y="50" width="10" height="6" />
        <rect x="12" y="50" width="10" height="6" />
        <Llama x={25} y={25} s={0.92} />
      </>
    ),
  },
  {
    title: "Questionner avant de conseiller",
    text: "Quinze minutes de questions pures. Personne n'a jamais aidé quelqu'un qu'il n'avait pas compris.",
    alt: "Deux lamas face à face, un point d'interrogation entre eux.",
    scene: (
      <>
        <rect x="32" y="4" width="14" height="5" />
        <rect x="41" y="4" width="5" height="13" />
        <rect x="34" y="12" width="12" height="5" />
        <rect x="34" y="12" width="5" height="9" />
        <rect x="34" y="24" width="5" height="5" />
        <Llama x={2} y={30} s={0.78} flip />
        <Llama x={51} y={30} s={0.78} />
      </>
    ),
  },
  {
    title: "Agnostique du sujet",
    text: "On ne juge pas l'idée, on traite la demande. « Moi je n'utiliserais jamais ça » n'aide personne.",
    alt: "Un lama en équilibre sur le fléau d'une balance parfaitement horizontale.",
    scene: (
      <>
        <rect x="4" y="30" width="72" height="5" />
        <rect x="36" y="35" width="8" height="17" />
        <rect x="28" y="52" width="24" height="5" />
        <rect x="12" y="35" width="3" height="4" />
        <rect x="65" y="35" width="3" height="4" />
        <rect x="4" y="39" width="19" height="4" />
        <rect x="57" y="39" width="19" height="4" />
        <Llama x={26} y={4} s={0.72} />
      </>
    ),
  },
  {
    title: "Parler de son expérience, pas de la vérité",
    text: "« Chez moi ça a donné ça » plutôt que « il faut faire ça ». C'est ça, l'humilité, concrètement.",
    alt: "Un lama qui parle, sa bulle de parole devant lui.",
    scene: (
      <>
        <rect x="8" y="8" width="26" height="4" />
        <rect x="8" y="24" width="26" height="4" />
        <rect x="8" y="8" width="4" height="20" />
        <rect x="30" y="8" width="4" height="20" />
        <rect x="32" y="26" width="5" height="6" />
        <rect x="15" y="14" width="12" height="2.5" />
        <rect x="15" y="19" width="8" height="2.5" />
        <Llama x={38} y={25} s={0.92} />
      </>
    ),
  },
  {
    title: "Le porteur ne se défend pas",
    text: "Pendant la consultation, il écoute et il note. Il triera après. Sinon la séance se passe à justifier.",
    alt: "Un lama tête baissée sur son carnet, des flèches qui arrivent vers lui.",
    scene: (
      <>
        <rect x="2" y="12" width="12" height="4" />
        <path d="M14 8 L22 14 L14 20 Z" />
        <rect x="2" y="27" width="8" height="4" />
        <path d="M10 23 L18 29 L10 35 Z" />
        <rect x="12" y="50" width="22" height="6" />
        <Llama x={30} y={20} s={0.92} tilt={-110} />
      </>
    ),
  },
  {
    title: "Dire qu'on galère est l'objet de la séance",
    text: "Ce n'est pas un aveu de faiblesse, c'est la raison d'être du groupe. Et ce qui s'y dit y reste.",
    alt: "Un lama dans une pièce fermée par un cadenas.",
    scene: (
      <>
        <rect x="35" y="2" width="4" height="9" />
        <rect x="43" y="2" width="4" height="9" />
        <rect x="35" y="2" width="12" height="4" />
        <rect x="32" y="9" width="18" height="12" />
        <rect x="6" y="16" width="68" height="5" />
        <rect x="6" y="52" width="68" height="5" />
        <rect x="6" y="16" width="5" height="41" />
        <rect x="69" y="16" width="5" height="41" />
        <Llama x={28} y={24} s={0.78} />
      </>
    ),
  },
  {
    title: "Chacun repart avec quelque chose",
    text: "Une action datée pour le porteur, un apprentissage pour chaque consultant. Le temps 6 n'est pas optionnel.",
    alt: "Deux lamas qui repartent chacun de leur côté, un bloc sur le dos.",
    scene: (
      <>
        <rect x="9" y="32" width="11" height="10" />
        <rect x="53" y="32" width="11" height="10" />
        <Llama x={2} y={28} s={0.8} />
        <Llama x={46} y={28} s={0.8} flip />
      </>
    ),
  },
]

export default function CodevPage() {
  return (
    <div className="codev">
      <div className="container">
        <p className="section-label">Notre méthode</p>
        <h1>Les sessions de codev</h1>
        <p className="codev-intro">
          Construire seul, ça marche un temps. Puis vient le moment où la
          motivation retombe, où une décision traîne depuis trois semaines, où
          l&apos;on réalise qu&apos;on n&apos;a jamais montré son idée à
          personne.
        </p>
        <p className="codev-intro">
          Le codéveloppement professionnel est une méthode de groupe formalisée
          au Québec à la fin des années 90, dans les milieux du management. Le
          principe : un membre expose une situation qui le bloque, les autres
          l&apos;aident à y voir clair. Nous l&apos;avons adaptée à celles et
          ceux qui conçoivent, développent et lancent un produit sans
          cofondateur.
        </p>
        <p className="codev-intro">
          Cette page décrit son fonctionnement chez Studio Lamarck. Elle est
          faite pour être relue avant chaque séance.
        </p>

        <section className="codev-block">
          <h2>Le format</h2>
          <ul className="codev-facts">
            <li>
              <strong>Régulièrement</strong>
              <span>
                Un rythme assez soutenu pour tenir la motivation entre deux
                séances
              </span>
            </li>
            <li>
              <strong>En petit groupe</strong>
              <span>Assez peu nombreux pour que chacun parle vraiment</span>
            </li>
            <li>
              <strong>Un ou deux projets par séance</strong>
              <span>Deux cas permettent de changer de sujet en cours de route</span>
            </li>
            <li>
              <strong>En physique ou en visio</strong>
              <span>
                Autour d&apos;une table quand c&apos;est possible, à distance
                sinon
              </span>
            </li>
          </ul>
        </section>

        <section className="codev-block">
          <h2>Trois rôles</h2>
          <div className="codev-roles">
            <div className="codev-role">
              <svg
                className="role-illus"
                viewBox="0 0 80 44"
                role="img"
                aria-label="Un lama chargé de son bât."
              >
                <rect x="15" y="11" width="17" height="12" />
                <rect x="19" y="5" width="9" height="6" />
                <Llama x={6} y={7} s={0.95} />
              </svg>
              <h3>Le porteur</h3>
              <p>
                Celui dont le projet passe. Il expose, il écoute, il repart avec
                un plan.
              </p>
            </div>
            <div className="codev-role">
              <svg
                className="role-illus"
                viewBox="0 0 80 44"
                role="img"
                aria-label="Un petit troupeau de lamas."
              >
                <Llama x={12} y={6} s={0.5} cls="rule-llama llama-far" />
                <Llama x={34} y={6} s={0.5} cls="rule-llama llama-far" flip />
                <Llama x={56} y={6} s={0.5} cls="rule-llama llama-far" />
                <Llama x={3} y={18} s={0.62} />
                <Llama x={27} y={18} s={0.62} />
                <Llama x={51} y={18} s={0.62} />
              </svg>
              <h3>Les consultants</h3>
              <p>
                Les autres builders du groupe. Ils questionnent d&apos;abord,
                ils proposent ensuite.
              </p>
            </div>
            <div className="codev-role">
              <svg
                className="role-illus"
                viewBox="0 0 80 44"
                role="img"
                aria-label="Un lama à côté d'un bâton de parole."
              >
                <rect x="13" y="0" width="11" height="7" />
                <rect x="16" y="7" width="5" height="35" />
                <Llama x={30} y={7} s={0.95} />
              </svg>
              <h3>L&apos;animateur</h3>
              <p>
                Garant du cadre et du temps. Il ne donne pas son avis, il tient
                la séance.
              </p>
            </div>
          </div>
        </section>

        <section className="codev-block">
          <h2>Le déroulé</h2>
          <p className="codev-sub">Six temps, une heure vingt par cas.</p>
          <details className="codev-details">
            <summary>Voir le déroulé, temps par temps</summary>
            <div className="codev-details-body">
              <ol className="codev-steps">
                {steps.map((s) => (
                  <li key={s.num}>
                    <span className="step-num">{s.num}</span>
                    <div className="step-body">
                      <h3>
                        {s.title}
                        <span className="step-time">{s.time}</span>
                      </h3>
                      <p>{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="codev-warning">
                Les deux temps qu&apos;on a envie de sauter sont ceux qui font
                marcher la méthode. <strong>Les questions</strong>, parce
                qu&apos;un groupe qui conseille avant d&apos;avoir compris
                répond à côté pendant une heure.{" "}
                <strong>Les apprentissages</strong>, parce qu&apos;un consultant
                qui ne repart avec rien ne revient pas.
              </p>
            </div>
          </details>
        </section>

        <section className="codev-block">
          <h2>Les sept principes</h2>
          <p className="codev-sub">
            Ils valent des deux côtés : pour celui qui présente comme pour ceux
            qui conseillent.
          </p>
          <div className="rules">
            {rules.map((r, i) => (
              <div className="rule" key={r.title}>
                <div className="rule-head">
                  <svg
                    className="rule-icon"
                    viewBox="0 0 80 60"
                    role="img"
                    aria-label={r.alt}
                  >
                    {r.scene}
                  </svg>
                  <span className="rule-num">{i + 1}</span>
                </div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
