import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import GrandPa from './GrandPa'

import Context from './Context/context'
const { Provider } = Context

export default class App extends Component {
  state = {
    name: '景元元',
    age: 109776,
  }
  editAge = (v) => {
    this.setState({
      age: this.state.age + v,
    })
  }
  render() {
    return (
      // 使用Provider组件包裹根组件，并要提供value
      // 若要提供多个属性，可以写成对象格式
      <Provider
        value={{
          name: this.state.name,
          age: this.state.age,
          editAge: this.editAge,
        }}
      >
        <div>
          <h1>App</h1>
          <h3>
            提供公共数据--姓名：{this.state.name} -- 仙龄{this.state.age}
          </h3>
          <GrandPa></GrandPa>
        </div>
      </Provider>
    )
  }
}

ReactDOM.createRoot(document.querySelector('#root')).render(<App></App>)
