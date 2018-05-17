<template>
    <div class="instructor-toueist">
      <div class="instructor-text-pic" v-for="(item,index) in intrctList" :key="item">
        <img :src="item.imgUrl">
        <p class="intrstor-text">{{item.text}}</p>
      </div>
      <button @click="touristLink">到此一游</button>
    </div>
</template>

<style lang="scss">
  .instructor-toueist {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 50px;
    font-size: 14px;
    .instructor-text-pic {
    /*padding:10px 20px;*/
    img {
      margin: 0 auto;
      vertical-align: middle;
      padding: 5px 10px;
     /*width: 99%;*/
    }
      .intrstor-text {
        font-size: 14px;
        padding: 10px 20px;
      }
    }
  button {
    background-color: #0099ff;
    color: #fff;
    font-size: 14px;
    margin-top:5px;
  }
  }
</style>

<script>
    export default {
        name: '',
        props: [],
        data() {
            return {
              intrctList:[
                {text:'佛香阁是北京市颐和园的主体建筑，建筑在万寿山前山高20米的方形台基上，面对昆明湖，' +
                '背靠智慧海，以它为中心的各建筑群严整而对称地向两翼展开，形成重心捧月之势，气派相当宏伟。佛香阁高41米，' +
                '8面3层4重瞻，阁内有8根巨大铁梨木擎天柱，结构相当复杂，为古典建筑精品。',
                id:'1',
                imgUrl:'http://img20.360buyimg.com/uba/jfs/t21673/78/80890633/138676/e58378d8/5afa7eb0N8d471370.png'},
                {
                text:'在清朝乾隆时期（1736-1795）在此建九层延寿塔，至第八层“奉旨停修”，改建佛香阁。1860年（咸丰十年）毁于' +
                '英法联军，光绪时（1875-1908）在原址依样重建，供奉佛像。1860年(咸丰十年)毁于八国联军，光绪时（1870-1908）在原址' +
                '依样重建，供奉佛像。',
                id:'2',
                imgUrl:'http://img30.360buyimg.com/uba/jfs/t21736/89/85457602/113428/3a5fa97e/5afa7eb0N716ebd59.png'
                }
              ]
            }
        },
        computed: {},
        methods: {
          touristLink(){
            const url = '../insfuncction/main'
            wx.navigateTo({ url })
          }
        },
        created() {
        },
        mounted() {
        },
        components: {}
    }
</script>
