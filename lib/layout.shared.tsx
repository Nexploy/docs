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
        it: {
            displayName: 'Italiano',
            'Back to Home(404 page)': 'Torna alla home',
            'Choose a language(language switcher)': 'Scegli la lingua',
            'Choose a language(language switcher)(aria-label)': 'Scegli la lingua',
            'Close Banner(banner)(aria-label)': 'Chiudi il banner',
            'Close Search(search dialog)(aria-label)': 'Chiudi la ricerca',
            'Collapse Sidebar(sidebar)(aria-label)': 'Riduci la barra laterale',
            'Copied Text(code block)(aria-label)': 'Testo copiato',
            'Copy Anchor Link(heading anchor)(aria-label)': 'Copia il link di ancoraggio',
            'Copy Link(accordion)(aria-label)': 'Copia il link',
            'Copy Markdown(page actions)': 'Copia il Markdown',
            'Copy Text(code block)(aria-label)': 'Copia il testo',
            'Dark(theme switcher)(aria-label)': 'Scuro',
            'Default(type table)': 'Predefinito',
            'Edit on GitHub(edit page)': 'Modifica su GitHub',
            'Last updated on(page footer)': 'Ultimo aggiornamento il',
            'Light(theme switcher)(aria-label)': 'Chiaro',
            'Next Page(pagination)': 'Pagina successiva',
            'No Headings(table of contents)': 'Nessun titolo',
            'No results found(search dialog)': 'Nessun risultato',
            'On this page(table of contents)': 'In questa pagina',
            'Open Search(search trigger)(aria-label)': 'Apri la ricerca',
            'Open Sidebar(sidebar)(aria-label)': 'Apri la barra laterale',
            'Open in ChatGPT(page actions)': 'Apri in ChatGPT',
            'Open in Claude(page actions)': 'Apri in Claude',
            'Open in Cursor(page actions)': 'Apri in Cursor',
            'Open in GitHub(page actions)': 'Apri in GitHub',
            'Open in Scira AI(page actions)': 'Apri in Scira AI',
            'Open(page actions)': 'Apri',
            'Page Not Found(404 page)': 'Pagina non trovata',
            'Parameters(type table)': 'Parametri',
            'Previous Page(pagination)': 'Pagina precedente',
            'Prop(type table)': 'Proprietà',
            'Read {url}, I want to ask questions about it.(page actions)':
                'Leggi {url}, voglio farti delle domande al riguardo.',
            'Returns(type table)': 'Restituisce',
            'Search(search dialog)': 'Cerca',
            'Search(search trigger)': 'Cerca',
            'System(theme switcher)(aria-label)': 'Sistema',
            'Table of Contents(inline table of contents)': 'Sommario',
            'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.(404 page)':
                'La pagina che stai cercando potrebbe essere stata rimossa, rinominata o essere temporaneamente non disponibile.',
            'Toggle Menu(mobile menu)(aria-label)': 'Mostra/nascondi il menu',
            'Toggle Theme(theme switcher)(aria-label)': 'Cambia tema',
            'Type(type table)': 'Tipo',
            'View as Markdown(page actions)': 'Visualizza in Markdown',
        },
        es: {
            displayName: 'Español',
            'Back to Home(404 page)': 'Volver al inicio',
            'Choose a language(language switcher)': 'Elige el idioma',
            'Choose a language(language switcher)(aria-label)': 'Elige el idioma',
            'Close Banner(banner)(aria-label)': 'Cerrar el banner',
            'Close Search(search dialog)(aria-label)': 'Cerrar la búsqueda',
            'Collapse Sidebar(sidebar)(aria-label)': 'Contraer la barra lateral',
            'Copied Text(code block)(aria-label)': 'Texto copiado',
            'Copy Anchor Link(heading anchor)(aria-label)': 'Copiar el enlace de anclaje',
            'Copy Link(accordion)(aria-label)': 'Copiar el enlace',
            'Copy Markdown(page actions)': 'Copiar el Markdown',
            'Copy Text(code block)(aria-label)': 'Copiar el texto',
            'Dark(theme switcher)(aria-label)': 'Oscuro',
            'Default(type table)': 'Predeterminado',
            'Edit on GitHub(edit page)': 'Editar en GitHub',
            'Last updated on(page footer)': 'Última actualización el',
            'Light(theme switcher)(aria-label)': 'Claro',
            'Next Page(pagination)': 'Página siguiente',
            'No Headings(table of contents)': 'Sin títulos',
            'No results found(search dialog)': 'Sin resultados',
            'On this page(table of contents)': 'En esta página',
            'Open Search(search trigger)(aria-label)': 'Abrir la búsqueda',
            'Open Sidebar(sidebar)(aria-label)': 'Abrir la barra lateral',
            'Open in ChatGPT(page actions)': 'Abrir en ChatGPT',
            'Open in Claude(page actions)': 'Abrir en Claude',
            'Open in Cursor(page actions)': 'Abrir en Cursor',
            'Open in GitHub(page actions)': 'Abrir en GitHub',
            'Open in Scira AI(page actions)': 'Abrir en Scira AI',
            'Open(page actions)': 'Abrir',
            'Page Not Found(404 page)': 'Página no encontrada',
            'Parameters(type table)': 'Parámetros',
            'Previous Page(pagination)': 'Página anterior',
            'Prop(type table)': 'Propiedad',
            'Read {url}, I want to ask questions about it.(page actions)':
                'Lee {url}, quiero hacerte preguntas sobre ello.',
            'Returns(type table)': 'Devuelve',
            'Search(search dialog)': 'Buscar',
            'Search(search trigger)': 'Buscar',
            'System(theme switcher)(aria-label)': 'Sistema',
            'Table of Contents(inline table of contents)': 'Índice',
            'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.(404 page)':
                'Puede que la página que buscas se haya eliminado, se haya cambiado de nombre o no esté disponible temporalmente.',
            'Toggle Menu(mobile menu)(aria-label)': 'Mostrar/ocultar el menú',
            'Toggle Theme(theme switcher)(aria-label)': 'Cambiar de tema',
            'Type(type table)': 'Tipo',
            'View as Markdown(page actions)': 'Ver en Markdown',
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
