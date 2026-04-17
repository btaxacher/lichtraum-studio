/**
 * Single source of truth for the site URL used in JSON-LD, sitemap, robots, OG tags.
 * Set NEXT_PUBLIC_SITE_URL in Vercel env once the real domain is connected.
 *
 * Defensive trim handles accidental whitespace/newlines in ENV variables — Vercel
 * dashboard paste events have historically injected trailing \n characters that
 * break sitemap/robots URLs for Google crawlers.
 */
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lichtraum-euskirchen.de'
export const SITE_URL = rawSiteUrl.trim().replace(/\/+$/, '')
