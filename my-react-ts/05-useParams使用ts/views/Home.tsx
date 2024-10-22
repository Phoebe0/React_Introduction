import React from 'react'
import { useHistory } from 'react-router-dom'
export default function Home() {
  // 此处定义泛型，可以限制我们传递参数的类型
  // useHistory用于进行编程式导航
  const history = useHistory<{ name: string }>()
  return (
    <div>
      <h1>Home</h1>
      {/* 通过编程式导航跳转 About页面 */}
      <button onClick={() => history.push('about', { name: 'Tt' })}>
        跳转
      </button>
    </div>
  )
}
