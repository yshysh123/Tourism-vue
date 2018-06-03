<template>
  <div class="visite-bottom-style">
    <div class="visite-bottom-style-card">
     <div class="icon-21 iconfont iconWidth" :class="isClickrule ? 'blueColor':''" @click="phoneto"></div>
     <div class="icon-T iconfont iconWidth iconWidthft" :class="isClickrulr ? 'blueColor':''" @click="edite"></div>
     <div class="icon-dizhi iconfont iconWidth" :class="isClickruly ? 'blueColor':''" @click="place"></div>
     <div class="icon-chakan iconfont lastIcon " :class="isClickrulo ? 'blueColor':''" @click="lookSee"></div>
     <button open-type="share">分享</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style lang="scss">
  .visite-bottom-style {
    position: fixed;
    z-index: 10000;
    width:100%;
    bottom: 0;
    left: 0px;
    .visite-bottom-style-card {
      background-color: #000;
      color: #fff;
      width: 100%;
      height: 45px;
      line-height: 45px;
      .iconfont{
        line-height: 45px;
        display: block;
        font-size: 20px;
        box-sizing: border-box;
        float:left;
      }
      .iconWidth {
        width: 20%;
        height: 100%;
        text-align: center;
      }
      .iconWidthft {
        font-size: 18px;
      }
      .lastIcon{
        width: 20%;
        height: 100%;
        text-align: center;
      }
      .blueColor {
        color: #0099ff;
      }
      button {
        background-color: #0099ff;
        color: #fff;
        font-size: 14px;
        width: 20%;
        height:45px;
        line-height: 45px;
        display:block;
        float:right;
        border-radius: 0;
      }
    }
  }


</style>
<script>
  export default {
    name: '',
    props: [],
    data() {
      return {
      }
    },
    computed: {
      isClickrule(){
        return this.$store.state.board.isClickrule
      },
      isClickrulr(){
        return this.$store.state.board.isClickrulr
      },
      isClickruly(){
        return this.$store.state.board.isClickruly
      },
      isClickrulo(){
        return this.$store.state.board.isClickrulo
      }
    },
    methods: {
      shareVist(){

      },
      phoneto(){
        this.$store.state.board.isClickrule = true;
        this.$store.state.board.isClickrulr = false;
        this.$store.state.board.isClickruly = false;
        this.$store.state.board.isClickrulo = false;
        const url = '../insfuncction/main'
        wx.redirectTo({ url })
      },
      edite() {
        this.$store.state.board.isClickrulr = true;
        this.$store.state.board.isClickrule = false;
        this.$store.state.board.isClickruly = false;
        this.$store.state.board.isClickrulo = false;
        const url = '../insfuncction/main'
        wx.redirectTo({ url })
      },
      place() {
        this.$store.state.board.isClickrulr = false;
        this.$store.state.board.isClickrule = false;
        this.$store.state.board.isClickruly = true;
        this.$store.state.board.isClickrulo = false;
        const url = '../editWord/main'
        wx.redirectTo({ url })
      },
      lookSee() {
        this.$store.state.board.isClickrulr = false;
        this.$store.state.board.isClickrule = false;
        this.$store.state.board.isClickruly = false;
        this.$store.state.board.isClickrulo = true;
        const url = '../showPages/main'
        wx.redirectTo({ url })
      }
    },
    created() {
    },
    mounted() {
    },
    components: {

    }
  }
</script>
