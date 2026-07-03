import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions légales",
}

export default function MentionsLegalesPage() {
  return (
    <div className="legal">
      <div className="container">
        <h1>Mentions légales</h1>

        <h2>Éditeur du site</h2>
        <p>
          Le présent site est édité par l&apos;association Studio Lamarck,
          association régie par la loi du 1<sup>er</sup> juillet 1901.
        </p>
        <address>
          Association Studio Lamarck
          <br />
          70 rue Damrémont
          <br />
          75018 Paris, France
        </address>
        <p>
          Contact :{" "}
          <a href="mailto:contact@studiolamarck.fr">
            contact@studiolamarck.fr
          </a>
        </p>

        <h2>Directeur de la publication</h2>
        <p>
          Le directeur de la publication est le président de l&apos;association
          Studio Lamarck.
        </p>

        <h2>Hébergement</h2>
        <p>
          Le site est hébergé par la société Vercel Inc.
        </p>
        <address>
          Vercel Inc.
          <br />
          440 N Barranca Ave #4133
          <br />
          Covina, CA 91723, États-Unis
          <br />
          Site web : <a href="https://vercel.com">vercel.com</a>
        </address>

        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus présents sur ce site (textes, visuels,
          logos) est la propriété de l&apos;association Studio Lamarck, sauf
          mention contraire. Toute reproduction, représentation ou diffusion,
          totale ou partielle, sans autorisation préalable est interdite.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Ce site ne collecte aucune donnée personnelle et n&apos;utilise pas
          de cookies. Les échanges par courrier électronique à l&apos;adresse{" "}
          <a href="mailto:contact@studiolamarck.fr">
            contact@studiolamarck.fr
          </a>{" "}
          sont utilisés uniquement pour répondre à votre demande. Conformément
          au Règlement général sur la protection des données (RGPD), vous
          disposez d&apos;un droit d&apos;accès, de rectification et de
          suppression des données vous concernant, que vous pouvez exercer en
          écrivant à cette même adresse.
        </p>
      </div>
    </div>
  )
}
