/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*"
  ],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit"],
        sans:  ["Outfit", "Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
}
