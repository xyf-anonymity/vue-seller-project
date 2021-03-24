<template>
    <div class="goods">
        <div class="goods-body">
            <div class="left" ref="left">
                <ul class="goods-navs"  ref="leftScroll">
                    <li 
                        class="goods-navs-item" 
                        :class="{active:currentActive === index}"
                        v-for="(goodsItem,index) in goods" 
                        :key="index"
                        @click="getIndexScroll(index)"
                    >
                        <v-icon class="icon" imgSize="3" :type="goodsItem.type" v-show="goodsItem.type >= 0"></v-icon>
                        <span class="name">{{goodsItem.name}}</span>
                    </li>
                </ul>
            </div>
            <div class="right" ref="right">
                <div class="rightScroll" ref="rightScroll">
                    <ul 
                        class="goods-list" 
                        v-for="(item,index) in goods" 
                        :key="index"
                    >
                        <li class="goods-list-item" >
                            <div class="categoryName">{{item.name}}</div>
                            <ul class="foods">
                                <li class="foods-item" v-for="(food,index) in item.foods" :key="index">
                                    <v-food :food="food"></v-food>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>   
            </div>
        </div>
        <div class="goods-footer"><v-carts :cartsFoods="cartsFoods" @clear="clear"></v-carts></div>
    </div>
</template>

<script>
    import BetterScroll from 'better-scroll'
    import {mapState,mapActions} from 'vuex'
    import {GETGOODS} from 'store/mutations_type.js'
    import food from 'components/food/v-food.vue'
    import carts from 'components/carts/v-carts.vue'
    export default {
        name:'goods',
        data(){
            return {
                heightArray:[],
                scrollHeight:0,
                food:{}
            }
        },
        computed:{
            ...mapState(['goods']),
            //计算高亮
            currentActive(){
                let index = 0
                let oldIndex
                //根据滑动的高度计算出处于哪个分类位置下，找出heightArray数组中对应的index
                //把左侧导航的节点装在一个数组里，再用index找出需要滚动到的节点
                index = this.heightArray.findIndex((item,index,arr)=>{
                   return (this.scrollHeight >= item && this.scrollHeight < arr[index+1])
                })
                if(index !== oldIndex) {
                    oldIndex = index
                    let leftScrollChildrenNodes = this.$refs.leftScroll && this.$refs.leftScroll.children
                    this.leftScroll && this.leftScroll.scrollToElement(leftScrollChildrenNodes[index],300)
                }
                return index
            },
            //计算添加到购物车的商品
            cartsFoods(){
                let cartsFoodArr = []
                this.goods.forEach((goodsItem)=>{
                    goodsItem.foods.forEach((food)=>{
                        if(food.count && food.count > 0) cartsFoodArr.push(food)
                    })
                })
                return cartsFoodArr
            }
        },
        methods:{
            ...mapActions([GETGOODS]),
            //点击左边的分类导航获取其 index 依靠这个索引从heightArray数组中挑选滑动到右边指定位置的高度
            getIndexScroll(index){
                this.rightScroll.scrollTo(0,-this.heightArray[index],300) //点左右边滑动
            },
            //初始化高度数组
            initialHeightArray(){
                //在vue中直接操作dom是不安全的，因为操作dom的代码可能数据还未回来，界面还未更新的情况下就先执行了
                //因此如果想在vue中操作dom，可以把操作dom的代码写在 vm.$nextTick(()=>{})的回调中，
                //该回调会在数据回来并且界面完全渲染完的时候放入队列中执行
                this.$nextTick(()=>{  
                    let height = 0
                    this.heightArray.push(height)
                    //获取每一个可与左侧导航相互标识的dom节点组成的数组，把每一个节点遍历获取其高度放入heightArray数组中
                    let rightScrollChildrenNodes = this.$refs.rightScroll.children
                    rightScrollChildrenNodes.forEach((item)=> {
                        height += item.offsetHeight
                        this.heightArray.push(height)
                    })
                })  
            },
            //初始化屏幕滚动的注册
            initialScroll(){
                this.$nextTick(()=>{
                    this.leftScroll = new BetterScroll(this.$refs.left,{click:true})
                    this.rightScroll = new BetterScroll(this.$refs.right,{click:true,probeType:3})
                    this.rightScroll.on("scroll",({y})=>{
                        this.scrollHeight = Math.abs(y) //计算出右侧滚动的高度
                        })
                })
            },
            //点击添加商品到购物车计算其购买数量
            add(food){
                if(food.count > 0) food.count++ 
                else this.$set(food,'count',1)
            },
            //点击减少添加到购物车的商品
            remove(food){
                if(food.count > 0) food.count-- 
            },
            //清空购物车即把 count 属性都归 0
            clear(){
                this.goods.forEach((goodItem)=>{
                    goodItem.foods.forEach((food)=>{
                        food.count = 0
                    })
                })
            }

        },
        async mounted(){
            await this[GETGOODS](GETGOODS)
            this.initialScroll() 
            this.initialHeightArray() 
            this.$bus.$on('add',this.add)
            this.$bus.$on('remove',this.remove)
        },
        components:{
            'v-food':food,
            'v-carts':carts
        }
    }
</script>

<style  scoped lang="stylus">
    @import '../common/stylus/mix.styl'
    .goods
        display flex
        flex-direction column
        justify-content center
        width 100%
        height 100%
        .goods-body
            overflow hidden
            display flex
            align-items  center
            flex 1
            flex-shrink 0
            .left 
                width 80px
                height 100%
                background-color #f3f5f7
                .goods-navs
                    overflow hidden
                    display flex
                    flex-direction column
                    justify-content center
                    align-items center
                    .goods-navs-item
                        display inline-flex
                        justify-content center
                        align-items center
                        // width 56px
                        width 100%
                        height 54px
                        border-mix(rgba(7,17,27,0.1))
                        border-none(0px)
                        &:after
                            width 70%
                        &.active
                            background-color white
                        .icon
                            margin-right 5px
                        .name
                            font-size 12px
                            color rgba(24,20,20,1)
                            font-weight 200
                            
            .right
                flex 1
                flex-shrink 0
                height 100%
                .goods-list
                    zoom 1
                    .goods-list-item
                        zoom 1
                        .categoryName
                            padding-left 14px
                            height 26px
                            background #f3f5f7
                            font-size 12px
                            line-height 26px
                            color rgba(147,153,159,1)
                            border-left 3px solid #d9dde1
                        .foods
                            zoom 1
                            .foods-item
                                overflow hidden
                                border-mix(rgba(7,17,27,0.1))
                                box-sizing border-box
                                padding-top 18px
                                padding-bottom 18px
                                margin-left 18px
                                margin-right 18px
                                height 110px
                                border-none(0px)
        .goods-footer
            height 46px
</style>