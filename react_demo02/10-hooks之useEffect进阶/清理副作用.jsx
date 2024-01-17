import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

function Son() {
  useEffect(() => {
    console.log('Son副作用开启啦')

    return () => {
      console.log('清除Son副作用')
      // return 的这个函数就是在清除依赖项
    }
  })
  return <h2>子组件</h2>
}
// 类似于类组件中的componentWillUncomont

function App() {
  const [num, setNum] = useState(10)
  // useEffect清理副作用
  useEffect(() => {
    console.log('副作用开启啦')

    return () => {
      console.log('清除副作用')
      // return 的这个函数就是在清除依赖项
    }
  })

  return (
    <>
      <h1>result: {num}</h1>
      <button onClick={() => setNum(num + 1)}>按钮</button>
      {/* 组件销毁时，也能清理副作用 */}
      {num < 11 ? <Son></Son> : <></>}
    </>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)
