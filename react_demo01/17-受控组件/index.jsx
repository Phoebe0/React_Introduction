/*
 * @Author: Tricia
 * @Date: 2022-08-16 16:26:51
 * @Description:修改状态
 */
// 1. 导包
import React from 'react'
import ReactDom from 'react-dom/client'

// 表单元素，受控组件就是将状态和输入框的值绑定
// 输入框中的值修改之后，反向绑定到状态中。
class App extends React.Component {
  state = {
    name: 'Tricia',
    isAgree: true,
  }
  changeHandle = (e) => {
    // 将输入的值同步给state中的name\
    // 1. 得到输入的值
    console.log(e.target.value)
    // 2. 修改state中的值
    this.setState({
      name: e.target.value,
    })
  }
  changeChecked = () => {
    this.setState({
      isAgree: !this.state.isAgree,
    })
  }
  render() {
    console.log(this) //App组件
    return (
      <div>
        <input value={this.state.name} onChange={this.changeHandle} />
        <input
          type="checkbox"
          checked={this.state.isAgree}
          onChange={this.changeChecked}
        />
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
