/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    textShadow: {
      'default': '0 2px 0 #000',
      'md': '0 4px 4px #000',
      'h2': '0 0 3px #FF0000, 0 0 5px #0000FF',
      'h1': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
   },
    extend: {},
    colors: {
      'logo-color': '#4272da',
      'primary-color': '#1e293b',
      'primary-white': '#ffffff'
    },
    fontFamily: {
      'logo-font': ['Logo-font'],
      'menu-font': ['Menu-font']
    },
    screens: {
      'sm': {'max': '640px'},
      // => @media (min-width: 640px) { ... }

      'md': {'max': '768px'},
      // => @media (min-width: 768px) { ... }

      'lg': {'max':'992px'},
      // => @media (min-width: 1024px) { ... }

      'xl': {'max':'1280px'},
      // => @media (min-width: 1280px) { ... }

      '2xl': {'max':'1536px'},
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}