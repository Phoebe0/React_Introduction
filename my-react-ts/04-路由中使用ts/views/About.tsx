import React from 'react'
import { useLocation } from 'react-router-dom'

export default function About() {
  // useLocation 可以获取到当前路由的信息
  // 涉及到参数传递，需要在路由配置的时候，指定泛型
  const location = useLocation<{ name: string }>()
  console.log(location.state.name)

  return (
    <div>
      <h1>About</h1>
    </div>
  )
}
