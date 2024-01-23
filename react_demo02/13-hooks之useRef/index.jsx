// 1. 导入 useRef hook
import React, { useRef } from 'react'
import ReactDOM from 'react-dom/client'
import Son from './Son'

function App() {
  // 2. 创建ref对象
  const iptRef = useRef(null) // 初始值为空
  const numRef = useRef(99) // 设置初始值 【不可变】
  return (
    <>
      <h1>App</h1>
      {/* 3. 和结构关联 */}
      <input type="text" ref={iptRef} /> {numRef.current}
      <button
        onClick={() => {
          // 4. 操作DOM
          console.log(iptRef.current) // 得到当前的DOM元素
        }}
      >
        操作Ref
      </button>
      <Son></Son>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)
