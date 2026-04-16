/**
 * Strato DNS Automation — adds 2 A-Records for Vercel.
 *
 * Records to add:
 *   A  @    76.76.21.21     (apex)
 *   A  www  76.76.21.21     (www subdomain)
 *
 * Prerequisites:
 *   - STRATO_USER env var (or prompt on first run)
 *   - STRATO_PASS env var
 *   - OR: manual login in headed-mode Chrome window
 *
 * Usage:
 *   STRATO_USER=... STRATO_PASS=... npx tsx scripts/strato-dns-setup.ts
 *   # or headed, manual login:
 *   HEADED=1 npx tsx scripts/strato-dns-setup.ts
 */
import { chromium } from 'playwright'

const DOMAIN = 'lichtraum-euskirchen.de'
const VERCEL_IP = '76.76.21.21'
const LOGIN_URL = 'https://www.strato.de/apps/CustomerService/'

async function main() {
  const user = process.env.STRATO_USER
  const pass = process.env.STRATO_PASS
  const headed = process.env.HEADED === '1' || (!user || !pass)

  console.log(`\n═══ Strato DNS Setup ═══`)
  console.log(`Domain:        ${DOMAIN}`)
  console.log(`Target IP:     ${VERCEL_IP}`)
  console.log(`Mode:          ${headed ? 'HEADED (manual login)' : 'HEADLESS (env creds)'}`)
  console.log(`───────────────────────\n`)

  const browser = await chromium.launch({ headless: !headed, slowMo: headed ? 400 : 0 })
  const ctx = await browser.newContext({ viewport: { width: 1400, height: 900 } })
  const page = await ctx.newPage()

  await page.goto(LOGIN_URL, { waitUntil: 'domcontentloaded' })

  if (!headed && user && pass) {
    console.log('[1/4] Logging in with env credentials …')
    // Field selectors are best-effort — Strato UI changes often.
    try {
      await page.locator('input[name="username"], input#username, input[type="text"]').first().fill(user)
      await page.locator('input[name="password"], input#password, input[type="password"]').first().fill(pass)
      await page.locator('button[type="submit"], input[type="submit"]').first().click()
      await page.waitForLoadState('networkidle', { timeout: 30_000 })
    } catch (e) {
      console.error('Login failed. Run with HEADED=1 to login manually:', (e as Error).message)
      process.exit(1)
    }
  } else {
    console.log('[1/4] HEADED mode — please log in manually in the opened window.')
    console.log('      After reaching the customer dashboard, press any key in this terminal to continue …')
    process.stdin.setRawMode(true)
    await new Promise<void>((resolve) => process.stdin.once('data', () => resolve()))
    process.stdin.setRawMode(false)
  }

  console.log('[2/4] Navigating to DNS-Verwaltung …')
  // Strato navigation is menu-based: "Domainverwaltung" → domain → "DNS-Verwaltung"
  console.log(`      NOTE: Paths vary. Navigate manually to: Domains → ${DOMAIN} → DNS-Verwaltung`)
  console.log('      Press any key when DNS table is visible …')
  process.stdin.setRawMode(true)
  await new Promise<void>((resolve) => process.stdin.once('data', () => resolve()))
  process.stdin.setRawMode(false)

  console.log('[3/4] Setting A-Records …')
  console.log(`      Add:  A   @     ${VERCEL_IP}   (TTL 3600)`)
  console.log(`      Add:  A   www   ${VERCEL_IP}   (TTL 3600)`)
  console.log('      If existing A-records point elsewhere, REPLACE them.')
  console.log('      Manual click required due to Strato UI specificity.')
  console.log('      Press any key when records are saved …')
  process.stdin.setRawMode(true)
  await new Promise<void>((resolve) => process.stdin.once('data', () => resolve()))
  process.stdin.setRawMode(false)

  console.log('[4/4] Done. DNS propagation: 10 min – 6 h.')
  console.log('      Verify:   dig +short lichtraum-euskirchen.de')
  console.log(`      Expected: ${VERCEL_IP}`)

  await browser.close()
  process.exit(0)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
