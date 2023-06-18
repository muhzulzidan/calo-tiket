/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{html,js}", 
  "./node_modules/flowbite/**/*.js",
],
  theme: {
    fontFamily: {
      primary: ['sans-serif'],
      secondary: ['serif'],
    },
  },
  plugins: [require('flowbite/plugin')],
}