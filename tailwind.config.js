/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        up: ["Updock", 'cursive'],
st:["Satisfy", 'cursive'],
lily:["Lily Script One", 'system-ui']
      }
    },
  },
  plugins: [],
}