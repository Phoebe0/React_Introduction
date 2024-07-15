import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  changeAll,
  changeCompleted,
  changeNoCompleted,
} from '../store/actions/todo'

export default function TodoFooter() {
  const [filterStatus, setFilterStatus] = useState('SHOW_ALL') // 组件内部的筛选状态
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  // 根据当前筛选状态过滤 todos
  const filteredTodos = useMemo(() => {
    switch (filterStatus) {
      case 'SHOW_COMPLETED':
        return todos.filter((todo) => todo.isDone)
      case 'SHOW_NO_COMPLETED':
        return todos.filter((todo) => !todo.isDone)
      default:
        return todos
    }
  }, [filterStatus, todos])

  // 计算未完成的 todos 数量
  const { activedNum, activeTodoWord } = useMemo(() => {
    const activedNum = filteredTodos.filter((todo) => !todo.isDone).length
    const activeTodoWord = activedNum === 1 ? 'item' : 'items'
    return { activedNum, activeTodoWord }
  }, [filteredTodos])

  // 渲染未完成的数量
  const activedTodosDisplay =
    activedNum > 0 ? (
      <span className="todo-count">
        <strong>{activedNum}</strong> {activeTodoWord} left
      </span>
    ) : (
      <span className="todo-count">
        <strong>0</strong> {activeTodoWord} left
      </span>
    )

  // 处理筛选按钮点击事件
  const handleFilterClick = (filter) => {
    setFilterStatus(filter) // 更新组件内部的筛选状态
    switch (filter) {
      case 'SHOW_COMPLETED':
        dispatch(changeCompleted(true))
        break
      case 'SHOW_NO_COMPLETED':
        dispatch(changeNoCompleted(false))
        break
      default:
        dispatch(changeAll(todos.every((todo) => todo.isDone))) // 假设这个 action 用来重置 todos 状态
        break
    }
  }

  return (
    <footer className="footer">
      {activedTodosDisplay}
      <ul className="filters">
        <li>
          <a
            href="#/"
            className={filterStatus === 'SHOW_ALL' ? 'selected' : ''}
            onClick={() => handleFilterClick('SHOW_ALL')}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/active"
            className={filterStatus === 'SHOW_NO_COMPLETED' ? 'selected' : ''}
            onClick={() => handleFilterClick('SHOW_NO_COMPLETED')}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/completed"
            className={filterStatus === 'SHOW_COMPLETED' ? 'selected' : ''}
            onClick={() => handleFilterClick('SHOW_COMPLETED')}
          >
            Completed
          </a>
        </li>
      </ul>
      {/* 其他组件代码，例如清除已完成 todos 的按钮 */}
    </footer>
  )
}
