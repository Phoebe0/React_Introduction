// 创建的单个模块 - user
// 可以直接放数据，以及修改数据的reducer
import { createSlice } from '@reduxjs/toolkit'
const user = createSlice({
  name: 'user', // 模块名
  initialState: {
    name: 'Tricia',
  }, // 初始状态
  reducers: {
    changeName(state, action) {
      console.log(action)
      state.name = action.payload
    },
  }, // 修改state状态的reducer,类似于action
})
export default user
