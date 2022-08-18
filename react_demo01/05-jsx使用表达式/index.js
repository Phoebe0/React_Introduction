// 1. 导包
// import React from 'react'  // 17.x 以后的版本不需要引入react
import ReactDom from 'react-dom/client'
// 2. 创建
const a = 100
const str = '哈哈😄'
const flag = true
const arr = [1, 2, 3]
const obj = {
  name: '小花',
  age: 18,
}
function sayHi() {
  return '你好'
}
const VNode = (
  <div>
    {/* 数字和算术运算 */}
    {a + 1 - 33}
    <hr />
    {/* 字符串 */}
    {str}
    <hr />
    {/* 布尔值 */}
    ♥♥♥♥♥ {flag + ''} ♥♥♥♥♥♥
    <hr />
    {/* 数组的使用和方法调用 */}
    {arr} ----- {arr.reverse()}
    <hr />
    {/* 对象 */}
    {obj.name}
    <hr />
    {/* 三元表达式 */}
    {obj.age >= 18 ? '欢迎~光临' : '未成年人谢绝入内'}
    <hr />
    {/* 函数调用 */}
    {sayHi()}
  </div>
)
// 3. 挂载
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
