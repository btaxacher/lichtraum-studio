import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Parisienne } from 'next/font/google'
import './globals.css'
import { LenisProvider } from '@/components/providers/lenis-provider'
import { Analytics } from '@/components/providers/analytics'
import { Nav } from '@/components/sections/nav'
import { Footer } from '@/components/sections/footer'
import { seo, brand } from '@/lib/content'
import { SITE_URL } from '@/lib/site-url'
import { WebSiteSchema } from '@/components/seo/WebSiteSchema'

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

const script = Parisienne({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
  display: 'swap',
})

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [...seo.keywords],
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: 'website',
    locale: 'de_DE',
    siteName: brand.studio,
    url: SITE_URL,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: brand.studio }],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: ['/og.jpg'],
  },
  robots: { index: true, follow: true },
  authors: [{ name: brand.studio }],
  creator: brand.studio,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${display.variable} ${body.variable} ${script.variable}`}>
      <body className="min-h-screen bg-bg text-fg antialiased">
        <LenisProvider>
          <Nav />
          {children}
          <Footer />
        </LenisProvider>
        <Analytics />
        {/* WebSite schema — gilt für alle Routes, wird von Google für Site-Links genutzt */}
        <WebSiteSchema />
        {/* Root LocalBusiness + ProfessionalService + Photographer — gilt für alle Sub-Pages via @id */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['LocalBusiness', 'ProfessionalService', 'Photograph'],
              '@id': `${SITE_URL}/#business`,
              name: brand.studio,
              alternateName: brand.name,
              image: `${SITE_URL}/og.jpg`,
              description: seo.description,
              priceRange: '€€',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Ladungsfähige Adresse vor Go-Live ergänzen',
                addressLocality: 'Weilerswist',
                postalCode: '53919',
                addressRegion: 'NRW',
                addressCountry: 'DE',
              },
              areaServed: [
                'Weilerswist',
                'Euskirchen',
                'Zülpich',
                'Mechernich',
                'Bad Münstereifel',
                'Köln',
                'Bonn',
                'Brühl',
                'Hürth',
                'Erftstadt',
                'Frechen',
                'Kerpen',
                'Pulheim',
                'Bergheim',
                'Leverkusen',
                'Bergisch Gladbach',
                'Siegburg',
                'NRW',
              ],
              ...(brand.phone ? { telephone: brand.phone } : {}),
              email: brand.email,
              url: SITE_URL,
              sameAs: [] as string[],
            }),
          }}
        />
      </body>
    </html>
  )
}
