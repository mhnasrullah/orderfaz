/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily : {
      'sf-pro' : ['sf-pro','sans-serif']
    },
    colors : {
      black : '#000000',
      gray : '#C8C8C8'
    },
    extend: {},
  },
  plugins: [],
}

