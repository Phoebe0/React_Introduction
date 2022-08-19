// 1. 导包
import React from 'react'
import ReactDom from 'react-dom/client'
// 2. 创建 函数式组件
// 普通函数或者箭头函数创建组件，首字母大写
// 组件必须要有返回值
function Music() {
  return (
    <div>
      <h1>haha</h1>
    </div>
  )
}
const VNode = (
  <div>
    <Music></Music>
  </div>
)
// 3. 挂载
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
