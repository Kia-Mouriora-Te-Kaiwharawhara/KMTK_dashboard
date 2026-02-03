const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      navblue: 'var(--nav-blue)',
      orange: 'var(--goldenrod)',
      primarytp: 'var(--primarytp)',
    },
    extend: {
      fontFamily: {
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
        serif: ["Knockout", "serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
          "zealandia-orange": "#f26422",
          "nav-blue": "#07454B",
      }
    }
  },
  variants: {
    extend: {
      borderColor: ["focus-visible"],
      opacity: ["disabled"],
    },
  },
}
