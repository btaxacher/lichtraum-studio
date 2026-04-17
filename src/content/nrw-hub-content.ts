/**
 * Content für /hochzeitsfotograf-nrw — Regional-Hub für Hochzeits-Queries.
 */
import type { FAQ, Section } from './tier1-content'

export type HubCityCard = {
  h3: string
  slug: string
  description: string
  locations: string[]
}

export const nrwHubContent = {
  meta: {
    h1: 'Hochzeitsfotograf NRW — von Köln bis zur Eifel',
    title: 'Hochzeitsfotograf NRW | Lichtraum — Köln, Bonn, Euskirchen, Rheinland',
    // V3 — getrimmt auf 155 Zeichen (vorher 180)
    description: 'Hochzeitsfotograf NRW & Rheinland: Köln, Bonn, Eifel, Rhein-Erft, Bergisches Land. Editorial-Reportagen ab 1.790 €. Regional aus Euskirchen.',
    eyebrow: 'Hochzeitsreportage · Nordrhein-Westfalen',
  },
  intro: [
    'Nordrhein-Westfalen ist fotografisch ein Mosaik aus sehr unterschiedlichen Landschaften. Köln und Bonn als Rhein-Metropolen, das Bergische Land mit Schlössern und Wäldern, die Eifel mit Burgen und Mittelgebirge, das Ruhrgebiet mit Industriekultur. Für Hochzeitsreportagen bedeutet das: keine andere Region Deutschlands bietet so viele Stilrichtungen innerhalb einer Stunde Fahrweg.',
    'Als Hochzeitsfotograf für NRW operieren wir aus Euskirchen — strategisch zentral zwischen Köln, Bonn, der Eifel und dem Bergischen Land. 45 Minuten bis Köln-Innenstadt, 45 Minuten bis Bonn-Zentrum, 30 Minuten bis Schloss Gracht, 20 Minuten bis Burg Satzvey. Das erlaubt uns, jede größere NRW-Hochzeit ohne Fahrtkostenpauschale abzudecken.',
    'Diese Seite ist Ihre Übersicht: wo wir regelmäßig fotografieren, welche Locations wir empfehlen, und unter welchen Slugs Sie detailliertere Informationen zu Ihrer Stadt finden.',
  ],
  sections: [
    { h2: 'Drei große Zentren — wo wir am häufigsten fotografieren',
      body: [
        'Köln ist das fotografisch dichteste Gebiet — Dom, Rheinauhafen, Hohenzollernbrücke, Flora, Schlösser Augustusburg und Bensberg im Umland. Entsprechend viele unserer Reportagen entstehen dort. Preiskorridor: 1.500 bis 3.500 € je nach Paket, 12 bis 18 Monate Vorlauf für Samstage in der Hochsaison.',
        'Bonn hat einen anderen Rhythmus — kleiner, ruhiger, mit einer einzigartigen Lichtqualität durch das Siebengebirge. Die großen Locations (Petersberg, Redoute, Drachenburg) liegen dichter beieinander als in Köln. Für Paare, die eine konzentriertere Hochzeit mit weniger Transferzeiten suchen, oft die bessere Wahl.',
        'Die Eifel und der Kreis Euskirchen sind unser Heimat-Terrain. Burg Satzvey, Kloster Steinfeld, Schloss Gracht, Burg Flamersheim — alles in 20 bis 30 Minuten von unserem Studio. Für Paare, die Burgen, Wälder und Eifel-Landschaft als Kulisse wünschen, sind wir die nächstgelegenen Experten.',
      ],
    } as Section,
    { h2: 'Wie unsere NRW-Reportage funktioniert',
      body: [
        'Unabhängig davon, wo Sie in NRW heiraten: der Prozess bei uns ist gleich. Erstgespräch per Video oder Telefon, schriftliches Angebot mit fixem Preis, Planungsgespräch 4 Wochen vor der Hochzeit, Reportage am Tag selbst, Vorschau binnen 72 Stunden, finale Galerie binnen 4 bis 6 Wochen.',
        'Anfahrten im Rheinland (Köln, Bonn, Rhein-Erft, Leverkusen, Bergisch Gladbach) sind im Paketpreis enthalten. Ab Düsseldorf, Aachen oder Ruhrgebiet rechnen wir mit einer moderaten Fahrtkostenpauschale.',
        'Unser Stil ist unabhängig von der Location gleich: Reportage mit Editorial-Einschlag, ruhig, dokumentarisch, ohne Inszenierung. Das Licht und die Kulisse passen wir regional an — Dom-Hochzeiten brauchen andere Bearbeitung als Burg-Hochzeiten.',
      ],
    } as Section,
    { h2: 'Pakete, Preise und was NRW-Paare typischerweise buchen',
      body: [
        'Für NRW-Hochzeiten empfehlen wir je nach Umfang drei Paket-Größen. Standesamt-Reportage (3 Stunden, 890 €) für Mikro-Hochzeiten bis 25 Gästen, meist im Stadthaus oder einer kleinen Kapelle. Halbtag (6 Stunden, 1.490 €) für Standard-Hochzeiten mit kurzer Zeremonie und Feier bis zum Abendessen. Ganztag (10 Stunden, 1.890 €) als beliebtestes Paket — deckt Getting-Ready, Zeremonie, Portraits und Feier bis zum ersten Tanz ab. Premium (12 Stunden plus After-Wedding-Shoot, 2.790 €) für großflächige Hochzeiten mit internationalem Gästekreis.',
        'Der Zweitfotograf (+ 490 €) ist bei NRW-Hochzeiten ab 80 Gästen fast immer sinnvoll, weil die üblichen Locations (Augustusburg, Petersberg, Bensberg) weitläufig sind und parallele Szenen (Getting-Ready Braut und Bräutigam, Außen- und Innenaufnahmen der Zeremonie) häufig gleichzeitig stattfinden.',
        'Typisch für NRW-Paare: sie buchen meist 10 bis 18 Monate vor dem Termin. Für Samstags-Hochzeiten in der Hauptsaison (Mai bis September) an etablierten Locations sind 14 Monate Vorlauf inzwischen die Regel. Kurzfristige Anfragen (unter 6 Monaten) bedienen wir bevorzugt für Wochentage und für Nebensaison-Termine.',
      ],
    } as Section,
    { h2: 'Was NRW-Hochzeiten fotografisch besonders macht',
      body: [
        'NRW ist in Deutschland die dichteste Hochzeits-Region — mehr Locations, mehr Fotograf:innen, mehr stilistische Vielfalt als in jedem anderen Bundesland. Das Bergische Land liefert waldreiche, ruhige Kulissen. Der Rhein fungiert als Nord-Süd-Achse mit dramatischen Sonnenuntergängen. Die Eifel bringt Burgen und Mittelgebirgsstimmung. Das Münsterland fügt weite Felder hinzu.',
        'Für unsere Paare bedeutet das: wir können fast jeden Stil realisieren, ohne eine lange Anfahrt. Eine editorial-urbane Hochzeit in Köln-Innenstadt, eine romantisch-ländliche in der Eifel, eine prestigeträchtig-barocke in Brühl oder Pulheim — alles technisch und logistisch ohne Stress erreichbar.',
        'Das Wetter in NRW ist wechselhaft, was fotografisch eher ein Vorteil ist: weiche Wolkendecken statt harter Mittagssonne, Nebelstimmung im Herbst, dramatische Wolken im Sommer. Wir planen grundsätzlich Plan-B-Szenarien für jede Reportage.',
      ],
    } as Section,
  ],
  cityCards: [
    {
      h3: 'Köln & Rhein-Erft',
      slug: 'hochzeitsfotograf-koeln',
      description: 'Die fotografisch dichteste Region. Dom, Rheinauhafen, Augustusburg, Bensberg.',
      locations: ['Kölner Dom', 'Schloss Augustusburg (Brühl)', 'Schloss Bensberg', 'Rheinauhafen', 'Flora', 'Schloss Gracht (Erftstadt)'],
    },
    {
      h3: 'Bonn & Siebengebirge',
      slug: 'hochzeitsfotograf-bonn',
      description: 'Petersberg, Redoute, Drachenburg. Ruhigere Kulisse als Köln.',
      locations: ['Petersberg Hotel', 'Redoute Bad Godesberg', 'Schloss Drachenburg', 'Kurfürstliches Schloss', 'Rheinaue', 'Gut Heckenhof'],
    },
    {
      h3: 'Euskirchen & Eifel',
      slug: 'hochzeitsfotograf-euskirchen',
      description: 'Burg Satzvey, Kloster Steinfeld, Eifel-Natur. Unsere Heimatregion.',
      locations: ['Burg Satzvey', 'Burg Flamersheim', 'Kloster Steinfeld', 'Steinbachtalsperre', 'Gut Frielinghausen', 'Burg Metternich (Weilerswist)'],
    },
  ] as HubCityCard[],
  faqs: [
    { q: 'Kommen Sie in alle NRW-Städte?',
      a: 'Ja, für größere Hochzeiten kommen wir im gesamten Rheinland ohne Aufpreis. Das umfasst Köln, Bonn, Leverkusen, Bergisch Gladbach, Rhein-Erft-Kreis, Rhein-Sieg-Kreis, Euskirchen, Düren und die Eifel. Für Düsseldorf, Aachen und das Ruhrgebiet rechnen wir mit einer moderaten Fahrtkostenpauschale (meist 80 bis 150 €).' },
    { q: 'Warum einen Fotografen aus Euskirchen statt Köln oder Düsseldorf?',
      a: 'Preislich liegen wir durch den Euskirchener Standort 15 bis 25 Prozent unter Kölner und Düsseldorfer Niveau — bei identischer technischer Qualität. Inhaltlich bringen wir einen leicht „äußeren" Blick mit, der die Standortarchitektur oft frischer einfängt. Und logistisch sind wir regional gut vernetzt: wir kennen Standesamtsbeamt:innen, Trauredner:innen und Hochzeits-Planer:innen in beiden Metropolen.' },
    { q: 'Haben Sie eine eigene NRW-Galerie?',
      a: 'Ja, unsere Portfolio-Seite zeigt Arbeiten aus dem gesamten Rheinland. Für spezifische Regionen (Kölner Hochzeit, Bonner Hochzeit, Eifel-Hochzeit) haben wir detaillierte Unterseiten mit regionalem Content und Location-Wissen.' },
    { q: 'Wie unterscheidet sich eine Eifel-Hochzeit von einer Köln-Hochzeit fotografisch?',
      a: 'Das Licht ist weicher und grüner in der Eifel, durch Wälder und Höhenlage. Farbbearbeitung wird entsprechend zurückhaltender und warmer. Kölner Hochzeiten haben oft mehr kontrastreiche urbane Spiegelungen, mehr Glaskulissen, härteres Nachmittagslicht am Rhein. Wir passen den Bearbeitungsstil pro Hochzeit an, ohne den Gesamtstil zu verwässern.' },
    { q: 'Kommen Sie zum Location-Scout vor der Hochzeit?',
      a: 'Auf Wunsch ja, gegen moderate Vergütung (150 bis 250 € je nach Anfahrt). Bei ungewöhnlichen Locations (seltene Burgen, private Gärten) empfehlen wir einen Vorabtermin. Bei etablierten Hochzeitslocations (Augustusburg, Petersberg, Bensberg, Satzvey) kennen wir die Räume bereits und können ohne Scout planen.' },
  ] as FAQ[],
  closing: 'Egal, wo Sie in NRW heiraten — wir prüfen Ihre Anfrage und senden binnen 24 Stunden ein schlüssiges Angebot zurück. Bei unüblichen Locations bringen wir im Zweifel einen Vorabtermin als Option ein.',
}
