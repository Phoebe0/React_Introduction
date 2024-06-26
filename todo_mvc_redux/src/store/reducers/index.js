// 模块合并 并导出到 store下面的index
import todos from './todo'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({ todos })
export default rootReducer
