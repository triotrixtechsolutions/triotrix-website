/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      'xs': '360px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl':'1280px'
},

    extend: {
      colors:{
        'clrbg':'#f0f1f2',
        'purple':'#86608E',
        'hvr-purple' : '#57375D',
        'purp':'#461959',
        'pastel':'#b4d9ef',
      
      },

      //  #8d818c 
      height:{
        'lgcover':'650px',
        'smcover':'500px',
      }
    },
  },
  plugins: [],
}

