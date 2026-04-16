# Phase 1 Plan — SEO-Infrastruktur Reaktivierung

**Spec:** `docs/superpowers/specs/2026-04-16-seo-rescue-design.md`
**Phase:** 1 of 3
**Goal:** Alle bisher archivierten Sub-Routes wieder 200 OK, Sitemap + Robots dynamisch, Legal-Gerüst, Schema-Komponenten-Library, Tier-1-Templates neu im Warm-Editorial-Look. **Keine neuen Städte** (→ Phase 2), **keine Nano-Banana** (→ Phase 3).

## Arbeitseinheiten (mit Commit-Message & Verifikation)

### Step 1.1 — Destruktive Redirects entfernen
**Why first:** Root-cause. Solange diese aktiv sind, gibt jede neue Sub-Route 307 → `/`.

- [ ] `next.config.mjs` öffnen
- [ ] Redirect-Array leer machen (oder komplett entfernen → Next.js akzeptiert das)
- [ ] Keyword-Typo-Redirects (`/hochzeit-koeln`, `/fotografin-koeln`) wiederherstellen auf neue Zielrouten (Phase 2 Dependencies beachten — für Phase 1 nur die Ziele, die in Phase 1 entstehen)

**Commit:** `fix(next): remove destructive sub-path redirects, restore keyword canonicals`

**Verify:** `npm run build` → succeeds. (Noch kein Route-200-Check möglich, da Pages erst in Step 1.4 neu gebaut werden. Aber Build-Error-Absenz zeigt: Config syntaktisch korrekt.)

---

### Step 1.2 — Email-Korrektur + Schema-Basis-Update in `content.ts` + `layout.tsx`
**Why:** Alles bauende Sub-Page-JSON-LD erbt hier Daten. Zuerst Single-Source fixen.

- [ ] `src/lib/content.ts::brand.email` → `kontakt@lichtraum-euskirchen.de`
- [ ] `src/lib/content.ts::brand.phone` → entfernen (oder auf null; existing omission pattern)
- [ ] `src/app/layout.tsx` LocalBusiness Schema:
  - `telephone`-Key entfernen
  - `address.addressLocality` → `Weilerswist` (ladungsfähig-Vorbereitung)
  - `address.postalCode` → `53919`
  - `areaServed`: Weilerswist ZUERST, dann Euskirchen, dann andere

**Commit:** `chore(content): update contact email + localize business address to Weilerswist`

**Verify:** `npm run dev` + `curl http://localhost:3000/` → HTML enthält `"addressLocality":"Weilerswist"` und kein `telephone`-Key mehr.

---

### Step 1.3 — SEO-Component-Library erstellen (`src/components/seo/`)

Kleine Renderer pro Schema-Typ für Re-Use.

- [ ] `JsonLd.tsx` — Generic helper: `<JsonLd data={obj} />` rendert `<script type="application/ld+json">` mit safe JSON-stringify (escape `</script>`).
- [ ] `BreadcrumbSchema.tsx` — Nimmt `{items: {name, url}[]}` → BreadcrumbList.
- [ ] `ServiceSchema.tsx` — Nimmt `{name, description, areaServed, offers?}` → Service.
- [ ] `FaqPageSchema.tsx` — Nimmt `faqs: {q, a}[]` → FAQPage.
- [ ] `BlogPostingSchema.tsx` — Nimmt `{headline, author, datePublished, image?, wordCount?}` → BlogPosting.

Keine `PhotographerSchema` und keine `LocalBusinessSchema` in Phase 1 — die bleiben inline im `layout.tsx` (schon drin, Phase 3 extrahiert falls nötig).

**Commit:** `feat(seo): add schema component library (breadcrumb, service, faq, blog)`

**Verify:** TypeScript build passes. (Komponenten werden in Step 1.4+ konsumiert.)

---

### Step 1.4 — `buildMetadata()` + `lib/metadata.ts`

Zentraler Metadata-Builder für alle Sub-Pages. Erzeugt `title`, `description`, `canonical`, `openGraph`, `twitter`, `robots` konsistent.

- [ ] `src/lib/metadata.ts` mit `buildMetadata({title, description, path, image?, keywords?}): Metadata`
- [ ] Nutzt `SITE_URL` aus `site-url.ts` für canonical + OG url.

**Commit:** `feat(seo): centralize sub-page metadata builder`

**Verify:** Import in einem Page-Wrapper (als Test) ohne TypeScript-Fehler.

---

### Step 1.5 — Tier-1-Template neu aufbauen (warm-editorial)

Das Herzstück. `tier1-template.tsx` existiert in `_archived/` (archiviert) — aber wir bauen fresh.

Komponenten:
- [ ] `src/components/sections/sub-page-hero.tsx` — Warm-editorial Hero (eyebrow, H1, subtitle, CTA, 1 Hero-Bild). Cream Background, Cormorant H1, Gold Script-Eyebrow. Framer Motion subtle entrance.
- [ ] `src/components/sections/prose-section.tsx` — Text-Blöcke mit H2. Max-width 65ch, serif body, generous line-height. Alternating bg for Rhythm (bg + bg.secondary).
- [ ] `src/components/sections/internal-links.tsx` — 3-spaltiges Grid mit Cards, „Das könnte Sie auch interessieren". Warm-editorial Cards mit border + hover-lift.
- [ ] `src/components/sections/breadcrumbs.tsx` — Visual Breadcrumb + BreadcrumbList JSON-LD. Top of page.
- [ ] `src/components/sections/sub-page-gallery.tsx` — 6-9 Bilder Grid (reuse gallery patterns from homepage).
- [ ] `src/components/sections/sub-page-pricing.tsx` — 2-3 Paket-Cards.
- [ ] `src/components/sections/sub-page-faq.tsx` — Accordion-Style FAQ + FAQPage JSON-LD Adapter.
- [ ] `src/components/sections/sub-page-cta.tsx` — Finaler CTA-Block, warm-editorial.
- [ ] `src/components/pages/tier1-template.tsx` — Orchestrator. Nimmt `slug`, liest `tier1Content[slug]`, rendert Sections mit ordered Structure:
  1. Breadcrumbs
  2. SubPageHero
  3. ProseSection (intro)
  4. For each `section.h2`: ProseSection mit H2
  5. SubPageGallery (mit slug-spezifischer Bild-Auswahl)
  6. SubPagePricing (falls pricing in content)
  7. SubPageFAQ
  8. SubPageCta
  9. InternalLinks (3 related slugs, computed)
  10. JSON-LD: Service + FAQPage + BreadcrumbList

- [ ] `tier1Metadata(slug)` Funktion im gleichen File, exportiert, nutzt `buildMetadata()` + `tier1Pages`/`extraNicheCologne` für title/description.

**Commit:** `feat(sub-pages): warm-editorial tier-1 template + section components`

**Verify:** Noch keine Routen aktiviert, aber Template importierbar ohne Fehler. `npm run build` passes.

---

### Step 1.6 — 8 Tier-1-Page-Wrappers

4-Zeilen-Wrappers pro Slug. Komplett Mechanisch — copy-paste-ähnlich, nur slug ändert sich.

Slugs:
- `hochzeitsfotograf-koeln`, `bewerbungsfotos-koeln`, `fotograf-koeln`, `fotoshooting-koeln`
- `hochzeitsfotograf-euskirchen`, `bewerbungsfotos-euskirchen`
- `schwangerschaftsfotos-koeln`, `businessfotograf-koeln`

- [ ] Create `src/app/{slug}/page.tsx` für jeden der 8 Slugs
- [ ] Build ausführen
- [ ] Curl-Check jede URL → 200

**Commit:** `feat(tier1): wire 8 tier-1 page wrappers`

**Verify:**
```bash
for u in hochzeitsfotograf-koeln bewerbungsfotos-koeln fotograf-koeln \
         fotoshooting-koeln hochzeitsfotograf-euskirchen bewerbungsfotos-euskirchen \
         schwangerschaftsfotos-koeln businessfotograf-koeln; do
  c=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/$u)
  echo "$c  /$u"
done
```
Alle 8 → 200.

---

### Step 1.7 — Content-Erweiterung für Tier-1 Word-Count-Thresholds

User REQ: `/hochzeitsfotograf-koeln` > 1200 Wörter, etc. Current `tier1-content.ts` ist qualitativ gut aber vielleicht zu knapp pro Seite.

- [ ] `scripts/word-count.ts` schreiben — zählt Wörter pro slug aus `tier1Content[slug]` (intro + sections + faqs + closing).
- [ ] Alle 8 Slugs durchchecken.
- [ ] Bei slugs unter Target: ergänze 1-2 Section(s) oder verlängere bestehende. Beibehalten: literarisch-editorial Ton, keine AI-Phrasen.

Targets:
- `hochzeitsfotograf-koeln`: ≥ 1200
- `bewerbungsfotos-koeln`: ≥ 1200
- `fotograf-koeln`: ≥ 1200
- `fotoshooting-koeln`: ≥ 1000
- `hochzeitsfotograf-euskirchen`: ≥ 1000
- `bewerbungsfotos-euskirchen`: ≥ 1000
- `schwangerschaftsfotos-koeln`: ≥ 1000
- `businessfotograf-koeln`: ≥ 1000

**Commit:** `feat(content): expand tier-1 content to meet seo word-count thresholds`

**Verify:** `npx tsx scripts/word-count.ts` listet pro Slug Count + PASS/FAIL.

---

### Step 1.8 — Dynamic Sitemap + Robots

- [ ] `src/app/sitemap.ts` rewrite:
  - Lese `tier1Pages`, `extraNicheCologne` aus `locations.ts`
  - Lese `blogPosts` aus `blog-posts.ts`
  - Static list: `['portfolio', 'blog', 'impressum', 'datenschutz']`
  - Priority + changeFrequency pro Typ
- [ ] `src/app/robots.ts` verify — `Sitemap:` Zeile dazu.

**Commit:** `feat(seo): dynamic sitemap + robots with sitemap reference`

**Verify:**
- `curl http://localhost:3000/sitemap.xml | grep -c "<url>"` ≥ 14 (8 tier-1 + portfolio + blog + 3 posts + impressum + datenschutz + home = 15)
- `curl http://localhost:3000/robots.txt | grep Sitemap` → found

---

### Step 1.9 — Impressum + Datenschutz mit Placeholder-Markern

- [ ] `src/content/legal-content.ts` — struct mit `impressum: {sections: [...]}`, `datenschutz: {sections: [...]}`. Placeholder für User-Daten (`[INHABER-NAME]`, `[STRASSE + NR]`, `[USt-ID / Kleinunternehmer]`).
- [ ] `src/components/pages/legal-shell.tsx` — Renderer.
- [ ] `src/app/impressum/page.tsx` — Wrapper.
- [ ] `src/app/datenschutz/page.tsx` — Wrapper.
- [ ] An Top jeder Seite: gelber Banner „⚠️ Rechtliche Angaben unvollständig — vor Go-Live ausfüllen" der nur rendert, wenn Content noch Platzhalter enthält (auto-detect via `.includes('[INHABER-NAME]')`).
- [ ] TMG-konforme Struktur: § 5 TMG Angaben, Haftungsausschluss, Urheberrecht, verantwortlich § 55 Abs. 2 RStV.
- [ ] DSGVO-konforme Struktur: Verantwortlicher, Datenverarbeitung, Kontaktformular, Cookies, Hosting (Vercel), Rechte d. Betroffenen.

**Commit:** `feat(legal): impressum + datenschutz pages with placeholder banner`

**Verify:** `curl http://localhost:3000/impressum` → 200, enthält `§ 5 TMG`, `[INHABER-NAME]`-Platzhalter und Warnbanner.

---

### Step 1.10 — Portfolio-Seite

Fresh warm-editorial Masonry mit 20+ Bildern.

- [ ] `src/components/pages/portfolio-template.tsx` — Masonry Grid (reuse homepage gallery pattern), Filter-Chips optional (Wedding/Portrait/Business), Lightbox (yet-another-react-lightbox — already dep).
- [ ] `src/content/portfolio.ts` — Array mit ≥ 20 Bildern (kurator aus existing Unsplash pool + Kategorie).
- [ ] `src/app/portfolio/page.tsx` — Wrapper mit Metadata.

**Commit:** `feat(portfolio): fresh masonry portfolio page`

**Verify:** `curl http://localhost:3000/portfolio` → 200, HTML enthält ≥ 20 `<img`-Tags.

---

### Step 1.11 — Blog-Infrastruktur

- [ ] `src/components/pages/blog-index-template.tsx` — Artikel-Liste (Card mit Hero + Title + Excerpt + Link).
- [ ] `src/components/pages/blog-post-template.tsx` — Single Post Layout (Hero, Body sections, related posts, BlogPosting JSON-LD).
- [ ] `src/app/blog/page.tsx` — Wrapper.
- [ ] `src/app/blog/[slug]/page.tsx` — Dynamic route mit `generateStaticParams` + `generateMetadata`.
- [ ] `blog-posts.ts` evtl. enrichen auf 3 hero posts (`hochzeitslocations-rheinland`, `outfit-bewerbungsshooting`, `getting-ready-hochzeit`) mit Word-Counts ≥ 1500/1200/1200.

**Commit:** `feat(blog): blog index + post detail pages with BlogPosting schema`

**Verify:**
- `curl /blog` → 200, enthält ≥ 3 Card-Links
- `curl /blog/hochzeitslocations-rheinland` → 200, Body enthält BlogPosting JSON-LD
- Word-Count-Test für die 3 Posts passt Thresholds

---

### Step 1.12 — Homepage-FAQ + Homepage-Sitemap-Entry absichern

Homepage-FAQ existiert bereits (`FaqAccordion`), aber FAQPage JSON-LD fehlt evtl. auf Homepage (nur LocalBusiness vorhanden). REQ 33 fordert FAQPage pro Unterseite + Homepage.

- [ ] `src/app/page.tsx` — FaqPageSchema einhängen mit Homepage-FAQs (aus `content.ts`).

**Commit:** `feat(home): add FAQPage schema to homepage`

**Verify:** Homepage HTML enthält zwei `application/ld+json` blocks: LocalBusiness + FAQPage.

---

### Step 1.13 — Internal-Links-Footer-Audit

User REQ 35: „Alle internen Links funktionieren — keine 404-Verweise mehr im Footer / Services-Grid"

- [ ] `src/components/sections/footer.tsx` + `nav.tsx` → prüfen welche Links gesetzt sind.
- [ ] Falls auf `/leistungen/*` oder `/fotograf/*` verlinkt (die wir in Phase 1 NICHT aktivieren): Links auf tier-1-slugs umbiegen ODER entfernen.

**Commit:** `fix(nav): replace 404 footer links with active sub-pages`

**Verify:** `curl /` → grep links → spot-check 5 Links → each → 200.

---

### Step 1.14 — Console-Error-Audit (Pre-Screening für Phase 3)

Laut User 13 Console-Errors auf Homepage. Schon mal prüfen was der Stand ist.

- [ ] `scripts/phase1-audit.ts` schreiben — Playwright script das über Home + 2 Sub-Pages geht, `page.on('console')` sammelt, in `docs/superpowers/phase1-audit.md` loggt.
- [ ] Fixes für „low-hanging-fruit" Errors (missing alt-attrs, 404-Images) direkt mitmachen.
- [ ] Schwierigere Root-Cause-Fixes → Phase 3.

**Commit:** `test(seo): phase 1 audit script + quick console fixes`

**Verify:** Audit-Report zeigt `errors < 13` (signifikante Reduktion).

---

## Phase 1 — Exit-Check

Bash-Check (mirror from user's prompt):
```bash
for u in / /hochzeitsfotograf-koeln /hochzeitsfotograf-euskirchen \
         /bewerbungsfotos-koeln /bewerbungsfotos-euskirchen \
         /fotograf-koeln /fotoshooting-koeln /schwangerschaftsfotos-koeln \
         /businessfotograf-koeln /portfolio /blog /impressum /datenschutz \
         /sitemap.xml /robots.txt; do
  c=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000$u)
  echo "$c  $u"
done
```
**Expected:** Alle 200.

Dann: `npm run build` → 0 errors, alle 15+ Routen prerendered (vs 4 zum Phase-Start).

Dann: `git log --oneline` zeigt ~14 commits für Phase 1 in logischer Reihenfolge.

Nur wenn alle Checks ✅: Phase 2 Plan schreiben.

## Offene Dependencies für Phase 2

Phase 2 erweitert `locations.ts`, `city-content.ts`, `sitemap.ts`. Alle Phase-1-Files kompatibel mit zukünftigen Erweiterungen (add-only, keine Breaking Changes nötig).

## Geschätzter Aufwand

~4-6 Stunden, 14 Commits. Kann bei Komplikationen (Redesign-Token-Anpassungen, Build-Issues) auf ~8 Stunden wachsen.
