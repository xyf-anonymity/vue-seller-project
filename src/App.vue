<template>
  <div id="app">
    <v-a></v-a>
    <router-view></router-view>
  </div>
</template>

<script>
import a from 'components/a'
export default {
  name: 'App',
    components:{
      'v-a':a
    }
}
</script>

<style scoped>
</style>
