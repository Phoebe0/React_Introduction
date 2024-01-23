import React, { useRef, useState } from 'react'

// useRef 实现定时任务
export default function Son() {
  const [timestamp, setTimestamp] = useState(0)
  // let timer // 如果不设置初始值，那么如果频繁点击按钮，就会生成多个timer，导致定时器无法关闭
  let timer = useRef(-1) // 设置初始值，让timer不可变
  // 定时器开
  const start = () => {
    clearInterval(timer.current)
    timer.current = setInterval(() => {
      setTimestamp(+new Date())
    }, 1000)
  }
  // 定时器关
  const off = () => {
    clearInterval(timer.current)
    console.log('定时器关闭')
  }
  return (
    <>
      <h2>Son--{timestamp}</h2>
      <button onClick={() => start()}>开定时器</button>
      <button onClick={() => off()}>关定时器</button>
    </>
  )
}
