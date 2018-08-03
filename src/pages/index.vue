<template lang="pug">
section
    hero
    about
    Skills
</template>

<script>
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'
import Skills from '~/components/Skills.vue'

export default {
  components: {
    Hero,
    About,
    Skills
  }
}
</script>

<style lang="scss" scopde>
@import "~reset-css";
html,body{
  width: 100%;
  // overflow: hidden;
}
</style>