<template>
    <div class="v-header">
        <div class="header-top">
            <div class="left-avatar">
                <img class="avatar" :src="seller.avatar">
            </div>
            <div class="right-info">
                <div class="brand-info">
                    <i class="brand"></i>
                    <span>{{seller.name}}</span>
                </div>
                <div class="delivery"><span>{{seller.description}}/{{seller.deliveryTime}}分钟送达</span></div>
                <div class="discount" v-if="seller.supports&&seller.supports[0]">
                    <v-icon :type="seller.supports[0].type" imgSize="1"></v-icon>
                    <span class="content">{{seller.supports[0].content}}</span>
                </div>
            </div>
            <div class="btn" @click="isShowCover=true" v-if="seller.supports">
                <span class="count">{{seller.supports.length}}个</span>
                <span class="arrow_right layout-keyboard_arrow_right"></span>
            </div>
        </div>
        <div class="header-bottom" @click="isShowCover=true">
            <i class="bulletin"></i>
            <span class="content">
                {{seller.bulletin}}
            </span>
            <i class="arrow_right layout-keyboard_arrow_right arrow"></i>
        </div>
        <div class="bg">
            <img :src="seller.bgImg" alt="">
        </div>
        <transition name="cover">
            <div class="cover" v-show="isShowCover">
                <div class="content-wrap">
                    <div class="content">
                        <div class="title">{{seller.name}}</div>
                        <div class="scoreStars" v-if="seller.score">
                            <v-stars :score="seller.score" size="48"></v-stars>
                        </div>
                        <div class="mian-content">
                            <v-line><span class="discountInfoAndSellerBulletin">优惠信息</span></v-line>
                            <v-discount></v-discount>
                            <v-line><span class="discountInfoAndSellerBulletin">商家公告</span></v-line>
                            <div class="bulletinInfo">
                                <span>{{seller.bulletin}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cover-footer">
                    <i class="layout-close" @click="isShowCover=false"></i>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import line from 'components/line/v-line.vue'
    import discount from 'components/discount/v-discount.vue'
    export default {
        name:'v-header',
        data(){
            return {
                isShowCover:false
            }
        },
        computed:{
            ...mapState(['seller'])
        },
        components:{
            'v-line':line,
            'v-discount':discount
        }
    }
</script>

<style  scoped lang="stylus">
    @import '../../common/stylus/mix.styl'
    @import '../../common/stylus/extend.styl'
    .v-header
        width 100%
        height 100%
        position relative
        & > .header-top
            position relative
            display flex
            padding 24px 12px 18px 24px
            background-color rgba(7,17,27,0.5)
            .left-avatar
                width 64px
                height 64px
                border-radius 4px
                background-color purple
                .avatar
                    width 100%
                    height 100% 
            .right-info
                margin-left 16px
                color rgba(255,255,255,1)
                .brand-info
                    display flex
                    margin-top 2px
                    margin-bottom 8px
                    font-size 16px
                    .brand  
                        background-img-mix(brand)
                        width 30px
                        height 18px
                        display inline-block
                        background-repeat no-repeat
                        background-size 100%
                    span
                        margin-left 6px
                .delivery
                    font-size 12px
                .discount
                    display flex
                    margin-top 10px
                    margin-bottom 2px
                    font-size 10px
                    & > .content
                        overflow hidden
                        text-overflow ellipsis
                        white-space nowrap
                        width 190px
                        margin-left 4px
            .btn
                display flex
                justify-content space-around
                position absolute
                right 12px
                bottom 18px
                width 48px
                height 24px
                border-radius 12px
                background-color rgba(0,0,0,0.2)
                font-size 10px
                color rgba(255,255,255,1)
                font-weight 200
                line-height 24px
                .count
                    margin-left 5px
                .arrow_right
                    margin-right 4px
                    line-height 24px
        & > .bg
            overflow hidden
            position absolute
            top 0px
            left 0px
            right 0px
            bottom 0px
            z-index -9
            width 100%
            height 100%
            filter blur(3px)
            img
                width 100%
                height 100%
        & > .header-bottom
            box-sizing border-box
            position relative
            padding-left 38px
            padding-right 12px
            display flex
            align-items center
            justify-content space-around
            height 28px
            width 100%
            color white
            background-color rgba(0,0,0,0.6)
            .bulletin
                background-img-mix(bulletin)
                position absolute
                top 8px
                left 12px
                margin-right 8px
                width 22px
                height 12px
                display inline-block
                background-repeat no-repeat
                background-size 100%
            .content
                overflow hidden
                font-size 10px
                font-weight 200
                text-overflow ellipsis
                white-space nowrap
            .arrow 
                margin-left 4px
     & > .cover
        box-sizing border-box
        position fixed
        top 0px
        right 0px
        bottom 0px
        left 0px
        z-index 9
        margin auto
        overflow auto
        backdrop-filter blur(6px)
        background-color rgba(7,17,27,0.5)
        .content-wrap
            @extend .clearfix
            width 100%
            min-height 100%
            & > .content
                box-sizing border-box
                display flex
                flex-direction column
                justify-content center
                align-items center
                width 100%
                padding-top 64px
                padding-bottom 64px
                & > .title
                        font-size 16px
                        font-weight 700
                        color rgba(255,255,255,1)
                        line-height 16px    
                    .scoreStars
                        margin-top 16px
                        margin-bottom  28px
                    .mian-content
                        box-sizing border-box
                        display flex
                        flex-direction column
                        // justify-content space-around
                        align-items center
                        width 80%
                        .discountInfoAndSellerBulletin
                            font-size 14px
                            font-weight 700
                            color white
                        .bulletinInfo
                            padding-left 12px
                            padding-right 12px
                            padding-bottom 12px
                            font-size 12px
                            font-weight 200
                            color white
                            line-height 24px
        .cover-footer
            display flex
            justify-content center
            margin-top -64px
            width 100%
            height 64px
            font-size 32px
            color rgba(255,255,255,0.5)
</style>