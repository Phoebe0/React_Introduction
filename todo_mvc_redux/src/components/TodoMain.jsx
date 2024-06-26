import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'
export default function TodoMain() {
  // 拿到状态
  const todos = useSelector((state) => state.todos)
  console.log(todos)
  // 修改状态
  // const dispatch = useDispatch()
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      {/* 循环渲染数据，要绑定key */}
      <ul className="todo-list">
        {/* todolist的每一项 */}
        {todos.map((item) => {
          return <TodoItem key={item.id} todos={item}></TodoItem>
        })}
      </ul>
    </section>
  )
}
