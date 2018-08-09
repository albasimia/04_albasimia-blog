module.exports = {
  // css: [
  //     '@/assets/scss/main.scss',
  // ],
  plugins: [{ src: '~/plugins/vue-in-view', ssr: false }],
  /*
   ** Headers of the page
   */
  head: {
    title: 'albasimia-blog',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'blog'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  // modules: [
  //   ['nuxt-sass-resources-loader', [
  //     '@/assets/scss/main.scss'
  //   ]],
  // ],
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  buildDir: '../functions/nuxt',
  build: {
    publicPath: '/assets/',
    extractCSS: true,
    babel: {
      presets: [
        'env',
        'stage-0'
      ],
      plugins: [
        ['transform-runtime', {
          polyfill: true,
          regenerator: true
        }],
      ],
    },
    modules: [
    ['nuxt-sass-resources-loader', [
      '@/assets/sass/foundation/variable.scss',
      '@/assets/sass/foundation/mixin.scss',
    ]],
  ],
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
