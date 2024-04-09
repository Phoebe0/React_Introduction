import { combineReducers } from 'redux'

const moneyState = {
  money: 10000,
}
const levelState = {
  level: 8,
}
const weightState = {
  weight: 66.7,
}
function moneyReducer(state = moneyState, action) {
  switch (action.type) {
    case 'money/add':
      return {
        ...state,
        money: state.money + action.payload,
      }
    case 'money/sub':
      return {
        ...state,
        money: state.money - action.payload,
      }
    default:
      return state
  }
}
function weightReducer(state = weightState, action) {
  switch (action.type) {
    case 'weight/sub':
      return {
        ...state,
        weight: state.weight - action.payload,
      }
    default:
      return state
  }
}
function levelReducer(state = levelState, action) {
  switch (action.type) {
    case 'level/add1':
      return {
        ...state,
        level: state.level + action.payload,
      }
    default:
      return state
  }
}
// 合并多个reducer
const rootReducer = combineReducers({
  moneyReducer: moneyReducer,
  weightReducer: weightReducer,
  levelReducer: levelReducer,
})
export default rootReducer
