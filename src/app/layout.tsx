import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { LenisProvider } from '@/components/providers/lenis-provider'
import { Nav } from '@/components/sections/nav'
import { Footer } from '@/components/sections/footer'
import { seo, brand } from '@/lib/content'

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const body = Inter({
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
  metadataBase: new URL('https://lichtraum-studio.vercel.app'),
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
        {/* Local-Business Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['LocalBusiness', 'ProfessionalService'],
              additionalType: 'https://schema.org/Photograph',
              '@id': 'https://lichtraum-studio.vercel.app',
              name: brand.studio,
              image: 'https://lichtraum-studio.vercel.app/og.jpg',
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
              url: 'https://lichtraum-studio.vercel.app',
            }),
          }}
        />
      </body>
    </html>
  )
}
