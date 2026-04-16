import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm Editorial Light — Haupt-Hintergründe
        bg: {
          DEFAULT: '#F8F3EC',       // warmes Creme, Primary-Hintergrund
          secondary: '#EFE6D8',     // Sand, für Sections im Wechsel
          charcoal: '#2D2A26',      // tiefes Charcoal, nur für Akzent-Sections
          card: '#F5EBD8',          // Testimonial-/Paper-Cards
          surface: '#FFFFFF',       // Weiß für Journal-Cards
          // Legacy-Aliase (für archivierte Seiten während Migration)
          elevated: '#F5EBD8',
          subtle: '#EFE6D8',
        },
        // Warme Text-Farben (NICHT #000)
        fg: {
          DEFAULT: '#1F1C17',       // warmer Schwarzton
          muted: '#6B5F4E',         // warmer Grau-Braun
          subtle: '#8B7F6E',        // hellerer Muted
          invert: '#F8F3EC',        // Text auf charcoal-Sections
        },
        // Akzent-Farben
        accent: {
          DEFAULT: '#C5A572',       // weiches Gold
          gold: '#C5A572',          // Alias für Klarheit
          terra: '#B87C5F',         // Terracotta für Hover/Highlights
          soft: '#D4BB8E',          // helleres Gold
        },
        // Sand-Rahmen
        border: {
          DEFAULT: '#E3D8C4',       // Sand-Rahmen
          soft: '#EFE6D8',          // Subtiler Border
        },
      },
      fontFamily: {
        display: ['var(--font-display)', '"Cormorant Garamond"', 'Cormorant', 'serif'],
        body: ['var(--font-body)', 'Inter', 'system-ui', 'sans-serif'],
        script: ['var(--font-script)', 'Parisienne', '"Dancing Script"', 'cursive'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.625rem' }],
        lg: ['1.25rem', { lineHeight: '1.75rem' }],
        xl: ['1.625rem', { lineHeight: '2.125rem' }],
        '2xl': ['2.25rem', { lineHeight: '2.75rem' }],
        '3xl': ['3rem', { lineHeight: '3.5rem' }],
        '4xl': ['4rem', { lineHeight: '4.5rem' }],
        '5xl': ['5.5rem', { lineHeight: '6rem' }],
        '6xl': ['7.5rem', { lineHeight: '8rem' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
        normal: '0',
        wide: '0.05em',
        wider: '0.12em',
        widest: '0.2em',
      },
      boxShadow: {
        glow: '0 0 32px rgba(197, 165, 114, 0.22)',
        editorial: '0 30px 60px rgba(31, 28, 23, 0.08)',
        card: '0 16px 40px rgba(31, 28, 23, 0.06)',
        'card-hover': '0 24px 50px rgba(31, 28, 23, 0.12)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        marquee: 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee 45s linear infinite reverse',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
      },
    },
  },
  plugins: [],
}

export default config
