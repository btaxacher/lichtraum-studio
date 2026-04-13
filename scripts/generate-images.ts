/**
 * Batch-generate all landing page images via Nanobanana (Gemini Web UI + Playwright).
 *
 * Prerequisites:
 *   1. Chrome installed at C:\Program Files\Google\Chrome\Application\chrome.exe
 *   2. All Chrome windows closed before running
 *   3. Profile dir C:/Users/basti/.nanobanana-profile logged in to gemini.google.com
 *      (First run: open the URL, log in manually, close, then run this script)
 *
 * Run:
 *   cd main-landing-page
 *   npm run generate-images
 *
 * Output: public/images/**\/*.jpg
 * After completion, set USE_LOCAL = true in src/lib/content.ts
 */
import * as path from 'node:path'
import * as fs from 'node:fs'
import { createGeminiBrowser } from './nanobanana/browser.js'
import { generateImageViaGemini } from './nanobanana/generate-image.js'
import { JOBS } from './nanobanana/prompts.js'

const OUTPUT_ROOT = path.join(process.cwd(), 'public', 'images')

async function main() {
  console.log(`\n  Nanobanana batch — ${JOBS.length} images to generate`)
  console.log(`  Output root: ${OUTPUT_ROOT}\n`)

  const { page, close } = await createGeminiBrowser()
  let ok = 0
  let skipped = 0
  let failed = 0

  try {
    for (let i = 0; i < JOBS.length; i++) {
      const job = JOBS[i]
      const outPath = path.join(OUTPUT_ROOT, job.filename)

      if (fs.existsSync(outPath)) {
        console.log(`[${i + 1}/${JOBS.length}] ${job.key} — already exists, skipping`)
        skipped++
        continue
      }

      console.log(`\n[${i + 1}/${JOBS.length}] ${job.key}`)
      try {
        await generateImageViaGemini(page, { prompt: job.prompt, savePath: outPath })
        ok++
        await new Promise((r) => setTimeout(r, 2500))
      } catch (err) {
        console.error(`  FAILED: ${err instanceof Error ? err.message : String(err)}`)
        failed++
      }
    }
  } finally {
    await close()
  }

  console.log(`\n  Done. ok=${ok}, skipped=${skipped}, failed=${failed}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
