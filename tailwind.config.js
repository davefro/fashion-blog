/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/**/*.{njk,html}",
    "./content/**/*.{njk,md}",
    "./css/**/*.css",
    "./*.{njk,md,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poetsen: ['"Poetsen One"', 'cursive'],
        poiret: ['"Poiret One"', 'cursive'],
        pompiere: ['"Pompiere"', 'cursive'],
      },
      colors: {
        primary: '#5B7B57',
        secondary: '#6A8E66',
        accent: '#8FAB98',
        light: '#BFD0C1',
        lighter: '#E4E2CF',
        lightest: '#ECEAE4',
      },
    },
  },
  plugins: [],
};
