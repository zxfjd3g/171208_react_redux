import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import App from './components/app'
import {count} from './redux/reducers'

// 创建store对象
const store = createStore(count) // 内部会第一次调用reducer函数得到并保存初始状态

function render() {
  ReactDOM.render(<App store={store}/>, document.getElementById('root'))
}

// 初始化渲染
render()

// 订阅监听(监听store中state的改变)
store.subscribe(render) // 当store产生了新的state时回调