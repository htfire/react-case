import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from '../pages/Home/index'
import User from '../pages/User/index'
import City from '../pages/City/index'
import Discover from '../pages/Discover/index'
import Order from '../pages/Order/index'
import Footer from '../components/Footer'
import '../static/css/common.less'

const routerMap = () => (
  <Router>
    <div>
      <Route exact path='/' component={Home}/>
      <Route path='/my' component={User}/>
      <Route path='/discover' component={Discover}/>
      <Route path='/order' component={Order}/>
      <Switch>
        <Route path='/city/:id' component={City}/>
        <Footer/>
      </Switch>
    </div>
  </Router>
)

export default routerMap
