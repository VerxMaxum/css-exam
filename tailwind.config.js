/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#287FEB',
        purplecss: '#6973DB',
        orangecss: '#D25E00',
        lgraycss: '#E8EBED',
        graycss: '#72787F',
        base: '#1B1D1F'
      }
    },
  },
  plugins: [],
}

