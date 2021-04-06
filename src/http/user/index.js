import axios from '@/http/user/axios.js'
import config from '@/http/user/config.js'
import httpUtile from '@/utile/httpUtile.js'
export default httpUtile(axios,config)