/**
 * Copy & content pool for the landing page.
 * All text is German, tailored for a premium wedding / portrait photographer.
 */

export const brand = {
  name: 'LUNA FERRIS',
  tagline: 'Hochzeits- & Portraitfotografie',
  email: 'kontakt@lunaferris.de',
  phone: '+49 30 123 456 78',
  location: 'Berlin — weltweit',
  instagram: '@lunaferris.studio',
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
    },
    {
      text: ['MOMENTE DIE', 'BLEIBEN'],
      img: IMG('/images/hero/hero-02.jpg', 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2400&q=85'),
      alt: 'Editorial Portrait im Seitenlicht',
    },
    {
      text: ['EINE STILLE', 'DIE SPRICHT'],
      img: IMG('/images/hero/hero-03.jpg', 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=2400&q=85'),
      alt: 'Hochzeit im Goldlicht',
    },
    {
      text: ['DEINE GESCHICHTE', 'UNVERGESSEN'],
      img: IMG('/images/hero/hero-04.jpg', 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=2400&q=85'),
      alt: 'Braut und Bräutigam in Umarmung',
    },
    {
      text: ['ZEIT — EIN', 'EINZIGER RAHMEN'],
      img: IMG('/images/hero/hero-05.jpg', 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=2400&q=85'),
      alt: 'Editorial Schwarz-Weiß Portrait',
    },
  ],
} as const

export const manifest = {
  eyebrow: 'Über mich',
  title: 'Es sind die leisen Momente,\ndie lauter erzählen als jedes Wort.',
  body: `Ich fotografiere keine Hochzeiten. Ich fotografiere das Zögern vor dem ersten Tanz, den Blick, den nur zwei verstehen, die Hand, die eine andere sucht. Portraits sind für mich keine Inszenierung — sondern das Zugehen auf einen Menschen, bis das Bild selbst entscheidet, wann es entstehen darf.`,
  signature: '— Luna',
} as const

const U = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`

export const services = [
  { title: 'Hochzeiten', description: 'Ganztagsbegleitung, Reportage & Editorial', image: IMG('/images/services/weddings.jpg', U('photo-1519741497674-611481863552')) },
  { title: 'Portraits', description: 'Editorial & Natural Light Sessions', image: IMG('/images/services/portraits.jpg', U('photo-1524504388940-b1c1722653e1')) },
  { title: 'Paarshootings', description: 'Engagement, Anniversary, „Just Us"', image: IMG('/images/services/couples.jpg', U('photo-1529634597503-139d3726fed5')) },
  { title: 'Editorial', description: 'Campaigns, Lookbooks, Fashion', image: IMG('/images/services/editorial.jpg', U('photo-1515934751635-c81c6bc9a2d8')) },
  { title: 'Destination', description: 'Italien, Südfrankreich, Marokko', image: IMG('/images/services/destination.jpg', U('photo-1464207687429-7505649dae38')) },
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

const SHUFFLE_REMOTE = [
  'photo-1469371670807-013ccf25f16a', 'photo-1523438885200-e635ba2c371e',
  'photo-1519741497674-611481863552', 'photo-1606216794074-735e91aa2c92',
  'photo-1537633552985-df8429e8048b', 'photo-1519225421980-715cb0215aed',
  'photo-1529634597503-139d3726fed5', 'photo-1525258946800-98cfd641d0de',
  'photo-1515934751635-c81c6bc9a2d8', 'photo-1524504388940-b1c1722653e1',
  'photo-1502823403499-6ccfcf4fb453', 'photo-1464207687429-7505649dae38',
  'photo-1551038247-3d9af20df552', 'photo-1606800052052-a08af7148866',
  'photo-1542996966-06cbafe4dc7c', 'photo-1505935428862-770b6f24f629',
]

export const shuffleImages = SHUFFLE_REMOTE.map((id, i) => ({
  id: i + 1,
  src: IMG(`/images/shuffle/s-${String(i + 1).padStart(2, '0')}.jpg`, U(id, 800)),
}))

export const trailImages = [
  'photo-1519741497674-611481863552', 'photo-1537633552985-df8429e8048b',
  'photo-1529634597503-139d3726fed5', 'photo-1515934751635-c81c6bc9a2d8',
  'photo-1606216794074-735e91aa2c92', 'photo-1524504388940-b1c1722653e1',
].map((id, i) => IMG(`/images/trail/t-0${i + 1}.jpg`, U(id, 400)))

export const testimonials = [
  { image: AVATAR(1), name: 'Emilia & Jonas', handle: 'Hochzeit Toskana', body: 'Luna hat Momente eingefangen, die wir nicht einmal selbst gesehen haben — das echte Lachen, das Zittern vor dem Ja. Jedes Bild fühlt sich an wie eine Erinnerung, bevor sie entsteht.' },
  { image: AVATAR(2), name: 'Sofia Reichmann', handle: 'Editorial Berlin', body: 'Ich hatte Angst vor der Kamera. Luna hat mir eine Stille gegeben, in der ich endlich ich selbst sein konnte. Die Portraits sind das Ehrlichste, was ich je von mir gesehen habe.' },
  { image: AVATAR(3), name: 'Charlotte & Mika', handle: 'Amalfi — Engagement', body: 'Diskret, aufmerksam, präsent — ohne je im Weg zu sein. Die Bilder sind kein Rückblick, sie sind ein Gefühl.' },
  { image: AVATAR(4), name: 'Elena Vogt', handle: 'Portraits im Atelier', body: 'Die Zusammenarbeit war ein Gespräch, kein Shooting. Das sieht man in jedem einzelnen Bild.' },
  { image: AVATAR(5), name: 'Marie & Finn', handle: 'Südtirol', body: 'Wir wollten eine Hochzeit ohne Inszenierung. Luna hat uns einfach sein lassen — und das ist genau das, was wir heute in den Bildern wiederfinden.' },
  { image: AVATAR(6), name: 'Helena Kraus', handle: 'Schwangerschaftsshoot', body: 'So viel Ruhe, so viel Raum. Ich habe mich selten so gesehen gefühlt wie an diesem Nachmittag.' },
] as const

export const bigTestimonial = {
  img: IMG('/images/testimonial/big-01.jpg', U('photo-1519741497674-611481863552', 1800)),
  avatar: AVATAR(1),
  body: 'Als Kundin hätte ich mir nichts Besseres wünschen können. Die Aufmerksamkeit für das Detail und die Fähigkeit, echte Momente zu bewahren, haben meine Erwartungen weit übertroffen.',
  name: 'Emilia & Jonas',
  meta: 'Hochzeit, Toskana 2024',
} as const
