// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // app: {
  //   head: {
  //     script: [
  //       {
  //         src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/242637/AsciiEffect.js',
  //       }
  //     ]
  //   }
  // },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-typed-router'],
  build: {
    transpile: ['three']
  }
})
