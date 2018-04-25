import {REQUESTING, REQUEST_SUCCESS, REQUEST_ERROR} from './action-types'

const initUsersInfo = { // 包含users及相关数据的状态对象
  firstView: true, // 显示初始提示文本
  loading: false, // 是否正在请求中
  users: [], //保存多个用户信息的数组
  errorMsg: ''  // 请求失败的提示文本
}

export function usersInfo(state = initUsersInfo, action) {
  switch (action.type) {
    case REQUESTING:
      return {
        firstView: false,
        loading: true,
        users: [],
        errorMsg: ''
      }
    case REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users
      }
    case REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        errorMsg: action.errorMsg
      }
    default:
      return state
  }
}