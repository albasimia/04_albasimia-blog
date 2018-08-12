<template lang="pug">
section.blog__article(v-if='this.$store.state.content')
  .blog__article__inner
    p.title {{$store.state.content.title}}
    p.date {{$store.state.content.date.slice(0,10)}}
        span.time {{this.$store.state.content.time}}
    .tag__wrapper
      .tag(v-for='value in $store.state.content.tag')
        nuxt-link(to='/blog') {{value}} 
    vue-markdown.markdown-body(v-if='$store.state.content.content') {{$store.state.content.content}}
  nuxt-link.prev(v-if='this.getPrevIndex' v-bind:to="'/blog/' + this.getPrevIndex")
  nuxt-link.next(v-if='this.getNextIndex' v-bind:to="'/blog/' + this.getNextIndex")
</template>

<script>
export default {
  data() {
    return {
      pageId: null,
      title: null,
      date: null,
      time: null,
      tag: null,
      content: null
    };
  },
  computed: {
    getNextIndex() {
      const keys = this.$store.state.articles.map(value => {
        return value.id;
      });
      const nextId =
        keys[keys.indexOf(this.$store.state.content.pageId - 0) - 1];
      if (nextId != null) return nextId;
      else return null;
    },
    getPrevIndex() {
      const keys = this.$store.state.articles.map(value => {
        return value.id;
      });
      const prevId =
        keys[keys.indexOf(this.$store.state.content.pageId - 0) + 1];
      if (prevId != null) return prevId;
      else return null;
    }
  },
  methods: {},
  async fetch(context) {
    const contentObj = await context.store.state.articles.find(
      content => content.id == context.route.params.id
    );
    const data = {
      pageId: context.route.params.id,
      title: contentObj.title,
      date: contentObj.date,
      time: contentObj.time,
      tag: contentObj.tag,
      content: contentObj.content
    };
    context.store.commit("setContent", data);
  },
  mounted() {
    // console.log(this.$store.state.article)
  },
  scrollToTop: true
};
</script>

<style lang="scss" scopde>
@import "~/assets/scss/main.scss";
.markdown-body {
  @import "github-markdown-css/github-markdown.css";
  width: 90%;
  margin: 0 auto;
  color: #fff;
  ul {
    list-style: disc;
    & ul {
      list-style: circle;
    }
  }
}
.blog__article {
  position: relative;
  height: auto;
  margin-bottom: 50px;
  .prev,
  .next {
    position: fixed;
    top: 50vh;
    transform: translateY(-50%);
    width: 44px;
    height: 100px;
    // background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .prev {
    left: 0;
    background-image: url("https://icongr.am/entypo/chevron-thin-left.svg?color=e7dd81");
  }
  .next {
    right: 0;
    background-image: url("https://icongr.am/entypo/chevron-thin-right.svg?color=e7dd81");
  }
}
.blog__article__inner {
  position: relative;
  margin: 100px auto 0px;
  padding: 30px 0 50px;
  // transform: translateX(-1%);
  @include pc-layout {
    max-width: 800px;
    width: 80%;
  }
  @include sp-layout {
    width: 90%;
  }
  &::before {
    position: absolute;
    top: -5px;
    left: -5px;
    content: "";
    height: 100%;
    width: 100%;
    border-width: 1px 1px 1px 1px;
    border-style: solid;
    border-color: #00ffff;
    pointer-events: none;
  }
  &::after {
    position: absolute;
    top: 5px;
    left: 5px;
    content: "";
    height: 100%;
    width: 100%;
    border-width: 1px 1px 1px 1px;
    border-style: solid;
    border-color: #ff00ff;
    pointer-events: none;
  }

  .title,
  .date,
  .time,
  .tag__wrapper {
    width: 90%;
    margin: 0 auto 5px;
  }
  .title {
    font-size: 30px;
  }
  .time {
    margin-left: 10px;
  }
  .tag {
    display: inline-block;
    margin-right: 10px;
  }
}
</style>