import { all, fork } from 'redux-saga/effects'

import homeSaga from './pages/home/saga'

function* sagas() {
  yield all([
    fork(homeSaga),
  ])
}

export default sagas
