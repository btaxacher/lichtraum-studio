/**
 * Legal content (Impressum + Datenschutz).
 * Contains placeholder markers that trigger a "not ready" banner on the page.
 * Before go-live, replace all `[...]` tokens below.
 */

export const INCOMPLETE_MARKER = '[INHABER-NAME]'

type Block = { h2?: string; paragraphs: string[] }

export const impressumContent = {
  lastUpdated: '2026-04-16',
  blocks: [
    {
      h2: 'Angaben gemäß § 5 TMG',
      paragraphs: [
        'Lichtraum Fotostudio',
        'Bastian Taxacher',
        'c/o Impressumservice Dein-Impressum',
        'Stettiner Straße 41',
        '35410 Hungen',
        'Deutschland',
      ],
    },
    {
      h2: 'Kontakt',
      paragraphs: [
        'E-Mail: kontakt@lichtraum-euskirchen.de',
        'Web: lichtraum-euskirchen.de',
      ],
    },
    {
      h2: 'Umsatzsteuer',
      paragraphs: [
        'Kleinunternehmer gemäß § 19 UStG — daher keine Umsatzsteuer auf Rechnungen.',
      ],
    },
    {
      h2: 'Berufsbezeichnung und berufsrechtliche Regelungen',
      paragraphs: [
        'Berufsbezeichnung: Fotograf/in (freier Beruf)',
        'Zuständige Kammer: Keine Kammerzugehörigkeit, da künstlerisch-gestaltende Tätigkeit.',
        'Verliehen in: Bundesrepublik Deutschland.',
      ],
    },
    {
      h2: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
      paragraphs: [
        'Bastian Taxacher',
        'c/o Impressumservice Dein-Impressum',
        'Stettiner Straße 41',
        '35410 Hungen',
      ],
    },
    {
      h2: 'Streitschlichtung',
      paragraphs: [
        'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.',
        'Unsere E-Mail-Adresse finden Sie oben im Impressum.',
        'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
      ],
    },
    {
      h2: 'Haftung für Inhalte',
      paragraphs: [
        'Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
        'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
      ],
    },
    {
      h2: 'Haftung für Links',
      paragraphs: [
        'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
        'Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.',
      ],
    },
    {
      h2: 'Urheberrecht',
      paragraphs: [
        'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.',
        'Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Fotos auf dieser Seite sind Werke des Lichtraum Fotostudios. Eine Weiterverwendung ohne Zustimmung ist nicht zulässig.',
      ],
    },
  ] as Block[],
}

export const datenschutzContent = {
  lastUpdated: '2026-04-16',
  blocks: [
    {
      h2: '1. Datenschutz auf einen Blick',
      paragraphs: [
        'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.',
        'Ausführliche Informationen zum Thema Datenschutz entnehmen Sie den folgenden Abschnitten.',
      ],
    },
    {
      h2: '2. Verantwortliche Stelle',
      paragraphs: [
        'Verantwortlich für die Datenverarbeitung auf dieser Website ist:',
        'Lichtraum Fotostudio',
        'Bastian Taxacher',
        'c/o Impressumservice Dein-Impressum',
        'Stettiner Straße 41',
        '35410 Hungen',
        'E-Mail: kontakt@lichtraum-euskirchen.de',
        'Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, Kontaktdaten o. Ä.).',
      ],
    },
    {
      h2: '3. Datenerfassung auf dieser Website',
      paragraphs: [
        'Einige Daten werden erhoben, wenn Sie uns diese mitteilen. Dies könnten z. B. Daten sein, die Sie in ein Kontaktformular eingeben.',
        'Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.',
      ],
    },
    {
      h2: '4. Hosting — Vercel',
      paragraphs: [
        'Diese Website wird gehostet bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA ("Vercel"). Beim Besuch der Website erfasst Vercel automatisch verschiedene Logfiles inklusive Ihrer IP-Adressen.',
        'Die Nutzung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Soweit eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG.',
        'Vercel hat Standardvertragsklauseln gemäß Art. 46 DSGVO für internationale Datenübermittlung unterzeichnet. Weitere Informationen: https://vercel.com/legal/privacy-policy',
      ],
    },
    {
      h2: '5. Kontaktformular und Anfrage per E-Mail',
      paragraphs: [
        'Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.',
        'Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.',
        'Das Kontaktformular dieser Website wird optional über den Dienst Web3Forms abgewickelt. Anbieter: Hammercode Ventures LLC. Die Formulardaten werden über verschlüsselte Verbindung an uns weitergeleitet und nicht bei Web3Forms dauerhaft gespeichert. Weitere Informationen: https://web3forms.com/privacy.',
      ],
    },
    {
      h2: '6. Cookies',
      paragraphs: [
        'Unsere Website verwendet keine Tracking-Cookies. Wir setzen ausschließlich technisch notwendige Cookies, die für den Betrieb der Website unerlässlich sind. Diese werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert.',
        'Sollten wir in Zukunft Analysewerkzeuge einsetzen (z. B. Plausible Analytics in datenschutzfreundlicher Konfiguration), aktualisieren wir diese Datenschutzerklärung entsprechend.',
      ],
    },
    {
      h2: '7. Eingebettete Schriftarten (Google Fonts)',
      paragraphs: [
        'Diese Seite verwendet Webfonts von Google. Die Schriftarten werden nicht dynamisch von Google-Servern nachgeladen, sondern im Build-Prozess statisch mit ausgeliefert, sodass keine Verbindung zu Google-Servern beim Seitenaufruf hergestellt wird. Dies erfolgt durch die Next.js-Font-Optimierung (`next/font/google`).',
      ],
    },
    {
      h2: '8. Externe Bildressourcen',
      paragraphs: [
        'Alle auf dieser Website gezeigten Bilder werden lokal von unserem Server ausgeliefert. Es werden keine externen Bild-Dienste (wie Unsplash, Getty oder ähnliche) eingebunden. Beim Laden der Bilder wird keine Verbindung zu Drittanbietern hergestellt.',
      ],
    },
    {
      h2: '9. Ihre Rechte',
      paragraphs: [
        'Sie haben jederzeit das Recht, Auskunft über Herkunft, Empfänger und Zweck der gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht auf Berichtigung oder Löschung dieser Daten sowie auf Einschränkung der Verarbeitung.',
        'Sie haben das Recht, eine erteilte Einwilligung jederzeit zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.',
        'Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren. Zuständig für Nordrhein-Westfalen: Landesbeauftragte für Datenschutz und Informationsfreiheit NRW, Kavalleriestraße 2–4, 40213 Düsseldorf. www.ldi.nrw.de',
      ],
    },
    {
      h2: '10. SSL-/TLS-Verschlüsselung',
      paragraphs: [
        'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie Kontaktanfragen, eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von http:// auf https:// wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.',
        'Wenn die SSL-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.',
      ],
    },
  ] as Block[],
}

export function hasPlaceholders(blocks: Block[]): boolean {
  return blocks.some((b) =>
    b.paragraphs.some((p) => p.includes(INCOMPLETE_MARKER) || p.includes('[STRASSE') || p.includes('[USt-ID')),
  )
}
