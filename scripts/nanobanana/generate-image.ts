/**
 * Gemini Web UI Image Generator.
 * Adapted from c:\Users\basti\Projekte\Depotfokus\src\nanobanana\generate-image.ts
 */
import type { Page } from 'playwright'
import * as fs from 'node:fs'
import * as path from 'node:path'
import { shortWait } from './browser.js'

export interface GenerateImageOptions {
  readonly prompt: string
  readonly savePath?: string
}

export interface GeneratedImage {
  readonly base64: string
  readonly dataUri: string
  readonly filePath?: string
}

export async function generateImageViaGemini(
  page: Page,
  options: GenerateImageOptions,
): Promise<GeneratedImage> {
  const { prompt, savePath } = options
  console.log(`  Prompt: ${prompt.slice(0, 100)}...`)

  await page.goto('https://gemini.google.com/app', {
    waitUntil: 'domcontentloaded',
    timeout: 60_000,
  })
  await shortWait(3000, 5000)

  const textbox = page.locator('[role="textbox"]')
  await textbox.click()
  await shortWait(300, 600)
  await textbox.fill(prompt)
  await shortWait(500, 1000)

  // Try multiple send-button locators (UI language varies)
  const sendBtn = page
    .locator('button[aria-label="Nachricht senden"], button[aria-label="Send message"]')
    .first()
  await sendBtn.click()
  console.log('  Prompt sent, waiting for image...')

  const imageLocator = page.locator('img[src^="blob:"]')

  let found = false
  for (let i = 0; i < 40; i++) {
    await new Promise((r) => setTimeout(r, 3000))
    const count = await imageLocator.count()
    if (count > 0) {
      found = true
      console.log(`  Image appeared after ${(i + 1) * 3}s`)
      break
    }
  }

  if (!found) {
    const errPath = path.join(process.cwd(), 'scripts/nanobanana-error.png')
    await page.screenshot({ path: errPath })
    throw new Error(`No image generated after 120s. Check ${errPath}`)
  }

  await shortWait(2000, 3000)

  const base64Data = await page.evaluate(() => {
    const allImages = document.querySelectorAll('img')
    const candidates: HTMLImageElement[] = []
    for (const img of Array.from(allImages)) {
      if (img.naturalWidth >= 200 && img.naturalHeight >= 200) {
        candidates.push(img as HTMLImageElement)
      }
    }
    if (candidates.length === 0) return null
    candidates.sort((a, b) => b.naturalWidth * b.naturalHeight - a.naturalWidth * a.naturalHeight)
    for (const img of candidates) {
      try {
        const canvas = document.createElement('canvas')
        canvas.width = img.naturalWidth
        canvas.height = img.naturalHeight
        const ctx = canvas.getContext('2d')
        if (!ctx) continue
        ctx.drawImage(img, 0, 0)
        const data = canvas.toDataURL('image/png')
        if (data.length > 1000) return data
      } catch {}
    }
    return null
  })

  if (!base64Data) throw new Error('Could not extract image from page')

  const base64 = base64Data.replace(/^data:image\/png;base64,/, '')
  let filePath: string | undefined
  if (savePath) {
    fs.mkdirSync(path.dirname(savePath), { recursive: true })
    fs.writeFileSync(savePath, Buffer.from(base64, 'base64'))
    filePath = savePath
    console.log(`  Saved: ${savePath}`)
  }

  console.log(`  Image extracted (${Math.round(base64.length / 1024)}KB)`)
  return { base64, dataUri: base64Data, filePath }
}
