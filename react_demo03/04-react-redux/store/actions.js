// action是一个对象，type类型，有参数带参数
// 涨
export const add = (payload) => ({
  type: 'money/add',
  payload,
})
export const add1 = (payload) => ({
  type: 'level/add1',
  payload,
})

// 减
export const sub = (payload) => ({
  type: 'weight/sub',
  payload,
})
export const sub1 = (payload) => ({
  type: 'money/sub',
  payload,
})
