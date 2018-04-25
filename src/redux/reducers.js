/*
根据老的state和指定的action, 处理返回一个新的state的函数
 */
import {INCREMENT, DECREMENT} from './action-types'

export function count(state=1, action) {
  console.log('count()', state, action)
  switch (action.type) {
    case INCREMENT:
      return state + action.number
    case DECREMENT:
      return state - action.number
    default:
      return state
  }
  // return newState
}
