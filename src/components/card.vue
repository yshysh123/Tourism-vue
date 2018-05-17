<template>
  <div class="visite-bottom-style">
    <div class="visite-bottom-style-card">
     <i class="icon-21 iconfont iconWidth" :class="isClickrule ? 'blueColor':''" @click="phoneto"></i>
     <i class="icon-T iconfont iconWidth" :class="isClickrulr ? 'blueColor':''" @click="edite"></i>
     <i class="icon-dingwei iconfont iconWidth" :class="isClickruly ? 'blueColor':''" @click="place"></i>
     <i class="icon-chakan iconfont lastIcon " :class="isClickrulo ? 'blueColor':''" @click="lookSee"></i>
     <button @click="shareVist" open-type="share">分享</button>
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
    position : relative;
    width:100%;
    .visite-bottom-style-card {
      /*position : absolute;*/
      position: fixed;
      /*bottom : -250px;*/
      bottom: 0;
      left: 0px;
      background-color: #000;
      color: #fff;
      width: 100%;
      height: 50px;
      line-height: 50px;
      i{
        display: inline-block;
        font-size: 20px;
        box-sizing: border-box;
        float:left;
      }
      .iconWidth {
        width: 20%;
        text-align: center;
        border-right:1px solid #ccc;
      }
      .lastIcon{
        width: 20%;
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
        height:50px;
        line-height: 50px;
        display:inline-block;
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
      onShareAppMessage(res){
        if (res.from === 'button') {
          // 来自页面内转发按钮
          console.log(res.target)
        }
      },
      phoneto(){
        this.$store.state.board.isClickrule = true;
        this.$store.state.board.isClickrulr = false;
        this.$store.state.board.isClickruly = false;
        this.$store.state.board.isClickrulo = false;

      },
      edite() {
        this.$store.state.board.isClickrulr = true;
        this.$store.state.board.isClickrule = false;
        this.$store.state.board.isClickruly = false;
        this.$store.state.board.isClickrulo = false;
      },
      place() {
        this.$store.state.board.isClickruly = true;
        this.$store.state.board.isClickrulr = false;
        this.$store.state.board.isClickrule = false;
        this.$store.state.board.isClickrulo = false;
      },
      lookSee() {
        this.$store.state.board.isClickrulo = true;
        this.$store.state.board.isClickrulr = false;
        this.$store.state.board.isClickruly = false;
        this.$store.state.board.isClickrule = false;
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
