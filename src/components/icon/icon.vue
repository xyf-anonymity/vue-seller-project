<template>
    <div>
        <i class="icon" :class="[decrease_1,decrease_2,discount,discount_2,special_2]"></i>
    </div>
</template>

<script>
    export default {
        name:'v-icon',
        props:{
            decrease_1:String,
            decrease_2:String,
            discount_2:String,
            special_2:String,
            discount:String
        }
    }
</script>

<style  scoped lang="stylus">
    @import '../../common/stylus/mix.styl'
    .icon
        display inline-block
        background-repeat no-repeat
        background-size 100%
        &.decrease_1    
            background-img-mix(decrease_1)
            width 12px
            height 12px
        &.decrease_2    
            background-img-mix(decrease_2)
            width 16px
            height 16px
        &.decrease_3    
            background-img-mix(decrease_3)
            width 12px
            height 12px
        &.decrease_4    
            background-img-mix(decrease_4)
            width 16px
            height 16px
        &.discount_1    
            background-img-mix(discount_1)
            width 12px
            height 12px
        &.discount_2    
            background-img-mix(discount_2)
            width 16px
            height 16px
        &.discount_3    
            background-img-mix(discount_3)
            width 12px
            height 12px
        &.discount_4    
            background-img-mix(discount_4)
            width 16px
            height 16px
        &.invoice_1    
            background-img-mix(invoice_1)
            width 12px
            height 12px
        &.invoice_2    
            background-img-mix(invoice_2)
            width 16px
            height 16px
        &.invoice_3    
            background-img-mix(invoice_3)
            width 12px
            height 12px
        &.invoice_4    
            background-img-mix(invoice_4)
            width 16px
            height 16px
        &.guarantee_1    
            background-img-mix(guarantee_1)
            width 12px
            height 12px
        &.guarantee_2    
            background-img-mix(guarantee_2)
            width 16px
            height 16px
        &.guarantee_3    
            background-img-mix(guarantee_3)
            width 12px
            height 12px
        &.guarantee_4    
            background-img-mix(guarantee_4)
            width 16px
            height 16px
        &.special_1    
            background-img-mix(special_1)
            width 12px
            height 12px
        &.special_2    
            background-img-mix(special_2)
            width 16px
            height 16px
        &.special_3    
            background-img-mix(special_3)
            width 12px
            height 12px
        &.special_4    
            background-img-mix(special_4)
            width 16px
            height 16px
</style>