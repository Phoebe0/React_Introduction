import { CHANGE_STATE } from '../constants/todo'

// 修改单个状态的行为
export const changeDone = (id, isDone) => {
  return {
    type: CHANGE_STATE,
    id,
    isDone,
  }
}
