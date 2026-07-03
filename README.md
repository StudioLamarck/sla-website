# Studio Lamarck — Site web

Site vitrine de l'association Studio Lamarck, construit avec [Next.js](https://nextjs.org) et pensé pour être hébergé sur [Vercel](https://vercel.com).

## Développement local

```bash
npm install
npm run dev
```

Le site est alors disponible sur [http://localhost:3000](http://localhost:3000).

## Déploiement sur Vercel

### Option 1 — via Git (recommandé)

1. Poussez ce dossier sur un dépôt GitHub / GitLab / Bitbucket.
2. Sur [vercel.com](https://vercel.com), cliquez sur **Add New → Project** et importez le dépôt.
3. Vercel détecte automatiquement Next.js — aucun réglage nécessaire, cliquez sur **Deploy**.

Chaque `git push` déclenchera ensuite un nouveau déploiement automatiquement.

### Option 2 — via la CLI

```bash
npm install -g vercel
vercel
```

## Structure

- `app/page.tsx` — page d'accueil (principes du studio + contact)
- `app/mentions-legales/page.tsx` — mentions légales
- `app/layout.tsx` — en-tête, pied de page et métadonnées communes
- `app/globals.css` — styles du site
