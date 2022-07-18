import { axios } from './utils/axios'
export const getUserInfo = (code) => {
  return axios.request({
    method: 'get',
    url: `/v1/login`,
    params: {
      requestAuthCode: code
    }
  })
}
