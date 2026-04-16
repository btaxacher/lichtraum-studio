# Phase 3 Plan — Polish, Schema, Performance

**Spec:** `docs/superpowers/specs/2026-04-16-seo-rescue-design.md`
**Phase:** 3 of 3
**Goal:** Fertigstellung: Schema-Validation, OG-Bild-Placeholder, Photographer-Schema, Performance-Check, Final-Audit, HANDOFF.

## Scope

Autonom machbar:
- Photographer-Schema additiv auf Homepage (REQ 33)
- OG-Image-Placeholder (statisches SVG/PNG mit Brand-Typografie)
- Schema-Validation via Rich-Results-Parsing (Playwright auslesen, JSON.parse-Check)
- Final Route-Audit über alle 27 Routen
- Final Word-Count Overview (8 Tier-1 + 13 City)
- SEO_AUDIT_V2.md — finales Report-Dokument
- HANDOFF.md Update

Nicht autonom (als Blocker dokumentieren):
- Nano-Banana-Run (60-90 Min, Chrome-Session nötig)
- Echter Lighthouse-Score (erfordert deployed site oder lokale Lighthouse-CLI installation)
- Nach-Deploy auf Vercel
- Google Rich Results Test (Live-URL nötig)

## Arbeitseinheiten

### Step 3.1 — Photographer-Schema auf Homepage
Erweitere Root-JSON-LD in `layout.tsx` um `Photograph`-Type. (Technisch schon in Phase 1 Step 1.2 mit `@type: ['LocalBusiness', 'ProfessionalService', 'Photograph']` erfüllt.)
**Verify:** Grep JSON-LD, `Photograph` type present.

### Step 3.2 — OG-Image Generator
Statisches SVG-Placeholder-OG als `/public/og.jpg`. Bis Nano Banana läuft.
**Commit:** `feat(og): static OG placeholder image`

### Step 3.3 — Schema-Validation Script
Ausgabe aller JSON-LD-Blocks pro Route, JSON.parse, Typ-Check (LocalBusiness, Service, FAQPage, BreadcrumbList, BlogPosting).
**Commit:** `test(seo): schema validation script`

### Step 3.4 — Final 37-Requirement Audit
Prüfe jede REQ gegen real state.
**Output:** `SEO_AUDIT_V2.md` im Projekt-Root.

### Step 3.5 — HANDOFF-Update
Aktualisieren mit Phase-1/2/3 Ergebnissen + Blockers.

## Exit-Kriterien
- [ ] All 27 routes clean (route-audit)
- [ ] Schema-validation: alle JSON-LDs parsebar
- [ ] SEO_AUDIT_V2.md geschrieben (37 Requirements, pro-requirement Status)
- [ ] HANDOFF.md aktualisiert
- [ ] Nano-Banana + Lighthouse als Blocker dokumentiert, nicht als Fails

## Geschätzter Aufwand
1-2 Stunden autonome Arbeit.
