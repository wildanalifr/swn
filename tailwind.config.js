const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./views/**/*.html", "./public/js/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
