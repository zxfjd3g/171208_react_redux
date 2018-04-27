import {INCREMENT, DECREMENT} from './action-types'
import {combineReducers} from 'redux'

function count(state = 0, action) {
  console.log('counter', state, action)
  switch (action.type) {
    case INCREMENT:
      return state + action.number
    case DECREMENT:
      return state - action.number
    default:
      return state
  }
}

const initUser = {
  id: '',
  name: '',
  pwd: ''
}
function user(state=initUser, action) {
  switch (action.type) {
    case 'RECEIVE_USER':
      return action.data
    default:
      return state
  }
}

// 向外暴露合并的reduer函数
export default combineReducers({
  count: count,
  user: user
})
// 管理的状态的结构:
/*
{
  count: 2
  usser: {}
}
*/
