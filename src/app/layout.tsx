import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { LenisProvider } from '@/components/providers/lenis-provider'

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
  title: 'Luna Ferris — Hochzeits- & Portraitfotografie',
  description:
    'Editorial-Hochzeits- und Portraitfotografie mit Stille, Stil und Haltung. Berlin — weltweit.',
  metadataBase: new URL('https://lunaferris.de'),
  openGraph: {
    title: 'Luna Ferris — Hochzeits- & Portraitfotografie',
    description: 'Momente, die bleiben. Fotografie mit Haltung.',
    type: 'website',
    locale: 'de_DE',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${display.variable} ${body.variable} ${script.variable}`}>
      <body className="min-h-screen bg-bg text-fg antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
