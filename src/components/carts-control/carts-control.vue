<template>
     <div class="carts_control">
            <transition name="remove">
                <i class="layout-remove_circle_outline remove" @click="remove(food)" v-show="food.count">
                </i>
            </transition>
            <div class="purchase_number" v-show="food.count">{{food.count}}</div>
            <i class="layout-add_circle add" @click="add(food)"></i>
    </div>
</template>

<script>
    export default {
        name:'carts-control',
        props:{
            food:Object
        },
        methods:{
            add(food){
                this.$bus.$emit('add',food)
            },
            remove(food){
                this.$bus.$emit('remove',food)
            }
        }
    }
</script>

<style  scoped lang="stylus">
    .carts_control
        display flex
        align-items center
        justify-content center
        .remove
            font-size 20px
            color rgba(0,160,220,1)
            transform translate3d(0,0,0) rotate(-720deg)
        .purchase_number
            width 24px
            height 24px
            line-height 24px
            text-align center
            font-size 10px
            color rgba(147,153,159,1)
        .add
            font-size 20px
            color rgba(0,160,220,1)
</style>