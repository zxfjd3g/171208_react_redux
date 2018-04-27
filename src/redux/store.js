import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './reducers'  // reducers是一个合并多个reducer产生的reducer函数
// 根据counter函数创建store对象
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))


export default store