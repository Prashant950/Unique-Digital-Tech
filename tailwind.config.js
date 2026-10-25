/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      colors: {
        ink: { 950: '#030818', 900: '#060d22', 800: '#0a1430', 700: '#101c40' },
        brand: { 300: '#7dd3fc', 400: '#38bdf8', 500: '#0ea5e9', 600: '#0284c7', blue: '#2563eb' },
      },
      boxShadow: { glow: '0 0 30px rgba(14,165,233,.35)' },
    },
  },
  plugins: [],
};
