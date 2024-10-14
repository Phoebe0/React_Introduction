import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'
import Home from './views/Home'
import Article from './views/Article'

import './css/index.css'
export default function App() {
  return (
    <div>
      <h1>App根组件</h1>
      <Router>
        <NavLink to="/" exact>
          首页
        </NavLink>
        <NavLink to="/article/1" activeClassName="aboutCurrent">
          文章1
        </NavLink>
        <NavLink to="/article/2" activeClassName="aboutCurrent">
          文章2
        </NavLink>
        <NavLink to="/article/3" activeClassName="aboutCurrent">
          文章3
        </NavLink>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/article/:id" component={Article} exact></Route>
        </Switch>
      </Router>
    </div>
  )
}
