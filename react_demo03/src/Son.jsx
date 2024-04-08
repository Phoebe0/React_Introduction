import React from 'react'
import { sub1 } from './store/actions'
import { useSelector, useDispatch } from 'react-redux'
export default function Son() {
  const sonState = useSelector((state) => state)
  const dispatch = useDispatch()
  return (
    <>
      <div>Son -- {sonState.money}</div>
      <button onClick={() => dispatch(sub1(10))}>花钱</button>
    </>
  )
}
