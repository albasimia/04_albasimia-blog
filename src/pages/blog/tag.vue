<template lang="pug">
section.blog
  nuxt-child(:key="$route.params.tag")
  Header
</template>

<script>
import Header from "~/components/blog/Header";
export default {
  components: {
    Header
  },
  fetch({ params, redirect }) {
    if (Object.keys(params).length == 0) redirect(301, "/blog");
  },
  methods: {},
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