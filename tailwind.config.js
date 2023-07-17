/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'legalnavverydarkpurple': '#273469',
      'legalnavdarkpurple': '#4f5790',
      'legalnavpurple': '#777dba',
      'legalnavlightpurple': '#a0a5e5',
      'legalnavverylightpurple': '#cbceff',
      current: 'currentColor',
    },

    fontFamily: {
      'akkurat': ['Akkurat Pro', 'Helvetica']
  },
    extend: {
  plugins: [],
},
}
}
