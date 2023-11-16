import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
// 1. 组件被渲染，函数中的代码就会执行

function App() {
  // 多个状态的情况
  const [num, setNum] = useState(0)
  const [money, setMoney] = useState(11000)
  const [name, setName] = useState('Tricia')

  // 如果我需要在num状态发生变化时，修改网页标题为 “点击了XX次”，那么就需要用到useEffect
  /*   useEffect(() => {
    // 加了依赖项，表示只有num或者name状态变化时才执行以下代码
    console.log('effect执行')
    document.title = `
      点击了${num}次数
    `
  }, [num, name]) */

  /*  useEffect(() => {
    // 依赖为空数组，则effect只在初识化时执行一次
    console.log('effect只执行一次')
  }, []) */

  useEffect(() => {
    // 加了依赖项，表示num状态变化时才执行以下代码
    console.log('effect执行')
  }, [num])
  useEffect(() => {
    // 加了依赖项，表示name状态变化时才执行以下代码
    console.log('effect执行')
  }, [name])
  return (
    <div>
      <h1>
        num - {num}
        {/* 2. 更新状态时： 拿到状态更新的上一次的最新的值*/}
        <button onClick={() => setNum(num + 1)}>加1</button>
      </h1>

      <h1>
        money- {money}
        {/* 2. 更新状态时： 拿到状态更新的上一次的最新的值*/}
        <button onClick={() => setMoney(money + 100)}>加100</button>
      </h1>

      <h1>
        name - {name}
        {/* 2. 更新状态时： 拿到状态更新的上一次的最新的值*/}
        <button onClick={() => setName('cony')}>改名</button>
      </h1>
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)
