import React from 'react'
import { useDispatch } from 'react-redux'
import { changeDone } from '../store/actions/todo.js'
export default function TodoItem(props) {
  const todoitem = props.todos
  const dispatch = useDispatch()
  return (
    // completed - 划线，已完成事项
    // editing - 输入事项
    // 当前数据中的isDone是否为true,如果是的话就增加 划线 样式
    <li className={todoitem.isDone ? 'completed' : ''}>
      <div className="view">
        {/* 复选框设置选中状态 - checked属性 */}
        <input
          className="toggle"
          type="checkbox"
          checked={todoitem.isDone}
          onChange={() => {
            dispatch(changeDone(todoitem.id, !todoitem.isDone))
          }}
        />
        <label>{todoitem.name}</label>
        <button className="destroy" onClick={() => {}}></button>
      </div>
      <input className="edit" />
    </li>
  )
}
