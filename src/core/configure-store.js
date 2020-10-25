import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import _get from 'lodash/get'

import sagas from './sagas'
import createReducer from './reducers'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState = {}, history) {
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ]
  /* eslint-disable no-underscore-dangle, lodash/prefer-lodash-typecheck */
  const devTools = process.env.NODE_ENV !== 'production' && typeof _get(window, '__REDUX_DEVTOOLS_EXTENSION__') === 'function' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f

  const store = createStore(
    createReducer(history),
    initialState,
    compose(
      applyMiddleware(...middlewares),
      devTools,
    )
  )
  sagaMiddleware.run(sagas)

  return store
}
