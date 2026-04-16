/**
 * Copy & content pool for the Lichtraum Fotostudio landing page.
 * All text is German, tailored for a premium wedding / portrait photographer.
 *
 * Redesign "Warm Editorial Light" — Du-Ansprache, substanzielle Texte.
 */

export const brand = {
  name: 'LICHTRAUM',
  studio: 'Lichtraum Fotostudio',
  tagline: 'Hochzeits-, Portrait- & Businessfotografie',
  email: 'kontakt@lichtraum-studio.de',
  contactEmail: 'info@kandivo.de', // Formular-Ziel (via Web3Forms)
  phone: '+49 2251 123 456',
  location: 'Euskirchen · Köln · Bonn · Rheinland',
  region: 'Euskirchen & Großraum Köln/Bonn',
  instagram: '@lichtraum.studio',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Fotostudio+Euskirchen',
} as const

export const seo = {
  title: 'Fotograf Euskirchen | Lichtraum Studio – Hochzeit, Portrait, Business',
  description:
    'Lichtraum Fotostudio — Fotograf in Euskirchen für Hochzeiten, Bewerbungsfotos und Portraits in Köln, Bonn & NRW. Ehrlich fotografiert, warm erzählt. Termine 2026/27 jetzt anfragen.',
  keywords: [
    'Fotograf Euskirchen',
    'Fotostudio Euskirchen',
    'Hochzeitsfotograf Euskirchen',
    'Bewerbungsfotos Euskirchen',
    'Hochzeitsfotograf Köln',
    'Bewerbungsfotos Köln',
    'Fotograf Köln',
    'Fotograf Bonn',
    'Portraitfotograf Köln',
    'Babyfotograf Köln',
    'Businessfotograf Köln',
    'Schwangerschaftsfotos Köln',
  ],
} as const

// ================================================================
// IMAGE STRATEGY
// ================================================================
// - Primary: /images/redesign/* (Nanobanana, warm Kodak Portra 400)
// - Fallback: Unsplash URLs mit warm-light IDs (bis Nanobanana ausgeführt)
// Nach Nanobanana-Run: USE_LOCAL = true flippen.
const USE_LOCAL = false

const IMG = (local: string, remote: string) => (USE_LOCAL ? local : remote)

const U = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`

// Warm-Light Unsplash IDs — cohärente Portra 400 Palette
const WARM_UNSPLASH = {
  heroBride: 'photo-1606216794074-735e91aa2c92',        // Braut Golden Hour
  studioDetail: 'photo-1606800052052-a08af7148866',     // Detail shot
  serviceHochzeit: 'photo-1522673607200-164d1b6ce486',  // Wedding couple
  serviceBusiness: 'photo-1573496359142-b8d87734a5a2',  // Business portrait
  serviceFamilie: 'photo-1511895426328-dc8714191300',   // Family
  serviceBabybauch: 'photo-1555252333-9f8e92e65df9',    // Maternity
  gallery01: 'photo-1606216794074-735e91aa2c92',
  gallery02: 'photo-1519741497674-611481863552',
  gallery03: 'photo-1525258946800-98cfd641d0de',
  gallery04: 'photo-1511895426328-dc8714191300',
  gallery05: 'photo-1529634597503-139d3726fed5',
  gallery06: 'photo-1573496359142-b8d87734a5a2',
  gallery07: 'photo-1555252333-9f8e92e65df9',
  gallery08: 'photo-1519225421980-715cb0215aed',
  gallery09: 'photo-1464207687429-7505649dae38',
  avatarEmilia: 'photo-1499399244875-59ef3e1347e1',
  avatarSofia: 'photo-1573496359142-b8d87734a5a2',
  avatarMarie: 'photo-1529634597503-139d3726fed5',
  blog01: 'photo-1519741497674-611481863552',
  blog02: 'photo-1524504388940-b1c1722653e1',
  blog03: 'photo-1606800052052-a08af7148866',
  studioInterior: 'photo-1617103996702-96ff29b1c467',
}

// ================================================================
// HERO — Single image, no slider
// ================================================================
export const heroContent = {
  kicker: 'EUSKIRCHEN · KÖLN · BONN · RHEINLAND',
  script: 'Schön, dass du da bist.',
  h1: ['Fotograf Euskirchen', 'für Köln, Bonn & das Rheinland'], // SEO-critical, unverändert
  body:
    'Hochzeiten, Bewerbungsfotos, Portraits & Familienmomente — ehrlich fotografiert, warm erzählt. Ohne Inszenierung, mit viel Raum für euch. Termine für 2026 und 2027 jetzt anfragen.',
  primaryCta: { label: 'Termin anfragen', href: '#contact' },
  secondaryCta: { label: 'Unsere Arbeit ansehen', href: '#gallery' },
  trustItems: [
    'Antwort innerhalb 24 Stunden',
    'Faire Festpreise ab 290 €',
    'Über 120 Hochzeiten begleitet',
  ],
  image: {
    src: IMG('/images/redesign/hero-bride-golden-hour.jpg', U(WARM_UNSPLASH.heroBride, 1600)),
    alt: 'Braut im Weizenfeld bei Golden Hour im Rheinland',
  },
} as const

// ================================================================
// INTRO GREETING — persönliche Begrüßung (ersetzt Manifest)
// ================================================================
export const introContent = {
  kicker: 'HALLO',
  script: 'Hallo, schön dich kennenzulernen.',
  h2: 'Wir sind Lichtraum. Und wir glauben an Bilder, die bleiben.',
  body: [
    'Wir sind ein kleines Fotograf:innen-Team aus dem Rheinland — zuhause in Euskirchen, unterwegs in Köln, Bonn und überall dort, wo eure Geschichte passiert. Seit über sechs Jahren begleiten wir Hochzeiten, fotografieren Familien, machen Bewerbungsfotos, die wirklich wie ihr aussehen — und keine Katalog-Version.',
    'Was uns unterscheidet: Wir lassen euch sein. Keine gestellten Posen, keine einstudierten Blicke. Stattdessen ein Gespräch, ein bisschen Zeit, und irgendwann entstehen die Bilder fast von allein. Das, was ihr auf unseren Fotos seht, seid wirklich ihr — am wärmsten Tag eures Jahres.',
  ],
  signature: '— Vanessa & Team',
  link: { label: 'Unsere Geschichte lesen', href: '/ueber-uns' },
  image: {
    src: IMG('/images/redesign/studio-detail-hands.jpg', U(WARM_UNSPLASH.studioDetail, 1200)),
    alt: 'Detailaufnahme: Hände halten Hasselblad-Kamera im warmen Studiolicht',
  },
} as const

// ================================================================
// SERVICES GRID — 4 visuelle Cards (ersetzt Accordion)
// ================================================================
export const servicesGrid = [
  {
    eyebrow: 'AB 1.790 €',
    title: 'Hochzeit',
    subtitle: 'Ganztagsbegleitung in Euskirchen, Köln, Bonn & Rheinland',
    href: '/hochzeitsfotograf-koeln',
    image: IMG('/images/redesign/service-hochzeit.jpg', U(WARM_UNSPLASH.serviceHochzeit, 1200)),
    alt: 'Brautpaar umarmt sich im warmen Nachmittagslicht',
  },
  {
    eyebrow: 'AB 129 €',
    title: 'Bewerbung & Business',
    subtitle: 'Bewerbungsfotos, LinkedIn-Headshots, Personal Branding — Studio Euskirchen',
    href: '/bewerbungsfotos-koeln',
    image: IMG('/images/redesign/service-business.jpg', U(WARM_UNSPLASH.serviceBusiness, 1200)),
    alt: 'Professionelle Frau im cremefarbenen Blazer in editorialem Portraitlicht',
  },
  {
    eyebrow: 'AB 290 €',
    title: 'Familien',
    subtitle: 'Draußen oder im Studio — für alle, die lachend nach Hause gehen',
    href: '/fotoshooting-koeln',
    image: IMG('/images/redesign/service-familie.jpg', U(WARM_UNSPLASH.serviceFamilie, 1200)),
    alt: 'Junge Familie läuft Hand in Hand durch ein sonnenverwöhntes Weizenfeld',
  },
  {
    eyebrow: 'AB 290 €',
    title: 'Babybauch',
    subtitle: 'Schwangerschafts- und Newborn-Shootings im Studio Euskirchen',
    href: '/schwangerschaftsfotos-koeln',
    image: IMG('/images/redesign/service-babybauch.jpg', U(WARM_UNSPLASH.serviceBabybauch, 1200)),
    alt: 'Schwangere Frau im fließenden Seidenkleid vor warmer Studiowand',
  },
] as const

export const servicesGridHeader = {
  kicker: 'LEISTUNGEN',
  script: 'Was wir lieben.',
  h2: 'Vier Momente, die wir für euch festhalten.',
  subline:
    'Jedes Shooting ist anders. Sucht euch aus, was zu euch passt — oder schreibt uns für etwas ganz Eigenes. Preise transparent, keine versteckten Kosten.',
} as const

// ================================================================
// GALLERY — 9-Bilder Masonry mit spezifischen Col/Row-Spans
// ================================================================
export const galleryItems = [
  {
    src: IMG('/images/redesign/gallery-01-kiss.jpg', U(WARM_UNSPLASH.gallery01, 1600)),
    alt: 'Erster Kuss eines Hochzeitspaars im goldenen Nachmittagslicht',
    span: 'col-span-2 row-span-2', // groß
    width: 1600,
    height: 2000,
  },
  {
    src: IMG('/images/redesign/gallery-02-rings.jpg', U(WARM_UNSPLASH.gallery02, 1200)),
    alt: 'Detailaufnahme goldene Eheringe auf Leinen mit Eukalyptus',
    span: 'col-span-1 row-span-1',
    width: 1200,
    height: 1200,
  },
  {
    src: IMG('/images/redesign/gallery-03-bride.jpg', U(WARM_UNSPLASH.gallery03, 1200)),
    alt: 'Braut im Profil blickt aus einem sonnenlichtdurchfluteten Fenster',
    span: 'col-span-1 row-span-2',
    width: 1200,
    height: 1600,
  },
  {
    src: IMG('/images/redesign/gallery-04-family.jpg', U(WARM_UNSPLASH.gallery04, 1200)),
    alt: 'Elternteil hebt Kleinkind lachend in die Luft',
    span: 'col-span-1 row-span-1',
    width: 1200,
    height: 1200,
  },
  {
    src: IMG('/images/redesign/gallery-05-couple-field.jpg', U(WARM_UNSPLASH.gallery05, 1800)),
    alt: 'Paar läuft Hand in Hand durch ein Weizenfeld zur goldenen Stunde',
    span: 'col-span-2 row-span-1',
    width: 1800,
    height: 1200,
  },
  {
    src: IMG('/images/redesign/gallery-06-business.jpg', U(WARM_UNSPLASH.gallery06, 1200)),
    alt: 'Mann im cremefarbenen Strickpullover im warmen Studiolicht',
    span: 'col-span-1 row-span-1',
    width: 1200,
    height: 1200,
  },
  {
    src: IMG('/images/redesign/gallery-07-maternity.jpg', U(WARM_UNSPLASH.gallery07, 1200)),
    alt: 'Silhouette einer schwangeren Frau vor einem sanft beleuchteten Fenster',
    span: 'col-span-1 row-span-2',
    width: 1200,
    height: 1600,
  },
  {
    src: IMG('/images/redesign/gallery-08-flowers.jpg', U(WARM_UNSPLASH.gallery08, 1200)),
    alt: 'Brautstrauß aus cremefarbenen Pfingstrosen, Eukalyptus und Weizen',
    span: 'col-span-1 row-span-1',
    width: 1200,
    height: 1200,
  },
  {
    src: IMG('/images/redesign/gallery-09-firstdance.jpg', U(WARM_UNSPLASH.gallery09, 1800)),
    alt: 'Erster Tanz in einer sanft beleuchteten Scheune mit Bistro-Lichtern',
    span: 'col-span-2 row-span-1',
    width: 1800,
    height: 1200,
  },
] as const

export const galleryHeader = {
  kicker: 'GALERIE',
  h2: 'Jeder Moment sucht sein Bild.',
  portfolioLink: { label: 'Komplettes Portfolio ansehen', href: '/portfolio' },
} as const

// ================================================================
// TESTIMONIALS — 6 Stück (Marquee-Effekt behalten, Warm Palette)
// Bug-Fix: Duplikation nur einmal für Infinite-Loop, nicht 7-fach.
// ================================================================
export const testimonialsNew = [
  {
    body:
      'Wir wollten keine gestellte Hochzeit auf Fotos — sondern uns. Lichtraum hat genau das geschafft. Jedes Bild fühlt sich an wie eine Erinnerung, die gerade entsteht.',
    name: 'Emilia & Jonas',
    meta: 'Hochzeit · Burg Satzvey · 2025',
    avatar: IMG('/images/redesign/avatar-emilia.jpg', U(WARM_UNSPLASH.avatarEmilia, 400)),
  },
  {
    body:
      'Ich hatte furchtbare Angst vor dem Shooting — Bewerbungsfotos haben sich für mich nie gut angefühlt. Bei Lichtraum saß ich zehn Minuten später mit einem Kaffee in der Hand und hab gelacht. Die Fotos haben mir meinen Job besorgt.',
    name: 'Sofia Reichmann',
    meta: 'Bewerbungsshooting · Euskirchen · 2025',
    avatar: IMG('/images/redesign/avatar-sofia.jpg', U(WARM_UNSPLASH.avatarSofia, 400)),
  },
  {
    body:
      'Unsere Zwillinge waren gerade zwei Monate alt — und ich hatte keine Energie für ein gestelltes Shooting. Lichtraum kam zu uns nach Hause, hat drei Stunden einfach mitgelebt und uns dabei fotografiert. Es sind die schönsten Bilder, die wir von unserer Familie haben.',
    name: 'Marie & Finn',
    meta: 'Familienshooting · Köln · 2026',
    avatar: IMG('/images/redesign/avatar-marie.jpg', U(WARM_UNSPLASH.avatarMarie, 400)),
  },
  {
    body:
      'Diskret, aufmerksam, präsent — ohne je im Weg zu sein. Die Bilder sind kein Rückblick, sie sind ein Gefühl.',
    name: 'Charlotte & Mika',
    meta: 'Engagement · Bonn · 2025',
    avatar: IMG('/images/redesign/avatar-emilia.jpg', U(WARM_UNSPLASH.avatarEmilia, 400)),
  },
  {
    body:
      'Die Zusammenarbeit war ein Gespräch, kein Shooting. Das sieht man in jedem einzelnen Bild.',
    name: 'Elena Vogt',
    meta: 'Portraits im Studio · 2025',
    avatar: IMG('/images/redesign/avatar-sofia.jpg', U(WARM_UNSPLASH.avatarSofia, 400)),
  },
  {
    body:
      'So viel Ruhe, so viel Raum. Ich habe mich selten so gesehen gefühlt wie an diesem Nachmittag.',
    name: 'Helena Kraus',
    meta: 'Schwangerschaftsshooting · Euskirchen · 2025',
    avatar: IMG('/images/redesign/avatar-marie.jpg', U(WARM_UNSPLASH.avatarMarie, 400)),
  },
] as const

export const testimonialsHeader = {
  kicker: 'LIEBE WORTE',
  script: 'Was unsere Paare sagen.',
  h2: 'Über 120 Hochzeiten. Hunderte ehrliche Sätze.',
} as const

export const trustBadges = [
  '4,9 ★★★★★ Google',
  '120+ Hochzeiten',
  'Seit 2019',
  'Euskirchen & NRW',
] as const

// ================================================================
// PRICING — 3 Pakete (Charcoal Section)
// ================================================================
export const pricingHeader = {
  kicker: 'PREISE',
  script: 'Transparent, fair, ohne Überraschungen.',
  h2: 'Drei Pakete. Oder etwas ganz Eigenes.',
  subline:
    'Alle Preise inkl. Nachbearbeitung, Online-Galerie und Nutzungsrechte. Anreise innerhalb NRW kostenfrei.',
} as const

export const pricingCards = [
  {
    price: 'ab 129 €',
    title: 'Bewerbung · LinkedIn · Branding',
    category: 'Portrait & Business',
    features: [
      '30 Min. Studio-Shooting Euskirchen',
      '5 bearbeitete digitale Fotos',
      'Outfit-Beratung vorab',
      'Express-Lieferung 48 h',
    ],
    cta: { label: 'Termin anfragen', href: '#contact' },
    highlight: false,
  },
  {
    price: 'ab 290 €',
    title: 'Familien · Paar · Schwangerschaft',
    category: 'Familien & Portraits',
    features: [
      '90 Min. Shooting draußen oder im Studio',
      '25 bearbeitete digitale Fotos',
      'Persönliche Beratung vorab',
      'Online-Galerie zum Teilen',
      'Print-Upgrade optional',
    ],
    cta: { label: 'Termin anfragen', href: '#contact' },
    highlight: true,
    badge: 'BELIEBT',
  },
  {
    price: 'ab 1.790 €',
    title: 'Ganztags-Reportage',
    category: 'Hochzeit',
    features: [
      '8 h Begleitung (Vorbereitung bis Abendstimmung)',
      '400+ bearbeitete Fotos',
      'Kennenlern-Gespräch + Locations-Check',
      'Premium Online-Galerie',
      'Zweitfotograf:in optional',
    ],
    cta: { label: 'Unverbindlich anfragen', href: '#contact' },
    highlight: false,
  },
] as const

export const pricingFooter = {
  text: 'Etwas Spezielles im Sinn?',
  linkLabel: 'Lass uns reden',
  linkHref: '#contact',
} as const

// ================================================================
// JOURNAL — 3 Blog-Cards
// ================================================================
export const journalHeader = {
  kicker: 'JOURNAL',
  h2: 'Geschichten, Guides & Hochzeits-Tipps.',
  subline:
    'Von schönen Hochzeitslocations im Rheinland bis zu Outfit-Guides für Bewerbungsfotos.',
  allLink: { label: 'Alle Artikel lesen', href: '/blog' },
} as const

export const journalCards = [
  {
    category: 'LOCATIONS',
    title: 'Die 7 schönsten Hochzeitslocations im Rheinland',
    readTime: '8 Min. Lesezeit',
    href: '/blog/hochzeitslocations-rheinland',
    image: IMG('/images/redesign/blog-01-locations.jpg', U(WARM_UNSPLASH.blog01, 1400)),
    alt: 'Schöne Hochzeitslocation im Rheinland bei goldenem Abendlicht',
  },
  {
    category: 'GUIDE',
    title: 'Das perfekte Outfit für dein Bewerbungsshooting',
    readTime: '5 Min. Lesezeit',
    href: '/blog/outfit-bewerbungsshooting',
    image: IMG('/images/redesign/blog-02-outfit.jpg', U(WARM_UNSPLASH.blog02, 1400)),
    alt: 'Flat-Lay eines professionellen Bewerbungs-Outfits auf Leinen',
  },
  {
    category: 'HOCHZEIT',
    title: 'Getting-Ready: So läuft der Morgen eurer Hochzeit',
    readTime: '6 Min. Lesezeit',
    href: '/blog/getting-ready-hochzeit',
    image: IMG('/images/redesign/blog-03-preparation.jpg', U(WARM_UNSPLASH.blog03, 1400)),
    alt: 'Braut beim Getting-Ready im sanften Morgenlicht',
  },
] as const

// ================================================================
// STUDIO / LOCATION
// ================================================================
export const studioContent = {
  kicker: 'DAS STUDIO',
  script: 'Hier entstehen Bilder.',
  h2: 'Unser Studio in Euskirchen — und zuhause, wo ihr es wünscht.',
  body:
    'Unser Fotostudio in Euskirchen ist hell, warm und klein genug, um euch nicht zu erschlagen. Ein paar Meter weiter liegt der Rhein-Erft-Kreis, nach Köln sind es 40 Minuten, nach Bonn 35. Für Hochzeiten und Familienshootings kommen wir zu euch — ob Rheinaue, Altenberger Dom, das Weingut bei Bonn oder euer Garten in Weilerswist.',
  infoGrid: [
    {
      icon: 'MapPin',
      label: 'Standort',
      text: 'Besuche nach Terminvereinbarung\n53919 Weilerswist / Euskirchen',
    },
    {
      icon: 'Clock',
      label: 'Erreichbarkeit',
      text: 'Mo–Fr 9–19 Uhr\nSa nach Vereinbarung',
    },
    {
      icon: 'Car',
      label: 'Anfahrt',
      text: '5 Min. A1 / A61\nParken direkt am Studio',
    },
  ],
  mapsCta: { label: 'Google Maps öffnen', href: brand.mapsUrl },
  image: {
    src: IMG('/images/redesign/studio-interior.jpg', U(WARM_UNSPLASH.studioInterior, 1400)),
    alt: 'Warmes Fotostudio-Interieur mit Holzboden, Leinwand-Hintergrund und Hasselblad-Kamera',
  },
} as const

// ================================================================
// FAQ — 6 Fragen
// ================================================================
export const faqHeader = {
  kicker: 'FRAGEN',
  h2: 'Wichtigste Fragen, kurz beantwortet.',
} as const

export const faqs = [
  {
    q: 'Wie läuft ein Hochzeitsshooting bei euch ab?',
    a: 'Wir starten immer mit einem unverbindlichen Kennenlernen — persönlich, per Video oder am Telefon. Ihr erzählt uns von eurem Tag, wir schlagen Zeitfenster und Locations vor. Am Hochzeitstag selbst sind wir bis zum Abendessen dabei, dokumentieren still — ohne Posen-Marathon. 4–6 Wochen später bekommt ihr eure Online-Galerie und eine handgefertigte USB-Box.',
  },
  {
    q: 'Was kosten Bewerbungsfotos bei euch?',
    a: 'Unser Standard-Paket für Bewerbungsfotos in Euskirchen startet bei 129 € — inklusive 30 Minuten Studio-Shooting, 5 bearbeiteten Bildern und Express-Lieferung in 48 Stunden. Für LinkedIn-Headshots oder Personal-Branding-Serien gibt es erweiterte Pakete ab 249 €.',
  },
  {
    q: 'Kommt ihr auch nach Köln, Bonn oder Düsseldorf?',
    a: 'Ja, immer. Anreise innerhalb NRW ist bei allen Paketen kostenfrei. Für Deutschland-weite Hochzeiten sprechen wir über eine faire Anreise-Pauschale — kein Aufschlag pro Kilometer.',
  },
  {
    q: 'Wie lange dauert es, bis wir unsere Fotos bekommen?',
    a: 'Bewerbungsfotos innerhalb von 48 Stunden. Portraits und Familienshootings in 2–3 Wochen. Hochzeiten in 4–6 Wochen. Ein paar „Preview-Fotos" bekommt ihr immer schon 48 Stunden nach dem Shoot — als kleines Andenken, bevor der Rest kommt.',
  },
  {
    q: 'Wir sind keine Profis vor der Kamera. Müssen wir posen?',
    a: 'Nein. Ehrlich. Unsere Arbeitsweise ist bewusst ruhig — wir geben euch ein paar sanfte Impulse (wohin schauen, wie stehen), aber die Posen-Regie ersparen wir euch. Die besten Bilder entstehen meistens, wenn ihr uns gerade vergesst.',
  },
  {
    q: 'Können wir die Bilder kommerziell nutzen?',
    a: 'Für alle Pakete gilt: ihr bekommt volle private Nutzungsrechte. Bei Business- und Branding-Shootings sind kommerzielle Rechte im Preis enthalten. Für Werbe-Nutzung in großem Rahmen sprechen wir individuell.',
  },
] as const

// ================================================================
// CONTACT FORM
// ================================================================
export const contactContent = {
  kicker: 'KONTAKT',
  script: 'Erzähl uns deine Geschichte.',
  h2: 'Der beste Moment, um den schönsten festzuhalten.',
  body:
    'Egal ob Hochzeit 2027, Bewerbungsfoto nächste Woche oder das erste Familienshooting — erzähl uns, was du im Kopf hast. Wir melden uns innerhalb von 24 Stunden zurück. Versprochen.',
  contactList: [
    { icon: 'Mail', label: 'kontakt@fotograf-euskirchen.de', href: 'mailto:kontakt@fotograf-euskirchen.de' },
    { icon: 'Phone', label: '02251 · 123 456  (Sipgate)', href: 'tel:+4922511234560' },
    { icon: 'MapPin', label: 'Euskirchen · Köln · Bonn · Rheinland' },
    { icon: 'Instagram', label: '@lichtraum.studio', href: 'https://instagram.com/lichtraum.studio' },
  ],
  shootingTypes: [
    'Hochzeit',
    'Bewerbungsfotos',
    'Familie',
    'Babybauch',
    'Portrait / Business',
    'Etwas anderes',
  ],
  successMessage: 'Danke, wir melden uns innerhalb 24 Stunden!',
} as const

// ================================================================
// FOOTER
// ================================================================
export const footerContent = {
  brandName: 'Lichtraum',
  brandSub: 'Fotostudio',
  tagline: 'Fotograf in Euskirchen.\nHochzeit, Portrait, Business —\nehrlich fotografiert, warm erzählt.',
  servicesColumn: {
    title: 'Leistungen',
    links: [
      { label: 'Hochzeit Köln', href: '/hochzeitsfotograf-koeln' },
      { label: 'Hochzeit Euskirchen', href: '/hochzeitsfotograf-euskirchen' },
      { label: 'Bewerbungsfotos Köln', href: '/bewerbungsfotos-koeln' },
      { label: 'Bewerbungsfotos Euskirchen', href: '/bewerbungsfotos-euskirchen' },
      { label: 'Fotoshooting Köln', href: '/fotoshooting-koeln' },
      { label: 'Fotograf Köln', href: '/fotograf-koeln' },
      { label: 'Babybauch Köln', href: '/schwangerschaftsfotos-koeln' },
    ],
  },
  navColumn: {
    title: 'Navigation',
    links: [
      { label: 'Studio', href: '#studio' },
      { label: 'Journal', href: '/blog' },
      { label: 'Preise', href: '#pricing' },
      { label: 'Kontakt', href: '#contact' },
      { label: 'Impressum', href: '/impressum' },
      { label: 'Datenschutz', href: '/datenschutz' },
    ],
  },
  copyright: '© 2026 Lichtraum Fotostudio · Inhaberin: Vanessa T. · Weilerswist',
  social: [
    { icon: 'Instagram', href: 'https://instagram.com/lichtraum.studio', label: 'Instagram' },
    { icon: 'Pinterest', href: 'https://pinterest.com/lichtraum.studio', label: 'Pinterest' },
  ],
} as const

// ================================================================
// LEGACY EXPORTS — noch benötigt von alten Komponenten
// Entfernen in Phase 13, wenn alle Sections migriert.
// ================================================================

export const hero = {
  slides: [
    {
      text: ['ZWISCHEN LICHT', 'UND SCHATTEN'],
      img: IMG('/images/hero/hero-01.jpg', U('photo-1519741497674-611481863552', 2400)),
      alt: 'Braut im Spitzenkleid bei natürlichem Licht',
      position: 'center 30%',
    },
  ],
} as const

export const manifest = {
  eyebrow: 'Über das Studio',
  title: 'Es sind die leisen Momente,\ndie lauter erzählen als jedes Wort.',
  body: `Wir fotografieren keine Hochzeiten. Wir fotografieren das Zögern vor dem ersten Tanz.`,
  signature: '— Lichtraum Studio',
} as const

export const services = servicesGrid.map((s) => ({
  title: s.title,
  description: s.subtitle,
  image: s.image,
})) as readonly { title: string; description: string; image: string }[]

export const parallaxImages = galleryItems.slice(0, 7).map((g) => ({
  src: g.src,
  alt: g.alt,
})) as readonly { src: string; alt: string }[]

const AVATAR = (i: number) =>
  IMG(`/images/avatars/a${i}.jpg`, U(WARM_UNSPLASH.avatarEmilia, 400))

export const masonryCards = testimonialsNew.slice(0, 6).map((t, i) => ({
  profileImage: t.avatar,
  name: t.name,
  feedback: t.meta,
  mainImage: galleryItems[i % galleryItems.length].src,
})) as readonly { profileImage: string; name: string; feedback: string; mainImage: string }[]

export const shuffleImages = galleryItems.slice(0, 8).map((g, i) => ({
  id: i + 1,
  src: g.src,
})) as readonly { id: number; src: string }[]

export const ctaSlides: readonly string[] = [
  heroContent.image.src,
  galleryItems[0].src,
  galleryItems[4].src,
  galleryItems[8].src,
]

export const footerCover = galleryItems[4].src

export const ctaCopy = {
  eyebrow: contactContent.kicker,
  heading: contactContent.h2.split(', '),
  body: contactContent.body,
  cta: 'Anfrage senden →',
} as const

export const testimonials = testimonialsNew.map((t) => ({
  image: t.avatar,
  name: t.name,
  handle: t.meta,
  body: t.body,
})) as readonly { image: string; name: string; handle: string; body: string }[]

export const bigTestimonial = {
  img: galleryItems[0].src,
  avatar: testimonialsNew[0].avatar,
  body: testimonialsNew[0].body,
  name: testimonialsNew[0].name,
  meta: testimonialsNew[0].meta,
} as const
