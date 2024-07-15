import {
  ADD_TODO,
  CHANGE_ALL,
  CHANGE_COMPLETED,
  CHANGE_NO_COMPLETED,
  CHANGE_STATE,
  DELETE_TODO,
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
// 全选反选
export const changeAll = (isDone) => {
  return {
    type: CHANGE_ALL,
    isDone,
  }
}
// 筛选已完成
export const changeCompleted = (isDone) => {
  return {
    type: CHANGE_COMPLETED,
    isDone,
  }
}
// 筛选未完成
export const changeNoCompleted = (isDone) => {
  return {
    type: CHANGE_NO_COMPLETED,
    isDone,
  }
}
