import Vue from "vue";
import store from "./store";
import App from "./App";
import './iconfont/iconfont.css'
// import 'mp-weui/lib/style.css'
var Fly = require("flyio/dist/npm/wx");
var fly = new Fly();

Vue.prototype.$ajax = fly; //将fly实例挂在vue原型上
Vue.prototype.$store = store;

Vue.config.productionTip = false;
App.mpType = "app";

const app = new Vue({
  store,
  ...App
});
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ["pages/logs/main", "^pages/index/main","pages/instrustor/main","pages/insfuncction/main","pages/savePage/main","pages/publicNum/main"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "景区信息",
      navigationBarTextStyle: "black"
    }
    // tabBar: {
    //   color: '#999',
    //   selectedColor: '#d22222',
    //   backgroundColor: '#fff',
    //   borderStyle: 'black',
    //   list: [{
    //     pagePath: 'pages/news/list',
    //     text: '资讯',
    //     iconPath: 'static/assets/news.png',
    //     selectedIconPath: 'static/assets/news-active.png'
    //   }, {
    //     pagePath: 'pages/quanzi/list',
    //     text: '圈子',
    //     iconPath: 'static/assets/quanzi.png',
    //     selectedIconPath: 'static/assets/quanzi-active.png'
    //   }]
    // }
  }
};
