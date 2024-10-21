import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'

export default function App() {
  return (
    <div>
      <h1>TS项目根组件</h1>
      <Router>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/about">关于</Link>
          </li>
        </ul>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
      </Router>
    </div>
  )
}
