/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line prettier/prettier
const colors = require('tailwindcss/colors')


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: '#2772F0',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
