import { ThemeProvider } from '@wrksz/themes/next';
import { i18nProvider } from 'fumadocs-ui/i18n';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';
import { translations } from '@/lib/layout.shared';

export default async function LangLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        {/*
          @wrksz/themes ThemeProvider (Server Component) injects the anti-flash
          theme script via useServerInsertedHTML — no React 19 script warning.
          Fumadocs' own next-themes provider is disabled below; its theme toggle
          reads this context through the `next-themes` shim.
        */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <RootProvider
            i18n={i18nProvider(translations, lang)}
            theme={{ enabled: false }}
          >
            {children}
          </RootProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
