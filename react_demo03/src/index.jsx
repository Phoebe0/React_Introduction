import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store/index'
import { add, add1, sub } from './store/actions'
function App() {
  const myState = store.getState()
  return (
    <>
      <h3>hi</h3>
      <h5>薪水:{myState.money}</h5>
      <h5>职级:{myState.level}</h5>
      <h5>体重:{myState.weight}</h5>

      <button onClick={() => store.dispatch(add(1000))}>薪水涨</button>
      <button onClick={() => store.dispatch(add1(1))}>职级涨</button>
      <button onClick={() => store.dispatch(sub(0.5))}>体重减</button>
    </>
  )
}
store.subscribe(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)
})

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)
