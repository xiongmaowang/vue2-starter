/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/24
 */
import fetchData from 'utils/fetch-data'

export default {
  async login(params) {
    return await fetchData('/api/user/login', params, 'POST')
  },
  async logout(params) {
    return await fetchData('/api/user/logout', params, 'POST')
  },
  async getUserInfo(params) {
    return await fetchData('/api/user/info', params, 'POST')
  }
}