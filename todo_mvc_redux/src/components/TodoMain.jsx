import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'
import { selectVisible } from '../store/selectors/isVisible'
export default function TodoMain() {
  // 筛选出已完成or未完成or全部的项
  const visibleTodos = useSelector((state) =>
    selectVisible(state.todos, state.visibleTodos)
  )
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      {/* 循环渲染数据，要绑定key */}
      <ul className="todo-list">
        {/* 筛选可见的项目来渲染每一项 */}
        {visibleTodos.map((item) => {
          return <TodoItem key={item.id} todos={item}></TodoItem>
        })}
      </ul>
    </section>
  )
}
