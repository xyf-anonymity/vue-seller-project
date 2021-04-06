const koaRouter = require('koa-router')
const sellersFn = require('../routes/sellers')
const sellersRouter = new koaRouter({
    // prefix:"/api"
})

sellersFn(sellersRouter)

module.exports = sellersRouter