/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Gotham', 'helvetica', 'arial', 'sans-serif'] 
      },
      colors: {
        pebble: {
          DEFAULT: '#F2F0EB'
        }
      }
    },
  },
  plugins: [],
}
