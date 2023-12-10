/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`components/**/*.{vue,js}`, `layouts/**/*.vue`, `pages/**/*.vue`, `plugins/**/*.{js,ts}`],
  theme: {
    fontFamily: {
      display: ["Montserrat", "system-ui", "sans-serif"],
      body: ["Roboto", "system-ui", "sans-serif"],
    },
    colors: {
      base: "#150027",
      dark: "#100019",
      light: "#29003D",
      accent: "#FFEED3",
    },
  },
  plugins: [],
};
