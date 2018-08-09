<template lang='pug'>
section.contact
  .twitter.icon
  .gmail.icon
  .github.icon

</template>

<script>
// import "p3x-stackicons";
export default {
  data() {
    return {};
  },
  methods: {
    mounted: () => {}
  }
};
</script>

<style lang='scss' scopde>
@import "~/assets/scss/main.scss";
.contact {
  position: relative;
  width: 100%;
  height: 100vh;
}
.icon {
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  top: 50%;
  opacity: 0.7;
  @include pc-layout {
    width: 40vw;
    height: 50vh;
  }
  @include sp-layout {
    width: 35vw;
    height: 35vw;
  }
}
.twitter {
  left: 5%;
  transform: translateY(-90%);
  background-image: url("https://icongr.am/simple/twitter.svg?color=00FFFF");
  &:hover {
    opacity: 1;
    background-image: url("https://icongr.am/simple/twitter.svg?colored");
  }
}
.github {
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url("https://icongr.am/simple/github.svg?colored");
  &:hover {
    // background-image: url("https://icongr.am/simple/github.svg?colored");
    opacity: 1;
  }
}
.gmail {
  right: 5%;
  transform: translateY(-10%);
  background-image: url("https://icongr.am/simple/gmail.svg?color=FF00FF");
  &:hover {
    background-image: url("https://icongr.am/simple/gmail.svg?colored");
    opacity: 1;
  }
}
</style>