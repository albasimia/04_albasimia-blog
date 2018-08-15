<template lang="pug">
section.blog_index
  .card(v-for="value in this.$store.state.articles")
    nuxt-link.card__inner(v-bind:to="'blog/' + value.id") 
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
  scrollToTop: true
};
</script>

<style lang="scss" scopde>
@import "~/assets/scss/blog/index.scss";
</style>