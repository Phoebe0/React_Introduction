import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
interface Todo {
  id: number
  text: string
  completed: boolean
}
interface User {
  user_id: number
  user_name: string
  user_age: number
}
interface TodosState {
  todosReducer: Todo[]
  usersReducer: User[]
}
export default function Happy() {
  // useEffect(() => {
  //   const typeWriter = (text: string, i: number) => {
  //     if (i < text.length) {
  //       document.body.innerHTML += text.charAt(i)
  //       setTimeout(() => typeWriter(text, i + 1), 500)
  //     }
  //   }
  //   typeWriter('程序员节日快乐🌹!', 0)
  // }, [])
  // 1. 给state添加泛型
  // const todosReducer = useSelector((state: TodosState) => state.todosReducer)
  // 2. 给useSelector添加泛型
  const todosReducer = useSelector<TodosState, Todo[]>(
    (state) => state.todosReducer
  )
  const userReducer = useSelector<TodosState, User[]>(
    (state) => state.usersReducer
  )

  // console.log(todosReducer)

  console.log(userReducer)

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
        {userReducer.map((item) => (
          <li key={item.user_id}>{item.user_name}</li>
        ))}
      </ul>
    </div>
  )
}
