// 使用hooks为函数组件提供状态 - useState
// 1. 导入useState
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  // 2. 调用useState得到 状态 和 更新状态的方法
  const res = useState(9) // 结果是数组：第0项是状态初始值，第1项是设置状态的方法。
  const num = res[0] // 状态初始值
  const setNum = res[1] // 方法
  const res2 = useState('Tricia')
  // const name = res2[0]
  // const setName = res2[1]
  // ⚠️ 可以使用数组解构的方式获取状态和方法
  const [m_name, setName] = res2
  const res3 = useState({ name: '脆脆', age: 23 })
  const [me, setMe] = res3
  return (
    <div>
      <h1>
        我是App - {num}
        {/* 3. 使用状态和方法 */}
        <button onClick={() => setNum(num + 1)}>改</button>
      </h1>
      <h2>
        {m_name}
        <button onClick={() => setName('cony')}>改</button>
      </h2>
      <h3>
        {me.age}
        {/* 遵循状态不可变原则 */}
        <button onClick={() => setMe({ ...me, age: me.age + 1 })}>
          改年龄
        </button>
      </h3>
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)
