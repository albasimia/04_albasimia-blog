<template>
  <div id="__nuxt">
    <nuxt-loading ref="loading"></nuxt-loading>
    <component v-if="layout" :is="nuxt.err ? 'nuxt' : layout"></component>
  </div>
</template>

<script>
import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'


let layouts = {

  "_default": () => import('../../src/layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"albasimia's portfolio","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"albasimiaのポートフォリオサイトです。web制作等、承ります。"},{"hid":"iOS_phone_number","name":"format-detection","content":"telephone=no"},{"hid":"og_url","property":"og:url","content":"localhost:3000"},{"hid":"og_image_url","property":"og:image","content":"https://firebasestorage.googleapis.com/v0/b/albasimia-blog.appspot.com/o/flamelink%2Fmedia%2F1533991136236_12th_logo.png?alt=media"},{"property":"og:type","content":"website"},{"hid":"og_title","property":"og:title","content":"albasimia's portfolio"},{"hid":"og_site_name","property":"og:site_name","content":"albasimia's portfolio"},{"hid":"og_description","property":"og:description","content":"albasimiaのポートフォリオサイトです。web制作等、承ります。"},{"property":"og:locale","content":"ja_JP"},{"hid":"twitter_card","property":"twitter:card","content":"summary_large_image"},{"hid":"twitter_title","property":"twitter:title","content":"albasimia's portfolio"},{"hid":"twitter_description","property":"twitter:description","content":"albasimiaのポートフォリオサイトです。web制作等、承ります。"},{"hid":"twitter_image","property":"twitter:image","content":"https://firebasestorage.googleapis.com/v0/b/albasimia-blog.appspot.com/o/flamelink%2Fmedia%2F1533991136236_12th_logo.png?alt=media"},{"property":"twitter:site","content":"@albasimia"},{"property":"twitter:creator","content":"@albasimia"}],"link":[{"rel":"icon","type":"image/x-icon","href":"/favicon.ico"}],"style":[],"script":[]},
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options._nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default'
      let _layout = '_' + layout
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        resolvedLayouts[_layout] = Component
        delete layouts[_layout]
        return resolvedLayouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}
</script>

