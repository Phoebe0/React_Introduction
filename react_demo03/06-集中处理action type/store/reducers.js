import { combineReducers } from 'redux'
import { LEVEL_ADD, MONEY_ADD, MONEY_SUB, WEIGHT_SUB } from './constants'
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
    case MONEY_ADD:
      return {
        ...state,
        money: state.money + action.payload,
      }
    case MONEY_SUB:
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
    case WEIGHT_SUB:
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
    case LEVEL_ADD:
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
