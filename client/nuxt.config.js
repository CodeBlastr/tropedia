export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tropedia',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://strapi.nuxtjs.org/setup
    '@nuxtjs/strapi',
    // https://www.npmjs.com/package/@nuxtjs/markdownit
    '@nuxtjs/markdownit',
    // https://strapi.nuxtjs.org/proxy
    '@nuxtjs/proxy'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // https://strapi.nuxtjs.org/proxy
  // Used for development only
  proxy: {
    '/api': {
      target: 'http://strapi:1337',
      pathRewrite: {
        '^/api': '/'
      }
    }
  },

  // Strapi options
  strapi: {
    entities: ['pages'],
    url: '/api'   // TO DO: Enable production env variable
                  // https://strapi.nuxtjs.org/proxy
  },

  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    // use: [
    //  'markdown-it-div',
    //  'markdown-it-attrs'
    // ]
  }
}
