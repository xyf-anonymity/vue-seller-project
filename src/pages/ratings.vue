<template>
  <div class="ratings" ref='ratings'>
    <div class="ratings-content">
        <div class="overview">
            <div class="overview-left">
                <h1 class="score">{{seller.score}}</h1>
                <div class="title">综合评分</div>
                <div class="rank">高于周边商家{{seller.rankRate}}%</div>
            </div>
            <div class="overview-right">
                <div class="score-wrapper">
                    <span class="title">服务态度</span>
                    <div class="star">
                        <v-stars size="36" :score="seller.serviceScore" marginRight="8"></v-stars>
                    </div>
                    <span class="score">{{seller.serviceScore}}</span>
                </div>
                <div class="score-wrapper">
                    <span class="title">商品评分</span>
                    <div class="star">
                         <v-stars size="36" :score="seller.foodScore" marginRight="8"></v-stars>
                    </div>
                    <span class="score">{{seller.foodScore}}</span>
                </div>
                <div class="delivery-wrapper">
                    <span class="title">送达时间</span>
                    <span class="delivery">{{seller.deliveryTime}}分钟</span>
                </div>
            </div>
        </div>
        <v-split></v-split>
        <v-select 
            :ratings="ratings"
            :ratingType="ratingType" 
            :isShowText="isShowText"
            @changeRatingType='changeRatingType'
            @switchIsShowText="switchIsShowText"
        >
        </v-select>
        <div class="rating-wrapper">
            <ul>
                <li class="rating-item" v-for="(rating,index) in ratingsFilter" :key="index">
                    <div class="avatar">
                        <img width="28" height="28" :src="rating.avatar">
                    </div>
                    <div class="content">
                        <h1 class="name">{{rating.username}}</h1>
                        <div class="star-wrapper">
                            <v-stars size="24" :score="rating.score" marginRight="4"></v-stars>
                            <span class="delivery" v-show="rating.deliveryTime">{{rating.deliveryTime}}分钟送达</span>
                        </div>
                        <p class="text">{{rating.text}}</p>
                        <div class="recommend">
                            <span class="iconfont" :class="rateType(rating.rateType)"></span>
                            <ul>
                                <li 
                                    class="recommend_item"
                                    v-for="(item,index) in rating.recommend"
                                    :key="index"
                                >
                                    {{item}}
                                </li>
                            </ul>
                        </div>
                        <div class="time">{{rating.rateTime | dateFormat}}</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>


<script>
import {GETSELLER,GETRATINGS} from 'store/mutations_type.js'
import {mapState,mapActions} from 'vuex'
import BetterScroll from 'better-scroll' 
import select from 'components/select/v-select.vue'
export default {
    name:'ratings',
    data(){
        return {
            ratingType:'all', // 'all':全部  'recommend':推荐  'dislike':吐槽
            isShowText:false  //默认看包含无内容的评价
        }
    },
    computed:{
        ...mapState(['seller','ratings']),
        //计算用户对商家的评论类型
        rateType(){
            return function(rateType){
                if(rateType === 0)  return 'layout-thumb_up'
                if(rateType === 1)  return 'layout-thumb_down'
            }
        },
        //根据评论的类型过滤 ratings 以展示相应的用户评论
        ratingsFilter(){
            let flag
            if(this.ratingType === 'all') flag = 2
            if(this.ratingType === 'recommend') flag = 0
            if(this.ratingType === 'dislike') flag = 1
            return this.ratings.filter((rating)=>{
                return (flag === 2 || rating.rateType ===  flag) 
                    && ( !this.isShowText || rating.text.length > 0)
            })
        }
    },
    methods:{
        ...mapActions([GETSELLER,GETRATINGS]),
        //变更 ratingType 引起 select组件中 active高亮标签的变化
        changeRatingType(type){
            this.ratingType = type
        },
        //是否只看有内容的评价
        switchIsShowText(){
            this.isShowText = !this.isShowText
        }
    },
    components:{
        'v-select':select
    },
    async mounted(){
        await this[GETSELLER](GETSELLER)
        await this[GETRATINGS](GETRATINGS)
        this.$nextTick(()=>{
            this.ratingsScroll = new BetterScroll(this.$refs.ratings,{click:true})
        })
    }
}
</script>

<style scoped lang="stylus">
    @import '../common/stylus/mix.styl'
  .ratings
    position absolute
    top 1px
    bottom 0
    left 0
    width 100%
    overflow hidden
    background #fff
    .ratings-content
        zoom 1
        .overview
            display flex
            padding 0px 0
            .overview-left
                flex 0 0 137px
                padding 6px 0
                width 137px
                border-right 1px solid rgba(7, 17, 27, 0.1)
                text-align center
                @media only screen and (max-width: 320px)
                    flex  0 0 120px
                    width 120px
                .score
                    margin-bottom 6px
                    line-height 28px
                    font-size 24px
                    color rgb(255, 153, 0)
                .title
                    margin-bottom 8px
                    line-height 12px
                    font-size 12px
                    color rgb(7, 17, 27)
                .rank
                    line-height 10px
                    font-size 10px
                    color rgb(147, 153, 159)
            .overview-right
                flex 1
                padding 6px 0 6px 24px
                @media only screen and (max-width: 320px)
                    padding-left 6px
                .score-wrapper
                    display flex
                    align-items center
                    margin-bottom 8px
                    font-size 0
                    .title
                        display inline-block
                        line-height 18px
                        vertical-align top
                        font-size 12px
                        color rgb(7, 17, 27)
                    .star
                        display inline-block
                        margin 0 12px
                        vertical-align: top
                    .score
                        display inline-block
                        line-height 18px
                        vertical-align top
                        font-size 12px
                        color rgb(255, 153, 0)
                .delivery-wrapper
                    font-size 0
                    .title
                        line-height 18px
                        font-size 12px
                        color rgb(7, 17, 27)
                    .delivery
                        margin-left: 12px
                        font-size: 12px
                        color: rgb(147, 153, 159)
        .rating-wrapper
            padding: 0 18px
            .rating-item
                border-mix(rgba(7, 17, 27, 0.1))
                display: flex
                padding: 18px 0 
                .avatar
                    flex: 0 0 28px
                    width: 28px
                    margin-right: 12px
                    img
                        border-radius: 50%
                .content
                    position: relative
                    flex: 1
                    .name
                        margin-bottom: 4px
                        line-height: 12px
                        font-size: 10px
                        color: rgb(7, 17, 27)
                    .star-wrapper
                            margin-bottom: 6px
                            font-size: 0
                        .star
                            display: inline-block
                            margin-right: 6px
                            vertical-align: top
                        .delivery
                            display: inline-block
                            vertical-align: top
                            line-height: 12px
                            font-size: 10px
                            color: rgb(147, 153, 159)
                            margin-left 6px
                    .text
                        margin-bottom: 8px
                        line-height: 18px
                        color: rgb(7, 17, 27)
                        font-size: 12px
                    .recommend
                        position relative
                        display inline-block
                        align-items center
                        line-height: 16px
                        font-size: 0
                        .layout-thumb_up, .layout-thumb_down, .item
                            position absolute
                            top 4px
                            left 0px
                            display: inline-block
                            // margin: 0 8px 4px 0
                            font-size: 9px
                        .layout-thumb_up
                            color: rgba(0,160,220,1)
                        .layout-thumb_down
                            color: rgb(147, 153, 159)
                        .item
                            padding: 0 6px
                            border: 1px solid rgba(7, 17, 27, 0.1)
                            border-radius: 1px
                            color: rgb(147, 153, 159)
                            background: #fff
                        & > ul
                            display inline-flex
                            flex-wrap wrap
                            width 100%
                            margin-left 12px
                            zoom 1
                            .recommend_item
                                padding-left 6px
                                padding-right 6px
                                margin-bottom 5px
                                margin-left 8px
                                font-size 9px
                                line-height 16px
                                color rgba(147,153,159,1)
                                border 1px solid  rgba(7,17,27,0.1)
                                border-radius 2px
                    .time
                        position: absolute
                        top: 0
                        right: 0
                        line-height: 12px
                        font-size: 10px
                        color: rgb(147, 153, 159)
</style>

