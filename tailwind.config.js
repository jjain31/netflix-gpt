/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
        '2xl': '1600px',
        '4xl': '2560px',
      },
    },
  },
  plugins: [],
}