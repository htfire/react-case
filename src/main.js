import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import './static/css/common.less'
import RouterMap from './router/routerMap'

import configureStore from './store/store'
import BasicExample from './route-demo'
render(
  <Provider store={configureStore}>
    <RouterMap />
  </Provider>,
  // <BasicExample />,
  document.getElementById('app')
)
