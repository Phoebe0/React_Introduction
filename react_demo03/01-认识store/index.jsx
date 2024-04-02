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
          // 发起状态更新
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
// 【方案一】使用Redux中的监听状态API subscribe。只要是store的数据发生了变化，就会重新渲染视图（不是最优解）
store.subscribe(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)
})
ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)
