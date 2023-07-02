/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      primary: ["sans-serif"],
      secondary: ["serif"],
    },
    colors: {
      heroblack: "#202020ab",
      stoneprimary: "#1F2937",
      stonesecondary: "#44403c",
    },
  },
  plugins: [require("flowbite/plugin")],
};
