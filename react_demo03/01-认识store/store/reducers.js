// reducer 是一个函数，是来处理action，修改state状态
//  reducer函数的参数1是state（状态初始值）而且要给初始值
export default function reducer(state = 0, action) {
  // reducer函数，会基于触发的action类型，对状态进行更改
  console.log(action)
  if (action.type === 'num/add') {
    // 直接return state + action.payload，就会替换原来的state
    return state + action.payload
  } else if (action.type === 'num/sub') {
    return state - action.payload
  }
  // reducer函数，默认要return一次state
  return state
}
