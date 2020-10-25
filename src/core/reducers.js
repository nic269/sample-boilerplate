
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import homeReducer from './pages/home/reducer'

const reducers = {
  ...homeReducer,
}

export default function createReducer(history) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    ...reducers,
  })

  return rootReducer
}
