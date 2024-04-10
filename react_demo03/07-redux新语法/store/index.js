// 创建仓库的核心文件
// 1. 导入 configureStore 相当于 createStore
import { configureStore as createStore } from '@reduxjs/toolkit'
// 导入模块
import user from './modules/user'
// 2. 创建仓库，并挂载对应模块的reducer（obj）
const store = createStore({
  reducer: {
    user: user.reducer,
  },
})
// 3. 导出仓库
export default store
