import React from 'react'
// HashRouter 路由地址中带#的
// BrowserRouter 路由地址中不带#的，也就是历史模式
// 路由组件：Route
// 路由链接：Link
import { HashRouter, Route, Link } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
export default function App() {
  return (
    // 1. 使用HashRouter或者BrowserRouter包裹所有的路由标签

    <div>
      <h1>App根组件</h1>
      <HashRouter>
        {/* 2. 使用Link组件并设置to属性，制定要跳转的路由地址。
          Link标签最终渲染的时候会被渲染为a链接 */}
        <Link to="/home">首页</Link>
        <Link to="/about">关于</Link>
        {/* 3. 使用Route组件并设置path属性，制定路由地址。
            Route标签最终渲染的时候会被渲染为div标签 
            要展示的组件放在Route标签之内*/}
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
      </HashRouter>
    </div>
  )
}
