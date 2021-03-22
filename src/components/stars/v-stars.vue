<template>
    <div class="stars">
        <div 
            v-for="(starType,index) in starArr" 
            :key="index" 
            class="star" 
            :class="[starType,starSize]"
            :style="{marginRight:marginRight +'px'}"
        >
        </div>

    </div>
</template>

<script>
    export default {
        name:'v-stars',
        props:{
            score:[String,Number],
            size:String,
            marginRight:[String,Number]
        },
        computed:{
            starSize(){
                return 'star' + this.size
            },
            starArr(){
                let arr = []
                let score = Math.floor(this.score*2)/2 //加工后数字要么是整数，要么是多了 0.5 的小数
                if(score > 5) score = 5
                let onNum = Math.floor(score) // on 满星的数量
                for(let i=1;i<=onNum;i++) {
                    arr.push('on')
                }
                let needHalf = score%1 === 0 ? false : true //判断是否需要添加 half 半颗星
                needHalf && arr.push('half')
                while(arr.length < 5) {
                    arr.push('off')   //剩下的都添加 off 无色的星
                }
                return arr
            }
        },
    }
</script>

<style  scoped lang="stylus">
    @import '../../common/stylus/mix.styl'
    .stars
        display inline-flex
        justify-content center
        align-items center
        margin 0 auto
        .star 
            background-size 100%
            background-repeat no-repeat
            &.star24
                width 10px
                height 10px
                margin-right 10px
                &:last-child
                    margin-right 0px !important
                &.on
                    background-img-mix(star24_on)
                &.half
                    background-img-mix(star24_half)
                &.off
                    background-img-mix(star24_off)
            &.star36
                width 15px
                height 15px
                margin-right 15px
                &:last-child
                    margin-right 0px !important
                &.on
                    background-img-mix(star24_on)
                &.half
                    background-img-mix(star24_half)
                &.off
                    background-img-mix(star24_off)
            &.star48
                width 20px
                height 20px
                margin-right 20px
                &:last-child
                    margin-right 0px !important
                &.on
                    background-img-mix(star24_on)
                &.half
                    background-img-mix(star24_half)
                &.off
                    background-img-mix(star24_off)
                    
</style>