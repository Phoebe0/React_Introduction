import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import GrandPa from './GrandPa'

import Context from './Context/context'
const { Provider } = Context
export default function App() {
  const [state, setState] = useState({ name: '景元元', age: 109776 })

  const editAge = (v) => {
    setState({
      name: '景元元',
      age: state.age + v,
    })
  }
  return (
    // 使用Provider组件包裹根组件，并要提供value
    // 若要提供多个属性，可以写成对象格式
    <Provider
      value={{
        name: state.name,
        age: state.age,
        editAge: editAge,
      }}
    >
      <div>
        <h1>App</h1>
        <h3>
          提供公共数据--姓名：{state.name} -- 仙龄{state.age}
        </h3>
        <GrandPa></GrandPa>
      </div>
    </Provider>
  )
}

ReactDOM.createRoot(document.querySelector('#root')).render(<App></App>)
