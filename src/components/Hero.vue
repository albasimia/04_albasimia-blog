<template lang='pug'>
section.hero
    .hero_name
        .hero_text_wrap
            span.hero_text.magenta albasimia
            span.hero_text.base(@mouseenter='addHover' @mouseleave='removeHover') albasimia
            span.hero_text.cyan albasimia
</template>

<style lang='scss' scopde>
@import "~/assets/scss/main.scss";
.hero {
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url("/ana_bg.jpg");
  background-size: cover;
  background-position: center;
  .hero_name {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .hero_text_wrap {
    position: relative;
  }

  .hero_text {
    position: absolute;
    font-weight: bold;
    color: rgba(black, 0.4);
    transform: translate(-14%, -50%);
    @include pc-layout {
      font-size: 8vw;
    }
    @include sp-layout {
      font-size: 15vw;
    }
  }
  .base {
    // -webkit-text-stroke: 2px black;
  }
  .cyan {
    color: rgba(0, 175, 185, 0.6);
    transform: translate(-13%,-50%);
    transition: all 300ms 0s ease;
    pointer-events: none;
  }
  .magenta {
    color: rgba(255, 0, 5, 0.6);
    transform: translate(-18%,-50%);
    transition: all 300ms 0s ease;
    pointer-events: none;
  }
  .is-hover {
    transform: translate(-50%, -50%);
  }
}
</style>

<script>
let nameDoms;
export default {
  methods: {
    addHover: event => {
      nameDoms[0].classList.add("is-hover");
      nameDoms[1].classList.add("is-hover");
    },
    removeHover: event => {
      nameDoms[0].classList.remove("is-hover");
      nameDoms[1].classList.remove("is-hover");
    }
  },
  mounted: () => {
    nameDoms = document.querySelectorAll(".hero_text");
  }
};
</script>
