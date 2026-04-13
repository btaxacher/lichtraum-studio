/**
 * Nanobanana Browser — Chrome CDP connection for Gemini Web UI.
 * Adapted from c:\Users\basti\Projekte\Depotfokus\src\nanobanana\browser.ts
 *
 * First run: Log in manually at gemini.google.com (session persists).
 * Subsequent runs: Automatically authenticated.
 *
 * IMPORTANT: All other Chrome windows must be closed before running.
 */
import { chromium, type Browser, type BrowserContext, type Page } from 'playwright'
import { spawn, type ChildProcess } from 'node:child_process'

const PROFILE_DIR = 'C:/Users/basti/.nanobanana-profile'
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const DEBUG_PORT = 9222

export interface GeminiBrowser {
  readonly browser: Browser
  readonly context: BrowserContext
  readonly page: Page
  readonly chromeProcess: ChildProcess
  close(): Promise<void>
}

export async function createGeminiBrowser(): Promise<GeminiBrowser> {
  console.log('  Launching Chrome with Nanobanana profile...')

  const chromeProcess = spawn(
    CHROME_PATH,
    [
      `--remote-debugging-port=${DEBUG_PORT}`,
      `--user-data-dir=${PROFILE_DIR}`,
      '--no-first-run',
      '--no-default-browser-check',
      'about:blank',
    ],
    { detached: false, stdio: 'ignore' },
  )

  await waitForDebugPort(DEBUG_PORT, 15000)

  const browser = await chromium.connectOverCDP(`http://localhost:${DEBUG_PORT}`)
  const context = browser.contexts()[0]
  const page = context.pages()[0] ?? (await context.newPage())

  console.log('  Connected via CDP')

  return {
    browser,
    context,
    page,
    chromeProcess,
    async close() {
      await browser.close()
      chromeProcess.kill()
    },
  }
}

async function waitForDebugPort(port: number, timeoutMs: number): Promise<void> {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    try {
      const r = await fetch(`http://localhost:${port}/json/version`)
      if (r.ok) return
    } catch {}
    await new Promise((r) => setTimeout(r, 500))
  }
  throw new Error(`Chrome debug port ${port} not available. Close all Chrome windows first.`)
}

export function randomDelay(minMs: number, maxMs: number): number {
  return Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs
}

export async function shortWait(minMs = 1000, maxMs = 3000): Promise<void> {
  await new Promise((r) => setTimeout(r, randomDelay(minMs, maxMs)))
}
