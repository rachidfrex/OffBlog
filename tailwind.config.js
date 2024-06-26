/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        BeVietnam: ["Be Vietnam", "sans-serif"],
      },
      backgroundImage: {
        'bgsearch': "url('/src/assets/images/bg-search.png')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}