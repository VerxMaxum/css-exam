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
      },
      fontFamily: {
        nunito: [
          'Nunito', 'sans-serif'
        ]
      },
      fontSize: {
        p80: '80px',
        p66: '66px',
        p22: '22px',
        p52: '52px',
        p26: '26px',
        p18: '18px'
      },
      borderRadius: {
        p10: '10px',
        p20: '20px'
      },
      height: {
        p120: '120px'
      },
      backgroundImage: {
        banner: "url('./images/logo.png')"
      },
      backgroundSize: {
        bannerrepeat: "auto 120px"
      },
      gridTemplateColumns: {
        track: 'repeat(auto-fill, minmax(372px, 1fr))',
        subject: 'repeat(auto-fill, minmax(413px, 1fr))'
      }
    },
  },
  plugins: [],
}

