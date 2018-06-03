<template>
    <div class="vist-function">
      <img v-for="(item,index) in getGoLink" :key="index" class="bigImg" :src="item" @click="previewImage(item,index)">
      <div class="visit-font">
        <div class="visti-font-opacity">
          <i class="icon-dizhi iconfont iconvist"></i><span class="location">{{locationNow}}</span>
        </div>
        <p>{{getVisitFont}}</p>
      </div>
      <div class="imgChange" v-show="isClickrule">
        <checkbox-group class="checkboxUl" @change="serviceValChange">  
          <label class="checkboxLi" v-for="(item,index) in pics" :key="index" @click="changeImg(item,index)">
            <checkbox :value="item.key" :checked="item.checked" hidden="false" />
            <img :src="item.key" :class="{is_checked:item.checked == true}">
          </label>
        </checkbox-group>
      </div>
      <div class="wordChange" v-show="isClickrulr">
        <ul style="overflow:hidden">
          <li v-for="(item,index) in words" :key="index" @click="changeWord(item,index)">
            <i :class="['not_icon',{style:index == selectedWords}]"></i>
            {{item}}
          </li>
        </ul>
      </div>
      <!-- <div class="locationChange" v-show="isClickruly">
        <ul style="overflow:hidden">
          <li v-for="(item,index) in locations" :key="index" @click="changeLocation(item,index)">
            <i :class="['not_icon',{style:index == selectedLocations}]"></i>
            {{item}}
          </li>
        </ul>
      </div> -->
      <!-- <div class="locationChange" v-show="isClickrulo">
        <button @click="saveImage">保存相册</button>
        <canvas canvas-id="shareCanvas"  style="background-color:white" :class="['none',{show:canvasShow}]"/>
        <cover-view :class="['none',{showDiv:canvasShow}]"></cover-view>
      </div> -->
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
    z-index: 20;
  .visit-font {
    width:100%;
    .visti-font-opacity {
      position: absolute;
      width:100px;
      background-color: #000;
      opacity: 0.6;
      top:-40px;
      right:15%;
      height:30px;
      line-height:30px;
      .iconvist{
        color:#fff;
      }
    }
    p{
      padding-right: 50px;
    }
  }
    .bigImg{
      /*padding: 10px 20px;*/
      padding: 10px 0;
      display: block;
      vertical-align: middle;
      margin: 0 auto;
      position: relative;
      width: 355px;
      height: 355px;
    }

    .imgChange{
      width: 100%;
      .checkboxUl{
        overflow: hidden;
        padding: 10px 20px;
        .checkboxLi{
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
          .is_checked {  
            border: 1px solid #fe0002;  
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
      height: 650px;
      position: absolute;
      z-index: 10;
      display: block;
    }
    .showDiv{
      width: 375px;
      height: 650px;
      position: absolute;
      background: #fff;
      z-index: 15;
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
      padding: 10px 25px;
      position: relative;

      .location{
        position: absolute;
        margin-left:20px;
        margin-top:-18px;
        font-weight: 800;
        color:#fff;
        width:90px;
        height:20px;
        font-size:12px;
        line-height:7px;

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
              state:0,
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
        computed: {
          pics(){
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
          },
          getGoLink(){
            return this.$store.state.board.goLinks
          },
          getVisitFont(){
            return this.$store.state.board.visitFont
          }
        },
        methods: {
          serviceValChange(e){
            var checkArr = e.target.value;
            if (checkArr.join(',').indexOf('timgsa.baidu.com')!= -1){
              return
            }
            this.$store.state.board.boards.forEach(item => {
              if (checkArr.join(',').indexOf(item.key)!= -1) {  
                item.checked = true;  
              } else {  
                item.checked = false;  
              }  
            });
            this.$store.state.board.goLinks = checkArr
          },
          changeImg(item,index){
            if(index==0){
              wx.chooseImage({
                count: 1, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success:(res)=> {
                  // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                  this.$store.state.board.goLink = res.tempFilePaths
                  this.$store.state.board.goLinks.push(res.tempFilePaths[0])
                  this.$store.state.board.boards.push({key:res.tempFilePaths[0],checked:true})
                }
              })
            }
            // else{
            //   this.selectedPics = index
            //   this.$store.state.board.goLink = item.key
            //   this.$store.state.board.goLinks.forEach((item2,index2)=>{
            //     if(item2 == item.key){
            //       this.$store.state.board.goLinks.splice(index2,1)
            //     }
            //   })
            //   this.$store.state.board.goLinks.push(item.key)
            // }
          },
          changeWord(item,index){
            this.$store.state.board.visitFont = item
            this.selectedWords = index
          },
          changeLocation(item,index){
            this.locationNow = item
            this.selectedLocations = index
          },
          previewImage(item,index){
            console.log(item)
            wx.getImageInfo({
              src: item,
              success:(res)=>{
                wx.previewImage({  
                  // current: item, // 当前显示图片的http链接  
                  urls: [res.path.split('/')[0]==='static'?'/'+res.path:res.path], // 需要预览的图片http链接列表  
                  success:(res)=>{
                  }
                })  
              }
            })
            
          }
        },
        created() {
        },
        mounted() {
          this.$store.state.board.goLink = this.$store.state.board.boards[1].key
          this.locationNow = this.$store.state.board.address
        },
        components: {
          card
        }
    }
</script>
