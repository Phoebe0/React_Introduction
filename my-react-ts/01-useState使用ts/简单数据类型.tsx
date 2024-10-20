import React, { useState } from 'react'

// 1. 使用useState添加类型
// 基本数据类型可以不传递泛型，自动推论
export default function App() {
  const [num, setNum] = useState<number>(1)
  // num加1的函数
  const addNum = () => {
    setNum(num + 1)
  }
  return (
    <div>
      <h1>TS项目根组件</h1>
      <p>{num}</p>
      <button onClick={() => addNum()}>num++</button>
    </div>
  )
}
