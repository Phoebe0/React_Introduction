// todo项是否可见 方法
import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from '../constants/todo'

export function selectVisible(state = [], filter) {
  switch (filter) {
    case SHOW_ALL:
      console.log(1)
      return state
    case SHOW_ACTIVE:
      console.log(2)
      return state.filter((todo) => todo.isDone)
    case SHOW_COMPLETED:
      console.log(3)
      return state.filter((todo) => !todo.isDone)
    default:
      return state
  }
}
