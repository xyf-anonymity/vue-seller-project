<template>
  <div id="app">
    <v-header></v-header>
    <div class="navs">
      <div class="nav">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="nav">
        <router-link to="/evaluation">评价</router-link>
      </div>
      <div class="nav">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import vHeader from 'components/v-header/v-header'
  export default {
    name: 'App',
    components:{
      'v-header':vHeader
    }
  }
</script>

<style scoped lang="stylus">
  @import './common/stylus/mix.styl'
  .navs
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
</style>
