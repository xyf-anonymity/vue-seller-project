import axios from 'axios'
const myAxios = axios.create({
    timeout: 1000,
    baseURL:'http://localhost:8080'
})

// 添加请求拦截器
myAxios.interceptors.request.use(
    function (config) {
    // 在发送请求之前做些什么
    return config;
    },
)

// 添加响应拦截器
myAxios.interceptors.response.use(
    function (response) {
    // 对响应数据做点什么
    return response.data 
    },
    function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
    }
)

export default myAxios