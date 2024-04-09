import { LEVEL_ADD, MONEY_ADD, MONEY_SUB, WEIGHT_SUB } from './constants'
// action是一个对象，type类型，有参数带参数
// 涨
export const add = (payload) => ({
  type: MONEY_ADD,
  payload,
})
export const add1 = (payload) => ({
  type: LEVEL_ADD,
  payload,
})

// 减
export const sub = (payload) => ({
  type: WEIGHT_SUB,
  payload,
})
export const sub1 = (payload) => ({
  type: MONEY_SUB,
  payload,
})
