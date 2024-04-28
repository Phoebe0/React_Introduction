// 模块合并 并导出
import todos from './todo'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({ todos })
export default rootReducer
