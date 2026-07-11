import './global.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Documentation Nexploy',
    template: '%s · Nexploy',
  },
  description:
    "Plateforme de déploiement auto-hébergée pour Docker — le confort d'un PaaS, la liberté du self-hosting.",
};

// Root layout: the <html>/<body> tree lives in `app/[lang]/layout.tsx`
// so the `lang` attribute follows the active locale.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
