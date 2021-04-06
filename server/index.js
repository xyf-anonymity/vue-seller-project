const path = require('path')
const fs = require('fs')
const Koa = require('koa')
// const cors = require('koa-cors')
const requireDirectory = require('require-directory')
const koaBody = require('koa-body')
const parameter = require('koa-parameter')
const error = require('koa-json-error')
const serve = require('koa-static')
const _ = require('lodash')
const app = new Koa()

//cors 解决跨域
// app.use(cors())

//让服务器提供静态资源服务
app.use(serve(__dirname + '/public'))

//连接数据库
require('./db')

//用于 koa 处理错误信息
let options = {
    // Avoid showing the stacktrace in 'production' env
    postFormat: (e, obj) => process.env.NODE_ENV === 'production' ? _.omit(obj, 'stack') : obj
}
app.use(error(options))

//解析请求体参数 body 的数据 
app.use(koaBody({
    multipart: true,
    formidable: {
        uploadDir:path.join(__dirname,"/public/imgs"),
        keepExtensions:true
    }
}))

//参数检验 ctx 上会多一个 verifyParams(key:rule)
parameter(app)

//koa 路由的批量注册
hash = requireDirectory(module,'./routers', {
    visit: function (router) {
        app.use(router.routes()).use(router.allowedMethods())
    }
})

// 统一处理 404 请求
app.use(async (ctx) => {
    if (ctx.status === 404) {
        //进入此判断说明浏览器地址栏中的 URL 并未命中任何后端路由
        //则此 URL 极有可能是前端的路由，在这种情况下，服务器给前端返回静态资源服务器中的 index.html
        let resource = path.join(__dirname, '/public/index.html')
        ctx.set("Content-Type","text/html")
        ctx.body = fs.createReadStream(resource)
    }
})

app.listen(8080, 'localhost', () => {
    console.log('服务器启动在：http://localhost:8080')
})