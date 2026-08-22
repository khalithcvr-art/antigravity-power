/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#070A0F',
          900: '#0B0F17',
          850: '#0F1420',
          800: '#141B2D',
          700: '#1E293B',
          600: '#334155',
        },
        emeraldGlow: {
          DEFAULT: '#10B981',
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          glow: 'rgba(16, 185, 129, 0.35)',
        },
        cyanGlow: {
          DEFAULT: '#06B6D4',
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
          glow: 'rgba(6, 182, 212, 0.35)',
        },
        indigoGlow: {
          DEFAULT: '#6366F1',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          glow: 'rgba(99, 102, 241, 0.35)',
        },
        goldMuted: {
          DEFAULT: '#D4AF37',
          light: '#EEDC82',
          dark: '#AA820A',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Syne', 'sans-serif'],
        arabic: ['IBM Plex Sans Arabic', 'Tajawal', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
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
