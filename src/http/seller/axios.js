import axios from 'axios'
import config from '@/http/seller/config'

// 处理 axios 请求的钩子
let { hooks } = config
hooks = hooks || {}
const {reqBefore,reqSuccess,reqFail} = hooks

const myAxios = axios.create({
    timeout:config.timeout,
    //前端配置代理解决跨域问题时，baseURL 中的服务器主机名和端口不可加上
    baseURL:config.baseURL  //对所有请求Url统一配置代理解决跨域
})

// 添加请求拦截器
myAxios.interceptors.request.use(
    function (axiosConfig) {
    // 在发送请求之前做些什么
    reqBefore&&reqBefore.call(config,axiosConfig)
    return axiosConfig
    },
)

// 添加响应拦截器
myAxios.interceptors.response.use(
    function (response) {
    // 对响应数据做点什么
    reqSuccess&&reqSuccess.call(config,response.data)
    return response.data 
    },
    function (error) {
    // 对响应错误做点什么
    reqFail&&reqFail.call(config,error)
    return Promise.reject(error)
    }
)

export default myAxios