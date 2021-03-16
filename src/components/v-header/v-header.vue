<template>
    <div class="v-header">
        <div class="header-top">
            <div class="left-avatar">
                <img class="avatar" src="https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg">
            </div>
            <div class="right-info">
                <div class="brand-info">
                    <i class="brand"></i>
                    <span>黄焖鸡米饭（汕头店）</span>
                </div>
                <div class="delivery"><span>蜂鸟专送/38分钟送达</span></div>
                <div class="discount">
                    <v-icon decrease_1="decrease_1"></v-icon>
                    <span>在线支付满28减5，满50减10</span>
                </div>
            </div>
            <div class="btn">
                <span class="count">5个</span>
                <span class="arrow_right layout-keyboard_arrow_right"></span>
            </div>
        </div>
        <div class="header-bottom">
            <i class="bulletin"></i>
            <span class="content">
                是以粥为特色的中式营养快餐，自2004年10月18日创立“嘉和一品”品牌至今，不断优化管理，积极创新，立足于“贴近百姓生活，服务千家万户”
            </span>
            <i class="arrow_right layout-keyboard_arrow_right arrow"></i>
        </div>
        <div class="bg">
            <img src="https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg" alt="">
        </div>
        <div class="cover">
            <div class="content-wrap">
                <div class="content">
                    <div class="title">黄焖鸡米饭（汕头店）</div>
                    <div class="star"></div>
                    <div class="mian-content">
                        <v-line><span class="discountInfoAndSellerBulletin">优惠信息</span></v-line>
                        <v-discount></v-discount>
                        <v-line><span class="discountInfoAndSellerBulletin">商家公告</span></v-line>
                        <div class="bulletinInfo">
                            <span>是以粥为特色的中式营养快餐，自2004年10月18日创立“嘉和一品”品牌至今，不断优化管理，积极创新，立足于“贴近百姓生活，服务千家万户。</span>
                            <span>是以粥为特色的中式营养快餐，自2004年10月18日创立“嘉和一品”品牌至今，不断优化管理，积极创新，立足于“贴近百姓生活，服务千家万户。</span>
                            <span>是以粥为特色的中式营养快餐，自2004年10月18日创立“嘉和一品”品牌至今，不断优化管理，积极创新，立足于“贴近百姓生活，服务千家万户。</span>
                            <span>是以粥为特色的中式营养快餐，自2004年10月18日创立“嘉和一品”品牌至今，不断优化管理，积极创新，立足于“贴近百姓生活，服务千家万户。</span>
                            <span>是以粥为特色的中式营养快餐，自2004年10月18日创立“嘉和一品”品牌至今，不断优化管理，积极创新，立足于“贴近百姓生活，服务千家万户。</span>
                            <span>是以粥为特色的中式营养快餐，自2004年10月18日创立“嘉和一品”品牌至今，不断优化管理，积极创新，立足于“贴近百姓生活，服务千家万户。</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cover-footer">
                <i class="layout-close"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import line from 'components/line/v-line.vue'
    import discount from 'components/discount/v-discount.vue'
    export default {
        name:'v-header',
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
                    span
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
            position absolute
            top 0px
            left 0px
            right 0px
            bottom 0px
            z-index -9
            width 100%
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
                font-size 10px
                font-weight 200
                overflow hidden
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
            width 100%
            min-height 100%
            &:after
                display block
                content ""
                clear both
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
                    .star
                        margin-top 16px
                        margin-bottom  28px
                        width 60%
                        height 24px
                        background-color yellow 
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