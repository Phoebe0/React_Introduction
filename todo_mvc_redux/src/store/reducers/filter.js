import { SET_VISIBILITY_FILTER } from '../constants/todo'
import { SHOW_ALL } from '../constants/todo'
// 设置已完成&未完成，并传递筛选参数。
const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
