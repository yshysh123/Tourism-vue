<template>
    <div class="vist-function">
      <img class="bigImg" :src="goLink">
      <p class="visit-font">
        <span class="location">地址</span>
        {{visitFont}}
      </p>
      <div class="imgChange" v-show="isClickrule">
        <ul style="overflow:hidden">
          <li v-for="(item,index) in pics" :key="index" @click="changeImg(item,index)">
            <img :src="item.key">
          </li>
        </ul>
      </div>
      <div class="wordChange" v-show="isClickrulr">
        <ul style="overflow:hidden">
          <li v-for="(item,index) in pics" :key="index" @click="changeWord(item,index)">
            <img :src="item.key">
          </li>
        </ul>
      </div>
      <div class="locationChange" v-show="isClickruly">
        <ul style="overflow:hidden">
          <li v-for="(item,index) in pics" :key="index" @click="changeLocation(item,index)">
            <img :src="item.key">
          </li>
        </ul>
      </div>
      <card :text="motto"></card>
    </div>
</template>

<style lang="scss">
  .vist-function {
    padding: 20px 10px 0 0;
    font-size: 14px;
    position:relative;
    width:100%;
    height:100%;
    .bigImg{
      width: 100%;
      vertical-align: middle;
      padding: 0 10px 0 10px;
      position: relative;
    }
    .imgChange{
      width: 100%;
      ul{
        overflow: hidden;
        padding: 0 10px 0 10px;
        li{
          width:60px;
          height:60px;
          box-sizing: border-box;
          margin: 10px 10px;
          float:left;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  .visit-font{
      /*padding: 10px 20px 10px 10px;*/
      padding: 10px 20px;
      position: relative;
      .location{
        position: absolute;
        top: -30px;
        right: 80rpx;
        font-weight: 900;
        color: red;
      }
    }

  }
</style>

<script>
  import card from '@/components/card'

    export default {
        name: '',
        props: [],
        data() {
            return {
              goLink:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526390630984&di=d0c4299e53a91d334a365632ad4da561&imgtype=0&src=http%3A%2F%2Fs6.sinaimg.cn%2Fmw690%2F51248e24gx6ClIYbmgR95%26690',
              visitFont:'在清朝乾隆时期（1736-1795）在此筑九层延寿塔，至第八层“奉旨停修”,改建佛香阁。1860年（咸丰十年）毁于英法' +
              '联军，光绪时（1875-1908）在原址依样重建，供奉佛像。',
              motto:'引入的组件'
            }
        },
        computed: {
          pics(){
            return this.$store.state.board.boards
          },
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
          changeImg(item,index){
            this.goLink = item.key
          },
          changeWord(item,index){
            this.visitFont = item.key
          },
          changeLocation(item,index){
            this.visitFont = item.key
          }
        },
        created() {
          console.log(this.$store.state.board.boards)
        },
        mounted() {
        },
        components: {
          card
        }
    }
</script>
