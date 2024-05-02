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
  pwa: {
    manifest: {
      name: "Malthe Kusk's Portfolio",
      short_name: 'Malthe Kusk',
      description: 'Portfolio of Malthesers (Malthe Kusk Lauritsen)',
      theme_color: '#100019',
      background_color: '#100019',
      icons: [
        {
          src: 'maskable-icon-x48.png',
          sizes: '48x48',
          type: 'image/png'
        },
        {
          src: 'maskable-icon-x96.png',
          sizes: '96x96',
          type: 'image/png'
        },
        {
          src: 'maskable-icon-x128.png',
          sizes: '128x128',
          type: 'image/png'
        },
        {
          src: 'maskable-icon-x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'maskable-icon-x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    }
  },
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
