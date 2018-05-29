<template>
    <div class="savepage-visit">
        <p class="save-top">分享成功</p>
        <p class="save-visit-resalve">根据您游览的景区景点，为您准备了周边优惠，关注公众号并绑定信息后即可领取</p>
      <ul class="clearfix" v-for="(item,index) in quanList" :key="index">
        <li >
        </li>
        <p>{{item.quanFont}}</p>
      </ul>
      <button @click="getQuan" >我要领取</button>
    </div>
</template>

<style lang="scss">
  .savepage-visit {
    padding: 20px 10px;

    .save-top {
      margin-top:50px;
      text-align: center;
    }
    .save-visit-resalve {
      padding: 30px 10px;
    }
    ul {
    padding:10px 20px;
      width: 33%;
      height: 80px;
      background-color: #ccc;
      float:left;
      border-radius: 5px;
      margin-top:20px;
      margin-left: 20px;
      li{

      }

    }
  button{
    background-color: #0099ff;
    color: #fff;
    font-size: 14px;
    width: 40%;
    height:50px;
    line-height: 50px;
    display:inline-block;
    border-radius: 0;
    margin: 20px 100px;
  }
  }
</style>

<script>
    export default {
        name: '',
        props: [],
        data() {
            return {
              quanList:[
                {
                  quanFont:'圆明园门票8折优惠'
                },{
                  quanFont:'颐和园纪念品10元优惠券'
                },{
                  quanFont:'北京市流量'
                },{
                  quanFont:'全聚德9.5折代金券'
                }
              ]
            }
        },
        computed: {},
        methods: {
          getQuan(){
            const url= '../publicNum/main';
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
