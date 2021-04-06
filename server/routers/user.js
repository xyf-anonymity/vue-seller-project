const KoaRouter = require('koa-router')
const userFn = require('../routes/user')
const userRouter = new KoaRouter({
    // prefix:"/user"
})

userFn(userRouter)

module.exports = userRouter
