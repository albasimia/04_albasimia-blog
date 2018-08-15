<template lang='pug'>
header.header
    .header__inner
        // .button menu
        .logo
            nuxt-link(to='/blog') albasimia's blog
            .path(v-if='$route.params.tag') tag {{$route.params.tag}}
            .path(v-if='$route.path == "/blog"') home
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    mounted: () => {}
  },
  mounted() {}
};
</script>

<style lang='scss' scopde>
@import "~/assets/scss/main.scss";
.header {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: rgba(black, 0.8);
  border-bottom: 1px solid cyan;
  box-shadow: 0 2px 0 0 black, 0 3px 0 0 magenta;
  height: 55px;
  &__inner {
    position: relative;
    width: 90%;
    height: 100%;
    margin: 0 auto;
  }
  .logo {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    text-align: center;
    @include pc-layout {
      font-size: 35px;
    }
    @include sp-layout {
      font-size: 30px;
    }
    a,
    a:visited {
      color: white;
    }
  }
  .path {
    font-size: 15px;
  }
}
</style>