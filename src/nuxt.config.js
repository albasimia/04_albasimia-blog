module.exports = {
  // css: [
  //     '@/assets/scss/main.scss',
  // ],
  plugins: [{
      src: '~/plugins/vue-in-view',
      ssr: false
    },
    {
      src: '~/plugins/flamelink',
      ssr: true
    },
    {
      src: '~/plugins/vue-markdown',
      ssr: true
    }
  ],
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
  modules: [
    {
      src: 'nuxt-firebase',
      options: {
        apiKey: "AIzaSyAFcYcevIvsPEiUHxo34kCoWRCySbswsd4",
        authDomain: "albasimia-blog.firebaseapp.com",
        databaseURL: "https://albasimia-blog.firebaseio.com",
        projectId: "albasimia-blog",
        storageBucket: "albasimia-blog.appspot.com",
        messagingSenderId: "692821435666"
      }
    }
  ],
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
    vendor: ['flamelink'],
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
