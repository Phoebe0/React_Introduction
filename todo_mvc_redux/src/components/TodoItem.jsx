import React from 'react'

export default function TodoItem() {
  return (
    <li className="completed">
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>Taste JavaScript</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" />
    </li>
  )
}
