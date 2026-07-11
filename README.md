# Documentation Nexploy

Site de documentation de [Nexploy](https://nexploy.app), construit avec [Fumadocs](https://fumadocs.dev) et Next.js (App Router).

## Développement

```bash
pnpm install
pnpm dev
```

Le site est servi sur http://localhost:3004.

## Structure

- `content/docs/` — le contenu de la documentation (MDX). L'ordre et les titres des dossiers sont pilotés par les fichiers `meta.json`.
- `app/` — Next.js App Router. Les docs sont servies à la racine (`/`) via le groupe de routes `(docs)`.
- `lib/source.ts` — chargeur de contenu Fumadocs.
- `lib/layout.shared.tsx` — configuration commune (nav, logo, liens).
- `components/mdx.tsx` — composants MDX globaux.
- `source.config.ts` — configuration Fumadocs MDX.

## Build

```bash
pnpm build
pnpm start
```
