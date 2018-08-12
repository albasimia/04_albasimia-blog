<template lang='pug'>
section.contact
  a.twitter.icon(href='https://twitter.com/albasimia' target='_blank')
  a.github.icon(href='https://github.com/albasimia' target="_blank")
  a.gmail.icon(href='mailto:albasimia888+lp@gmail.com')

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
  display: flex;
    flex-wrap: wrap;
  justify-content: space-between;
  @include pc-layout{
  flex-direction: row;
  align-items: center;
  }
  @include sp-layout{
  flex-direction: column;
  }
}
.icon {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.7;
  flex: 1;
  height: 30%;
  margin: 5%;
  transition: all 300ms 0s ease;
}
.twitter {
  background-image: url("https://icongr.am/simple/twitter.svg?color=00FFFF");
  &:hover {
    opacity: 1;
    background-image: url("https://icongr.am/simple/twitter.svg?colored");
  }
}
.github {
  background-image: url("https://icongr.am/simple/github.svg?colored");
  &:hover {
    opacity: 1;
  }
}
.gmail {
  background-image: url("https://icongr.am/simple/gmail.svg?color=FF00FF");
  &:hover {
    background-image: url("https://icongr.am/simple/gmail.svg?colored");
    opacity: 1;
  }
}
</style>