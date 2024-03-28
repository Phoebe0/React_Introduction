// store 是核心，用来关联 action和reducer
import { createStore } from 'redux'
import reducer from './reducers'

// 1. 创建store，参数1是reducer  (store 和 reducer关联上了)
const store = createStore(reducer)

// 2. 关联action

export default store
