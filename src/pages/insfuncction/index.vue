<template>
    <div class="vist-function">
      <img :src="goLink">
      <p class="visit-font">
        {{visitFont}}
      </p>
      <card :text="motto"></card>

    </div>
</template>

<style lang="scss">
  .vist-function {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100rpx 10rpx 0 10rpx;
    font-size: 14px;
    position:relative;
    width:100%;
    height:100%;
    img {
      vertical-align: middle;
      padding: 0 20px 0 10px;
    }
  .visit-font{
      /*padding: 10px 20px 10px 10px;*/
      padding: 10px 20px;
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
              goLink:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526390630984&di=d0c4299e53a91d334a365632ad4da561&imgtype=0&src=http%3A%2F%2Fs6.sinaimg.cn%2Fmw690%2F51248e24gx6ClIYbmgR95%26690',
              visitFont:'在清朝乾隆时期（1736-1795）在此筑九层延寿塔，至第八层“奉旨停修”,改建佛香阁。1860年（咸丰十年）毁于英法' +
              '联军，光绪时（1875-1908）在原址依样重建，供奉佛像。',
              motto:'引入的组件'
            }
        },
        computed: {},
        methods: {},
        created() {
        },
        mounted() {
          console.log(card)
        },
        components: {
          card
        }
    }
</script>
