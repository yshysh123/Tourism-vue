<template>
    <div class="vist-function">
      <img class="bigImg" :src="goLink">
      <p class="visit-font">
        <span class="location">地址:{{locationNow}}</span>
        {{visitFont}}
      </p>
      <div class="imgChange" v-show="isClickrule">
        <ul style="overflow:hidden">
          <li v-for="(item,index) in pics" :key="index" @click="changeImg(item,index)">
            <img :src="item.key" :class="{hidden:index == selectedPics}">
          </li>
        </ul>
      </div>
      <div class="wordChange" v-show="isClickrulr">
        <ul style="overflow:hidden">
          <li v-for="(item,index) in words" :key="index" @click="changeWord(item,index)">
            <i :class="['not_icon',{style:index == selectedWords}]"></i>
            {{item}}
          </li>
        </ul>
      </div>
      <div class="locationChange" v-show="isClickruly">
        <ul style="overflow:hidden">
          <li v-for="(item,index) in locations" :key="index" @click="changeLocation(item,index)">
            <i :class="['not_icon',{style:index == selectedLocations}]"></i>
            {{item}}
          </li>
        </ul>
      </div>
      <div class="locationChange" v-show="isClickrulo">
        <button @click="saveImage">保存相册</button>
        <canvas canvas-id="shareCanvas"  style="background-color:white" :class="['none',{show:canvasShow}]"/>
        <div :class="['none',{showDiv:canvasShow}]"></div>
      </div>
      <card :text="motto"></card>
    </div>
</template>

<style lang="scss">
  .vist-function {
    padding: 20px 0 60px 0;
    font-size: 14px;
    position:relative;
    width:100%;
    height:100%;
    .bigImg{
      padding: 10px 20px;
      display: block;
      vertical-align: middle;
      margin: 0 auto;
      position: relative;
    }

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
    .wordChange{
      width: 100%;
      ul{
        overflow: hidden;
        padding: 10px 20px;
        li{
          margin:10px 10px;
          i {
            display: inline-block;;
            width: 20px;
            height: 20px;

          }
          .not_icon {
            background: url('../../../static/images/icon1.png') no-repeat center center;
            background-size: 100% 100%;
          }
          .style {
            background: url('../../../static/images/icon2.png') no-repeat center center;
            background-size: 100% 100%;
          }
        }
      }
    }
    .locationChange{
      width: 100%;
      ul{
        overflow: hidden;
        padding: 10px 20px;
        li{
          margin:10px 10px;
          i {
            display: inline-block;;
            width: 20px;
            height: 20px;

          }
          .not_icon {
            background: url('../../../static/images/icon1.png') no-repeat center center;
            background-size: 100% 100%;
          }
          .style {
            background: url('../../../static/images/icon2.png') no-repeat center center;
            background-size: 100% 100%;
          }
        }
      }
    }
    .none{
      display: none;
    }
    .show{
      width: 375px;
      height: 600px;
      position: absolute;
      z-index: 10;
      display: block;
    }
    .showDiv{
      width: 375px;
      height: 600px;
      position: absolute;
      background: #fff;
      z-index: 11;
      display: block;
    }
    .locationChange{
      width: 100%;
      margin: 10px auto 10px;
      button {
        background-color: #0099ff;
        color: #fff;
        font-size: 14px;
        height:50px;
        width:80%;
        line-height: 50px;
        border-radius: 0;
      }
    }
  .visit-font{
      /*padding: 10px 20px 10px 10px;*/
      padding: 10px 20px;
      position: relative;
      .location{
        position: absolute;
        top: -30px;
        right: 50px;
        font-weight: 900;
        color: red;
      }
    }

  }
</style>

<script>
  import card from '@/components/card'
  import {wxGetImageInfo,wxCanvasToTempFilePath,wxSaveImageToPhotosAlbum} from '@/utils/wechat'
    export default {
        name: '',
        props: [],
        data() {
            return {
              imgSrc: '',
              goLink:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526390630984&di=d0c4299e53a91d334a365632ad4da561&imgtype=0&src=http%3A%2F%2Fs6.sinaimg.cn%2Fmw690%2F51248e24gx6ClIYbmgR95%26690',
              visitFont:'在清朝乾隆时期（1736-1795）在此筑九层延寿塔，至第八层“奉旨停修”,改建佛香阁。1860年（咸丰十年）毁于英法' +
              '联军，光绪时（1875-1908）在原址依样重建，供奉佛像。',
              motto:'引入的组件',
              locationNow:'北京',
              selectedWords:0,
              selectedLocations:0,
              selectedPics:1,
              canvas:null,
              canvasDraw:null,
              canvasShow:false
            }
        },
      onShareAppMessage(res){
        return {
          title: '分享获得优惠券！',
          path: '/pages/index/main',
          imageUrl: this.imgSrc,
          success: function(res) {
           wx.navigateTo({
             url: '/pages/savePage/main'
           })
            // 转发成功
          },
          fail: function(res) {
            // 转发失败
          }
        }
      },
        computed: {
          pics(){
            this.imgSrc = this.$store.state.board.boards[0]
            return this.$store.state.board.boards
          },
          words(){
            return this.$store.state.board.words
          },
          locations(){
            return this.$store.state.board.locations
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
            this.imgSrc = item.key
            if(index==0){
              wx.chooseImage({
                count: 1, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success:(res)=> {
                  // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                  console.log(res)
                  this.goLink = res.tempFilePaths
                }
              })
            }else{
              this.selectedPics = index
              this.goLink = item.key
            }
          },
          changeWord(item,index){
            this.visitFont = item
            this.selectedWords = index
          },
          changeLocation(item,index){
            this.locationNow = item
            this.selectedLocations = index
          },
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
            ctx.setFillStyle('red')
            ctx.fillText('地址:'+this.locationNow,340,380);
            ctx.stroke()
            ctx.draw()
            setTimeout(()=>{
              wx.canvasToTempFilePath({
                canvasId: 'shareCanvas',
                success: (res) =>{
                  wx.saveImageToPhotosAlbum({
                    filePath: res.tempFilePath,
                    success:(res) =>{
                      this.canvasShow = false;
                      wx.showToast({
                          title: '已保存到相册'
                      })
                    },
                    fail:(res) =>{
                      this.canvasShow = false;
                    }
                  })
                }
              })
            },500)
          },
          saveImage(){
            const ctx = wx.createCanvasContext('shareCanvas')
            this.canvasShow = true;
            ctx.setFillStyle('#fff')
            ctx.fillRect(0, 0, 375, 600);
            // 底图
            wx.getImageInfo({
              src: typeof(this.goLink)=='string'?this.goLink:this.goLink[0],
              success:(res)=>{
                ctx.drawImage(res.path.split('/')[0]==='static'?'/'+res.path:res.path, 20, 0, 335, 400)
                this.draw_long_text(this.visitFont,ctx,20,420)
              }
            })

            // 作者名称
            
            // ctx.setTextAlign('center')    // 文字居中
            // ctx.setFillStyle('#000000')  // 文字颜色：黑色
            // ctx.setFontSize(14)         // 文字字号：22px
            // ctx.fillText(this.visitFont, 20 , 620 )
            // ctx.stroke()
            // ctx.draw()

          }
        },
        created() {
        },
        mounted() {
          this.visitFont = this.$store.state.board.words[0]
          this.goLink = this.$store.state.board.boards[1].key
          this.locationNow = this.$store.state.board.locations[0]
        },
        components: {
          card
        }
    }
</script>
