# Luna Ferris — Premium Photography Landing Page

Hochwertige Dark-Moody Landing Page für eine/n Hochzeits- und Portraitfotograf:in. Next.js 15 (App Router) + Tailwind CSS + Framer Motion + Lenis Smooth Scroll.

---

## Setup

```bash
cd main-landing-page
npm install
npm run dev
```

Öffne `http://localhost:3000`.

> **Hinweis**: Die Seite funktioniert sofort nach `npm install` — sie nutzt Unsplash-Placeholder-Bilder (siehe [`src/lib/content.ts`](./src/lib/content.ts)). Für produktionsreife, KI-generierte Bilder im eigenen Look siehe **Bildgenerierung** unten.

## Struktur

```
main-landing-page/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Fonts, Lenis, Metadata
│   │   ├── page.tsx            # Sektion-Komposition
│   │   └── globals.css         # Design Tokens + Component CSS (Slideshow)
│   ├── components/
│   │   ├── hooks/use-mouse-vector.ts
│   │   ├── providers/lenis-provider.tsx
│   │   ├── sections/           # 13 Sektionen + Nav + Footer
│   │   └── ui/                 # 7 portierte 21st.dev Komponenten
│   └── lib/
│       ├── content.ts          # Copy & Image-Quellen (zentral)
│       └── utils.ts            # cn()
├── scripts/
│   ├── generate-images.ts      # Batch Image Generator (Nanobanana)
│   └── nanobanana/             # Chrome CDP Pipeline
├── public/images/              # Generierte Bilder (leer bis Generator lief)
├── tailwind.config.ts          # Design System (Farben, Fonts, Spacing)
└── next.config.mjs             # Image Domains, Performance
```

## Design System

Das Design-System ist dunkel & editorial, inspiriert von der Figma-Referenz `PHOTOGRAPHY (Community)`. Alle Tokens sind dokumentiert in [`../figma-reference/DESIGN-TOKENS.md`](../figma-reference/DESIGN-TOKENS.md) und in `tailwind.config.ts` / `src/app/globals.css` umgesetzt.

- **Farben**: Near-Black (#0a0908), warmes Ivory (#f5f1ea), Gold-Akzent (#c9a96e)
- **Fonts**: Cormorant Garamond (Display/Serif), Inter (Body), Playfair Display Italic (Script)
- **Motion**: Easing `cubic-bezier(0.22, 1, 0.36, 1)`, Lenis Smooth Scroll
- **Mode**: Dark Moody (beachtet `prefers-reduced-motion`)

## Integrierte 21st.dev Komponenten

Alle 7 Komponenten aus dem `/prompts` Ordner sind portiert, TypeScript-klar, an das Design System angepasst und harmonisch in Sektionen eingebettet:

| # | Komponente | Datei | Sektion auf der Page |
|---|-----------|-------|---------------------|
| 1 | **Slideshow** | `ui/slideshow.tsx` | Hero (Slideshow.txt) |
| 2 | **ZoomParallax** | `ui/zoom-parallax.tsx` | Portfolio Scroll-Sektion (Zoomparalax.txt) |
| 3 | **InteractiveSelector** | `ui/interactive-selector.tsx` | Services-Auswahl (Interactive_selector.txt) |
| 4 | **ShuffleGrid** | `ui/shuffle-grid.tsx` | Gallery-Shuffle (image_shuffle_grid.txt) |
| 5 | **MasonryGrid + EditorialCard** | `ui/masonry-grid.tsx` | Editorial Masonry (Image_test_grid.txt) |
| 6 | **ImageTrail** | `ui/image-trail.tsx` | Behind-the-Scenes (image_trail.txt) |
| 7 | **TestimonialsMarquee** | `ui/testimonials-marquee.tsx` | Clients-Say (testimonials.txt) |

Custom-Lückenschluss: `Section` + `EditorialHeading` + `Eyebrow` + `MoonDivider` sorgen für harmonischen Rhythmus zwischen den Komponenten — kein Baukasten-Feeling.

## Sektionen (Reihenfolge)

1. **Hero** — Vollbild-Slideshow mit 5 Cinematic Shots
2. **Manifest (About)** — Editorial Typo, Signature-Claim
3. **Portfolio Parallax** — Scroll-getriebener Zoom
4. **Moon Divider** — SVG-Animation (wie in Figma-Referenz)
5. **Services** — InteractiveSelector mit 5 Angeboten
6. **Gallery Shuffle** — Auto-shufflendes 4×4 Grid
7. **Editorial Masonry** — Referenz-Karten mit Testimonials
8. **Behind-the-Scenes** — ImageTrail (Mauseffekt) + „MOMENTE" Headline
9. **Clients Say** — Groß-Testimonial + Marquee
10. **Instagram** — Script-Heading + 2×4 Grid
11. **CTA** — Mailto-Anfrage + Kontaktdaten
12. **Footer** — Minimal, warm

## Bildgenerierung (Nanobanana — strict)

Alle Bilder werden via **Gemini Web UI** + **Playwright** erzeugt (wie im Depotfokus-Projekt).

### Voraussetzungen

1. Chrome unter `C:\Program Files\Google\Chrome\Application\chrome.exe`
2. Profil-Verzeichnis `C:/Users/basti/.nanobanana-profile` mit aktivem Login bei `gemini.google.com`
3. **Alle Chrome-Fenster müssen vor dem Run geschlossen sein**

### Erster Run (Login)

```bash
# Chrome einmal manuell mit Profil öffnen und bei Gemini einloggen:
"C:\Program Files\Google\Chrome\Application\chrome.exe" --user-data-dir="C:/Users/basti/.nanobanana-profile"
# Zu gemini.google.com navigieren → einloggen → Chrome schließen
```

### Batch-Generierung

```bash
npm run generate-images
```

Generiert alle ~50 Bilder (Hero 5, Services 5, Gallery 7, Masonry 8, Shuffle 16, Trail 6, Avatars 8, Testimonial 1). Dauer: ~60-90 Minuten.

Nach Abschluss in `src/lib/content.ts`:
```ts
const USE_LOCAL = true  // statt false
```

Prompts liegen zentral in [`scripts/nanobanana/prompts.ts`](./scripts/nanobanana/prompts.ts).

## Performance

- **Lazy Loading**: Heavy Components (`ZoomParallax`, `ImageTrail`) via `next/dynamic`, SSR off
- **Image Optimization**: `next/image` wo möglich, AVIF/WebP automatisch, Remote-Patterns whitelisted
- **Smooth Scroll**: Lenis mit `prefers-reduced-motion` Respekt
- **Font Loading**: `next/font` (self-hosted Google Fonts, `swap`)
- **Tailwind**: JIT + `optimizePackageImports` für `framer-motion`, `lucide-react`

## Accessibility

- Keyboard Navigation in Services-Selector
- ARIA-Labels auf Nav-Buttons, Slideshow-Controls
- `prefers-reduced-motion` deaktiviert Lenis + kurze Transitions
- Kontrast-AA auf allen Text-Paarungen geprüft

## Nächste Schritte

- [ ] `npm run generate-images` ausführen (Chrome-Profil muss eingeloggt sein)
- [ ] `USE_LOCAL = true` in `content.ts` setzen
- [ ] Finales UX-Audit mit `/ux-heuristics` Skill
- [ ] Lighthouse CI einrichten
- [ ] Impressum + Datenschutz befüllen

## Lizenz & Quellen

- 21st.dev Komponenten-Templates: aus `/prompts` Ordner (User-Lizenz)
- Figma-Referenz: PHOTOGRAPHY (Community)
- Unsplash-Placeholder-Bilder: Unsplash License (frei kommerziell)
