/**
 * All location, service and tier-1 route data.
 * Used by dynamic routes, sitemap, nav dropdowns, footer.
 * Phase 2 = scaffolding with minimal placeholder copy.
 * Phase 3+ replaces placeholders with full SEO content.
 */

export type CityEntry = {
  slug: string
  name: string
  postalCode: string
  distanceKm: number
  volume: number // Sistrix search volume for "Fotograf {city}"
  tagline: string
  locations: string[] // shooting spots
  neighbors: string[] // slugs for internal linking
  intro: string
}

export const cities = [
  { slug: 'frechen', name: 'Frechen', postalCode: '50226', distanceKm: 45, volume: 100,
    tagline: 'Fotograf Frechen — Portraits & Hochzeiten im Rhein-Erft-Kreis',
    locations: ['Stadtpark Frechen', 'Burg Bachem', 'Braunkohletagebau Aussichtspunkt'],
    neighbors: ['huerth', 'pulheim', 'kerpen'],
    intro: 'Frechen liegt am westlichen Stadtrand Kölns und verbindet städtisches Flair mit Industrie-Kultur. Unsere Lichtraum-Shootings in Frechen nutzen den Stadtpark, die Burg Bachem oder die raue Kulisse des Braunkohletagebaus als Gegenpol zu klassischen Studio-Settings.' },

  { slug: 'weilerswist', name: 'Weilerswist', postalCode: '53919', distanceKm: 10, volume: 10,
    tagline: 'Fotograf Weilerswist — Natur- & Familienfotografie',
    locations: ['Burg Metternich', 'Erft-Auen', 'Schloss Loersfeld'],
    neighbors: ['euskirchen', 'bonn', 'bruehl'],
    intro: 'Weilerswist zwischen Euskirchen und Köln bietet ruhige Natur-Locations an der Erft, die historische Burg Metternich und weite Felder — ideal für authentische Familien- und Paarshootings abseits der Stadt.' },

  { slug: 'leverkusen', name: 'Leverkusen', postalCode: '51373', distanceKm: 55, volume: 50,
    tagline: 'Fotograf Leverkusen — Schloss Morsbroich & Japanischer Garten',
    locations: ['Schloss Morsbroich', 'Neulandpark', 'Japanischer Garten Leverkusen'],
    neighbors: ['koeln', 'bergisch-gladbach', 'koeln'],
    intro: 'Leverkusen ist mehr als Bayer-Werk: Schloss Morsbroich, der Neulandpark und der Japanische Garten sind drei ganz unterschiedliche Kulissen, die wir für Portrait-, Paar- und Businessshootings nutzen.' },

  { slug: 'siegburg', name: 'Siegburg', postalCode: '53721', distanceKm: 60, volume: 30,
    tagline: 'Fotograf Siegburg — Michaelsberg & Altstadt',
    locations: ['Michaelsberg', 'Siegburger Altstadt', 'Sieg-Ufer'],
    neighbors: ['bonn', 'koeln', 'bergisch-gladbach'],
    intro: 'Siegburg zwischen Köln und Bonn bietet mit dem Michaelsberg eine der schönsten Aussichtslagen im Rheinland — Hochzeitsfotografie zur Golden Hour funktioniert hier besonders gut.' },

  { slug: 'bergisch-gladbach', name: 'Bergisch Gladbach', postalCode: '51429', distanceKm: 65, volume: 40,
    tagline: 'Fotograf Bergisch Gladbach — Schloss Bensberg & Altstadt',
    locations: ['Schloss Bensberg', 'Altstadt Bergisch Gladbach', 'Strunder Bach'],
    neighbors: ['koeln', 'leverkusen', 'siegburg'],
    intro: 'Bergisch Gladbach verbindet urbanes Leben mit den Ausläufern des Bergischen Lands. Schloss Bensberg ist eine der prestigeträchtigsten Hochzeitslocations der Region.' },

  { slug: 'erftstadt', name: 'Erftstadt', postalCode: '50374', distanceKm: 30, volume: 70,
    tagline: 'Fotograf Erftstadt — Schloss Gracht & Erft-Auen',
    locations: ['Schloss Gracht', 'Herrig-Park', 'Lommersum'],
    neighbors: ['bruehl', 'weilerswist', 'huerth'],
    intro: 'Erftstadt mit Schloss Gracht gehört zu den romantischsten Hochzeitskulissen im Rhein-Erft-Kreis — barocker Park, stille Alleen und weite Auenlandschaft.' },

  { slug: 'bergheim', name: 'Bergheim', postalCode: '50126', distanceKm: 40, volume: 60,
    tagline: 'Fotograf Bergheim — Paffendorfer Schloss',
    locations: ['Paffendorfer Schloss', 'Aachener Straße Altstadt', 'Rhein-Erft-Zentrum'],
    neighbors: ['kerpen', 'pulheim', 'bergheim'],
    intro: 'Bergheim als Kreisstadt des Rhein-Erft-Kreises bietet mit dem Paffendorfer Schloss eine stille, parkartige Hochzeits- und Portrait-Kulisse.' },

  { slug: 'bonn', name: 'Bonn', postalCode: '53111', distanceKm: 45, volume: 200,
    tagline: 'Fotograf Bonn — Rheinufer & Poppelsdorf',
    locations: ['Beethoven-Haus', 'Rheinufer Bonn', 'Schloss Poppelsdorf', 'Kirschblütenallee'],
    neighbors: ['siegburg', 'bruehl', 'koeln'],
    intro: 'Bonn bringt mit der Kirschblütenallee, dem Rheinufer und dem Poppelsdorfer Schloss drei ikonische Locations, die wir für Hochzeits-, Paar- und Editorial-Shootings nutzen.' },

  { slug: 'kerpen', name: 'Kerpen', postalCode: '50171', distanceKm: 35, volume: 50,
    tagline: 'Fotograf Kerpen — Schloss Türnich & Kölner Landschaft',
    locations: ['Schloss Türnich', 'Marienfeld Festivalgelände', 'Sindorf'],
    neighbors: ['bergheim', 'huerth', 'frechen'],
    intro: 'Kerpen zwischen Köln und Düren bietet mit Schloss Türnich eine ruhige Park-Kulisse und mit Marienfeld eine dramatische, industrielle Alternative.' },

  { slug: 'huerth', name: 'Hürth', postalCode: '50354', distanceKm: 40, volume: 50,
    tagline: 'Fotograf Hürth — Ville-Park & Studiolandschaft',
    locations: ['Ville-Park', 'Knapsack Industriekulisse', 'Hermülheim'],
    neighbors: ['frechen', 'erftstadt', 'bruehl'],
    intro: 'Hürth als Medien-Stadt Kölns bietet den Ville-Park und die beeindruckende Industriekulisse Knapsack für editoriale Shootings mit Charakter.' },

  { slug: 'bruehl', name: 'Brühl', postalCode: '50321', distanceKm: 30, volume: 50,
    tagline: 'Fotograf Brühl — Schloss Augustusburg UNESCO-Welterbe',
    locations: ['Schloss Augustusburg', 'Schlosspark Brühl', 'Max-Ernst-Museum'],
    neighbors: ['huerth', 'erftstadt', 'bonn'],
    intro: 'Brühl mit Schloss Augustusburg (UNESCO-Welterbe) gehört zu den prestigeträchtigsten Hochzeitslocations Deutschlands — barocke Architektur, Alleen, ein weitläufiger Schlosspark.' },

  { slug: 'pulheim', name: 'Pulheim', postalCode: '50259', distanceKm: 50, volume: 30,
    tagline: 'Fotograf Pulheim — Abtei Brauweiler',
    locations: ['Abtei Brauweiler', 'Stommeln', 'Dansweiler'],
    neighbors: ['frechen', 'bergheim', 'pulheim'],
    intro: 'Pulheim nördlich von Köln beherbergt die Abtei Brauweiler — ein ehemaliges Benediktinerkloster mit romanischer Architektur und weitem Park, ideal für stimmungsvolle Hochzeitsreportagen.' },
] satisfies readonly CityEntry[]

export type ServiceEntry = {
  slug: string
  name: string
  h1: string
  intro: string
  startingPrice: string
}

export const services = [
  { slug: 'familienfotograf', name: 'Familienfotograf', h1: 'Familienfotograf Euskirchen & Köln', startingPrice: 'ab 290 €',
    intro: 'Natürliche Familienfotografie zuhause, in der Natur oder im Studio. Keine gestellten Posen — nur echte Momente zwischen Eltern, Kindern und Großeltern.' },
  { slug: 'babyfotograf', name: 'Babyfotograf', h1: 'Babyfotograf Euskirchen & Köln', startingPrice: 'ab 250 €',
    intro: 'Babyshootings in den ersten Lebenswochen — zuhause in vertrauter Umgebung oder im warm ausgeleuchteten Lichtraum-Studio.' },
  { slug: 'businessfotograf', name: 'Businessfotograf', h1: 'Businessfotograf Euskirchen & Köln', startingPrice: 'ab 150 €',
    intro: 'Portrait-, Team- und Branding-Fotografie für Selbständige, Kanzleien, Agenturen und Unternehmen — Köln, Bonn, Euskirchen, Rhein-Erft.' },
  { slug: 'eventfotograf', name: 'Eventfotograf', h1: 'Eventfotograf Euskirchen & Köln', startingPrice: 'ab 490 €',
    intro: 'Reportagefotografie für Firmenevents, Launches, Galas und private Feiern im Großraum Köln/Bonn.' },
  { slug: 'portraitfotograf', name: 'Portraitfotograf', h1: 'Portraitfotograf Euskirchen & Köln', startingPrice: 'ab 190 €',
    intro: 'Editorial Portraits, Personal Branding, Schauspieler-Headshots und LinkedIn-Fotos im Lichtraum-Studio oder on Location.' },
] as const satisfies readonly ServiceEntry[]

/**
 * Tier-1 Landing Pages — eigene Top-Level-Slugs für SEO-Power-Keywords.
 * Keine Präfix-Route (nicht unter /leistungen/), da Keywords transactional sind.
 */
export type Tier1Entry = {
  slug: string
  h1: string
  title: string
  description: string
  intro: string
  targetVolume: number
}

export const tier1Pages = [
  { slug: 'hochzeitsfotograf-koeln', targetVolume: 650,
    h1: 'Hochzeitsfotograf Köln — Ihre Hochzeit in Bildern',
    title: 'Hochzeitsfotograf Köln | Lichtraum Studio — Reportage & Editorial',
    description: 'Hochzeitsfotograf Köln & NRW: emotionale Reportagen, ganztägige Begleitung, zeitloser Editorial-Stil. Kölner Dom, Schloss Augustusburg, Rhein-Terrassen. Termin anfragen.',
    intro: 'Hochzeitsfotografie in Köln bedeutet für uns: keine Inszenierung, keine Standard-Posen — sondern die Fähigkeit, unsichtbar zu bleiben und genau dann auszulösen, wenn ein Moment entsteht, den niemand zweimal erlebt.' },

  { slug: 'bewerbungsfotos-koeln', targetVolume: 550,
    h1: 'Bewerbungsfotos Köln — Ihr perfekter erster Eindruck',
    title: 'Bewerbungsfotos Köln | Lichtraum — ab 89 € mit Express-Termin',
    description: 'Professionelle Bewerbungsfotos in Köln ab 89 €. Express-Termine, Branchen-Beratung (Anwalt, Kreativ, Tech), Retusche inklusive. Termin online buchen.',
    intro: 'Ein gutes Bewerbungsfoto entscheidet in Sekunden. Wir fotografieren Sie im Lichtraum-Studio so, dass Sie in fünf Jahren noch denken: „Das war ich — nur etwas besser ausgeleuchtet."' },

  { slug: 'fotograf-koeln', targetVolume: 700,
    h1: 'Fotograf Köln — Premium-Fotografie für jeden Anlass',
    title: 'Fotograf Köln | Lichtraum Studio — Hochzeit, Business, Portrait',
    description: 'Fotograf in Köln und Umgebung: Hochzeiten, Portraits, Business, Events. Aus Euskirchen aktiv im gesamten Großraum Köln. Termin anfragen.',
    intro: 'Als Fotograf in Köln arbeiten wir für die Stadt, ohne in ihr zu wohnen — das erlaubt uns, sie mit dem Blick zu sehen, den sie bei ihren Bewohnern längst verloren hat.' },

  { slug: 'fotoshooting-koeln', targetVolume: 300,
    h1: 'Fotoshooting Köln — persönlich, kreativ, unvergesslich',
    title: 'Fotoshooting Köln | Lichtraum — Outdoor, Studio, Editorial',
    description: 'Fotoshootings in Köln: Rheinauhafen, Belgisches Viertel, Studio. Portrait, Paar, Familie, Baby, Business. Beratung, Location-Empfehlung, Retusche.',
    intro: 'Ein Fotoshooting in Köln ist mehr als eine Stunde vor der Kamera. Es ist ein Nachmittag, an dem die Stadt für einen Moment Kulisse wird — und Sie in der Hauptrolle.' },

  { slug: 'bewerbungsfotos-euskirchen', targetVolume: 80,
    h1: 'Bewerbungsfotos Euskirchen — professionell im Lichtraum-Studio',
    title: 'Bewerbungsfotos Euskirchen | Lichtraum — ab 89 € Express',
    description: 'Bewerbungsfotos in Euskirchen: professionelles Lichtraum-Studio, Retusche inklusive, Express-Termine. Auch für Kreis Euskirchen, Zülpich, Mechernich.',
    intro: 'Bewerbungsfotos in Euskirchen ohne Anfahrt nach Köln — gleiche Qualität, entspannter Termin, Retusche innerhalb von 24 h.' },

  { slug: 'hochzeitsfotograf-euskirchen', targetVolume: 30,
    h1: 'Hochzeitsfotograf Euskirchen — Eifel, Burgen, stille Momente',
    title: 'Hochzeitsfotograf Euskirchen | Lichtraum — Reportage & Editorial',
    description: 'Hochzeitsfotograf in Euskirchen und Kreis Euskirchen: Burg Satzvey, Burg Zievel, Eifel-Locations. Reportage-Stil, ganztägige Begleitung. Termin anfragen.',
    intro: 'Eine Hochzeit im Kreis Euskirchen heißt: Burgen statt Locations, Eifel statt Skyline — eine Ruhe, die man auf Fotos sehen kann.' },
] as const satisfies readonly Tier1Entry[]

/**
 * Extra Köln niche landing pages (nicht unter Tier-1 weil kleineres Volumen, aber eigener Slug).
 */
export const extraNicheCologne = [
  { slug: 'schwangerschaftsfotos-koeln', targetVolume: 20,
    h1: 'Schwangerschaftsfotos Köln — Babybauch im Lichtraum-Studio',
    title: 'Schwangerschaftsfotos Köln | Lichtraum — Babybauch & Newborn',
    description: 'Schwangerschaftsfotos in Köln: warm ausgeleuchtetes Studio, entspannte Atmosphäre, auf Wunsch mit Partner oder Geschwistern. Auch Babybauch outdoor.',
    intro: 'Babybauch-Shootings sind keine Posing-Sessions. Sie sind ein ruhiger Nachmittag, an dem Sie sich selbst — und das Kind in Ihnen — zum ersten Mal in Ruhe betrachten.' },

  { slug: 'businessfotograf-koeln', targetVolume: 10,
    h1: 'Businessfotograf Köln — LinkedIn, Branding & Teams',
    title: 'Businessfotograf Köln | Lichtraum — LinkedIn, Branding, Team',
    description: 'Businessfotograf in Köln: LinkedIn-Portraits, Personal Branding, Team- und Firmenfotos. Onsite in Ihrem Büro oder im Lichtraum-Studio.',
    intro: 'Ein Businessfoto muss nicht seriös aussehen, es muss Sie aussehen — und das ist schwerer, als es klingt.' },
] as const satisfies readonly Tier1Entry[]

export const allTier1 = [...tier1Pages, ...extraNicheCologne] as const

export const brandCity = { slug: 'euskirchen', name: 'Euskirchen', postalCode: '53879' } as const
