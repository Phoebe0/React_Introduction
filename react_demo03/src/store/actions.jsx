// actions文件中放的是一系列动作、行为
// 必须带有type属性（唯一），用于区分动作类型
// 可以提供额外参数，参数名字自定义，一般为payload
const add1 = {
  type: 'num/add1',
  payload: 1,
}
const add5 = {
  type: 'num/add5',
  payload: 5,
}
const add10 = {
  type: 'num/add10',
  payload: 10,
}
const sub3 = {
  type: 'num/sub3',
  payload: 3,
}
const reset = {
  type: 'num/reset',
}
