/**
 * Phase 1 Audit — runs Playwright over all Phase-1 routes.
 * Checks: HTTP 200, h1 present, JSON-LD present, console-errors per route.
 * Writes: docs/superpowers/phase1-audit.md (gitignored result).
 */
import { chromium } from 'playwright'
import { writeFileSync, mkdirSync } from 'fs'
import { dirname } from 'path'

const BASE = process.env.AUDIT_BASE_URL ?? 'http://localhost:3000'

const ROUTES = [
  '/',
  '/hochzeitsfotograf-koeln',
  '/hochzeitsfotograf-euskirchen',
  '/bewerbungsfotos-koeln',
  '/bewerbungsfotos-euskirchen',
  '/fotograf-koeln',
  '/fotoshooting-koeln',
  '/schwangerschaftsfotos-koeln',
  '/businessfotograf-koeln',
  '/portfolio',
  '/blog',
  '/blog/was-kostet-hochzeitsfotograf-koeln-2026',
  '/impressum',
  '/datenschutz',
]

type RouteResult = {
  route: string
  status: number
  h1Count: number
  h1Text: string
  jsonLdCount: number
  consoleErrors: string[]
  consoleWarnings: string[]
  requestErrors: string[]
}

async function auditRoute(browser: Awaited<ReturnType<typeof chromium.launch>>, route: string): Promise<RouteResult> {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } })
  const page = await context.newPage()

  const consoleErrors: string[] = []
  const consoleWarnings: string[] = []
  const requestErrors: string[] = []

  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text())
    else if (msg.type() === 'warning') consoleWarnings.push(msg.text())
  })
  page.on('requestfailed', (req) => {
    requestErrors.push(`${req.failure()?.errorText ?? 'FAIL'} ${req.url()}`)
  })

  const url = `${BASE}${route}`
  const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 30_000 })
  const status = response?.status() ?? 0

  const h1Text = await page.locator('h1').first().textContent().catch(() => '') ?? ''
  const h1Count = await page.locator('h1').count().catch(() => 0)
  const jsonLdCount = await page.locator('script[type="application/ld+json"]').count().catch(() => 0)

  await context.close()

  return {
    route,
    status,
    h1Count,
    h1Text: h1Text.trim().slice(0, 80),
    jsonLdCount,
    consoleErrors,
    consoleWarnings,
    requestErrors,
  }
}

async function main() {
  const browser = await chromium.launch({ headless: true })
  const results: RouteResult[] = []

  for (const route of ROUTES) {
    process.stdout.write(`auditing ${route} … `)
    try {
      const r = await auditRoute(browser, route)
      results.push(r)
      const ok = r.status === 200 && r.h1Count > 0 && r.consoleErrors.length === 0
      console.log(ok ? '✓' : `! status=${r.status} h1=${r.h1Count} errors=${r.consoleErrors.length}`)
    } catch (e) {
      console.log(`FAIL (${(e as Error).message})`)
      results.push({
        route,
        status: 0,
        h1Count: 0,
        h1Text: '',
        jsonLdCount: 0,
        consoleErrors: [(e as Error).message],
        consoleWarnings: [],
        requestErrors: [],
      })
    }
  }

  await browser.close()

  const md = buildReport(results)
  const out = 'docs/superpowers/phase1-audit.md'
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, md, 'utf-8')
  console.log(`\nreport → ${out}`)

  const passing = results.filter((r) => r.status === 200 && r.h1Count > 0 && r.consoleErrors.length === 0).length
  console.log(`${passing}/${results.length} routes clean\n`)
  process.exit(passing === results.length ? 0 : 1)
}

function buildReport(results: RouteResult[]): string {
  const totalErrors = results.reduce((s, r) => s + r.consoleErrors.length, 0)
  const totalWarnings = results.reduce((s, r) => s + r.consoleWarnings.length, 0)
  const totalReqErrors = results.reduce((s, r) => s + r.requestErrors.length, 0)

  const lines: string[] = [
    '# Phase 1 Audit Report',
    '',
    `Generated: ${new Date().toISOString()}`,
    `Base URL: \`${BASE}\``,
    '',
    '## Summary',
    '',
    `- Routes audited: ${results.length}`,
    `- HTTP 200: ${results.filter((r) => r.status === 200).length}/${results.length}`,
    `- H1 present: ${results.filter((r) => r.h1Count >= 1).length}/${results.length}`,
    `- JSON-LD present: ${results.filter((r) => r.jsonLdCount > 0).length}/${results.length}`,
    `- Console errors (total): ${totalErrors}`,
    `- Console warnings (total): ${totalWarnings}`,
    `- Failed requests (total): ${totalReqErrors}`,
    '',
    '## Per-Route Details',
    '',
    '| Route | Status | H1s | JSON-LD | Errors | Warnings | Req-Fail |',
    '|---|---|---|---|---|---|---|',
  ]
  for (const r of results) {
    lines.push(
      `| \`${r.route}\` | ${r.status} | ${r.h1Count} | ${r.jsonLdCount} | ${r.consoleErrors.length} | ${r.consoleWarnings.length} | ${r.requestErrors.length} |`,
    )
  }
  lines.push('', '## H1 Texts', '')
  for (const r of results) {
    lines.push(`- \`${r.route}\` — "${r.h1Text}"`)
  }
  if (totalErrors > 0) {
    lines.push('', '## Console Errors by Route', '')
    for (const r of results) {
      if (r.consoleErrors.length > 0) {
        lines.push(`### \`${r.route}\``, '')
        for (const e of r.consoleErrors) {
          lines.push(`- \`${e.slice(0, 200).replace(/\n/g, ' ')}\``)
        }
        lines.push('')
      }
    }
  }
  if (totalReqErrors > 0) {
    lines.push('', '## Failed Network Requests', '')
    for (const r of results) {
      if (r.requestErrors.length > 0) {
        lines.push(`### \`${r.route}\``, '')
        for (const e of r.requestErrors) {
          lines.push(`- \`${e.slice(0, 200)}\``)
        }
        lines.push('')
      }
    }
  }
  return lines.join('\n')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
