import React from 'react'

export default function TodoItem(props) {
  const todoitem = props.todos
  return (
    // completed - 划线，已完成事项
    // editing - 输入事项
    <li className={todoitem.done ? 'completed' : ''}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>{todoitem.name}</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" />
    </li>
  )
}
