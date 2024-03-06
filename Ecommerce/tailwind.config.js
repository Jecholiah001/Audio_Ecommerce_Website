/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: [ 'responsive', 'hover', 'focus', 'active'],

      textColor: [ 'responsive', 'hover', 'focus', 'active'],

      fontFamily:{
        custom:['Manrope, sans-serif']
      },

      colors:{
        lightOrange:'#FBAF85',
        deepOrange:'#D87D4A',
        lightGrey:'#FAFAFA',
        deepGrey:'#F1F1F1',
        deeperGrey:'#4C4C4C',
        lightBlack:'#101010',
        lighterBlack:'#191919',
      },
    },
  },
  plugins: [
    
  ],
}

