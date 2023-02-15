/*
 * @Author: Tricia
 * @Date: 2022-08-16 16:26:51
 * @Description:修改状态
 */
// 1. 导包
import { Component, createRef } from 'react'
import ReactDom from 'react-dom/client'

// 非受控组件是通过ref配合获取到表单元素的值

/* 
  步骤：
    1. 导入creatRef，并创建一个ref对象。
    2. 和结构绑定
    3. 获取值

*/
class App extends Component {
  // 1.
  iptRef = createRef()
  state = {
    name: 'Tricia',
  }
  handleClick = () => {
    console.log(this.iptRef.current.value)
  }
  render() {
    console.log(this) //App组件
    return (
      <div>
        {/* 2. */}
        <input type="text" ref={this.iptRef} />
        <button onClick={this.handleClick}>按钮</button>
      </div>
    )
  }
}
const VNode = (
  <div>
    <App></App>
  </div>
)
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
