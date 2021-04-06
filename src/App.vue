<template>
  <div id="app">
    <div class="app-header">
      <v-header></v-header>
    </div>
    <div class="app-navs">
      <div class="nav">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="nav">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="nav">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div class="app-body">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import {GETSELLER} from 'store/mutations_type.js'
  import {mapActions} from 'vuex'
  import vHeader from 'components/header/v-header'
  export default {
    name: 'App',
    components:{
      'v-header':vHeader
    },
    methods:{
      ...mapActions([GETSELLER])
    },
    async mounted(){
      await this[GETSELLER](GETSELLER)
/*       let data1 = await this.$http.user.getUserAll({page:2,num:2})
      let data2 = await this.$http.user.login({name:"xyf",password:"yf135463"})
      console.log(data1,data2) */
    }
  }
</script>

<style scoped lang="stylus">
  @import './common/stylus/mix.styl'
  #app
    position relative
    width 100%
    height 100%
    .app-header
      box-sizing border-box
      width 100%
      height 135px
      zoom 1 
    .app-navs
      border-mix(rgba(7,17,27,0.1))
      height 40px
      display flex
      justify-content space-around
      align-items center
      .nav
        display flex
        flex 1
        width 100%
        height 100%
        a
          text-align center
          width 100%
          height 100%
          line-height 40px
          font-size: 14px
          color rgba(77,85,93,1)
          &.active
            color rgba(240,20,20,1)
    .app-body
      position absolute
      top 174px
      bottom 0px
      left 0px
      right 0px
</style>
