import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#14110f',
          elevated: '#1c1915',
          subtle: '#221e19',
          surface: '#2a2620',
        },
        fg: {
          DEFAULT: '#f8f3ec',
          muted: '#bdb6ab',
          subtle: '#837d73',
        },
        accent: {
          DEFAULT: '#d4b37a',
          soft: '#9a7f50',
        },
        border: {
          DEFAULT: '#342f29',
          soft: '#24201b',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Fraunces', 'Cormorant Garamond', 'serif'],
        body: ['var(--font-body)', 'DM Sans', 'Inter', 'system-ui', 'sans-serif'],
        script: ['var(--font-script)', '"Playfair Display"', 'serif'],
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
        glow: '0 0 40px rgba(212, 179, 122, 0.18)',
        editorial: '0 24px 60px rgba(0, 0, 0, 0.55)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
    },
  },
  plugins: [],
}

export default config
