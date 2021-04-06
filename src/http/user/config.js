export default {
    name: "seller",
    // baseURL: '/user',
    timeout:2000,
    api: {
        addUser: {
            method: 'post',
            url: '/addUser',
            corsUrl: "/api",
            // reqType:"form", //处理 formData 格式的数据
            token() {
                //在这里可以向 store 或者 localStorage 中拿到保存在其中的 token
                return 'token'  //处理 token 
            },
            // data: {a:"A"},  // 也可以在配置中携带请求参数
           /*  hooks: { //请求的钩子，在特定时机将会被调用
                reqBefore(){console.log('reqBefore',this)},  //请求之前调用
                reqSuccess(body){console.log('reqSuccess',this,body)}, //请求成功后调用
                reqFail(){console.log('reqFail',this)} //请求失败调用
            } */
        },
        login: {
            method: 'post',
            url: '/login',
            corsUrl:"/api"
        },
        uploadAvatar: {
            method: 'post',
            url: '/:id/avatar',
            corsUrl:"/api"
        },
        getUserAll: {
            method: 'get',
            url: '/getUserAll',
            corsUrl: "/api",
          /*   data: {
                page:2,
                num:2
            } */
        },
        getUserById: {
            method: 'get',
            url: '/:id/getUserById',
            corsUrl:"/api"
        },
        updateUserById: {
            method: 'put',
            url: '/:id/updateUserById',
            corsUrl:"/api"
        },
        delUserById: {
            method: 'delete',
            url: '/:id/delUserById',
            corsUrl:"/api"
        }
    },
   /*  hooks: { //整个模块的钩子
        reqBefore(config){console.log(this,config)},
        reqSuccess(data){console.log(this,data)},
        reqFail(error){console.log(this,error)}
    } */
}