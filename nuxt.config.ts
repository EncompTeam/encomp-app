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
    '@nuxtjs/seo',
  ],

  tailwindcss: {
    exposeConfig: true,
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      titleTemplate: '',
    },
  },

  fonts: {
    defaults: {
      weights: [400, 500, 700, 800],
    },
    assets: {
      prefix: '/public/_fonts/',
    },
  },
  ogImage: {
    fonts: [
      {
        name: 'Chillax',
        weight: 500,
        path: '/fonts/WZY5PMNTII6NKOB2TTIAX7QVAWMSY2DQ-pyl6MWuNMf.ttf',
      },
      {
        name: 'Satoshi',
        weight: 400,
        path: '/fonts/KFIAZD4RUMEZIYV6FQ3T3GP5PDBDB6JY-7iCxS4avLs.ttf',
      },
      {
        name: 'Satoshi',
        weight: 500,
        path: '/fonts/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP-hLQRzv849O.ttf',
      },
    ],
  },
  site: {
    url: process.env.SITE_URL,
    name: 'Encontro Norte Capixaba de Computação (ENCOMP)',
    description: 'O Encontro Norte Capixaba de Computação ou ENCOMP é um evento de tecnologia realizado por alunos de Ciência e Engenharia da Computação da UFES - Campus São Mateus.',
    defaultLocale: 'pt-BR',
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
