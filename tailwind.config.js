module.exports = {

  mode: 'jit',

  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  theme: {

    extend: {},

  },

  variants: {},

  plugins: [],

}
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    flowbite.content(),
  ],
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};