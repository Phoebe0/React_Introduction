import React from 'react'
import { sub1 } from './store/actions'
import { useSelector, useDispatch } from 'react-redux'
export default function Son() {
  // 拆分完模块后，useSelector不再是某一个状态，而是合并的状态
  const sonState = useSelector((state) => state)
  const dispatch = useDispatch()
  return (
    <>
      <div>Son -- {sonState.moneyReducer.money}</div>
      <button onClick={() => dispatch(sub1(10))}>花钱</button>
    </>
  )
}
