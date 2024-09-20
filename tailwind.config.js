/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff4c30",
        secondary: "#161616",
        background: "#fdfefe"
      },
      fontFamily: {
        merriweather: '"Merriweather", serif',
        nunito: '"Nunito Sans", sans-serif',
      },

    },
  },
  plugins: [],
}
