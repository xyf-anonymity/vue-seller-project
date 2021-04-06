const jwt = require('jsonwebtoken')
const auth = require('basic-auth') //请求头的 Authorization 中的 Basic Auth 解析器
const userModel = require('../db/model/userModel')
const { tokenKey } = require('../config')

module.exports = {
    //检查 token 即登录信息有没有过期
    async checkLogin(ctx, next) {
        try {
            // const token = ctx.request.headers.authorization
            const token = auth(ctx.request).name //token 存放于 Basic Auth 的情况
            const user = jwt.verify(token, tokenKey)
            if(user) ctx.state.user = user //将用户信息放置到 state 属性中，以便该路由下一个中间件使用
        } catch (error) {
            ctx.throw(403,'拒绝访问，登录信息过期，请重新登录')  //ctx 抛错后下面的代码就不会执行
        }
        await next() //执行此代码，说明存在该用户以执行下一个中间件
    },
    //检查上传头像用户是否为登录用户
    async access(ctx, next) {
        const { user } = ctx.state
        const { id } = ctx.params
        if (user._id === id) await next() //上传头像的 id 是否是该登录用户的 id 是的话执行下个中间件上传
        else ctx.throw(412,"id参数有问题")
    }
}