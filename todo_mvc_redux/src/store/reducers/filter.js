
import { SET_VISIBILITY_FILTER } from '../constants/todo'
import { SHOW_ALL } from '../constants/todo'
const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      console.log(action.filter);
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
