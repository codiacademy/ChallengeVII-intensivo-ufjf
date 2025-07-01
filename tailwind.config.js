// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",      // cobre os arquivos em app/
    "./components/**/*.{js,ts,jsx,tsx}" // se você tiver componentes fora da pasta app
  ],
  theme: {
    extend: {
      colors: {
        background: '#e7dbee', // cor de fundo personalizada
        primary: '#4d4d4d', // cor primária personalizada
        secondary: '#a3b1c6', // cor secundária personalizada
      }
    }
  },
  plugins: [],
}