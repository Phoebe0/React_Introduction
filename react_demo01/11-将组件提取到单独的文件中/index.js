// 1. 导包
import React from 'react'
import ReactDom from 'react-dom/client'
// 导入组件
import Hello from './components/hello'
import Home from './components/home'
// 2. 创建虚拟DOM
const App = (
  <>
    <Hello></Hello>
    <Home></Home>
  </>
)
// 3. 挂载
ReactDom.createRoot(document.querySelector('#root')).render(App)
