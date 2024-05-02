// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/',
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  nitro: {
    preset: 'github-pages'
  },
  devtools: { enabled: false },
  modules: ['@vite-pwa/nuxt', '@nuxtjs/google-fonts', '@nuxtjs/tailwindcss', 'nuxt-icon', '@hypernym/nuxt-gsap'],
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
      scrollTo: true
    }
  },
  googleFonts: {
    display: 'swap',
    families: {
      Roboto: [400, 500],
      Poppins: [600, 700, 800],
      Montserrat: [400, 500, 600],
      Jua: [400],
      Spectral: [500, 600],
      Merienda: [500],
      Sacramento: [400]
    }
  }
})