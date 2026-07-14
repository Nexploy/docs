import { uiTranslations } from 'fumadocs-ui/i18n';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Globe } from 'lucide-react';
import Image from 'next/image';
import { i18n } from '@/lib/i18n';

export const translations = i18n
    .translations()
    .extend(uiTranslations())
    .add({
        en: {
            displayName: 'English',
            'Back to Home(404 page)': 'Back to Home',
            'Choose a language(language switcher)': 'Choose a language',
            'Choose a language(language switcher)(aria-label)': 'Choose a language',
            'Close Banner(banner)(aria-label)': 'Close Banner',
            'Close Search(search dialog)(aria-label)': 'Close Search',
            'Collapse Sidebar(sidebar)(aria-label)': 'Collapse Sidebar',
            'Copied Text(code block)(aria-label)': 'Copied Text',
            'Copy Anchor Link(heading anchor)(aria-label)': 'Copy Anchor Link',
            'Copy Link(accordion)(aria-label)': 'Copy Link',
            'Copy Markdown(page actions)': 'Copy Markdown',
            'Copy Text(code block)(aria-label)': 'Copy Text',
            'Dark(theme switcher)(aria-label)': 'Dark',
            'Default(type table)': 'Default',
            'Edit on GitHub(edit page)': 'Edit on GitHub',
            'Last updated on(page footer)': 'Last updated on',
            'Light(theme switcher)(aria-label)': 'Light',
            'Next Page(pagination)': 'Next Page',
            'No Headings(table of contents)': 'No Headings',
            'No results found(search dialog)': 'No results found',
            'On this page(table of contents)': 'On this page',
            'Open Search(search trigger)(aria-label)': 'Open Search',
            'Open Sidebar(sidebar)(aria-label)': 'Open Sidebar',
            'Open in ChatGPT(page actions)': 'Open in ChatGPT',
            'Open in Claude(page actions)': 'Open in Claude',
            'Open in Cursor(page actions)': 'Open in Cursor',
            'Open in GitHub(page actions)': 'Open in GitHub',
            'Open in Scira AI(page actions)': 'Open in Scira AI',
            'Open(page actions)': 'Open',
            'Page Not Found(404 page)': 'Page Not Found',
            'Parameters(type table)': 'Parameters',
            'Previous Page(pagination)': 'Previous Page',
            'Prop(type table)': 'Prop',
            'Read {url}, I want to ask questions about it.(page actions)':
                'Read {url}, I want to ask questions about it.',
            'Returns(type table)': 'Returns',
            'Search(search dialog)': 'Search',
            'Search(search trigger)': 'Search',
            'System(theme switcher)(aria-label)': 'System',
            'Table of Contents(inline table of contents)': 'Table of Contents',
            'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.(404 page)':
                'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
            'Toggle Menu(mobile menu)(aria-label)': 'Toggle Menu',
            'Toggle Theme(theme switcher)(aria-label)': 'Toggle Theme',
            'Type(type table)': 'Type',
            'View as Markdown(page actions)': 'View as Markdown',
        },
        fr: {
            displayName: 'Français',
            'Back to Home(404 page)': 'Retour à l\'accueil',
            'Choose a language(language switcher)': 'Choisir la langue',
            'Choose a language(language switcher)(aria-label)': 'Choisir la langue',
            'Close Banner(banner)(aria-label)': 'Fermer la bannière',
            'Close Search(search dialog)(aria-label)': 'Fermer la recherche',
            'Collapse Sidebar(sidebar)(aria-label)': 'Réduire la barre latérale',
            'Copied Text(code block)(aria-label)': 'Texte copié',
            'Copy Anchor Link(heading anchor)(aria-label)': 'Copier le lien d\'ancrage',
            'Copy Link(accordion)(aria-label)': 'Copier le lien',
            'Copy Markdown(page actions)': 'Copier le Markdown',
            'Copy Text(code block)(aria-label)': 'Copier le texte',
            'Dark(theme switcher)(aria-label)': 'Sombre',
            'Default(type table)': 'Par défaut',
            'Edit on GitHub(edit page)': 'Modifier sur GitHub',
            'Last updated on(page footer)': 'Dernière mise à jour le',
            'Light(theme switcher)(aria-label)': 'Clair',
            'Next Page(pagination)': 'Page suivante',
            'No Headings(table of contents)': 'Aucun titre',
            'No results found(search dialog)': 'Aucun résultat',
            'On this page(table of contents)': 'Sur cette page',
            'Open Search(search trigger)(aria-label)': 'Ouvrir la recherche',
            'Open Sidebar(sidebar)(aria-label)': 'Ouvrir la barre latérale',
            'Open in ChatGPT(page actions)': 'Ouvrir dans ChatGPT',
            'Open in Claude(page actions)': 'Ouvrir dans Claude',
            'Open in Cursor(page actions)': 'Ouvrir dans Cursor',
            'Open in GitHub(page actions)': 'Ouvrir dans GitHub',
            'Open in Scira AI(page actions)': 'Ouvrir dans Scira AI',
            'Open(page actions)': 'Ouvrir',
            'Page Not Found(404 page)': 'Page introuvable',
            'Parameters(type table)': 'Paramètres',
            'Previous Page(pagination)': 'Page précédente',
            'Prop(type table)': 'Propriété',
            'Read {url}, I want to ask questions about it.(page actions)':
                'Lis {url}, je veux poser des questions à son sujet.',
            'Returns(type table)': 'Retourne',
            'Search(search dialog)': 'Rechercher',
            'Search(search trigger)': 'Rechercher',
            'System(theme switcher)(aria-label)': 'Système',
            'Table of Contents(inline table of contents)': 'Sommaire',
            'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.(404 page)':
                'La page que vous recherchez a peut-être été supprimée, renommée ou est temporairement indisponible.',
            'Toggle Menu(mobile menu)(aria-label)': 'Afficher/masquer le menu',
            'Toggle Theme(theme switcher)(aria-label)': 'Changer de thème',
            'Type(type table)': 'Type',
            'View as Markdown(page actions)': 'Voir en Markdown',
        },
    });

export function baseOptions(lang: string): BaseLayoutProps {
    return {
        nav: {
            title: (
                <>
                    <Image
                        src="/nexploy-logo.svg"
                        alt="Nexploy"
                        width={24}
                        height={24}
                        className="dark:hidden"
                    />
                    <Image
                        src="/nexploy-logo-dark.svg"
                        alt="Nexploy"
                        width={24}
                        height={24}
                        className="hidden dark:block"
                    />
                    <span className="font-bold">Nexploy</span>
                </>
            ),
            url: lang === 'fr' ? '/' : `/${lang}`,
        },
        githubUrl: 'https://github.com/Nexploy',
        links: [
            {
                type: 'icon',
                icon: <Globe/>,
                text: 'Site',
                label: 'Site Nexploy',
                url: 'https://nexploy.app',
                external: true,
            },
        ],
    };
}
