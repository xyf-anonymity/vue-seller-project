export default function httpUtile(axios,config) {
    let reqObj = {}
    for (const key in config.api) {
        let {method,url,reqType,corsUrl,token,data:configData,hooks} = config.api[key]
        reqObj[key] = async function (data) {
            //必须为一个对象
            data = data || {} 
            configData = configData || {}
            hooks = hooks || {}

            // 把钩子一个一个拿出来
            const {reqBefore,reqSuccess,reqFail} = hooks

            //请求函数中指定的 data 有于配置中指定的 configData 的属性相同，则以请求函数中的data为主
            data = Object.assign(configData, data)
            
            // 处理 data 是 formData 数据
            let transformData = {}
            if (reqType === 'form') {
                let formData = new formData()
                for (const key in data) {
                    formData.append(key,data[key])
                }
                transformData = formData
            } else {
                transformData = data
            }

            //处理跨域
            if (corsUrl) {
                url = corsUrl + url
                corsUrl = false
            }

            //处理 token
            let headers = {}
            if (typeof token === 'function') {
                let Authorization = token()
                headers = {Authorization}
            }

            let body = ''
            try {
                reqBefore&&reqBefore.call(config)
                switch (method) {
                    case 'get':
                    case 'delete':
                        body = await axios({
                            method,
                            url,
                            params: transformData,
                            headers
                        })
                        break;
                    case 'post':
                    case 'put':
                        body = await axios({
                            method,
                            url,
                            data: transformData,
                            headers
                        })
                        break;
                }
                //返回 body 代表请求发送成功 
                reqSuccess&&reqSuccess.call(config,body)
                return body
               
            } catch (error) {
                reqFail&&reqFail.call(config)
                //返回一个失败的 promise 代表请求失败
                return new Promise.reject(error) 
            }
        }
    }

    return reqObj
}