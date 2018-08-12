<template lang="pug">
section.blog
  nuxt-child(:key="$route.params.id")
</template>

<script>
export default {
  // data() {
  // },
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
  }
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