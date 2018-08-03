<template lang='pug'>
section.about
    .about_bg
        .dumy DUMY TEXT
    .about_inner
        .profile
        .concept

</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            mounted: () => {}
        }
    }
</script>

<style lang='scss' scopde>
    .about {
        position: relative;
        height: auto;
    }
    
    .about_bg {
        width: 100%;
        height: 100vh;
        background-color: gray;
        position: sticky;
        top: 0;
    }
    
    .dumy {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 10vw;
        color: white;
    }
    
    .about_inner {
        display: flex;
        justify-content: space-around;
        margin-top: -100vh;
    }
    
    .profile {
        position: relative;
        width: 600px;
        height: 1000px;
        opacity: .5;
        background-color: rgba(purple, 1);
        margin-top: 100px;
    }
    
    .concept {
        position: relative;
        width: 600px;
        height: 1000px;
        opacity: .5;
        background-color: rgba(purple, 1);
        margin: 900px 0 100px 0;
    }
</style>