// useState组件更新过程

import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
// 1. 组件被渲染，函数中的代码就会执行

function App() {
  const [num, setNum] = useState(0)
  return (
    <div>
      <h1>
        App组件 - {num}
        {/* 2. 更新状态时： 拿到状态更新的上一次的最新的值*/}
        <button onClick={() => setNum(num + 1)}>加1</button>
      </h1>
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)
