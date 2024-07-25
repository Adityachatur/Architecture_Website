/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: '#CFFF00',
        background: '#F2F2F2',
        customgreen: "#BCFF00",
      },
    },
  },
  plugins: [],
}

