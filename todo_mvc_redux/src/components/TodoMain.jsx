import React from 'react'
import TodoItem from './TodoItem'
export default function TodoMain() {
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {/* todolist的每一项 */}
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
      </ul>
    </section>
  )
}
