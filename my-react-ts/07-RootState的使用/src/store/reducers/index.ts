import { combineReducers } from 'redux'
import todosReducer from './todosReducer'
import usersReducer from './usersReducer'
const rootReducer = combineReducers({
  todosReducer,
  usersReducer,
})
export default rootReducer
