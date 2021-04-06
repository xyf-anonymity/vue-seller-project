const { addUser,login,avatar,getUserAll,getUserById,updateUserById,delUserById} = require('../control/user')
const {checkLogin,access} = require('../middleware/user')
module.exports = function (userRouter) {
    //注册用户
    userRouter.post('/addUser', addUser)
    //用户登录
    userRouter.post('/login', login)
    //根据用户的id上传该用户头像
    userRouter.post('/:id/avatar',checkLogin,access,avatar)//必须在该用户登录的情况下才可以上传头像
    //查询所有用户列表（分页）
    userRouter.get('/getUserAll', getUserAll)
    //根据用户 id 获取用户信息
    userRouter.get('/:id/getUserById', getUserById)
    //根据用户 id 修改用户信息
    userRouter.put('/:id/updateUserById',checkLogin,access,updateUserById) //必须在该用户登录的情况下才可以更新修改用户信息
   //根据用户 id 删除该用户
    userRouter.delete('/:id/delUserById',checkLogin,access,delUserById)
}