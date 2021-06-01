import serveStatic from 'serve-static'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'testnuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: process.env.BASE_URL || 'http://localhost:3000'
      },{
        hid: 'og:description',
        property: 'og:description',
        content: "basic description"
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@node_modules/normalize.scss/normalize.scss',
    '~/assets/scss/common.scss',
  ],

  styleResources: {
    scss: './assets/scss/*.scss'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/etc",
    { src: '~/plugins/clientEtc.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/device',
    '@nuxtjs/router',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // analyze: true,

    splitChunks: {
      layouts: true
    },
    //[contenthash:7]
    filenames: {
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[name].[ext]',
    },
    
    extend (config, { isClient }) {
      if (isClient) {
        config.devtool = 'source-map'
      }
    }
  },

  serverMiddleware: [
    {
      path: '/api', handler: "~/api/index.js"
    },
    { path: "/server-middleware", handler: "~/server-middleware/rest.js" },
  ]
}
