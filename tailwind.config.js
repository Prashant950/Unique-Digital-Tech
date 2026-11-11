/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      colors: {
        ink: { 950: '#030818', 900: '#060d22', 850: '#081028', 800: '#0a1430', 700: '#101c40' },
        brand: { 300: '#7dd3fc', 400: '#38bdf8', 500: '#0ea5e9', 600: '#0284c7', blue: '#2563eb' },
      },
      boxShadow: {
        glow: '0 0 30px rgba(14,165,233,.35)',
        'glow-lg': '0 0 50px rgba(14,165,233,.5)',
        'glow-cyan': '0 0 30px rgba(56,189,248,.4)',
        'glow-blue': '0 0 30px rgba(37,99,235,.4)',
      },
      animation: {
        'pulse-slow': 'pulseSlow 6s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
        'float-delayed': 'float 5s 2.5s ease-in-out infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { opacity: '0.25', transform: 'scale(1)' },
          '50%': { opacity: '0.45', transform: 'scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
    },
  },
  plugins: [],
};
