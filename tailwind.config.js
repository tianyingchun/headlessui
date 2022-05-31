// @ts-check

// const defaultTheme = require('tailwindcss/defaultTheme');

// https://github.com/tailwindlabs/tailwindcss/discussions/1077

const colors = require('tailwindcss/colors');

/** @type import("tailwindcss/tailwind-config").TailwindConfig */
module.exports = {
  // https://tailwindcss.com/docs/dark-mode
  // darkMode: 'media', // or 'media' or 'class'
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    require('tailwindcss-animation-delay'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
  theme: {},
};
