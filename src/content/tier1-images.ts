/**
 * Hero + Gallery-Bild-Mapping pro Tier-1-Slug.
 * Aktuell Unsplash-Fallback (Kodak-Portra-Look). Phase 3: Migration auf lokale Nanobanana-Bilder.
 */

const U = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`

// Kuratierte Bild-Pools nach Genre (warm-editorial)
const WEDDING = [
  'photo-1606216794074-735e91aa2c92', // Braut Golden Hour
  'photo-1522673607200-164d1b6ce486', // Wedding couple
  'photo-1519741497674-611481863552', // Ring details
  'photo-1464207687429-7505649dae38', // First dance
  'photo-1525258946800-98cfd641d0de', // Bride at window
  'photo-1529634597503-139d3726fed5', // Couple in field
  'photo-1519225421980-715cb0215aed', // Brautstrauss
  'photo-1519167758481-83f550bb49b3', // Wedding detail
  'photo-1511285560929-80b456fea0bc', // Ceremony
]

const BUSINESS = [
  'photo-1573496359142-b8d87734a5a2', // Business woman
  'photo-1551836022-aadb801c60ae', // Editorial portrait
  'photo-1507003211169-0a1dd7228f2d', // Man in suit
  'photo-1494790108377-be9c29b29330', // Headshot
  'photo-1580489944761-15a19d654956', // Natural light female
  'photo-1438761681033-6461ffad8d80', // Portrait warm
  'photo-1544005313-94ddf0286df2', // Portrait
  'photo-1534528741775-53994a69daeb', // Warm portrait
]

const FAMILY = [
  'photo-1511895426328-dc8714191300', // Family field
  'photo-1511895426328-dc8714191300', // Family laugh
  'photo-1542810634-71277d95dcbb', // Family outdoor
  'photo-1542810634-71277d95dcbb', // Parents & child
]

const MATERNITY = [
  'photo-1555252333-9f8e92e65df9', // Maternity silhouette
  'photo-1516627145497-ae6968895b74', // Pregnant window
  'photo-1617103996702-96ff29b1c467', // Warm studio
  'photo-1617103996702-96ff29b1c467', // Studio warm
]

const PORTRAIT = [
  'photo-1524504388940-b1c1722653e1', // Editorial
  'photo-1531746020798-e6953c6e8e04', // Portrait warm
  'photo-1517841905240-472988babdf9', // Man portrait
  'photo-1487412720507-e7ab37603c6f', // Editorial woman
  'photo-1515886657613-9f3515b0c78f', // Studio portrait
]

type ImageSet = {
  hero: { src: string; alt: string }
  gallery: { src: string; alt: string; aspect?: 'portrait' | 'landscape' | 'square' }[]
}

const pickGallery = (
  ids: string[],
  altTemplate: (i: number) => string,
  genericAlt = 'Editorial Portrait in warmem Licht',
): ImageSet['gallery'] =>
  ids.slice(0, 9).map((id, i) => ({
    src: U(id, 1200),
    alt: altTemplate(i) || genericAlt,
    aspect: i % 3 === 0 ? 'portrait' : i % 3 === 1 ? 'landscape' : 'square',
  }))

export const tier1Images: Record<string, ImageSet> = {
  'hochzeitsfotograf-koeln': {
    hero: {
      src: U('photo-1606216794074-735e91aa2c92', 1400),
      alt: 'Braut im goldenen Nachmittagslicht am Rheinufer in Köln',
    },
    gallery: pickGallery(WEDDING, (i) => [
      'Brautpaar umarmt sich im warmen Nachmittagslicht',
      'Detailaufnahme goldene Eheringe auf Leinen',
      'Braut blickt aus sonnenlichtdurchflutetem Fenster',
      'Erster Tanz in Scheune mit Bistro-Lichtern',
      'Brautpaar im Weizenfeld zur Golden Hour',
      'Brautstrauß aus Pfingstrosen und Eukalyptus',
      'Standesamtliche Trauung mit Gästen',
      'Getting Ready — Braut im Spiegelbild',
      'Sektempfang am Nachmittag',
    ][i]),
  },

  'hochzeitsfotograf-euskirchen': {
    hero: {
      src: U('photo-1529634597503-139d3726fed5', 1400),
      alt: 'Brautpaar auf Burg Satzvey im Kreis Euskirchen',
    },
    gallery: pickGallery(WEDDING, (i) => [
      'Trauung auf Burg Satzvey im Kreis Euskirchen',
      'Brautpaar auf Burg Flamersheim bei Golden Hour',
      'Detailfoto Ringe in einem Eifel-Hochzeitsszenario',
      'Hochzeitsfeier in einer Euskirchener Burgscheune',
      'Braut beim Getting Ready im Hotel Ritterhof',
      'Brautstrauß aus regionalen Wildblumen',
      'Standesamt Euskirchen — erste Augenblicke als Paar',
      'Kirchliche Trauung im Kloster Steinfeld',
      'Erster Tanz mit Bistrolichtern',
    ][i]),
  },

  'bewerbungsfotos-koeln': {
    hero: {
      src: U('photo-1573496359142-b8d87734a5a2', 1400),
      alt: 'Professionelles Bewerbungsfoto in editorialem Licht',
    },
    gallery: pickGallery(BUSINESS, (i) => [
      'Bewerbungsfoto Business Consulting Köln',
      'LinkedIn-Headshot vor warmem Studiohintergrund',
      'Bewerbungsfoto für Kanzlei mit Anzug',
      'Professionelle Portraitaufnahme weiblich',
      'Corporate Portrait mit natürlichem Licht',
      'Bewerbungsbild Tech Branche Köln',
      'Headshot mit Environmental-Hintergrund',
      'Business Portrait im Lichtraum Studio',
    ][i]),
  },

  'bewerbungsfotos-euskirchen': {
    hero: {
      src: U('photo-1494790108377-be9c29b29330', 1400),
      alt: 'Bewerbungsfoto in warmem Studiolicht in Euskirchen',
    },
    gallery: pickGallery(BUSINESS, (i) => [
      'Bewerbungsfoto Azubi im Euskirchener Studio',
      'Professionelles Headshot für Verwaltung',
      'LinkedIn-Portrait mit Charakter',
      'Express-Bewerbungsfoto innerhalb 24 Stunden',
      'Outfit-Beratung für Bewerbungstermin',
      'Bewerbungsbild im Lichtraum Studio Euskirchen',
      'Corporate Headshot im neutralen Studiolicht',
      'Branchen-passendes Bewerbungsporträt',
    ][i]),
  },

  'fotograf-koeln': {
    hero: {
      src: U('photo-1522673607200-164d1b6ce486', 1400),
      alt: 'Editorial Paarportrait am Kölner Rheinufer',
    },
    gallery: pickGallery([...WEDDING.slice(0, 3), ...PORTRAIT.slice(0, 3), ...BUSINESS.slice(0, 3)], (i) => [
      'Hochzeit in Köln — Kranhäuser als Kulisse',
      'Portrait in Köln-Ehrenfeld Industrial Style',
      'Paarshooting am Stadtgarten Köln',
      'Editorial Portrait Rheinauhafen',
      'Familien-Shooting im Belgischen Viertel',
      'Business Portrait am Mediapark',
      'Hochzeitsfeier in der Flora Köln',
      'Environmental Portrait am Dom',
      'Personal Branding im Lichtraum Studio',
    ][i]),
  },

  'fotoshooting-koeln': {
    hero: {
      src: U('photo-1529634597503-139d3726fed5', 1400),
      alt: 'Paarshooting zur Golden Hour am Rheinufer',
    },
    gallery: pickGallery([...PORTRAIT, ...WEDDING.slice(0, 3), ...FAMILY.slice(0, 2)], (i) => [
      'Portrait-Shooting im Stadtgarten Köln',
      'Paar-Shooting am Rheinauhafen',
      'Familien-Shooting im Belgischen Viertel',
      'Personal-Branding-Shoot mit mehreren Outfits',
      'Editorial Portrait mit Available Light',
      'Lifestyle-Aufnahme an der Hohenzollernbrücke',
      'Schwangerschaftsshooting outdoor',
      'Couple Shoot in Köln-Ehrenfeld',
      'Familienbild im warmen Parklicht',
    ][i]),
  },

  'schwangerschaftsfotos-koeln': {
    hero: {
      src: U('photo-1555252333-9f8e92e65df9', 1400),
      alt: 'Babybauch-Shooting in warmem Studiolicht',
    },
    gallery: pickGallery([...MATERNITY, ...MATERNITY, 'photo-1516627145497-ae6968895b74'], (i) => [
      'Babybauch-Silhouette vor Fenster',
      'Werdende Mutter im warmen Seidenkleid',
      'Detail Babybauch mit Händen',
      'Paar erwartet Kind — Studio Shooting',
      'Babybauch outdoor zur Golden Hour',
      'Werdende Eltern mit Geschwisterkind',
      'Schwangerschaftsportrait editorial',
      'Intimes Babybauch-Portrait im Studiolicht',
      'Werdende Mutter am Fenster, Spitzenkleid',
    ][i]),
  },

  'businessfotograf-koeln': {
    hero: {
      src: U('photo-1507003211169-0a1dd7228f2d', 1400),
      alt: 'LinkedIn-Headshot für Kölner Business-Kundin',
    },
    gallery: pickGallery(BUSINESS, (i) => [
      'LinkedIn-Portrait für Beraterin in Köln',
      'Team-Shooting am Kölner Mediapark',
      'Personal Branding Shoot mit Laptop',
      'Business Headshot mit warmem Hintergrund',
      'Corporate Portrait für Kanzlei Köln',
      'Environmental Portrait in Büroräumen',
      'Portrait-Setting im Lichtraum Studio',
      'Headshot-Serie für Agentur-Website',
    ][i]),
  },
}
