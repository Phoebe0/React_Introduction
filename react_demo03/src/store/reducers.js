const myState = {
  money: 10000,
  level: 10,
  weight: 60,
}
export default function reducer(state = myState, action) {
  switch (action.type) {
    case 'money/add':
      return {
        ...state,
        money: state.money + action.payload,
      }
    case 'level/add1':
      return {
        ...state,
        level: state.level + action.payload,
      }
    case 'weight/sub':
      return {
        ...state,
        weight: state.weight - action.payload,
      }
    default:
      return state
  }
}
