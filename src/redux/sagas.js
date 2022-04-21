import { call, put, takeEvery } from 'redux-saga/effects'
import { hideLoader, showAlert, showLoader } from './actions'
import { FETCH_POSTS, REQUEST_POSTS } from './types'

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker() {
  try {
    // put === dispatch
    yield put(showLoader())
    // call == await result
    const payload = yield call(loadPosts)
    yield put({ type: FETCH_POSTS, payload })
    yield put(hideLoader())
  } catch (err) {
    yield put(showAlert('api error' + err, 5000))
    yield put(hideLoader())
  }
}

async function loadPosts() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  )
  return await response.json()
}
