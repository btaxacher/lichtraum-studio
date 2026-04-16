/**
 * Schema-Validation Audit — extrahiert JSON-LD pro Route und prüft Syntax + Typen.
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
  '/fotograf-bonn',
  '/hochzeitsfotograf-bonn',
  '/hochzeitsfotograf-nrw',
  '/fotograf-leverkusen',
  '/fotograf-siegburg',
  '/fotograf-bergisch-gladbach',
  '/fotograf-erftstadt',
  '/fotograf-bergheim',
  '/fotograf-kerpen',
  '/fotograf-huerth',
  '/fotograf-bruehl',
  '/fotograf-pulheim',
  '/fotograf-weilerswist',
  '/portfolio',
  '/blog',
  '/blog/was-kostet-hochzeitsfotograf-koeln-2026',
  '/impressum',
  '/datenschutz',
]

type RouteSchemaResult = {
  route: string
  count: number
  parseErrors: string[]
  types: string[]
}

async function auditRoute(browser: Awaited<ReturnType<typeof chromium.launch>>, route: string): Promise<RouteSchemaResult> {
  const ctx = await browser.newContext()
  const page = await ctx.newPage()
  await page.goto(`${BASE}${route}`, { waitUntil: 'domcontentloaded', timeout: 20_000 })
  const scripts = await page.$$eval('script[type="application/ld+json"]', (els) =>
    els.map((e) => e.textContent ?? ''),
  )
  await ctx.close()

  const parseErrors: string[] = []
  const types: string[] = []

  for (const s of scripts) {
    try {
      const data = JSON.parse(s)
      const collect = (obj: any): void => {
        if (!obj || typeof obj !== 'object') return
        if (Array.isArray(obj['@type'])) types.push(...obj['@type'])
        else if (obj['@type']) types.push(obj['@type'])
        if (obj.mainEntity) Array.isArray(obj.mainEntity) ? obj.mainEntity.forEach(collect) : collect(obj.mainEntity)
      }
      collect(data)
    } catch (e) {
      parseErrors.push((e as Error).message)
    }
  }

  return { route, count: scripts.length, parseErrors, types }
}

async function main() {
  const browser = await chromium.launch({ headless: true })
  const results: RouteSchemaResult[] = []

  for (const route of ROUTES) {
    process.stdout.write(`schema ${route} … `)
    const r = await auditRoute(browser, route)
    results.push(r)
    const ok = r.parseErrors.length === 0 && r.count > 0
    console.log(ok ? `✓ ${r.count} schemas [${[...new Set(r.types)].slice(0, 4).join(', ')}]` : `! err=${r.parseErrors.length}`)
  }

  await browser.close()

  const md = buildReport(results)
  const out = 'docs/superpowers/schema-audit.md'
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, md, 'utf-8')
  console.log(`\nreport → ${out}`)

  const totalErrors = results.reduce((s, r) => s + r.parseErrors.length, 0)
  const totalSchemas = results.reduce((s, r) => s + r.count, 0)
  console.log(`${results.length} routes, ${totalSchemas} schemas, ${totalErrors} parse errors\n`)
  process.exit(totalErrors > 0 ? 1 : 0)
}

function buildReport(results: RouteSchemaResult[]): string {
  const lines: string[] = [
    '# Schema Validation Audit',
    '',
    `Generated: ${new Date().toISOString()}`,
    `Base URL: \`${BASE}\``,
    '',
    '## Summary per Route',
    '',
    '| Route | Schemas | Types | Parse Errors |',
    '|---|---|---|---|',
  ]
  for (const r of results) {
    const uniqueTypes = [...new Set(r.types)].join(', ')
    lines.push(`| \`${r.route}\` | ${r.count} | ${uniqueTypes} | ${r.parseErrors.length} |`)
  }
  const totalErr = results.reduce((s, r) => s + r.parseErrors.length, 0)
  lines.push('', `**Total parse errors: ${totalErr}**`, '')
  if (totalErr > 0) {
    lines.push('## Errors', '')
    for (const r of results) {
      if (r.parseErrors.length > 0) {
        lines.push(`### \`${r.route}\``, '')
        for (const e of r.parseErrors) lines.push(`- ${e}`)
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
