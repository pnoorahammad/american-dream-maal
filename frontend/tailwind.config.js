/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0A0E1A',
        gold: '#C9A84C',
        luxury: '#1A1208',
        luxuryAccent: '#D4AF6A',
        blueAccent: '#0066FF',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        stat: ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

