import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store/index'
import { add, sub } from './store/actions'
function App() {
  return (
    <>
      {/* 1. 获取reducer函数的初始状态 */}
      <h3>hi,{store.getState()}</h3>
      <button
        onClick={() => {
          store.dispatch(add(1))
          console.log(store.getState())
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          store.dispatch(add(10))
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          store.dispatch(add(5))
        }}
      >
        +5
      </button>
      <button
        onClick={() => {
          store.dispatch(sub(3))
        }}
      >
        -3
      </button>
      <button>清空</button>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)
