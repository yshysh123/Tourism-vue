<template>
  <div class="vist-userInfo">
      <view class="section">  
        <textarea :value="getVisitFont" maxlength="140" @input="textareaChange"/>
        <span style="display:block;width:100%;text-align:right">{{remnant}}/140</span>
      </view>  
      <div class="imgChange">
        <ul style="overflow:hidden">
          <li v-for="(item,index) in pics" :key="index">
            <img :src="item">
          </li>
          <li @click="changeImg()">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527964375804&di=c6f8ed52f6bfa5166c6c71db2958f113&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fbaike%2Fw%3D268%2Fsign%3D792273edf9edab6474724ac6cf36af81%2Fa08b87d6277f9e2fda25102e1d30e924b899f380.jpg" />
          </li>
        </ul>
      </div>
      <card :text="motto"></card>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      remnant:140
    }
  },

  components: {
        card
    },

  methods: {
    textareaChange(e) { 
      this.$store.state.board.visitFont =  e.target.value
      var txtVal = this.$store.state.board.visitFont.length;
      this.remnant = 140 - txtVal;
    },
    changeImg(){
      this.$store.state.board.isClickrule = true;
      this.$store.state.board.isClickrulr = false;
      this.$store.state.board.isClickruly = false;
      this.$store.state.board.isClickrulo = false;
      const url = '../insfuncction/main'
      wx.redirectTo({ url })
    },
  },
  computed: {
    pics(){
      return this.$store.state.board.goLinks
    },
    getVisitFont(){
      return this.$store.state.board.visitFont
    }
  },
  mounted () {
    this.remnant = 150 - this.$store.state.board.visitFont.length;
  }
}
</script>

<style lang="scss" scoped>
 .vist-userInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  font-size: 14px;
  width: 100%;
  .imgChange{
      width: 100%;
      ul{
        overflow: hidden;
        padding: 10px 20px;
        li{
          width:60px;
          height:60px;
          box-sizing: border-box;
          margin: 10px 10px;
          float:left;
          img{
            width: 100%;
            height: 100%;
            opacity: 0.4;
          }
          .hidden{
            opacity: 1;
          }
        }
      }
    }
}
</style>
