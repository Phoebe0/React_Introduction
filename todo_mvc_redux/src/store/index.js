// 创建仓库，挂载reducers 并导出
import { createStore } from 'redux'
import reducers from './reducers/index'
// 创建store
const store = createStore(reducers)
export default store
