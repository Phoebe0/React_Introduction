import React from 'react'
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import './css/index.css'
export default function App() {
  return (
    <div>
      <h1>App根组件</h1>
      <BrowserRouter>
        <NavLink to="/" exact>
          首页
        </NavLink>
        <NavLink to="/about" activeClassName="aboutCurrent">
          关于
        </NavLink>
        <Route path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </BrowserRouter>
    </div>
  )
}
