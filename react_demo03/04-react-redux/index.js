import React from 'react'
import ReactDOM from 'react-dom/client'
import store from '../src/store/index'
// 提供仓库数据
import { Provider } from 'react-redux'
function App() {
  return (
    <>
      <h3>hi</h3>
    </>
  )
}
ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.querySelector('#root')
)
