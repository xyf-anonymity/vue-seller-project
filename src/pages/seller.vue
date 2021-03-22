<template>
<div>
    <div class="shop-info" ref="shopInfo">
        <div class="info-content">
            <section class="section">
                <h3 class="section-title">配送信息</h3>
                <div class="delivery">
                    <div>
                        <span class="delivery-icon">{{seller.description}}</span>
                        <div>由饿了么平台提供配送，约{{seller.minPrice}}分钟送达，距离{{seller.distance}}</div>
                    </div>
                    <div class="delivery-money">配送费￥{{seller.deliveryPrice}}</div>
                </div>
            </section>
            <v-split></v-split>
            <section class="section">
                <h3 class="section-title">活动与服务</h3>
                <div class="activity" v-if="seller.supports">
                    <div class="activity-item activity-green">
                        <span class="content-tag">
                            <span class="mini-tag">首单</span>
                        </span>
                        <span class="activity-content">{{seller.supports[0].content}}</span>
                    </div>
                    <div class="activity-item activity-red">
                        <span class="content-tag">
                            <span class="mini-tag">满减</span>
                        </span>
                        <span class="activity-content">{{seller.supports[1].content}}</span>
                    </div>
                    <div class="activity-item activity-orange">
                        <span class="content-tag">
                            <span class="mini-tag">特价</span>
                        </span>
                        <span class="activity-content">{{seller.supports[2].content}}</span>
                    </div>
                </div>
            </section>
            <v-split></v-split>
            <section class="section">
                <h3 class="section-title">商家实景</h3>
                <div class="pic-wrapper" ref="picWrapper">
                    <ul class="pic-list">
                        <li 
                            class="pic-item" v-for="(pic,index) in seller.pics" 
                            :key="index" 
                            @click.stop="showPics(index)"
                        >
                            <img width="120" height="90" :src="pic">
                        </li>
                    </ul>
                </div>
            </section>
            <v-split></v-split>
            <section class="section">
                <h3 class="section-title">商家信息</h3>
                <ul class="detail">
                    <li>
                        <span class="bold">品类</span>
                        <span>{{seller.category}}</span>
                    </li>
                    <li>
                        <span class="bold">商家电话</span>
                        <span>{{seller.phone}}</span>
                    </li>
                    <li>
                        <span class="bold">地址</span>
                        <span>{{seller.address}}</span>
                    </li>
                    <li>
                        <span class="bold">营业时间</span>
                        <span>{{seller.workTime}}</span>
                    </li>
                </ul>
            </section>
        </div>
    </div>
    <transition name="showPics">
        <div 
            class="showPics" 
            v-show="isShowPics" 
            @click="isShowPics=false"
            ref="showPics"
        >
            <ul class="picWarp" ref="picWarp">
                <li class="pic" v-for="(pic,index) in seller.pics" :key="index">
                    <img :src="pic" @click="isShowPics=false">
                </li>
            </ul>
        </div>
    </transition>
</div>
</template>



<script>
    import BetterScroll from 'better-scroll'
    import {mapActions,mapState} from 'vuex'
    import {GETSELLER} from 'store/mutations_type.js'
    export default {
        name:'seller',
        data(){
            return {
               isShowPics:false   
            }
        },
        computed:{
            ...mapState(['seller'])
        },
        methods:{
            ...mapActions([GETSELLER]),
            showPics(index){
                this.isShowPics = true
                this.index = index
            },
            picScroll() {
                this.$nextTick(()=>{
                    this.showPicsScroll = new BetterScroll(this.$refs.showPics,{click:true,scrollX:true,probeType:3})
                    const picWarpChildrenNodes = this.$refs.picWarp.children
                    this.showPicsScroll.scrollToElement(picWarpChildrenNodes[this.index])
                })
            }
        },
        watch:{
            isShowPics(){
                if(this.isShowPics) this.picScroll()
                if(!this.isShowPics) this.showPicsScroll = null     
            }
        },
        async mounted(){
            await this[GETSELLER](GETSELLER)
            this.$nextTick(()=>{
                this.shopInfoScroll = new BetterScroll(this.$refs.shopInfo,{click:true})
                this.picWrapperScroll = new BetterScroll(this.$refs.picWrapper,{click:true,scrollX:true})
            })
        }
    }
</script>

<style scoped lang="stylus" >
@import "../common/stylus/mix.styl"
.shop-info
    position: absolute
    top: 1px
    bottom: 0
    left: 0
    width: 100%
    height 100%
    background: #fff;
    overflow: hidden
    .section
        padding 16px 14px 14px
        font-size 16px
        background-color #fff
        color #666
        border-bottom 1px solid #eee
        position relative
        .section-title
            color #000
            font-weight 700
            line-height 16px
            > .iconfont
                float right
                color #ccc
        .delivery
            margin-top 16px
            font-size 13px
            line-height 18px
            .delivery-icon
                width 65px
                font-size 11px
                margin-right 10px
                margin-bottom 5px
                display inline-block
                text-align center
                color #fff
                background-color #0097ff
                padding 1px 0
                border-radius 4px
            .delivery-money
                margin-top 5px
        .activity
            margin-top 16px
            .activity-item
                margin-bottom 12px
                display flex
                font-size 13px
                align-items center
                &.activity-green
                    .content-tag
                        background-color rgb(112, 188, 70)
                &.activity-red
                    .content-tag
                        background-color rgb(240, 115, 115)
                &.activity-orange
                    .content-tag
                        background-color: rgb(241, 136, 79)
                .content-tag
                    display inline-block
                    border-radius 2px
                    width 36px
                    height: 18px
                    margin-right 10px
                    color #fff
                    font-style normal
                    position relative
                    .mini-tag
                        position absolute
                        left 0
                        top 0
                        right -100%
                        bottom -100%
                        font-size 24px
                        transform scale(.5)
                        transform-origin 0 0
                        display flex
                        align-items center
                        justify-content center
        .pic-wrapper
            width: 100%
            overflow: hidden
            white-space: nowrap
            margin-top 16px
            .pic-list
                display inline-block
                font-size: 0
                .pic-item
                    display: inline-block
                    margin-right: 6px
                    width: 120px
                    height: 90px
                    &:last-child
                        margin: 0

        .detail
            margin-bottom -16px
            & > li
                border-mix(#ddd)
                display flex
                justify-content space-between
                align-items center
                margin-right -10px
                padding 16px 12px 16px 0
                line-height 16px
                font-size 13px
                > .bold
                    font-weight 700
                    color #333
                &:last-child
                    border-none(0px)
.showPics
    display inline-flex
    flex-direction column
    align-items center
    justify-content center
    position fixed
    overflow: hidden
    white-space: nowrap
    top 0px
    bottom 0px
    left 0px
    right 0px
    z-index 9
    width 100%
    backdrop-filter blur(6px)
    background-color rgba(7,17,27,0.5)
    .picWarp
        display inline-flex
        justify-content center
        align-items center
        .pic
            margin-left 10px
            margin-right 10px
            width 400px
            height 350px
            & > img
                width 100%
                height 100%
    .picCount
        position absolute
        bottom  100px
        font-size 18px
        color white
    </style>
