import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowUpRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { SubPageHero } from '@/components/sections/sub-page-hero'
import { ProseSection } from '@/components/sections/prose-section'
import { SubPageCta } from '@/components/sections/sub-page-cta'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Standorte — wo wir fotografieren | Lichtraum Fotostudio',
  description:
    'Fotograf in Euskirchen, Köln, Bonn und im ganzen Rheinland. Alle Städte, in denen wir Hochzeiten, Bewerbungsfotos und Portraits fotografieren — auf einen Blick.',
  path: '/standorte',
})

/**
 * City-Hub zeigt alle Tier-2/3-Städte + zentrale Tier-1-Gateways als Grid.
 * Jede Card ist Click-Through zu der passenden Landing-Page.
 */
type LocationCard = {
  name: string
  description: string
  href: string
  group: 'kern' | 'rheinland' | 'rhein-erft' | 'bergisches-land' | 'bonn-umland'
}

const locationCards: readonly LocationCard[] = [
  // Kern-Städte (direkte Tier-1)
  { name: 'Euskirchen', description: 'Unser Studio-Standort. Eifel-Nähe, ruhige Shootings.', href: '/hochzeitsfotograf-euskirchen', group: 'kern' },
  { name: 'Köln', description: 'Dom, Rheinauhafen, Schloss Augustusburg — das Zentrum unserer Arbeit.', href: '/fotograf-koeln', group: 'kern' },
  { name: 'Bonn', description: 'Rheinaue, Poppelsdorf, Kirschblütenallee, Petersberg.', href: '/fotograf-bonn', group: 'kern' },

  // Rheinland
  { name: 'Leverkusen', description: 'Schloss Morsbroich, Neulandpark, Japanischer Garten.', href: '/fotograf-leverkusen', group: 'rheinland' },
  { name: 'Siegburg', description: 'Michaelsberg-Kloster mit 360°-Aussicht über die Sieg.', href: '/fotograf-siegburg', group: 'rheinland' },
  { name: 'Bergisch Gladbach', description: 'Schloss Bensberg, Grandhotel mit Köln-Blick.', href: '/fotograf-bergisch-gladbach', group: 'rheinland' },

  // Rhein-Erft
  { name: 'Erftstadt', description: 'Schloss Gracht, barocke Kulisse mit ruhiger Park-Atmosphäre.', href: '/fotograf-erftstadt', group: 'rhein-erft' },
  { name: 'Bergheim', description: 'Paffendorfer Schloss, Gut Frielinghausen, Scheunen-Hochzeiten.', href: '/fotograf-bergheim', group: 'rhein-erft' },
  { name: 'Kerpen', description: 'Schloss Türnich, englischer Landschaftspark, Wasserteiche.', href: '/fotograf-kerpen', group: 'rhein-erft' },
  { name: 'Hürth', description: 'Ville-Park, Medien-Stadt Kölns, industrielle Editorial-Kulisse.', href: '/fotograf-huerth', group: 'rhein-erft' },
  { name: 'Brühl', description: 'Schloss Augustusburg (UNESCO), Max-Ernst-Museum, Schlosspark.', href: '/fotograf-bruehl', group: 'rhein-erft' },
  { name: 'Pulheim', description: 'Abtei Brauweiler, Benediktiner-Kreuzgang, monastische Ruhe.', href: '/fotograf-pulheim', group: 'rhein-erft' },

  // Umland
  { name: 'Weilerswist', description: 'Burg Metternich, Erft-Auen, Familien- & Paar-Shoots nahe Studio.', href: '/fotograf-weilerswist', group: 'bonn-umland' },
]

const groupLabels: Record<LocationCard['group'], string> = {
  kern: 'Kern-Städte',
  rheinland: 'Rheinland',
  'rhein-erft': 'Rhein-Erft-Kreis',
  'bergisches-land': 'Bergisches Land',
  'bonn-umland': 'Eifel & Bonn-Umland',
}

function groupedCards() {
  const groups: Record<string, LocationCard[]> = {}
  locationCards.forEach((card) => {
    if (!groups[card.group]) groups[card.group] = []
    groups[card.group].push(card)
  })
  return groups
}

export default function StandortePage() {
  const grouped = groupedCards()

  return (
    <main className="relative min-h-screen">
      <Breadcrumbs items={[{ name: 'Standorte', path: '/standorte' }]} />

      <SubPageHero
        eyebrow="Fotografie · Rheinland & NRW"
        h1="Wir fotografieren in eurer Stadt — Lichtraum in NRW"
        subtitle="Von Euskirchen fahren wir zu jedem Shooting im Rheinland — ohne Kilometer-Pauschale, ohne schlechte Laune. Hier seht ihr, wo wir regelmäßig arbeiten."
        image={{
          src: '/images/redesign/gallery-05-couple-field.jpg',
          alt: 'Fotograf Rheinland — Paarshooting zur goldenen Stunde in NRW',
        }}
      />

      <ProseSection
        body={[
          'Wir sind ein Fotografen-Team aus Euskirchen mit Arbeitsgebiet von Köln bis Bonn, von der Eifel bis ins Bergische Land. Unser Studio liegt strategisch zwischen den drei großen Rheinland-Metropolen — 45 Minuten bis Köln-Zentrum, 40 Minuten bis Bonn, 20 Minuten nach Schloss Satzvey oder Schloss Gracht.',
          'Wenn ihr in einer der folgenden Städte heiratet, euren Portrait-Termin plant oder ein Business-Shooting braucht, sind wir meistens näher als ihr denkt. Klickt euch in eure Stadt — wir haben zu jeder Region eine ausführliche Seite mit Locations, Preisen und FAQ.',
        ]}
      />

      {Object.entries(grouped).map(([group, cards]) => (
        <section key={group} className="bg-bg py-12 md:py-16 odd:bg-bg-secondary">
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
            <p className="eyebrow eyebrow-gold mb-4 inline-flex items-center gap-2">
              <MapPin className="h-3 w-3" aria-hidden /> {groupLabels[group as LocationCard['group']]}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {cards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group block bg-bg-surface border border-border rounded-sm p-6 md:p-7 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 ease-editorial"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h2 className="editorial-display text-fg text-xl md:text-2xl font-medium leading-[1.2]">
                      {card.name}
                    </h2>
                    <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-accent-gold group-hover:text-accent-terra transition-colors" />
                  </div>
                  <p className="text-sm text-fg-muted leading-[1.6]">{card.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <ProseSection
        h2="Eure Stadt ist nicht dabei?"
        body={[
          'Kein Problem. Wir fahren routinemäßig auch nach Aachen, Düsseldorf, Wuppertal, Neuss, Mönchengladbach und ins südliche Ruhrgebiet. Ab etwa 80 Kilometern Anfahrt kommt eine moderate Fahrtkosten-Pauschale dazu — in der Regel zwischen 80 € und 150 €, je nach Ort und Tageszeit. Für Destination-Hochzeiten (Norddeutschland, Süddeutschland, Alpen, europäisches Ausland) machen wir individuelle Angebote.',
          'Schreibt uns einfach eure Eckdaten: Datum, Ort, Anlass. Wir melden uns binnen 24 Stunden mit Verfügbarkeit und einem konkreten Vorschlag.',
        ]}
        variant="sand"
      />

      <SubPageCta
        heading="Wo soll euer nächstes Shooting sein?"
        body="Schreibt uns eure Stadt und euer Datum — wir prüfen Verfügbarkeit und antworten innerhalb eines Werktages."
      />
    </main>
  )
}
