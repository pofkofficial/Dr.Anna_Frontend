/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dr-black': '#121212',
        'dr-gold': '#D4AF37',
      },
    },
  },
  plugins: [],
}