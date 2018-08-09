<template lang='pug'>
section.hero
    .hero_name
        .hero_text_wrap
            span.hero_text.cyan albasimia
            span.hero_text.magenta albasimia
            span.hero_text(@mouseenter='addHover' @mouseleave='removeHover') albasimia
</template>

<style lang='scss' scopde>
@import "~/assets/scss/main.scss";
.hero {
  width: 100%;
  height: 100vh;
  position: relative;
}

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
  transform: translate(-50%, -50%);
  font-weight: bold;
  @include pc-layout {
    font-size: 8vw;
  }
  @include sp-layout {
    font-size: 15vw;
  }
}

.cyan {
  color: rgba(cyan,0.6);
  transform: translate(-55%, -50%);
  transition: all 300ms 0s ease;
  pointer-events: none;
}

.magenta {
  color: rgba(magenta, 0.6);
  transform: translate(-45%, -50%);
  transition: all 300ms 0s ease;
  pointer-events: none;
}

.is-hover {
  transform: translate(-50%, -50%);
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
