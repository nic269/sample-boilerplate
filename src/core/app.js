// Needed for redux-saga es6 generator support
import '@babel/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import 'antd/lib/style/themes/default.less'
import 'antd/dist/antd.less'

import Application from './pages/application/application'

// Utils
import history from './utils/history/history'
import configureStore from './configure-store'

const initialState = {}
const store = configureStore(initialState, history)
const ROOT_ELEMENT = document.querySelector('#root')
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Application />
      </ConnectedRouter>
    </Provider>,
    ROOT_ELEMENT,
  )
}

if (module.hot) {
  // Hot reloadable React components files
  module.hot.accept('./pages/application/application', () => {
    ReactDOM.unmountComponentAtNode(ROOT_ELEMENT)
    render()
  })
}

render()
