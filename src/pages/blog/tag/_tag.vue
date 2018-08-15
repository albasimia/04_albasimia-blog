<template lang="pug">
section.blog_index
  .card(v-for="value in $store.state.search")
    nuxt-link.card__inner(v-bind:to="'/blog/' + value.id")
      img.img
      p.title {{value.title}}
      p.date {{value.date.slice(0,10)}}
        span.time {{value.time}}
    .tag__wrapper
      .tag(v-for='tag in value.tag')
        nuxt-link(:to="'/blog/tag/' + tag") {{tag}}
</template>

<script>
export default {
  async fetch({ store, params, app }) {
    const search = await app.$flamelink.content
      .getByField("article", "status", "published")
      .then(products => {
        return products;
      })
      .catch(error => console.log(error));
    const data = [];
    for (let id in search) data.push(search[id]);
    const searchedData = data.filter(article => {
      return article.tag.indexOf(params.tag) >= 0;
    });
    await store.commit("setSearch", searchedData.reverse());
  },
  scrollToTop: true
};
</script>

<style lang="scss" scopde>
@import "~/assets/scss/blog/index.scss";
</style>