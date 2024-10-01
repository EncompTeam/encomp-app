// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-typed-router',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/fonts',
  ],

  fonts: {
    defaults: {
      weights: [400, 500, 700, 800],
    },
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
  },
})
