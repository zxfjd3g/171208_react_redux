import axios from 'axios'
import {REQUESTING, REQUEST_SUCCESS, REQUEST_ERROR} from './action-types'

// 每个action type都会对应的一个同步action
// 请求中的同步action
const requesting = () => ({type: REQUESTING})
// 成功的同步action
const requestSuccess = (users) => ({type: REQUEST_SUCCESS, users})
// 失败了, 分发一个失败的同步action
const requestError = (errorMsg) => ({type: REQUEST_ERROR, errorMsg})


// 发送ajax请求获取数据的异步action
export const search = (searchName) => {

  return dispatch => {
    // 分发一个请求中的同步action
    dispatch(requesting())
    // 发送异步ajax请求
    // 发异步ajax请求
    const url = `https://api.github.com/search/users?q=${searchName}`
    axios.get(url)
      .then(response => {
        // 成功了, 分发一个成功的同步action
        const users = response.data.items.map(item => ({
          username: item.login,
          avatarUrl: item.avatar_url,
          url: item.html_url
        }))
        dispatch(requestSuccess(users))
      })
      .catch(error => {
        // 失败了, 分发一个失败的同步action
        dispatch(requestError('请求失败!'))
      })
  }
}

