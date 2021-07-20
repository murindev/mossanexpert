export default {

  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: 5000, // default: 3000
    host: 'localhost' // default: localhost
  },
  ssr : false,
  router: {
    // base:'/#/',
    mode: 'hash',
  },

  head: {
    title: 'mossanexpert.ru',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', type: 'text/css', href: 'http://www.api.mossanexpert.com/assets/style/style_light.css', id:'theme' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [ '~/assets/style/font.css','~/assets/style/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vuebar','~/plugins/carousel.client','~/plugins/htmlTags','~/plugins/checkEmail'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build','@nuxtjs/color-mode'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-user-agent",'@nuxtjs/axios','@nuxtjs/color-mode',],
/*  axios: {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // 'Access-Control-Request-Headers': 'Accept, Content-Type,  Origin',
    }
  },*/
  env: {
    localUrl: process.env.APP_URL || 'http://localhost:3000',
    serverUrl: process.env.SERVER_URL || 'http://www.api.mossanexpert.com',
    storage: process.env.SERVER_URL + '/storage/' || 'http://api.mossanexpert.com/storage/'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
/*    extend(config, { isDev, isClient }) {
      // Web Worker support
      // if (isClient) {
        config.module.rules.push({
          test: /\.(jpg|png|gif|svg|pdf)$/,
          use: [ { loader: 'file-loader', options: { name: '[name].[ext]', outputPath: './assets/img/' } } ],
          exclude: /(node_modules)/
        })
      }*/
    }
  // }
}
