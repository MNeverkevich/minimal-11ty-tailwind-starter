module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    "./.eleventy.js",
    "./src/_includes/**/*.njk",
    "./src/pages/**/*.njk",
    "./src/index.njk",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Montserrat"', 'sans-serif']
    }
  },
  variants: {},
  plugins: [],
}
