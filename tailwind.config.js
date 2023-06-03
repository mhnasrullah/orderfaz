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
    colors : {
      black : '#000000',
      gray : '#C8C8C8',
      purple : "#8362F2",
      white : "#ffffff",
      'egg-green' : "#8DD4CC"
    },
    extend: {},
  },
  plugins: [],
}

