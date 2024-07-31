import React, { useEffect, useState } from 'react'
import Home from './views/Home'
import About from './views/About'
import Author from './views/Author'
export default function () {
  // 模拟路由的实现：按需展示。使用window.location.hash
  const [path, usePath] = useState(window.location.hash.slice(1))
  // hashchange事件可监听hash值变化
  useEffect(() => {
    window.addEventListener('hashchange', () => {
      // 监听事件变化之后，重新设置path值
      usePath(window.location.hash.slice(1))
    })
  }, [])
  return (
    <>
      <ul>
        <li>
          <a href="#/home">首页</a>
        </li>
        <li>
          <a href="#/about">关于</a>
        </li>
        <li>
          <a href="#/author">我的</a>
        </li>
      </ul>
      {path === '/home' && <Home></Home>}
      {path === '/about' && <About></About>}
      {path === '/author' && <Author></Author>}
    </>
  )
}
