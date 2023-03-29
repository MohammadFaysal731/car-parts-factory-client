/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      primary: "#312e81",
      secondary: "#f9a8d4",
      accent: "#334155",
      white: "#ffffff",
    },
  },
  plugins: [require("daisyui")],
};

