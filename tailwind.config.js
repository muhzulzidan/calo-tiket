/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        background: "#1F2937",
        primary: "#FB923C",
        secondary: "#44403c",
        white: "#F9FAFB",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
