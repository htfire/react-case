import React from 'react'
import ReactDOM from 'react-dom'

import './static/css/common.less'

import Home from './pages/Home'

import RouterMap from './router/routerMap'

ReactDOM.render(
  <RouterMap />,
  document.getElementById('app')
)
