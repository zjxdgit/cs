import axios from 'axios'

// 创建实例
const service = axios.create({
  baseURL: '/volunteer-api',
  timeout: 6000
})
// 请求拦截
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    console.log('axios request error', error) // debug
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  (response) => {
    const res = response.data

    if (res.code === 200) {
      return res.data
    } else {
      console.log('axios response not 200', res)
    }
  },
  (error) => {
    console.log('axios response error', error) // debug
    return Promise.reject(error)
  }
)
export default { service }
