// actions文件中放的是一系列动作、行为
// 必须带有type属性（唯一），用于区分动作类型
// 可以提供额外参数，参数名字自定义，一般为payload
export const add = (payload) => ({
  type: 'num/add',
  payload: payload,
})

export const sub = () => ({
  type: 'num/sub3',
  payload: 3,
})

export const reset = () => ({
  type: 'num/reset',
})
