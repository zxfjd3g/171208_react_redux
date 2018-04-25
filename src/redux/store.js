import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {usersInfo} from './reducers'

export default createStore(usersInfo, composeWithDevTools(applyMiddleware(thunk)))