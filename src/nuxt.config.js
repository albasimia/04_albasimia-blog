const title = "albasimia's portfolio"
const description = "albasimiaのポートフォリオサイトです。web制作等、承ります。"
const url = "localhost:3000"
const og_image_url = "https://firebasestorage.googleapis.com/v0/b/albasimia-blog.appspot.com/o/flamelink%2Fmedia%2F1533991136236_12th_logo.png?alt=media"
const twitter = "@albasimia"
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
    title: title,
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
        content: description
      },
      {
        hid: 'iOS_phone_number',
        name: "format-detection",
        content: "telephone=no"
      },
      // ogp
      {
        hid:"og_url",
        property: "og:url",
        content: url
      },
      {
        hid:"og_image_url",
        property: "og:image",
        content: og_image_url
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        hid:"og_title",
        property: "og:title",
        content: title
      },
      {
        hid:"og_site_name",
        property: "og:site_name",
        content: title
      },
      {
        hid: "og_description",
        property: "og:description",
        content: description
      },
      {
        property: "og:locale",
        content: "ja_JP"
      },
      // twitter card
      {
        hid: "twitter_card",
        property: "twitter:card",
        content: 'summary_large_image'
      },
      {
        hid: "twitter_title",
        property: "twitter:title",
        content: title
      },
      {
        hid: "twitter_description",
        property: "twitter:description",
        content: description
      },
      {
        hid: "twitter_image",
        property: "twitter:image",
        content: og_image_url
      },
      {
        property: "twitter:site",
        content: twitter
      },
      {
        property: "twitter:creator",
        content: twitter
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  modules: [{
    src: 'nuxt-firebase',
    options: {
      apiKey: "AIzaSyAFcYcevIvsPEiUHxo34kCoWRCySbswsd4",
      authDomain: "albasimia-blog.firebaseapp.com",
      databaseURL: "https://albasimia-blog.firebaseio.com",
      projectId: "albasimia-blog",
      storageBucket: "albasimia-blog.appspot.com",
      messagingSenderId: "692821435666"
    }
  }],
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
    ssr: true,
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
