const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navblue: "var(--nav-blue)",
        orange: "var(--goldenrod)",
        primarytp: "var(--primary-tp)", // you had a typo here
        takahe: "var(--takahe)",
        deepbrown: "var(--deep-brown)",

        "zealandia-orange": "#f26422",
        "nav-blue": "#07454B",
      },

      fontFamily: {
        knockout: ["Knockout", ...defaultTheme.fontFamily.sans],
        sans: [
          "Lato",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },

      spacing: {
        128: "32rem",
        144: "36rem",
      },

      borderRadius: {
        "4xl": "2rem",
      },
    },
  },

  variants: {
    extend: {
      borderColor: ["focus-visible"],
      opacity: ["disabled"],
    },
  },
}
