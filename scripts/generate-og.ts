/**
 * Generate og.jpg via Playwright rendering HTML → screenshot.
 * Simple branded placeholder until Nano-Banana delivers custom artwork.
 */
import { chromium } from 'playwright'
import { writeFileSync, mkdirSync } from 'fs'
import { dirname } from 'path'

const HTML = `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px;
    background: linear-gradient(135deg, #F8F3EC 0%, #EFE6D8 50%, #E3D8C4 100%);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Cormorant Garamond', Georgia, serif;
    position: relative;
    overflow: hidden;
  }
  .bg-shape {
    position: absolute;
    width: 800px; height: 800px;
    background: radial-gradient(circle, rgba(197, 165, 114, 0.18) 0%, transparent 70%);
    top: -200px; right: -200px;
    border-radius: 50%;
  }
  .content {
    text-align: center;
    z-index: 2;
    padding: 0 80px;
  }
  .eyebrow {
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 14px;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    color: #C5A572;
    margin-bottom: 32px;
    font-weight: 500;
  }
  h1 {
    font-size: 88px;
    color: #1F1C17;
    letter-spacing: -0.03em;
    line-height: 1.02;
    font-weight: 500;
    margin-bottom: 28px;
  }
  .brand {
    font-family: 'Parisienne', cursive;
    color: #C5A572;
    font-size: 56px;
    line-height: 1;
    margin-top: 8px;
    transform: rotate(-2deg);
    display: inline-block;
  }
  .sub {
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 20px;
    color: #6B5F4E;
    margin-top: 32px;
    line-height: 1.5;
  }
  .line {
    width: 48px;
    height: 2px;
    background: #C5A572;
    margin: 40px auto;
  }
</style>
</head>
<body>
  <div class="bg-shape"></div>
  <div class="content">
    <div class="eyebrow">Euskirchen · Köln · Bonn · Rheinland</div>
    <h1>Lichtraum <span class="brand">Fotostudio</span></h1>
    <div class="line"></div>
    <div class="sub">Hochzeit · Bewerbung · Portrait · Familie</div>
  </div>
</body>
</html>`

async function main() {
  const browser = await chromium.launch()
  const ctx = await browser.newContext({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 2,
  })
  const page = await ctx.newPage()
  await page.setContent(HTML, { waitUntil: 'networkidle' })
  const out = 'public/og.jpg'
  mkdirSync(dirname(out), { recursive: true })
  await page.screenshot({ path: out, type: 'jpeg', quality: 92, fullPage: false, clip: { x: 0, y: 0, width: 1200, height: 630 } })
  await browser.close()
  console.log(`generated ${out}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
