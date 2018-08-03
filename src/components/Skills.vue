<template lang='pug'>
section.skills
    .skills_inner
        .noCola
            .noCola_title No Cola
            .noCola_inner
                .noCola_bar.noCola_bar-html
                .noCola_bar.noCola_bar-css
                .noCola_bar.noCola_bar-js
                .noCola_bar.noCola_bar-node
                .noCola_bar.noCola_bar-photoshop

        .drankCola
            .drankCola_title Drinking Cola
            .drankCola_inner
                .drankCola_bar.drankCola_bar-html
                .drankCola_bar.drankCola_bar-css
                .drankCola_bar.drankCola_bar-js
                .drankCola_bar.drankCola_bar-node
                .drankCola_bar.drankCola_bar-photoshop
    .skills_mask
        .wave_wrap
            .wave
    .skill_name
        p HTML5
        p CSS3/SASS
        p Javascript
        p node.js
        p Photoshop

</template>

<script>
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
    .skills {
        position: relative;
    }
    
    .skills_inner {
        width: 100%;
        height: 100vh;
        display: flex;
    }
    
    .noCola {
        width: 50%;
        background-color: cornflowerblue;
    }
    
    .drankCola {
        width: 50%;
        background-color: palevioletred;
    }
    
    .skill_name {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        p {
            text-align: center;
            color: white;
            font-size: 5vh;
            font-weight: bold;
            line-height: 8vh;
        }
    }
    
    .noCola_title,
    .drankCola_title {
        margin: 30px 0 0 0;
        text-align: center;
        color: white;
        font-size: 3vw;
        font-weight: bold;
    }
    
    .noCola_inner {
        margin: 50% 20% 0 0;
        transform: translate(0%, -50%);
    }
    
    .noCola_bar {
        width: 80%;
        height: 30px;
        margin-top: 10px;
        margin-left: auto;
        background-color: yellow;
        border-radius: 10px;
    }
    
    .skills_mask {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(127, 212, 252, 0.733);
        mask-image: url("/cola.png");
        mask-mode: alpha;
        mask-repeat: no-repeat;
        mask-size: auto 80%;
        mask-position: center center;
        overflow: hidden;
    }
    
    .wave_wrap {
        position: relative;
        margin: 30vh auto 0;
        height: 600px;
        width: 600px;
    }
    
    .wave {
        // opacity: .8;
        background: #000;
        width: 600px;
        height: 600px;
        transform-origin: 50% 48%;
        border-radius: 43%;
        animation: drift 7000ms infinite linear;
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