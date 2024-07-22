import React, { useEffect } from 'react'
import TodoItem from './TodoItem'
import { useDispatch, useSelector } from 'react-redux'
import { selectVisible } from '../store/selectors/isVisible'
import { setLocalToken } from '../store/actions/todo'
export default function TodoMain() {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'))
    if (savedTodos) {
      console.log(savedTodos)
      dispatch(setLocalToken(savedTodos))
    }
    //  [dispatch] 作为依赖数组。只有当 dispatch 更新时才重新执行 useEffect 中的逻辑
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // 筛选出已完成or未完成or全部的项
  const visibleTodos = useSelector((state) =>
    selectVisible(state.todos, state.visibilityFilter)
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
