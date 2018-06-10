<template>
  <div class="vist-userInfo">
      <div class="look-scenery" @click="bindViewTap">
        <!--<i class="icon-jieshao iconfont"></i>-->
        <span>查看景区介绍</span>
      </div>
      <div class="share-visit" @click="sharefoot">
        <!--<i class="icon-zuji-copy iconfont"></i>-->
        <span>分享足迹</span>
      </div>
  </div>
</template>

<script>
import card from '@/components/card'
import { login, getUserInfo } from '@/utils/wechat'

export default {
  data () {
    return {

    }
  },

  components: {
  },

  methods: {
    bindViewTap (urls) {
      const url = '../instrustor/main'
      wx.redirectTo({ url })

    },
    sharefoot(){
      const url = '../insfuncction/main'
      wx.redirectTo({ url })
    },
    getUser () {
      getUserInfo().then((res)=>{
        this.userInfo = res.userInfo
      })
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    login().then(res => {
      console.log(res)
      this.getUser()
    })
  },
  mounted(){
    wx.getSystemInfo({
      success:(res)=> {
        this.$store.state.board.windowWidth  = res.windowWidth
      }
    })
    
  }
}
</script>

<style lang="scss" scoped>
 .vist-userInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  font-size: 22px;
  width: 100%;
   height: 100%;
   .look-scenery {
     width: 100%;
     height:100px;
     line-height:100px;
     padding: 25% 0;
     text-align:center;
     background-color: #B8DCEB;
     color: #647279;
     i {
       font-size: 18px;
     }
   }
   .share-visit {
     width: 100%;
     height:100px;
     line-height:100px;
     padding: 25% 0;
     text-align:center;
     margin-top:10px;
     color: #647279;
     background-color:#B8DCEB;
     i {
       font-size: 18px;
     }
   }
}
</style>
