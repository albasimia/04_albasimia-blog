<template lang="pug">
section.blog__article(v-if='this.$store.state.content')
  .blog__article__inner
    p.title {{$store.state.content.title}}
    p.date {{$store.state.content.date.slice(0,10)}}
        span.time {{this.$store.state.content.time}}
    .tag__wrapper
      .tag(v-for='value in $store.state.content.tag')
        nuxt-link(:to="'/blog/tag/' + value") {{value}}
    vue-markdown.markdown-body(v-if='$store.state.content.content') {{$store.state.content.content}}
  nuxt-link.prev(v-if='this.getPrevIndex' v-bind:to="'/blog/' + this.getPrevIndex")
  nuxt-link.next(v-if='this.getNextIndex' v-bind:to="'/blog/' + this.getNextIndex")
</template>

<script>
import Prism from "~/assets/js/prism.js";
export default {
  head() {
    const title = this.$store.state.content.title
    const description = this.$store.state.content.description? this.$store.state.content.description : this.$store.state.content.content.slice(0, 200)
    const og_image_url = "localhost:3000/blog.png"
    return {
      meta: [
        {
          hid: "description",
          name: "description",
          content: description
        },
        {
          hid: "description",
          name: "description",
          content: description
        },
        {
          hid: "description",
          name: "description",
          content: description
        },
        // ogp
        {
          hid: "og_image_url",
          property: "og:image",
          content: og_image_url
        },
        {
          hid: "og_title",
          property: "og:title",
          content: title
        },
        {
          hid: "og_site_name",
          property: "og:site_name",
          content: title
        },
        {
          hid: "og_description",
          property: "og:description",
          content: description
        },
        // twitter card
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
        }
      ]
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
      description: contentObj.description,
      date: contentObj.date,
      time: contentObj.time,
      tag: contentObj.tag,
      content: contentObj.content
    };
    context.store.commit("setContent", data);
  },
  mounted() {
    Prism.highlightAll();
  },
  scrollToTop: true
};
</script>

<style lang="scss" scopde>
@import "~/assets/scss/main.scss";
.markdown-body {
  @import "github-markdown-css/github-markdown.css";
  @import "prismjs/themes/prism.css";
  width: 90%;
  margin: 0 auto;
  color: #fff;
  ul {
    list-style: disc;
    & ul {
      list-style: circle;
    }
  }
  pre {
    color: black;
  }
}

.blog__article {
  position: relative;
  height: auto;
  margin-bottom: 48px;
  .prev,
  .next {
    position: fixed;
    top: 50vh;
    transform: translateY(-50%);
    width: 44px;
    height: 96px;
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
  margin: 80px auto 0px;
  padding: 32px 0 48px;
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
    top: -4px;
    left: -4px;
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
    top: 4px;
    left: 4px;
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
    margin: 0 auto 4px;
  }
  .title {
    font-size: 32px;
    overflow-wrap: break-word;
    font-weight: bold;
  }
  .time {
    margin-left: 10px;
  }
  .tag {
    display: inline-block;
    margin: 0 8px 8px 0;
    background-color: rgb(231, 221, 129);
    border-radius: 2px;
    padding: 0 4px;
    a,
    a:visited {
      color: black;
    }
  }
}
</style>