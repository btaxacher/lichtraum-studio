/**
 * Crop Gemini watermark (✧) from bottom-right of Nano-Banana images.
 * Watermark is always in bottom-right corner, ~100-140px. Safe crop: 10% off bottom.
 */
import sharp from 'sharp'
import { readdir } from 'fs/promises'
import * as path from 'path'

const IMG_DIR = path.join(process.cwd(), 'public/images/redesign')
const BACKUP_DIR = path.join(process.cwd(), 'public/images/redesign-watermarked-backup')

async function main() {
  const { mkdir, copyFile, rename } = await import('fs/promises')
  await mkdir(BACKUP_DIR, { recursive: true })

  const files = (await readdir(IMG_DIR)).filter((f) => f.endsWith('.jpg'))
  console.log(`Processing ${files.length} images\n`)

  let ok = 0
  let failed = 0

  for (const filename of files) {
    const full = path.join(IMG_DIR, filename)
    const backup = path.join(BACKUP_DIR, filename)
    const tmp = full + '.tmp.jpg'

    try {
      const { access } = await import('fs/promises')
      const { constants } = await import('fs')
      // Only backup if not already backed up (idempotent — prevents double-crop)
      let alreadyBackedUp = false
      try {
        await access(backup, constants.F_OK)
        alreadyBackedUp = true
      } catch {}

      if (alreadyBackedUp) {
        // Already processed in a previous run — skip to prevent double-crop.
        console.log(`- ${filename.padEnd(34)}  already processed, skipping`)
        ok++
        continue
      }

      await copyFile(full, backup)

      const meta = await sharp(full).metadata()
      const w = meta.width ?? 0
      const h = meta.height ?? 0
      if (!w || !h) throw new Error(`no dimensions: ${filename}`)

      // Crop off bottom 10% — removes Gemini watermark safely
      const cropH = Math.floor(h * 0.9)

      await sharp(full)
        .extract({ left: 0, top: 0, width: w, height: cropH })
        .jpeg({ quality: 92, mozjpeg: true })
        .toFile(tmp)

      await rename(tmp, full)

      const sizeBefore = (await sharp(backup).metadata()).size ?? 0
      const sizeAfter = (await sharp(full).metadata()).size ?? 0
      console.log(`✓ ${filename.padEnd(34)}  ${w}×${h} → ${w}×${cropH}`)
      ok++
    } catch (e) {
      console.error(`✗ ${filename}: ${(e as Error).message}`)
      failed++
    }
  }

  console.log(`\nDone: ${ok} cropped, ${failed} failed`)
  console.log(`Backups: ${BACKUP_DIR}`)
  process.exit(failed > 0 ? 1 : 0)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
