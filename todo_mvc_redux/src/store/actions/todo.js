import { CHANGE_STATE, DELETE_TODO } from '../constants/todo'

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
