import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import App from './components/app'
import {count} from './redux/reducers'

// 创建store对象
const store = createStore(count)

function render() {
  ReactDOM.render(<App store={store}/>, document.getElementById('root'))
}

// 初始化渲染
render()

// 订阅监听(监听store中state的改变)
store.subscribe(render) // 当store产生了新的state时回调