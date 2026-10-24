/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep institutional navy drawn from the Siyaram logo (#013167)
        navy: {
          50: '#EEF4FC',
          100: '#DCE8F8',
          200: '#BAD2F2',
          300: '#8FB4E8',
          400: '#5E90DA',
          500: '#306CC4',
          600: '#1554A8',
          700: '#0C4188',
          800: '#013167',
          850: '#052455',
          900: '#041737',
          950: '#020D20',
        },
        // Heritage gold drawn from the Siyaram logo (#D4A21F)
        gold: {
          50: '#FBF4DE',
          100: '#F7E7BD',
          200: '#EFD48A',
          300: '#E3B84D',
          400: '#D4A21F',
          500: '#C6901C',
          600: '#A87B12',
          700: '#8A650D',
        },
        cream: {
          50: '#FCFAF4',
          100: '#F6F2E9',
          200: '#EDE5D3',
          300: '#DFD3B8',
        },
        ink: {
          DEFAULT: '#0A1730',
          soft: '#33415C',
          muted: '#68758D',
        },
        emerald: {
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.22em',
      },
      boxShadow: {
        'gold-glow': '0 18px 50px -18px rgba(212, 162, 31, 0.5)',
        'gold-soft': '0 10px 30px -12px rgba(212, 162, 31, 0.35)',
        'lift': '0 30px 60px -30px rgba(2, 13, 32, 0.55)',
        'lift-light': '0 30px 60px -35px rgba(10, 23, 48, 0.35)',
        'inset-hair': 'inset 0 1px 0 0 rgba(255,255,255,0.06)',
        'sheet': '0 -18px 50px -45px rgba(16, 29, 54, 0.35), 0 30px 70px -60px rgba(16, 29, 54, 0.25)',
        'soft': '0 14px 40px -28px rgba(16, 29, 54, 0.16)',
      },
      animation: {
        'marquee': 'marquee 42s linear infinite',
        'marquee-slow': 'marquee 70s linear infinite',
        'marquee-reverse': 'marqueeReverse 60s linear infinite',
        'float': 'float 7s ease-in-out infinite',
        'float-slow': 'float 11s ease-in-out infinite',
        'spin-slow': 'spin 26s linear infinite',
        'pulse-soft': 'pulseSoft 3.2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
}
