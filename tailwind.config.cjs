/** @type {import('tailwindcss').Config} */
const daisyUI = require('daisyui');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyUI]
}
