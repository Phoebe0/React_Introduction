import React from 'react'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'
import AboutYou from './AboutYou'
import AboutI from './AboutI'
import NotFound from './NotFound'
export default function About() {
  return (
    <div>
      <p>About</p>
      {/*注意：这里不用套Router，整个路由中套一次就行 */}
      <NavLink to="/about/about_u" activeClassName="active">
        About_You
      </NavLink>
      <NavLink to="/about/about_i">About_I</NavLink>
      <Switch>
        {/* Redirect组件，在用户访问 /about 路径时自动将其重定向到 /about/about_u 路径。*/}
        <Redirect to="/about/about_u"></Redirect>
        <Route path="/about" exact component={AboutYou}></Route>
        <Route path="/about/about_u" component={AboutYou}></Route>
        <Route path="/about/about_i" component={AboutI}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  )
}
