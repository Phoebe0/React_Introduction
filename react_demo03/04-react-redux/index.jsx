import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store/index'
import Son from './Son'
// 1. 提供仓库数据
import { Provider, useSelector, useDispatch } from 'react-redux'
import { add, add1, sub } from './store/actions'
function App() {
  // 3. 使用useSelector()这个hook来获取状态
  // 使用useDispatch() 来 修改状态
  const myState = useSelector((state) => state)
  const dispatch = useDispatch()
  return (
    <>
      <h3>hi</h3>
      <h5>薪水:{myState.money}</h5>
      <h5>职级:{myState.level}</h5>
      <h5>体重:{myState.weight}</h5>

      <button onClick={() => dispatch(add(1000))}>薪水涨</button>
      <button onClick={() => dispatch(add1(1))}>职级涨</button>
      <button onClick={() => dispatch(sub(0.5))}>体重减</button>
      <Son></Son>
    </>
  )
}
// 2. 用Provider包裹根组件，并提供store值
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
)
