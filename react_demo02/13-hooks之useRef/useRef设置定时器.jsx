// 1. 导入 useRef hook
import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom/client'

// useRef 实现定时任务
export default function App() {
  const [timestamp, setTimestamp] = useState(0)
  // let timer = -1 // 如果不设置初始值，那么如果频繁点击按钮，就会生成多个timer，导致定时器无法关闭
  // console.log('新增timer -1')
  let timer = useRef(-1) // 设置初始值，让timer不可变.而且这个值会像useState一样将useRef的值扔到外面。
  // 定时器开
  const start = () => {
    clearInterval(timer.current)
    timer.current = setInterval(() => {
      setTimestamp(+new Date())
    }, 1000)
  }
  // 定时器关
  const off = () => {
    console.log('定时器关闭')
    clearInterval(timer.current)
  }
  return (
    <>
      <h2>Son--{timestamp}</h2>
      <button onClick={start}>开定时器</button>
      <button onClick={off}>关定时器</button>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)
