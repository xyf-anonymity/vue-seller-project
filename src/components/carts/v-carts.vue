<template>
    <div>
        <div class="cart">
            <div  class="left" style="color: white"  @click="listIsShow">
                <div class="icon">
                    <div class="logo" :class="{active:totalCount > 0}">
                        <i class="layout-shopping_cart"></i>
                    </div>
                    <span class="qipao" v-show="totalCount > 0">{{totalCount}}</span>
                </div>
                <div class="totalPrice" :class="{active:totalPrice>0}">
                    <span>¥{{totalPrice}}</span>
                </div>
                <div class="deliveryPrice">
                    <span>另需配送费¥{{seller.deliveryPrice}}元</span>
                </div>
            </div>
            <div class="right active">
                <span>{{payText}}</span>
            </div>
        </div>
        <div class="list" v-show="isShow">
            <div class="header">
                <span class="cartText">购物车</span>
                <span class="clear" @click="clear">清空</span>
            </div>
            <div class="content" ref="content">
                <ul>
                    <li class="item" v-for="(food,index) in cartsFoods" :key="index">
                        <span class="left"> {{food.name}}</span>
                        <div class="right">
                            <span class="price_wrap">
                                <span style="font-size:10px;color:red;text-align:center">￥</span>
                                <span class="price">{{food.price}}</span>
                            </span>  
                            <carts-control class="contorl" :food="food"></carts-control>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mask" v-show="isShow" @click="maskIsShow"></div>
    </div> 
</template>

<script>
    import {mapState} from 'vuex'
    import BetterScroll from 'better-scroll'
    import cartsControl from 'components/carts-control/carts-control.vue'
    export default {
        name:'v-carts',
        props:{
            cartsFoods:Array
        },
        data(){
            return {
                isShow:false
            }
        },
        computed:{
            ...mapState(['seller']),
            //计算添加进购物车的商品总数量
            totalCount(){          
                return this.cartsFoods.reduce((adder,food)=>{
                    return adder + food.count
                },0)
            },
            //计算添加进购物车的商品的总金额
            totalPrice(){
                return this.cartsFoods.reduce((adder,food)=>{
                    return adder + (food.count * food.price)
                },0)
            },
            //计算是否达到起送价
            payText(){
                if(this.totalPrice < this.seller.minPrice && this.totalPrice !== 0)  
                    return `还差￥${this.seller.minPrice - this.totalPrice}起送` 
                else if(this.totalPrice >= this.seller.minPrice) 
                    return `去结算`
                else if(this.totalPrice === 0) 
                    return `￥${this.seller.minPrice}起送`
                else return ''
            }
        },
        methods:{
             //计算当购物车商品为 0 时 隐藏遮罩层
            maskIsShow(){
                return this.isShow = false
            },
            //计算当购物车商品为 0 时 购物车列表不允许显示
            listIsShow(){
                if(this.totalCount <= 0) return 
                this.isShow = !this.isShow
            },
            //点击清空购物车
            clear(){
                this.$emit('clear')
            },
            //购物车列表滚动
            scroll(){
                this.$nextTick(()=>{
                    //进入此判断说明 cartsFoods 中 必定有数据回来 此时操作 dom 是安全的
                    this.contentScroll = new BetterScroll(this.$refs.content,{click:true})
                    this.contentScroll.refresh()
                })
            }
        },
        watch:{
            totalCount(){ //监听购物车中的商品数量 为 0 并且购物车列表已经打开的情况下，把它们隐藏
                if(this.totalCount <=0 && this.isShow) this.isShow = false
            },
        },
        mounted(){
            this.scroll()
        },
        components:{
            'carts-control':cartsControl
        }
    }
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
     @import "../../common/stylus/mix.styl"
    .cart
        flex 0 0 0;
        position fixed
        z-index 3
        bottom 0
        left 0
        height 46px
        width 100%
        background #141d27
        display flex
        .left
            flex 1
            height 100%
            display flex
            .icon
                position relative
                bottom 15px
                width 56px
                height 56px
                border-radius 50%
                background #141d27
                margin-left 12px
                margin-right 12px
                display flex
                justify-content center
                align-items center
                .logo
                    display flex
                    justify-content center
                    align-items center
                    width 44px
                    height 44px
                    border-radius 50%
                    background rgba(255,255,255,0.4)
                    &.active
                        background rgba(0,160,220,1)
                        i
                            color white
                    i
                        color rgba(255,255,255,0.4)
                .qipao
                    position absolute
                    right 0
                    top 5px
                    width 24px
                    height 16px
                    line-height 16px
                    border-radius 6px
                    background red
                    font-size 9px
                    font-weight 700
                    text-align center
            .totalPrice
                display flex
                justify-content center
                align-items center
                margin-right 12px
                font-size 16px
                line-height 24px
                font-weight 700
                color rgba(255,255,255,.4)
                &.active
                    color white
            .deliveryPrice
                display flex
                justify-content center
                align-items center
                font-size 14px
                line-height 24px
                font-weight 700
                color rgba(255,255,255,.4)
                padding-left 12px
                border-left 2px solid rgba(255,255,255,0.1)
        .right
            flex 0 0 105px
            height 100%
            background rgba(255,255,255,0.4)
            display flex
            justify-content center
            align-items center
            font-size 14px
            &.active
                background green
                span
                    color white
            span
                color rgba(255,255,255,0.6)
    .list
        max-height 255px
        position fixed
        z-index 2
        left 0
        bottom 45px
        width 100%
        background #f3f5f1
        padding-bottom 20px
        .header
            border-mix(rgba(7,17,27,.1))
            height 40px
            background #f3f5f7
            display flex
            justify-content space-between
            align-items center
            .cartText
                margin-left 18px ;
                color rgba(7,17,27,1);
                font-weight 800
                font-size 14px
            .clear
                margin-right 18px
                color rgba(0,160,220,1);
                font-weight 800
                font-size 14px

        .content
            max-height 195px
            overflow hidden
            .item
                border-mix(rgba(7,17,27,.1))
                display flex
                height 48px
                align-items center
                justify-content space-between
                .left
                    padding-left 18px
                .right
                    display flex
                    align-items center
                    padding-right  22px
                    .price_wrap
                        box-sizing border-box
                        display flex
                        align-items center
                        padding-bottom 2px
                        margin-right 12px
                        height 24px
                        line-height 24px
                        .price
                            color rgba(240,20,20,1)
                            font-size 12px
                            font-weight 700
    .mask
        position fixed
        z-index 1
        left 0
        right 0
        top 0
        bottom 0
        background rgba(7,17,27,.6)
        backdrop-filter blur(5px)
</style>
