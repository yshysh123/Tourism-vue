<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.getSystemInfo({
      success:(res)=> {
        this.$store.state.board.windowWidth  = res.windowWidth
        this.$store.state.board.windowHeight  = res.windowHeight
      }
    })
    var QQMapWX = require('../static/qqmap-wx-jssdk.min.js');
    qqmapsdk = new QQMapWX({
      key: 'TGQBZ-5BR3P-4Y7DJ-VW22G-3HYGF-JIFVF'
    });
    var qqmapsdk;
    let that = this;
    wx.getLocation({
      type:'gcj02',
      altitude:true,
      success:(res)=>{
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success:(addressRes)=> {
            this.$store.state.board.address = addressRes.result.address_component.city+'-'+addressRes.result.address_component.district
          }
        })
      }
    })
  }
}
</script>

<style>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
::-webkit-scrollbar{
  width: 0;
  height: 0;
  color: transparent;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
