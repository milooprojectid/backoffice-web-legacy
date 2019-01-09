const pkg = require('./package');

module.exports = {
  mode: 'spa',
  head: {
    title: 'Milo Backoffice',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no'
      },
      { hid: 'description', name: 'description', content: 'Milo Backoffice' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/logo.png' }],
    script: [
      {
        src: 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js'
      },
      { src: 'js/font.js' }
    ]
  },

  loading: { color: '#FEAF00' },

  css: [
    '@/assets/vendors/vendors.bundle.css',
    '@/assets/vendors/style.bundle.css'
  ],

  plugins: [
    {
      src: '~/plugins/persisted',
      ssr: false
    },
    {
      src: '~/plugins/vue-notification',
      ssr: false
    },
    {
      src: '~/plugins/sweet-alert',
      ssr: false
    },
    {
      src: '~/plugins/axios',
      ssr: false
    }
  ],

  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv'],

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  build: {
    vendors: [
      '@/assets/vendors/vendors.bundle.js',
      '@/assets/vendors/scripts.bundle.js'
    ],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
