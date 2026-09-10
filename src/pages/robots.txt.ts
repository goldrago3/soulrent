import type { APIRoute } from 'astro';

/** Nessuna pagina da nascondere: il sito è tutto pubblico. */
export const GET: APIRoute = ({ site }) => {
  const origine = site ?? new URL('https://soulrent.invalid');

  const corpo = `User-agent: *
Allow: /

Sitemap: ${new URL('/sitemap.xml', origine).href}
`;

  return new Response(corpo, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
