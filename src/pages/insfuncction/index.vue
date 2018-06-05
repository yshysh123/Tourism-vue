<template>
    <div class="vist-function">
      <div class="number">{{getGoLinks.length}}</div>
      <!-- <img v-for="(item,index) in getGoLinks" :key="index" class="bigImg" :src="item" @click="previewImage(item,index)"> -->
      <img class="bigImg" :src="getGoLink" @click="previewImage">
      <div class="imgChange" v-show="isClickrule">
        <checkbox-group class="checkboxUl" @change="serviceValChange">  
          <label class="checkboxLi" v-for="(item,index) in pics" :key="index" @click="changeImg(item,index)">
            <checkbox :value="item.key" :checked="item.checked" hidden="false" />
            <img :src="item.key" :class="{is_checked:item.checked == true}">
          </label>
        </checkbox-group>
      </div>
      <card :text="motto"></card>
    </div>
</template>

<style lang="scss">
  .vist-function {
    padding: 10px 0 10px 0;
    font-size: 14px;
    position:relative;
    width:100%;
    height:100%;
    z-index: 20;
    .number{
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      line-height: 20px;
      text-align: center;
      color: #fff;
      background-color: blue;
      font-weight: 900;
      right: 20px;
      top: 20px;
      z-index: 20;
    }
    .bigImg{
      /*padding: 10px 20px;*/
      padding: 10px 0;
      display: block;
      vertical-align: middle;
      margin: 0 auto;
      position: relative;
      width: 335px;
      height: 335px;
    }

    .imgChange{
      width: 100%;
      .checkboxUl{
        overflow: hidden;
        padding: 10px 10px;
        .checkboxLi{
          width:70px;
          height:70px;
          box-sizing: border-box;
          margin: 8px 8px;
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
  }
</style>

<script>
  import card from '@/components/card'
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
          getGoLinks(){
            return this.$store.state.board.goLinks
          },
          getGoLink(){
            return this.$store.state.board.goLink
          },
          getVisitFont(){
            return this.$store.state.board.visitFont
          }
        },
        methods: {
          serviceValChange(e){
            if(e.target.value.length<1){
              wx.showToast({  
                title: '最少选择一张',  
                icon: 'none',  
                mask:true,
                duration: 1500  
              }) 
              return
            }
            else if(e.target.value.length>10){
              wx.showToast({  
                title: '最多预览10张',  
                icon: 'none',  
                mask:true,
                duration: 1500  
              })  
              return
            }
            else{
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
              this.$store.state.board.goLink = checkArr[0]
              this.$store.state.board.goLinks = checkArr
            }
          },
          changeImg(item,index){
            if(index==0){
              // const url = '../cropperImage/main'
              // wx.redirectTo({ url })

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
          },
          changeWord(item,index){
            this.$store.state.board.visitFont = item
            this.selectedWords = index
          },
          changeLocation(item,index){
            this.locationNow = item
            this.selectedLocations = index
          },
          previewImage(){
            // this.$store.state.board.boards.forEach((item2,index2)=>{
            //   if(item2.key == item){
            //     this.$store.state.board.chooseIndex = index2
            //   }
            // })
            // this.$store.state.board.chooseIndexNow = index
            // this.$store.state.board.chooseImage = item
            // const url = '../deleteImage/main'
            // wx.redirectTo({ url })
            console.log(this.getGoLink,this.getGoLinks)
            wx.previewImage({  
              current: this.getGoLink, // 当前显示图片的http链接  
              urls: this.getGoLinks, // 需要预览的图片http链接列表  
              success:(res)=>{
              }
            })  
            // wx.getImageInfo({
            //   src: item,
            //   success:(res)=>{
            //     wx.previewImage({  
            //       // current: item, // 当前显示图片的http链接  
            //       urls: [res.path.split('/')[0]==='static'?'/'+res.path:res.path], // 需要预览的图片http链接列表  
            //       success:(res)=>{
            //       }
            //     })  
            //   }
            // })
          }
        },
        created() {
        },
        mounted() {
          var pages = getCurrentPages() 
          var currentPage = pages[pages.length-1]
          var url = currentPage.route 
          if(url==="pages/showPages/main"){
            this.$store.state.board.isabled = false;
          }else{
            this.$store.state.board.isabled = true;
          }
        },
        components: {
          card
        }
    }
</script>
