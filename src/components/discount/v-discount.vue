<template>
    <div class="discount">
        <div><v-icon decrease_2="decrease_2"></v-icon><span>在线支付满28减5，满50减10</span></div>
        <div><v-icon discount_2="discount_2"></v-icon><span>单人精彩赛</span></div>
        <div><v-icon discount_2="discount_2"></v-icon><span>清肺雪梨汤 8 折抢购</span></div>
        <div><v-icon special_2="special_2"></v-icon><span>特价饮品 8 折抢购</span></div>
        <div class="last"><v-icon special_2="special_2"></v-icon><span>单人特色套餐</span></div>
    </div>
</template>

<script>
    export default {
        name:'v-discount',
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