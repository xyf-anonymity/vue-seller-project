<template>
    <div class="line">
        <div class="one"></div>
        <slot></slot>
        <div class="three"></div>
    </div>
</template>

<script>
    export default {
        name:'v-line',
    }
</script>

<style  scoped lang="stylus">
    .line
        position relative
        display flex
        justify-content center
        align-items center
        width 100%
        margin-bottom 24px
        .one
            position absolute
            left 0px
            width 35%
            height 1px
            background-color rgba(255,255,255,0.5)
            margin-right 12px
        .three
            position absolute
            right 0px
            width 35%
            height 1px
            background-color rgba(255,255,255,0.5)
            margin-left 12px
</style>