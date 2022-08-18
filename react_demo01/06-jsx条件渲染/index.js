// 1. 导包
import ReactDom from 'react-dom/client'
// 2. 创建
const age = 18
// 不要在jsx中直接写 if/else   需要抽到单独的函数中
const fn = () => {
  if (age >= 18) {
    return <h1>您好，请进！</h1>
  } else {
    return <h1>未成年人谢绝入内</h1>
  }
}
const VNode = <div>{fn()}</div>
// 3. 挂载
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
