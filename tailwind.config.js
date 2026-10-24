/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070C18',
          900: '#0B1329',
          850: '#0F1A36',
          800: '#142247',
          700: '#1D3060',
          600: '#2A4384',
        },
        royal: {
          900: '#172554',
          800: '#1E40AF',
          700: '#1D4ED8',
          600: '#2563EB',
          500: '#3B82F6',
          400: '#60A5FA',
          100: '#DBEAFE',
          50: '#EFF6FF',
        },
        gold: {
          600: '#B45309',
          500: '#D97706',
          400: '#F59E0B',
          300: '#FBBF24',
          200: '#FDE68A',
          100: '#FEF3C7',
          50: '#FFFBEB',
        },
        emerald: {
          500: '#10B981',
          600: '#059669',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(37, 99, 235, 0.3)',
        'glow-gold': '0 0 25px -5px rgba(245, 158, 11, 0.35)',
        'premium': '0 20px 40px -15px rgba(11, 19, 41, 0.08), 0 0 0 1px rgba(11, 19, 41, 0.04)',
        'card': '0 10px 30px -10px rgba(2, 6, 23, 0.08)',
        'card-hover': '0 20px 40px -15px rgba(37, 99, 235, 0.15)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.03)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
