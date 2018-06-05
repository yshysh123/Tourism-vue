<template>
  <view class="vist-deleteImage" :style="{ width : getWindowWidth + 'px' ,minHeight:getWindowHeight + 'px', height :'100%',overflow:'hidden' }">
    <img v-for="(item,index) in getGoLinks" :key="index" class="bigImg" :src="item" @click="previewImage(item,index)">
  </view>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    previewImage(item,index){
      wx.showActionSheet({  
        itemList: ['删除','返回编辑'],  
        itemColor:'red',
        success: (res)=> {  
          if(res.tapIndex==0){
            if(this.$store.state.board.goLinks.length==1){
              wx.showToast({  
                title: '不能全删除了哦',  
                icon: 'none',  
                mask:true,
                duration: 1500,
                success:()=>{
                  const url = '../editWord/main'
                  wx.redirectTo({ url })
                }
              }) 
            }else{
              this.$store.state.board.boards.forEach((item2,index2)=>{
                if(item2.key === item){
                  this.$store.state.board.boards.splice(index2,1)
                }
              })
              this.$store.state.board.goLinks.splice(index,1)
            }
          }else if(res.tapIndex==1){
            const url = '../editWord/main'
            wx.redirectTo({ url })
          }
        },  
        fail: function(res) {  
        }  
      })  
    }
  },
  computed: {
    getGoLinks(){
      return this.$store.state.board.goLinks
    },
    getWindowWidth(){
      return this.$store.state.board.windowWidth
    },
    getWindowHeight(){
      return this.$store.state.board.windowHeight
    }
  },
  mounted () {
    
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
    float:left;
    width: 157.5px;
    height: 157.5px;
    margin: 10px;
  }
}
</style>
