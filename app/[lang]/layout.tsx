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
        <RootProvider
            i18n={i18nProvider(translations, lang)}
            theme={{ defaultTheme: 'dark' }}
        >
            {children}
        </RootProvider>
        </body>
        </html>
    );
}
