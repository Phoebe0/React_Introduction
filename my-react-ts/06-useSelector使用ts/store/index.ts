// 创建仓库并引入
import { createStore } from 'redux'
import rootReducer from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'
// 创建store
const store = createStore(rootReducer, composeWithDevTools())
export default store
