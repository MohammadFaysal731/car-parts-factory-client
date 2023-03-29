/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        light: {
          primary: "#1e40af",

          secondary: "#F000B8",

          accent: "#37CDBE",

          neutral: "#3D4451",

          "base-100": "#ffffff",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
        //  dark: {
        //     primary: "#db2777",

        //     secondary: "#F000B8",

        //     accent: "#37CDBE",

        //     neutral: "#3D4451",

        //     "base-100": "#ffffff",

        //     info: "#3ABFF8",

        //     success: "#36D399",

        //     warning: "#FBBD23",

        //     error: "#F87272",
        //   },
      },
    ],
  },
  plugins: [require("daisyui")],
};
