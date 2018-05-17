<template>
  <div class="visite-bottom-style">
    <div class="visite-bottom-style-card">
     <i class="icon-21 iconfont iconWidth" :class="isClickrule ? 'blueColor':''" @click="phoneto"></i>
     <i class="icon-T iconfont" :class="isClickrulr ? 'blueColor':''" @click="edite"></i>
     <i class="icon-dingwei iconfont" :class="isClickruly ? 'blueColor':''" @click="place"></i>
     <i class="icon-chakan iconfont lastIcon " :class="isClickrulo ? 'blueColor':''" @click="lookSee"></i>
     <button @click="shareVist">分享</button>
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
    padding: 0 10px;
  i{
    display: inline-block;
    width: 15%;
    font-size: 20px;
  }
  .lastIcon {
    margin-left:15px;
  }
  .iconWidth {
    width: 20%;
    margin-left: 18px;
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
    margin-right:10px;

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
        isClickrule: false,
        isClickrulr:false,
        isClickruly:false,
        isClickrulo:false
      }
    },
    computed: {},
    methods: {
      shareVist(){

      },
      phoneto(){
        this.isClickrule = !this.isClickrule;
      },
      edite() {
        this.isClickrulr = !this.isClickrulr;
      },
      place() {
        this.isClickruly = !this.isClickruly;
      },
      lookSee() {
        this.isClickrulo = !this.isClickrulo;
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
