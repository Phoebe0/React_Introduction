import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  // - 使用useState可以设置初始值
  // const [num, setNum] = useState(100)
  // - 也可以使用回调函数的方式设置初始值 【1. 初始值涉及到大量计算时使用 2. 初始值涉及到业务】

  // 1. 初始值涉及到大量计算时使用
  // let totalNum = 0
  // for (let i = 0; i < 200000000; i++) {
  //   totalNum++
  // }
  // console.log('执行')
  // const [num, setNum] = useState(totalNum) // 每次重新渲染都要执行
  const [num, setNum] = useState(() => {
    console.log('函数执行') // 只执行一次
    let totalNum = 0
    for (let i = 0; i < 200000000; i++) {
      totalNum++
    }
    return totalNum
  })
  //  2. 初始值涉及到业务，比如从本地缓存中取数
  const prdList = [
    {
      id: 1,
      name: '依依',
    },
    {
      id: 2,
      name: '尔尔',
    },
  ]
  localStorage.setItem('prdListObj', JSON.stringify(prdList))
  const [data] = useState(() => {
    return JSON.parse(localStorage.getItem('prdListObj')) || []
  })
  console.log(data)
  return (
    <>
      <h1>result: {num}</h1>
      <button onClick={() => setNum(num + 1)}>按钮</button>
    </>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)
