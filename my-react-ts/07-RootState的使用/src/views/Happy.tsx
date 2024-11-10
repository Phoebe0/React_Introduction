// import React from 'react'
import { useSelector } from 'react-redux'
import type {  RootState } from '../store/index.ts'


export default function Happy() {
const {todosReducer,usersReducer} = useSelector((state: RootState) => state)

  return (
    <div>
      111
      <ul>
        {todosReducer.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      ------
      <ul>
        {usersReducer.map((item) => (
          <li key={item.user_id}>{item.user_name}</li>
        ))}
      </ul>
    </div>
  )
}
