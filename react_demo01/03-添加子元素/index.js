// 1. 导包
import React from 'react'
import ReactDom from 'react-dom/client'
// 2. 创建 
// 参数1：创建元素的标签
// 参数2：一个配置对象,加一些标签属性或事件处理
// 参数3：元素的内容,是一个字符串，也可以是数组
const VNode = React.createElement('ul',{className: 'list'},[
  React.createElement('li',{},'vue'),
  React.createElement('li',{},'react'),
  React.createElement(
    'li',
    {},
    React.createElement('a', {href: 'http://www.baidu.com'}, '百度一下')
  ),
])
// 3. 挂载 
ReactDom.createRoot(document.querySelector('#root')).render(VNode)