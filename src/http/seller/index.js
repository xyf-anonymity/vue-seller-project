import axios from '@/http/seller/axios.js'
import config from '@/http/seller/config.js'
import httpUtile from '@/utile/httpUtile.js'
export default httpUtile(axios,config)