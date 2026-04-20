/**
 * Generate a single image via Nanobanana (Gemini Web UI + Playwright).
 *
 * Prerequisites: Same as generate-images.ts — Chrome closed, profile logged in.
 *
 * Run:
 *   cd main-landing-page
 *   npx tsx scripts/generate-single-image.ts
 */
import * as path from 'node:path'
import * as fs from 'node:fs'
import { createGeminiBrowser } from './nanobanana/browser.js'
import { generateImageViaGemini } from './nanobanana/generate-image.js'

const WARM_PREAMBLE =
  'Photorealistic editorial photography, Kodak Portra 400 color palette, warm creams, soft golds, muted greens, gentle film grain, natural available light, shallow depth of field, shot on Canon R5 with 85mm f/1.4, documentary authenticity (not posed stock photography). No text, no watermarks, no logos.'

const OUTPUT = path.join(process.cwd(), 'public', 'images', 'redesign', 'studio-detail-hands-v2.jpg')

const PROMPT = `${WARM_PREAMBLE} Square 1:1 aspect ratio (1400x1400). A warm, intimate overhead shot of a photographer's wooden desk workspace. On the desk: a vintage Hasselblad 500C/M medium-format camera resting on its side, a few developed 120mm film negatives scattered naturally, a small ceramic cup of black coffee (half-empty), a soft leather notebook with a pen. Warm natural window light streaming from the upper left, casting long gentle shadows. The desk is weathered oak with visible grain. A dried eucalyptus branch lies at the edge. Shallow depth of field — the camera is sharp, the edges are softly blurred. Warm editorial still-life feel, like a behind-the-scenes magazine spread. No people visible, no hands.`

async function main() {
  if (fs.existsSync(OUTPUT)) {
    console.log(`File already exists: ${OUTPUT}`)
    console.log('Delete it first if you want to regenerate.')
    return
  }

  console.log('Generating intro section image...')
  const { page, close } = await createGeminiBrowser()
  try {
    await generateImageViaGemini(page, { prompt: PROMPT, savePath: OUTPUT })
    console.log(`\nDone! Image saved to: ${OUTPUT}`)
    console.log('Update src/lib/content.ts introContent.image.src to point to the new file.')
  } finally {
    await close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
