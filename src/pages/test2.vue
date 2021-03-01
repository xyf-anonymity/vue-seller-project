<template>
    <div>{{test}}</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'test2',
    computed:{
        ...mapState(['test'])
    }
}
</script>

<style  scoped>
</style>