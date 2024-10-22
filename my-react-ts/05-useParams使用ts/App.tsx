import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Blog from './views/Blog'

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
            <Link to="/blog/1">博客-1</Link>
            <Link to="/blog/2">博客-2</Link>
            <Link to="/blog/3">博客-3</Link>
          </li>
          <li>
            <Link to="/about">关于</Link>
          </li>
        </ul>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/blog/:id" component={Blog} />
      </Router>
    </div>
  )
}
