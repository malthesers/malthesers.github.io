/** @type {import('tailwindcss').Config} */

import type { PluginAPI } from 'tailwindcss/types/config'

module.exports = {
  content: ['components/**/*.{vue,js}', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.{js,ts}'],
  theme: {
    fontFamily: {
      display: ['Poppins', 'system-ui', 'sans-serif'],
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
        accent: '#FFD89A',
        highlight: '#9D36FF'
      }
    }
  },
  safelist: ['font-jua', 'font-spectral', 'font-merienda', 'font-sacramento'],
  plugins: [
    ({ addUtilities }: PluginAPI) => {
      addUtilities({
        '.text-outline': {
          color: 'transparent',
          '-webkit-text-stroke-width': '2px',
          '-webkit-text-stroke-color': '#FFEED3'
        },
        '.preserve-3d': {
          'transform-style': 'preserve-3d'
        },
        '.backface-hidden': {
          '-webkit-backface-visibility': 'hidden',
          'backface-visibility': 'hidden'
        },
        '.grid-center': {
          'grid-column-start': '1',
          'grid-column-end': '1',
          'grid-row-start': '1',
          'grid-row-end': '1'
        }
      })
    }
  ]
}
