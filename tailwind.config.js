/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        '0': '0',
        '1250': '1250px',
        '1600': '1600px',
        '2000': '2000px',
        '830' : '830px',

      },

      spacing:{
        '2200' : '2200px',
        '2400' : '2400px',
        '2700' : '2700px',


      },

    },
  },
  plugins: [],
}

