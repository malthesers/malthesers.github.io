// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/',
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  nitro: {
    preset: 'github-pages'
  },
  devtools: { enabled: true },
  modules: [
    '@kevinmarrec/nuxt-pwa',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  googleFonts: {
    display: 'swap',
    families: {
      Roboto: [400, 500],
      Montserrat: [400, 500, 600],
      Jua: [400],
      Spectral: [500, 600],
      Merienda: [500],
      Sacramento: [400]
    }
  }
})
