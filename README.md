# Nexploy Documentation

Documentation site for [Nexploy](https://nexploy.app), built with [Fumadocs](https://fumadocs.dev) and Next.js (App Router).

## Development

```bash
pnpm install
pnpm dev
```

The site is served at http://localhost:3004.

## Structure

- `content/docs/` — the documentation content (MDX). Folder order and titles are driven by `meta.json` files.
- `app/[lang]/` — Next.js App Router, scoped by locale. Docs are served at the root (`/` for French, `/en` for English) via the `(docs)` route group.
- `lib/source.ts` — Fumadocs content loader.
- `lib/i18n.ts` — i18n config (French default, English fallback).
- `lib/layout.shared.tsx` — shared layout options (nav, logo, links) and UI translations.
- `components/mdx.tsx` — global MDX components.
- `source.config.ts` — Fumadocs MDX configuration.

## Internationalization

- French (`fr`) is the default language, served at the root; English (`en`) is served under `/en`.
- Each page has a French `*.mdx` file and an English `*.en.mdx` file; folder labels are localized with `meta.en.json`.
- Pages without an `*.en.mdx` translation fall back to French.

## Theming

Theme handling uses [`@wrksz/themes`](https://themes.wrksz.dev) instead of `next-themes` to avoid the React 19 inline-script warning. Fumadocs' internal `next-themes` imports are redirected to a local shim (`shims/next-themes`) via a pnpm override.

## Build

```bash
pnpm build
pnpm start
```
