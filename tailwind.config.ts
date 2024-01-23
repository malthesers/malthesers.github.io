/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['components/**/*.{vue,js}', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.{js,ts}'],
  theme: {
    fontFamily: {
      display: ['Montserrat', 'system-ui', 'sans-serif'],
      body: ['Roboto', 'system-ui', 'sans-serif'],
      jua: ['Jua', 'system-ui', 'sans-serif'],
      spectral: ['Spectral', 'system-ui', 'serif'],
      merienda: ['Merienda', 'system-ui', 'serif'],
      sacramento: ['Sacramento', 'system-ui', 'serif']
    },
    extend: {
      colors: {
        land: '#1C0028',
        base: '#150027',
        dark: '#100019',
        light: '#29003D',
        accent: '#FFEED3'
      }
    }
  },
  safelist: ['font-jua', 'font-spectral', 'font-merienda', 'font-sacramento'],
  plugins: []
}
