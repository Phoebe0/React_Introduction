import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store'
import user from './store/modules/user'
import { Provider, useSelector, useDispatch } from 'react-redux'
export default function App() {
  const all = useSelector((state) => state)
  const dispatch = useDispatch()
  console.log(all)
  return (
    <>
      <h1>hi -- {all.user.name}</h1>
      {/* 触发 user模块里面的actions */}
      <button onClick={() => dispatch(user.actions.changeName('茉莉'))}>
        改名儿
      </button>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
)
