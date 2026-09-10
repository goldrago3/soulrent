import type { RouteKey } from '../i18n/routes';
import type { UiKey } from '../i18n/ui';

/**
 * Rotte previste dal §7 ma non ancora costruite.
 *
 * Senza pagine-scheletro ogni voce di menu porterebbe a un 404.
 * `src/pages/[...slug].astro` le genera tutte, nelle tre lingue, da qui.
 *
 * Quando una pagina vera viene creata, va tolta la sua chiave da questo
 * elenco — le rotte della flotta sono già uscite di qui: la pagina statica avrebbe comunque la precedenza, ma tenere la
 * lista aggiornata impedisce di dimenticare uno scheletro in produzione.
 *
 * Vive in un file suo perché Astro estrae `getStaticPaths` in un modulo
 * separato: da lì si vedono gli import, non le costanti del frontmatter.
 */
export const stubRoutes = {
  enquiry: 'nav.enquiry',
  conditions: 'nav.conditions',
  howItWorks: 'nav.howItWorks',
  about: 'nav.about',
  partners: 'nav.partners',
  contact: 'nav.contact',
} as const satisfies Partial<Record<RouteKey, UiKey>>;

export type StubRoute = keyof typeof stubRoutes;
