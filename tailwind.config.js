/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        'custom': '350px', // Define a custom minimum width class
      },
      maxWidth: {
        'customOne': '700px',
        'customTwo': '350px'
      }
    },
  },
  plugins: [],
}