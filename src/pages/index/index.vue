<template>
  <!--<div class="container" @click="clickHandle('test click', $event)">-->
  <!--</div>-->
  <div class="vist-userInfo">
    <p>您正在游览的是</p>
    <p>You are visiting</p>
    <h3>{{userInfos.test}}</h3>
    <p class="vist-introduce"  @click="linkErweima">Pavilion of the {{userInfos.visitPlace}}</p>
    <div class="visit-erweima" >
      <img src="/static/images/weixin.jpg" mode="aspectFill" @click="bindViewTap('/static/images/weixin.jpg')">
      <div class="show">{{show}}</div>
    </div>
    <p class="visit-saomiao">长按识别二维码获取景观讲解，分享足迹至朋友圈还可获取更多优惠</p>
  </div>
</template>

<script>
import card from '@/components/card'
import { login, getUserInfo } from '@/utils/wechat'

export default {
  data () {
    return {
      userInfos:{
        test:'颐和园-佛香园',
        visitPlace:'Fragrance of Buddha Summer Palace'
      },
      show:''
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap (urls) {
//      const url = '../logs/main'
//      wx.navigateTo({ url })
      const url = '../instrustor/main'
      wx.navigateTo({ url })
      wx.previewImage({
       /* current: url, // 当前显示图片的http链接*/
        urls: ['https://qr.api.cli.im/qr?data=https%253A%252F%252Fwww.baidu.com&level=H&transparent=false&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=280&kid=cliim&key=3d9a7684e3712110675d398ca0c86070'] // 需要预览的图片http链接列表
      })
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
  }
}
</script>

<style lang="scss" scoped>
 .vist-userInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150rpx 10rpx 20rpx 10rpx;
  font-size: 14px;
   p {
     width: 100%;
     text-align: center;
     padding: 5px 0;
   }
   h3 {
     font-size: 18px;
     margin-bottom:5px;
   }
   .vist-introduce {
     padding-bottom: 15px;
   }
 .visit-erweima {
   width: 328rpx;
   height: 328rpx;
   margin: 20rpx;
   background-color: #ccc;
   img {
     vertical-align: middle;
     width: 328rpx;
     height: 328rpx;
   }
 .show{
   width: 100%;
   color: #666;
   background-color: #fff;
   height: auto;

 }
 }
 .visit-saomiao {
   padding: 50rpx;
   width: 363rpx;
   padding: 50rpx 0rpx;
   box-sizing: border-box;
 }
}
</style>
