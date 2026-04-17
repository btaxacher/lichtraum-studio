/**
 * Hero + Gallery-Bild-Mapping pro City-Page.
 * V3: Vollständig migriert auf lokale Nano-Banana-Bilder.
 *
 * Jede Stadt bekommt:
 *   - Hero: 1x City-Shot aus /images/cities/{city}.jpg
 *   - Gallery: Mix aus wedding/ + family/ + portfolio/ + cities/ Pools
 *     (pro Stadt unterschiedliche Kombination, keine Copy-Paste)
 */

type ImageSet = {
  hero: { src: string; alt: string }
  gallery: { src: string; alt: string; aspect?: 'portrait' | 'landscape' | 'square' }[]
}

export const cityPageImages: Record<string, ImageSet> = {
  'fotograf-bonn': {
    hero: { src: '/images/cities/bonn.jpg', alt: 'Fotograf Bonn — Rheinaue Park bei goldenem Nachmittagslicht' },
    gallery: [
      { src: '/images/wedding/01-paar-rheinaue.jpg', alt: 'Brautpaar am Bonner Rheinufer', aspect: 'portrait' },
      { src: '/images/portfolio/06-business-founder.jpg', alt: 'Business-Portrait im Bonner Regierungsviertel', aspect: 'landscape' },
      { src: '/images/family/01-outdoor.jpg', alt: 'Familien-Shoot in der Rheinaue', aspect: 'square' },
      { src: '/images/wedding/07-paar-schloss.jpg', alt: 'Paarportrait bei der Poppelsdorfer Allee', aspect: 'portrait' },
      { src: '/images/wedding/04-ringe-eukalyptus.jpg', alt: 'Detail-Aufnahme Hochzeitsringe Bonn', aspect: 'landscape' },
      { src: '/images/family/04-maternity-studio.jpg', alt: 'Babybauch-Portrait — Fotograf Bonn', aspect: 'square' },
    ],
  },

  'hochzeitsfotograf-bonn': {
    hero: { src: '/images/cities/bonn.jpg', alt: 'Hochzeitsfotograf Bonn — Rheinaue mit Siebengebirge im Hintergrund' },
    gallery: [
      { src: '/images/wedding/10-kuss-kirche.jpg', alt: 'Hochzeit im Kurfürstlichen Schloss Bonn', aspect: 'portrait' },
      { src: '/images/wedding/08-stehempfang.jpg', alt: 'Empfang in der Redoute Bad Godesberg', aspect: 'landscape' },
      { src: '/images/wedding/04-ringe-eukalyptus.jpg', alt: 'Eheringe-Detail vor Rheinbogen', aspect: 'square' },
      { src: '/images/wedding/05-erster-tanz.jpg', alt: 'Erster Tanz auf Schloss Drachenburg', aspect: 'portrait' },
      { src: '/images/wedding/13-couple-wald.jpg', alt: 'Paar in der Bonner Kirschblütenallee', aspect: 'landscape' },
      { src: '/images/wedding/09-kerzenlicht.jpg', alt: 'Zeremonie mit Kerzenlicht', aspect: 'square' },
    ],
  },

  'fotograf-leverkusen': {
    hero: { src: '/images/cities/leverkusen.jpg', alt: 'Fotograf Leverkusen — Schloss Morsbroich im Nachmittagslicht' },
    gallery: [
      { src: '/images/portfolio/12-studio-portrait.jpg', alt: 'Portrait im Neulandpark Leverkusen', aspect: 'portrait' },
      { src: '/images/wedding/01-paar-rheinaue.jpg', alt: 'Paar im Japanischen Garten zur Kirschblüte', aspect: 'landscape' },
      { src: '/images/portfolio/07-bewerbungs-male.jpg', alt: 'Business-Shooting am Schloss Morsbroich', aspect: 'square' },
      { src: '/images/family/01-outdoor.jpg', alt: 'Familienfoto im Park Leverkusen', aspect: 'portrait' },
      { src: '/images/portfolio/08-bewerbungs-female.jpg', alt: 'Editorial-Portrait mit Available Light', aspect: 'landscape' },
      { src: '/images/portfolio/06-business-founder.jpg', alt: 'LinkedIn-Portrait Leverkusen', aspect: 'square' },
    ],
  },

  'fotograf-siegburg': {
    hero: { src: '/images/cities/siegburg.jpg', alt: 'Fotograf Siegburg — Michaelsberg Kloster bei Sonnenuntergang' },
    gallery: [
      { src: '/images/wedding/09-kerzenlicht.jpg', alt: 'Hochzeits-Zeremonie am Michaelsberg-Kloster', aspect: 'portrait' },
      { src: '/images/wedding/07-paar-schloss.jpg', alt: 'Paar-Portrait in der Siegburger Altstadt', aspect: 'landscape' },
      { src: '/images/wedding/10-kuss-kirche.jpg', alt: 'Trauung in der Klosterkirche', aspect: 'square' },
      { src: '/images/family/01-outdoor.jpg', alt: 'Familien-Shoot am Sieg-Ufer', aspect: 'portrait' },
      { src: '/images/wedding/13-couple-wald.jpg', alt: 'Brautpaar im Michaelsbergpfad', aspect: 'landscape' },
      { src: '/images/wedding/04-ringe-eukalyptus.jpg', alt: 'Ring-Detail Siegburg Hochzeit', aspect: 'square' },
    ],
  },

  'fotograf-bergisch-gladbach': {
    hero: { src: '/images/cities/bergisch-gladbach.jpg', alt: 'Fotograf Bergisch Gladbach — Schloss Bensberg Grandhotel' },
    gallery: [
      { src: '/images/wedding/07-paar-schloss.jpg', alt: 'Gala-Hochzeit auf Schloss Bensberg', aspect: 'portrait' },
      { src: '/images/wedding/08-stehempfang.jpg', alt: 'Empfang im Schlosshof Bensberg', aspect: 'landscape' },
      { src: '/images/family/01-outdoor.jpg', alt: 'Familienshooting am Strunder Bach', aspect: 'square' },
      { src: '/images/wedding/01-paar-rheinaue.jpg', alt: 'Brautpaar mit Rheinblick vom Schlosspark', aspect: 'portrait' },
      { src: '/images/portfolio/07-bewerbungs-male.jpg', alt: 'Business-Portrait Bergisch Gladbach', aspect: 'landscape' },
      { src: '/images/wedding/06-bouquet-close.jpg', alt: 'Brautstrauß-Detailaufnahme', aspect: 'square' },
    ],
  },

  'fotograf-erftstadt': {
    hero: { src: '/images/cities/erftstadt.jpg', alt: 'Fotograf Erftstadt — Schloss Gracht im Abendlicht' },
    gallery: [
      { src: '/images/wedding/07-paar-schloss.jpg', alt: 'Hochzeits-Portrait Kastanienallee Gracht', aspect: 'portrait' },
      { src: '/images/wedding/01-paar-rheinaue.jpg', alt: 'Paar an der Erft-Aue zur Golden Hour', aspect: 'landscape' },
      { src: '/images/family/01-outdoor.jpg', alt: 'Familienshooting im Herrig-Park', aspect: 'square' },
      { src: '/images/wedding/10-kuss-kirche.jpg', alt: 'Trauung vor dem Wasserschloss Gracht', aspect: 'portrait' },
      { src: '/images/portfolio/04-editorial-couple.jpg', alt: 'Editorial-Paarportrait Erftstadt', aspect: 'landscape' },
      { src: '/images/wedding/15-detail-tischdeko.jpg', alt: 'Tischdeko Schloss-Gracht-Hochzeit', aspect: 'square' },
    ],
  },

  'fotograf-bergheim': {
    hero: { src: '/images/cities/bergheim.jpg', alt: 'Fotograf Bergheim — Paffendorfer Schloss im Abendlicht' },
    gallery: [
      { src: '/images/wedding/07-paar-schloss.jpg', alt: 'Brautpaar im Paffendorfer Schlosspark', aspect: 'portrait' },
      { src: '/images/family/01-outdoor.jpg', alt: 'Familien-Shoot in Bergheim', aspect: 'landscape' },
      { src: '/images/portfolio/07-bewerbungs-male.jpg', alt: 'Portrait vor moderner Rhein-Erft-Architektur', aspect: 'square' },
      { src: '/images/wedding/04-ringe-eukalyptus.jpg', alt: 'Ring-Detail Bergheim Hochzeit', aspect: 'portrait' },
      { src: '/images/wedding/08-stehempfang.jpg', alt: 'Gruppenbild vor Paffendorfer Schlossfassade', aspect: 'landscape' },
      { src: '/images/wedding/12-lichtspiel-schleier.jpg', alt: 'Braut im Schlosspark-Licht', aspect: 'square' },
    ],
  },

  'fotograf-kerpen': {
    hero: { src: '/images/cities/kerpen.jpg', alt: 'Fotograf Kerpen — Schloss Türnich mit Parkteich' },
    gallery: [
      { src: '/images/wedding/07-paar-schloss.jpg', alt: 'Brautpaar auf Schloss Türnich', aspect: 'portrait' },
      { src: '/images/wedding/13-couple-wald.jpg', alt: 'Paar im Türnicher Demeter-Park', aspect: 'landscape' },
      { src: '/images/family/03-papa-kind.jpg', alt: 'Familien-Shoot in Kerpen', aspect: 'square' },
      { src: '/images/portfolio/04-editorial-couple.jpg', alt: 'Paar-Portrait im Abendlicht Kerpen', aspect: 'portrait' },
      { src: '/images/wedding/04-ringe-eukalyptus.jpg', alt: 'Ring-Detail auf Schloss-Terrasse', aspect: 'landscape' },
      { src: '/images/wedding/14-sparkler-exit.jpg', alt: 'Sparkler-Exit Schloss Türnich', aspect: 'square' },
    ],
  },

  'fotograf-huerth': {
    hero: { src: '/images/cities/huerth.jpg', alt: 'Fotograf Hürth — Ville-Park im goldenen Herbstlicht' },
    gallery: [
      { src: '/images/portfolio/12-studio-portrait.jpg', alt: 'Portrait im Ville-Park', aspect: 'portrait' },
      { src: '/images/portfolio/06-business-founder.jpg', alt: 'Business-Portrait Hürth Medienstadt', aspect: 'landscape' },
      { src: '/images/portfolio/08-bewerbungs-female.jpg', alt: 'LinkedIn-Headshot Hürth', aspect: 'square' },
      { src: '/images/wedding/01-paar-rheinaue.jpg', alt: 'Paar-Portrait am Ville-See', aspect: 'portrait' },
      { src: '/images/portfolio/07-bewerbungs-male.jpg', alt: 'Team-Shooting im Bavaria Studio', aspect: 'landscape' },
      { src: '/images/family/01-outdoor.jpg', alt: 'Familienfoto im Ville-Park Hürth', aspect: 'square' },
    ],
  },

  'fotograf-bruehl': {
    hero: { src: '/images/cities/bruehl.jpg', alt: 'Fotograf Brühl — Schloss Augustusburg UNESCO-Welterbe' },
    gallery: [
      { src: '/images/wedding/07-paar-schloss.jpg', alt: 'Brautpaar auf der Augustusburg Treppe', aspect: 'portrait' },
      { src: '/images/wedding/08-stehempfang.jpg', alt: 'Hochzeitsempfang Schloss Falkenlust', aspect: 'landscape' },
      { src: '/images/wedding/13-couple-wald.jpg', alt: 'Paarportrait im englischen Schlosspark', aspect: 'square' },
      { src: '/images/wedding/15-detail-tischdeko.jpg', alt: 'Detail im Schloss-Saal', aspect: 'portrait' },
      { src: '/images/portfolio/04-editorial-couple.jpg', alt: 'Editorial-Shoot am Max-Ernst-Museum', aspect: 'landscape' },
      { src: '/images/wedding/14-sparkler-exit.jpg', alt: 'Golden Hour im Schlosspark Brühl', aspect: 'square' },
    ],
  },

  'fotograf-pulheim': {
    hero: { src: '/images/cities/pulheim.jpg', alt: 'Fotograf Pulheim — Abtei Brauweiler romanischer Kreuzgang' },
    gallery: [
      { src: '/images/wedding/09-kerzenlicht.jpg', alt: 'Brautpaar im Kreuzgang Brauweiler', aspect: 'portrait' },
      { src: '/images/wedding/10-kuss-kirche.jpg', alt: 'Trauung in der Klosterbasilika', aspect: 'landscape' },
      { src: '/images/family/06-siblings.jpg', alt: 'Familien-Shoot in Stommeln', aspect: 'square' },
      { src: '/images/portfolio/12-studio-portrait.jpg', alt: 'Portrait vor romanischen Säulen', aspect: 'portrait' },
      { src: '/images/wedding/01-paar-rheinaue.jpg', alt: 'Paar in der Dansweiler Feldlandschaft', aspect: 'landscape' },
      { src: '/images/wedding/04-ringe-eukalyptus.jpg', alt: 'Ring-Detail auf Steinboden Brauweiler', aspect: 'square' },
    ],
  },

  'fotograf-weilerswist': {
    hero: { src: '/images/cities/weilerswist.jpg', alt: 'Fotograf Weilerswist — Erft-Auen bei goldenem Abendlicht' },
    gallery: [
      { src: '/images/wedding/07-paar-schloss.jpg', alt: 'Hochzeitsportrait Burg Metternich Weilerswist', aspect: 'portrait' },
      { src: '/images/family/01-outdoor.jpg', alt: 'Familie in der Erft-Aue zur Golden Hour', aspect: 'landscape' },
      { src: '/images/wedding/01-paar-rheinaue.jpg', alt: 'Paar-Shooting Weilerswister Feldweg', aspect: 'square' },
      { src: '/images/portfolio/12-studio-portrait.jpg', alt: 'Stille Portraits im Ortskern St. Kunibert', aspect: 'portrait' },
      { src: '/images/wedding/13-couple-wald.jpg', alt: 'Brautpaar auf Schloss Loersfeld', aspect: 'landscape' },
      { src: '/images/family/10-babybauch-outdoor.jpg', alt: 'Babybauch-Shoot am Erft-Radweg', aspect: 'square' },
    ],
  },
}
