import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setVisibilityFilter } from '../store/actions/todo'

import { changeAll } from '../store/actions/todo'
import { FILTER_TITLES } from '../store/constants/filiter'

export default function TodoFooter() {
  const dispatch = useDispatch()
  // 全部项
  const todos = useSelector((state) => state.todos)
  // 计算未完成的 todos 数量
  const { activedNum, activeTodoWord } = useMemo(() => {
    const activedNum = todos.filter((todo) => !todo.isDone).length || 0
    const activeTodoWord = activedNum <= 1 ? 'item' : 'items'
    return { activedNum, activeTodoWord }
  }, [todos])

  return (
    <footer className="footer">
      <span className="todo-count">
        {/* 渲染未完成项数 */}
        <strong>{activedNum}</strong> {activeTodoWord} left
      </span>
      <ul className="filters">
        {Object.keys(FILTER_TITLES).map((filterTitle) => (
          <li key={filterTitle}>
            <a
              href="./#"
              // className={classNames({ selected: filterTitle === filter })}
              onClick={() => dispatch(setVisibilityFilter(filterTitle))}
            >
              {FILTER_TITLES[filterTitle]}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="clear-completed"
        onClick={() => dispatch(changeAll(true))}
      >
        Clear completed
      </button>
    </footer>
  )
}
