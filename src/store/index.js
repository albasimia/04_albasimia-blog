import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {},
  mutations: {
    setSearch(state, value) {
      state.search = value
    },
    setContent(state, value) {
      state.content = value
    },
    getArticle(state, article) {
      state.articles = article
    }
  },
  actions: {
    async asyncArticle(ctx) {
      const article = await this.$flamelink.content
        .getByField('article', 'status', 'published')
        .then(products => {
          return products
        })
        .catch(error => console.log(error));
      const data = []
      for (let id in article) data.push(article[id])
      await ctx.commit('getArticle', data.reverse())
    },
    async nuxtServerInit({
      dispatch
    }) {
      await dispatch('asyncArticle')
    }
  }
})

export default store
