/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0A0E13',
          900: '#0D1218',
          800: '#121822',
          700: '#19212D',
          600: '#232C3A',
          500: '#3A4556',
          400: '#5C6B80',
          300: '#8A96A6',
          200: '#B8C1CC',
          100: '#E8ECF1',
          50: '#F6F8FA',
        },
        teal: {
          DEFAULT: '#14D6B4',
          400: '#3EE6C6',
          500: '#14D6B4',
          600: '#0EB39A',
          700: '#0A8F7D',
        },
        indigo: {
          DEFAULT: '#6E7BFF',
          400: '#8B96FF',
          500: '#6E7BFF',
          600: '#5560E0',
        },
        amber: {
          DEFAULT: '#F0B355',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-dark':
          'linear-gradient(rgba(232,236,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(232,236,241,0.05) 1px, transparent 1px)',
        'grid-light':
          'linear-gradient(rgba(10,14,19,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(10,14,19,0.05) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(20,214,180,0.15), 0 8px 30px -10px rgba(20,214,180,0.25)',
        card: '0 4px 24px -8px rgba(0,0,0,0.35)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(12px,-14px)' },
        },
        dash: {
          to: { strokeDashoffset: '0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        drift: 'drift 8s ease-in-out infinite',
        dash: 'dash 3s linear forwards',
        pulseSoft: 'pulseSoft 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
