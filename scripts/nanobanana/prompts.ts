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
]
