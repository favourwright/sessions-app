const plugin = require('tailwindcss/plugin')
module.exports = {
  mode:'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'success':'#65FDBD',
        'error':'#EC635C',
        'red-1':'#EC2417',
        'stone':'#C0BB98',
        'yellow':'#FDD365',
        'orange':'#FF8944',
        'brown':'#97694D',
        'brown-2':'#885F45',
        'pink':'#FFB9B9',
        'moss-green':'#60705F',
        'light-blue':'#AEAFFF',
        'gray-50-1':'#ECECEC',
        'gray-50-2':'#737373',
        'dark-gray':'#424F55',
        'dark-gray-2':'#3A474C',
        'dark-gray-3':'#546166',
        'gray': {
          20:'#333333',
          30:'#4D4D4D',
          40:'#666666',
          50:'#808080',
          70:'#B3B3B3',
          80:'#CCCCCC',
          90:'#E6E6E6',
        },
        'gold':'#FFBD80',
        'purple':'#B573EE',
        'brands':{
          'meet':'#00AC47',
          'zoom':'#2D8CFF',
          'skype':'#00aff0',
        }
      },
      screens: {
        'mobile': {'max': '767px'},
        'mobile-lg': {'min': '475px', 'max': '767px'},
        'desktop-md': {'min': '768px', 'max': '1280px'},
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
