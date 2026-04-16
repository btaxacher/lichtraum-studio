# SEO-Rescue Design — Lichtraum Fotostudio

**Datum:** 2026-04-16
**Projekt:** Demo-Fotograf_2 (`main-landing-page/`)
**Status:** Approved (Dreiteilung) — Blocker-Policy & Implementation-Details pending

---

## Context & Problem Statement

Die Redesign-Runde „Warm Editorial Light" (Commits `30b5794` → `a7433a3`) hat die Homepage erfolgreich umgebaut, aber die SEO-Sub-Page-Infrastruktur kollateral zerstört. Drei root causes identifiziert:

1. **`next.config.mjs` Zeilen 17-26:** Pauschale `redirects()` lenken alle Sub-Routes (`/portfolio`, `/leistungen/:slug*`, `/fotograf/:slug*`, `/blog/:slug*`, `/ueber-uns`, `/kontakt`, `/preise`) auf `/` um. Alle als 307 (`permanent: false`), nicht 301 — also auch nicht SEO-verkraftbar.
2. **17 Sub-Page-Verzeichnisse in `src/app/_archived/`:** Die 4-Zeilen-Page-Wrapper (`page.tsx`) und die gesamten Ordner wurden beim Redesign in `_archived/` verschoben. Content bleibt in `src/content/*.ts` intakt.
3. **`src/app/sitemap.ts`:** Reduziert auf nur `/` (statt bisher 41 Routen).

**Was funktioniert noch:**
- Content-System komplett intakt: `tier1-content.ts` (476 Z., 8 Tier-1-Seiten mit Vollcontent), `city-content.ts` (423 Z., 12 Städte), `blog-posts.ts` (298 Z., 4 Blog-Artikel), `locations.ts` (185 Z., cities + services + tier1Pages Meta)
- Homepage (Warm Editorial) produktionsreif
- `site-url.ts` — ENV-basierter SITE_URL bereits implementiert (REQ 34 technisch schon erfüllt)
- Nanobanana-Scripts vorhanden: `scripts/generate-image.ts`, `scripts/prompts.ts`, `scripts/browser.ts`
- 21 Nanobanana-Prompts stehen bereit (laut HANDOFF)

**Was fehlt ganz:**
- 13 neue Top-Level-Städte/Hub-Seiten (NRW, Bonn Tier-1s, Weilerswist Homebase, Tier-3-Minis)
- Impressum/Datenschutz — waren auch vor Redesign nur Platzhalter
- Nano-Banana-Run wurde nie ausgeführt — Site läuft noch auf Unsplash-Fallbacks
- Schema-Overhaul: Weilerswist als ladungsfähige Adresse im Schema, FAQPage pro Unterseite
- Console-Errors (13 laut User-Report) — noch nicht verifiziert, aber vermutlich Unsplash-404s oder Framer-Motion Hydration-Issues
- OG-Bild `/og.jpg`

## User-Entscheidungen (bereits getroffen)

1. **3-Phasen-Struktur:** Genehmigt.
2. **Keine Archive-Restoration:** Sub-Pages werden fresh gebaut, passend zum Warm-Editorial-Design. Content aus `src/content/*.ts` wird aber weiterverwendet und gezielt ergänzt.
3. **Autonome Ausführung:** User stößt einmal an. Ab dort: plan-execute-review-Loop nach jedem Schritt, Phasenübergang erst nach Verifikation.
4. **Commit-Strategie:** Atomic commits pro Sub-Step für traceability.

## Blocker-Policy (autonomes Decision-Making)

Weil User nur einmal anstößt, werden folgende Blocker ohne Rückfrage behandelt:

| Blocker | Policy | Risiko |
|---|---|---|
| Impressum: Name + Weilerswist-Adresse | Placeholder-Markers `[INHABER-NAME]`, `[STRASSE + NR]`, `[TELEFON optional]`, `[USt-ID oder Kleinunternehmer]` mit prominentem `{/* TODO:BLOCKER */}`-Kommentar und oben auf der Seite sichtbarer Banner: „Rechtliche Angaben unvollständig — vor Go-Live ausfüllen". Schema mit „Lichtraum Fotostudio" als Organization-Name, ohne `founder.name` bis gefüllt. | Keine Abmahnung solange Banner steht und Domain nicht live-geschaltet. Go-Live-Blocker dokumentiert. |
| Kontakt-Email (`kontakt@lichtraum-euskirchen.de` per User-Prompt vs. `kontakt@lichtraum-studio.de` in content.ts) | User's Prompt ist autoritativ → `kontakt@lichtraum-euskirchen.de` als primäre Email. `info@kandivo.de` bleibt Formular-Ziel (Web3Forms). | Keins — Email-Domain kann später nachregistriert werden. |
| Telefonnummer | Bleibt entfernt (HANDOFF-Entscheidung „erstmal nur Email + Standort"). `brand.phone` wird aus Schema/JSON-LD entfernt, nicht durch Platzhalter ersetzt. | Keins. |
| Nano-Banana-Run | In Phase 3 wird Skript gestartet. Falls Chrome-Profil-Session abgelaufen / nicht eingeloggt: Abbruch, Skript-Output dokumentiert, Unsplash bleibt aktiv, P2-Follow-up-Ticket in HANDOFF. `remotePatterns` bleibt in dem Fall unverändert. | Requirement 31 ggf. unerfüllt — ehrlich als „blocked" reported. |
| Domain-Registrierung | Nicht Teil dieser Arbeit. SITE_URL-Fallback auf `lichtraum-studio.vercel.app` reicht, da Code schon ENV-basiert. | Keins. |
| Web3Forms Access Key | Nicht Teil dieser Arbeit. ContactForm läuft mit Mailto-Fallback weiter. | Keins — existing behavior. |

## Phasen-Architektur

### Phase 1 — SEO-Infrastruktur reaktivieren (`P1-SEO-Rescue`)

**Ziel:** Alle bisher existierenden Pages wieder 200 OK, Sitemap vollständig, Legal-Gerüst vorhanden, im Warm-Editorial-Look.

**Scope (21 Requirements aus Hard-Liste):**
- REQ 1-8: 8 Tier-1-Seiten (`/hochzeitsfotograf-koeln` etc.) — Template-Rebuild, Content aus `tier1-content.ts`, FAQPage + Service + BreadcrumbList Schema.
- REQ 22-26: Portfolio, Blog-Index, 3 Blog-Posts — Frisch aufgebaut.
- REQ 27-28: Impressum + Datenschutz — Vollständige rechtliche Struktur mit Placeholder-Markers.
- REQ 29-30: Sitemap + robots.txt — Dynamisch, liest alle Routen aus Daten-Quellen.
- REQ 33 (teilweise): Schema-Update Weilerswist postal code 53919, areaServed Weilerswist first.
- REQ 34: `NEXT_PUBLIC_SITE_URL` — Verifizieren, dass überall konsequent benutzt.
- REQ 35: Footer/Nav-Links auf existierende Routen prüfen.
- **ENTFERNT aus `next.config.mjs`:** Die `redirects()`-Block-Zeilen 17-26. Behalten: `/hochzeit-koeln` → `/hochzeitsfotograf-koeln` (Keyword-Typo-Redirects aus CLAUDE.md-Notiz).

**Exit-Kriterien (Phase 1 Definition of Done):**
- [ ] `curl` aller 8 Tier-1 + `/portfolio` + `/blog` + `/blog/*` + `/impressum` + `/datenschutz` liefert **200** statt 307/404.
- [ ] `curl /sitemap.xml` enthält ≥ 20 URLs mit `<lastmod>`.
- [ ] `curl /robots.txt` enthält `Sitemap:` Zeile.
- [ ] `npm run build` ohne Errors, keine neuen TypeScript-Warnings.
- [ ] Playwright-Test: jede der ≥ 20 URLs hat `<h1>`, `<title>`, JSON-LD mit validem JSON, keine Client-Console-Errors.
- [ ] Atomic-Commit pro Sub-Step, finale Phase-1-Commit-Message `feat(seo): phase 1 — restore SEO infrastructure`.

**Out-of-Scope Phase 1:**
- Neue Städte (Bonn, Leverkusen, Siegburg, Weilerswist etc.) — Phase 2
- Nano-Banana-Bild-Migration — Phase 3
- Lighthouse-Tuning — Phase 3
- Console-Errors investigation — ZU Phase 1 verschoben als Parallel-Track, weil User explicit (REQ 32)

**Architektur-Entscheidungen Phase 1:**

a) **Page-Wrapper-Pattern:** Jede Tier-1-Seite wird ein 4-Zeilen-File:
```ts
// src/app/hochzeitsfotograf-koeln/page.tsx
import { Tier1Page, tier1Metadata } from '@/components/pages/tier1-template'
export const generateMetadata = () => tier1Metadata('hochzeitsfotograf-koeln')
export default function Page() { return <Tier1Page slug="hochzeitsfotograf-koeln" /> }
```
Identisch zu `_archived/`-Version. Der Unterschied: `tier1-template.tsx` wird neu geschrieben mit warm-editorial Tokens (`bg.DEFAULT=#F8F3EC`, `fg.DEFAULT=#1F1C17`, `accent.gold=#C5A572` etc.), `SubPageHero` und `ProseSection` komplett frisch.

b) **Dynamic sitemap:** `sitemap.ts` reads from `locations.ts::tier1Pages`, `locations.ts::extraNicheCologne`, `blog-posts.ts::posts`, `locations.ts::cities` (Phase 2), plus static list `['portfolio', 'blog', 'impressum', 'datenschutz']`. One source of truth, no string-duplication.

c) **Legal pages:** Static React pages rendered per Server-Component. Keine MDX-Overkill für einmal-geschriebenen Legal-Text. `impressum/page.tsx` importiert ein `LegalShell`-Template, `datenschutz/page.tsx` dito.

d) **Blog-Infrastruktur:** `blog/page.tsx` rendert Liste aus `blogPosts` array, `blog/[slug]/page.tsx` rendert einzelnen Post mit `generateStaticParams()` + `generateMetadata()`. Content kommt aus `blog-posts.ts` (schon vorhanden, 4 Posts). BlogPosting + BreadcrumbList Schema.

e) **Schema-JSON-LD:** Neuer Ordner `src/components/seo/` mit kleinen dedicated Renderern:
- `LocalBusinessSchema.tsx` (nur Homepage + Layout)
- `ServiceSchema.tsx` (jede Tier-1)
- `BreadcrumbSchema.tsx` (alle Sub-Pages)
- `FAQPageSchema.tsx` (Tier-1 mit FAQs)
- `BlogPostingSchema.tsx` (Blog-Post-Detail)
Alle als `<script type="application/ld+json" dangerouslySetInnerHTML>`, Server-rendered.

f) **Redirects-Säuberung:** Destruktive Redirects raus. Keyword-Variant-Redirects bleiben/werden hinzugefügt falls nützlich.

**Verifikations-Strategie Phase 1:**
- Pro Sub-Step: `npm run dev` (background) + `curl localhost:3000/<route>` + `grep -E "<h1|<title"`
- Phase-End: Playwright-Script (`scripts/phase1-audit.ts`) das alle URLs durchläuft, status + h1 + jsonld-count loggt und in `docs/superpowers/phase1-audit.md` persistiert.

### Phase 2 — Neue Städte + Regional-Hubs (`P2-New-Pages`)

**Ziel:** 13 neue Top-Level-Sub-Pages mit unique Content, alle passend zu Warm-Editorial. Vollständige regionale Abdeckung Köln-Bonn-NRW-Umkreis.

**Scope (REQ 9-21 + Teile von 33):**

Tier-2 (Köln-nahe Hochvolumen, 1000+ Wörter):
- REQ 9: `/fotograf-bonn` (Vol 200, existing city-content.ts Bonn-Intro als Seed)
- REQ 10: `/hochzeitsfotograf-bonn` (Vol 200, komplett neu)
- REQ 11: `/hochzeitsfotograf-nrw` (Vol 200, Hub-Seite, verlinkt auf alle Hochzeits-Slugs)

Tier-2.5 (Mittel-Volumen, 800+ Wörter):
- REQ 12: `/fotograf-leverkusen` (Vol 100, existing Leverkusen city-content.ts Intro als Seed)

Tier-3 (Low-Volume, 600+ Wörter, Template-basiert):
- REQ 13-21: Siegburg, Bergisch Gladbach, Erftstadt, Bergheim, Kerpen, Hürth, Brühl, Pulheim, Weilerswist (9 Städte)
- Weilerswist bekommt Sonder-Copy (Homebase, emotional).

**Content-Strategie:**
- Für jede Seite: Hero + Intro (300 W.) + 2-3 Sections (400 W. combined) + 3-5 Lokal-Locations + 4-5 FAQs + CTA + Internal-Links-Block.
- **Keine Kopie:** Jede Seite bekommt eigenen Hero-Satz, eigene FAQ-Liste, eigene Lokal-Location-Auswahl aus `locations.ts`. Template ist das SAME, Content ist pro-Page-unique.
- City-Content-Seed: Für die 9 bestehenden Städte aus `locations.ts::cities` wird `locations[]`, `intro`, `tagline`, `neighbors[]` als Grundlage genutzt. Für Bonn-Weddings komplett frisch.

**Architektur-Entscheidungen Phase 2:**

a) **Dual-Pattern vs. Single-Pattern:** Laut User-Prompt alle Städte als Top-Level (`/fotograf-bonn`, NICHT `/fotograf/bonn`). Das bestehende `/fotograf/[city]` dynamic segment bleibt aus `_archived/fotograf/` ungenutzt (nicht restauriert). Eine neue `src/content/city-pages.ts` mapped slug → Full-Content, wird von einem neuen `CityPage`-Template gelesen, analog zu Tier-1.

b) **NRW-Hub:** `/hochzeitsfotograf-nrw` ist keine reguläre Stadt, sondern eine Hub-Seite. Bekommt eigenes `NrwHubPage`-Template mit Städte-Grid (verlinkt auf `/hochzeitsfotograf-koeln`, `-bonn`, `-euskirchen`).

c) **Content-Herstellung:** Ich schreibe die Texte autonom, orientiert an Ton und Stil von `tier1-content.ts` (literarisch-editorial, Sie-Anrede, keine Phrasen). Lokaler Bezug jede Stadt: 3+ konkrete Locations mit Namen + Charakterisierung.

**Exit-Kriterien Phase 2:**
- [ ] `curl` aller 13 neuen URLs → 200 OK.
- [ ] `scripts/word-count.ts` verifiziert Word-Counts pro URL gegen Threshold (Bonn/NRW ≥ 1000, Leverkusen ≥ 800, Tier-3 ≥ 600).
- [ ] Sitemap enthält jetzt ≥ 33 URLs.
- [ ] Build passes.
- [ ] Phase-2-Commit `feat(seo): phase 2 — 13 new top-level landing pages`.

**Out-of-Scope Phase 2:**
- Nano-Banana-Run — Phase 3
- Lighthouse-Optimierung — Phase 3

### Phase 3 — Image-Migration + Schema-Audit + Perf (`P3-Polish`)

**Ziel:** Alle Seiten Lighthouse ≥ 95 SEO / ≥ 85 Mobile Perf. Zero Unsplash. Schema 100% RichResults-konform.

**Scope (REQ 31, 32, 33-Rest, 36, 37):**

a) **Nano-Banana-Run:**
- Prompts auditieren (`scripts/prompts.ts`) — Erweiterung auf ~60 Prompts für alle neuen Seiten (21 Hero-Bilder, Gallery-Pool).
- Skript ausführen: `npm run generate-images`.
- Falls erfolgreich: `USE_LOCAL = true` in `content.ts`, alle Unsplash-URLs in Code (Hero, Gallery, CursorTrail, Testimonials, Journal, CityPage) auf lokale Pfade umschwenken.
- `remotePatterns` aus `next.config.mjs` entfernen (mindestens Unsplash raus).
- Wenn Skript abbricht (Chrome nicht eingeloggt etc.): Abbruch dokumentieren, Follow-up-Ticket in HANDOFF, Unsplash bleibt, REQ 31 als „blocked" gemeldet.

b) **Console-Errors-Fix (REQ 32):**
- Playwright-Audit über alle Haupt-Routen: `console.error` sammeln, pro Route gruppieren.
- Root-cause pro Error, Fix (nicht silencen).
- Erneuter Audit, erwartet: 0 Errors.

c) **Schema-Audit (REQ 33):**
- Google Rich Results Test per `curl`-ähnlicher Tool oder direkt API gegen `validator.schema.org`.
- Pro Route: Service, FAQPage, BreadcrumbList, LocalBusiness, BlogPosting — alle valid.
- Photographer-Type auf Homepage additiv einbauen.

d) **Lighthouse-Audit (REQ 36, 37):**
- Playwright + Lighthouse-CI auf Homepage + 3 zufällige Sub-Pages (desktop + mobile).
- Target: SEO ≥ 95, Perf Mobile ≥ 85.
- Typische Fixes: `<Image priority>` für Hero, `<Image sizes>` bei allen anderen, Font-Display, `remotePatterns`-Entfernung.

e) **OG-Bild `/og.jpg`:**
- Nano-Banana generiert ein 1200×630-Bild passend zum Brand. Falls nicht: Tailwind-basiertes HTML-to-Image oder Platzhalter mit Brand-Typografie.

**Exit-Kriterien Phase 3:**
- [ ] Homepage Lighthouse SEO ≥ 95, Perf Mobile ≥ 85.
- [ ] 3 zufällige Sub-Pages Lighthouse SEO ≥ 95.
- [ ] Rich Results Test für Homepage + 3 Sub-Pages: alle Schemas valid.
- [ ] 0 Console-Errors auf Homepage + 3 Sub-Pages.
- [ ] Nano-Banana erfolgreich ODER explizit als „blocked, follow-up" dokumentiert.
- [ ] `SEO_AUDIT_V2.md` im Projekt-Root mit Full-Audit-Report.
- [ ] `HANDOFF.md` aktualisiert.
- [ ] Final-Commit `feat(seo): phase 3 — polish, images, schema, perf`.

## Daten-Fluss & File-Layout

```
main-landing-page/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx                   (schema refinements)
│  │  ├─ page.tsx                     (+ FAQPage, Photographer schema)
│  │  ├─ sitemap.ts                   (rewrite — dynamic, reads data sources)
│  │  ├─ robots.ts                    (verify, add Sitemap: reference)
│  │  │
│  │  ├─ [8 tier-1 wrappers]          (Phase 1)
│  │  ├─ [13 new city wrappers]       (Phase 2)
│  │  ├─ portfolio/page.tsx           (Phase 1)
│  │  ├─ blog/
│  │  │  ├─ page.tsx                  (Phase 1 — index)
│  │  │  └─ [slug]/page.tsx           (Phase 1 — detail)
│  │  ├─ impressum/page.tsx           (Phase 1)
│  │  ├─ datenschutz/page.tsx         (Phase 1)
│  │  └─ _archived/                   (untouched — reference, not in build)
│  │
│  ├─ components/
│  │  ├─ pages/
│  │  │  ├─ tier1-template.tsx        (rewrite warm-editorial, Phase 1)
│  │  │  ├─ city-template.tsx         (new, Phase 2)
│  │  │  ├─ nrw-hub-template.tsx      (new, Phase 2)
│  │  │  └─ legal-shell.tsx           (new, Phase 1)
│  │  ├─ sections/
│  │  │  ├─ sub-page-hero.tsx         (rewrite warm-editorial, Phase 1)
│  │  │  ├─ prose-section.tsx         (rewrite warm-editorial, Phase 1)
│  │  │  ├─ internal-links.tsx        (rewrite warm-editorial, Phase 1)
│  │  │  ├─ breadcrumbs.tsx           (rewrite warm-editorial, Phase 1)
│  │  │  └─ faq-grid.tsx              (new — FAQ-Rendering + JSON-LD Adapter, Phase 1)
│  │  └─ seo/
│  │     ├─ JsonLd.tsx                (new helper, Phase 1)
│  │     ├─ LocalBusinessSchema.tsx   (Phase 1)
│  │     ├─ ServiceSchema.tsx         (Phase 1)
│  │     ├─ BreadcrumbSchema.tsx      (Phase 1)
│  │     ├─ FaqPageSchema.tsx         (Phase 1)
│  │     ├─ BlogPostingSchema.tsx     (Phase 1)
│  │     └─ PhotographerSchema.tsx    (Phase 3)
│  │
│  ├─ content/
│  │  ├─ tier1-content.ts             (reuse, minor edits)
│  │  ├─ city-content.ts              (extend — FULL content for 9 tier-3 cities, new Bonn/Leverkusen/Weilerswist blocks, Phase 2)
│  │  ├─ city-pages.ts                (NEW — Top-Level-Slug → City-Content-Mapping, Phase 2)
│  │  ├─ blog-posts.ts                (reuse — 3 hero posts)
│  │  └─ legal-content.ts             (NEW — impressum + datenschutz data, Phase 1)
│  │
│  └─ lib/
│     ├─ content.ts                   (kontakt@ email update, Phase 1)
│     ├─ locations.ts                 (extend with new tier1-ish entries for Bonn/NRW/Leverkusen, Phase 2)
│     ├─ site-url.ts                  (unchanged — already ENV-based)
│     ├─ metadata.ts                  (NEW — buildMetadata(opts) helper, Phase 1)
│     └─ word-count.ts                (NEW — verification tool, Phase 1)
│
├─ next.config.mjs                    (REMOVE destructive redirects, Phase 1)
│
├─ scripts/
│  ├─ generate-image.ts               (reuse)
│  ├─ browser.ts                      (reuse)
│  ├─ prompts.ts                      (EXTEND from 21 to ~60, Phase 3)
│  ├─ phase1-audit.ts                 (NEW, Phase 1)
│  ├─ phase2-audit.ts                 (NEW, Phase 2)
│  └─ phase3-audit.ts                 (NEW, Phase 3)
│
├─ docs/superpowers/
│  ├─ specs/
│  │  └─ 2026-04-16-seo-rescue-design.md  (this doc)
│  └─ plans/
│     ├─ phase-1-plan.md              (next)
│     ├─ phase-2-plan.md              (after phase 1 verified)
│     └─ phase-3-plan.md              (after phase 2 verified)
│
└─ SEO_AUDIT_V2.md                    (Phase 3 final)
```

## Commit-Strategie

Atomic commits pro substantieller Arbeitseinheit:

Phase 1:
1. `fix(next): remove destructive sub-path redirects`
2. `feat(seo): add dynamic sitemap + robots`
3. `feat(seo): add schema component library`
4. `feat(sub-pages): rewrite tier1 template warm-editorial`
5. `feat(tier1): wire 8 tier-1 page wrappers`
6. `feat(legal): impressum + datenschutz pages with placeholders`
7. `feat(portfolio): fresh portfolio masonry page`
8. `feat(blog): blog index + [slug] detail pages`
9. `test(seo): phase 1 audit script passes`

Phase 2: similar decomposition.
Phase 3: similar.

## Review-Loop pro Sub-Step

Nach jedem Commit:
1. `npm run build` — keine Errors
2. Neuen Entwicklungsserver `npm run dev` (background) starten, falls nicht aktiv
3. `curl -o /dev/null -w "%{http_code}" localhost:3000/<affected-route>` → expect 200
4. Git-Diff gegen vorheriges Commit visual check
5. Nur wenn ✅ → nächster Sub-Step

Bei Fehler:
1. Root-cause ermitteln (Error-Log, TypeScript-Error, Playwright-Output)
2. Fix im gleichen commit (amend) ODER follow-up-Commit mit `fix(…):` prefix
3. Review-Loop erneut

## Success-Metriken (end-of-session)

- **Hard Requirements aus User-Prompt:**
  - Phase 1 schließt ab: REQ 1-8, 22-28, 29, 30, 34, 35 → **18 of 37**
  - Phase 2 schließt ab: REQ 9-21 → **+13**, total **31 of 37**
  - Phase 3 schließt ab: REQ 31, 32, 33, 36, 37 → **total 37 of 37** (oder 36 of 37 falls Nano-Banana blocked)

- **Quality gates:**
  - 0 TypeScript errors
  - 0 new ESLint warnings
  - Build succeeds production-mode
  - 0 Console-Errors on Home + 3 random Sub-Pages (Phase 3)
  - Lighthouse targets met (Phase 3)

## Risks & Mitigation

| Risk | Mitigation |
|---|---|
| Nano-Banana Chrome-Session abgelaufen / 2FA-Prompt | Frühzeitiger Test-Run vor Phase 3 Hauptlauf; Fallback-Plan: mit Unsplash bleiben, REQ 31 als offener Punkt |
| Word-Count-Anforderungen nicht erreichbar mit qualitätvollem Content | Harte Untergrenze: ± 50 Wörter Toleranz. Transparenz im Audit wenn unter Target. |
| Build-Time explodiert durch 35+ statische Routen | Turbopack incremental build sollte es handlen. Bei Problemen: `export const dynamic = 'force-static'` explizit. |
| Content-Kollisionen (zwei Seiten mit sehr ähnlichem Text) | Pre-commit Check: kein Satz > 12 Wörter doppelt zwischen 2 Seiten (grep-basierter Check) |
| Warm-Editorial Template passt nicht mit Dark-Charcoal-Sections der Homepage | Tier-1 bleibt konsistent warm-editorial. Pricing/Contact-Charcoal NUR Homepage (wie bisher). |
| Archived `_archived/` Files beeinträchtigen Build | Next.js ignoriert `_`-prefixed Ordner automatisch. Verifiziert. |

## Next-Step-Trigger

Nach User-Review dieses Specs: `writing-plans` Skill wird für Phase 1 invoked.
Phase 2 und 3 bekommen eigene Pläne nach erfolgreicher Phase-1-Verifikation.
