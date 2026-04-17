/**
 * Hero + Gallery-Bild-Mapping pro Tier-1-Slug.
 * V3: Vollständig migriert auf lokale Nano-Banana-Bilder.
 *
 * Pools:
 *   /images/wedding/  — 15 Bilder (Hochzeits-Tier-1)
 *   /images/family/   — 10 Bilder (Schwangerschaft, Familie)
 *   /images/portfolio/ — 12 Bilder (Mixed)
 *   /images/cities/   — 14 Bilder (City-Shots)
 *   /images/jobs/     — 11 Bilder (Bewerbung)
 *   /images/redesign/ — 25 Bilder (Homepage)
 */

type ImageSet = {
  hero: { src: string; alt: string }
  gallery: { src: string; alt: string; aspect?: 'portrait' | 'landscape' | 'square' }[]
}

export const tier1Images: Record<string, ImageSet> = {
  'hochzeitsfotograf-koeln': {
    hero: {
      src: '/images/wedding/01-paar-rheinaue.jpg',
      alt: 'Hochzeitsfotograf Köln — Brautpaar bei Golden Hour am Rheinufer',
    },
    gallery: [
      { src: '/images/wedding/02-erster-kuss-feld.jpg', alt: 'Hochzeitsfotograf Köln — erster Kuss im Weizenfeld', aspect: 'portrait' },
      { src: '/images/wedding/04-ringe-eukalyptus.jpg', alt: 'Eheringe auf Eukalyptus — Hochzeitsfotografie Detail', aspect: 'landscape' },
      { src: '/images/wedding/03-getting-ready.jpg', alt: 'Getting Ready — Brautkleid wird gebunden', aspect: 'square' },
      { src: '/images/wedding/05-erster-tanz.jpg', alt: 'Erster Tanz in der Scheune mit Bistro-Lichtern', aspect: 'portrait' },
      { src: '/images/wedding/07-paar-schloss.jpg', alt: 'Brautpaar vor Barockschloss im Rheinland', aspect: 'landscape' },
      { src: '/images/wedding/06-bouquet-close.jpg', alt: 'Brautstrauß aus Pfingstrosen und Eukalyptus — Close-up', aspect: 'square' },
      { src: '/images/wedding/10-kuss-kirche.jpg', alt: 'Erster Kuss in gotischer Rheinland-Kirche', aspect: 'portrait' },
      { src: '/images/wedding/08-stehempfang.jpg', alt: 'Hochzeitsempfang im Innenhof — Kandide Reportage', aspect: 'landscape' },
      { src: '/images/wedding/14-sparkler-exit.jpg', alt: 'Sparkler Exit nach Hochzeitsfeier', aspect: 'square' },
    ],
  },

  'hochzeitsfotograf-euskirchen': {
    hero: {
      src: '/images/wedding/09-kerzenlicht.jpg',
      alt: 'Hochzeitsfotograf Euskirchen — Trauung bei Kerzenlicht in Burg Satzvey',
    },
    gallery: [
      { src: '/images/wedding/13-couple-wald.jpg', alt: 'Brautpaar im Eifel-Wald — Hochzeitsfotograf Euskirchen', aspect: 'portrait' },
      { src: '/images/wedding/07-paar-schloss.jpg', alt: 'Hochzeitsreportage vor Burg Flamersheim', aspect: 'landscape' },
      { src: '/images/wedding/04-ringe-eukalyptus.jpg', alt: 'Ringe-Detail aus Eifel-Hochzeit', aspect: 'square' },
      { src: '/images/wedding/03-getting-ready.jpg', alt: 'Getting Ready — Mutter bindet Brautkleid', aspect: 'portrait' },
      { src: '/images/wedding/12-lichtspiel-schleier.jpg', alt: 'Braut im Schleier-Lichtspiel', aspect: 'landscape' },
      { src: '/images/wedding/15-detail-tischdeko.jpg', alt: 'Tischdekoration — Hochzeit im Kreis Euskirchen', aspect: 'square' },
      { src: '/images/wedding/05-erster-tanz.jpg', alt: 'Erster Tanz in Euskirchener Scheune', aspect: 'portrait' },
      { src: '/images/wedding/11-getting-ready-braeutigam.jpg', alt: 'Bräutigam Getting Ready im Hotel', aspect: 'landscape' },
      { src: '/images/wedding/01-paar-rheinaue.jpg', alt: 'Paarporträt zur Golden Hour', aspect: 'square' },
    ],
  },

  'bewerbungsfotos-koeln': {
    hero: {
      src: '/images/jobs/hero-koeln.jpg',
      alt: 'Bewerbungsfotos Köln — Editorial Business-Portrait in warmer Kulisse',
    },
    gallery: [
      { src: '/images/jobs/portrait-01.jpg', alt: 'Bewerbungsfoto Business Consulting Köln — Frau mit Cremeblazer', aspect: 'portrait' },
      { src: '/images/jobs/portrait-02.jpg', alt: 'Bewerbungsfoto für Kanzlei Köln — Mann im Navy-Anzug', aspect: 'landscape' },
      { src: '/images/jobs/portrait-03.jpg', alt: 'LinkedIn-Headshot mit authentischem Lachen, Kreativ-Branche', aspect: 'square' },
      { src: '/images/jobs/portrait-04.jpg', alt: 'Bewerbungsbild Tech/Consulting — Mann mit Brille im Strickrollkragen', aspect: 'portrait' },
      { src: '/images/jobs/portrait-05.jpg', alt: 'Executive-Portrait Frau 40+ in seidener Karamell-Bluse', aspect: 'landscape' },
      { src: '/images/jobs/portrait-08.jpg', alt: 'Consulting-Portrait mit natürlichem Tageslicht', aspect: 'square' },
      { src: '/images/jobs/portrait-09.jpg', alt: 'Senior-Executive-Portrait — Kanzlei-Partner, vertrauenswürdig', aspect: 'portrait' },
      { src: '/images/jobs/portrait-07.jpg', alt: 'Young-Professional-Portrait Mann 25 in warmer Olive', aspect: 'landscape' },
    ],
  },

  'bewerbungsfotos-euskirchen': {
    hero: {
      src: '/images/jobs/hero-euskirchen.jpg',
      alt: 'Bewerbungsfotos Euskirchen — Lichtraum Studio Portrait in warmem Licht',
    },
    gallery: [
      { src: '/images/jobs/portrait-06.jpg', alt: 'Azubi-Bewerbungsfoto im Euskirchener Studio — junge Frau 21', aspect: 'portrait' },
      { src: '/images/jobs/portrait-07.jpg', alt: 'Handwerk/Startup-Portrait mit Bart, warm-olive Oberteil', aspect: 'landscape' },
      { src: '/images/jobs/portrait-01.jpg', alt: 'Professionelles Headshot für Verwaltung — Frau mit Cremeblazer', aspect: 'square' },
      { src: '/images/jobs/portrait-04.jpg', alt: 'Bewerbungsfoto für Tech-Branche — Mann mit Brille', aspect: 'portrait' },
      { src: '/images/jobs/portrait-03.jpg', alt: 'Express-Bewerbungsfoto — natürliches Lachen', aspect: 'landscape' },
      { src: '/images/jobs/portrait-08.jpg', alt: 'Outfit-Beratung für Bewerbungstermin — Consulting-Look', aspect: 'square' },
      { src: '/images/jobs/portrait-05.jpg', alt: 'Wiedereinstieg-Bewerbungsbild — Frau 40+ im Lichtraum Studio', aspect: 'portrait' },
      { src: '/images/jobs/portrait-02.jpg', alt: 'Branchen-passendes Bewerbungsporträt Bank/Versicherung', aspect: 'landscape' },
    ],
  },

  'fotograf-koeln': {
    hero: {
      src: '/images/wedding/01-paar-rheinaue.jpg',
      alt: 'Fotograf Köln — Editorial Paarportrait am Rheinufer',
    },
    gallery: [
      { src: '/images/wedding/07-paar-schloss.jpg', alt: 'Hochzeit in Köln — Schloss-Kulisse', aspect: 'portrait' },
      { src: '/images/portfolio/04-editorial-couple.jpg', alt: 'Editorial Paarportrait in Köln', aspect: 'landscape' },
      { src: '/images/portfolio/06-business-founder.jpg', alt: 'Business-Portrait Startup-Gründerin Köln', aspect: 'square' },
      { src: '/images/family/01-outdoor.jpg', alt: 'Familienshooting im Park Köln', aspect: 'portrait' },
      { src: '/images/portfolio/07-bewerbungs-male.jpg', alt: 'LinkedIn-Headshot im Editorial-Stil', aspect: 'landscape' },
      { src: '/images/wedding/05-erster-tanz.jpg', alt: 'Hochzeitsreportage — Erster Tanz', aspect: 'square' },
      { src: '/images/family/04-maternity-studio.jpg', alt: 'Schwangerschaftsfoto im warmen Studio', aspect: 'portrait' },
      { src: '/images/portfolio/03-first-look.jpg', alt: 'First-Look Hochzeitsmoment', aspect: 'landscape' },
      { src: '/images/portfolio/12-studio-portrait.jpg', alt: 'Editorial Studio-Portrait', aspect: 'square' },
    ],
  },

  'fotoshooting-koeln': {
    hero: {
      src: '/images/portfolio/04-editorial-couple.jpg',
      alt: 'Fotoshooting Köln — Paarshooting zur Golden Hour am Rhein',
    },
    gallery: [
      { src: '/images/portfolio/12-studio-portrait.jpg', alt: 'Portrait-Shooting im Studio Köln', aspect: 'portrait' },
      { src: '/images/wedding/01-paar-rheinaue.jpg', alt: 'Paar-Shooting am Rheinufer Köln', aspect: 'landscape' },
      { src: '/images/family/01-outdoor.jpg', alt: 'Familienshooting im Belgischen Viertel', aspect: 'square' },
      { src: '/images/portfolio/06-business-founder.jpg', alt: 'Personal-Branding-Shoot', aspect: 'portrait' },
      { src: '/images/portfolio/08-bewerbungs-female.jpg', alt: 'Editorial Portrait Available Light', aspect: 'landscape' },
      { src: '/images/wedding/14-sparkler-exit.jpg', alt: 'Lifestyle-Shooting Abendstimmung', aspect: 'square' },
      { src: '/images/family/05-maternity-couple.jpg', alt: 'Schwangerschaftsshooting Outdoor', aspect: 'portrait' },
      { src: '/images/portfolio/09-maternity-couple.jpg', alt: 'Paar-Shooting im Sonnenuntergang', aspect: 'landscape' },
      { src: '/images/family/06-siblings.jpg', alt: 'Familienbild — Kinder im warmen Licht', aspect: 'square' },
    ],
  },

  'schwangerschaftsfotos-koeln': {
    hero: {
      // Outdoor-Babybauch als Hero — passt besser zum Thema als Studio-Silhouette
      src: '/images/family/10-babybauch-outdoor.jpg',
      alt: 'Schwangerschaftsfotos Köln — Werdende Mutter im Weizenfeld bei Sonnenuntergang',
    },
    gallery: [
      // Nur Schwangerschaft + Newborn — keine Kinder/Familien-Bilder. Keine Doppelungen.
      { src: '/images/family/04-maternity-studio.jpg', alt: 'Babybauch-Silhouette im warmen Lichtraum-Studio', aspect: 'portrait' },
      { src: '/images/family/05-maternity-couple.jpg', alt: 'Werdende Eltern — Partner hält Babybauch von hinten', aspect: 'landscape' },
      { src: '/images/portfolio/09-maternity-couple.jpg', alt: 'Schwangerschaftsshooting zur Golden Hour — Paar im Feld', aspect: 'square' },
      { src: '/images/family/08-newborn-studio.jpg', alt: 'Neugeborenes schlafend auf Strickdecke — Babyfotograf Köln', aspect: 'portrait' },
      { src: '/images/family/02-baby-home.jpg', alt: 'Mutter mit Newborn am Fenster — zartes Morgenlicht', aspect: 'landscape' },
      { src: '/images/wedding/12-lichtspiel-schleier.jpg', alt: 'Intimes Gegenlicht-Portrait — Schwangerschaftsfotografie Köln', aspect: 'square' },
      { src: '/images/family/03-papa-kind.jpg', alt: 'Papa hält Baby in die Luft — erste Familienmomente', aspect: 'portrait' },
      { src: '/images/portfolio/05-family-home.jpg', alt: 'Junge Familie auf dem Sofa — Newborn-Session zuhause', aspect: 'landscape' },
    ],
  },

  'businessfotograf-koeln': {
    hero: {
      src: '/images/portfolio/07-bewerbungs-male.jpg',
      alt: 'Businessfotograf Köln — LinkedIn-Headshot im Editorial-Stil',
    },
    gallery: [
      { src: '/images/portfolio/06-business-founder.jpg', alt: 'Startup-Gründerin — Personal Branding Köln', aspect: 'portrait' },
      { src: '/images/portfolio/08-bewerbungs-female.jpg', alt: 'Consulting-Portrait mit natürlichem Licht', aspect: 'landscape' },
      { src: '/images/jobs/portrait-01.jpg', alt: 'Business-Headshot im Creme-Blazer', aspect: 'square' },
      { src: '/images/jobs/portrait-09.jpg', alt: 'Executive-Portrait — Senior Partner', aspect: 'portrait' },
      { src: '/images/jobs/portrait-04.jpg', alt: 'Tech-Branche — Mann mit Brille im Rollkragen', aspect: 'landscape' },
      { src: '/images/portfolio/12-studio-portrait.jpg', alt: 'Editorial Studio-Portrait', aspect: 'square' },
      { src: '/images/jobs/portrait-05.jpg', alt: 'Frau 40+ in seidener Karamell-Bluse', aspect: 'portrait' },
      { src: '/images/jobs/portrait-02.jpg', alt: 'Kanzlei-Headshot — Navy-Anzug', aspect: 'landscape' },
    ],
  },
}
