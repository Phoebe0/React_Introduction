import {
  ADD_TODO,
  CHANGE_ALL,
  CHANGE_STATE,
  DELETE_TODO,
  SET_LOCAL_TOKEN,
  SET_VISIBILITY_FILTER,
} from '../constants/todo'

// 修改单个状态的行为
export const changeDone = (id, isDone) => {
  return {
    type: CHANGE_STATE,
    id,
    isDone,
  }
}
// 删除单个代办项
export const delTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  }
}
// 添加单个待办项
export const addTodo = (inputValue) => {
  return {
    type: ADD_TODO,
    name: inputValue,
  }
}
// 清除所有已完成
export const changeAll = (isDone) => {
  return {
    type: CHANGE_ALL,
    isDone,
  }
}

// 底部筛选栏 - 用于更新Redux store中的过滤状态
export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
})
// 本地localstore存储
export const setLocalToken = () => ({
  type: SET_LOCAL_TOKEN,
})
