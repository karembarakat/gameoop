/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.{html,js}",
    './index.html',],
  theme: {
    extend: {},
  },
  plugins: [],
}

//! npx tailwindcss -i ./assets/css/main.css -o ./assets/css/style.css --watch
