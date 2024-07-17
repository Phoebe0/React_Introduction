// todo项是否可见 方法
import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from '../constants/todo'

export function selectVisible(state = [], filter) {
  switch (filter) {
    case SHOW_ALL:
      return state
    case SHOW_ACTIVE:
      return state.filter((todo) => !todo.isDone)
    case SHOW_COMPLETED:
      return state.filter((todo) => todo.isDone)
    default:
      return state
  }
}
