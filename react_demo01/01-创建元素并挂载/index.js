// 入口文件
// 创建元素在页面中渲染：

// 1. 导包
import React from 'react'
import  ReactDOM  from 'react-dom/client'
// 2. 创建虚拟DOM 
// 参数1：创建元素的标签
// 参数2：一个配置对象
// 参数3：元素的内容
const VNode = React.createElement('h1',{},'hello world')
// 3. 挂载渲染虚拟DOM
ReactDOM.createRoot(document.querySelector('#root')).render(VNode)

