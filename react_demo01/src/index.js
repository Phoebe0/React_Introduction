// 1. 导包
import React from 'react'
import ReactDom from 'react-dom/client'
// 2. 创建 
// 参数1：创建元素的标签
// 参数2：一个配置对象,加一些标签属性或事件处理
// 参数3：元素的内容
const Vnode = React.createElement(
  'strong',
{
  className: 'box',
  id: 'title',
  onClick: () => {
    alert(111)
  }
},
'我是标签内容'
)
// 3. 挂载 
ReactDom.createRoot(document.querySelector('#root')).render(Vnode)