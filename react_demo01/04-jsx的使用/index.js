// 1. 导包
import React from 'react'
import ReactDom from 'react-dom/client'
// 2. 创建
const VNode = (
  <div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
)
// 3. 挂载
ReactDom.createRoot(document.querySelector('#root')).render(VNode)