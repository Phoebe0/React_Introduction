import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/actions/todo'

export default function TodoHeader() {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  // 添加单项todo
  const addValue = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="今天做什么?"
        value={inputValue}
        autoFocus
        onChange={addValue}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            console.log('回车', inputValue)
            dispatch(addTodo(inputValue))
            setInputValue('') // 清空输入框
          }
        }}
      />
    </header>
  )
}
