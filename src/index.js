import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk' // 异步中间件模块
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './containers/app'
import {count} from './redux/reducers'

// 创建store对象, 应用上thunk中间件
const store = createStore(count, composeWithDevTools(applyMiddleware(thunk))) // 内部会第一次调用reducer函数得到并保存初始状态

ReactDOM.render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('root'))
