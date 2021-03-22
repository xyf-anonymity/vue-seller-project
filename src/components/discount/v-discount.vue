<template>
    <div class="discount">
        <div v-for="(item,index) in seller.supports" :key="index">
            <v-icon imgSize="2" :type="item.type"></v-icon><span>{{item.content}}</span>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name:'v-discount',
        computed:{
            ...mapState(['seller']),
        }
    }
</script>

<style  scoped lang="stylus">
    .discount
        box-sizing border-box
        width 100%
        margin auto
        padding-left 12px
        padding-right 12px
        padding-bottom  28px
        & > div 
            display flex
            align-items center
            margin-bottom 12px
            & > span 
                margin-left 6px
                font-size 12px
                font-weight 200
                color white
        .last
            margin-bottom 0px
</style>