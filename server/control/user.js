const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userModel = require('../db/model/userModel')
const {Key,expiresIn} = require('../config')
module.exports = {
    //注册用户
    async addUser(ctx) {
        ctx.verifyParams({  //参数检验
            name: {type:'string', required:true},
            password: { type: 'string', required: true },
            age: { type: 'number', required: true },
            gender: { type: 'string', required: false },
            avatarUrl:{type:'string',required:false},
            phone: { type: 'string', required: false },
            education:{ type: 'array', itemType:'object',required: false },
        })
        const result = ctx.request.body //获取用户名和注册的密码

        //检查用户名是否已经存在
        const userData = await userModel.find({ name: result.name })
        if (userData.length > 0) {
            ctx.throw(409,'用户已经存在')
        }
        
        //对明文密码进行加密
        const salt = bcrypt.genSaltSync(10)
        const pwd = bcrypt.hashSync(result.password, salt) //加密后的密码
        result.password = pwd

        //把用户名和加密后的密码存入数据库
        let user = await userModel.create(result)  
        ctx.body = await userModel.findById(user._id) 
    },
    //用户登录
    async login(ctx) {
        ctx.verifyParams({  //参数检验
            name: { type: 'string', required: true },
            password: { type: 'string', required: true },
        })
        const result = ctx.request.body
        const user = await userModel.find({ name: result.name }).select("+password")
        if (user <= 0) ctx.throw(404, '该用户不存在') //检查该用户名有没有注册
        const flag = bcrypt.compareSync(result.password, user[0].password) //验证密码正不正确
        if (!flag) ctx.throw(401, '密码错误')
        const token = jwt.sign({_id:user[0]._id,name:user[0].name},Key,{expiresIn}) //生成 token 返回给用户
        ctx.body = {
            name:user[0].name,
            token
        }
    },
    //上传头像
    async avatar(ctx) {
        //获取上传头像的用户 id
        const {id} = ctx.params
        //获取头像的文件名
        const { path } = ctx.request.files.avatar
        let avatarName = path.split("\\").pop()

        //得到头像的Url
        let avatarUrl = `http://localhost:8080/imgs/${avatarName}`

        //把该用户的头像Url添加到数据库中并返回头像Url
        await userModel.findByIdAndUpdate(id,{avatarUrl},{useFindAndModify: false})
        ctx.body = {
            avatarUrl
        }
    },
    //获取所有用户的列表(分页)
    async getUserAll(ctx) {
        let page = +ctx.query.page || 1 // 想要看第几页,未指定或0则取默认值 
        let num = +ctx.query.num || 10  // 每页想看几条，未指定或0则取默认值 
        let q = ctx.query.q || "" //模糊搜索用户名
        //如果为负数，则取绝对值
        page = Math.abs(page)
        num = Math.abs(num)
        
        const result = await userModel.find({name:new RegExp(q)}).skip((page-1)*num).limit(num)
        ctx.body = result
    },
    //通过 id 获取用户信息
    async getUserById(ctx) {
        //先决条件
        const { id } = ctx.params
        const result = await userModel.findById(id)
        ctx.body = result
    },
    //通过 id 更新用户信息
    async updateUserById(ctx) {
        ctx.verifyParams({  //参数检验
            name: {type:'string', required:false},
            password: { type: 'string', required: false },
            age: { type: 'number', required: false },
            gender: { type: 'string', required: false },
            avatarUrl:{type:'string',require:false},
            phone: { type: 'string', required: false },
            education:{ type: 'array', itemType:'object',required: false },
        })

        const { id } = ctx.params //获取要更新用户数据的 id
        const result = ctx.request.body //获取更新的用户数据

        //验证修改的用户名是否与其他重复
        const data = await userModel.find({ name: result.name })
        if (data.length > 0) ctx.throw(409, "用户名被占用")
        
        //更新数据
        const newUserInfo = await userModel.findByIdAndUpdate(id,result,{new:true,useFindAndModify:false})
        ctx.body = newUserInfo
    },
    //通过 id 删除用户
    async delUserById(ctx) {
        const { id } = ctx.params  //获取要删除的用户 id
        await userModel.findByIdAndRemove(id, { useFindAndModify: false })
        ctx.status = 204
        ctx.body = ""
    }
}