import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store/index'
import Son from './Son'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { add, add1, sub } from './store/actions'
function App() {
  // all 是合并之后的所有状态
  const all = useSelector((state) => state)
  console.log(all)
  const dispatch = useDispatch()
  return (
    <>
      <h3>hi</h3>
      <h5>薪水:{all.moneyReducer.money}</h5>
      <h5>体重:{all.weightReducer.weight}</h5>
      <h5>职级:{all.levelReducer.level}</h5>

      <button onClick={() => dispatch(add(1000))}>薪水涨</button>
      <button onClick={() => dispatch(add1(1))}>职级涨</button>
      <button onClick={() => dispatch(sub(0.5))}>体重减</button>
      <Son></Son>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
)
