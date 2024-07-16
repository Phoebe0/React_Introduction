import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'
import { selectVisible } from '../store/selectors/isVisible'
export default function TodoMain() {
  const todos = useSelector((state) => state.todos)
  // 筛选出可见的项

  const visibleTodos = useSelector(state => selectVisible(state.todos, state.visibilityFilter))
  console.log(visibleTodos);

  // 修改状态
  // const dispatch = useDispatch()
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
