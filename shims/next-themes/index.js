'use client';

// Compatibility shim: Fumadocs imports `{ ThemeProvider, useTheme }` from
// `next-themes`. We redirect those to `@wrksz/themes`, whose `useTheme` shares
// the same context as the `@wrksz/themes/next` <ThemeProvider> used in the
// root layout. Fumadocs' own <ThemeProvider> is disabled (`theme.enabled:false`),
// so only `useTheme` (for the theme toggle) is actually consumed here.
export { ClientThemeProvider as ThemeProvider, useTheme } from '@wrksz/themes/client';
