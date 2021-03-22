<template>
    <div class="food">
        <div class="left">
            <img class="img" :src="food.image"  >
        </div>
        <div class="right">
            <div class="name">{{food.name}}</div>
            <div class="description">{{food.description}}</div>
            <div class="sellCount-rating">
                <span class="sellCount">月售{{food.sellCount}}份</span>
                <span class="rating">好评率{{food.rating}}%</span>
            </div>
            <div class="price-count">
                <div class="price">
                    <span class="current"><span style="fontSize:10px">￥</span>{{food.price}}</span>
                    <div class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</div>
                </div>
            </div>
        </div>
        <carts-control class="control" :food="food"></carts-control>
    </div>
</template>

<script>
    import CartsControl from '../carts-control/carts-control.vue'
    export default {
        name:'v-food',
        props:{
            food:Object
        },
        components:{
            'carts-control':CartsControl
        }
    }
</script>

<style  scoped lang="stylus"> 
    .food
        display flex
        position relative
        .left
            zoom 1
            .img
                width 64px
                height 64px
                margin-right 10px
                border-radius 3px
        .right
            zoom 1
            & > .name
                    font-size 14px
                    color rgba(7,17,27,1)
                    margin-top 2px
                    margin-bottom 8px
                .description
                    width 200px
                    overflow hidden
                    text-overflow ellipsis
                    white-space nowrap
                    font-size 10px
                    color rgba(147,153,159,1)
                    margin-bottom 8px
                .sellCount-rating
                    font-size 10px
                    color rgba(147,153,159,1)
                    margin-bottom 8px
                    .sellCount
                        margin-right 12px
                .price-count
                    display flex
                    zoom 1
                    .price
                        display flex
                        width 10px
                        height 10px
                        .current
                            font-size 14px
                            color red
                            font-weight 700
                            margin-right 8px
                        .old
                            font-size 10px
                            color rgba(147,153,159,1)
                            font-weight 700
                            text-decoration line-through
        .control
            position absolute
            right 0px
            bottom -10px
            // z-index 9
</style>