/**
 * Prompt bank for photography landing page.
 * Each prompt produces a single image via Gemini / Imagen.
 */

const PREAMBLE =
  'Editorial fine-art photography, cinematic color grading, soft moody warm tones, natural available light, shallow depth of field, 35mm film grain, high-end fashion / wedding photography feel. No text, no watermarks, no logos. Vertical composition, centered subject.'

export interface ImageJob {
  readonly key: string
  readonly filename: string // relative to public/images/
  readonly prompt: string
}

export const JOBS: readonly ImageJob[] = [
  // Hero slideshow — 5 full-bleed cinematic shots
  { key: 'hero-01', filename: 'hero/hero-01.jpg', prompt: `${PREAMBLE} A bride in a flowing silk dress walking through a sunlit italian cypress garden at golden hour, backlight haze, serene, editorial.` },
  { key: 'hero-02', filename: 'hero/hero-02.jpg', prompt: `${PREAMBLE} Close-up editorial portrait of a woman with flowing dark hair, side light, dramatic chiaroscuro shadow, soft warm skin tones, minimal styling.` },
  { key: 'hero-03', filename: 'hero/hero-03.jpg', prompt: `${PREAMBLE} Wedding couple sharing a quiet moment on a dark-painted wood balcony, warm tungsten light, evening, Tuscan countryside visible in the blurred background.` },
  { key: 'hero-04', filename: 'hero/hero-04.jpg', prompt: `${PREAMBLE} Groom embracing bride from behind, both in elegant neutral attire, overlooking a misty mountain landscape at blue hour, moody and intimate.` },
  { key: 'hero-05', filename: 'hero/hero-05.jpg', prompt: `${PREAMBLE} Black and white editorial portrait of a young woman, hair in the wind, dark background, high contrast, ilford film stock look.` },

  // Services — 5 mood tiles
  { key: 'sv-weddings', filename: 'services/weddings.jpg', prompt: `${PREAMBLE} Documentary wedding photography, first look moment between bride and groom in a sunlit chapel, timeless, warm.` },
  { key: 'sv-portraits', filename: 'services/portraits.jpg', prompt: `${PREAMBLE} Editorial natural light portrait of a woman near a large window, dust motes in the air, linen curtains, soft skin, quiet mood.` },
  { key: 'sv-couples', filename: 'services/couples.jpg', prompt: `${PREAMBLE} Couple walking hand-in-hand through tall grass at sunset, Mediterranean summer, backlight, editorial.` },
  { key: 'sv-editorial', filename: 'services/editorial.jpg', prompt: `${PREAMBLE} High-fashion editorial spread, model in flowing couture dress, dramatic wind, seaside cliff, magazine feel.` },
  { key: 'sv-destination', filename: 'services/destination.jpg', prompt: `${PREAMBLE} Destination wedding scene in a Moroccan desert, bride walking across dunes at dusk, distant oasis, painterly tones.` },

  // Parallax portfolio — 7 images
  { key: 'p-01', filename: 'gallery/p-01.jpg', prompt: `${PREAMBLE} Bride detail — lace back of a wedding dress, soft shadow pattern from shutters, intimate.` },
  { key: 'p-02', filename: 'gallery/p-02.jpg', prompt: `${PREAMBLE} Editorial portrait, 3/4 length, dark moody background, warm rim light.` },
  { key: 'p-03', filename: 'gallery/p-03.jpg', prompt: `${PREAMBLE} Couple on a rocky Mediterranean beach, golden sun, minimal waves, romantic.` },
  { key: 'p-04', filename: 'gallery/p-04.jpg', prompt: `${PREAMBLE} Wedding reportage — guests toasting champagne glasses, golden bokeh, candid, reportage.` },
  { key: 'p-05', filename: 'gallery/p-05.jpg', prompt: `${PREAMBLE} Macro detail of antique engagement rings on aged velvet, warm lamp light, luxurious.` },
  { key: 'p-06', filename: 'gallery/p-06.jpg', prompt: `${PREAMBLE} Golden hour portrait of a woman in a field of wheat, windswept hair, warm backlight.` },
  { key: 'p-07', filename: 'gallery/p-07.jpg', prompt: `${PREAMBLE} Black and white profile portrait of a man, dramatic contrast, pensive.` },

  // Masonry editorial — 8 varied vertical/square
  { key: 'm-01', filename: 'masonry/m-01.jpg', prompt: `${PREAMBLE} Bride and groom in Tuscan cypresses, wide shot, summer, warm palette.` },
  { key: 'm-02', filename: 'masonry/m-02.jpg', prompt: `${PREAMBLE} Editorial Berlin urban portrait, concrete wall, woman in minimal black dress.` },
  { key: 'm-03', filename: 'masonry/m-03.jpg', prompt: `${PREAMBLE} Engagement couple on Amalfi coast cliffside, dramatic sea below, sunset.` },
  { key: 'm-04', filename: 'masonry/m-04.jpg', prompt: `${PREAMBLE} Intimate studio portrait, soft window light, sparse atelier, artist mood.` },
  { key: 'm-05', filename: 'masonry/m-05.jpg', prompt: `${PREAMBLE} Alpine South-Tyrol mountain wedding, couple in front of snow-capped peaks, wool blankets, warm.` },
  { key: 'm-06', filename: 'masonry/m-06.jpg', prompt: `${PREAMBLE} Pregnancy portrait in soft window light, silk draping, serene, muted palette.` },
  { key: 'm-07', filename: 'masonry/m-07.jpg', prompt: `${PREAMBLE} Berlin city-hall wedding, small bouquet, sunlit hallway, documentary feel.` },
  { key: 'm-08', filename: 'masonry/m-08.jpg', prompt: `${PREAMBLE} High-fashion editorial in abandoned industrial space, dramatic shadow, model in oversized coat.` },

  // Shuffle grid — 16 mixed images
  ...Array.from({ length: 16 }, (_, i) => ({
    key: `shuffle-${i + 1}`,
    filename: `shuffle/s-${String(i + 1).padStart(2, '0')}.jpg`,
    prompt: `${PREAMBLE} Wedding or portrait photography — varied scenes: ${['bride walking','couple laughing','detail shot rings','flower bouquet','groom portrait','hands holding','editorial dress','candid reception','sunlit kiss','black and white portrait','mother daughter','family gathering','natural light bride','outdoor ceremony','first dance','golden hour embrace'][i]}. Cinematic, warm, editorial.`,
  })),

  // Behind-the-scenes trail — 6 small square shots
  ...Array.from({ length: 6 }, (_, i) => ({
    key: `trail-${i + 1}`,
    filename: `trail/t-0${i + 1}.jpg`,
    prompt: `${PREAMBLE} Behind-the-scenes wedding moment — ${['photographer camera in hand','detail shot of bouquet','bride laughing','children playing','champagne toast','sunset silhouette'][i]}. Square aspect ratio.`,
  })),

  // Big testimonial
  { key: 'big-testimonial', filename: 'testimonial/big-01.jpg', prompt: `${PREAMBLE} Cinematic wedding scene — wide shot, bride and groom small within a vast Tuscan landscape, dusk, warm ambient light.` },

  // Avatars (8)
  ...Array.from({ length: 8 }, (_, i) => ({
    key: `avatar-${i + 1}`,
    filename: `avatars/a${i + 1}.jpg`,
    prompt: `Natural portrait headshot, soft warm lighting, editorial look, ${['young woman','young man','smiling woman','older woman','man with beard','young woman with long hair','woman with short hair','man with glasses'][i]}, clean neutral background, no props.`,
  })),
]
