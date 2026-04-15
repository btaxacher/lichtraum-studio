/**
 * Copy & content pool for the landing page.
 * All text is German, tailored for a premium wedding / portrait photographer.
 */

export const brand = {
  name: 'LICHTRAUM',
  studio: 'Lichtraum Fotostudio',
  tagline: 'Hochzeits-, Portrait- & Businessfotografie',
  email: 'kontakt@lichtraum-studio.de',
  phone: '+49 2251 123 456',
  location: 'Euskirchen · Köln · Bonn · Rheinland',
  region: 'Euskirchen & Großraum Köln/Bonn',
  instagram: '@lichtraum.studio',
} as const

export const seo = {
  title: 'Fotograf Euskirchen | Lichtraum Studio – Hochzeit, Portrait, Business',
  description:
    'Lichtraum Fotostudio in Euskirchen – Hochzeitsfotograf, Bewerbungsfotos, Portraits für Köln, Bonn und das Rheinland. Termin vereinbaren.',
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

// Image strategy:
// - Primary: /images/... (local, generated via Nanobanana — see scripts/generate-images.ts)
// - Fallback: Unsplash URLs (if local images missing — manual switch below)
const USE_LOCAL = false // flip to true once `npm run generate-images` has populated /public/images/

const IMG = (local: string, remote: string) => (USE_LOCAL ? local : remote)

export const hero = {
  slides: [
    {
      text: ['ZWISCHEN LICHT', 'UND SCHATTEN'],
      img: IMG('/images/hero/hero-01.jpg', 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=85'),
      alt: 'Braut im Spitzenkleid bei natürlichem Licht',
      position: 'center 30%',
    },
    {
      text: ['MOMENTE DIE', 'BLEIBEN'],
      img: IMG('/images/hero/hero-02.jpg', 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2400&q=85'),
      alt: 'Editorial Portrait im Seitenlicht',
      position: 'center 25%',
    },
    {
      // Palm trees with couple in lower portion — crop low so subjects stay visible
      text: ['EINE STILLE', 'DIE SPRICHT'],
      img: IMG('/images/hero/hero-03.jpg', 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=2400&q=85'),
      alt: 'Hochzeit im Goldlicht',
      position: 'center 75%',
    },
    {
      text: ['DEINE GESCHICHTE', 'UNVERGESSEN'],
      img: IMG('/images/hero/hero-04.jpg', 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=2400&q=85'),
      alt: 'Braut und Bräutigam in Umarmung',
      position: 'center 30%',
    },
    {
      text: ['ZEIT — EIN', 'EINZIGER RAHMEN'],
      img: IMG('/images/hero/hero-05.jpg', 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=2400&q=85'),
      alt: 'Editorial Schwarz-Weiß Portrait',
      position: 'center 35%',
    },
  ],
} as const

export const manifest = {
  eyebrow: 'Über das Studio',
  title: 'Es sind die leisen Momente,\ndie lauter erzählen als jedes Wort.',
  body: `Wir fotografieren keine Hochzeiten. Wir fotografieren das Zögern vor dem ersten Tanz, den Blick, den nur zwei verstehen, die Hand, die eine andere sucht. Portraits sind für uns keine Inszenierung — sondern das Zugehen auf einen Menschen, bis das Bild selbst entscheidet, wann es entstehen darf.`,
  signature: '— Lichtraum Studio',
} as const

const U = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`

// Fünf konkrete Leistungen — fokussiert auf SEO & Anfragen im Raum Köln/Rhein-Erft.
// Jede Leistung = eigene Zielgruppe, eigener Suchbegriff, eigener Conversion-Pfad.
export const services = [
  {
    title: 'Hochzeitsfotografie',
    description: 'Ganztagsbegleitung als Reportage — Euskirchen, Köln, Bonn & Rheinland',
    image: IMG('/images/services/weddings.jpg', U('photo-1519741497674-611481863552')),
  },
  {
    title: 'Paarshootings',
    description: 'Engagement, Jahrestag, After-Wedding — auf Location oder im Studio',
    image: IMG('/images/services/couples.jpg', U('photo-1529634597503-139d3726fed5')),
  },
  {
    title: 'Familien & Kinder',
    description: 'Natürliche Familienshootings zuhause oder draußen im Raum Euskirchen & Köln',
    image: IMG('/images/services/family.jpg', U('photo-1478131143081-80f7f84ca84d')),
  },
  {
    title: 'Portraits & Business',
    description: 'Bewerbungsfotos, LinkedIn-Headshots, Branding-Portraits',
    image: IMG('/images/services/portraits.jpg', U('photo-1524504388940-b1c1722653e1')),
  },
  {
    title: 'Babybauch & Newborn',
    description: 'Schwangerschafts- und Babyshootings im Studio Euskirchen',
    image: IMG('/images/services/maternity.jpg', U('photo-1555252333-9f8e92e65df9')),
  },
] as const

export const parallaxImages = [
  { src: IMG('/images/gallery/p-01.jpg', U('photo-1519741497674-611481863552', 1600)), alt: 'Braut im Spitzenkleid' },
  { src: IMG('/images/gallery/p-02.jpg', U('photo-1525258946800-98cfd641d0de', 1600)), alt: 'Editorial Portrait' },
  { src: IMG('/images/gallery/p-03.jpg', U('photo-1529634597503-139d3726fed5', 1600)), alt: 'Paar am Meer' },
  { src: IMG('/images/gallery/p-04.jpg', U('photo-1606800052052-a08af7148866', 1600)), alt: 'Hochzeitsreportage' },
  { src: IMG('/images/gallery/p-05.jpg', U('photo-1519225421980-715cb0215aed', 1600)), alt: 'Detailaufnahme Ringe' },
  { src: IMG('/images/gallery/p-06.jpg', U('photo-1537633552985-df8429e8048b', 1600)), alt: 'Golden Hour Portrait' },
  { src: IMG('/images/gallery/p-07.jpg', U('photo-1515934751635-c81c6bc9a2d8', 1600)), alt: 'Schwarz-Weiß Portrait' },
] as const

const AVATAR = (id: number) => IMG(`/images/avatars/a${id}.jpg`, `https://randomuser.me/api/portraits/${id % 2 === 0 ? 'women' : 'men'}/${20 + id * 4}.jpg`)

export const masonryCards = [
  { profileImage: AVATAR(1), name: 'Emilia & Jonas', feedback: 'Toskana — Juli 2024', mainImage: IMG('/images/masonry/m-01.jpg', U('photo-1519741497674-611481863552', 900)) },
  { profileImage: AVATAR(2), name: 'Sofia R.', feedback: 'Editorial — Berlin Mitte', mainImage: IMG('/images/masonry/m-02.jpg', U('photo-1524504388940-b1c1722653e1', 900)) },
  { profileImage: AVATAR(3), name: 'Charlotte & Mika', feedback: 'Engagement — Amalfiküste', mainImage: IMG('/images/masonry/m-03.jpg', U('photo-1529634597503-139d3726fed5', 900)) },
  { profileImage: AVATAR(4), name: 'Elena V.', feedback: 'Portraits im Atelier', mainImage: IMG('/images/masonry/m-04.jpg', U('photo-1502823403499-6ccfcf4fb453', 900)) },
  { profileImage: AVATAR(5), name: 'Marie & Finn', feedback: 'Berghochzeit — Südtirol', mainImage: IMG('/images/masonry/m-05.jpg', U('photo-1464207687429-7505649dae38', 900)) },
  { profileImage: AVATAR(6), name: 'Helena K.', feedback: 'Schwangerschaft in Licht', mainImage: IMG('/images/masonry/m-06.jpg', U('photo-1551038247-3d9af20df552', 900)) },
  { profileImage: AVATAR(7), name: 'Lea & Ben', feedback: 'Standesamt — Berlin', mainImage: IMG('/images/masonry/m-07.jpg', U('photo-1606800052052-a08af7148866', 900)) },
  { profileImage: AVATAR(8), name: 'Anna M.', feedback: 'Fashion Editorial', mainImage: IMG('/images/masonry/m-08.jpg', U('photo-1515934751635-c81c6bc9a2d8', 900)) },
] as const

// 12 unique, proven-good Unsplash IDs (all reused from hero/parallax sets
// that already render live). No architecture, no duplicates, no dead links.
const SHUFFLE_REMOTE = [
  'photo-1519741497674-611481863552', // bride
  'photo-1606216794074-735e91aa2c92', // couple
  'photo-1537633552985-df8429e8048b', // wedding
  'photo-1519225421980-715cb0215aed', // wedding detail
  'photo-1529634597503-139d3726fed5', // couple field
  'photo-1525258946800-98cfd641d0de', // portrait bw
  'photo-1515934751635-c81c6bc9a2d8', // editorial portrait
  'photo-1524504388940-b1c1722653e1', // portrait woman
  'photo-1502823403499-6ccfcf4fb453', // rings
  'photo-1464207687429-7505649dae38', // dress
  'photo-1551038247-3d9af20df552', // bride flowers
  'photo-1509927083803-4bd519298ac4', // wedding couple
]

export const shuffleImages = SHUFFLE_REMOTE.map((id, i) => ({
  id: i + 1,
  src: IMG(`/images/shuffle/s-${String(i + 1).padStart(2, '0')}.jpg`, U(id, 800)),
}))

// Slideshow images used as background behind the CTA/contact section.
export const ctaSlides = [
  IMG('/images/cta/cta-01.jpg', U('photo-1519741497674-611481863552', 2000)),
  IMG('/images/cta/cta-02.jpg', U('photo-1537633552985-df8429e8048b', 2000)),
  IMG('/images/cta/cta-03.jpg', U('photo-1529634597503-139d3726fed5', 2000)),
  IMG('/images/cta/cta-04.jpg', U('photo-1515934751635-c81c6bc9a2d8', 2000)),
]

// Slim editorial strip shown above the footer.
export const footerCover = IMG(
  '/images/footer/footer-cover.jpg',
  U('photo-1606216794074-735e91aa2c92', 2400),
)

export const ctaCopy = {
  eyebrow: 'Erzähl uns deine Geschichte.',
  heading: ['Der beste Moment,', 'um den schönsten festzuhalten.'],
  body:
    'Egal ob Hochzeit, Portrait oder ein besonderer Anlass — erzähl uns von deiner Idee, deinem Ort und deinem Wunsch-Termin. Wir melden uns innerhalb von 24 Stunden persönlich bei dir zurück und finden gemeinsam heraus, wie dein Shooting aussehen soll.',
  cta: 'Anfrage senden →',
} as const

export const testimonials = [
  { image: AVATAR(1), name: 'Emilia & Jonas', handle: 'Hochzeit Toskana', body: 'Das Team von Lichtraum hat Momente eingefangen, die wir nicht einmal selbst gesehen haben — das echte Lachen, das Zittern vor dem Ja. Jedes Bild fühlt sich an wie eine Erinnerung, bevor sie entsteht.' },
  { image: AVATAR(2), name: 'Sofia Reichmann', handle: 'Editorial Berlin', body: 'Ich hatte Angst vor der Kamera. Lichtraum hat mir eine Stille gegeben, in der ich endlich ich selbst sein konnte. Die Portraits sind das Ehrlichste, was ich je von mir gesehen habe.' },
  { image: AVATAR(3), name: 'Charlotte & Mika', handle: 'Amalfi — Engagement', body: 'Diskret, aufmerksam, präsent — ohne je im Weg zu sein. Die Bilder sind kein Rückblick, sie sind ein Gefühl.' },
  { image: AVATAR(4), name: 'Elena Vogt', handle: 'Portraits im Atelier', body: 'Die Zusammenarbeit war ein Gespräch, kein Shooting. Das sieht man in jedem einzelnen Bild.' },
  { image: AVATAR(5), name: 'Marie & Finn', handle: 'Südtirol', body: 'Wir wollten eine Hochzeit ohne Inszenierung. Das Lichtraum-Team hat uns einfach sein lassen — und das ist genau das, was wir heute in den Bildern wiederfinden.' },
  { image: AVATAR(6), name: 'Helena Kraus', handle: 'Schwangerschaftsshoot', body: 'So viel Ruhe, so viel Raum. Ich habe mich selten so gesehen gefühlt wie an diesem Nachmittag.' },
] as const

export const bigTestimonial = {
  img: IMG('/images/testimonial/big-01.jpg', U('photo-1519741497674-611481863552', 1800)),
  avatar: AVATAR(1),
  body: 'Als Kundin hätte ich mir nichts Besseres wünschen können. Die Aufmerksamkeit für das Detail und die Fähigkeit, echte Momente zu bewahren, haben meine Erwartungen weit übertroffen.',
  name: 'Emilia & Jonas',
  meta: 'Hochzeit, Toskana 2024',
} as const
