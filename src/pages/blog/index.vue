<template lang="pug">
section.blog
  nuxt-child(:key="$route.params.id")
  Header
</template>

<script>
import Header from "~/components/blog/Header";
const title = "albasimia's blog";
const description = "albasimiaのブログです。";
const url = "localhost:3000/blog";
const og_image_url = "localhost:3000/blog.png";
export default {
  head() {
    return {
      title: title,
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
          hid: "og_url",
          property: "og:url",
          content: url
        },
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
  components: {
    Header
  },
  fetch({ params, redirect }) {
    if (Object.keys(params).length == 0) redirect(301, "/blog");
  },
  methods: {
    getFlamelinkData() {
      flamelinkApp.content
        .get("article")
        .then(products => this.$set(this.content, "article", products))
        .catch(error => console.log(error));
    }
  },
  fetch(context) {},
  mounted() {}
};
</script>

<style lang="scss" scopde>
html,
body {
  width: 100%;
  // height: 100%;
}
body {
  background-color: #000;
  color: #fff;
  a {
    text-decoration: none;
  }
  a:link,
  a:visited {
    color: rgb(231, 221, 129);
  }
}
.blog {
  width: 100%;
  // height: 100%;
}
</style>