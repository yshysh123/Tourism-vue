<template>
  <div class="vist-userInfo">
    <canvas canvas-id="shareCanvas" :style="{ width : getWindowWidth , height : cavHeight + 'px' }" />
    <card :text="motto"></card>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      cavHeight:600,
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
      ctx.setFontSize(14)
      ctx.fillText('地址:'+this.getAddress,340,this.getGoLink.length*335 + 220);

      ctx.stroke()
      ctx.draw(true)
    },
    saveImage(){
      let that = this;
      const ctx = wx.createCanvasContext('shareCanvas')
      ctx.setFillStyle('#fff')
      ctx.fillRect(0, 0, 375, this.getGoLink.length*335 + 315);
      let getImageDraw = [];
      this.getGoLink.forEach((item,index) => {
        wx.getImageInfo({
          src: item,
          success:(res)=>{
            ctx.drawImage(res.path.split('/')[0]==='static'?'/'+res.path:res.path, 20, 335*(index)+20, 335, 335)
            that.draw_long_text(that.getVisitFont,ctx,20,that.getGoLink.length*335+40)
          }
        })
      });
    }
  },

  created () {
// TGQBZ-5BR3P-4Y7DJ-VW22G-3HYGF-JIFVF
  },
  computed: {
    getGoLink(){
      return this.$store.state.board.goLinks
    },
    getAddress(){
      return this.$store.state.board.address
    },
    getVisitFont(){
      return this.$store.state.board.visitFont
    },
    getWindowWidth(){
      return this.$store.state.board.windowWidth
    }
  },
  mounted () {
    this.cavHeight = this.getGoLink.length*335 + 265
    this.saveImage()
  }
}
</script>

<style lang="scss" scoped>
 .vist-userInfo {
  font-size: 22px;
  width: 100%;
  position: relative;
  canvas{
    width: 375px;
    margin-bottom: 45px;
  }
}
</style>
