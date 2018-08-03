<template lang='pug'>
section.hero
    .hero_name
        .hero_text_wrap
            span.hero_text.cyan albasimia
            span.hero_text.magenta albasimia
            span.hero_text(@mouseenter='addHover' @mouseleave='removeHover') albasimia
</template>

<style lang='scss' scopde>
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
        font-size: 8vw;
        font-weight: bold;
    }
    
    .cyan {
        color: rgba(cyan, 0.6);
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
    export default {
        methods: {
            addHover: (event) => {
                const nameDoms = document.querySelectorAll('.hero_text')
                nameDoms[0].classList.add('is-hover')
                nameDoms[1].classList.add('is-hover')
            },
            removeHover: (event) => {
                const nameDoms = document.querySelectorAll('.hero_text')
                nameDoms[0].classList.remove('is-hover')
                nameDoms[1].classList.remove('is-hover')
            }
        }
    }
</script>
