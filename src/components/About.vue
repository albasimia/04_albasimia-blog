<template lang='pug'>
section.about
    .about_bg
        .dummy DUMMY TEXT
    .about_inner
        .profile
            p.profile__text プロフィール的なことaaaaaaaあああ
                br
                |aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        .concept 
            p.concept__text コンセプト的なこと
                |aaaaaaaaaaaaa
                |aaaaaaaaaaaaa
                |aaaaaaaaaaaaa
                |aaaaaaaaaaaaa
                |aaaaaaaaaaaaa
                |aaaaaaaaaaaaa
                |aaaaaaaaaaaaa
                |aaaaaaaaaaaaa
                |aaaaaaaaaaaaa
                |aaaaaaaaaaaaa
                |aaaaaaaaaaaaa

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
@import "~/assets/scss/main.scss";
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

.dummy {
  position: absolute;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10vw;
  color: white;
  text-align: center;
}

.about_inner {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: -100vh;
}

.profile {
  position: relative;
  background-color: rgba(purple, 0.5);
  flex: 1 1 40%;
  @include pc-layout {
    margin: 100px 5% 0 5%;
    width: 40%;
    // height: 1000px;
  }
  @include sp-layout {
    margin-top: 100px;
    // width: 40%;
    // height: 1000px;
  }
}

.concept {
  position: relative;
  background-color: rgba(purple, 0.5);
  flex: 1 1 40%;
  @include pc-layout {
    width: 40%;
    // height: 1000px;
    margin: 900px 5% 100px 0;
  }
  @include sp-layout {
    // width: 40%;
    // height: 1000px;
    margin: 900px 0 100px 0;
  }
}
.profile__text,
.concept__text {
  font-size: 50px;
  color: white;
  word-break: break-all;
  @include sp-layout{
      font-size: 20px;
  }
}
</style>