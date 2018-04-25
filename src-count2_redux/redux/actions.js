/*
包含多个action creator(创建action对象的工厂函数)的模块
 */
import {INCREMENT, DECREMENT} from './action-types'

// 增加的action creator
export const increment = (number) => ({type: INCREMENT, number})
// 减少的action creator
export const decrement = (number) => ({type: DECREMENT, number})