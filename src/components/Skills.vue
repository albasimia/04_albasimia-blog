<template lang='pug'>
section.skills
    .skills__inner
        .noCola
            .noCola__title No Cola
            .noCola__inner
                .noCola__bar.noCola__bar-html(v-is-in-view="{callback: function(element) { skillUp(element, 45)}}")
                .noCola__bar.noCola__bar-css(v-is-in-view="{callback: function(element) { skillUp(element, 35)}}")
                .noCola__bar.noCola__bar-js(v-is-in-view="{callback: function(element) { skillUp(element, 60)}}")
                .noCola__bar.noCola__bar-node(v-is-in-view="{callback: function(element) { skillUp(element, 40)}}")
                .noCola__bar.noCola__bar-photoshop(v-is-in-view="{callback: function(element) { skillUp(element, 35)}}")

        .drinkingCola
            .drinkingCola__title Drank Some Cola
            .drinkingCola__inner
                .drinkingCola__bar.drinkingCola__bar-html(v-is-in-view="{callback: function(element) { skillUp(element, 90)}}")
                .drinkingCola__bar.drinkingCola__bar-css(v-is-in-view="{callback: function(element) { skillUp(element, 85)}}")
                .drinkingCola__bar.drinkingCola__bar-js(v-is-in-view="{callback: function(element) { skillUp(element, 90)}}")
                .drinkingCola__bar.drinkingCola__bar-node(v-is-in-view="{callback: function(element) { skillUp(element, 60)}}")
                .drinkingCola__bar.drinkingCola__bar-photoshop(v-is-in-view="{callback: function(element) { skillUp(element, 70)}}")
    .skills__mask
      .wave_wrap
        .wave
        canvas#bg_bubble(width='1280' height='960')
    .skill__name
        .skill__name__wrapper
            .skill__name__inner
                p HTML5
                p CSS3/SASS
                p Javascript
                p node.js
                p Photoshop

</template>

<script>
import Bubble from "~/assets/js/Bubble.js";

let canvas;
const resize = (dom, targetDom) => {
  targetDom.setAttribute("width", dom.clientWidth);
  targetDom.setAttribute("height", dom.clientHeight);
};

export default {
  data() {
    return {};
  },
  methods: {
    skillUp: (e, percent) => {
      e.style.width = percent + "%";
    }
  },
  mounted: async function() {
    canvas = await getElement('#bg_bubble');
    const wave_wrap = await getElement('.wave_wrap')
    resize(wave_wrap, canvas);
    Bubble(window, document, 500, 7);
  }
};

const getElement = (selector) => {
  return new Promise((resolve) => {
    const dom = document.querySelector(selector);
    resolve(dom);
  });
};
</script>

<style lang='scss' scopde>
@import "~/assets/scss/main.scss";
.skills {
  position: relative;
  width: 100%;
  height: 100vh;
}

.skills__inner {
  width: 100%;
  height: 100vh;
  display: flex;
}

.noCola {
  position: relative;
  width: 50%;
  background-color: rgb(59, 120, 235);
}

.drinkingCola {
  position: relative;
  width: 50%;
  background-color: rgb(212, 64, 113);
}

.skill__name {
  position: absolute;
  width: 50%;
  height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.noCola__title,
.drinkingCola__title {
  margin: 30px 0 0 0;
  text-align: center;
  color: white;
  font-size: 8vw;
  font-family: "cocacola";
}

.skill__name__wrapper {
  width: 100%;
  height: 100%;
}

.noCola__inner,
.drinkingCola__inner,
.skill__name__inner {
  position: absolute;
  width: 100%;
  height: 40%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
}

.skill__name__inner {
  p {
    width: 100%;
    height: 30px;
    text-align: center;
    color: white;
    font-size: 5vh;
    font-weight: bold;
    line-height: 20px;
    // -webkit-text-stroke: 1px #000;
  }
}

.noCola__bar,
.drinkingCola__bar {
  width: 0%;
  height: 30px;
  background-color: rgba(69, 218, 131, 0.801);
  border-radius: 10px;
  transition: all 3000ms 0s ease;
}

.noCola__bar {
  margin-left: auto;
}

.drinkingCola__bar {
  margin-right: auto;
}

.skills__mask {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(127, 212, 252, 0.733);
  mask-image: url("/cola.png");
  mask-mode: alpha;
  mask-repeat: no-repeat;
  mask-position: center center;
  overflow: hidden;
  @include pc-layout {
    mask-size: auto 80%;
  }
  @include sp-layout {
    mask-size: auto 50%;
  }
}

.wave_wrap {
  position: relative;
  @include pc-layout {
    margin: 30vh auto 0;
    height: 70vh;
    width: 70vh;
  }
  @include sp-layout {
    margin: 35vh auto 0;
  }
}

.wave {
  // opacity: .8;
  background: #000;
  width: 70vh;
  height: 70vh;
  transform-origin: 50% 48%;
  border-radius: 43%;
  animation: drift 7000ms infinite linear;
  opacity: 0.8;
}

#bg_bubble {
  position: absolute;
  top: 0;
}

@keyframes drift {
  from {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
}
</style>