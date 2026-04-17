/**
 * Prompt bank for Lichtraum Fotostudio — Warm Editorial Light redesign.
 * Each prompt produces a single image via Gemini / Imagen (Nanobanana pipeline).
 *
 * All 21 images share the Kodak Portra 400 palette for visual cohesion across
 * hero, services, gallery, testimonials, studio, journal.
 */

const WARM_PREAMBLE =
  'Photorealistic editorial photography, Kodak Portra 400 color palette, warm creams, soft golds, muted greens, gentle film grain, natural available light, shallow depth of field, shot on Canon R5 with 85mm f/1.4, documentary authenticity (not posed stock photography), hands and faces clearly visible when present. No text, no watermarks, no logos.'

export interface ImageJob {
  readonly key: string
  readonly filename: string // relative to public/images/
  readonly prompt: string
}

export const JOBS: readonly ImageJob[] = [
  // ================================================================
  // HERO — Single 3:4 vertical bride portrait (critical priority)
  // ================================================================
  {
    key: 'hero-bride-golden-hour',
    filename: 'redesign/hero-bride-golden-hour.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 3:4 aspect ratio (1600x2133). A bride in a simple flowing ivory silk dress stands in a golden-hour wheat field in the German Rhineland countryside near Euskirchen. She is looking away from camera, laughing softly, holding a small wildflower bouquet (cream peonies, eucalyptus, wheat stalks). Warm golden backlight, subtle sun flare in top-right corner. Soft bokeh trees in background (blurred, warm tones). No heavy makeup, natural beauty. Documentary feel, not posed.`,
  },

  // ================================================================
  // INTRO GREETING — 1:1 studio detail (no faces — studio is fictitious)
  // ================================================================
  {
    key: 'studio-detail-hands',
    filename: 'redesign/studio-detail-hands.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 aspect ratio (1400x1400). Close-up detail shot: two hands of a wedding photographer holding a vintage Hasselblad medium-format camera, warm natural window light streaming from the left. The hands are weathered and expressive, wearing a simple thin gold ring. Background softly blurred — a warm wood-paneled studio interior with dried pampas grass in a ceramic vase visible out of focus. Intimate, crafted, premium feel. No face visible.`,
  },

  // ================================================================
  // SERVICES — 4 square cards
  // ================================================================
  {
    key: 'service-hochzeit',
    filename: 'redesign/service-hochzeit.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (1200x1200). A bride and groom embracing in late-afternoon warm light, groom leaning his forehead against bride's temple, both with eyes closed. Bride in simple ivory dress, groom in warm-toned beige suit with open collar. Background: soft-blurred garden with warm stone wall. Cinematic documentary style, natural unposed moment.`,
  },
  {
    key: 'service-business',
    filename: 'redesign/service-business.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (1200x1200). Editorial business portrait of a professional woman in her early 30s, wearing a cream-colored blazer over a simple white shirt, looking directly at camera with a warm confident smile. Soft natural light from a large window on the left, creating gentle shadows. Background: muted warm-grey studio wall, slightly out of focus. Premium editorial style, no corporate stock vibes. 85mm f/2.8.`,
  },
  {
    key: 'service-familie',
    filename: 'redesign/service-familie.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (1200x1200). Editorial family photograph — a young family (mother in her 30s, father, and a 3-year-old child) walking hand-in-hand through a sunlit wheat field in the Rhineland. All in warm earth-tone clothing (cream, sand, rust). Child is laughing mid-stride. Golden-hour backlight, soft flare. Candid documentary feel.`,
  },
  {
    key: 'service-babybauch',
    filename: 'redesign/service-babybauch.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (1200x1200). Editorial maternity photograph — a pregnant woman in her third trimester, wearing a flowing cream silk dress, standing sideways against a warm sand-colored studio wall. Her hands rest gently on her belly. Soft diffused window light from above-left. Fine art portrait style, minimal, intimate. Warm creamy tones.`,
  },

  // ================================================================
  // GALLERY — 9 masonry images (cohesive Portra 400 palette)
  // ================================================================
  {
    key: 'gallery-01-kiss',
    filename: 'redesign/gallery-01-kiss.jpg',
    prompt: `${WARM_PREAMBLE} Portrait 4:5 aspect ratio (1600x2000). Wedding couple's first kiss under a warm afternoon sun, golden light flare visible, soft green vineyard background, intimate and candid.`,
  },
  {
    key: 'gallery-02-rings',
    filename: 'redesign/gallery-02-rings.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (1200x1200). Close-up detail of two simple gold wedding rings resting on a folded linen napkin with dried eucalyptus sprig, natural window light, warm tones, shallow focus.`,
  },
  {
    key: 'gallery-03-bride',
    filename: 'redesign/gallery-03-bride.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 3:4 (1200x1600). Bride in profile looking out of a window, sheer linen curtain catching morning light, cream dress, contemplative mood.`,
  },
  {
    key: 'gallery-04-family',
    filename: 'redesign/gallery-04-family.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (1200x1200). Parent lifting toddler mid-air, both laughing, cream and sand-tone clothing, outdoor warm afternoon light, candid.`,
  },
  {
    key: 'gallery-05-couple-field',
    filename: 'redesign/gallery-05-couple-field.jpg',
    prompt: `${WARM_PREAMBLE} Horizontal 3:2 (1800x1200). Engaged couple walking through a wheat field at golden hour, holding hands, back to camera, warm backlight, romantic.`,
  },
  {
    key: 'gallery-06-business',
    filename: 'redesign/gallery-06-business.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (1200x1200). Professional man in cream knit sweater, three-quarter profile, warm studio light, subtle confident expression.`,
  },
  {
    key: 'gallery-07-maternity',
    filename: 'redesign/gallery-07-maternity.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 3:4 (1200x1600). Silhouette of pregnant woman against a sheer curtained window, soft diffused morning light, serene and intimate.`,
  },
  {
    key: 'gallery-08-flowers',
    filename: 'redesign/gallery-08-flowers.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (1200x1200). Top-down shot of a bridal bouquet (cream peonies, eucalyptus, wheat stalks) on a weathered wood table, warm lamp light, editorial.`,
  },
  {
    key: 'gallery-09-firstdance',
    filename: 'redesign/gallery-09-firstdance.jpg',
    prompt: `${WARM_PREAMBLE} Horizontal 3:2 (1800x1200). First dance in a softly lit barn venue, warm bistro lights bokeh in background, couple in an embrace, intimate documentary feel.`,
  },

  // ================================================================
  // AVATARS — 3 Testimonial headshots
  // ================================================================
  {
    key: 'avatar-emilia',
    filename: 'redesign/avatar-emilia.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (400x400). Warm editorial close-up headshot of a woman in her late 20s with brown hair in a loose braid, gentle smile, cream-colored sweater, soft natural window light.`,
  },
  {
    key: 'avatar-sofia',
    filename: 'redesign/avatar-sofia.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (400x400). Warm editorial close-up headshot of a woman in her mid 30s, short dark hair, subtle confident smile, white blouse, soft daylight.`,
  },
  {
    key: 'avatar-marie',
    filename: 'redesign/avatar-marie.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (400x400). Warm editorial close-up headshot of a couple in their early 30s, both smiling softly at camera, warm beige clothing, soft natural light.`,
  },
  {
    key: 'avatar-charlotte',
    filename: 'redesign/avatar-charlotte.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (400x400). Warm editorial close-up headshot of a young engaged couple in their late 20s, woman with long dark hair, man with short brown hair and stubble, foreheads gently touching, both looking slightly off-camera with soft smiles, warm cream and sand tones in their clothing, soft golden-hour light.`,
  },
  {
    key: 'avatar-elena',
    filename: 'redesign/avatar-elena.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (400x400). Warm editorial close-up headshot of a woman in her early 40s, honey-blonde shoulder-length hair, calm confident expression, minimalist cream turtleneck, very soft diffused studio light from the left, shallow depth of field.`,
  },
  {
    key: 'avatar-helena',
    filename: 'redesign/avatar-helena.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (400x400). Warm editorial close-up headshot of a pregnant woman in her early 30s, auburn hair loosely pinned up, natural makeup, gentle introspective smile looking slightly down and to the side, flowing warm-ivory silk dress, soft window light.`,
  },

  // ================================================================
  // JOURNAL — 3 blog cards (16:10)
  // ================================================================
  {
    key: 'blog-01-locations',
    filename: 'redesign/blog-01-locations.jpg',
    prompt: `${WARM_PREAMBLE} 16:10 aspect ratio (1400x875). Beautiful castle wedding venue in the Rhineland, golden-hour exterior with ivy growing on warm stone walls, distant vineyards visible, romantic editorial feel.`,
  },
  {
    key: 'blog-02-outfit',
    filename: 'redesign/blog-02-outfit.jpg',
    prompt: `${WARM_PREAMBLE} 16:10 aspect ratio (1400x875). Minimalist flat-lay on cream linen of a professional outfit: cream blazer folded, simple gold jewelry, leather notebook, fountain pen, small eucalyptus sprig. Natural morning light, editorial.`,
  },
  {
    key: 'blog-03-preparation',
    filename: 'redesign/blog-03-preparation.jpg',
    prompt: `${WARM_PREAMBLE} 16:10 aspect ratio (1400x875). Bride-to-be getting ready, soft morning light through linen curtains, dressing-table detail with perfume bottle and fresh flowers in a ceramic vase, intimate and quiet.`,
  },

  // ================================================================
  // STUDIO — interior 1:1
  // ================================================================
  {
    key: 'studio-interior',
    filename: 'redesign/studio-interior.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (1400x1400). Interior of a warm photography studio in Germany. Natural daylight streaming through a large window on the left. Key elements: a simple wooden chair, a cream linen backdrop, a Hasselblad camera on a wooden stand, dried pampas grass in a tall ceramic vase, warm wood floor, exposed wooden beams on the ceiling. Color palette: creams, warm whites, soft golds, light oak wood. Intimate, crafted, not clinical. No people visible.`,
  },

  // ================================================================
  // JOBS — Bewerbungsfotos-Pool (Köln + Euskirchen)
  // 2 Heroes (3:4) + 9 shared gallery portraits
  // ================================================================
  {
    key: 'jobs-hero-koeln',
    filename: 'jobs/hero-koeln.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 3:4 aspect ratio (1200x1600). Editorial professional headshot of a confident woman in her mid-30s, tailored charcoal blazer over a cream silk blouse, hair pulled back into a low bun, warm subtle smile looking directly at camera, three-quarter framing. Background: softly out-of-focus Köln-style modern office — warm brick wall, large industrial windows to the left with late-afternoon golden light, hint of urban skyline. Sophisticated, upscale business editorial. Not corporate stock.`,
  },
  {
    key: 'jobs-hero-euskirchen',
    filename: 'jobs/hero-euskirchen.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 3:4 aspect ratio (1200x1600). Editorial professional headshot of a friendly, approachable man in his late 20s, warm caramel-toned knit sweater over a pressed white collar shirt (no tie), short neat hair, gentle confident half-smile looking directly at camera, three-quarter crop. Background: warm cream studio backdrop with soft natural daylight from a window on the left, simple wooden shelf just visible out of focus. Small-town German studio feel — crafted, personal, not glossy.`,
  },
  {
    key: 'jobs-portrait-01',
    filename: 'jobs/portrait-01.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 4:5 aspect ratio (1200x1500). Business headshot of a woman in her early 30s wearing a simple cream blazer over a white camisole, shoulder-length brown hair, warm natural smile, shot at eye level against a soft warm-grey studio background. Classic three-point lighting, gentle shadow. Editorial LinkedIn quality.`,
  },
  {
    key: 'jobs-portrait-02',
    filename: 'jobs/portrait-02.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 4:5 aspect ratio (1200x1500). Business headshot of a man in his mid-40s in a deep-navy suit and white shirt with an open collar, short silver-streaked hair, calm confident expression with a subtle closed-lip smile, warm beige studio background. Professional executive portrait, not stuffy.`,
  },
  {
    key: 'jobs-portrait-03',
    filename: 'jobs/portrait-03.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 4:5 aspect ratio (1200x1500). Business headshot of a mixed-race woman in her late 20s, natural afro-textured hair, wearing a soft rust-colored blouse, genuine warm laugh captured mid-motion, eyes bright, environmental background suggesting a warm wooden office space softly blurred. Editorial, very approachable.`,
  },
  {
    key: 'jobs-portrait-04',
    filename: 'jobs/portrait-04.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 4:5 aspect ratio (1200x1500). Business headshot of a man in his early 30s with round tortoise-shell glasses, dark hair, wearing a charcoal knit turtleneck, neutral confident expression, shot slightly from above, warm cream studio background. Creative-industry / tech / consultancy look.`,
  },
  {
    key: 'jobs-portrait-05',
    filename: 'jobs/portrait-05.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 4:5 aspect ratio (1200x1500). Business headshot of a woman in her late 40s, honey-blonde shoulder-length bob, wearing a warm-caramel silk blouse with a simple gold necklace, poised confident smile with laugh lines, sophisticated and experienced, soft champagne studio background.`,
  },
  {
    key: 'jobs-portrait-06',
    filename: 'jobs/portrait-06.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 4:5 aspect ratio (1200x1500). Business headshot of a young Apprenticeship / Ausbildungs-age woman around 21, straight dark hair in a half-up style, simple cream collared shirt, genuine warm smile, approachable and fresh, soft warm-grey backdrop. Entry-level professional feel — perfect for Azubi-Bewerbung.`,
  },
  {
    key: 'jobs-portrait-07',
    filename: 'jobs/portrait-07.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 4:5 aspect ratio (1200x1500). Business headshot of a man around 25, short brown beard trimmed neatly, warm-olive long-sleeve Henley over a white t-shirt collar visible, gentle half-smile, environmental creative-office background softly blurred. Young-professional, craftsperson or startup-founder look.`,
  },
  {
    key: 'jobs-portrait-08',
    filename: 'jobs/portrait-08.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 4:5 aspect ratio (1200x1500). Business headshot of a woman in her late 30s, long dark-brown hair loosely over one shoulder, warm-mustard silk blouse, thoughtful gentle smile while looking slightly off-camera to the left, soft daylight from a window on the left, cream wall behind. Editorial-consulting look, sophisticated.`,
  },
  {
    key: 'jobs-portrait-09',
    filename: 'jobs/portrait-09.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 4:5 aspect ratio (1200x1500). Business headshot of a man in his mid-50s, salt-and-pepper hair, charcoal blazer over light-grey shirt with open collar, reassuring calm expression with deep smile lines, warm beige backdrop. Senior executive / Kanzlei-Partner look, trustworthy.`,
  },

  // ================================================================
  // V3 BATCH — Wedding Pool (15 images) für Tier-1, Blog + Portfolio
  // Alle 3:2 landscape bei 1800x1200 oder 4:5 portrait bei 1200x1500
  // Wiederverwendbarer Cast: "Emma & Jonas" (Paar 1), "Lena & Finn" (Paar 2),
  // "Clara & Marius" (Paar 3) — konsistente Gesichter über mehrere Shots
  // ================================================================
  {
    key: 'wedding-01-paar-rheinaue',
    filename: 'wedding/01-paar-rheinaue.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1800x1200). Bride and groom "Emma & Jonas" walking hand-in-hand through the Rheinaue park in Bonn during golden hour. Bride in flowing ivory dress with lace sleeves, groom in warm beige suit. Autumn trees with amber foliage behind them, soft sunflare right side. Candid, mid-stride laughter. Documentary not posed.`,
  },
  {
    key: 'wedding-02-erster-kuss-feld',
    filename: 'wedding/02-erster-kuss-feld.jpg',
    prompt: `${WARM_PREAMBLE} Portrait 4:5 (1200x1500). Same couple "Emma & Jonas" sharing their first kiss in a wheat field near Euskirchen at golden hour. Close crop showing their silhouettes against warm-amber sky. Bride's veil gently blown by breeze, groom's hand on her cheek. Deeply intimate, documentary, film grain visible.`,
  },
  {
    key: 'wedding-03-getting-ready',
    filename: 'wedding/03-getting-ready.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1800x1200). Getting-ready moment: mother tying the lace-up back of bride "Emma"'s ivory dress in a bright room with large northwest-facing window. Both smiling gently. Vintage oak vanity behind with brush, perfume bottle, bridal bouquet. Cream linen curtains filter soft daylight.`,
  },
  {
    key: 'wedding-04-ringe-eukalyptus',
    filename: 'wedding/04-ringe-eukalyptus.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (1400x1400). Detail macro shot of two gold wedding rings resting on an antique brass tray with fresh eucalyptus sprigs, cream linen background, soft directional daylight from left. Dust particles visible in light beam. Editorial still-life composition.`,
  },
  {
    key: 'wedding-05-ersten-tanz',
    filename: 'wedding/05-erster-tanz.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1800x1200). Couple "Lena & Finn" (different pair) dancing their first dance in a restored German barn wedding venue. Soft warm bistro lights hanging from wooden beams, blurred guests watching in background. Bride's cream silk dress catching light, groom in dark navy suit. Cinematic mid-tone grading.`,
  },
  {
    key: 'wedding-06-bouquet-close',
    filename: 'wedding/06-bouquet-close.jpg',
    prompt: `${WARM_PREAMBLE} Portrait 4:5 (1200x1500). Bride "Lena" holding her bridal bouquet close to chest — cream peonies, blush garden roses, eucalyptus, dried wheat stalks, trailing silk ribbons. Ivory dress visible behind bouquet. Soft window light from upper-left. Face of bride tilted down, smiling into flowers.`,
  },
  {
    key: 'wedding-07-paar-schloss',
    filename: 'wedding/07-paar-schloss.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1800x1200). Third couple "Clara & Marius" in front of a barock-style German castle (reminiscent of Schloss Augustusburg Brühl) — standing on weathered stone steps, bride in long-train ivory gown, groom in charcoal suit. Golden-hour warmth, blurred baroque garden behind. Elegant but unposed — slight smile exchange.`,
  },
  {
    key: 'wedding-08-stehempfang',
    filename: 'wedding/08-stehempfang.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1800x1200). Wedding reception standing in a restored stone courtyard — guests mingling with champagne glasses, bride "Clara" in center laughing with grandmother, warm bistro lights above. Late-afternoon warm shadows on cobblestones. Candid journalistic feel. No faces in sharp focus other than bride and grandmother.`,
  },
  {
    key: 'wedding-09-kerzenlicht',
    filename: 'wedding/09-kerzenlicht.jpg',
    prompt: `${WARM_PREAMBLE} Portrait 4:5 (1200x1500). Intimate candlelit ceremony moment inside a medieval castle hall (stone walls, vaulted ceiling), bride and groom facing each other during vows, officiant's hands barely visible holding a book. Dozens of pillar candles glowing warm on long stone ledges. Film grain, warm shadows.`,
  },
  {
    key: 'wedding-10-kuss-kirche',
    filename: 'wedding/10-kuss-kirche.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1800x1200). First-kiss moment at altar inside a gothic Rhineland church (Altenberger Dom-style), bride and groom center-frame in front of congregation, sunlight streaming through stained-glass window onto them creating colored light patterns on stone floor. Guests clapping in blurred background.`,
  },
  {
    key: 'wedding-11-getting-ready-braeutigam',
    filename: 'wedding/11-getting-ready-braeutigam.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1800x1200). Getting-ready moment: groom "Marius" tying his silk tie in front of an antique mirror in a hotel suite, best man helping with jacket in background. Window light from right side, warm cream walls, hanging suit jackets visible behind. Candid calm.`,
  },
  {
    key: 'wedding-12-lichtspiel-schleier',
    filename: 'wedding/12-lichtspiel-schleier.jpg',
    prompt: `${WARM_PREAMBLE} Portrait 4:5 (1200x1500). Bride "Emma" in profile, her cathedral-length veil catching late-afternoon sun like amber silk. She is looking out of a tall window, face in warm half-shadow. Minimalist, painterly, editorial magazine cover quality.`,
  },
  {
    key: 'wedding-13-couple-wald',
    filename: 'wedding/13-couple-wald.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1800x1200). Couple "Lena & Finn" walking away from camera down a misty forest path in the Eifel region, dappled sunlight streaming through beech leaves, her train trailing behind. Fairytale-calm, cinematic, shallow DOF.`,
  },
  {
    key: 'wedding-14-sparklerexit',
    filename: 'wedding/14-sparkler-exit.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1800x1200). Sparkler exit at night — couple running through a tunnel of guests holding wedding sparklers, warm orange glow lighting their faces, motion blur on sparkler streaks, cobblestone courtyard of stone building behind. Hand-held documentary energy.`,
  },
  {
    key: 'wedding-15-detail-tischdeko',
    filename: 'wedding/15-detail-tischdeko.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1800x1200). Wedding reception table detail — hand-calligraphed cream place cards, eucalyptus sprigs, vintage gold cutlery, champagne flutes, cream linen, single candle burning. Shot at 45° angle. Documentary editorial still life.`,
  },

  // ================================================================
  // V3 BATCH — Cities Pool (14 images): one shot per city for city-page gallery
  // All landscape 3:2 (1400x933) for uniform gallery thumbnail
  // ================================================================
  {
    key: 'city-euskirchen',
    filename: 'cities/euskirchen.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). Wide view of Euskirchen old-town Marktplatz during late afternoon, warm stone facades of medieval buildings, a couple in elegant but casual attire walking along the cobblestones — small in frame. Germanic small-town atmosphere, warm amber tones.`,
  },
  {
    key: 'city-koeln',
    filename: 'cities/koeln.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). View of the Kölner Dom at blue-hour from the Hohenzollernbrücke, warm yellow lights illuminating the twin spires, a couple walking hand-in-hand in foreground (small silhouettes). Rhine reflections, editorial urban romance.`,
  },
  {
    key: 'city-bonn',
    filename: 'cities/bonn.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). Bonn Rheinaue park in late spring, cherry blossom trees in the distance, a photographer's wide-angle view of the park with soft afternoon sun, distant Siebengebirge hills on horizon. Tranquil, editorial.`,
  },
  {
    key: 'city-leverkusen',
    filename: 'cities/leverkusen.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). Schloss Morsbroich in Leverkusen — red-brick castle with wide green lawn, tall beech trees on either side, afternoon light. Minimalist architectural composition.`,
  },
  {
    key: 'city-weilerswist',
    filename: 'cities/weilerswist.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). Rural Erft-river landscape near Weilerswist — a wooden footbridge crossing a small stream, wildflower meadow on both sides, golden hour warm backlighting. Peaceful, pastoral.`,
  },
  {
    key: 'city-bergisch-gladbach',
    filename: 'cities/bergisch-gladbach.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). Grandhotel Schloss Bensberg (or similar Rhineland palace-hotel) sits atop a hill overlooking the distant Kölner Dom skyline. Warm late-afternoon light on baroque facade, manicured garden in foreground.`,
  },
  {
    key: 'city-siegburg',
    filename: 'cities/siegburg.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). View from Michaelsberg Siegburg — looking over the town rooftops at sunset, the old abbey church silhouetted on the hill. Warm tones, 360° scenic mood.`,
  },
  {
    key: 'city-erftstadt',
    filename: 'cities/erftstadt.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). Schloss Gracht water-castle in Erftstadt reflected in its moat, baroque sandstone facade, water lilies floating, weeping willows on banks. Romantic pastoral.`,
  },
  {
    key: 'city-bergheim',
    filename: 'cities/bergheim.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). Paffendorfer Schloss grounds in Bergheim — manicured hedge pathways leading to a small baroque castle in the distance, soft overcast afternoon light, green and cream tones.`,
  },
  {
    key: 'city-kerpen',
    filename: 'cities/kerpen.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). Schloss Türnich in Kerpen — English landscape park with a reflective pond in foreground, baroque castle glimpsed through mature oaks, swans on water. Classic German estate atmosphere.`,
  },
  {
    key: 'city-huerth',
    filename: 'cities/huerth.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). Ville-Park forest clearing in Hürth — row of tall beech trees, carpet of golden autumn leaves, a single bench in dappled sun. Quiet editorial simplicity.`,
  },
  {
    key: 'city-bruehl',
    filename: 'cities/bruehl.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). Schloss Augustusburg in Brühl (UNESCO) — view of the pink-cream baroque facade from across the reflecting pool, symmetric French garden, warm afternoon golden light.`,
  },
  {
    key: 'city-pulheim',
    filename: 'cities/pulheim.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). Abtei Brauweiler in Pulheim — romanesque abbey cloister with stone arches casting geometric shadows on the courtyard. Empty, contemplative, warm afternoon side-light.`,
  },
  {
    key: 'city-nrw-landscape',
    filename: 'cities/nrw-rheinland.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). Wide landscape of the Rhineland — rolling green farmland, a distant church spire, late afternoon warm side-light casting long shadows of hedgerows. Classic NRW countryside.`,
  },

  // ================================================================
  // V3 BATCH — Family / Maternity Pool (10 images)
  // ================================================================
  {
    key: 'family-01-outdoor',
    filename: 'family/01-outdoor.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1800x1200). Young family of four walking hand-in-hand across a golden-wheat field in the Eifel region — father carrying toddler on shoulders, mother holding older child's hand. Back-lit by late afternoon sun, warm and cinematic.`,
  },
  {
    key: 'family-02-baby-home',
    filename: 'family/02-baby-home.jpg',
    prompt: `${WARM_PREAMBLE} Portrait 4:5 (1200x1500). Mother in a cream-colored knit sweater holding her newborn baby close to chest while seated by a large window. Soft diffused daylight. Cream-linen wrapped infant, warm skin tones, mother's face half-shadowed. Intimate documentary.`,
  },
  {
    key: 'family-03-papa-kind',
    filename: 'family/03-papa-kind.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1800x1200). Father gently lifting his 1-year-old daughter in the air in a home garden, both laughing, cream tones, afternoon sunlight. Candid, journalistic, emotional connection.`,
  },
  {
    key: 'family-04-maternity-studio',
    filename: 'family/04-maternity-studio.jpg',
    prompt: `${WARM_PREAMBLE} Portrait 4:5 (1200x1500). Silhouette of a pregnant woman in a flowing cream silk gown, hand on her belly, profile against a sheer curtain with warm backlight. Minimalist editorial, warm beige palette.`,
  },
  {
    key: 'family-05-maternity-couple',
    filename: 'family/05-maternity-couple.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1800x1200). Expectant couple — man embracing pregnant partner from behind, hands resting on belly, both looking off-camera smiling. Warm cream-colored simple clothing, soft window light. Tender documentary.`,
  },
  {
    key: 'family-06-siblings',
    filename: 'family/06-siblings.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1800x1200). Two siblings (age 3 and 7) playing in a cream-linen blanket fort at home, warm afternoon window light, genuine laughter, toys scattered around. Candid.`,
  },
  {
    key: 'family-07-family-park',
    filename: 'family/07-family-park.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1800x1200). Three-generation family portrait in Rheinaue park Bonn — grandparents seated on park bench, adult children and grandchildren gathered around, all in coordinated warm neutral tones, late spring. Warm editorial portraiture.`,
  },
  {
    key: 'family-08-newborn-studio',
    filename: 'family/08-newborn-studio.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (1400x1400). Newborn baby (2 weeks old) sleeping wrapped in cream knit blanket on warm wooden floor, parent's hand gently resting nearby. Close, tender, editorial. Soft window light from left.`,
  },
  {
    key: 'family-09-kids-garden',
    filename: 'family/09-kids-garden.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1800x1200). Two children (age 4 and 6) running through a wildflower meadow at golden hour, laughter caught mid-stride, their parents out of focus behind. Summer, warm amber backlight.`,
  },
  {
    key: 'family-10-babybauch-outdoor',
    filename: 'family/10-babybauch-outdoor.jpg',
    prompt: `${WARM_PREAMBLE} Portrait 4:5 (1200x1500). Pregnant woman in flowing cream dress standing in a wheat field at sunset, hand cradling belly, looking off into distance, soft wind movement in dress. Editorial maternity, cinematic.`,
  },

  // ================================================================
  // V3 BATCH — Portfolio Expansion (12 images — mixed categories, unique perspectives)
  // ================================================================
  {
    key: 'portfolio-01-dance-floor',
    filename: 'portfolio/01-dance-floor.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1800x1200). Crowded wedding dance floor at night — couple in center being lifted on chairs by guests, motion blur, warm tungsten lighting, confetti in air. Photojournalism energy.`,
  },
  {
    key: 'portfolio-02-silent-moment',
    filename: 'portfolio/02-silent-moment.jpg',
    prompt: `${WARM_PREAMBLE} Portrait 4:5 (1200x1500). Bride alone for one quiet minute in a hotel hallway before the ceremony, looking down at her bouquet, warm wall light above. Intimate, contemplative.`,
  },
  {
    key: 'portfolio-03-first-look',
    filename: 'portfolio/03-first-look.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1800x1200). First-look moment — groom turning to see his bride for the first time in her dress, his expression caught at the moment of recognition, garden setting behind. Emotionally charged, unposed.`,
  },
  {
    key: 'portfolio-04-editorial-couple',
    filename: 'portfolio/04-editorial-couple.jpg',
    prompt: `${WARM_PREAMBLE} Portrait 4:5 (1200x1500). Couple portrait in editorial-magazine style — bride in full-length dress, groom standing behind her with arms around her waist, both looking to camera confidently, warm stone wall behind. Minimalist poses.`,
  },
  {
    key: 'portfolio-05-family-home',
    filename: 'portfolio/05-family-home.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1800x1200). Young family gathered on warm cream sofa at home — parents seated with baby between them, older child lying across their laps, all laughing. Editorial family-lifestyle.`,
  },
  {
    key: 'portfolio-06-business-founder',
    filename: 'portfolio/06-business-founder.jpg',
    prompt: `${WARM_PREAMBLE} Portrait 4:5 (1200x1500). Female startup founder in her early 30s, warm petrol-blue silk blouse, seated at a modern wooden desk with laptop, genuine confident smile, warm office window light from right. Not corporate, human.`,
  },
  {
    key: 'portfolio-07-bewerbungs-male',
    filename: 'portfolio/07-bewerbungs-male.jpg',
    prompt: `${WARM_PREAMBLE} Portrait 4:5 (1200x1500). Male professional age 40, trimmed beard, charcoal blazer over crisp white shirt (no tie), direct gaze at camera with slight smile, neutral warm-grey backdrop. Perfect LinkedIn portrait, not stiff.`,
  },
  {
    key: 'portfolio-08-bewerbungs-female',
    filename: 'portfolio/08-bewerbungs-female.jpg',
    prompt: `${WARM_PREAMBLE} Portrait 4:5 (1200x1500). Female professional age 32, dark hair in relaxed updo, warm olive blazer over cream silk top, soft confident smile, facing slightly off-camera. Warm cream backdrop. Editorial-quality bewerbungsfoto.`,
  },
  {
    key: 'portfolio-09-maternity-couple',
    filename: 'portfolio/09-maternity-couple.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1800x1200). Couple expecting their first child in a field at sunset — man holding partner from behind, her hands on belly, her head resting on his shoulder. Warm backlighting, intimate.`,
  },
  {
    key: 'portfolio-10-bouquet-detail',
    filename: 'portfolio/10-bouquet-detail.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (1400x1400). Still-life flat-lay: bridal bouquet of cream peonies, garden roses, eucalyptus, dried wheat — laid on warm oak table next to antique gold earrings, invitation card with calligraphy, tied silk ribbons.`,
  },
  {
    key: 'portfolio-11-paar-winter',
    filename: 'portfolio/11-paar-winter.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1800x1200). Couple in winter forest in the Eifel region, bare trees and light snow on ground, bride wrapped in faux-fur cape over ivory dress, groom in charcoal coat, their breath visible in cold air. Cinematic, warm-cold contrast.`,
  },
  {
    key: 'portfolio-12-studio-portrait',
    filename: 'portfolio/12-studio-portrait.jpg',
    prompt: `${WARM_PREAMBLE} Portrait 4:5 (1200x1500). Minimalist studio portrait of a woman age 45 in cream cable-knit sweater against warm beige backdrop, soft Rembrandt-lighting from left, direct natural gaze. Sophisticated editorial portrait.`,
  },

  // ================================================================
  // V3 BATCH — Blog Hero Images (5 images, one per article)
  // ================================================================
  {
    key: 'blog-hochzeitsfotograf-kosten-hero',
    filename: 'blog/hochzeitsfotograf-kosten-hero.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 16:9 (1800x1013). Elegant wedding reception overview with candles and warm bistro lights, bride and groom in soft focus in foreground, guests around long wooden dinner table, atmospheric warm tones. Editorial magazine cover quality.`,
  },
  {
    key: 'blog-hochzeitslocations-nrw-hero',
    filename: 'blog/hochzeitslocations-nrw-hero.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 16:9 (1800x1013). Panoramic establishing shot of a baroque castle (reminiscent of Schloss Augustusburg Brühl) at golden hour, manicured French garden in foreground, distant hills behind. Grand, inviting, editorial.`,
  },
  {
    key: 'blog-bewerbungsfoto-hero',
    filename: 'blog/bewerbungsfoto-hero.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 16:9 (1800x1013). Clean editorial flat-lay — folded cream blazer, white collared shirt, wooden hanger, simple watch, modern leather portfolio — all arranged on warm beige linen backdrop. Minimalist, professional.`,
  },
  {
    key: 'blog-fotograf-finden-nrw-hero',
    filename: 'blog/fotograf-finden-nrw-hero.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 16:9 (1800x1013). Over-the-shoulder view of a photographer with vintage camera reviewing images on a small screen, warm afternoon setting, couple out of focus in background waiting. Documentary workflow.`,
  },
  {
    key: 'blog-getting-ready-hero',
    filename: 'blog/getting-ready-hero.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 16:9 (1800x1013). Bride at a vanity looking at herself in an antique mirror just before putting on her veil, mother helping with hair in soft focus behind. Warm window light, intimate.`,
  },

  // ================================================================
  // V3 BATCH — Locations Pool (for Blog Article 2 — 15 locations)
  // Representative Rhineland wedding venues — landscape 3:2 for uniform rendering
  // ================================================================
  {
    key: 'locations-01-burg-satzvey',
    filename: 'locations/01-burg-satzvey.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). Medieval German castle (reminiscent of Burg Satzvey) — stone walls, round tower, wooden bridge to gate, trees around, warm late-afternoon golden hour light.`,
  },
  {
    key: 'locations-02-kloster-steinfeld',
    filename: 'locations/02-kloster-steinfeld.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). Romanesque abbey church with twin towers in a rural Eifel setting, stone cross in foreground courtyard, overcast dignified atmosphere. Spiritual, dignified.`,
  },
  {
    key: 'locations-03-burg-flamersheim',
    filename: 'locations/03-burg-flamersheim.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). Small restored German medieval manor house (Hofburg style) with cobblestone courtyard, warm ivy-covered stone walls, single wrought-iron lamppost, golden hour.`,
  },
  {
    key: 'locations-04-gut-frielinghausen',
    filename: 'locations/04-gut-frielinghausen.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). Restored large German barn wedding venue, exposed warm wood beams, string lights across ceiling, long cream-linen tables set for wedding dinner, warm afternoon light through large barn doors.`,
  },
  {
    key: 'locations-05-steinbachtalsperre',
    filename: 'locations/05-steinbachtalsperre.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). Reservoir lake in the Eifel surrounded by dense forest, wooden jetty extending into water, morning mist rising, low golden sun behind distant trees. Serene outdoor wedding setting.`,
  },
  {
    key: 'locations-06-flora-koeln',
    filename: 'locations/06-flora-koeln.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). Victorian-era glasshouse / botanical garden palm house with white iron arches and tall palm trees inside, warm afternoon sunlight filtering through glass panels. Romantic glasshouse wedding venue atmosphere.`,
  },
  {
    key: 'locations-07-schloss-bensberg',
    filename: 'locations/07-schloss-bensberg.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). Grand German baroque palace-hotel on a hilltop with expansive terrace overlooking countryside, warm stone facade, distant skyline visible, afternoon light.`,
  },
  {
    key: 'locations-08-schokoladenmuseum',
    filename: 'locations/08-schokoladenmuseum.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). Modern glass-and-steel museum building on a Rhine river bank at blue hour, warm interior lights glowing through tall windows, distant bridge with lights reflecting on water. Urban-modern wedding venue.`,
  },
  {
    key: 'locations-09-altenberger-dom',
    filename: 'locations/09-altenberger-dom.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). Gothic Rhineland cathedral exterior (Altenberger Dom-style) with tall stained-glass windows, surrounded by autumn trees with warm amber leaves. Warm daylight.`,
  },
  {
    key: 'locations-10-la-redoute',
    filename: 'locations/10-la-redoute.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). Classicist columned palais building (reminiscent of La Redoute Bad Godesberg) — cream sandstone facade with portico, symmetrical garden in front, morning sunlight.`,
  },
  {
    key: 'locations-11-schloss-drachenburg',
    filename: 'locations/11-schloss-drachenburg.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). Neo-gothic German castle with tall slender towers perched on a mountainside overlooking the Rhine valley, afternoon mist in valley, castle silhouetted dramatic. Fairytale atmosphere.`,
  },
  {
    key: 'locations-12-petersberg',
    filename: 'locations/12-petersberg.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). Grand hotel atop a hill with expansive stone terrace and balustrade overlooking a river valley — panoramic view, afternoon sun reflecting off river far below. Premium wedding-venue grandeur.`,
  },
  {
    key: 'locations-13-gut-clarenhof',
    filename: 'locations/13-gut-clarenhof.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). Restored German country estate — half-timbered main house, cobblestone courtyard with large tree in center, warm-weathered brick outbuildings. Golden hour.`,
  },
  {
    key: 'locations-14-schloss-tuernich',
    filename: 'locations/14-schloss-tuernich.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). Baroque palace with cream-colored facade on a small island surrounded by moat and English landscape park, reflections on water, warm afternoon sun.`,
  },
  {
    key: 'locations-15-malteser-komturei',
    filename: 'locations/15-malteser-komturei.jpg',
    prompt: `${WARM_PREAMBLE} Landscape 3:2 (1400x933). Medieval German stone commandery building with heavy oak doors and iron fittings, cobblestone inner courtyard, late-afternoon directional sun on warm stone walls. Intimate historical venue.`,
  },
]
