// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@kevinmarrec/nuxt-pwa'],
  googleFonts: {
    display: 'swap',
    families: {
      Roboto: [400, 500],
      Montserrat: [400, 500, 600]
    }
  }
})
