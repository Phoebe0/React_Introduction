// 创建仓库并引入
import { createStore } from 'redux'
import rootReducer from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'
// 创建store
const store = createStore(rootReducer, composeWithDevTools())
//  store.getState() 是redux自己获取仓库数据的方式。
export type RootState = ReturnType<typeof store.getState>
export default store
