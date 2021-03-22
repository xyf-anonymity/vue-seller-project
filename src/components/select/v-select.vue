<template>
    <div class="ratings-filter">
        <div class="rating-type border-1px">
            <span       
                class="block" 
                :class="{active:ratingType === 'all'}"
                @click="changeRatingType('all')"
            >
                全部
                <span class="count">{{ratings.length}}</span>
            </span>
            <span 
                class="block" 
                :class="{active:ratingType === 'recommend'}"
                @click="changeRatingType('recommend')"
            >
                推荐
                <span class="count">{{recommendCount}}</span>
            </span>
            <span 
                class="block" 
                :class="{active:ratingType === 'dislike'}"
                @click="changeRatingType('dislike')"
            >
                吐槽
                <span class="count">{{dislickCount}}</span>
            </span>
        </div>
        <div class="switch on">
            <span class="iconfont layout-check_circle" :class="{active:isShowText}" @click="switchIsShowText"></span>
            <span class="text">只看有内容的评价</span>
        </div>
    </div>
</template>


<script>
    export default {
        name:'v-select',
        props:{
            ratings:Array,
            ratingType:String,
            isShowText:Boolean,
        },
        computed:{
             //计算有多少个用户推荐
            recommendCount(){return this.ratings.filter(rating=>rating.rateType === 0).length},
             //计算有多少个用户吐槽
            dislickCount(){return this.ratings.filter(rating=>rating.rateType === 1).length}
        },
        methods:{
            // 点击高亮
            changeRatingType(type){
                this.$emit('changeRatingType',type)
            },
            //点击是否只看有内容的评论
            switchIsShowText(){
                this.$emit('switchIsShowText')
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/mix.styl"
    .ratings-filter
        .rating-type
            padding: 18px 0
            margin: 0 18px
            border-mix(rgba(7, 17, 27, 0.1))
            font-size: 0
            .block
                display: inline-block
                padding: 8px 12px
                margin-right: 8px
                line-height: 16px
                border-radius: 1px
                font-size: 12px
                color: rgb(77, 85, 93)
                background: rgba(77, 85, 93, 0.2)
                &.active
                    background: green
                    color: #fff
                .count
                    margin-left: 2px
                    font-size: 8px
        .switch
            padding: 12px 18px
            line-height: 24px
            border-bottom: 1px solid rgba(7, 17, 27, 0.1)
            color: rgb(147, 153, 159)
            font-size: 0
            &.on
                .active
                    color: green
                .layout-check_circle
                    display: inline-block
                    vertical-align: top
                    margin-right: 4px
                    font-size: 24px
                .text
                    display: inline-block
                    vertical-align: top
                    font-size: 12px
</style>

