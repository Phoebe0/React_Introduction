import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames';
import {setVisibilityFilter} from '../store/actions/todo'


// import { FILTER_TITLES} from '../store/constants/filter'

import {
  changeAll,
} from '../store/actions/todo'
import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from '../store/constants/todo'

export default function TodoFooter() {
  const [filterStatus, setFilterStatus] = useState('SHOW_ALL') // 组件内部的筛选状态
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter);
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
    const FILTER_TITLES = {
      [SHOW_ALL]: 'All',
      [SHOW_ACTIVE]: 'Active',
      [SHOW_COMPLETED]: 'Completed'
    }
    // const filterSelect = selectedFilter => ;

  return (
    <footer className="footer">
      {activedTodosDisplay}
      <ul className="filters">
        {Object.keys(FILTER_TITLES).map(filterTitle => (
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
