import React, { useEffect } from 'react'

// useEffect在ts环境下和js使用方式一样。不需要传泛型
export default function App() {
  useEffect(() => {
    console.log('useEffect-你好呀')
  })

  // num加1的函数

  return (
    <div>
      <h1>TS项目根组件</h1>
    </div>
  )
}
