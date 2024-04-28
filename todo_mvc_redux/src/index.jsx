import ReactDOM from 'react-dom/client'
import App from './App'
import store from './store/index'
import { Provider } from 'react-redux'
import './styles/base.css'
import './styles/index.css'

// 渲染UI界面
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
)
