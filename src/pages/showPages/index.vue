<template>
  <div class="vist-userInfo">
      <canvas canvas-id="shareCanvas" :style="{ width : '100%' , height : cavHeight + 'px' }"/>
      <card :text="motto"></card>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      cavHeight:600
    }
  },

  components: {
        card
    },
  onShareAppMessage(res){
    wx.canvasToTempFilePath({
      canvasId: 'shareCanvas',
      success: (res) =>{
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success:(res) =>{
            wx.showToast({
              title: '已保存到相册',
              success:(res) =>{
                return {
                  title: '分享获得优惠券！',
                  path: '/pages/index/main',
                  imageUrl: this.imgSrc,
                  success: function(res) {
                    wx.redirectTo({
                      url: '/pages/savePage/main'
                    })
                    // 转发成功
                  },
                  fail: function(res) {
                    // 转发失败
                  }
                }
              }
            })
          },
          fail:(res) =>{
          }
        })
      }
    })
  },
  methods: {
    draw_long_text(longtext,ctx,begin_width,begin_height)
      {
      var linelenght = 20;
      var text = "";
      var count = 0;
      var begin_width = begin_width;
      var begin_height = begin_height;
      var stringLenght = longtext.length;
      var newtext = longtext.split("");
      ctx.setTextAlign('left')    // 文字居中
      ctx.setFillStyle('#000000')  // 文字颜色：黑色
      ctx.setFontSize(14)

      for(let i = 0; i <= stringLenght ; i++)
      {
        if(count == 23)
        {
          ctx.fillText(text,begin_width,begin_height);
          begin_height = begin_height + 25;
          text = "";
          count = 0;
        }
        if(i == stringLenght)
        {
          ctx.fillText(text,begin_width,begin_height);
        }
        var text = text + newtext[0];
        count ++;
        newtext.shift();
      }
      ctx.setTextAlign('right')
      // ctx.setFontSize(14)
      // ctx.setFillStyle('red')
      // ctx.fillText('地址:'+this.locationNow,340,380);
      ctx.stroke()
      ctx.draw()
      // setTimeout(()=>{
      //   wx.canvasToTempFilePath({
      //     canvasId: 'shareCanvas',
      //     success: (res) =>{
      //       wx.saveImageToPhotosAlbum({
      //         filePath: res.tempFilePath,
      //         success:(res) =>{
      //           this.canvasShow = false;
      //           wx.showToast({
      //               title: '已保存到相册'
      //           })
      //         },
      //         fail:(res) =>{
      //           this.canvasShow = false;
      //         }
      //       })
      //     }
      //   })
      // },200)
    },
    saveImage(){
      const ctx = wx.createCanvasContext('shareCanvas')
      ctx.setFillStyle('#fff')
      ctx.fillRect(0, 0, 375, 650);
      // 底图
      wx.getImageInfo({
        src: typeof(this.getGoLink)=='string'?this.getGoLink:this.getGoLink[0],
        success:(res)=>{
          ctx.drawImage(res.path.split('/')[0]==='static'?'/'+res.path:res.path, 20, 20, 335, 335)
          this.draw_long_text(this.getVisitFont,ctx,20,375)
        }
      })
    }
  },

  created () {

  },
  computed: {
    getGoLink(){
      return this.$store.state.board.goLink
    },
    getVisitFont(){
      return this.$store.state.board.visitFont
    }
  },
  mounted () {
    setTimeout(()=>{
      this.saveImage()
    },500)
  }
}
</script>

<style lang="scss" scoped>
 .vist-userInfo {
  font-size: 22px;
  width: 100%;
  canvas{
    width: 100%;
  }
}
</style>
