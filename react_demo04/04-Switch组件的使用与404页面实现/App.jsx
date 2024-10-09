import React from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import NotFound from './views/NotFound'
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
        <NavLink to="/404" exact>
          404
        </NavLink>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          {/* 匹配是从上到下匹配的，所以404页面必须放在最后。这样其他的path没有匹配到的话就展示404 */}
          <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
