import type { Metadata } from 'next'
import { Fraunces, DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'
import { LenisProvider } from '@/components/providers/lenis-provider'
import { Analytics } from '@/components/providers/analytics'
import { Nav } from '@/components/sections/nav'
import { Footer } from '@/components/sections/footer'
import { seo, brand } from '@/lib/content'
import { SITE_URL } from '@/lib/site-url'

const display = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const body = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

const script = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['italic'],
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
        {/* Local-Business Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['LocalBusiness', 'ProfessionalService'],
              additionalType: 'https://schema.org/Photograph',
              '@id': SITE_URL,
              name: brand.studio,
              image: `${SITE_URL}/og.jpg`,
              description: seo.description,
              priceRange: '€€',
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'NRW',
                addressCountry: 'DE',
                addressLocality: 'Euskirchen',
                postalCode: '53879',
              },
              areaServed: [
                'Euskirchen',
                'Weilerswist',
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
              ],
              telephone: brand.phone,
              email: brand.email,
              url: SITE_URL,
            }),
          }}
        />
      </body>
    </html>
  )
}
