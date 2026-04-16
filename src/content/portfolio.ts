/**
 * Portfolio image list — 24 kurierte Bilder aus Hochzeit, Portrait, Business, Familie, Babybauch.
 * Aktuell Unsplash-URLs (Kodak-Portra-Look). Phase 3: Migration auf lokale Nanobanana-Bilder.
 */

const U = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`

export type PortfolioItem = {
  src: string
  alt: string
  category: 'hochzeit' | 'portrait' | 'business' | 'familie' | 'babybauch' | 'studio'
  span?: 'large' | 'medium' | 'small' // controls grid area
}

export const portfolioItems: PortfolioItem[] = [
  { src: U('photo-1606216794074-735e91aa2c92', 1600), alt: 'Braut im goldenen Nachmittagslicht am Rhein', category: 'hochzeit', span: 'large' },
  { src: U('photo-1519741497674-611481863552', 1200), alt: 'Detailaufnahme goldene Eheringe auf Leinen mit Eukalyptus', category: 'hochzeit', span: 'small' },
  { src: U('photo-1525258946800-98cfd641d0de', 1200), alt: 'Braut blickt aus sonnenlichtdurchflutetem Fenster', category: 'hochzeit', span: 'medium' },
  { src: U('photo-1511895426328-dc8714191300', 1200), alt: 'Elternteil hebt lachendes Kleinkind in die Luft', category: 'familie', span: 'small' },
  { src: U('photo-1529634597503-139d3726fed5', 1800), alt: 'Paar läuft Hand in Hand durch ein Weizenfeld zur goldenen Stunde', category: 'hochzeit', span: 'large' },
  { src: U('photo-1573496359142-b8d87734a5a2', 1200), alt: 'Professionelles LinkedIn-Portrait in warmem Studiolicht', category: 'business', span: 'small' },
  { src: U('photo-1555252333-9f8e92e65df9', 1200), alt: 'Silhouette einer schwangeren Frau vor sanft beleuchtetem Fenster', category: 'babybauch', span: 'medium' },
  { src: U('photo-1519225421980-715cb0215aed', 1200), alt: 'Brautstrauß aus cremefarbenen Pfingstrosen und Eukalyptus', category: 'hochzeit', span: 'small' },
  { src: U('photo-1464207687429-7505649dae38', 1800), alt: 'Erster Tanz in sanft beleuchteter Scheune mit Bistro-Lichtern', category: 'hochzeit', span: 'large' },
  { src: U('photo-1522673607200-164d1b6ce486', 1200), alt: 'Brautpaar umarmt sich im warmen Nachmittagslicht', category: 'hochzeit', span: 'medium' },
  { src: U('photo-1494790108377-be9c29b29330', 1200), alt: 'Editorial Business Headshot einer Frau', category: 'business', span: 'small' },
  { src: U('photo-1580489944761-15a19d654956', 1200), alt: 'Portrait bei natürlichem Licht mit weichen Schatten', category: 'portrait', span: 'medium' },
  { src: U('photo-1438761681033-6461ffad8d80', 1200), alt: 'Warm-getontes Editorial-Portrait einer jungen Frau', category: 'portrait', span: 'small' },
  { src: U('photo-1544005313-94ddf0286df2', 1200), alt: 'Klassisches Portrait mit Environmental-Hintergrund', category: 'business', span: 'small' },
  { src: U('photo-1534528741775-53994a69daeb', 1200), alt: 'Portrait mit warmen Erdtönen und weichem Gegenlicht', category: 'portrait', span: 'medium' },
  { src: U('photo-1531746020798-e6953c6e8e04', 1200), alt: 'Natürliche Portraitaufnahme in Cremetönen', category: 'portrait', span: 'small' },
  { src: U('photo-1617103996702-96ff29b1c467', 1200), alt: 'Studiolicht-Detail in warmem Goldton', category: 'studio', span: 'medium' },
  { src: U('photo-1606800052052-a08af7148866', 1200), alt: 'Hände halten Hasselblad-Kamera im warmen Studiolicht', category: 'studio', span: 'small' },
  { src: U('photo-1516627145497-ae6968895b74', 1200), alt: 'Werdende Mutter am Fenster in Seidenkleid', category: 'babybauch', span: 'medium' },
  { src: U('photo-1511895426328-dc8714191300', 1200), alt: 'Familie zu Hause im warmen Nachmittagslicht', category: 'familie', span: 'small' },
  { src: U('photo-1551836022-aadb801c60ae', 1200), alt: 'Business-Frau in cremefarbenem Blazer bei Golden Hour', category: 'business', span: 'large' },
  { src: U('photo-1487412720507-e7ab37603c6f', 1200), alt: 'Editorial-Portrait einer Frau im Seitenlicht', category: 'portrait', span: 'medium' },
  { src: U('photo-1511285560929-80b456fea0bc', 1200), alt: 'Kirchliche Trauung mit Gästen im Seitenschiff', category: 'hochzeit', span: 'small' },
  { src: U('photo-1542810634-71277d95dcbb', 1200), alt: 'Mutter und Kind im Park bei Abendlicht', category: 'familie', span: 'medium' },
]
