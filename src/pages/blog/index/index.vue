<template lang="pug">
section.blog_index
  .card(v-for="value in this.$store.state.articles")
    nuxt-link.card__inner(v-bind:to="'blog/' + value.id") 
      img.img
      p.title {{value.title}}
      p.summary summary summary summary summary summary summary summary summary summary summary summary summary
      p.date {{value.date.slice(0,10)}}
        span.time {{value.time}}
</template>

<script>
export default {
  data() {
    return {
      content: {
        article: null
      }
    };
  },
  computed: {
    reverseArticle() {
      const data = []
      for(let id in this.$store.state.articles) data.push(this.$store.state.articles[id])
      return data.reverse();
    }
  },
  // props:[article],
  methods: {},
  mounted: function() {
  },
  scrollToTop: true
};
</script>

<style lang="scss" scopde>
.blog_index {
  width: 100%;
  height: auto;
  .card {
    position: relative;
    display: block;
    width: 90%;
    margin: 50px auto;

    &__inner {
      color: white;
      text-decoration: none;
      display: block;
      width: 100%;
      &::before {
        position: absolute;
        top: -5px;
        left: -5px;
        content: "";
        height: 110%;
        width: 100%;
        border-width: 1px 1px 1px 1px;
        border-style: solid;
        border-color: #00ffff;
      }
      &::after {
        position: absolute;
        top: 5px;
        left: 5px;
        content: "";
        height: 110%;
        width: 100%;
        border-width: 1px 1px 1px 1px;
        border-style: solid;
        border-color: #ff00ff;
        pointer-events: none;
      }
    }
    .img {
      // width: 100%;
      // height: 160px;
      // background-color: #fff;
    }
    .title {
      padding: 0 0 0 16px;
      font-size: 50px;
    }
    .summary {
      padding-left: 16px;
    }
    .date {
      font-size: 15px;
      padding-left: 16px;
    }
    .time {
      margin-left: 10px;
    }
  }
}
</style>