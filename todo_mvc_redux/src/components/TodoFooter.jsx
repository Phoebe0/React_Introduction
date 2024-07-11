import React, { useMemo } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { changeAll } from '../store/actions/todo'

export default function TodoFooter() {
 const todos = useSelector((state) => state.todos)
const dispatch = useDispatch()
  // 计算属性：正在进行中的数量、提示文字
  const { activedNum, activeTodoWord } = useMemo(() => {
    const activedNum = todos.filter((item) =>!item.isDone).length
    const activeTodoWord = activedNum > 1? 'items' : 'item'
    return { activedNum, activeTodoWord }
  }, [todos])

  // 渲染未完成的数量
  const actived = activedNum > 0? <span className="todo-count"><strong>{activedNum}</strong> {activeTodoWord} left</span> : <span className="todo-count"><strong>0</strong> {activeTodoWord} left</span>
  
  return (
    <footer className="footer">
      <span className="todo-count">
      {actived}
      </span>
      <ul className="filters">
        <li>
            <a className="selected" href="#/" onClick={() => {
              dispatch(changeAll(todos.every(item => item.isDone)))
              }}>
              All
            </a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}
