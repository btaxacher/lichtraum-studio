/**
 * Blog-Content. TS-strukturiert (kein MDX-Runtime nötig).
 * 5 Artikel je ~1.200–2.400 Wörter, aligned mit Sistrix-Keyword-Volumina.
 * Jeder Artikel hat Article-JSON-LD-Metadaten für SEO.
 *
 * V3-Update:
 *  - hochzeitsfotograf-kosten-preise (neuer Slug, zielt auf "Hochzeitsfotograf Kosten/Preise" 2.350 Vol/Mo)
 *  - hochzeitslocations-nrw-rheinland (neuer Slug, zielt auf "Hochzeitslocation NRW" 1.310 Vol/Mo)
 *  - bewerbungsfoto-checkliste (erweitert, zielt auf "outfit bewerbungsfoto" 150 Vol)
 *  - fotograf-finden-nrw-anleitung (optimiert, zielt auf "fotograf in der nähe" 6.600 Vol)
 *  - getting-ready-hochzeit (NEU, zielt auf "Getting Ready Hochzeit" 200 Vol, comp 27 %)
 */

export type BlogSection = { h2: string; paragraphs: string[]; list?: string[] }

export type BlogFAQ = { question: string; answer: string }

export type BlogPost = {
  slug: string
  title: string
  description: string
  publishedDate: string // ISO
  readTime: number // Minuten
  author: string
  category: string
  intro: string[]
  sections: BlogSection[]
  closing: string
  keyword: string
  /** Optional FAQ-Block — rendered as FAQPage JSON-LD */
  faqs?: BlogFAQ[]
  /** Lokaler Hero-Image-Pfad (post nano-banana migration) */
  heroImage?: string
  /** Optionale Bilder im Body (gemapped per Index auf sections) */
  bodyImages?: string[]
  /** Related internal links (mind. 4) — rendert zusätzliche "Weiterlesen"-Section */
  relatedLinks?: { href: string; label: string }[]
  /** Schema-Hints: falls gesetzt, wird zusätzliches JSON-LD emittiert */
  schemaType?: 'HowTo' | 'ItemList'
  /** Strukturierte Daten für HowTo / ItemList Schema */
  howToSteps?: { name: string; text: string }[]
  itemList?: { name: string; description?: string; url?: string }[]
}

export const blogPosts: BlogPost[] = [
  // ============================================================
  // ARTIKEL 1 — Hochzeitsfotograf Kosten & Preise
  // Ziel-Keywords: hochzeitsfotograf kosten (1.250), hochzeitsfotograf preise (1.100)
  // Kombiniert: 2.350 Vol/Mo
  // ============================================================
  {
    slug: 'hochzeitsfotograf-kosten-preise',
    title: 'Hochzeitsfotograf Kosten & Preise 2026 — der Transparenz-Guide',
    description: 'Was kostet ein Hochzeitsfotograf 2026? Preise, Pakete und versteckte Kosten im Vergleich. Vom Rheinland bis NRW — transparent und ehrlich.',
    publishedDate: '2026-02-10',
    readTime: 12,
    author: 'Lichtraum Studio',
    category: 'Hochzeit',
    keyword: 'Hochzeitsfotograf Kosten Preise',
    heroImage: '/images/blog/hochzeitsfotograf-kosten-hero.jpg',
    bodyImages: [
      '/images/blog/hochzeitsfotograf-kosten-01-paar-abendlicht.jpg',
      '/images/blog/hochzeitsfotograf-kosten-02-ringe-detail.jpg',
      '/images/blog/hochzeitsfotograf-kosten-03-reportage.jpg',
      '/images/blog/hochzeitsfotograf-kosten-04-erste-tanz.jpg',
    ],
    relatedLinks: [
      { href: '/blog/hochzeitslocations-nrw-rheinland', label: 'Die 15 schönsten Hochzeitslocations in NRW & im Rheinland' },
      { href: '/blog/getting-ready-hochzeit', label: 'Getting Ready: So wird der Morgen eurer Hochzeit zur schönsten Zeit' },
      { href: '/hochzeitsfotograf-koeln', label: 'Hochzeitsfotograf Köln' },
      { href: '/hochzeitsfotograf-euskirchen', label: 'Hochzeitsfotograf Euskirchen' },
      { href: '/hochzeitsfotograf-bonn', label: 'Hochzeitsfotograf Bonn' },
      { href: '/hochzeitsfotograf-nrw', label: 'Hochzeitsfotograf NRW' },
    ],
    intro: [
      'Wenn ihr gerade in der Hochzeitsplanung steckt, kennt ihr das Gefühl: „Hochzeitsfotograf" googlen — und Preise zwischen 490 € und 6.900 € finden. Zwischen dem Wochenend-Einsteiger und der etablierten Editorial-Marke liegt fast eine Nullzahl Unterschied. Dieser Guide erklärt, warum die Spanne so groß ist, was wirklich drinstecken sollte und wo ihr euch nicht von Schein-Schnäppchen täuschen lassen solltet.',
      'Wir sind Lichtraum, ein Fotografen-Team aus Euskirchen, und begleiten seit über sechs Jahren Hochzeiten in Köln, Bonn und im ganzen Rheinland. Wir werden hier ehrlich über Kosten und Preise sprechen — auch über unsere eigenen, als Vergleichspunkt. Unser Ziel ist nicht, euch etwas zu verkaufen, sondern euch eine realistische Orientierung zu geben, bevor ihr das erste Gespräch führt.',
    ],
    sections: [
      {
        h2: 'Die drei Preis-Segmente in Deutschland',
        paragraphs: [
          'Der deutsche Markt für Hochzeitsfotografie teilt sich sauber in drei Segmente. Jedes hat seine eigene Kundschaft, seine eigene Qualität und seine eigene Tücke. Wenn ihr versteht, in welchem ihr sucht, wird die Recherche plötzlich einfach.',
          'Einsteigersegment (490–1.490 €): Hier findet ihr Teil- und Zweitberufler, Fotografie-Studierende, oder Fotografen am Anfang ihrer hauptberuflichen Laufbahn. Die Qualität ist eine echte Lotterie — großartig oder ernüchternd. Wer hier bucht, sollte bereit sein, überdurchschnittlich gründlich Referenzen zu prüfen und mindestens eine komplette Hochzeitsgalerie zu sehen.',
          'Mittelklasse (1.490–2.990 €): Hier arbeiten hauptberufliche Fotograf:innen mit drei bis zehn Jahren Erfahrung und Backup-Equipment. Das ist statistisch das größte Segment und oft das sinnvollste Preis-Leistungs-Verhältnis. Hier finden wir uns mit unseren Paketen zwischen 1.790 € und 2.990 €. Hier solltet ihr eure erste Suchrunde konzentrieren, wenn ihr einen 50–100-Personen-Tag habt.',
          'Premium-Segment (2.990–6.900 €+): Etablierte Marken mit mehrjähriger Wartezeit, eigenem Stil-Branding, internationalem Portfolio, oft eigenen Teams. Für viele Paare übertrieben — für Paare, die auf dieses spezifische Portfolio gebucht haben, ist es sein Geld wert. Hier zahlt ihr auch für den Markennamen, nicht nur für die Bilder.',
        ],
      },
      {
        h2: 'Was in einem seriösen Hochzeitspaket IMMER enthalten sein sollte',
        paragraphs: [
          'Ein professionelles Hochzeitsfotograf-Paket ist mehr als nur „eine Person mit Kamera am Tag X". Es ist die Summe aus Vor-Ort-Arbeit, Vorbereitung, Nachbearbeitung und Langzeit-Verantwortung. Wenn einer der folgenden Punkte in einem Angebot fehlt, nachfragen — und skeptisch sein, wenn die Antwort ausweicht.',
          'Ein Kennenlerngespräch. Egal ob persönlich oder per Video: Ein professioneller Fotograf möchte wissen, wer ihr seid, bevor er euren wichtigsten Tag begleitet. Wer „Honorar überweisen und wir sehen uns am Tag der Hochzeit" sagt, liefert nicht die Qualität, die ihr braucht.',
          'Ein Vorab-Location-Check bei unbekannten Orten. Bei Schloss Augustusburg weiß jeder Kölner Fotograf, wo das Licht zur Zeremonie steht. Bei einer abgelegenen Privatvilla nicht. Ein Check vor Ort (oder zumindest anhand eurer Fotos und Grundrisse) ist Standard.',
          'Vollständige Bearbeitung aller brauchbaren Fotos. Das bedeutet: 100 % der gelungenen Aufnahmen werden bearbeitet geliefert — nicht „eine Auswahl von 150 Bildern". Ein Ganztag ergibt typischerweise 500–900 fertige Bilder.',
          'Online-Galerie mit Passwort für Familie. Damit Oma in Kiel und Onkel in Stuttgart die Bilder sehen können, ohne dass alles öffentlich auf Instagram landet.',
          'Private Bildrechte ohne Einschränkung. Ihr dürft Bilder in privatem Rahmen nutzen, auf Social Media teilen, ausdrucken, an Familie weitergeben — ohne jede Nachfrage oder Zusatzgebühr.',
          'Ein Backup-System während und nach der Hochzeit. Zwei Kameras mit Dual-Slot, doppeltes Speichern auf mindestens zwei Medien, Langzeit-Archivierung mindestens 2 Jahre. Das schützt euch vor dem Worst-Case-Szenario.',
        ],
        list: [
          'Kennenlerngespräch (persönlich oder Video)',
          'Vorab-Location-Check bei unbekannten Orten',
          'Begleitung laut Paket (6 h / 8 h / 10 h / 12 h)',
          'Vollständige Bearbeitung aller brauchbaren Fotos (100 %)',
          'Online-Galerie mit Passwort für Familie',
          'Private Bildrechte unbeschränkt',
          'Backup-System (Dual-Slot, mehrfache Sicherung)',
          'Mindestens 2 Jahre Langzeit-Archivierung',
        ],
      },
      {
        h2: 'Was kostet extra — und warum',
        paragraphs: [
          'Neben dem Grundpaket gibt es Zusatzleistungen, die je nach eurem Tag unverzichtbar oder irrelevant sind. Transparenz hier ist wichtig — nichts ist frustrierender als ein überraschender Aufpreis, der erst bei der Rechnung auftaucht.',
          'Anreise außerhalb NRW. Viele Fotograf:innen haben in den Verträgen eine Anfahrtsgrenze von 50 bis 80 km. Darüber wird entweder eine Pauschale (meistens 150–300 €) oder ein Kilometersatz (0,30–0,50 € einfach) fällig. Wer in der Eifel, am Niederrhein oder jenseits der Landesgrenze heiratet, sollte das vorab klären.',
          'Zweitfotograf:in. Ein zweiter Fotograf kostet typischerweise 400–900 € Aufpreis. Der Aufpreis klingt viel — ist aber gerechnet auf die Bildausbeute oft das beste Investment im Paket. Dazu gleich mehr.',
          'Gedrucktes Fotoalbum. Qualitativ hochwertige Alben kosten 290–1.290 €, abhängig von Format, Seitenzahl und Einbandmaterial. Ein hochwertiger Leinenband mit 40 Seiten in 30×30 cm bewegt sich bei ca. 690 € End-Preis inklusive Layout-Arbeit.',
          'Raw-Dateien ohne Bearbeitung. Manche Paare wünschen sich die unbearbeiteten Rohdateien. Das ist eine separate Leistung, weil die Bilder dann nicht unsere Handschrift tragen — typische Gebühr: 300 € einmalig, oder im Premium-Paket bereits enthalten.',
          'Verlängerung am Hochzeitstag. Wenn die Feier länger dauert als gebucht und ihr den ersten Tanz oder die spontane Mitternachts-Überraschung noch auf Bildern haben wollt: 90–150 € pro angefangene 30 Minuten. Das wird in der Regel am Abend vor Ort abgerechnet und dem Endpreis zugeschlagen.',
          'Drohnen-Aufnahmen. Falls die Location Drohnenflüge erlaubt (und der Fotograf ein gültiges Kenntnis-Nachweis-Zertifikat hat): meist 200–400 € Aufpreis. In Naturschutzgebieten und Stadtgebieten oft gar nicht möglich — fragt vorher nach.',
        ],
      },
      {
        h2: 'Warum zwei Fotograf:innen oft günstiger sind als man denkt',
        paragraphs: [
          'Ein Zweitfotograf im Paket wirkt auf den ersten Blick wie Luxus — ist aber bei mittleren und großen Hochzeiten der wichtigste Hebel für Bildqualität. Bei Hochzeiten mit weniger als 40 Gästen verzichtbar, ab 60 Gästen sinnvoll, ab 100 Gästen praktisch unverzichtbar.',
          'Der Grund ist logistisch. Zwei parallel stattfindende Getting-Readys (Braut zuhause, Bräutigam im Hotel) lassen sich nicht von einer Person dokumentieren. Während der Zeremonie fehlen euch die Gäste-Reaktionen, wenn der Hauptfotograf auf die Ringe fokussiert ist. Bei der Feier fehlen die Nebenschauplätze, wenn einer die Hauptbühne abdeckt.',
          'Rechnet es durch: Bei 100 Gästen sind 500 € für den Zweitfotograf etwa 5 € pro Gast — weniger als ein zusätzlicher Welcome-Drink. Und die Bildausbeute verdoppelt sich effektiv. Wir empfehlen den Zweitfotografen jedem Paar mit über 70 Gästen als Standard, nicht als Luxus.',
          'Kleiner Side-Effect: Ein zweites Paar Augen bedeutet auch, dass ein Fotograf euch in Ruhe beim Tanzen begleitet, während der andere spontane Portraits der Gäste macht. Solche Bilder entstehen nicht, wenn eine Person zwischen Tanzfläche und Nebenraum pendelt.',
        ],
      },
      {
        h2: 'Der wichtigste versteckte Kostenfaktor: Nutzungsrechte',
        paragraphs: [
          'Deutsche Hochzeitsfotograf-Verträge enthalten fast immer eine Klausel zu Nutzungsrechten — und diese wird oft missverstanden, bis sie relevant wird. Standardfall: Ihr bekommt Nutzungsrechte für private Zwecke, inklusive Social Media und Weitergabe an Familie und Freunde.',
          'Was typischerweise nicht enthalten ist: Weitergabe an Presse oder Magazine (auch Hochzeitsblogs!), Verwendung in kommerziellen Kontexten, beispielsweise wenn der Ehering-Hersteller das Bild auf seiner Website nutzen möchte oder ihr selbst als Influencer monetarisiert. Manche Fotograf:innen verlangen hier empfindlich — bis zu 500 € pro Bild pro Jahr.',
          'Wenn ihr absehen könnt, dass ihr die Bilder breiter nutzen möchtet (z. B. Hochzeits-Reportage auf einem Magazin-Blog, oder ihr seid beide selbständig und wollt das Bild geschäftlich zeigen), verhandelt die erweiterten Rechte beim Buchen — nicht danach. Der Zuschlag ist oft gering (meist 150–300 € einmalig), wenn ihr es VOR der Hochzeit ansprecht. Nachher wird es teurer, weil ihr in der Verhandlungsposition seid, die Bilder zu wollen.',
          'Lest den Vertrag auch auf „Social-Media-Klauseln" durch. Manche Fotografen erlauben sich, eure Bilder zu Werbezwecken für ihre Marke zu nutzen, ohne euch vorher zu fragen. Wer euch auf „ja, das dürfen wir laut Vertrag" verweist, statt bei jedem Bild nachzufragen, handelt unfein — auch wenn es juristisch zulässig ist.',
        ],
      },
      {
        h2: 'Budget-Orientierung nach Hochzeitsgröße',
        paragraphs: [
          'Die Hochzeitsgröße ist der beste Ausgangspunkt, um das eigene Foto-Budget einzuordnen. Eine Drei-Personen-Standesamt-Zeremonie braucht keinen Ganztags-Fotografen. Eine 120-Personen-Trauung im Schloss ohne Zweitfotograf wirkt auf den Fotos wie eine Dorfhochzeit — bei aller Eleganz.',
          'Standesamt + kleiner Rahmen (bis 20 Gäste, 3 Stunden): 590–990 €. Ausreichend für Paare, die ein intimes Fest feiern und primär das Paar-Porträt und die Ringübergabe dokumentiert haben möchten. Perfekt für Elopements im Rheinland.',
          'Kirche + Feier (40–70 Gäste, 6 Stunden): 1.290–2.290 €. Das klassische Format — von Getting-Ready über die Trauung bis zum Sektempfang und Dinner. Unser Lichtraum-Basis-Paket für 1.790 € greift in diesen Rahmen.',
          'Große Hochzeit (80–120 Gäste, 10 Stunden): 2.290–3.490 €. Hier empfehlen wir den Zweitfotografen grundsätzlich. Unser Premium-Paket für 2.990 € inklusive Zweitfotograf liegt hier.',
          'Destination- oder Mehrtages-Event (ab 100 Gäste, 2 Tage+): ab 3.990 €. Brautparty am Vortag, Trauung und Feier, Brunch am nächsten Morgen. Hier lohnt ein individuelles Paket auf Anfrage.',
          'Als grobe Faustregel: Fünf bis zehn Prozent eures Gesamtbudgets für Hochzeitsfotografie sind gut investiert. Die Bilder sind das Einzige, was physisch nach der Hochzeit bleibt — Deko, Essen, Getränke sind 24 Stunden später Erinnerung. Fotos sind es 30 Jahre später.',
        ],
      },
      {
        h2: 'Unsere Lichtraum-Pakete im Überblick',
        paragraphs: [
          'Weil Transparenz genau das ist, was ihr bei einem Hochzeitsfotografen braucht, hier unsere aktuellen Preise als Vergleichspunkt. Wir sind Mittelklasse mit Premium-Anspruch im Editorial, mit Sitz in Euskirchen und Arbeitsgebiet Köln/Bonn/Rheinland/NRW.',
          'Paket Intimo — 1.790 €. 6 Stunden Begleitung, 400–600 bearbeitete Fotos, Online-Galerie, private Nutzungsrechte. Ideal für Hochzeiten bis 50 Gäste. Getting-Ready, Zeremonie, Empfang, erste Feier.',
          'Paket Aurum — 2.490 €. 9 Stunden Begleitung, 600–900 bearbeitete Fotos, Online-Galerie, erweiterte Social-Media-Klausel, private Nutzungsrechte. Ideal für 60–90 Gäste. Getting-Ready bis zum ersten Tanz.',
          'Paket Constellation — 2.990 €. 11 Stunden Begleitung, Zweitfotograf:in (500–800 zusätzliche Bilder), 1.200–1.800 bearbeitete Fotos, Premium-Online-Galerie mit Gast-Download, private + eingeschränkt-kommerzielle Nutzungsrechte. Ideal ab 80 Gäste.',
          'Für Destination-Hochzeiten, Mehrtages-Events und individuelle Anforderungen machen wir euch gerne ein maßgeschneidertes Angebot. Das Kennenlerngespräch ist immer kostenlos und unverbindlich.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Warum sind manche Hochzeitsfotografen in Köln so viel teurer als andere?',
        answer: 'Die Preisdifferenz kommt nicht primär aus dem Standort, sondern aus Stil-Branding, Wartezeit, Ausrüstung und Erfahrung. Ein etablierter Editorial-Fotograf mit 10 Jahren Branchenkenntnis und internationaler Veröffentlichung kostet berechtigt das Dreifache eines hauptberuflichen Neueinsteigers. Beide können qualitative Bilder liefern — aber das Premium-Segment liefert konsistent und mit unverwechselbarer Handschrift.',
      },
      {
        question: 'Gibt es Last-Minute-Rabatte?',
        answer: 'In der Nebensaison (November bis März) haben viele Fotografen freie Kapazitäten und sind verhandlungsbereit — 10 bis 15 Prozent sind realistisch. In der Hauptsaison (Mai bis September) gibt es praktisch nie Rabatte, weil die Wochenenden ein Jahr im Voraus ausgebucht sind. Wer Last-Minute bucht und dennoch einen Profi möchte, zahlt eher einen Aufpreis für die Flexibilität.',
      },
      {
        question: 'Was kostet ein Elopement (nur wir zwei)?',
        answer: 'Elopement-Pakete (2-4 Stunden, ohne Feier) liegen im Rheinland typischerweise zwischen 590 € und 1.290 €. Darin enthalten sind meist 150–300 bearbeitete Fotos, die Begleitung zum Standesamt oder an einem intimen Ort und eine Paar-Reportage. Das ist eine der schönsten Formen der Hochzeitsfotografie — ruhig, konzentriert, ohne Gäste-Koordination.',
      },
      {
        question: 'Sind Raw-Dateien im Preis inbegriffen?',
        answer: 'In der Regel nein. Raw-Dateien sind die unbearbeiteten Rohdaten und tragen nicht die fotografische Handschrift des Fotografen. Die meisten Profis liefern Raw-Dateien gar nicht aus, weil sie nicht repräsentativ für die gelieferte Qualität sind. Wer sie trotzdem haben möchte, zahlt eine Zusatzgebühr von meist 300–600 € — oder findet sie im Premium-Paket inkludiert.',
      },
      {
        question: 'Lohnt sich ein Zweitfotograf wirklich?',
        answer: 'Ab 70 Gästen oder bei parallel stattfindenden Getting-Readys: ja, eindeutig. Die 400–900 € Aufpreis verdoppeln die Bildausbeute und liefern Perspektiven, die ein einzelner Fotograf logistisch nicht abdecken kann. Bei Mikro-Hochzeiten unter 30 Gästen ist es unnötig — ein guter Hauptfotograf bekommt alles allein eingefangen.',
      },
      {
        question: 'Wann ist ein Preis zu günstig, um seriös zu sein?',
        answer: 'Alles unter 790 € für einen Ganztag ist mit hoher Wahrscheinlichkeit entweder Hobby-Arbeit ohne Backup-Equipment oder ein Lockvogel-Angebot, das bei Zusatzleistungen nachher teuer wird. Das heißt nicht, dass das Bildergebnis schlecht sein muss — aber das Risiko, bei Equipment-Ausfall oder Lieferverzögerung ohne Handhabe dazustehen, ist real. Für das wichtigste Fest eures Lebens ist das ein schlechtes Preis-Risiko-Verhältnis.',
      },
    ],
    closing: 'Hochzeitsfotografie ist eines der wenigen Budget-Posten, bei dem der niedrigste Preis selten die richtige Wahl ist. Ihr bucht nicht nur Bilder — ihr bucht jemanden, der sechs bis zwölf Stunden mit euch verbringt, eure Familie kennenlernt, in peinlichen Momenten die Kamera runternimmt und in den richtigen Sekunden auf den Auslöser drückt. Investiert die Zeit, zwei bis drei Gespräche zu führen. Die 60 Minuten davor sind die bestinvestierten Minuten eurer gesamten Hochzeitsplanung.',
  },

  // ============================================================
  // ARTIKEL 2 — Hochzeitslocations NRW & Rheinland
  // Ziel-Keywords: hochzeitslocation nrw (1.300), hochzeitslocation rheinland (10)
  // ============================================================
  {
    slug: 'hochzeitslocations-nrw-rheinland',
    title: '15 Hochzeitslocations in NRW & im Rheinland — unsere Favoriten 2026',
    description: 'Die 15 schönsten Hochzeitslocations in NRW und im Rheinland 2026 — Burgen, Schlösser, Scheunen und Gärten, in denen wir selbst fotografieren.',
    publishedDate: '2026-02-25',
    readTime: 14,
    author: 'Lichtraum Studio',
    category: 'Locations',
    keyword: 'Hochzeitslocation NRW',
    heroImage: '/images/blog/hochzeitslocations-nrw-hero.jpg',
    schemaType: 'ItemList',
    bodyImages: [
      '/images/locations/01-burg-satzvey.jpg',
      '/images/locations/02-kloster-steinfeld.jpg',
      '/images/locations/03-burg-flamersheim.jpg',
      '/images/locations/04-gut-frielinghausen.jpg',
      '/images/locations/05-steinbachtalsperre.jpg',
      '/images/locations/06-flora-koeln.jpg',
      '/images/locations/07-schloss-bensberg.jpg',
      '/images/locations/08-schokoladenmuseum.jpg',
      '/images/locations/09-altenberger-dom.jpg',
      '/images/locations/10-la-redoute.jpg',
      '/images/locations/11-schloss-drachenburg.jpg',
      '/images/locations/12-petersberg.jpg',
      '/images/locations/13-gut-clarenhof.jpg',
      '/images/locations/14-schloss-tuernich.jpg',
      '/images/locations/15-malteser-komturei.jpg',
    ],
    relatedLinks: [
      { href: '/blog/hochzeitsfotograf-kosten-preise', label: 'Hochzeitsfotograf Kosten & Preise 2026' },
      { href: '/blog/getting-ready-hochzeit', label: 'Getting Ready: So wird der Morgen eurer Hochzeit zur schönsten Zeit' },
      { href: '/hochzeitsfotograf-koeln', label: 'Hochzeitsfotograf Köln' },
      { href: '/hochzeitsfotograf-euskirchen', label: 'Hochzeitsfotograf Euskirchen' },
      { href: '/hochzeitsfotograf-bonn', label: 'Hochzeitsfotograf Bonn' },
      { href: '/hochzeitsfotograf-nrw', label: 'Hochzeitsfotograf NRW' },
    ],
    itemList: [
      { name: 'Burg Satzvey', description: 'Mittelalterliche Burg, Mechernich', url: '/hochzeitsfotograf-euskirchen' },
      { name: 'Kloster Steinfeld', description: 'Prämonstratenserabtei, Kall', url: '/hochzeitsfotograf-nrw' },
      { name: 'Burg Flamersheim', description: 'Historische Hofburg, Euskirchen', url: '/hochzeitsfotograf-euskirchen' },
      { name: 'Gut Frielinghausen', description: 'Scheunen-Hochzeit, Bergheim', url: '/fotograf-bergheim' },
      { name: 'Steinbachtalsperre', description: 'Outdoor-Location, Kirchheim' },
      { name: 'Flora Köln — Botanischer Garten', description: 'Glashaus-Romantik, Köln', url: '/hochzeitsfotograf-koeln' },
      { name: 'Schloss Bensberg', description: 'Grandhotel mit Rheinblick', url: '/fotograf-bergisch-gladbach' },
      { name: 'Schokoladenmuseum Rheinauhafen', description: 'Urban-Modern, Köln', url: '/hochzeitsfotograf-koeln' },
      { name: 'Altenberger Dom', description: 'Gotische Klosterkirche, Odenthal' },
      { name: 'La Redoute Bad Godesberg', description: 'Klassizistisches Palais, Bonn', url: '/hochzeitsfotograf-bonn' },
      { name: 'Schloss Drachenburg', description: 'Neugotisches Märchenschloss, Königswinter' },
      { name: 'Petersberg', description: 'Grandhotel auf dem Siebengebirge, Königswinter' },
      { name: 'Gut Clarenhof', description: 'Landhaus-Ambiente, Frechen' },
      { name: 'Schloss Türnich', description: 'Barockschloss mit Park, Kerpen', url: '/fotograf-kerpen' },
      { name: 'Malteser Komturei', description: 'Mittelalterliche Anlage, Köln', url: '/hochzeitsfotograf-koeln' },
    ],
    intro: [
      'Wir sind Lichtraum — Hochzeitsfotografen aus Euskirchen. In den letzten sechs Jahren haben wir in über 120 Locations im Rheinland und in NRW gearbeitet. Einige kennen wir inzwischen so gut, dass wir blind wissen, wo das Licht um 17 Uhr steht. Andere haben uns erst beim zweiten oder dritten Besuch überzeugt.',
      'Diese 15 sind unsere persönlichen Favoriten: Hochzeitslocations, an denen wir am liebsten fotografieren — wegen des Lichts, der Stimmung und wegen dem, was sie mit Hochzeitspaaren machen. Die Liste ist geordnet nach Region, beginnend in der Eifel und unserem Heimatgebiet rund um Euskirchen, über Köln und das Bergische Land, bis nach Bonn und ins Siebengebirge.',
      'Jede Location bekommt eine ehrliche Einschätzung: für welchen Hochzeitstyp, welche Kapazität, welches fotografische Highlight. Am Ende dieses Guides haben wir einen Auswahl-Leitfaden und die häufigsten Fragen zu Hochzeitslocations in NRW zusammengetragen.',
    ],
    sections: [
      {
        h2: 'Burg Satzvey (Mechernich) — für die Märchenhochzeit',
        paragraphs: [
          'Die bekannteste Burg der Eifel, 20 Minuten von Euskirchen. Mittelalterliches Gesamtkunstwerk mit Innenhof, Kapelle, großem Turmblick und Gästehaus. Kapazität zwischen 20 und 200 Gästen möglich — von intimer Feier bis zum großen Fest.',
          'Fotografisch unschlagbar für Stimmung und Romantik. Der Stein-Hintergrund ist dramatisch, der Innenhof liefert bei jedem Wetter dankbare Szenen, der Torbogen ist eine der fotogensten Zeremonie-Kulissen der Region. Einschränkung: Innenräume sind lichtarm — lichtstarke Objektive sind Pflicht, künstliche Aufheller oft sinnvoll.',
        ],
      },
      {
        h2: 'Kloster Steinfeld (Kall) — monastische Würde in der Eifel',
        paragraphs: [
          'Ehemalige Prämonstratenserabtei aus dem 12. Jahrhundert mit romanischer Basilika, Kreuzgang und weitem Park. Kapazität bis 150 Gäste. Atmosphäre: ruhig, würdevoll, jenseits jeder Hochzeits-Hektik.',
          'Für Paare, die eine stille, atmosphärisch-spirituelle Hochzeit feiern wollen. Fotografisch liefert der Kreuzgang eine seltene architektonische Qualität — Säulenordnungen, Licht-Schatten-Raster, Steinflächen. Die Basilika hat mit schmalen Fenstern wenig natürliches Licht; hier braucht es Erfahrung im Low-Light-Bereich.',
        ],
      },
      {
        h2: 'Burg Flamersheim (Euskirchen) — intim und in der Nähe',
        paragraphs: [
          'Historische Hofburganlage mit Restaurant und Trauzimmer, 10 Minuten von Euskirchen. Kleinere Kapazität (bis 60 Gäste), dafür exklusive Nutzung. Das Restaurant im Haus führt ein ausgezeichnetes Niveau, was viel Koordinationsaufwand spart.',
          'Unsere Lieblings-Empfehlung für Mikro-Hochzeiten in unserer Heimatregion. Der Innenhof ist ideal für Zeremonien unter freiem Himmel, die Räume sind warm-rustikal, und der angrenzende Park eignet sich für Paarportraits in goldenem Abendlicht.',
        ],
      },
      {
        h2: 'Gut Frielinghausen (Bergheim) — Scheunen-Hochzeit im Rhein-Erft',
        paragraphs: [
          'Landgut mit sorgfältig restaurierter Scheune, Innenhof, eigenem Park und Gastronomiebereich. Kapazität bis 120 Gäste. Im Sommer spielt sich alles drinnen-draußen ab.',
          'Für Paare, die das rustikale Scheunen-Flair mit modernem Anspruch verbinden möchten. Fotografisch: hohes Tageslicht in der Scheune durch große Fenster, im Hof warme Ziegelflächen, im Park heller Landschaftskontext. Drei Stimmungen innerhalb von 50 Metern.',
        ],
      },
      {
        h2: 'Steinbachtalsperre (Kirchheim) — Outdoor-Ceremony am Wasser',
        paragraphs: [
          'Keine klassische Hochzeitslocation, aber ein immer beliebter werdender Ort für freie Trauungen am Wasser. Die Steinbachtalsperre liegt in der Eifel zwischen Euskirchen und Mechernich und bietet ruhige Uferzonen, naturbelassenen Wald und einen Steg.',
          'Für Paare mit Naturbezug und dem Mut zum Wetter. Hochzeits-Logistik muss mitgedacht werden (mobiles Catering, sanitäre Einrichtungen, Regen-Plan). Fotografisch magisch: spiegelnde Wasserflächen, Licht durch Baumkronen, Dunst über dem Wasser in der Morgendämmerung.',
        ],
      },
      {
        h2: 'Flora Köln — der Botanische Garten',
        paragraphs: [
          'Der klassizistische Festbau aus dem 19. Jahrhundert mit Glashaus und Garten ist eine der begehrtesten Hochzeitslocations der Domstadt. Drei Räume, Kapazität bis 250 Gäste, je nach Konfiguration.',
          'Fotografisch ein Traum: der Glashaus-Wintergarten liefert Tageslicht ohne Schatten, die klassizistische Fassade ist eine der schönsten Kölns, der umliegende Garten reicht an manchen Stellen an englische Parkkulissen heran. Einziges Caveat: die Location ist hochfrequentiert, Wochenend-Termine in der Hochsaison sind 18 Monate im Voraus ausgebucht.',
        ],
      },
      {
        h2: 'Schloss Bensberg (Bergisch Gladbach) — Grandhotel mit Rheinblick',
        paragraphs: [
          'Eines der prestigeträchtigsten Hotels der Region, barockes Schloss mit Terrasse und Blick bis nach Köln. Eigene Hochzeitsplaner:innen im Haus, kulinarisch auf Sterne-Niveau. Kapazität bis 200 Gäste.',
          'Für Paare, die Luxus ohne Abstriche wollen. Fotografisch: die Terrasse zum Sonnenuntergang ist ein Gruppenfoto-Klassiker mit ikonischem Hintergrund. Innenräume haben gutes Tageslicht. Einziges fotografisches Caveat: die Bodenhöhe der Terrasse wirkt bei Portraitausschnitt manchmal unvorteilhaft — wir empfehlen Portraits eher im Park oder am Eingang.',
        ],
      },
      {
        h2: 'Schokoladenmuseum Rheinauhafen (Köln) — urban und modern',
        paragraphs: [
          'Direkt am Rhein mit Panorama auf Dom und Hohenzollernbrücke. Privat-Anmietung des Event-Bereichs möglich, Kapazität 80 bis 250 Gäste je nach Konfiguration. Kulinarisch stark.',
          'Für Paare, die das urbane Köln-Gefühl wollen — und deren Gäste aus der ganzen Republik anreisen und etwas Einzigartiges erleben sollen. Fotografisch: die Glasfassaden zum Rhein spiegeln die blaue Stunde außergewöhnlich, der Hohenzollernbrücke-Hintergrund ist eine der ikonischsten Kulissen der Stadt.',
        ],
      },
      {
        h2: 'Altenberger Dom (Odenthal) — gotische Klosterkirche',
        paragraphs: [
          'Die gotische Klosterkirche aus dem 13. Jahrhundert ist eine der eindrucksvollsten Kirchen NRWs. Nur Trauungen (keine Feier im Haus), aber dafür Atmosphäre, die sich kaum woanders findet — Raumhöhe, bunte Glasfenster, Steinfelder.',
          'Ideal als Trauungs-Ort in Kombination mit einer nahegelegenen Feier-Location (etwa Schloss Bensberg, nur 20 Minuten entfernt). Fotografisch: Die bunten Glasfenster werfen im Sommer farbiges Licht auf die Steinwände, das zur Ringübergabe spektakulär wirkt.',
        ],
      },
      {
        h2: 'La Redoute Bad Godesberg (Bonn) — klassizistisches Palais',
        paragraphs: [
          'Ehemaliges Kurhaus aus dem 18. Jahrhundert, repräsentativer Stil, direkt im Kurpark. Kapazität bis 180 Gäste. Eine der gehobensten Hochzeits-Adressen Bonns.',
          'Für Paare in Bonn, die klassisch und edel feiern möchten. Fotografisch: der Säulenportico liefert eine der schönsten Zeremonie-Kulissen der Region, der Kurpark dahinter bietet Paarportraits in altem Baumbestand.',
        ],
      },
      {
        h2: 'Schloss Drachenburg (Königswinter) — neugotisches Märchenschloss',
        paragraphs: [
          'Auf halbem Weg nach oben am Drachenfels gelegen, mit Blick über das Rheintal. Keine klassische Hochzeits-Location, aber für Zeremonien in den historischen Räumen buchbar. Kapazität: 60–80 Gäste.',
          'Für Paare, die das Märchenhochzeit-Gefühl ohne Übertreibung wollen. Fotografisch spektakulär: der Blick ins Rheintal, die neugotischen Türme, die historischen Innenräume. Anreise der Gäste erfordert Planung (Fußweg, Zahnradbahn, Pkw-Parkplätze begrenzt).',
        ],
      },
      {
        h2: 'Petersberg (Königswinter) — Grandhotel auf dem Siebengebirge',
        paragraphs: [
          'Grandhotel und ehemaliges Gästehaus der Bundesrepublik auf 335 Metern. Blick über das Rheintal bis in den Odenwald. Kapazität bis 250 Gäste, oberes Premium-Segment.',
          'Für Paare, die das absolute Spektakel wollen. Fotografisch ikonisch: die Terrasse mit dem weiten Rheintal-Blick ist eine der meistfotografierten Kulissen der Region. Wir empfehlen, die Paarportraits zur goldenen Stunde an der Terrasse anzusetzen.',
        ],
      },
      {
        h2: 'Gut Clarenhof (Frechen) — Landhaus-Ambiente nahe Köln',
        paragraphs: [
          'Landgut mit Reitstall-Ursprung, restaurierte Scheune, Innenhof, angrenzender Park. Kapazität bis 150 Gäste. Familiär geführt, enge Zusammenarbeit mit dem lokalen Fotografen-Netzwerk.',
          'Für Paare, die das rustikale Scheunen-Gefühl ohne lange Anreise möchten. Frechen liegt 15 Minuten westlich von Köln, Gäste können abends leicht in die Stadt weiterfahren. Fotografisch: hohes Scheunen-Licht, warme Ziegelflächen, angrenzender Park für Paarportraits.',
        ],
      },
      {
        h2: 'Schloss Türnich (Kerpen) — Barockschloss mit Park',
        paragraphs: [
          'Denkmalgeschütztes Barockschloss mit englischem Landschaftspark und Teichen. Kapazität 60 bis 120 Gäste, exklusive Gesamt-Anmietung. Der Park gehört zu den schönsten in Rhein-Erft.',
          'Für Paare, die Ruhe und Park-Atmosphäre wollen — nur 20 Minuten von Köln, aber mit völlig anderer Stimmung. Fotografisch: die Parkteiche spiegeln die Schlossfassade bei ruhigem Wetter, der alte Baumbestand liefert weiches Streulicht im Hochsommer.',
        ],
      },
      {
        h2: 'Malteser Komturei (Köln) — mittelalterliche Anlage in der Stadt',
        paragraphs: [
          'Eine der ältesten erhaltenen Malteser-Anlagen im Rheinland, mitten in Köln-Niehl. Innenhof, Kapelle, Eventräume. Kapazität bis 150 Gäste.',
          'Für Paare, die historisch-intensives Ambiente in der Stadt wollen. Fotografisch: der Innenhof liefert Hof-Atmosphäre ohne Stadthektik, die Kapelle ist für Zeremonien unter freiem Himmel in Köln eine der wenigen authentisch-mittelalterlichen Alternativen.',
        ],
      },
      {
        h2: 'Was wir euch bei der Location-Auswahl mitgeben',
        paragraphs: [
          'Licht zur Zeremonie-Zeit prüfen. Geht idealerweise an einem sonnigen Tag zur geplanten Uhrzeit an den Ort. Wenn ihr zur Zeremoniezeit nur in Schatten steht, braucht ihr eine Plan B (Location-Wechsel, andere Uhrzeit). Der Unterschied zwischen frontalem Abendlicht und komplettem Schatten ist fotografisch gewaltig.',
          'Plan B für Regen. Open-Air-Locations müssen einen wetterfesten Rückzugsraum haben. Klingt trivial, wird aber häufig vergessen. Wir haben schon Trauungen im improvisierten Partyzelt mit undichten Nähten begleitet — macht Spaß für die Reportage, aber ist keine gute Hochzeits-Erinnerung.',
          'Ankunft und Abtransport. Wie kommen 80 Gäste hin? Wo parken sie? Gibt es eine Taxi-Standard-Route? Bei Burg Satzvey beispielsweise sind die Parkplätze knapp — ein Shuttle vom nahegelegenen Mechernicher Bahnhof kann den Abend retten.',
          'Rücksprache mit dem Caterer. Wenn die Location keine eigene Gastronomie hat, muss der Caterer die räumlichen Gegebenheiten kennen (Herd, Kühlung, Ausgabe-Flächen). Ein halbes Stündchen Vorab-Besuch der beiden Parteien spart am Hochzeitstag zwei Stunden Chaos.',
          'Fotografische Highlights planen. Wo die ersten Sektgläser, wo der erste Tanz, wo der Porträt-Spot zur goldenen Stunde? Eine Location-Begehung mit dem Fotografen eine Woche vor der Hochzeit ist für uns Routine — 45 Minuten Investment, die 300 % bessere Fotos bedeuten.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Welche Hochzeitslocation ist am günstigsten?',
        answer: 'Mikro-Location-Pakete mit reiner Raum-Miete beginnen im Rheinland ab etwa 800 € (z. B. Bürgerhäuser, Restaurants mit Trausaal). Schloss- und Burg-Anmietungen bewegen sich zwischen 3.500 € und 12.000 € für die Anmietung allein, ohne Catering. Eine Scheunen-Hochzeit in Rhein-Erft liegt meistens zwischen 2.500 und 4.500 € Miete.',
      },
      {
        question: 'Kann man in Burgen im Winter heiraten?',
        answer: 'Ja — und es hat unverwechselbaren Charme. Burg Satzvey, Burg Flamersheim und viele andere Mittelalter-Locations sind winterlich beheizt und besonders stimmungsvoll mit Kerzenlicht, Fackeln und offenen Feuern. Fotografisch sind Winter-Hochzeiten übrigens oft die schönsten — weiches Licht, klare Luft, keine Sonnenflecken-Probleme.',
      },
      {
        question: 'Ab wann sollten wir die Location buchen?',
        answer: 'Für Top-Locations (Augustusburg, Flora Köln, La Redoute) solltet ihr 18 bis 24 Monate Vorlauf einplanen, wenn ihr ein Samstag in der Hochsaison wollt. Für weniger frequentierte Locations und Donnerstage/Freitage reichen oft 9 bis 12 Monate. Wer spontan ist und einen Wochentag nimmt, findet auch 3 Monate vorher noch freie Termine.',
      },
      {
        question: 'Gibt es Hochzeitslocations mit Unterkunft vor Ort?',
        answer: 'Ja, einige: Schloss Bensberg, Petersberg, Burg Satzvey (eigenes Gästehaus), Schloss Drachenburg (Kooperationen), Gut Frielinghausen (Gästehaus). Wenn eure Gäste weit anreisen, ist das ein großer Pluspunkt — der Abend kann länger werden, und die Fotos der letzten Tanzstunde sind immer die schönsten.',
      },
      {
        question: 'Welche Locations erlauben Feuerwerk oder Wunderkerzen?',
        answer: 'Feuerwerk ist im Rheinland auf Privatgelände in der Regel erlaubt, wenn die Location zustimmt. Wunderkerzen sind fast überall möglich, außer in Innenräumen (Brandschutzvorschriften). Für spektakuläre Abend-Fotos sind Wunderkerzen-Momente draußen ein Klassiker — Sparkler-Exits lassen sich bei Burg Satzvey, Gut Frielinghausen und Gut Clarenhof großartig inszenieren.',
      },
    ],
    closing: 'Die Location ist eine der wenigen Entscheidungen eurer Hochzeit, die nicht nur den Tag prägt, sondern die Fotos, die ihr ein Leben lang ansehen werdet. Wählt nach Stimmung, nicht nach Prestige — die Fotos zeigen nicht, wie teuer es war, sondern wie es sich angefühlt hat. Wenn ihr unsicher seid, welche zwei oder drei Locations zu eurer Vorstellung passen könnten, schreibt uns eure Eckdaten (Gästezahl, Jahreszeit, Stil). Wir geben euch eine ehrliche Einschätzung — auch dann, wenn wir nicht euer Fotograf werden.',
  },

  // ============================================================
  // ARTIKEL 3 — Bewerbungsfoto Outfit-Guide & Checkliste
  // Ziel-Keyword: outfit bewerbungsfoto (150), bewerbungsfoto 2026
  // ============================================================
  {
    slug: 'bewerbungsfoto-checkliste',
    title: 'Bewerbungsfoto 2026 — Outfit-Guide & Checkliste',
    description: 'Das richtige Outfit fürs Bewerbungsfoto 2026 — nach Branche, mit Checkliste für den Shooting-Tag. Tipps vom Studio für ein überzeugendes Portrait.',
    publishedDate: '2026-03-04',
    readTime: 9,
    author: 'Lichtraum Studio',
    category: 'Bewerbung',
    keyword: 'Outfit Bewerbungsfoto',
    heroImage: '/images/blog/bewerbungsfoto-hero.jpg',
    schemaType: 'HowTo',
    bodyImages: [
      '/images/blog/bewerbungsfoto-outfit-banking.jpg',
      '/images/blog/bewerbungsfoto-outfit-it-tech.jpg',
      '/images/blog/bewerbungsfoto-outfit-medien.jpg',
      '/images/blog/bewerbungsfoto-outfit-medizin.jpg',
      '/images/blog/bewerbungsfoto-outfit-handwerk.jpg',
      '/images/blog/bewerbungsfoto-checkliste-shooting-tag.jpg',
    ],
    relatedLinks: [
      { href: '/bewerbungsfotos-koeln', label: 'Bewerbungsfotos Köln' },
      { href: '/bewerbungsfotos-euskirchen', label: 'Bewerbungsfotos Euskirchen' },
      { href: '/businessfotograf-koeln', label: 'Businessfotograf Köln' },
      { href: '/blog/fotograf-finden-nrw-anleitung', label: 'Fotograf:in finden in NRW — Anleitung' },
    ],
    howToSteps: [
      { name: '24 Stunden vorher', text: '7-8 Stunden Schlaf einplanen, 1 Liter Wasser, keinen Alkohol, keine frischen Haarschnitte am selben Tag.' },
      { name: 'Outfit vorbereiten', text: 'Mindestens zwei Oberteil-Alternativen in passenden Farben pro Branche auswählen, bügeln und im Kleidersack transportieren.' },
      { name: 'Morgen des Termins', text: 'Leichtes Frühstück, maximal 2 Kaffees, Hautpflege sparsam, Rasur/Make-up 20 Minuten vor Abfahrt beenden.' },
      { name: 'Im Studio', text: 'Haltung leicht nach vorne, Kopf minimal schief (5–10°), weiches Lächeln — an etwas Angenehmes denken.' },
      { name: 'Retusche freigeben', text: 'Unreinheiten und Hintergrund ja, Gesichtszüge und Körperform nein — das Bild muss euch noch in fünf Jahren ähneln.' },
    ],
    intro: [
      'Ein gutes Bewerbungsfoto hat wenig mit Schönheit zu tun und sehr viel mit Vorbereitung. Zwischen dem Durchschnittsfoto und dem überzeugenden Foto liegen oft zehn vermeidbare Details — von der richtigen Outfit-Wahl bis zum Hintergrund-Kontrast.',
      'Diese Checkliste ist als Gedächtnisstütze gedacht für den Tag vor und den Tag des Termins. Sie führt euch durch Schlaf, Hautpflege, Kleidung (nach Branche getrennt), die richtigen Techniken vor der Kamera und die Retusche-Grenzen. Am Ende ist ein Bewerbungsfoto kein Glücksspiel mehr, sondern eine Checkliste.',
    ],
    sections: [
      {
        h2: '24 Stunden vor dem Termin',
        paragraphs: [
          'Schlaf ist der größte Einzelhebel. Übermüdung zeigt sich in Augenringen, die sich schwer retuschieren lassen, ohne die Glaubwürdigkeit des Gesichts zu verlieren. Sieben bis acht Stunden vor einem Foto-Termin sind Pflicht. Wenn ihr unter Prüfungsstress oder Projektdruck seid: verschiebt lieber den Fototermin als den Schlaf.',
          'Ein Liter Wasser zwischen Abendessen und Schlafengehen verhindert die trockene-Haut-Optik, die morgens so unauffällig scheint und im Porträtlicht so sichtbar wird. Kein Alkohol am Vorabend. Eine kleine Menge reicht schon, um die Haut stumpfer wirken zu lassen und die Augen leicht rot zu stechen.',
          'Haare schneiden lassen — aber nicht am Termintag. Idealabstand: drei bis fünf Tage vor dem Fototermin. Frisch geschnittene Haare wirken übertrieben kurz und zeigen Scherenlinien, die beim Fotografieren auffallen. Gleiches gilt für neue Brillen — mindestens zwei Tage tragen, damit Augen und Abdrücke am Nasenrücken sich beruhigen.',
        ],
      },
      {
        h2: 'Das richtige Outfit nach Branche',
        paragraphs: [
          'Die Frage „Was soll ich anziehen?" ist die häufigste, die wir im Studio hören — und die Antwort ist immer: das passt zur Zielposition. Ein Bewerbungsfoto ist ein Tür-Öffner, nicht ein Porträt. Die Frage ist nicht, was ihr gerne tragt, sondern was die Personalabteilung bei dieser Stelle sehen möchte.',
          'Hier unsere Outfit-Matrix für die fünf häufigsten Branchen-Cluster. Pro Cluster ein Kern-Setting und Alternativen.',
        ],
      },
      {
        h2: 'Banking, Consulting, Kanzleien — klassisch-formell',
        paragraphs: [
          'Herren: dunkler Anzug (dunkelblau oder anthrazit), weißes Hemd, dezente Krawatte in Uni-Farbe (weinrot, dunkelblau, petrol). Keine Glanzanzüge, keine Strickkrawatten. Schuhe werden im Bewerbungsfoto oft nicht gezeigt, aber die Gesamthaltung spürt man.',
          'Damen: dezentes Kostüm, Blazer in dunkelblau/anthrazit/schwarz, einfarbige Bluse oder hochwertiges T-Shirt in Creme/Weiß. Haare zurück oder in einer ruhigen Frisur. Schmuck maximal dezent — Stecker, feine Kette. Keine Statement-Teile.',
          'Farbpsychologie hinter dieser Branche: Ruhe, Autorität, Zuverlässigkeit. Warme Farben (Orange, Gelb, Rot dominant) signalisieren in diesem Feld oft „nicht professionell genug".',
        ],
      },
      {
        h2: 'IT, Tech, Start-ups — entspannt-kompetent',
        paragraphs: [
          'Herren: Polo-Shirt in gedeckten Farben (schiefer, dunkelgrau, anthrazit), alternativ hochwertiger Rolli oder ein einfaches T-Shirt unter einem dezenten Sakko. Keine Hemden mit Krawatte — das wirkt zu formal für diese Branche.',
          'Damen: schlichter Blazer mit T-Shirt oder Bluse, gerne in interessanten aber nicht schreienden Farben (warmes petrol, dunkles olive, dunkelrot). Persönliche Note erlaubt (etwa eine auffällige Kette), aber nicht dominant.',
          'Was IT-Personalabteilungen oft abschreckt: zu formelle Outfits. Ein Krawatten-Foto für eine Senior-Software-Engineer-Bewerbung signalisiert „nicht von unserer Welt". Zu locker ist aber auch falsch — ein T-Shirt mit Logo funktioniert selten.',
        ],
      },
      {
        h2: 'Medien, Kreativ, Design, Marketing — Persönlichkeit mit Stil',
        paragraphs: [
          'Hier dürft ihr Persönlichkeit zeigen — aber mit Stil und Ruhe. Interessante Textur, ungewöhnliche Schnitte, dezente Farbakzente. Das gilt für alle Geschlechter.',
          'Herren: farbiges Hemd (nicht Weiß oder Blau), dezenter Blazer über T-Shirt, oder ein gut geschnittener Pullover. Leinenstoffe, Cord, Velvet — alles willkommen, solange es nicht zu knittrig wird.',
          'Damen: Blusen mit Schalkragen oder ungewöhnlichem Schnitt, farbige Pullover in gedeckten Tönen, interessante aber ruhige Stoffe. Ein einzelnes Statement-Teil ist okay (eine auffällige Kette oder Ohrringe), aber dann ist der Rest ruhig.',
          'Wichtig: Kreativ-Branchen haben oft unsichtbare Dress-Codes. Wer sich als Grafikdesigner:in in einer Kanzlei-Anmutung bewirbt, wirkt „nicht unser Typ". Wer sich im Consulting als Kreativ-Extrovertiert zeigt, verpasst den ersten Eindruck.',
        ],
      },
      {
        h2: 'Medizin, Gesundheit, Pflege — Vertrauen und Professionalität',
        paragraphs: [
          'Herren: weißes Hemd oder gedecktes Polo in dezenter Farbe, alternativ mit ruhigem Blazer. Keine Arzt-Kittel im Bewerbungsfoto — das wirkt inszeniert. Haare ordentlich, Bart gepflegt.',
          'Damen: dezente Bluse oder gepflegtes T-Shirt in pastelligen oder gedeckten Tönen (creme, petrol, hellbeige), Haare zurückgebunden oder in ruhiger Frisur. Schmuck minimal.',
          'Die Botschaft dieser Branche: „Ich bin vertrauenswürdig und werde euch gut versorgen." Alles, was davon ablenkt (auffällige Farben, starker Schmuck, harte Make-up-Linien), wird zur Kommunikationsstörung.',
        ],
      },
      {
        h2: 'Handwerk, Gastronomie, Service — Kompetenz plus Zugänglichkeit',
        paragraphs: [
          'Herren: sauberes Hemd oder Polo in gedeckter Farbe, nicht im Arbeitsgewand. Ein dezentes Hemd in dunkelblau, anthrazit oder petrol funktioniert fast überall. Keine Firmen-Logos im Bewerbungsfoto — auch nicht vom aktuellen Arbeitgeber.',
          'Damen: schlichte Bluse oder hochwertiges T-Shirt, gerne mit etwas Farbe (warmes rot, dunkelgrün, petrol). Haltung zugewandt und freundlich.',
          'Das Ziel dieser Branchen ist: Kompetenz plus Zugänglichkeit. Wer zu formal wirkt, verpasst den „den kann ich mir im Team vorstellen"-Effekt.',
        ],
      },
      {
        h2: 'Farben, die in Kamera funktionieren',
        paragraphs: [
          'Die Kamera sieht Farben anders als das Auge. Was in der Umkleide „pastellig" wirkt, kann unter Studio-Licht plötzlich signalfarben sein. Und was warm wirkt, kann bei 5.600 Kelvin kalt-grau kippen.',
          'Funktioniert fast immer: dunkelblau, anthrazit, petrol, warmes beige, warmes dunkelgrau, dunkelgrün, dunkelrot. Diese Farben schaffen Autorität und lassen das Gesicht im Fokus.',
          'Schwierig: reines Weiß (überstrahlt oft), reines Schwarz (saugt Details), Neonfarben, Glitzer, Muster unter 1 cm Größe (flackern durch den Moiré-Effekt).',
          'Persönlicher Hautton entscheidet mit. Helle Haut mit kühlem Unterton funktioniert gut mit blauen und grauen Tönen. Warme Haut (Beige-Unterton) kommt mit warmen Tönen (creme, beige, warmes olive) besser zur Geltung. Dunklere Hauttöne profitieren von Kontrast — hier dürfen auch gedeckte Farben kräftiger ausfallen.',
        ],
      },
      {
        h2: 'Muster, Logos und Texturen — was geht, was nicht',
        paragraphs: [
          'Muster unter 1 cm Größe verursachen Moiré-Effekte — das flimmernde Interferenzmuster, wenn feine Strukturen mit dem Kamera-Sensor kollidieren. Das lässt sich nachträglich nur schwer korrigieren.',
          'Was funktioniert: glatte Flächen, dezente Karos (größer als 2 cm), ruhige Streifen ab 1 cm Breite, Strickstrukturen (wirken oft sehr vorteilhaft). Was nicht funktioniert: feine Pfeffer-und-Salz-Strukturen, Hahnentritt, kleine Punkte, Pixel-Hemden.',
          'Logos und Markenzeichen gehören nicht ins Bewerbungsfoto. Auch nicht vom aktuellen Arbeitgeber. Das wirkt entweder werbend oder unreflektiert.',
        ],
      },
      {
        h2: 'Frisur, Make-up und Bart — subtile Details machen viel',
        paragraphs: [
          'Haare sollten zwei bis fünf Tage alt sein. Frisch gewaschene Haare wirken flauschig-unstrukturiert; ungewaschen natürlich unpassend. Idealer Zustand: ein Tag nach der Wäsche, geringes Styling-Produkt, ruhige Frisur.',
          'Make-up: natürlich, nicht fehlend. Foundation bei Teint-Problemen, Rouge zart, Augen definiert aber nicht geschminkt. Lippenstift in der eigenen Lippen-Farbton-Familie — kein Rot auf Bewerbungsfotos, das wirkt schnell maskenhaft.',
          'Bart: getrimmt auf eine klare Länge. Entweder rasiert, oder drei bis fünf Tage Bart in gleichmäßiger Länge, oder voller Bart mit sauberer Kontur. Der „zweitägige Bart mit Kante" wirkt oft unordentlich.',
        ],
      },
      {
        h2: 'Die Checkliste für den Shooting-Tag',
        paragraphs: [
          'Eine Liste, die ihr am Vortag neben das Bett legen und am Morgen durchgehen könnt. Schützt vor Vergesslichkeit und Nervosität.',
        ],
        list: [
          'Ausweisdokument mit (falls Bild für behördliche Zwecke genutzt wird)',
          'Mindestens zwei Oberteil-Alternativen im Kleidersack',
          'Kamm oder Bürste, bei längeren Haaren zusätzlich Haargummi/Nadeln',
          'Neutrale Lippenpflege (keine glänzende)',
          'Papiertaschentücher für Glanz-Tupfer',
          'Wasserflasche (hydrierte Haut ist glatter)',
          'Handy stumm — Benachrichtigungen vor dem Shooting abschalten',
          'Früh ankommen (15 min Puffer für Nerven-Abkühlung)',
          'Vor dem Spiegel nochmal Bluse/Kragen checken',
          'Leichtes Parfüm erlaubt, schwere Düfte nein (Studio ist eng)',
        ],
      },
    ],
    faqs: [
      {
        question: 'Welche Farbe Bluse/Hemd funktioniert in den meisten Branchen?',
        answer: 'Dunkelblau. Es signalisiert Autorität ohne zu formal zu wirken, funktioniert in Banking wie in Tech, und schmeichelt fast jedem Hauttyp in Kamera. Als zweite Option: warmes Petrol.',
      },
      {
        question: 'Soll ich lächeln oder ernst schauen?',
        answer: 'Ein weiches, zugewandtes Gesicht funktioniert fast immer besser als ein ernster Ausdruck. Aber kein breites Lachen — das wirkt in Bewerbungen oft verkrampft. Ziel ist: ruhiges, leicht zugewandtes Gesicht mit minimal angehobenen Mundwinkeln.',
      },
      {
        question: 'Brille auf oder ab?',
        answer: 'Wer sonst Brille trägt: auf. Ein Foto ohne Brille wirkt später irritierend auf die Personalabteilung im Vorstellungsgespräch. Wichtig: die Gläser reflektieren nicht — ein Studio-Profi positioniert dazu Licht.',
      },
      {
        question: 'Wie viele Bilder bekomme ich typischerweise?',
        answer: 'Nach einem 30-Minuten-Shooting liefert ein Studio ca. 30–60 Bilder. Davon werden 2–5 in High-End-Retusche geliefert. Ein Bewerbungsfoto-Standardpaket im Kölner Raum liegt bei 89 € bis 149 € für 3–5 bearbeitete Bilder.',
      },
      {
        question: 'Kann ich das gleiche Foto für XING und LinkedIn nutzen wie für die Bewerbung?',
        answer: 'Ja — und es ist sogar sinnvoll, weil die Personalabteilung heute oft alle drei Quellen abgleicht. Stelle nur sicher, dass die Farbkomposition zu deinen Profil-Farben passt (LinkedIn hat einen hellen Hintergrund; wenn dein Foto-Hintergrund sehr hell ist, sollte der Rand-Kontrast am Foto sitzen).',
      },
    ],
    closing: 'Ein Bewerbungsfoto ist kein Kunstportrait — es ist ein Türöffner. Ziel ist nicht, besonders schön auszusehen, sondern genau so auszusehen, wie ihr seid, nur unter guten Lichtbedingungen und in einem Outfit, das zur Zielposition passt. Wenn ihr die zehn Details aus dieser Checkliste beachtet, wird aus dem Fototermin keine Glückssache mehr, sondern ein kalkuliertes Ergebnis.',
  },

  // ============================================================
  // ARTIKEL 4 — Fotograf:in finden in NRW
  // Ziel-Keywords: fotograf finden nrw, fotograf in der nähe (6.600 Vol)
  // ============================================================
  {
    slug: 'fotograf-finden-nrw-anleitung',
    title: 'Fotograf:in finden in NRW — Anleitung für Paare, Familien und Selbständige',
    description: 'Wie findet man in NRW den richtigen Fotografen? Plattformen, Bewertungen, Red Flags, Portfolio-Check, Beratungsgespräch — die komplette Anleitung.',
    publishedDate: '2026-03-15',
    readTime: 11,
    author: 'Lichtraum Studio',
    category: 'Ratgeber',
    keyword: 'Fotograf finden NRW',
    heroImage: '/images/blog/fotograf-finden-nrw-hero.jpg',
    bodyImages: [
      '/images/blog/fotograf-finden-nrw-portfolio-check.jpg',
      '/images/blog/fotograf-finden-nrw-beratungsgespraech.jpg',
      '/images/blog/fotograf-finden-nrw-nahe-suche.jpg',
    ],
    relatedLinks: [
      { href: '/fotograf-koeln', label: 'Fotograf Köln' },
      { href: '/fotograf-bonn', label: 'Fotograf Bonn' },
      { href: '/hochzeitsfotograf-nrw', label: 'Hochzeitsfotograf NRW' },
      { href: '/blog/hochzeitsfotograf-kosten-preise', label: 'Hochzeitsfotograf Kosten & Preise 2026' },
    ],
    intro: [
      'Nordrhein-Westfalen hat laut Handwerkskammer-Statistik rund 4.800 selbständige Fotograf:innen — vom Pass-Fotostudio bis zur renommierten Hochzeits-Boutique. Wer online sucht, steht vor einer Flut von Ergebnissen und oft austauschbaren Portfolios. Wie trifft man eine gute Entscheidung, ohne zehn Beratungsgespräche zu führen?',
      'Diese Anleitung ist der Filter-Prozess, den wir selbst empfehlen würden, wenn uns jemand fragt, wie man bei einem anderen Fotografen vorgeht. Von der Suche über den Portfolio-Check bis zum entscheidenden Beratungsgespräch.',
    ],
    sections: [
      {
        h2: 'Fotograf in der Nähe finden — das solltet ihr googeln',
        paragraphs: [
          'Die meistgesuchte Variante ist inzwischen die lokale: „Fotograf in der Nähe" wird in Deutschland über 6.600-mal pro Monat gegoogelt. Google liefert dafür die lokale Karten-Einblendung mit den drei am besten bewerteten Fotograf:innen im Umkreis — das „Local Pack". Wer hier steht, bekommt die meisten Anfragen.',
          'Wenn ihr „Fotograf in der Nähe" googelt, bekommt ihr Ergebnisse basierend auf eurem Standort. Das ist fair, aber nicht immer optimal. Ein Fotograf aus dem Nachbarort mit exzellentem Portfolio kann die bessere Wahl sein als das Studio in eurer Straße. Ergänzt die Suche daher immer um den Genre-Typ: „Hochzeitsfotograf in der Nähe", „Bewerbungsfotos in der Nähe", „Familienfotograf in der Nähe".',
          'Für konkrete Ergebnisse in NRW nutzt auch Google-Maps direkt. Dort könnt ihr nach Region filtern, Bewertungen vergleichen und die Fotos im Profil anschauen. Google zeigt zusätzlich oft die meistgestellten Fragen („Lieferzeit", „Preise", „Stil") — daran erkennt ihr, wo das Studio einen Fokus hat.',
          'Wer in Euskirchen, Köln, Bonn oder dem Rheinland sucht: unsere Studio-Seite [Lichtraum Fotostudio](/) führt alle Services und Städte, die wir bedienen, in der Übersicht. Wer anderswo in NRW sucht, findet über unseren [Fotograf-NRW-Hub](/hochzeitsfotograf-nrw) eine regionale Übersicht.',
        ],
      },
      {
        h2: 'Schritt 1: Die richtigen Suchbegriffe',
        paragraphs: [
          'Zu allgemein ist „Fotograf NRW" — das liefert über 800.000 Ergebnisse und keine Filterung. Zu spezifisch ist „Editorial-Hochzeitsfotograf mit Reportagestil Düsseldorf unter 2.500 €" — hier gibt es kaum natürliche Suchergebnisse.',
          'Der produktive Mittelweg: Genre plus Stadt. „Hochzeitsfotograf Köln", „Familienfotograf Bonn", „Bewerbungsfotograf Düsseldorf". Damit kommt ihr auf ca. 10–30 lokale Profile, die realistisch erreichbar sind.',
          'Ergänzend: Instagram-Suche mit Hashtags („#hochzeitsfotografnrw", „#fotografkoeln"). Instagram zeigt Stil und Frequenz besser als die meisten Websites. Achtet auf Regelmäßigkeit der Posts — wer seit vier Monaten nichts mehr postet, ist eventuell im Ausstieg.',
        ],
      },
      {
        h2: 'Schritt 2: Portfolio-Check — worauf es wirklich ankommt',
        paragraphs: [
          'Qualität, nicht Quantität. Fünf außergewöhnliche Bilder sagen mehr als 200 durchschnittliche. Fotograf:innen, die ihr Portfolio nicht kuratieren, werden es auch bei eurer Hochzeit nicht tun.',
          'Konsistenz im Stil. Wenn ein Portfolio zehn sehr unterschiedliche Bildsprachen zeigt (mal dunkel-moody, mal poppig-hell, mal harte Kontraste, mal Pastell), fehlt die ästhetische Handschrift — und ihr wisst nicht, was ihr bekommt.',
          'Echte Menschen, keine Models. Wenn ein Portfolio ausschließlich aus „shootings with models" besteht, habt ihr keine Referenz dafür, wie der Fotograf mit euren echten, nicht-posierten Gästen umgeht. Sucht nach Hochzeiten mit normalen Menschen.',
          'Zeige-mir-eine-komplette-Hochzeit-Test. Fragt, ob man eine komplette Hochzeitsgalerie sehen kann — nicht nur die Highlights. Wer nur die Top-20 zeigt, versteckt potenziell die restlichen 480. Ein guter Fotograf zeigt auf Nachfrage gerne eine Vollgalerie, zumindest passwortgeschützt.',
        ],
      },
      {
        h2: 'Schritt 3: Bewertungen richtig lesen',
        paragraphs: [
          'Google-Rezensionen sind der Standard. Weniger als 4,5 Sterne bei einer soliden Anzahl (50+) ist ein Warnsignal. Aber: sehr viele perfekte 5-Sterne-Rezensionen mit ähnlichem Wortlaut deuten auf geschenkte oder gekaufte Bewertungen hin.',
          'Lest die negativen Bewertungen — aber besonders die Antworten des Fotografen. Wie jemand mit Kritik umgeht, verrät mehr über die Zusammenarbeit als 10 positive Stimmen. Sachlich-verständnisvolle Antworten: gutes Zeichen. Defensive oder bissige Antworten: schlechtes Zeichen.',
          'Hochzeitsfotografen haben oft auch Bewertungen auf hochzeitsguide.com, mywed.com oder brautfee.de. Diese Plattformen sind spezifischer und oft ehrlicher als allgemeine Google-Bewertungen.',
        ],
      },
      {
        h2: 'Schritt 4: Red Flags',
        paragraphs: [
          'Kein Preis auf der Website. Manche hochpreisigen Fotografen machen das bewusst — aber bei Einsteigern signalisiert es oft, dass die Preise verhandelbar/unsicher sind. Bittet explizit um eine Preisliste; Weigerung ist ein Warnsignal.',
          'Kein Vertrag. Professionelle Fotografen arbeiten immer mit Vertrag, der Leistung, Ausfallregelung, Copyright und Anzahlung definiert. Ohne Vertrag habt ihr bei Problemen keine Handhabe.',
          'Kein Backup-Versprechen. Fragt direkt: „Was passiert, wenn Sie krank sind?" Ein guter Fotograf hat ein Netzwerk aus Kolleg:innen mit Stil-Nähe, auf die im Notfall zurückgegriffen werden kann.',
          'Nur ein Kamera-Gehäuse. Bei Hochzeiten arbeiten Profis mit zwei oder drei Gehäusen parallel. Wer erzählt, dass er „nur eine Kamera" nutzt, signalisiert entweder Hobby-Niveau oder Fahrlässigkeit — beim Ausfall ohne Backup ist die Hochzeit verloren.',
          'Keine Anzahlung/Kaution. Seriöse Fotografen sichern Termine mit Anzahlungen (20–30 %). Wer ohne Anzahlung bucht, bucht oft gleichzeitig andere — und verschiebt bei besseren Angeboten.',
        ],
      },
      {
        h2: 'Schritt 5: Das Beratungsgespräch',
        paragraphs: [
          'Vereinbart ein 30-Minuten-Gespräch (Telefon, Video oder persönlich) mit euren 2–3 Favoriten. Vor der Entscheidung ist das der wichtigste Einzelschritt.',
          'Beobachtet: zuhören oder reden die Fotograf:innen? Gute Fotograf:innen fragen. Wer von der ersten Minute an über die eigene Arbeit spricht, signalisiert, dass ihr zum Portfolio passen müsst, nicht umgekehrt.',
          'Fragen, die ihr stellen solltet: Wie geht ihr mit Regenwetter um? Wie lange dauert die Lieferung? Was passiert bei Krankheit? Wie viele Hochzeiten pro Wochenende maximal? (Unter 2 pro Wochenende ist ein gutes Signal für Qualität.)',
          'Chemie. Wenn ihr das Gespräch beendet und denkt „den/die mag ich" — das ist der wichtigste Faktor. Ihr werdet diese Person zehn Stunden um euch haben. Technik kann man lernen, Chemie nicht.',
        ],
      },
    ],
    closing: 'Die Suche nach dem richtigen Fotografen in NRW ist weniger eine Frage von Technik und Preis, als eine Frage von Vertrauen und Stil-Übereinstimmung. Nehmt euch die Zeit für zwei oder drei ernsthafte Gespräche. Die 60 Minuten davor sind die bestinvestierten Minuten der gesamten Hochzeitsplanung oder Foto-Projektplanung.',
  },

  // ============================================================
  // ARTIKEL 5 — Getting Ready Hochzeit
  // Ziel-Keyword: getting ready hochzeit (200 Vol, Comp 27 %)
  // ============================================================
  {
    slug: 'getting-ready-hochzeit',
    title: 'Getting Ready: So wird der Morgen eurer Hochzeit zur schönsten Zeit',
    description: 'Getting Ready: Was passiert am Hochzeitsmorgen, wie plant ihr richtig, was macht der Fotograf dabei? Unser Komplett-Guide mit Zeitplan und Checkliste.',
    publishedDate: '2026-03-28',
    readTime: 8,
    author: 'Lichtraum Studio',
    category: 'Hochzeit',
    keyword: 'Getting Ready Hochzeit',
    heroImage: '/images/blog/getting-ready-hero.jpg',
    bodyImages: [
      '/images/blog/getting-ready-kleid-am-buegel.jpg',
      '/images/blog/getting-ready-make-up.jpg',
      '/images/blog/getting-ready-brief.jpg',
      '/images/blog/getting-ready-schuhe.jpg',
      '/images/blog/getting-ready-spiegel.jpg',
    ],
    relatedLinks: [
      { href: '/blog/hochzeitsfotograf-kosten-preise', label: 'Hochzeitsfotograf Kosten & Preise 2026' },
      { href: '/blog/hochzeitslocations-nrw-rheinland', label: 'Die 15 schönsten Hochzeitslocations in NRW & im Rheinland' },
      { href: '/hochzeitsfotograf-koeln', label: 'Hochzeitsfotograf Köln' },
      { href: '/hochzeitsfotograf-euskirchen', label: 'Hochzeitsfotograf Euskirchen' },
    ],
    intro: [
      'Wenn ihr euer Hochzeitsalbum in zwanzig Jahren aufschlagt, wird es eine Seite geben, die euch besonders berührt: die Getting-Ready-Bilder. Die stillen Minuten vor der Trauung, in denen ihr getrennt voneinander letztmals die Luft der Single-Zeit atmet. Die Mutter, die die letzte Schleife am Kleid bindet. Der beste Freund, der den Knoten der Krawatte richtet. Der eigene Brief, den ihr kurz vor dem Gang zum Altar an eure Partner:in schreibt.',
      'Getting Ready ist vielleicht der emotionalste Teil eines Hochzeitstages. Und gleichzeitig ist es der Teil, den viele Paare am schlechtesten planen. Zu wenig Zeit, der falsche Ort, eine Fotografenankunft mitten im Stress-Moment. Dieser Guide soll das verhindern.',
    ],
    sections: [
      {
        h2: 'Warum Getting Ready der emotionalste Teil des Tages ist',
        paragraphs: [
          'In der Hochzeitsplanung konzentriert man sich auf die großen Momente: Trauung, erster Kuss, erster Tanz. Das sind die Fotos, die später auf der Einladungskarte stehen. Aber die Bilder, die euch in zehn Jahren am meisten berühren, kommen oft vom Getting Ready — weil hier die Emotionen noch ungefiltert sind, weil die Gäste noch nicht da sind, weil ihr noch ganz bei euch seid.',
          'Die Vorfreude, die Nervosität, die letzten Handgriffe am Kleid oder der Krawatte, die gemeinsamen Tränen mit Mutter oder Trauzeuge — all das passiert in den zwei Stunden vor der Trauung. Es ist das intimste Fenster eurer Hochzeit. Ein guter Fotograf wird es diskret begleiten, ohne es zu unterbrechen.',
        ],
      },
      {
        h2: 'Zeitplan — wie viel solltet ihr einplanen?',
        paragraphs: [
          'Als Faustregel: drei Stunden vor der Trauung sollte der Getting-Ready-Prozess beginnen — zwei davon sind aktive Styling-Zeit, die letzte Stunde ist Puffer für Fotos, stille Momente und die Anfahrt zur Trauung.',
          'Für die Braut: Make-up und Frisur benötigen typischerweise 90 bis 120 Minuten (kombiniert), wenn eine Visagistin im Haus ist. Dazu kommt das Anziehen des Kleides (15–30 Minuten je nach Schnürung und Detail). Der Fotograf sollte etwa eine Stunde vor der geplanten Abfahrt zur Trauung ankommen.',
          'Für den Bräutigam: Rasur, Styling und Anziehen brauchen zusammen meist 45 bis 60 Minuten. Der Fotograf kann hier 45 Minuten vor Abfahrt kommen. Wichtig: wenn zwei Getting-Readys parallel stattfinden (Braut bei den Eltern, Bräutigam im Hotel), braucht ihr entweder einen Zweitfotografen oder ihr plant die Besuche gestaffelt.',
          'Destination-Hochzeiten oder Mikro-Hochzeiten haben andere Anforderungen: bei einem Standesamt mit direkt anschließender Feier im gleichen Ort kann Getting Ready auch parallel zur Zeremonie-Vorbereitung stattfinden. Klärt das mit eurem Fotografen in der Planung.',
        ],
      },
      {
        h2: 'Was der Fotograf dabei macht (und was nicht)',
        paragraphs: [
          'Ein guter Fotograf dokumentiert, statt zu inszenieren. Das heißt: er wird am Rand stehen, leise zuschauen, und erst dann eingreifen, wenn ein Bild-Aufbau gewünscht ist (Kleid am Bügel, Ringe, Details).',
          'Was er macht: Details festhalten (Blumen, Schmuck, Einladungskarten, Schuhe, Parfumflacon, Brief an den/die Partner:in). Kandide Reaktionen fotografieren (Mutter, die Tränen in den Augen hat; Freundin, die hilft; Tochter, die beobachtet). Die Übergabe-Momente festhalten (erstes Mal Kleid anziehen, Krawatte knüpfen, Schuhe zubinden).',
          'Was er nicht macht: posierte Gruppenfotos erzwingen, das Tempo beeinflussen, bei intimen Familienmomenten die Kamera gerade darauf richten. Unsere Regel: wir sind so unsichtbar wie möglich, aber immer im richtigen Moment dabei.',
          'Eine Bitte: weist Gäste und Familie vor dem Tag darauf hin, dass ihr einen Fotografen im Getting-Ready habt. Das vermeidet überraschte Reaktionen oder peinliche Momente. Wer bewusst „keine Fotos jetzt" sagen möchte, kann das tun — wird respektiert.',
        ],
      },
      {
        h2: 'Requisiten, die auf den Fotos etwas ausmachen',
        paragraphs: [
          'Kleine Dinge werden zu starken Bildern, wenn sie am richtigen Ort liegen. Legt am Vorabend zusammen, was ihr beim Getting Ready bei euch haben wollt.',
          'Das Kleid am Bügel, an einem gut beleuchteten Fenster oder an einer neutralen Wand — nicht im Bad oder in einem überfüllten Zimmer. Die Schuhe, am besten auf einer ruhigen Unterlage, mit genug Platz drum herum. Die Ringe — in ihrer Schatulle oder auf einem Tuch arrangiert, bevor sie angesteckt werden.',
          'Die Einladungskarte eurer Hochzeit ist ein beliebtes Detail für Flatlays. Ein Flatlay ist ein von oben fotografiertes Arrangement mehrerer Hochzeitsdetails (Karte, Schleier, Ringe, Parfum, Strauß-Elemente) — einer der Klassiker in der Hochzeitsreportage.',
          'Ein handgeschriebener Brief an den/die Partner:in, der am Morgen der Trauung gelesen wird — das gibt immer starke Emotions-Fotos. Wir schlagen das manchmal in der Planung vor, wenn das Paar Getting Ready getrennt feiert.',
          'Blumen — ein Teil des Brautstraußes oder eine einzelne Rose, die an einem fotogenen Ort liegt. Bei Wintertrauungen sind Kerzen eine gute Alternative; bei Outdoor-Trauungen im Sommer funktionieren frische Wiesenblumen.',
        ],
      },
      {
        h2: 'Licht im Zimmer — darauf achtet ihr am besten',
        paragraphs: [
          'Das wichtigste Getting-Ready-Kriterium, das oft vergessen wird: der Raum muss natürliches Licht haben. Kein fensterloses Hotelzimmer, kein zugezogenes Schlafzimmer in einem dunklen Hinterhaus. Ein Fotograf kann Licht ergänzen, aber nicht ersetzen — und künstliches Licht lässt Getting-Ready-Bilder oft kalt wirken.',
          'Optimal: Zimmer mit großem Fenster nach Nord oder Nordost (weiches, gleichmäßiges Licht ohne direkte Sonne). Wenn möglich, stellt den Getting-Ready-Ort (Kleid, Make-up-Bereich, Frisur-Stuhl) in Fensternähe auf.',
          'Vermeidet: Deckenlampen mit gelbem Licht (verfärben den Hautton), grelle Make-up-Spiegel-Lichter (verzerren Schatten), Zimmer mit vielen Spiegeln (schwierig für Fotografen, keine klare Perspektive).',
          'Bei Hotels könnt ihr das Zimmer oft vorab aussuchen. Ein Anruf bei der Rezeption eine Woche vor dem Termin mit der Bitte um ein Zimmer mit großem Fenster wirkt meist Wunder.',
        ],
      },
      {
        h2: 'Die Checkliste für die letzte Stunde',
        paragraphs: [
          'Die letzten 60 Minuten vor der Trauung sind meist die emotionalsten — und chaotischsten. Diese Checkliste hilft, Ruhe zu behalten.',
        ],
        list: [
          '60 min vorher: Make-up und Frisur final, Kleid/Anzug am Körper',
          '45 min vorher: Ringe, Schmuck, Schuhe bereit',
          '30 min vorher: Brief an den/die Partner:in lesen (falls geplant)',
          '25 min vorher: Gruppenbilder mit den engsten Angehörigen (optional)',
          '20 min vorher: 5 Minuten Stille — nur du allein, kein Spiegel, kein Handy',
          '15 min vorher: letzter Schluck Wasser (nicht zu viel)',
          '10 min vorher: Abfahrt zur Trauungs-Location',
          '5 min vorher: vor Ort sein, im Auto oder Seitenbereich nochmal durchatmen',
        ],
      },
    ],
    faqs: [
      {
        question: 'Sollen wir uns vor der Trauung sehen oder nicht?',
        answer: 'Das ist eine Stilfrage. Klassisch gilt: nein, der erste Blick erfolgt beim Altar. Modern ist der „First Look" — ein gemeinsamer Moment vor der Trauung, fotografiert unter vier Augen. Beide Varianten haben ihre Stärken. Der First Look gibt euch mehr Zeit für Paarportraits vor der Zeremonie und nimmt Nervosität. Der klassische „am Altar"-Moment ist dramatischer auf den Bildern.',
      },
      {
        question: 'Was, wenn die Visagistin länger braucht als geplant?',
        answer: 'Das ist der häufigste Getting-Ready-Stress. Plant daher pauschal 20 Minuten Puffer ein. Wenn ihr merkt, dass es eng wird: kurze Durchsage an Fotograf und Gäste, dass die Abfahrt sich um 10 Minuten verschiebt. Niemand wird das übelnehmen — aber stummes Hetzen macht die Getting-Ready-Bilder schlechter.',
      },
      {
        question: 'Sollen Eltern beim Getting Ready dabei sein?',
        answer: 'Fast immer ja, wenn das Verhältnis gut ist. Die Momente mit Mutter, Vater, Geschwistern kurz vor der Trauung gehören zu den emotionalsten Fotos des Tages. Eine kleine Bitte: sprecht vorher mit ihnen ab, dass sie anwesend sind, aber nicht alle gleichzeitig kommentieren — das erhält die Stimmung.',
      },
      {
        question: 'Wie viele Bilder bekommen wir vom Getting Ready?',
        answer: 'Ein Ganztags-Fotopaket liefert typischerweise 80–150 Getting-Ready-Bilder. Das klingt viel, ist aber die Summe aus Details, Reportage-Momenten und persönlichen Interaktionen. In der Endauswahl werden etwa 40–60 Bilder im Album oder auf Social Media landen.',
      },
      {
        question: 'Kann man Getting Ready auch zu Hause statt im Hotel machen?',
        answer: 'Absolut — und es ist oft die schönere Wahl. Zuhause seid ihr ruhiger, das Licht ist vertrauter, kleine Lebensdetails (Familienfotos an der Wand, der Hund im Flur) erzählen eure Geschichte. Einzige Bedingung: das Zimmer sollte groß genug sein und ausreichend Tageslicht haben.',
      },
    ],
    closing: 'Getting Ready ist die stille Mitte zwischen dem Alltag vorher und dem Fest nachher. Es ist die Zeit, die sich am meisten lohnt, nicht zu verplanen — sondern offen zu lassen für Spontaneität, Emotion, und für das, was dann wirklich passiert. Wir als Fotografen sind in dieser Zeit Beobachter, nicht Regisseure. Und genau deshalb sind die Bilder am Ende die, die ihr am meisten in Ehren halten werdet.',
  },
]
