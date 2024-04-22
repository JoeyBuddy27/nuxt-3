// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    componentIslands: {
      selectiveClient: true,
    }
  },
  // useHead() is more reactive
  // app: {
  //   head: {
  //     title: 'Nuxt 3 Site',
  //     meta: [
  //       {
  //         charset: 'utf-8',
  //       },
  //       {
  //         name: 'viewport',
  //         content: 'width=device-width, initial-scale=1',
  //       },
  //     ],
  //   },
  // },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
],
})
