import React from 'react'

export default function TodoItem(props) {
  const todoitem = props.todos
  return (
    // completed - 划线，已完成事项
    // editing - 输入事项
    // 当前数据中的isDone是否为true,如果是的话就增加 划线 样式
    <li className={todoitem.isDone ? 'completed' : ''}>
      <div className="view">
        {/* 复选框设置选中状态 */}
        <input className="toggle" type="checkbox" checked={todoitem.isDone} />
        <label>{todoitem.name}</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" />
    </li>
  )
}
