import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Home from '../pages/Home/index'
import User from '../pages/User/index'
import City from '../pages/City/index'

const routerMap = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/user" component={User} />
            <Route path="/city/:id" component={City} />
        </div>

    </Router>
)

export default routerMap