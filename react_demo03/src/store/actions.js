// action是一个对象，type类型，有参数带参数
// 涨
export const add = (payload) => ({
  type: 'count/add',
  payload,
})

// 减
export const sub = (payload) => ({
  type: 'count/sub',
  payload,
})
