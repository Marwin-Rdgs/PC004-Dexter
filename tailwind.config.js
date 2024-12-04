/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    colors: {
    'primary-color' : '#0d0d0d',
    'secondary-color' : '#7a7a7a',
    'grey-color' : '#cccccc',
    'white-color' : "#FAFAFA",
    'alert-color' : '#ddff00',
    },
    fontFamily: {
      Primary: ['Inter', 'sans-serif'],
      Secondary: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};