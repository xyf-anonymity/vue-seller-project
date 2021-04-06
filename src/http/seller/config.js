export default {
    name: "seller",
    baseURL: 'http://localhost:8000',
    timeout:2000,
    api: {
        getSeller: {
            method: 'get',
            url: '/api/seller',
            // corsUrl: "/api",
            // reqType:"form", //处理 formData 格式的数据
            token() {
                //在这里可以向 store 或者 localStorage 中拿到保存在其中的 token
                return 'token'  //处理 token 
            },
            // data: {a:"A"},  // 也可以在配置中携带请求参数
            hooks: { //请求的钩子，在特定时机将会被调用
                reqBefore(){},  //请求之前调用
                reqSuccess(){}, //请求成功后调用
                reqFail(){} //请求失败调用
            } 
        },
        getGoods: {
            method: 'get',
            url: '/api/goods',
            // corsUrl:"/api"
        },
        getRatings: {
            method: 'get',
            url: '/api/ratings',
            // corsUrl:"/api"
        }
    },
    hooks: { //整个模块的钩子
        reqBefore(){},
        reqSuccess(){},
        reqFail(){}
    } 
}