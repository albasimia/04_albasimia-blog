<template lang="pug">
main
    hero
    about
    Skills
    Contact
</template>

<script>
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'
import Skills from '~/components/Skills.vue'
import Contact from '~/components/Contact.vue'

export default {
  components: {
    Hero,
    About,
    Skills,
    Contact
  }
}
</script>

<style lang="scss" scopde>
html,body{
  width: 100%;
}
</style>