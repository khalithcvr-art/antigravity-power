/** @type {import('tailwindcss').Config} */

// Every colour below points at a CSS variable in src/styles/tokens.css, so the
// palette has one source of truth and Tailwind opacity modifiers keep working.
const c = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;
const scale = (family, shades) =>
  Object.fromEntries(shades.map((shade) => [shade, c(`${family}-${shade}`)]));

const GOLD = { DEFAULT: c('gold-400'), ...scale('gold', [100, 200, 300, 400, 500, 600, 700, 800, 900]) };
const EMERALD = { DEFAULT: c('emerald-500'), ...scale('emerald', [200, 300, 400, 500, 600, 700, 800, 900, 950]) };
const CYAN = { DEFAULT: c('cyan-500'), ...scale('cyan', [200, 300, 400, 500, 600, 700, 800, 900, 950]) };

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary text colour. `text-white` and `bg-white/5` follow the token.
        white: c('text'),
        obsidian: scale('obsidian', [950, 900, 850, 800, 700, 600]),
        slate: scale('slate', [100, 200, 300, 400, 500, 600]),
        gold: GOLD,
        goldMuted: { DEFAULT: c('gold-400'), light: c('gold-200'), dark: c('gold-600') },
        emerald: EMERALD,
        cyan: CYAN,
        // The brand has three accent hues: gold (authority), emerald (corporate
        // action) and cyan (digital studio). Stray hue families collapse into them
        // so one-off colours cannot creep back in.
        indigo: CYAN,
        purple: CYAN,
        sky: CYAN,
        blue: CYAN,
        teal: EMERALD,
        amber: GOLD,
        paper: { DEFAULT: c('paper'), 2: c('paper-2'), line: c('paper-line'), field: c('paper-field') },
        ink: { DEFAULT: c('ink'), 2: c('ink-2'), 3: c('ink-3') },
        danger: { 300: c('danger-300'), 700: c('danger-700') },
        // Follows data-mode on the app root: emerald in corporate, cyan in digital.
        accent: { DEFAULT: c('accent'), soft: c('accent-soft') },
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        display: 'var(--font-display)',
        arabic: 'var(--font-arabic)',
        mono: 'var(--font-mono)',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        lift: 'var(--shadow-lift)',
        pop: 'var(--shadow-pop)',
      },
      borderColor: {
        DEFAULT: 'var(--border)',
        soft: 'var(--border-soft)',
        strong: 'var(--border-strong)',
        control: 'var(--border-control)',
      },
      transitionTimingFunction: {
        out: 'var(--ease-out)',
      },
      animation: {
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'radar-ping': 'radarPing 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        radarPing: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
        shimmer: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
