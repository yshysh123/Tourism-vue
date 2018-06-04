<template>
  <view class="vist-deleteImage" :style="{ width : getWindowWidth + 'px' , height : getWindowHeight + 'px' }">
    <img :src="getChooseImage" />
  </view>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    
  },
  computed: {
    getChooseImage(){
      return this.$store.state.board.chooseImage
    },
    getChooseIndex(){
      return this.$store.state.board.chooseIndex
    },
    getChooseIndexNow(){
      return this.$store.state.board.chooseIndexNow
    },
    getWindowWidth(){
      return this.$store.state.board.windowWidth
    },
    getWindowHeight(){
      return this.$store.state.board.windowHeight
    }
  },
  mounted () {
    wx.showActionSheet({  
      itemList: ['删除'],  
      itemColor:'red',
      success: (res)=> {  
          if(res.tapIndex==0){
              this.$store.state.board.boards.splice(this.getChooseIndex,1)
              this.$store.state.board.goLinks.splice(this.getChooseIndexNow,1)
              if(this.$store.state.board.goLinks.length==0){
                  this.$store.state.board.goLinks.push(this.$store.state.board.boards[1].key)
                  this.$store.state.board.boards[1].checked = true;
              }
              const url = '../insfuncction/main'
              wx.redirectTo({ url })
          }
      },  
      fail: function(res) {  
          const url = '../insfuncction/main'
          wx.redirectTo({ url })
      }  
    })  
  }
}
</script>

<style lang="scss" scoped>
 .vist-deleteImage {
  position: relative;
  padding: 10px 10px;
  box-sizing: border-box;
  font-size: 14px;
  width: 100%;
  background-color:#000;
  img{
        display: block;
        position: absolute;
        top: 15%;
        left:20px;
        width: 335px;
        height: 335px;
  }
}
</style>
