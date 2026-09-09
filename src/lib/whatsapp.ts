import { PUBLIC_WHATSAPP_NUMBER } from 'astro:env/client';
import type { UiKey } from '../i18n/ui';

/**
 * Deep-link WhatsApp con messaggio precompilato.
 *
 * Il contesto dice da quale parte del sito parte la conversazione, così il
 * messaggio arriva già con un'indicazione invece che con un "buongiorno".
 */

export const whatsappContexts = ['default', 'fleet', 'itineraries', 'enquiry'] as const;

export type WhatsAppContext = (typeof whatsappContexts)[number];

export const whatsappMessageKey = {
  default: 'whatsapp.message.default',
  fleet: 'whatsapp.message.fleet',
  itineraries: 'whatsapp.message.itineraries',
  enquiry: 'whatsapp.message.enquiry',
} as const satisfies Record<WhatsAppContext, UiKey>;

/** wa.me accetta solo cifre: niente `+`, spazi o trattini. */
export function whatsappUrl(message: string): string {
  const digits = PUBLIC_WHATSAPP_NUMBER.replace(/\D/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
