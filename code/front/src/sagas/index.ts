import { all } from 'redux-saga/effects'
const sagasModules = [
]

export default function* rootSaga() {
  yield all([
    ...sagasModules,
  ])
}