<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
  </div>
</template>

<script>
import card from '@/components/card'
import { login, getUserInfo } from '@/utils/wechat'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUser () {
      getUserInfo().then((res)=>{
        this.userInfo = res.userInfo
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
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
.container {
  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    .userinfo-avatar {
      width: 128px;
      height: 128px;
      margin: 20px;
      border-radius: 50%;
    }
    .userinfo-nickname {
      color: #aaa;  
    }
  }
  .usermotto {
    margin-top: 150px;
  }
  .form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
  }
  .counter {
    display: inline-block;
    margin: 10px auto;
    padding: 5px 10px;
    color: red;
    border: 1px solid red;
  }
}
</style>
