/**
 * Portfolio image list — 24 kurierte Bilder aus Hochzeit, Portrait, Business, Familie, Babybauch.
 * V3: Vollständig migriert auf lokale Nano-Banana-Bilder.
 *
 * Pools: /images/wedding/, /images/portfolio/, /images/family/, /images/redesign/, /images/jobs/
 * Jedes Bild im Masonry-Grid: uniform aspect-[4/5], responsive 2/3/4-col.
 */

export type PortfolioItem = {
  src: string
  alt: string
  category: 'hochzeit' | 'portrait' | 'business' | 'familie' | 'babybauch' | 'studio'
  span?: 'large' | 'medium' | 'small'
}

export const portfolioItems: PortfolioItem[] = [
  { src: '/images/wedding/01-paar-rheinaue.jpg', alt: 'Brautpaar Hand in Hand im Rheinaue-Park bei Golden Hour', category: 'hochzeit', span: 'large' },
  { src: '/images/wedding/04-ringe-eukalyptus.jpg', alt: 'Detailaufnahme goldene Eheringe auf Eukalyptus', category: 'hochzeit', span: 'small' },
  { src: '/images/wedding/12-lichtspiel-schleier.jpg', alt: 'Braut im Schleier-Lichtspiel am Fenster', category: 'hochzeit', span: 'medium' },
  { src: '/images/family/03-papa-kind.jpg', alt: 'Vater hebt lachendes Kleinkind in die Luft', category: 'familie', span: 'small' },
  { src: '/images/wedding/02-erster-kuss-feld.jpg', alt: 'Erster Kuss im Weizenfeld zur goldenen Stunde', category: 'hochzeit', span: 'large' },
  { src: '/images/portfolio/06-business-founder.jpg', alt: 'Startup-Gründerin — Business-Portrait im warmen Licht', category: 'business', span: 'small' },
  { src: '/images/family/04-maternity-studio.jpg', alt: 'Schwangerschafts-Silhouette vor sanftem Fensterlicht', category: 'babybauch', span: 'medium' },
  { src: '/images/wedding/06-bouquet-close.jpg', alt: 'Brautstrauß aus Pfingstrosen und Eukalyptus', category: 'hochzeit', span: 'small' },
  { src: '/images/wedding/05-erster-tanz.jpg', alt: 'Erster Tanz in sanft beleuchteter Scheune', category: 'hochzeit', span: 'large' },
  { src: '/images/portfolio/04-editorial-couple.jpg', alt: 'Editorial Paarportrait im Magazin-Stil', category: 'hochzeit', span: 'medium' },
  { src: '/images/portfolio/07-bewerbungs-male.jpg', alt: 'Professionelles LinkedIn-Headshot', category: 'business', span: 'small' },
  { src: '/images/portfolio/08-bewerbungs-female.jpg', alt: 'Editorial-Portrait bei natürlichem Licht', category: 'portrait', span: 'medium' },
  { src: '/images/portfolio/12-studio-portrait.jpg', alt: 'Warmes Studio-Portrait in Cremetönen', category: 'portrait', span: 'small' },
  { src: '/images/jobs/portrait-01.jpg', alt: 'Business-Frau im Cremeblazer — Editorial-Headshot', category: 'business', span: 'small' },
  { src: '/images/portfolio/09-maternity-couple.jpg', alt: 'Werdende Eltern im Sonnenuntergang', category: 'babybauch', span: 'medium' },
  { src: '/images/portfolio/03-first-look.jpg', alt: 'First-Look Moment — ehrliche Emotionen', category: 'hochzeit', span: 'small' },
  { src: '/images/redesign/studio-interior.jpg', alt: 'Lichtraum Fotostudio — warmes Interieur mit Hasselblad', category: 'studio', span: 'medium' },
  { src: '/images/redesign/studio-detail-hands.jpg', alt: 'Hände halten Hasselblad-Kamera im Studiolicht', category: 'studio', span: 'small' },
  { src: '/images/family/10-babybauch-outdoor.jpg', alt: 'Werdende Mutter im Weizenfeld bei Sonnenuntergang', category: 'babybauch', span: 'medium' },
  { src: '/images/family/01-outdoor.jpg', alt: 'Familie im goldenen Abendlicht im Eifel-Feld', category: 'familie', span: 'small' },
  { src: '/images/portfolio/01-dance-floor.jpg', alt: 'Hochzeitstanz-Szene mit Confetti und Motion-Blur', category: 'hochzeit', span: 'large' },
  { src: '/images/portfolio/02-silent-moment.jpg', alt: 'Braut allein im Hotelflur vor der Zeremonie', category: 'hochzeit', span: 'medium' },
  { src: '/images/wedding/10-kuss-kirche.jpg', alt: 'Trauungs-Kuss in gotischer Kirche', category: 'hochzeit', span: 'small' },
  { src: '/images/family/06-siblings.jpg', alt: 'Geschwister spielen lachend im warmen Abendlicht', category: 'familie', span: 'medium' },
]
