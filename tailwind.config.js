/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {},
    fontFamily: {
      'outfit' : ['Inter', 'sans-serif']
    },

    colors:{
      'blue-bg': '#d6e2f0',
      'color-card' : '#FFFFFF',
      'text-title' : '#1F3256',
      'subtitle' : '#FBFDFF'
      
    }


  },

  plugins: [],
}

